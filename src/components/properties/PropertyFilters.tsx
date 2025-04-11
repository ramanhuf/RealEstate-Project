
import { useState, useEffect } from "react";
import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { locations, propertyTypes } from "@/lib/data";
import { PropertyFilter } from "@/lib/types";
import { formatPrice } from "@/lib/utils";

interface PropertyFiltersProps {
  onFilter: (filters: PropertyFilter) => void;
  initialFilters?: PropertyFilter;
}

const PropertyFilters = ({ onFilter, initialFilters = {} }: PropertyFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState<string | undefined>(initialFilters.location);
  const [propertyType, setPropertyType] = useState<string | undefined>(initialFilters.propertyType);
  const [bedrooms, setBedrooms] = useState<number | undefined>(initialFilters.bedrooms);
  const [bathrooms, setBathrooms] = useState<number | undefined>(initialFilters.bathrooms);
  const [priceRange, setPriceRange] = useState([
    initialFilters.minPrice || 0,
    initialFilters.maxPrice || 2000000
  ]);

  // Update form values when initialFilters change
  useEffect(() => {
    if (initialFilters) {
      setLocation(initialFilters.location);
      setPropertyType(initialFilters.propertyType);
      setBedrooms(initialFilters.bedrooms);
      setBathrooms(initialFilters.bathrooms);
      setPriceRange([
        initialFilters.minPrice || 0,
        initialFilters.maxPrice || 2000000
      ]);
    }
  }, [initialFilters]);

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  const resetFilters = () => {
    setLocation(undefined);
    setPropertyType(undefined);
    setBedrooms(undefined);
    setBathrooms(undefined);
    setPriceRange([0, 2000000]);
  };

  const applyFilters = () => {
    onFilter({
      location,
      propertyType,
      bedrooms,
      bathrooms,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });
  };

  useEffect(() => {
    // Auto-apply filters when they change (optional)
    if (!isOpen) {
      applyFilters();
    }
  }, [location, propertyType, bedrooms, bathrooms, priceRange, isOpen]);

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Property Listings</h2>
        <Button 
          onClick={toggleFilters}
          variant="outline"
          className="flex items-center"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filters
        </Button>
      </div>

      {isOpen && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Filters</h3>
            <Button variant="ghost" size="sm" onClick={resetFilters} className="text-gray-500">
              <X className="h-4 w-4 mr-1" />
              Reset
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select
                value={location || ""}
                onChange={(e) => setLocation(e.target.value || undefined)}
                className="w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary"
              >
                <option value="">Any Location</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Property Type</label>
              <select
                value={propertyType || ""}
                onChange={(e) => setPropertyType(e.target.value || undefined)}
                className="w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary"
              >
                <option value="">Any Type</option>
                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bedrooms</label>
              <select
                value={bedrooms || ""}
                onChange={(e) => setBedrooms(e.target.value ? Number(e.target.value) : undefined)}
                className="w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
                <option value="5">5+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bathrooms</label>
              <select
                value={bathrooms || ""}
                onChange={(e) => setBathrooms(e.target.value ? Number(e.target.value) : undefined)}
                className="w-full p-2 border rounded-md focus:ring-estate-primary focus:border-estate-primary"
              >
                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
            <Slider
              defaultValue={priceRange}
              min={0}
              max={2000000}
              step={50000}
              value={priceRange}
              onValueChange={(value) => setPriceRange(value as [number, number])}
              className="mb-1"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{formatPrice(priceRange[0])}</span>
              <span>{formatPrice(priceRange[1])}</span>
            </div>
          </div>

          <div className="flex justify-end">
            <Button 
              onClick={applyFilters}
              className="bg-estate-primary hover:bg-estate-accent text-white"
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyFilters;
