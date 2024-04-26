import React from "react";
import { Form, useLoaderData } from "react-router-dom";

const EditContact = () => {
  const { contact } = useLoaderData();

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
          placeholder="https://example.com/avatar.png"
          aria-label="Avatar URL"
          defaultValue={contact?.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea name="notes" defaultValue={contact?.notes} rows={6} />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p>
    </Form>
  );
};

export default EditContact;
