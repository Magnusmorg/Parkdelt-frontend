
import { useState } from 'react';
import { createBooking } from '../../api';

export default function BookingForm({ spaceId }: { spaceId: string }) {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);

    try {
      // Create booking in backend (optional step, can be moved after payment)
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/checkout/session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ parkingSpotId: spaceId, startTime, endTime }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Noget gik galt');

      window.location.href = data.url; // Redirect to Stripe Checkout
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded shadow max-w-md">
      <h2 className="text-xl font-bold mb-2">Book og betal</h2>

      <label className="block mb-1">Starttidspunkt</label>
      <input
        type="datetime-local"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />

      <label className="block mb-1">Sluttidspunkt</label>
      <input
        type="datetime-local"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />

      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        disabled={isLoading}
      >
        {isLoading ? 'Sender til Stripe...' : 'Gå til betaling'}
      </button>

      {message && <p className="mt-2 text-sm text-red-600">{message}</p>}
    </form>
  );
}
