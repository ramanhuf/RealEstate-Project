
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Building, Home, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { properties } from "@/lib/data";
import PropertyCard from "@/components/properties/PropertyCard";
import PageContainer from "@/components/layout/PageContainer";
import { formatPrice } from "@/lib/utils";

const HomePage = () => {
  const navigate = useNavigate();
  // Get featured properties (first 3)
  const featuredProperties = properties.slice(0, 3);
  
  // Search form state
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  
  // Handle search form submission
  const handleSearch = () => {
    const params = new URLSearchParams();
    
    if (location) {
      params.append("location", location);
    }
    
    if (propertyType) {
      params.append("type", propertyType);
    }
    
    navigate({
      pathname: "/properties",
      search: params.toString()
    });
  };

  return (
    <PageContainer>
      {/* Hero Section */}
      <section className="relative bg-estate-primary text-white pb-8">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=1600&auto=format&fit=crop"
            alt="Luxury home"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-20 pt-20 pb-20 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Find Your Dream Property
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Discover the perfect property that fits your lifestyle and budget. Your journey to finding a new home starts here.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-estate-secondary hover:bg-yellow-500 text-estate-dark font-semibold text-lg" size="lg" asChild>
                <Link to="/properties">Browse Properties</Link>
              </Button>
              <Button variant="outline" className="border-white text-estate-primary hover:bg-white hover:text-estate-primary font-semibold text-lg" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white rounded-lg shadow-lg p-6 -mb-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter city, area or neighborhood"
                    className="pl-10 w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary text-gray-700"
                  />
                </div>
              </div>
              <div className="md:w-1/4">
                <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">
                  Property Type
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <select
                    id="property-type"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="pl-10 w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary appearance-none text-gray-700"
                  >
                    <option value="">Any Type</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="villa">Villa</option>
                    <option value="condo">Condo</option>
                  </select>
                </div>
              </div>
              <div className="w-full md:w-fit md:flex-none self-end">
                <Button 
                  className="w-full md:w-auto bg-estate-primary hover:bg-estate-accent text-white"
                  onClick={handleSearch}
                >
                  <Search className="h-5 w-5 " />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of the finest properties currently available on the market.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="text-estate-primary border-estate-primary hover:bg-estate-primary hover:text-white">
              <Link to="/properties">View All Properties</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive real estate services to help you at every step of your journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-estate-primary bg-opacity-10 rounded-full p-4 inline-flex mb-4">
                <Home className="h-8 w-8 text-estate-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Buy Property</h3>
              <p className="text-gray-600 mb-4">
                Find your perfect home from our extensive collection of properties. Our experts will guide you through the buying process.
              </p>
              <Button variant="link" className="text-estate-primary" asChild>
                <Link to="/properties">Browse Properties</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-estate-primary bg-opacity-10 rounded-full p-4 inline-flex mb-4">
                <Building className="h-8 w-8 text-estate-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sell Property</h3>
              <p className="text-gray-600 mb-4">
                List your property with us and get access to qualified buyers. We'll help you maximize your property's value.
              </p>
              <Button variant="link" className="text-estate-primary" asChild>
                <Link to="/contact">Contact Sales Team</Link>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-estate-primary bg-opacity-10 rounded-full p-4 inline-flex mb-4">
                <User className="h-8 w-8 text-estate-primary" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Property Consultation</h3>
              <p className="text-gray-600 mb-4">
                Our real estate experts provide personalized consultations to help you make informed decisions.
              </p>
              <Button variant="link" className="text-estate-primary" asChild>
                <Link to="/agents">Meet Our Agents</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listing Highlight */}
      <section className="py-16 bg-estate-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Featured Luxury Property</h2>
              <h3 className="text-xl text-estate-secondary mb-2">{properties[0].title}</h3>
              <p className="mb-6 text-gray-200">{properties[0].description}</p>
              
              <div className="flex gap-8 mb-6">
                <div>
                  <span className="block text-estate-secondary font-bold text-lg">Price</span>
                  <span className="text-white text-xl">{formatPrice(properties[0].price)}</span>
                </div>
                <div>
                  <span className="block text-estate-secondary font-bold text-lg">Location</span>
                  <span className="text-white text-xl">{properties[0].location}</span>
                </div>
              </div>
              
              <Button className="bg-estate-secondary hover:bg-yellow-500 text-estate-dark" asChild>
                <Link to={`/properties/${properties[0].id}`}>View Details</Link>
              </Button>
            </div>
            
            <div className="relative">
              <img
                src={properties[0].images[0]}
                alt={properties[0].title}
                className="rounded-lg shadow-lg w-full"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop";
                }}
              />
              <div className="absolute -bottom-4 -left-4 bg-estate-secondary text-estate-dark p-4 rounded shadow-lg">
                <span className="block font-bold text-lg">Exclusive Offer</span>
                <span>Limited Time Only</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our satisfied clients who found their dream properties with us.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&auto=format&fit=crop"
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Robert Johnson</h4>
                  <p className="text-gray-600 text-sm">Home Buyer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The team at PropertyHaven made finding our dream home a breeze. They understood our needs and showed us properties that perfectly matched our criteria. Highly recommended!"
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop"
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Lisa Martinez</h4>
                  <p className="text-gray-600 text-sm">Property Seller</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I sold my property through PropertyHaven and the process was smooth and efficient. They found qualified buyers quickly and helped me get the best price for my home."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop"
                    alt="Client"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Michael Chen</h4>
                  <p className="text-gray-600 text-sm">First-time Buyer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "As a first-time buyer, I had many questions and concerns. The agents at PropertyHaven were patient and knowledgeable, guiding me through every step of the process."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-estate-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team of professionals today and take the first step towards finding your perfect home.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-estate-secondary hover:bg-yellow-500 text-estate-dark font-semibold text-lg" size="lg" asChild>
              <Link to="/properties">Browse Properties</Link>
            </Button>
            <Button variant="outline" className="border-white text-estate-primary hover:bg-white hover:text-estate-accent font-semibold text-lg" size="lg" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default HomePage;
