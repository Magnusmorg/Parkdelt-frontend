// src/pages/FindSpacePage.tsx
import { useState, useEffect } from 'react';
import ParkingSpaceCard from '../components/parking/ParkingSpaceCard';
import ParkingMap from '../components/parking/ParkingMap';
import { ParkingSpace } from '../types/ParkingSpace';

export default function FindSpacePage() {
  const [showMap, setShowMap] = useState(true);
  const [spaces, setSpaces] = useState<ParkingSpace[]>([]);

  // === HENT DATA FRA BACKEND ===
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/spaces`)
      .then(r => r.json())
      .then(data => {
        // copy _id → id så UI'et har et key‑felt
        const fixed = data.map((s: any) => ({ ...s, id: s._id }));
        setSpaces(fixed);
      })
      .catch(console.error);
  }, []);

  /* ---------- UI ---------- */
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          Fundet {spaces.length} parkeringspladser
        </h1>
        <button
          className="px-3 py-1 rounded bg-blue-700 text-white"
          onClick={() => setShowMap(!showMap)}
        >
          {showMap ? 'Skjul kort' : 'Vis kort'}
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Liste */}
        <div className={`${showMap ? 'md:w-1/2' : 'w-full'} space-y-4`}>
          {spaces.map(space => (
            <ParkingSpaceCard key={space.id} space={space} />
          ))}
        </div>

        {/* Kort */}
        {showMap && (
          <div className="md:w-1/2 sticky top-24">
            <ParkingMap spaces={spaces} />
          </div>
        )}
      </div>
    </div>
  );
}
