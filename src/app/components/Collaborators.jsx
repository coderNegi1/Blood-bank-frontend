import React from 'react';

const initialCollaborators = [
  { 
    name: 'Collaborators will be added soon...', 
    color: 'text-gray-500 italic' 
  },
];


const collaborators = [...initialCollaborators, ...initialCollaborators];

const Collaborators = () => {
  return (
    <div className="bg-white py-8">
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee {
          animation: marquee-scroll 10s linear infinite;
          white-space: wrap;
        }

        .pause-on-hover:hover .marquee {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      

        <section>
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-12">
            Our Collaborators
          </h2>
          
          <div 
            className="w-full overflow-hidden relative  border-y border-gray-100 group pause-on-hover"
            aria-hidden="true"
          >
            <div className="marquee flex items-center min-w-full">
              {collaborators.map((collaborator, index) => (
                <div
                  key={`${collaborator.name}-${index}`}
                  className="flex-shrink-0   flex items-center"
                  style={{ width: '800px' }}
                >
                  <span 
                    className={`text-4xl sm:text-4xl font-extrabold transition-colors duration-300 ${collaborator.color} opacity-20 hover:opacity-50`}
                  >
                    {collaborator.name}
                  </span>
                </div>
              ))}
            </div>
            
          </div>
        </section>
      </div>
    </div>
  );
};

export default Collaborators;

