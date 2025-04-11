
export interface Property {
  id: string;
  title: string;
  price: number;
  description: string;
  location: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  propertyType: string;
  yearBuilt: number;
  images: string[];
  features: string[];
  agent: Agent;
}

export interface Agent {
  id: string;
  name: string;
  photo: string;
  phone: string;
  email: string;
  bio: string;
}

export interface PropertyFilter {
  location?: string;
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: string;
}
