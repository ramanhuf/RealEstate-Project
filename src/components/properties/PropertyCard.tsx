
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, Bed, Bath, Move, Ban } from "lucide-react";
import { Property } from "@/lib/types";
import { formatPrice, isPropertyFavorite, addToFavorites, removeFromFavorites } from "@/lib/utils";
import { toast } from "sonner";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);

  useEffect(() => {
    setIsFavorite(isPropertyFavorite(property.id));
  }, [property.id]);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      removeFromFavorites(property.id);
      setIsFavorite(false);
      toast.success("Property removed from favorites");
    } else {
      addToFavorites(property.id);
      setIsFavorite(true);
      toast.success("Property added to favorites");
    }
  };

  const handleImageError = () => {
    setImageLoaded(false);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Link to={`/properties/${property.id}`}>
          {imageLoaded ? (
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-56 object-cover"
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
              <Ban className="h-10 w-10 text-gray-400" />
              <span className="ml-2 text-gray-500">Image not available</span>
            </div>
          )}
        </Link>
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 p-2 rounded-full ${
            isFavorite ? "bg-red-500 text-white" : "bg-white text-gray-600"
          } shadow-md hover:scale-105 transition-transform duration-200`}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-white" : ""}`} />
        </button>
      </div>

      <div className="p-4">
        <Link to={`/properties/${property.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 hover:text-estate-primary transition-colors mb-1">
            {property.title}
          </h3>
        </Link>
        <p className="text-estate-primary font-bold text-xl mb-2">{formatPrice(property.price)}</p>
        <p className="text-gray-600 mb-3 flex items-center">
          <span>{property.location}</span>
        </p>

        <div className="flex justify-between text-gray-600 border-t pt-3">
          <div className="flex items-center">
            <Bed className="h-4 w-4 mr-1" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Move className="h-4 w-4 mr-1" />
            <span>{property.squareFeet} sq ft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
