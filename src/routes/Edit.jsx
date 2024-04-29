import React from "react";
import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { updateContact } from "../contacts";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

const EditContact = () => {
  const { contact } = useLoaderData();
  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          type="text"
          name="first"
          placeholder="First"
          aria-label="First name"
          defaultValue={contact?.first}
        />
        <input
          type="text"
          name="last"
          placeholder="Last"
          aria-label="Last name"
          defaultValue={contact?.last}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact?.twitter}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          type="text"
          name="avatar"
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          defaultValue={contact?.twitter}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          rows="6"
          defaultValue={contact?.notes}
        ></textarea>
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button" onClick={() => navigate(-1)}>
          Cancel
        </button>
      </p>
    </Form>
  );
};

export default EditContact;
