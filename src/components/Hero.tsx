
import { useEffect, useRef } from "react";

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
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-chakra font-bold mb-8 leading-tight text-gray-900">
              <span className="block">Build your MVP</span>
              <span className="block">in just 7 days</span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl font-normal text-purple-700 mb-6 max-w-2xl mx-auto">
              A methodology for the modern founder
            </p>
            
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Rabbit MVP is a structured methodology to create Minimum Viable Products 
              with speed and precision. Accelerate your path to market validation.
            </p>
          </div>
        </div>
      </div>
      
      {/* Community code line accent with shimmer effect */}
      <div className="absolute bottom-16 right-4 md:right-16 max-w-md text-xs md:text-sm font-fira text-gray-500 transform -rotate-1">
        <pre className="opacity-80 relative overflow-hidden">
          <code className="relative z-10">
            {`// Open Community Approach
rabbitMVP.buildWith(community).succeed();`}
          </code>
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 animate-shimmer" />
        </pre>
      </div>
    </section>
  );
};

export default Hero;
