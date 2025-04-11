
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { PropertyFilter, Property } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

export function filterProperties(properties: Property[], filters: PropertyFilter): Property[] {
  return properties.filter(property => {
    if (filters.location && property.location !== filters.location) {
      return false;
    }
    
    if (filters.minPrice && property.price < filters.minPrice) {
      return false;
    }
    
    if (filters.maxPrice && property.price > filters.maxPrice) {
      return false;
    }
    
    if (filters.bedrooms && property.bedrooms < filters.bedrooms) {
      return false;
    }
    
    if (filters.bathrooms && property.bathrooms < filters.bathrooms) {
      return false;
    }
    
    if (filters.propertyType && property.propertyType !== filters.propertyType) {
      return false;
    }
    
    return true;
  });
}

export function getFavoritesFromStorage(): string[] {
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
}

export function addToFavorites(propertyId: string): void {
  const favorites = getFavoritesFromStorage();
  if (!favorites.includes(propertyId)) {
    favorites.push(propertyId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

export function removeFromFavorites(propertyId: string): void {
  const favorites = getFavoritesFromStorage();
  const newFavorites = favorites.filter(id => id !== propertyId);
  localStorage.setItem('favorites', JSON.stringify(newFavorites));
}

export function isPropertyFavorite(propertyId: string): boolean {
  const favorites = getFavoritesFromStorage();
  return favorites.includes(propertyId);
}
