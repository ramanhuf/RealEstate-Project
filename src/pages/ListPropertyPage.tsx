
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Building, Home, Upload, Bed, Bath, Square, MapPin } from "lucide-react";
import { toast } from "sonner";
import PageContainer from "@/components/layout/PageContainer";

const propertyTypes = [
  { value: "house", label: "House" },
  { value: "apartment", label: "Apartment" },
  { value: "condo", label: "Condo" },
  { value: "villa", label: "Villa" },
  { value: "land", label: "Land" },
  { value: "commercial", label: "Commercial" },
];

const ListPropertyPage = () => {
  const [images, setImages] = useState<File[]>([]);
  const [imagesPreviews, setImagesPreviews] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      
      // Limit to 5 images
      const newFiles = filesArray.slice(0, 5 - images.length);
      
      // Create preview URLs
      const newPreviews = newFiles.map(file => URL.createObjectURL(file));
      
      setImages([...images, ...newFiles]);
      setImagesPreviews([...imagesPreviews, ...newPreviews]);
    }
  };

  const removeImage = (index: number) => {
    const newImages = [...images];
    const newPreviews = [...imagesPreviews];
    
    // Revoke the URL to avoid memory leaks
    URL.revokeObjectURL(newPreviews[index]);
    
    newImages.splice(index, 1);
    newPreviews.splice(index, 1);
    
    setImages(newImages);
    setImagesPreviews(newPreviews);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Property submitted successfully! Our team will review it shortly.");
    // In a real app, you would send the form data to a server here
  };

  return (
    <PageContainer>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">List Your Property</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete the form below to list your property. Our team will review your listing and make it live on our platform.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-lg shadow-md">
            {/* Basic Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Home className="mr-2 h-5 w-5 text-estate-primary" />
                Basic Information
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Property Title *
                  </label>
                  <Input id="title" placeholder="e.g. Modern Villa with Ocean View" required />
                </div>
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                    Price (USD) *
                  </label>
                  <Input 
                    id="price" 
                    type="number" 
                    placeholder="e.g. 250000" 
                    min="0" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="property-type" className="block text-sm font-medium text-gray-700 mb-1">
                    Property Type *
                  </label>
                  <select
                    id="property-type"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-estate-primary focus:border-estate-primary"
                    required
                  >
                    <option value="">Select property type</option>
                    {propertyTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="year-built" className="block text-sm font-medium text-gray-700 mb-1">
                    Year Built
                  </label>
                  <Input 
                    id="year-built" 
                    type="number" 
                    placeholder="e.g. 2010" 
                    min="1900" 
                    max={new Date().getFullYear()} 
                  />
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Building className="mr-2 h-5 w-5 text-estate-primary" />
                Property Details
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <label htmlFor="bedrooms" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <Bed className="mr-1 h-4 w-4" />
                    Bedrooms *
                  </label>
                  <Input 
                    id="bedrooms" 
                    type="number" 
                    placeholder="e.g. 3" 
                    min="0" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="bathrooms" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <Bath className="mr-1 h-4 w-4" />
                    Bathrooms *
                  </label>
                  <Input 
                    id="bathrooms" 
                    type="number" 
                    placeholder="e.g. 2" 
                    min="0" 
                    step="0.5" 
                    required 
                  />
                </div>
                <div>
                  <label htmlFor="square-feet" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                    <Square className="mr-1 h-4 w-4" />
                    Square Feet *
                  </label>
                  <Input 
                    id="square-feet" 
                    type="number" 
                    placeholder="e.g. 1500" 
                    min="0" 
                    required 
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <MapPin className="mr-2 h-5 w-5 text-estate-primary" />
                Location
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <Input id="address" placeholder="Full street address" required />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City *
                  </label>
                  <Input id="city" placeholder="e.g. New York" required />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                    State/Province *
                  </label>
                  <Input id="state" placeholder="e.g. NY" required />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP/Postal Code *
                  </label>
                  <Input id="zip" placeholder="e.g. 10001" required />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country *
                  </label>
                  <Input id="country" placeholder="e.g. USA" required />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Property Description *
              </label>
              <Textarea 
                id="description" 
                placeholder="Describe your property in detail. Include special features, renovations, neighborhood information, etc." 
                className="min-h-32"
                required
              />
            </div>

            {/* Property Images */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Upload className="mr-2 h-5 w-5 text-estate-primary" />
                Property Images
              </h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input 
                  type="file" 
                  id="property-images" 
                  accept="image/*" 
                  multiple 
                  className="hidden" 
                  onChange={handleImageChange}
                  disabled={images.length >= 5}
                />
                <label 
                  htmlFor="property-images" 
                  className={`cursor-pointer block ${images.length >= 5 ? 'opacity-50' : ''}`}
                >
                  <div className="mx-auto flex flex-col items-center justify-center">
                    <Upload className="h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-gray-700 font-medium">Drag & drop images or click to browse</p>
                    <p className="text-gray-500 text-sm mt-1">Upload up to 5 images (Max 5MB each)</p>
                    <p className="text-gray-500 text-sm mt-1">{5 - images.length} slots remaining</p>
                  </div>
                </label>

                {/* Image previews */}
                {imagesPreviews.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {imagesPreviews.map((preview, index) => (
                      <div key={index} className="relative">
                        <img 
                          src={preview} 
                          alt={`Property ${index + 1}`} 
                          className="h-24 w-full object-cover rounded-md"
                        />
                        <button 
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 text-xs"
                          aria-label="Remove image"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <Input id="name" placeholder="Full name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <Input id="email" type="email" placeholder="Your email address" required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <Input id="phone" placeholder="Your phone number" required />
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <Button 
                type="submit"
                className="w-full md:w-auto bg-estate-primary hover:bg-estate-accent text-white"
                size="lg"
              >
                Submit Property Listing
              </Button>
            </div>
          </form>
        </div>
      </div>
    </PageContainer>
  );
};

export default ListPropertyPage;
