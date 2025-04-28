import { Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-steuergrau-light to-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-steuerblau leading-tight">
              Steuerberatung, die Sie entlastet – in Lübeck und online
            </h1>
            <p className="text-lg md:text-xl text-steuergrau-dark max-w-xl">
              Professionelle Steuerberatung speziell für Freelancer, Startups und kleine Unternehmen. 
              Digital, persönlich und zukunftsorientiert.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#contact" 
                className="btn btn-accent btn-lg flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Kostenloses Erstgespräch
              </a>
              <a 
                href="#services" 
                className="btn btn-primary btn-lg"
              >
                Leistungen entdecken
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-steuerblau rounded-2xl opacity-10 transform rotate-3"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src={`${import.meta.env.BASE_URL}images/steuer_hero.png`} 
                alt="Steuerberatung in Lübeck" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
