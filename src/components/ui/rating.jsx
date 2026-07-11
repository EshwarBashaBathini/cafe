import {
  Star,
  StarHalf,
} from "@phosphor-icons/react";

const Rating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        if (rating >= star) {
          return (
            <Star
              key={star}
              weight="fill"
              className="text-orange-500"
              size={20}
            />
          );
        }

        if (rating >= star - 0.5) {
          return (
            <StarHalf
              key={star}
              weight="fill"
              className="text-orange-500"
              size={20}
            />
          );
        }

        return (
          <Star
            key={star}
            className="text-gray-300"
            size={20}
          />
        );
      })}
    </div>
  );
};

export default Rating;
