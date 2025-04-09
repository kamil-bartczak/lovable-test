
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create particles
    const createParticles = () => {
      if (!heroRef.current) return;
      
      heroRef.current.innerHTML = '';
      const heroHeight = heroRef.current.offsetHeight;
      const heroWidth = heroRef.current.offsetWidth;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle animate-particle-move';
        
        // Random position
        particle.style.top = `${Math.random() * heroHeight}px`;
        particle.style.left = `${Math.random() * heroWidth}px`;
        
        // Random size
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random color
        const colors = ['#20E3B2', '#9C27B0', '#FF5722'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        particle.style.animationDuration = `${duration}s`;
        
        // Random animation delay
        const delay = Math.random() * 10;
        particle.style.animationDelay = `${delay}s`;
        
        heroRef.current.appendChild(particle);
      }
    };

    createParticles();
    
    const handleResize = () => {
      createParticles();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-grid overflow-hidden">
      <div ref={heroRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-rabbit-purple/10 to-rabbit-dark pointer-events-none" />
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-8 animate-float">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-glow">
              <span className="neon-text">MVP in 7 days</span> <br />
              <span className="highlight-gradient">with AI as co-founder</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              Rabbit MVP is a proprietary methodology to create Minimum Viable Products 
              at lightning speed using AI as a key accelerator.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-rabbit-turquoise hover:bg-rabbit-turquoise/80 text-black font-medium button-glow text-lg px-8 py-6">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="border-rabbit-purple/70 text-gray-200 hover:bg-rabbit-purple/20 text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Code line accent */}
      <div className="absolute bottom-16 right-4 md:right-16 max-w-md text-xs md:text-sm font-fira text-rabbit-turquoise/70 transform rotate-3">
        <pre className="opacity-70">
          <code>
            {`const rabbit = new RabbitMVP();
rabbit.validateIdea(idea);
rabbit.buildMVP({ days: 7 });
rabbit.launch();`}
          </code>
        </pre>
      </div>
    </section>
  );
};

export default Hero;
