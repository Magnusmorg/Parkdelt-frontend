import React from 'react';
import { MapPin } from 'lucide-react';
import { ParkingSpace } from '../../types/ParkingSpace';

interface ParkingMapProps {
  spaces: ParkingSpace[];
}

const ParkingMap: React.FC<ParkingMapProps> = ({ spaces }) => {
  // Note: In a real implementation, this would use a maps API like Google Maps or Mapbox
  // For now, we'll use a placeholder
  
  return (
    <div className="relative h-96 bg-blue-50 rounded-lg overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-50 bg-map-pattern"></div>
      
      {/* This would be replaced with actual map implementation */}
      <div className="relative z-10 text-center">
        <p className="text-gray-800 mb-4">
          I en rigtig implementering ville der være et interaktivt kort her med {spaces.length} markører for parkeringspladser.
        </p>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-800 text-white animate-pulse">
          <MapPin className="h-6 w-6" />
        </div>
      </div>
      
      {/* In real implementation, markers would be placed based on coordinates */}
      <div className="absolute bottom-4 right-4 bg-white p-3 rounded-lg shadow-md">
        <p className="text-sm font-medium text-gray-900">Vist område: Aarhus C</p>
        <p className="text-xs text-gray-600">Zoom ind for flere detaljer</p>
      </div>
    </div>
  );
};

export default ParkingMap;