
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { properties } from "@/lib/data";
import { Property } from "@/lib/types";
import { formatPrice, isPropertyFavorite, addToFavorites, removeFromFavorites } from "@/lib/utils";
import { Bed, Bath, Move, Calendar, Heart, Phone, Mail, MapPin, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import PropertyGallery from "@/components/properties/PropertyGallery";
import PageContainer from "@/components/layout/PageContainer";
import { toast } from "sonner";

const PropertyDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchProperty = () => {
      setLoading(true);
      const foundProperty = properties.find(p => p.id === id);
      setProperty(foundProperty || null);
      
      if (foundProperty) {
        setIsFavorite(isPropertyFavorite(foundProperty.id));
      }
      
      setLoading(false);
    };

    fetchProperty();
  }, [id]);

  const handleFavoriteToggle = () => {
    if (!property) return;

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

  if (loading) {
    return (
      <PageContainer>
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
            <div className="h-96 bg-gray-200 rounded mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-6"></div>
                <div className="h-32 bg-gray-200 rounded mb-6"></div>
              </div>
              <div>
                <div className="h-40 bg-gray-200 rounded mb-4"></div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    );
  }

  if (!property) {
    return (
      <PageContainer>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="bg-estate-primary hover:bg-estate-accent text-white">
            <Link to="/properties">Browse All Properties</Link>
          </Button>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center text-sm text-gray-600">
          <Link to="/" className="hover:text-estate-primary">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/properties" className="hover:text-estate-primary">Properties</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">{property.title}</span>
        </div>

        {/* Property Title and Price */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{property.title}</h1>
            <p className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              {property.address}
            </p>
          </div>
          <div className="mt-4 md:mt-0 md:text-right">
            <div className="text-3xl font-bold text-estate-primary">{formatPrice(property.price)}</div>
            <button
              onClick={handleFavoriteToggle}
              className={`mt-2 flex items-center ${isFavorite ? 'text-red-500' : 'text-gray-600'} hover:text-red-500 transition-colors md:justify-end`}
            >
              <Heart className={`h-5 w-5 mr-1 ${isFavorite ? 'fill-current' : ''}`} />
              <span>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</span>
            </button>
          </div>
        </div>

        {/* Property Gallery */}
        <PropertyGallery images={property.images} title={property.title} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Property Details */}
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Property Details</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <Bed className="h-6 w-6 text-estate-primary mb-1" />
                  <span className="text-sm text-gray-600">Bedrooms</span>
                  <span className="font-semibold text-lg">{property.bedrooms}</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <Bath className="h-6 w-6 text-estate-primary mb-1" />
                  <span className="text-sm text-gray-600">Bathrooms</span>
                  <span className="font-semibold text-lg">{property.bathrooms}</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <Move className="h-6 w-6 text-estate-primary mb-1" />
                  <span className="text-sm text-gray-600">Area</span>
                  <span className="font-semibold text-lg">{property.squareFeet} sq ft</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                  <Home className="h-6 w-6 text-estate-primary mb-1" />
                  <span className="text-sm text-gray-600">Type</span>
                  <span className="font-semibold text-lg">{property.propertyType}</span>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Description</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {property.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Property ID</h4>
                  <p className="text-gray-700">{property.id}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Property Type</h4>
                  <p className="text-gray-700">{property.propertyType}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Location</h4>
                  <p className="text-gray-700">{property.location}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Year Built</h4>
                  <p className="text-gray-700">{property.yearBuilt}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-estate-primary mr-2"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agent Information and Contact Form */}
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Listed By</h2>
              <div className="flex items-center mb-4">
                <img
                  src={property.agent.photo}
                  alt={property.agent.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop";
                  }}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{property.agent.name}</h3>
                  <p className="text-gray-600 text-sm">Real Estate Agent</p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                <div className="flex items-center text-gray-700">
                  <Phone className="h-4 w-4 mr-2 text-estate-primary" />
                  <span>{property.agent.phone}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail className="h-4 w-4 mr-2 text-estate-primary" />
                  <span>{property.agent.email}</span>
                </div>
              </div>
              <Button className="w-full bg-estate-primary hover:bg-estate-accent text-white" asChild>
                <Link to={`/contact`} state={{ agent: property.agent.name }}>
                  Contact Agent
                </Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Schedule a Viewing</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="date"
                      id="date"
                      className="pl-10 w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary"
                    placeholder="Any specific questions or requirements?"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-estate-secondary hover:bg-yellow-500 text-estate-dark">
                  Schedule Viewing
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default PropertyDetailsPage;
