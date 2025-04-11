
import { agents } from "@/lib/data";
import AgentCard from "@/components/agents/AgentCard";
import PageContainer from "@/components/layout/PageContainer";
import { Users } from "lucide-react";

const AgentsPage = () => {
  return (
    <PageContainer>
      <div className="bg-estate-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-12 w-12 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Our Real Estate Experts</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Meet our team of dedicated real estate professionals who are committed to helping you find your perfect property.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Agents?</h2>
          <p className="text-gray-600">
            Our agents combine local market expertise with personalized service to ensure you have the best possible real estate experience. Whether you're buying, selling, or investing, our team is here to guide you every step of the way.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {agents.map(agent => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>

        <div className="mt-16 bg-gray-100 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Team</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Are you a real estate professional looking to advance your career? We're always looking for talented individuals to join our growing team.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-estate-primary hover:bg-estate-accent text-white font-semibold py-2 px-6 rounded-md transition-colors"
          >
            Contact Us About Careers
          </a>
        </div>
      </div>
    </PageContainer>
  );
};

export default AgentsPage;
