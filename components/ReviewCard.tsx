
import React from 'react';
import type { Review } from '../types';
import StarRating from './StarRating';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white p-8 border border-stone-200 h-full flex flex-col">
      <div className="flex-grow">
        <StarRating rating={review.rating} />
        <p className="mt-4 text-stone-600 italic">"{review.text}"</p>
      </div>
      <div className="flex items-center mt-6">
        <img src={review.avatarUrl} alt={review.customerName} className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-4">
          <p className="font-semibold text-stone-800">{review.customerName}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
