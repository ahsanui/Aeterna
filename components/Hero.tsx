import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col pt-32 pb-12 px-6 md:px-12 overflow-hidden">
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-end h-full">
        
        {/* Text Content */}
        <div className="lg:col-span-5 flex flex-col justify-center relative z-10 order-2 lg:order-1 mb-12 lg:mb-0">
          <span className="inline-block w-12 h-[1px] bg-stone-400 mb-8"></span>
          <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-stone-900 leading-[0.95] mb-8">
            Our <br/> Story
          </h1>
          <p className="font-sans text-stone-600 text-lg leading-relaxed max-w-md pl-1">
            Born from a relentless pursuit of silence in a noisy world. We don’t just measure time; we archive moments of absolute clarity.
          </p>
          
          <div className="mt-12 flex items-center gap-4">
             <span className="font-sans text-xs tracking-[0.2em] uppercase text-stone-400">Est. 1924 • Geneva</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="lg:col-span-7 relative h-[60vh] lg:h-[80vh] w-full order-1 lg:order-2">
          <div className="absolute inset-0 bg-stone-200 overflow-hidden">
            <img 
              src="https://picsum.photos/id/175/1200/1600" 
              alt="Watchmaker at work" 
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[2000ms] ease-out filter grayscale contrast-[0.9]"
            />
            {/* Subtle Grain Overlay */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </div>
          
          {/* Floating decorative element */}
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-stone-100 z-20 hidden lg:block"></div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-1/3 h-px bg-stone-200"></div>
    </section>
  );
};

export default Hero;