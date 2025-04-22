
import { Calculator, FileText, BookOpen, PiggyBank, Users, Receipt } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Calculator className="w-10 h-10 text-steuerblau group-hover:text-steueraccent transition-colors duration-300" />,
      title: "Steuerberatung",
      description: "Individuelle Steuerberatung für Ihr Unternehmen, optimiert für Ihre persönliche Situation und Ziele."
    },
    {
      icon: <FileText className="w-10 h-10 text-steuerblau group-hover:text-steueraccent transition-colors duration-300" />,
      title: "Steuererklärungen",
      description: "Termingerechte und rechtssichere Erstellung aller relevanten Steuererklärungen für Ihr Unternehmen."
    },
    {
      icon: <BookOpen className="w-10 h-10 text-steuerblau group-hover:text-steueraccent transition-colors duration-300" />,
      title: "Buchhaltung",
      description: "Digitale Buchhaltung mit modernsten Tools – einfach, effizient und immer aktuell."
    },
    {
      icon: <PiggyBank className="w-10 h-10 text-steuerblau group-hover:text-steueraccent transition-colors duration-300" />,
      title: "Jahresabschlüsse",
      description: "Zuverlässige Erstellung von Jahresabschlüssen und betriebswirtschaftlichen Auswertungen."
    },
    {
      icon: <Users className="w-10 h-10 text-steuerblau group-hover:text-steueraccent transition-colors duration-300" />,
      title: "Gründungsberatung",
      description: "Umfassende Beratung für Gründer – von der Rechtsformwahl bis zur steuerlichen Optimierung."
    },
    {
      icon: <Receipt className="w-10 h-10 text-steuerblau group-hover:text-steueraccent transition-colors duration-300" />,
      title: "Lohnbuchhaltung",
      description: "Professionelle Lohnbuchhaltung für Ihre Mitarbeiter, inkl. aller Meldungen und Bescheinigungen."
    }
  ];

  return (
    <section id="services" className="section bg-steuergrau-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-steuerblau mb-4">Meine Leistungen</h2>
          <p className="text-lg text-steuergrau-dark max-w-3xl mx-auto">
            Spezialisiert auf die Bedürfnisse von Freelancern, Startups und kleinen Unternehmen 
            biete ich Ihnen folgende Dienstleistungen an:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-steuerblau mb-2">{service.title}</h3>
              <p className="text-steuergrau-dark">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
