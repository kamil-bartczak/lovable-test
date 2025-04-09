
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create minimal particles (much fewer than before)
    const createParticles = () => {
      if (!heroRef.current) return;
      
      heroRef.current.innerHTML = '';
      const heroHeight = heroRef.current.offsetHeight;
      const heroWidth = heroRef.current.offsetWidth;
      
      // Reduced number of particles for minimalism
      for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle animate-particle-move';
        
        // Random position
        particle.style.top = `${Math.random() * heroHeight}px`;
        particle.style.left = `${Math.random() * heroWidth}px`;
        
        // Smaller, more subtle size
        const size = Math.random() * 2 + 0.5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // More muted colors
        const colors = ['#9C27B0', '#20E3B2', '#FF5722'];
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.opacity = '0.3';
        
        // Slower, more subtle animation
        const duration = Math.random() * 30 + 15;
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#f5f5f5]">
      <div ref={heroRef} className="absolute inset-0 pointer-events-none" />
      
      {/* Very subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f5f5f5] pointer-events-none" />
      
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-chakra font-light mb-6 text-gray-900">
              <span className="block">Build your MVP</span>
              <span className="block mt-2">in just 7 days</span>
              <span className="block mt-2 text-2xl md:text-3xl lg:text-4xl font-normal text-purple-700">A methodology for the modern founder</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl leading-relaxed">
              Rabbit MVP is a structured methodology to create Minimum Viable Products 
              with speed and precision. Accelerate your path to market validation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 shadow-sm font-medium text-lg px-8 py-6">
                Get Started <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50 text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Minimal code line accent */}
      <div className="absolute bottom-16 right-4 md:right-16 max-w-md text-xs md:text-sm font-fira text-gray-500 transform -rotate-1">
        <pre className="opacity-60">
          <code>
            {`// Build. Validate. Launch.
rabbitMVP.buildIn(7).days();`}
          </code>
        </pre>
      </div>
    </section>
  );
};

export default Hero;
