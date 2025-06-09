
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function authHeaders() {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

// PARKING
export async function getParkingSpots() {
  const res = await fetch(`${API_URL}/api/parking`);
  if (!res.ok) throw new Error('Kunne ikke hente parkeringspladser');
  return res.json();
}

export async function getParkingSpot(id: string) {
  const res = await fetch(`${API_URL}/api/parking/${id}`);
  if (!res.ok) throw new Error('Kunne ikke hente parkeringsplads');
  return res.json();
}

export async function createParkingSpot(data: any) {
  const res = await fetch(`${API_URL}/api/parking`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Kunne ikke oprette parkeringsplads');
  return res.json();
}

// BOOKING
export async function createBooking(bookingData: any) {
  const res = await fetch(`${API_URL}/api/booking`, {
    method: 'POST',
    headers: authHeaders(),
    body: JSON.stringify(bookingData),
  });
  if (!res.ok) throw new Error('Kunne ikke oprette booking');
  return res.json();
}

export async function confirmPayment(bookingId: string) {
  const res = await fetch(`${API_URL}/api/booking/${bookingId}/pay`, {
    method: 'PATCH',
    headers: authHeaders(),
  });
  if (!res.ok) throw new Error('Kunne ikke bekræfte betaling');
  return res.json();
}
