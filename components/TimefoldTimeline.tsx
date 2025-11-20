import React from 'react';

interface TimelineSegmentProps {
  year: string;
  title: string;
  text: string;
  imgSrc: string;
  index: number;
}

const TimelineSegment: React.FC<TimelineSegmentProps> = ({ year, title, text, imgSrc, index }) => {
  const isEven = index % 2 === 0;
  
  // Negative margin creates the "stacked/folded" overlap effect
  const foldStyle = {
    marginTop: index === 0 ? '0' : '-5rem', // Overlap amount
    zIndex: index + 10,
  };

  return (
    <div 
      className="sticky top-24 w-full max-w-5xl mx-auto transition-transform duration-500"
      style={foldStyle}
    >
      <div className="relative bg-stone-50 border-t border-stone-100 rounded-t-[3rem] shadow-[0_-8px_30px_rgba(0,0,0,0.04)] overflow-hidden min-h-[60vh] md:min-h-[500px] flex flex-col md:flex-row">
        
        {/* Decorative fold shadow line */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-stone-100/50 to-transparent pointer-events-none z-20"></div>

        {/* Content Container */}
        <div className={`flex-1 p-12 md:p-20 flex flex-col justify-center relative z-10 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
            <span className="font-serif text-6xl text-stone-200 absolute top-8 right-8 md:left-12 md:top-12 select-none -z-10 opacity-50">
                {year}
            </span>
            
            <div className="mt-8">
                <h3 className="font-serif text-3xl md:text-4xl text-stone-800 mb-6">{title}</h3>
                <p className="font-sans text-stone-500 leading-relaxed text-base md:text-lg max-w-sm">
                    {text}
                </p>
            </div>
        </div>

        {/* Image Container (Partially Hidden effect) */}
        <div className={`flex-1 relative overflow-hidden h-64 md:h-auto ${isEven ? 'md:order-2' : 'md:order-1'}`}>
             <div className="absolute inset-0 bg-stone-200">
                <img 
                    src={imgSrc} 
                    alt={title} 
                    className="w-full h-full object-cover filter grayscale contrast-75 hover:scale-110 transition-transform duration-[1.5s] ease-in-out"
                />
             </div>
             {/* Inner shadow for fold depth */}
             <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.1)] pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
};

const TimefoldTimeline: React.FC = () => {
  const events = [
    {
      year: "1924",
      title: "The First Movement",
      text: "It began in a small attic in Les Breuleux. A single watchmaker, a single window facing the Alps, and a desire to capture the silence of winter in a mechanism.",
      imgSrc: "https://picsum.photos/id/250/800/800"
    },
    {
      year: "1958",
      title: "Ascending the Peak",
      text: "The Aeterna Chronograph accompanied the first successful ascent of the unclimbed ridge. It proved that elegance could endure the harshest elements.",
      imgSrc: "https://picsum.photos/id/103/800/800"
    },
    {
      year: "1982",
      title: "The Silent Revolution",
      text: "While the world turned digital, we doubled down on mechanical soul. Introducing the Caliber 82—a movement so quiet, it mimics the human heartbeat.",
      imgSrc: "https://picsum.photos/id/366/800/800"
    },
    {
      year: "2024",
      title: "A New Era",
      text: "One hundred years of heritage meets sustainable innovation. Recycled titanium, ethically sourced straps, and the same timeless obsession.",
      imgSrc: "https://picsum.photos/id/1062/800/800"
    }
  ];

  return (
    <section className="relative pt-32 pb-48 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <span className="font-sans text-xs font-medium tracking-[0.2em] uppercase text-stone-400 block mb-4">Heritage</span>
        <h2 className="font-serif text-4xl md:text-5xl text-stone-900">The Timeline</h2>
      </div>

      <div className="flex flex-col relative">
        {events.map((event, index) => (
            <TimelineSegment key={event.year} index={index} {...event} />
        ))}
      </div>
      
      {/* Bottom spacer to allow last card to be seen fully */}
      <div className="h-24"></div>
    </section>
  );
};

export default TimefoldTimeline;