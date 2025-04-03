
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-app-background text-white p-5">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-2 text-app-orange">404</h1>
        <p className="text-xl text-white mb-8">Page not found</p>
        <Link to="/" className="inline-flex items-center text-app-orange hover:text-app-orange/80">
          <ArrowLeft className="mr-2" size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
