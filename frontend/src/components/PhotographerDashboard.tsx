// src/components/PhotographerDashboard.tsx
import React, { useState } from 'react';

const PhotographerDashboard: React.FC = () => {
  const [event, setEvent] = useState('');
  const [price, setPrice] = useState(100);
  const [images, setImages] = useState<File[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) setImages([...images, ...Array.from(files)]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit the images and event details to the backend here
    console.log({ event, price, images });
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Upload Photos</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Name"
          className="border p-2 w-full mb-4"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price (₹)"
          className="border p-2 w-full mb-4"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          required
        />
        <input
          type="file"
          multiple
          onChange={handleImageUpload}
          className="border p-2 w-full mb-4"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 w-full rounded-md"
        >
          Upload
        </button>
      </form>
    </div>
  );
};

export default PhotographerDashboard;
