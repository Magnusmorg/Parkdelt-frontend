import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
  rating: number;
  type: 'Pladsejer' | 'Bilist';
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  location, 
  rating,
  type 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
        <span className={`text-xs font-medium rounded-full px-3 py-1 ${
          type === 'Pladsejer' 
            ? 'bg-teal-100 text-teal-800' 
            : 'bg-blue-100 text-blue-800'
        }`}>
          {type}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCard;