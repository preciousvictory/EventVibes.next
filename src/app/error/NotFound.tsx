import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import AnimatedButton from "../../components/ui/Button";
import GradientLayout from "../../components/GradientLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <GradientLayout>
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-white mb-4">Oops! Page not found</p>
        <AnimatedButton to="/" variant="gray" className="underline w-full">Return to Home</AnimatedButton>
      </div>
    </GradientLayout>
  );
};

export default NotFound;
