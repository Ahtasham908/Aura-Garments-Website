
import React from 'react';
import { StarIcon } from './icons/Icons';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex items-center">
      {[...Array(maxRating)].map((_, index) => (
        <StarIcon
          key={index}
          className={`w-5 h-5 ${
            index < rating ? 'text-yellow-400' : 'text-stone-300'
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;
