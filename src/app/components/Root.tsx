import { Outlet, Link, useLocation } from "react-router";

export function Root() {
  const location = useLocation();

  return (
    <div className="min-h-screen px-8 py-8 md:px-16 md:py-12 relative">
      {/* Subtle decorative elements */}
      <div className="fixed top-8 left-8 w-2 h-2 rounded-full bg-primary opacity-30" />
      <div className="fixed bottom-12 right-12 w-1 h-1 rounded-full bg-secondary opacity-40" />
      
      {/* Simple navigation in top right */}
      <nav className="flex justify-end space-x-6 mb-16 text-sm">
        <Link 
          to="/" 
          className="hover:text-primary transition-colors"
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className="hover:text-primary transition-colors"
        >
          About
        </Link>
        <Link 
          to="/essays" 
          className="hover:text-primary transition-colors"
        >
          Essays
        </Link>
        <Link 
          to="/projects" 
          className="hover:text-primary transition-colors"
        >
          Projects
        </Link>
      </nav>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
}