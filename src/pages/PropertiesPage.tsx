
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { properties } from "@/lib/data";
import { PropertyFilter } from "@/lib/types";
import { filterProperties } from "@/lib/utils";
import PropertyCard from "@/components/properties/PropertyCard";
import PropertyFilters from "@/components/properties/PropertyFilters";
import PageContainer from "@/components/layout/PageContainer";

const PropertiesPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [initialFilters, setInitialFilters] = useState<PropertyFilter>({});

  // Process URL search parameters
  useEffect(() => {
    const location = searchParams.get("location") || undefined;
    const propertyType = searchParams.get("type") || undefined;
    
    // Create initial filters from URL params
    const filters: PropertyFilter = {};
    
    if (location) {
      filters.location = location;
    }
    
    if (propertyType) {
      filters.propertyType = propertyType;
    }
    
    // Set initial filters and apply them
    setInitialFilters(filters);
    const filtered = filterProperties(properties, filters);
    setFilteredProperties(filtered);
  }, [searchParams]);

  const handleFilter = (filters: PropertyFilter) => {
    const filtered = filterProperties(properties, filters);
    setFilteredProperties(filtered);
  };

  return (
    <PageContainer>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Explore Properties</h1>
        
        {/* Filters Component with initial values from URL */}
        <PropertyFilters onFilter={handleFilter} initialFilters={initialFilters} />
        
        {/* Property Listings */}
        {filteredProperties.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No properties match your criteria</h3>
            <p className="text-gray-600">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

export default PropertiesPage;
