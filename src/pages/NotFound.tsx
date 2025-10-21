import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-serif font-bold bg-gradient-cosmic bg-clip-text text-transparent">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Oops! This cosmic path doesn't exist</p>
        <a
          href="/"
          className="inline-block px-6 py-3 gradient-cosmic text-primary-foreground font-semibold rounded-lg hover:shadow-glow transition-smooth"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
