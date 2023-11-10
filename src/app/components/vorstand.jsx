// pages/vorstand.js
import { useState } from 'react';


export default function Vorstand() {
  // Define the roles and their corresponding grid layout classes
  const layoutClasses = {
    'Präsident': "col-span-6",
    'Vize-Präsident': "col-span-6",
    'Sportschef': "col-span-4",
    'Finanzen': "col-span-4",
    'Marketing': "col-span-4",
    'Equtment-Scheff': "col-span-4",
    'Head Coach': "col-span-4",
    'Administration': "col-span-4",
    'Spielerrat': "col-span-4 col-start-5", // Center the 'Spielerrat' in the grid on medium screens and up
  };

  // List of members with roles, images, and emails
  const members = [
    // Top level
    { role: 'Präsident', name: 'Marc Herrmann', imageUrl: '/marchermann.jpeg', email: 'president@shsharks.ch' },
    { role: 'Vize-Präsident', name: 'Jens Urben', imageUrl: '/jens.jpeg', email: 'vicepresident@shsharks.ch' },
    // Second level
    { role: 'Sportschef', name: 'Giuliano Bianchi', imageUrl: '/giuliano.png', email: 'teammanager@shsharks.ch' },
    { role: 'Finanzen', name: 'Helena Nicolas', imageUrl: '/helena.png', email: 'finance@shsharks.ch' },
    { role: 'Marketing', name: 'Marco Salamon', imageUrl: '/marco.jpeg', email: 'marketing@shsharks.ch' },
    // Third level
    { role: 'Equtment-Scheff', name: 'Paul Herrmann', imageUrl: '/paul.jpeg', email: 'equipment@shsharks.ch' },
    { role: 'Head Coach', name: 'Marc Herrmann', imageUrl: '/marchermann.jpeg', email: 'headcoach@shsharks.ch' },
    { role: 'Administration', name: 'Helena Nicolas', imageUrl: '/helena.png', email: 'administration@shsharks.ch' },
    // Bottom center
    { role: 'Spielerrat', name: 'Patrick Burgunder', imageUrl: '/burgi.jpeg',},
  ];

  const Collapsible = ({ member, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
      <>
        <button 
          className="btn btn-sm mt-2" 
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Weniger anzeigen' : 'Mehr anzeigen'}
        </button>
        {isOpen && (
          <div className="mt-2 p-2 border rounded ">
            {/* Placeholder text, replace with actual content */}
            <p>Mein Name ist {member.name} und als {member.role}...</p>
            <p>{/* Other personal text here */}</p>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-12 gap-6">
        {members.map((member) => (
          <div key={member.name} className={`card w-full bg-base-100 shadow-xl ${layoutClasses[member.role]}`}>
            <div className="card-body">
              <h2 className="card-title">{member.role}</h2>
              <div className="flex justify-start items-center"> {/* Keep items aligned to the start */}
                {/* Wrap the name and the button in their own div */}
                <div className="flex items-center space-x-2"> {/* Use space-x-2 to keep them closer */}
                  <p className="mb-0">{member.name}</p>
                  {member.email && (
                    <a 
                      className="btn text-xs py-1 px-2 self-center" // Adjust alignment if needed
                      href={`mailto:${member.email}`}>
                      {member.email} {/* Display the email on the button */}
                    </a>
                  )}
                </div>
              </div>
              <Collapsible member={member} />
            </div>
            <figure><img src={member.imageUrl} alt={member.name} /></figure>
          </div>
        ))}
      </div>
    </div>
  );
}