
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ChevronDown, Linkedin, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger } from
"@/components/ui/dropdown-menu";
import { localAuth } from "@/api/localAuth";
import LoadingScreen from "@/components/common/LoadingScreen";

export default function Layout({ children, currentPageName }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const location = useLocation();

  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Check if user is logged in and is admin
  React.useEffect(() => {
    const checkUser = async () => {
      setIsLoading(true);
      try {
        const user = await localAuth.me();
        setCurrentUser(user);
        setIsAuthenticated(true);
      } catch (error) {
        setCurrentUser(null);
        setIsAuthenticated(false);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    };
    checkUser();
  }, []);

  // Microsoft Clarity Analytics
  React.useEffect(() => {
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "u82nitkp3r");
  }, []);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
  { name: "Home", path: createPageUrl("Home") }];


  const serviceItems = [
  { name: "human+design", path: createPageUrl("HumanDesign") },
  { name: "human+assist", path: createPageUrl("HumanAssist") },
  { name: "human+insight", path: createPageUrl("HumanInsight") },
  { name: "human+culture", path: createPageUrl("HumanCulture") }];


  const isActive = (path) => location.pathname === path;
  const isAdmin = isAuthenticated && currentUser?.role === 'admin';

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#12103F] text-slate-200">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Poppins:wght@700&display=swap');
        
        :root {
          --primary: #12103F;
          --primary-dark: #091E54;
          --accent-red: #B82E2B;
          --accent-coral: #B9472C;
          --secondary-blue: #6F88B5;
          --neutral-warm: #EDCDB6;
          --neutral-light: #F2EFEA;
          --font-wordmark: 'Poppins', sans-serif;
          --font-body: 'Lato', sans-serif;
        }
        
        body {
          font-family: var(--font-body);
        }
        
        .font-wordmark {
          font-family: var(--font-wordmark);
          font-weight: 700;
        }
        
        .font-headline {
          font-family: var(--font-body);
          font-weight: 400;
        }
        
        .font-tagline {
          font-family: var(--font-body);
          font-weight: 300;
        }
        
        .font-body {
          font-family: var(--font-body);
          font-weight: 400;
        }
        
        .nav-link {
          position: relative;
          overflow: hidden;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent-red), var(--accent-coral));
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link-active::before {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          background-color: var(--accent-red);
          border-radius: 9999px;
        }
        
        .fire-button {
          background: linear-gradient(135deg, var(--accent-red), var(--accent-coral));
          transition: all 0.3s ease;
        }
        .fire-button:hover {
          background: linear-gradient(135deg, #6E1C09, var(--accent-red));
          box-shadow: 0 10px 25px -5px rgba(184, 46, 43, 0.3);
        }
        
        .glass-effect {
          background-color: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
        }
        
        .ember-pulse {
          animation: ember-glow 4s infinite ease-in-out;
        }
        
        @keyframes ember-glow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }
      `}</style>

      {/* Header */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ?
        'bg-white backdrop-blur-md border-b border-slate-200 shadow-lg' :
        'bg-white/95 backdrop-blur-md border-b border-slate-200'}`
        }>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Now using Image */}
            <Link to={createPageUrl("Home")} className="flex items-center">
              <motion.img
                src="/images/6d2863d20_Logo_1.png"
                alt="humanfire"
                className="h-10 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }} />

            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) =>
              <Link
                key={item.name}
                to={item.path}
                className={`nav-link font-body text-sm font-normal transition-colors hover:text-[#B82E2B] ${
                isActive(item.path) ?
                "text-[#B82E2B] nav-link-active" :
                "text-[#12103F]"}`
                }>

                  {item.name}
                </Link>
              )}
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className={`nav-link flex items-center space-x-1 font-body text-sm font-normal transition-colors hover:text-[#B82E2B] ${
                serviceItems.some((service) => isActive(service.path)) ?
                "text-[#B82E2B] nav-link-active" :
                "text-[#12103F]"}`
                }>
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-white border-slate-200">
                  {serviceItems.map((service) =>
                  <DropdownMenuItem key={service.name} asChild>
                      <Link to={service.path} className="w-full hover:bg-[#B82E2B]/10 text-[#12103F] transition-colors font-body">
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to={createPageUrl("Blog")}
                className={`nav-link font-body text-sm font-normal transition-colors hover:text-[#B82E2B] ${
                isActive(createPageUrl("Blog")) ?
                "text-[#B82E2B] nav-link-active" :
                "text-[#12103F]"}`
                }>

                Blog
              </Link>

              {/* Admin Menu - Only show if user is logged in AND is admin */}
              {isAdmin &&
              <DropdownMenu>
                  <DropdownMenuTrigger className={`nav-link flex items-center space-x-1 font-body text-sm font-normal transition-colors hover:text-[#B82E2B] ${
                isActive(createPageUrl("BlogAdmin")) || isActive(createPageUrl("BlogEditor")) || isActive(createPageUrl("AdminDashboard")) ?
                "text-[#B82E2B] nav-link-active" :
                "text-[#12103F]"}`
                }>
                    <span>Admin</span>
                    <ChevronDown className="w-4 h-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 bg-white border-slate-200">
                    <DropdownMenuItem asChild>
                      <Link to={createPageUrl("AdminDashboard")} className="w-full hover:bg-[#B82E2B]/10 text-[#12103F] transition-colors font-body">
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={createPageUrl("UserManagement")} className="w-full hover:bg-[#B82E2B]/10 text-[#12103F] transition-colors font-body">
                        Manage Users
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={createPageUrl("BlogAdmin")} className="w-full hover:bg-[#B82E2B]/10 text-[#12103F] transition-colors font-body">
                        Manage Blog
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to={createPageUrl("BlogEditor")} className="w-full hover:bg-[#B82E2B]/10 text-[#12103F] transition-colors flex items-center font-body">
                        <Edit className="w-3 h-3 mr-2" />
                        Write New Post
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              }

              <Link to={createPageUrl("ContactUs")}>
                <Button className="fire-button text-white px-6 font-body font-normal">
                  Get in Touch
                </Button>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-[#12103F] hover:text-[#B82E2B] transition-colors">

              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-white border-t border-slate-200">

          <div className="px-4 py-4 space-y-4">
            {navigationItems.map((item) =>
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block font-body font-normal transition-colors ${isActive(item.path) ? 'text-[#B82E2B]' : 'text-[#12103F] hover:text-[#B82E2B]'}`}>

                {item.name}
              </Link>
            )}
            
            <div className="space-y-2">
              <div className="text-[#12103F] font-body font-normal">Services</div>
              <div className="pl-4 space-y-2">
                {serviceItems.map((service) =>
                <Link
                  key={service.name}
                  to={service.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-[#12103F]/80 hover:text-[#B82E2B] text-sm transition-colors font-body">

                    {service.name}
                  </Link>
                )}
              </div>
            </div>

            <Link
              to={createPageUrl("Blog")}
              onClick={() => setIsMenuOpen(false)}
              className={`block font-body font-normal transition-colors ${isActive(createPageUrl("Blog")) ? 'text-[#B82E2B]' : 'text-[#12103F] hover:text-[#B82E2B]'}`}>

              Blog
            </Link>

            {/* Admin Menu Mobile - Only show if user is logged in AND is admin */}
            {isAdmin &&
            <div className="space-y-2">
                <div className="text-[#B82E2B] font-body font-normal">Admin</div>
                <div className="pl-4 space-y-2">
                  <Link
                  to={createPageUrl("AdminDashboard")}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-[#12103F]/80 hover:text-[#B82E2B] text-sm transition-colors font-body">

                    Dashboard
                  </Link>
                  <Link
                  to={createPageUrl("UserManagement")}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-[#12103F]/80 hover:text-[#B82E2B] text-sm transition-colors font-body">

                    Manage Users
                  </Link>
                  <Link
                  to={createPageUrl("BlogAdmin")}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-[#12103F]/80 hover:text-[#B82E2B] text-sm transition-colors font-body">

                    Manage Blog
                  </Link>
                  <Link
                  to={createPageUrl("BlogEditor")}
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-[#12103F]/80 hover:text-[#B82E2B] text-sm transition-colors font-body">

                    Write New Post
                  </Link>
                </div>
              </div>
            }
            
            <Link to={createPageUrl("ContactUs")}>
              <Button className="w-full fire-button text-white font-body">
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.header>

      {/* Main Content - Add padding to account for fixed header */}
      <main className="flex-1 pt-16">
        {children}
      </main>

      {/* Footer - Dark Theme */}
      <footer className="bg-slate-900 text-slate-200 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4">

              <motion.img
                src="/images/9775e7da1_Logo_white_divider_transparent.png"
                alt="humanfire"
                className="h-8 w-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }} />

              <div>
                <p className="text-sm text-slate-400 mb-3 font-body">Proud Partner with:</p>
                <motion.a
                  href="https://peopletreegroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}>

                  <img
                    src="https://peopletreegroup.com/wp-content/uploads/2024/09/1.png"
                    alt="PeopleTree Group Logo"
                    className="h-10 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                    style={{ filter: 'brightness(0) invert(1)' }} />

                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}>

              <h4 className="font-headline font-semibold mb-4 text-slate-200">Quick Links</h4>
              <ul className="space-y-2">
                {navigationItems.map((item, index) =>
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}>

                    <Link
                    to={item.path}
                    className="text-slate-400 hover:text-[var(--accent-red)] text-sm transition-all duration-300 hover:translate-x-1 inline-block font-body">

                      {item.name}
                    </Link>
                  </motion.li>
                )}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}>

                  <Link
                    to={createPageUrl("Blog")}
                    className="text-slate-400 hover:text-[var(--accent-red)] text-sm transition-all duration-300 hover:translate-x-1 inline-block font-body">

                    Blog
                  </Link>
                </motion.li>
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}>

              <h4 className="font-headline font-semibold mb-4 text-slate-200">human+ Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                {serviceItems.map((service, index) =>
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}>

                    <Link
                    to={service.path}
                    className="hover:text-[var(--accent-red)] transition-all duration-300 hover:translate-x-1 inline-block font-body">

                      {service.name}
                    </Link>
                  </motion.li>
                )}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}>

              <h4 className="font-headline font-semibold mb-4 capitalize text-slate-200">Contact</h4>
              <motion.div
                className="space-y-2 text-sm text-slate-400 font-body"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}>

                <motion.p whileHover={{ x: 4 }} transition={{ duration: 0.2 }} className="">selma@humanfire.co.za</motion.p>
                <motion.p whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>+27 84 056 8822</motion.p>
                <motion.p whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>South Africa</motion.p>
                <motion.a
                  href="https://www.linkedin.com/company/humanfire/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-[var(--accent-red)] transition-all duration-300"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}>

                  <Linkedin className="w-4 h-4 mr-2" />
                  <span>LinkedIn</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 font-body">

            <p className="mb-2">
              &copy; 2025 humanfire. All rights reserved. | {' '}
              <Link to={createPageUrl("PrivacyPolicy")} className="hover:text-[var(--accent-red)] transition-colors">
                Privacy Policy
              </Link>
              {' '}| {' '}
              <Link to={createPageUrl("TermsOfService")} className="hover:text-[var(--accent-red)] transition-colors">
                Terms of Service
              </Link>
            </p>
            <p className="text-slate-500">
              Humanfire is a Level 1 BBBEE Contributor
            </p>
          </motion.div>
        </div>
      </footer>
    </div>);

}
