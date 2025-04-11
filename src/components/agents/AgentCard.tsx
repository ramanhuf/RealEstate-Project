
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { Agent } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface AgentCardProps {
  agent: Agent;
}

const AgentCard = ({ agent }: AgentCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={agent.photo}
        alt={agent.name}
        className="w-full h-60 object-cover object-center"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop";
        }}
      />
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{agent.name}</h3>
        <p className="text-gray-600 mb-3">Real Estate Agent</p>
        
        <div className="flex flex-col space-y-3 mb-4">
          <div className="flex items-center text-gray-700">
            <Phone className="h-4 w-4 mr-2 text-estate-primary" />
            <span>{agent.phone}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Mail className="h-4 w-4 mr-2 text-estate-primary" />
            <span className="truncate">{agent.email}</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button 
            className="flex-1 bg-estate-primary hover:bg-estate-accent text-white"
            asChild
          >
            <Link to={`/contact`} state={{ agent: agent.name }}>
              Contact
            </Link>
          </Button>
          <Button 
            variant="outline" 
            className="flex-1 border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-white"
          >
            View Listings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
