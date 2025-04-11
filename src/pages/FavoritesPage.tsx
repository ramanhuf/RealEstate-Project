
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Property } from "@/lib/types";
import { properties } from "@/lib/data";
import { getFavoritesFromStorage, removeFromFavorites } from "@/lib/utils";
import PropertyCard from "@/components/properties/PropertyCard";
import PageContainer from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { toast } from "sonner";

const FavoritesPage = () => {
  const [favoriteProperties, setFavoriteProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = () => {
      setLoading(true);
      const favoriteIds = getFavoritesFromStorage();
      const favorites = properties.filter(property => favoriteIds.includes(property.id));
      setFavoriteProperties(favorites);
      setLoading(false);
    };

    loadFavorites();
    
    // Add event listener for storage changes
    window.addEventListener('storage', loadFavorites);
    
    return () => {
      window.removeEventListener('storage', loadFavorites);
    };
  }, []);

  const handleRemoveFromFavorites = (propertyId: string) => {
    removeFromFavorites(propertyId);
    setFavoriteProperties(prev => prev.filter(property => property.id !== propertyId));
    toast.success("Property removed from favorites");
    
    // Trigger storage event for other tabs
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <PageContainer>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Favorite Properties</h1>
        <p className="text-gray-600 mb-8">Manage your saved properties in one place.</p>

        {loading ? (
          // Loading state
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 h-56 rounded-t-lg"></div>
                <div className="bg-white p-4 rounded-b-lg">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                </div>
              </div>
            ))}
          </div>
        ) : favoriteProperties.length > 0 ? (
          // Favorite properties grid
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {favoriteProperties.map(property => (
              <div key={property.id} className="relative">
                <PropertyCard property={property} />
                <button
                  onClick={() => handleRemoveFromFavorites(property.id)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-red-500 text-white shadow-md hover:bg-red-600 transition-colors"
                  aria-label="Remove from favorites"
                >
                  <Heart className="h-5 w-5 fill-white" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          // Empty state
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
              <Heart className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No Favorite Properties Yet</h3>
            <p className="text-gray-600 mb-6">
              Browse our properties and click the heart icon to add properties to your favorites.
            </p>
            <Button className="bg-estate-primary hover:bg-estate-accent text-white" asChild>
              <Link to="/properties">Browse Properties</Link>
            </Button>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default FavoritesPage;
