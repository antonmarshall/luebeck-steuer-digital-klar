
const About = () => {
  const qualifications = [
    "Staatlich geprüfter Steuerberater",
    "Mitglied der Steuerberaterkammer",
    "Zertifizierter DATEV-Berater",
    "Spezialisierung auf Startup- und Gründerberatung",
    "Fachberater für internationales Steuerrecht"
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-steueraccent rounded-2xl opacity-10 transform -rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Steuerberater in Lübeck" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-steuerblau">Über mich</h2>
            <p className="text-lg text-steuergrau-dark">
              Als Steuerberater in Lübeck mit langjähriger Erfahrung habe ich mich auf die Betreuung von 
              Freelancern, Startups und kleinen Unternehmen spezialisiert. Mein Ziel ist es, Ihnen den Rücken 
              freizuhalten, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
            </p>
            <p className="text-lg text-steuergrau-dark">
              Mit einem digitalen und persönlichen Ansatz biete ich Ihnen maßgeschneiderte Lösungen, 
              die genau zu Ihren Bedürfnissen passen. Dabei setze ich auf moderne Tools und effiziente Prozesse, 
              ohne dabei den persönlichen Kontakt zu vernachlässigen.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-steuerblau mb-3">Qualifikationen</h3>
              <ul className="space-y-2">
                {qualifications.map((qualification, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-steueraccent mr-2">✓</span>
                    <span className="text-steuergrau-dark">{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-2">
              <a href="#contact" className="btn btn-primary btn-lg">
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
