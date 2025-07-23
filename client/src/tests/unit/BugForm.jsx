import { useState } from 'react';
import axios from 'axios';

export default function BugForm({ onNewBug }) {
  const [form, setForm] = useState({ title: '', description: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/bugs', form);
    onNewBug(res.data);
    setForm({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Bug title" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">Report Bug</button>
    </form>
  );
}
