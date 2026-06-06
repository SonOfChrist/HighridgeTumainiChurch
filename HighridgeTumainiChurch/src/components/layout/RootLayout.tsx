import { ReactNode } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { BookOpen, Calendar, Heart, Home, LogIn, Menu, Shield, User } from "lucide-react";
import { cn } from "../../lib/utils";
import { useAuth } from "../../lib/AuthContext";

export default function RootLayout() {
  const location = useLocation();
  const { user, role } = useAuth();

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Sermons", href: "/sermons", icon: BookOpen },
    { name: "Events", href: "/events", icon: Calendar },
    { name: "Give", href: "/give", icon: Heart },
    { name: "Groups", href: "/groups", icon: Heart },
  ];

  return (
    <div className="h-full flex flex-col font-sans overflow-hidden bg-[#F1F5F9]">
      {/* Navigation Bar */}
      <header className="h-16 bg-[#0F172A] text-white flex items-center justify-between px-6 shrink-0 border-b border-slate-700">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between h-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center font-bold text-xl text-white">
              H
            </div>
            <div>
              <h1 className="text-lg font-bold leading-none">HighRidge Tumaini</h1>
              <p className="text-[10px] text-cyan-400 uppercase tracking-widest font-semibold mt-1">Highridge Tumaini Church</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "text-xs font-semibold uppercase tracking-wider transition-colors outline-none focus-visible:ring-1 focus-visible:ring-cyan-500 rounded-sm px-2 py-1",
                    isActive ? "text-cyan-400" : "text-slate-300 hover:text-white"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative w-48">
              <input type="text" placeholder="Search..." className="w-full bg-slate-800 border-none rounded-md py-1.5 px-3 text-xs focus:ring-1 focus:ring-cyan-500 text-white placeholder:text-slate-400" />
            </div>
            <div className="flex items-center gap-4 border-l border-slate-700 pl-4">
              {user ? (
                <>
                  <Link
                    to="/portal"
                    className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    <User className="w-4 h-4" />
                    Portal
                  </Link>
                  {role === 'admin' && (
                    <Link
                      to="/admin"
                      className="flex items-center gap-2 justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-cyan-500"
                    >
                      <Shield className="w-3 h-3" />
                      Admin
                    </Link>
                  )}
                </>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-cyan-500"
                >
                  <LogIn className="w-3 h-3" />
                  Sign In
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button className="text-slate-300 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden min-h-0">
        <main className="flex-1 overflow-y-auto flex flex-col relative w-full h-full min-h-0">
          <Outlet />
          {/* Footer */}
          <footer className="bg-slate-900 text-slate-400 py-12 mt-auto shrink-0 z-10 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="font-bold text-xl text-white mb-4">HighRidge Tumaini Church</h3>
                <p className="max-w-xs text-sm leading-relaxed">
                  Equipping the saints for the work of ministry, for building up the body of Christ.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/sermons" className="hover:text-white transition-colors">Sermons & Media</Link></li>
                  <li><Link to="/give" className="hover:text-white transition-colors">Online Giving</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/portal" className="hover:text-white transition-colors">Member Portal</Link></li>
                  <li><Link to="/admin" className="hover:text-white transition-colors">Admin Access</Link></li>
                </ul>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-800 text-sm text-center">
              &copy; {new Date().getFullYear()} HighRidge Tumaini Church. All rights reserved.
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}