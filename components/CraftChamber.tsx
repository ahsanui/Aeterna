import React, { useState } from 'react';

const CraftChamber: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // CSS transforms for the isometric exploded view
  const layerBaseStyle = "absolute inset-0 w-64 h-64 rounded-full transition-all duration-700 ease-out shadow-lg border border-stone-200 bg-stone-50/80 backdrop-blur-sm";
  
  return (
    <section className="relative py-32 overflow-hidden bg-stone-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* The Chamber (Visual) */}
        <div 
            className="lg:col-span-7 h-[600px] relative flex items-center justify-center perspective-1000"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
             {/* Center axis line */}
             <div className={`absolute top-1/2 left-1/2 w-[400px] h-[1px] bg-stone-300 -translate-x-1/2 -translate-y-1/2 transform rotate-[-30deg] transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

             <div className="relative w-64 h-64 transform rotate-x-60 rotate-z-45 preserve-3d cursor-pointer">
                
                {/* Layer 1: Strap/Back */}
                <div 
                    className={`${layerBaseStyle} bg-stone-800 border-stone-700`}
                    style={{ 
                        transform: isHovered 
                            ? 'translateZ(-100px) translateX(-50px) translateY(50px)' 
                            : 'translateZ(0px)',
                        opacity: isHovered ? 0.8 : 0 
                    }}
                >
                     <div className="absolute inset-0 flex items-center justify-center text-stone-500 text-xs uppercase tracking-widest opacity-0 hover:opacity-100 transition-opacity">Back Plate</div>
                </div>

                {/* Layer 2: Movement */}
                <div 
                    className={`${layerBaseStyle} overflow-hidden`}
                    style={{ 
                        transform: isHovered 
                            ? 'translateZ(-40px) translateX(-20px) translateY(20px)' 
                            : 'translateZ(5px)',
                        background: 'url(https://picsum.photos/id/305/300/300?grayscale) center/cover'
                    }}
                >
                    <div className="absolute inset-0 bg-stone-900/30"></div>
                    {/* Connector Line */}
                    <div className={`absolute right-0 top-1/2 w-24 h-px bg-stone-400 origin-left transition-all duration-500 ${isHovered ? 'opacity-100 translate-x-full' : 'opacity-0 scale-x-0'}`}>
                         <span className="absolute right-0 -top-6 text-xs font-sans text-stone-500 whitespace-nowrap bg-stone-100 px-2 py-1">Caliber 82 Movement</span>
                    </div>
                </div>

                {/* Layer 3: Dial */}
                <div 
                    className={`${layerBaseStyle} bg-stone-100`}
                    style={{ 
                        transform: isHovered 
                            ? 'translateZ(20px)' 
                            : 'translateZ(10px)' 
                    }}
                >
                    <div className="w-full h-full rounded-full border-[20px] border-stone-200 flex items-center justify-center">
                        <div className="w-2 h-2 bg-stone-900 rounded-full"></div>
                        {/* Hands simulation */}
                        <div className="absolute w-1 h-24 bg-stone-800 origin-bottom bottom-1/2 left-1/2 -translate-x-1/2 rotate-45"></div>
                        <div className="absolute w-1 h-16 bg-stone-600 origin-bottom bottom-1/2 left-1/2 -translate-x-1/2 -rotate-12"></div>
                    </div>
                    <div className={`absolute right-0 bottom-0 w-24 h-px bg-stone-400 origin-left transition-all duration-500 delay-100 ${isHovered ? 'opacity-100 translate-x-full' : 'opacity-0 scale-x-0'}`}>
                         <span className="absolute right-0 top-2 text-xs font-sans text-stone-500 whitespace-nowrap bg-stone-100 px-2 py-1">Enamel Dial</span>
                    </div>
                </div>

                {/* Layer 4: Bezel/Case */}
                <div 
                    className={`${layerBaseStyle} border-4 border-stone-300 bg-transparent`}
                    style={{ 
                        transform: isHovered 
                            ? 'translateZ(80px) translateX(20px) translateY(-20px)' 
                            : 'translateZ(15px)' 
                    }}
                >
                </div>

                {/* Layer 5: Sapphire Crystal */}
                <div 
                    className={`${layerBaseStyle} bg-gradient-to-tr from-white/10 to-white/40 border-stone-100/50 backdrop-blur-[1px]`}
                    style={{ 
                        transform: isHovered 
                            ? 'translateZ(140px) translateX(50px) translateY(-50px)' 
                            : 'translateZ(20px)' 
                    }}
                >
                    {/* Reflection shine */}
                    <div className="absolute top-4 right-10 w-8 h-16 bg-white/30 rounded-full rotate-12 filter blur-md"></div>
                    <div className={`absolute right-0 top-10 w-24 h-px bg-stone-400 origin-left transition-all duration-500 delay-200 ${isHovered ? 'opacity-100 translate-x-full' : 'opacity-0 scale-x-0'}`}>
                         <span className="absolute right-0 -top-6 text-xs font-sans text-stone-500 whitespace-nowrap bg-stone-100 px-2 py-1">Sapphire Crystal</span>
                    </div>
                </div>

             </div>
             
             <div className={`absolute bottom-10 text-stone-400 text-sm tracking-widest uppercase transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                 Hover to Explode
             </div>
        </div>

        {/* Text Content */}
        <div className="lg:col-span-5 text-right lg:text-left">
           <span className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-stone-500 mb-4 block">
               Engineering
           </span>
           <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
               Crafted in Layers <br/> of Precision.
           </h2>
           <p className="font-sans text-stone-600 text-lg leading-relaxed mb-8">
               Every Aeterna timepiece is an architectural feat constructed from over 200 individual components. We do not simply assemble; we orchestrate materials into a symphony of accuracy.
           </p>
           <p className="font-sans text-stone-600 text-lg leading-relaxed mb-12">
               From the chamfered edges of the bridges to the anti-reflective coating on the domed sapphire, no detail is too microscopic to escape our obsession.
           </p>
           
           <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-stone-50 overflow-hidden">
               <span className="relative z-10 font-sans text-sm uppercase tracking-widest">Visit the Atelier</span>
               <span className="absolute inset-0 bg-stone-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
           </button>
        </div>

      </div>
    </section>
  );
};

export default CraftChamber;