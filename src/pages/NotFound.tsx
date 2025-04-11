
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";
import PageContainer from "@/components/layout/PageContainer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageContainer>
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-9xl font-bold text-estate-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          The page you are looking for doesn't exist or has been moved. Let us help you find your way back.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-estate-primary hover:bg-estate-accent text-white" asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" className="border-estate-primary text-estate-primary hover:bg-estate-primary hover:text-white" asChild>
            <Link to="/properties">
              <Search className="mr-2 h-4 w-4" />
              Browse Properties
            </Link>
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default NotFound;
