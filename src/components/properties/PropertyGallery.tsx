
import { useState } from "react";
import { ChevronLeft, ChevronRight, Ban } from "lucide-react";

interface PropertyGalleryProps {
  images: string[];
  title: string;
}

const PropertyGallery = ({ images, title }: PropertyGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState<boolean[]>(Array(images.length).fill(false));

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleImageError = (index: number) => {
    const newImageError = [...imageError];
    newImageError[index] = true;
    setImageError(newImageError);
  };

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="aspect-[16/9] overflow-hidden bg-gray-100 rounded-lg relative">
        {!imageError[currentIndex] ? (
          <img
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            onError={() => handleImageError(currentIndex)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <Ban className="h-12 w-12 text-gray-400" />
            <span className="ml-2 text-gray-500 text-lg">Image not available</span>
          </div>
        )}
        
        {/* Navigation Controls */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button 
            key={index}
            className={`relative flex-shrink-0 w-24 h-16 rounded overflow-hidden focus:outline-none ${currentIndex === index ? 'ring-2 ring-estate-primary' : ''}`}
            onClick={() => setCurrentIndex(index)}
          >
            {!imageError[index] ? (
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
                onError={() => handleImageError(index)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <Ban className="h-6 w-6 text-gray-400" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyGallery;
