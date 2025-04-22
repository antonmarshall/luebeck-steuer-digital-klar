
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-steuerblau text-white py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Steuerberater Lübeck</h3>
            <p className="text-white/80 mb-4 max-w-md">
              Professionelle Steuerberatung für Freelancer, Startups und kleine Unternehmen
              in Lübeck und deutschlandweit. Digital, persönlich und zukunftsorientiert.
            </p>
            <p className="text-white/80">
              © {currentYear} Steuerberater Lübeck. Alle Rechte vorbehalten.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-white/80">
              <li>Musterstraße 123</li>
              <li>23552 Lübeck</li>
              <li>Tel: +49 (0) 451 12345678</li>
              <li>info@steuerberatung-luebeck.de</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  AGB
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-white transition-colors">
                  Berufsrechtliche Hinweise
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-white/20 text-center text-white/60 text-sm">
          <p>
            Mitglied der Steuerberaterkammer Schleswig-Holstein • USt-IdNr.: DE123456789 • 
            Berufsrechtliche Regelungen: StBerG, DVStB, BOStB
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
