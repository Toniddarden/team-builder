import React, { useState } from "react";

const MemberList = props => {
  const [form, setForm] = useState({ name: "", email: "", role: "" });

  const handleSubmit = e => {
    e.preventDefault();
    props.addMemberName(form);
    setForm({ name: "", email: "", role: "" });
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="form">Email</label>
      <input
        id="email"
        type="textarea"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <label htmlFor="form">Role</label>
      <input
        id="role"
        type="textarea"
        name="role"
        value={form.role}
        onChange={handleChange}
      />
      <button type='submit'>Add Member</button>
    </form>
  );
};

export default MemberList;
