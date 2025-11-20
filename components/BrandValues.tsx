import React from 'react';
import { Crosshair, Watch, Hammer, HeartHandshake } from 'lucide-react';

interface ValueItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueItem: React.FC<ValueItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-start p-8 bg-stone-100/50 hover:bg-stone-100 transition-colors duration-500 border border-transparent hover:border-stone-200 group">
      <div className="mb-6 text-stone-400 group-hover:text-stone-900 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-serif text-xl text-stone-900 mb-3">{title}</h3>
      <p className="font-sans text-sm text-stone-500 leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
};

const BrandValues: React.FC = () => {
  const values = [
    {
      icon: <Crosshair strokeWidth={1} size={32} />,
      title: "Precision Engineering",
      description: "Accuracy is not a goal; it is our baseline. We test every movement to standards that exceed COSC certification."
    },
    {
      icon: <Watch strokeWidth={1} size={32} />,
      title: "Timeless Design",
      description: "We reject trends. Our aesthetic is rooted in the golden ratio and the enduring beauty of functional minimalism."
    },
    {
      icon: <Hammer strokeWidth={1} size={32} />,
      title: "Authentic Craftsmanship",
      description: "Hand-assembled in Geneva by master watchmakers who have dedicated their lives to the art of horology."
    },
    {
      icon: <HeartHandshake strokeWidth={1} size={32} />,
      title: "Customer-first Care",
      description: "Owning an Aeterna is a lifelong relationship. Our concierge service ensures your timepiece outlasts generations."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200">
            {/* Gap-px with bg color creates the grid lines effect */}
            {values.map((value, index) => (
                <div key={index} className="bg-stone-50">
                    <ValueItem {...value} />
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;