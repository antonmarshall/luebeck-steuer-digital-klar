
const Testimonials = () => {
  const testimonials = [
    {
      quote: "Durch die Zusammenarbeit mit diesem Steuerberater konnte ich mich endlich voll auf mein Freelance-Business konzentrieren. Die digitale Arbeitsweise spart mir enorm viel Zeit!",
      author: "Michaela K.",
      position: "Freelance Webdesignerin"
    },
    {
      quote: "Als Startup-Gründer war ich anfangs überfordert mit den steuerlichen Anforderungen. Die kompetente Beratung hat uns vom ersten Tag an sicher durch den Steuer-Dschungel geführt.",
      author: "Thomas L.",
      position: "Gründer, TechStart GmbH"
    },
    {
      quote: "Endlich ein Steuerberater, der meine Sprache spricht und versteht, was kleine Unternehmen wirklich brauchen. Die Beratung ist immer auf Augenhöhe und absolut transparent.",
      author: "Sandra M.",
      position: "Inhaberin, Lokales Einzelhandelsgeschäft"
    }
  ];

  return (
    <section className="section bg-steuerblau text-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Was meine Mandanten sagen</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Vertrauen und Zufriedenheit sind die Basis erfolgreicher Zusammenarbeit. 
            Hier einige Stimmen meiner Mandanten:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="text-4xl font-serif text-steueraccent mb-4">"</div>
              <p className="italic mb-6 text-white/90">{testimonial.quote}</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-white/80">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
