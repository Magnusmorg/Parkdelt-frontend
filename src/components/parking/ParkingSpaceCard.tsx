import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Shield, Star, Car, Calendar } from 'lucide-react';
import { ParkingSpace } from '../../types/ParkingSpace';

interface ParkingSpaceCardProps {
  space: ParkingSpace;
}

const ParkingSpaceCard: React.FC<ParkingSpaceCardProps> = ({ space }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-shadow hover:shadow-md">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 relative">
          <img 
            src={space.images[0]} 
            alt={`Parkeringsplads ved ${space.address}`}
            className="h-48 md:h-full w-full object-cover"
          />
          {space.features.includes('covered') && (
            <span className="absolute top-2 left-2 bg-blue-800 text-white text-xs px-2 py-1 rounded">
              Overdækket
            </span>
          )}
        </div>
        
        <div className="p-4 md:w-2/3">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{space.title}</h3>
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="ml-1 text-sm font-medium">{space.rating}</span>
              <span className="ml-1 text-xs text-gray-500">({space.reviewCount})</span>
            </div>
          </div>
          
          <div className="flex items-start text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5" />
            <p className="text-sm">{space.address}</p>
          </div>
          
          <div className="flex items-center text-gray-600 mb-3">
            <Clock className="h-4 w-4 mr-1" />
            <p className="text-sm">Tilgængelig {space.availabilityText}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {space.features.includes('ev-charger') && (
              <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                EV-oplader
              </span>
            )}
            {space.features.includes('security') && (
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                Sikkerhedskamera
              </span>
            )}
            {space.features.includes('private-driveway') && (
              <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                Privat indkørsel
              </span>
            )}
            {space.features.includes('garage') && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                Garage
              </span>
            )}
          </div>
          
          <div className="flex justify-between items-end">
            <div>
              <p className="text-2xl font-bold text-blue-800">
                {space.pricePerHour} kr
                <span className="text-sm font-normal text-gray-600">/time</span>
              </p>
              <p className="text-xs text-gray-500">Ingen gebyrer</p>
            </div>
            
            <Link 
              to={`/space/${space.id}`}
              className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Se detaljer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingSpaceCard;