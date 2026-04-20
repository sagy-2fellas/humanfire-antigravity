
import React from 'react';
import { motion } from 'framer-motion';

const clients = [
{
  name: "On the Dot",
  logo: "/images/e6b7d38ae_7.png"
},
{
  name: "Massmart",
  logo: "/images/d995422ee_5.png"
},
{
  name: "Astron Energy",
  logo: "/images/63eeebcff_6.png"
},
{
  name: "McDonald's",
  logo: "/images/99d697d17_8.png"
},
{
  name: "Aga Khan Foundation",
  logo: "/images/5738e38b7_AgaKhanFoundationLOGO_raster200.png"
},
{
  name: "PureSurvey",
  logo: "/images/ea154de99_download1.jpeg"
},
{
  name: "Kagiso Media",
  logo: "/images/e891b584c_download1.png"
},
{
  name: "DHK",
  logo: "/images/b54f5edfa_download2.png"
},
{
  name: "Liberty",
  logo: "/images/c1bfa6a20_download3.png"
},
{
  name: "Seriti Green",
  logo: "/images/9c1a7608c_download4.png"
},
{
  name: "BCX",
  logo: "/images/58026ca34_download5.png"
},
{
  name: "HelloKindred",
  logo: "/images/251dc6366_download.jpeg"
},
{
  name: "University of Cape Town",
  logo: "/images/de216e298_download.png"
},
{
  name: "Future Managers",
  logo: "/images/e0c5b6919_fm-logo-update.png"
},
{
  name: "SAMRC",
  logo: "/images/b7072da5c_samrc-logo_0.png"
}];

export default function StatsSection() {
  // Duplicate the clients array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="px-2 sm:px-4">
      <div className="bg-white/80 px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 rounded-2xl sm:rounded-3xl max-w-7xl mx-auto backdrop-blur-xl border-2 border-white/20 shadow-2xl glass-effect overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-center text-base sm:text-lg md:text-xl font-bold leading-8 text-slate-900 mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2">
            Trusted by leading organizations
          </h2>
          
          {/* Scrolling Container */}
          <div className="relative">
            {/* Gradient Overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 md:w-20 bg-gradient-to-r from-white/80 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 md:w-20 bg-gradient-to-l from-white/80 to-transparent z-10 pointer-events-none"></div>
            
            {/* Scrolling Logos */}
            <motion.div
              className="flex gap-6 sm:gap-8 md:gap-10 lg:gap-12"
              animate={{
                x: [0, -1 * (clients.length * (140 + 48))] // 140px logo width + 48px gap
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {duplicatedClients.map((client, index) => (
                <motion.div
                  key={index}
                  className="flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    className="opacity-70 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 w-auto max-w-[100px] sm:max-w-[120px] md:max-w-[140px] object-contain grayscale hover:grayscale-0 transition-all duration-300 hover:opacity-100"
                    src={client.logo}
                    alt={`${client.name} logo`} 
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
