import { useState } from 'react';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'Bitte auswählen'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success message
    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Anfrage. Ich werde mich in Kürze bei Ihnen melden.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: 'Bitte auswählen'
    });
  };

  return (
    <section id="contact" className="section bg-steuergrau-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-steuerblau mb-4">Kontakt aufnehmen</h2>
          <p className="text-lg text-steuergrau-dark max-w-3xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein unverbindliches Erstgespräch vereinbaren? 
            Ich freue mich auf Ihre Nachricht!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md flex flex-col">
            <h3 className="text-xl font-semibold text-steuerblau mb-6">Schreiben Sie mir</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5 flex-grow flex flex-col">
              <div>
                <label htmlFor="name" className="block text-steuergrau-dark mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-steuergrau-light rounded-md focus:outline-none focus:ring-2 focus:ring-steuerblau"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-steuergrau-dark mb-1">E-Mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-steuergrau-light rounded-md focus:outline-none focus:ring-2 focus:ring-steuerblau"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-steuergrau-dark mb-1">Telefon</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-steuergrau-light rounded-md focus:outline-none focus:ring-2 focus:ring-steuerblau"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-steuergrau-dark mb-1">Gewünschte Leistung</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-steuergrau-light rounded-md focus:outline-none focus:ring-2 focus:ring-steuerblau"
                >
                  <option disabled>Bitte auswählen</option>
                  <option>Steuerberatung</option>
                  <option>Buchhaltung</option>
                  <option>Jahresabschluss</option>
                  <option>Gründungsberatung</option>
                  <option>Lohnbuchhaltung</option>
                  <option>Andere Anfrage</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-steuergrau-dark mb-1">Nachricht</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-steuergrau-light rounded-md focus:outline-none focus:ring-2 focus:ring-steuerblau"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary btn-lg w-full mt-auto"
              >
                Nachricht senden
              </button>
            </form>
          </div>
          
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-steuerblau mb-4">Kontaktdaten</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-steueraccent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Adresse:</p>
                    <p className="text-steuergrau-dark">Musterstraße 123<br />23552 Lübeck</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-steueraccent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Telefon:</p>
                    <p className="text-steuergrau-dark">+49 (0) 451 12345678</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-steueraccent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">E-Mail:</p>
                    <p className="text-steuergrau-dark">info@steuerberatung-luebeck.de</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Calendar className="text-steueraccent mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Öffnungszeiten:</p>
                    <p className="text-steuergrau-dark">
                      Mo - Fr: 09:00 - 17:00 Uhr<br />
                      Und nach Vereinbarung
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col">
              <h3 className="text-xl font-semibold text-steuerblau mb-4">Direkt einen Termin buchen</h3>
              <p className="text-steuergrau-dark mb-4 flex-grow">
                Buchen Sie direkt ein kostenloses 30-minütiges Erstgespräch in meinem Kalender.
              </p>
              <a 
                href="#" 
                className="btn btn-accent btn-lg w-full flex items-center justify-center gap-2 mt-auto"
              >
                <Calendar size={20} />
                Termin im Kalender buchen
              </a>
              <p className="text-sm text-steuergrau mt-3 text-center">
                (Öffnet Calendly-Terminbuchung)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
