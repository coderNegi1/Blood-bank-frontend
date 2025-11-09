import React from 'react';

const initialCollaborators = [
  { name: 'NCC', color: 'text-red-500' },
  { name: 'NSS', color: 'text-blue-500' },
  { name: 'YMCA', color: 'text-green-500' },
  { name: 'Google', color: 'text-yellow-600' },
  { name: 'Microsoft', color: 'text-gray-800' },
  { name: 'Red Cross', color: 'text-red-700' },
];

const collaborators = [...initialCollaborators, ...initialCollaborators];

const Collaborators = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
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
            className="w-full overflow-hidden relative py-12 border-y border-gray-100 group pause-on-hover"
            aria-hidden="true"
          >
            <div className="marquee flex items-center min-w-full">
              {collaborators.map((collaborator, index) => (
                <div
                  key={`${collaborator.name}-${index}`}
                  className="flex-shrink-0 mx-8 sm:mx-12 lg:mx-16 flex items-center"
                  style={{ width: '200px' }}
                >
                  <span 
                    className={`text-5xl sm:text-6xl font-extrabold transition-colors duration-300 ${collaborator.color} opacity-20 hover:opacity-50`}
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

