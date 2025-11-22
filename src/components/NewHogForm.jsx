import React, { useState } from "react";

function NewHogForm({ onAddHog }) {
  const [form, setForm] = useState({
    name: "",
    weight: "",
    specialty: "",
    greased: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog({
      name: form.name,
      weight: parseFloat(form.weight),
      specialty: form.specialty,
      greased: form.greased,
      "highest medal achieved": "none",
      image: "https://via.placeholder.com",
    });
    
    //Reset form
    setForm({
      name: "",
      weight: "",
      specialty: "",
      greased: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="ui form">
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" value={form.name} onChange={handleChange} />

      <label htmlFor="weight">Weight:</label>
      <input
        id="weight"
        name="weight"
        value={form.weight}
        onChange={handleChange}
      />

      <label htmlFor="specialty">Specialty:</label>
      <input
        id="specialty"
        name="specialty"
        value={form.specialty}
        onChange={handleChange}
      />

      <label htmlFor="greased">Greased?</label>
      <input
        id="greased"
        name="greased"
        type="checkbox"
        checked={form.greased}
        onChange={handleChange}
      />

      <button className="ui pink button" type="submit">
        Add Hog
      </button>
    </form>
  );
}

export default NewHogForm;