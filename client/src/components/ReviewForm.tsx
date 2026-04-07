import { useState } from "react";

const API = "http://localhost:5000/api";

const ReviewForm = ({ onSuccess }: any) => {
  const [form, setForm] = useState({
    name: "",
    role: "",
    text: "",
    rating: 5,
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/reviews/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      alert(data.message);

      setForm({ name: "", role: "", text: "", rating: 5 });

      if (onSuccess) onSuccess(); // 🔥 refresh testimonials

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow rounded mt-10">
      <h2 className="text-xl font-bold mb-4">Leave a Review</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-2"
          required
        />

        <input
          type="text"
          placeholder="Your Role"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full border p-2"
          required
        />

        <textarea
          placeholder="Your Review"
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
          className="w-full border p-2"
          required
        />

        <select
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: Number(e.target.value) })}
          className="w-full border p-2"
        >
          <option value={5}>5 Star</option>
          <option value={4}>4 Star</option>
          <option value={3}>3 Star</option>
          <option value={2}>2 Star</option>
          <option value={1}>1 Star</option>
        </select>

        <button className="bg-orange-500 text-white px-4 py-2 w-full">
          Submit Review
        </button>

      </form>
    </div>
  );
};

export default ReviewForm;