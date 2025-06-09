
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/booking/BookingForm';
import { mockParkingSpaces } from '../data/mockData';
import { ParkingSpace } from '../types/ParkingSpace';

const SpaceDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [space, setSpace] = useState<ParkingSpace | null>(null);

  useEffect(() => {
    const foundSpace = mockParkingSpaces.find((s) => s.id === id);
    if (foundSpace) {
      setSpace(foundSpace);
    }
  }, [id]);

  if (!space) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Indlæser parkeringsplads...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">{space.title}</h1>
        <p className="text-gray-700 mb-2">{space.address}</p>
        <p className="text-gray-600 mb-4">{space.description}</p>

        {/* Booking form */}
        <BookingForm spaceId={space.id} />

        {/* Simple info card */}
        <div className="mt-8 p-4 border rounded shadow">
          <p><strong>Pris/time:</strong> {space.pricePerHour} kr</p>
          <p><strong>Rating:</strong> {space.rating} ⭐ ({space.reviewCount} anmeldelser)</p>
        </div>
      </div>
    </>
  );
};

export default SpaceDetailsPage;
