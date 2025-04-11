
import { Agent, Property } from "./types";

export const agents: Agent[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop",
    phone: "(555) 123-4567",
    email: "sarah.johnson@propertyhaven.com",
    bio: "Sarah has over 10 years of experience in real estate, specializing in luxury properties. She has a keen eye for detail and a passion for helping clients find their dream home."
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop",
    phone: "(555) 987-6543",
    email: "michael.rodriguez@propertyhaven.com",
    bio: "Michael's expertise in market analysis and negotiation has made him one of our top-performing agents. His clients appreciate his honest approach and dedication."
  },
  {
    id: "3",
    name: "Jennifer Kim",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop",
    phone: "(555) 567-8901",
    email: "jennifer.kim@propertyhaven.com",
    bio: "Jennifer specializes in first-time homebuyers and relocation services. Her patient and educational approach helps clients navigate the complex process with confidence."
  },
  {
    id: "4",
    name: "David Thompson",
    photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&auto=format&fit=crop",
    phone: "(555) 234-5678",
    email: "david.thompson@propertyhaven.com",
    bio: "David has a background in architecture, giving him unique insights into property potential. He excels at helping investors find properties with growth opportunities."
  }
];

export const properties: Property[] = [
  {
    id: "1",
    title: "Modern Lakefront Villa",
    price: 1250000,
    description: "This stunning modern villa offers breathtaking lakefront views and luxurious living spaces. The property features floor-to-ceiling windows, a gourmet kitchen, and a private dock. Perfect for those seeking a tranquil retreat with easy access to urban amenities.",
    location: "Lake City",
    address: "123 Lakeshore Drive, Lake City, CA 90210",
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 3200,
    propertyType: "Villa",
    yearBuilt: 2019,
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&auto=format&fit=crop"
    ],
    features: ["Lakefront", "Swimming Pool", "Smart Home System", "Wine Cellar", "Outdoor Kitchen"],
    agent: agents[0]
  },
  {
    id: "2",
    title: "Downtown Luxury Penthouse",
    price: 1850000,
    description: "Exclusive penthouse in the heart of downtown with panoramic city views. This sophisticated residence features designer finishes, a private elevator, expansive terrace, and state-of-the-art amenities. The ultimate in urban luxury living.",
    location: "Metro City",
    address: "1000 Skyline Avenue, Metro City, CA 92101",
    bedrooms: 3,
    bathrooms: 3,
    squareFeet: 2800,
    propertyType: "Penthouse",
    yearBuilt: 2021,
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&auto=format&fit=crop"
    ],
    features: ["Concierge Service", "Fitness Center", "Rooftop Garden", "Private Elevator", "Wine Room"],
    agent: agents[1]
  },
  {
    id: "3",
    title: "Charming Colonial Family Home",
    price: 750000,
    description: "Beautiful colonial-style home in a family-friendly neighborhood. This well-maintained property features hardwood floors, a renovated kitchen, spacious bedrooms, and a lovely backyard with mature trees. Close to schools, parks, and shopping.",
    location: "Greenfield",
    address: "456 Maple Avenue, Greenfield, CA 94501",
    bedrooms: 4,
    bathrooms: 2.5,
    squareFeet: 2400,
    propertyType: "Single Family",
    yearBuilt: 1985,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185008-a33f5c7cc6b6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&auto=format&fit=crop"
    ],
    features: ["Finished Basement", "Fireplace", "Garden", "Garage", "Renovated Kitchen"],
    agent: agents[2]
  },
  {
    id: "4",
    title: "Mountain View Cabin Retreat",
    price: 495000,
    description: "Cozy mountain cabin with spectacular views and modern amenities. This retreat features a stone fireplace, vaulted ceilings, wrap-around deck, and updated kitchen. Perfect for vacations or year-round living in a serene natural setting.",
    location: "Pine Ridge",
    address: "789 Forest Road, Pine Ridge, CA 95631",
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    propertyType: "Cabin",
    yearBuilt: 2000,
    images: [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514914709321-1c0dfa96a0d4?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531835551805-16d864c8d311?w=800&auto=format&fit=crop"
    ],
    features: ["Mountain Views", "Fireplace", "Wood Beams", "Hiking Trails", "Hot Tub"],
    agent: agents[3]
  },
  {
    id: "5",
    title: "Contemporary Beachside Condo",
    price: 875000,
    description: "Modern beachfront condominium with stunning ocean views and high-end finishes. This turnkey property features an open-concept layout, gourmet kitchen, master suite with balcony, and access to resort-style amenities.",
    location: "Coastal Haven",
    address: "222 Ocean Drive, Coastal Haven, CA 93001",
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1500,
    propertyType: "Condo",
    yearBuilt: 2018,
    images: [
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1597211833712-5e41faa202ea?w=800&auto=format&fit=crop"
    ],
    features: ["Ocean View", "Pool", "Fitness Center", "Secure Building", "Covered Parking"],
    agent: agents[0]
  },
  {
    id: "6",
    title: "Historic Brownstone Townhouse",
    price: 1150000,
    description: "Beautifully restored historic brownstone in a prestigious neighborhood. This elegant townhouse features original architectural details, modern updates, multiple fireplaces, a chef's kitchen, and a private garden. A rare blend of historic charm and contemporary living.",
    location: "Old Town",
    address: "35 Heritage Place, Old Town, CA 90007",
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 2700,
    propertyType: "Townhouse",
    yearBuilt: 1910,
    images: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop"
    ],
    features: ["Historic Details", "Fireplace", "Garden", "Wine Cellar", "Renovated"],
    agent: agents[1]
  }
];

export const locations = [...new Set(properties.map(p => p.location))];
export const propertyTypes = [...new Set(properties.map(p => p.propertyType))];
