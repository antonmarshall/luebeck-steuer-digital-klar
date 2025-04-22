
const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Kostenloses Erstgespräch",
      description: "In einem persönlichen oder digitalen Gespräch lernen wir uns kennen und besprechen Ihre individuellen Bedürfnisse und Ziele."
    },
    {
      number: "02",
      title: "Digitale Belegübergabe",
      description: "Über ein modernes Portal übermitteln Sie Ihre Unterlagen digital – einfach, sicher und jederzeit möglich."
    },
    {
      number: "03",
      title: "Laufende Betreuung",
      description: "Ich kümmere mich kontinuierlich um Ihre steuerlichen Angelegenheiten und stehe Ihnen jederzeit beratend zur Seite."
    }
  ];

  return (
    <section id="process" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-steuerblau mb-4">So arbeiten wir zusammen</h2>
          <p className="text-lg text-steuergrau-dark max-w-3xl mx-auto">
            Mein Ziel ist es, den Prozess für Sie so einfach und effizient wie möglich zu gestalten. 
            Hier ein Überblick über unsere Zusammenarbeit:
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-steuerblau-light opacity-30 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`md:grid md:grid-cols-2 gap-8 items-center relative ${
                  index % 2 === 1 ? 'md:text-right' : ''
                }`}
              >
                {/* Circle on timeline for desktop */}
                <div className="absolute left-1/2 top-1/2 w-6 h-6 bg-steueraccent rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"></div>
                
                {/* Step content */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="bg-steuergrau-light p-6 rounded-lg shadow-md">
                    <div className="text-5xl font-bold text-steueraccent opacity-30 mb-3">{step.number}</div>
                    <h3 className="text-xl font-semibold text-steuerblau mb-3">{step.title}</h3>
                    <p className="text-steuergrau-dark">{step.description}</p>
                  </div>
                </div>
                
                {/* Empty div for alternating layout */}
                <div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
