import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { User, Calculator, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'Profile', path: '/profile', icon: <User size={20} /> },
    { name: 'Grade App', path: '/app', icon: <Calculator size={20} /> },
  ];

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav className="glass-card rounded-full px-2 py-2 flex items-center space-x-2 pointer-events-auto relative">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={cn(
                "relative flex items-center space-x-2 px-4 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 z-10",
                isActive 
                  ? "text-white" 
                  : "text-slate-400 hover:text-slate-200"
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 rounded-full bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10 -z-10 backdrop-blur-sm"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span>{item.icon}</span>
              <span className={cn("hidden sm:block", isActive ? "block" : "")}>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
