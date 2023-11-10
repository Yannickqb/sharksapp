// JobsComponent.jsx

import { useState } from 'react';

// Job data array
const jobsData = [
  {
    id: 'u16-coach',
    title: 'U-16 Coach',
    description: 'Für unser im Aufbau befindliches U16 Team suchen wir einen Head Coach (finanziell vergütet) sowie Assistant Coaches (ehrenamtlich), welche den Head Coach beim Aufbau der Juniorenmannschaft unterstützen. Derzeit werden 9 Junioren intensiv durch vorhandene Spieler der Seniors auf unseren Sport vorbereitet. Das Team trainiert zweimal in der Woche von 18.00 bis 20.00 Uhr.',
    email: 'teammanager@shsharks.ch'
  },
  {
    id: 'nlb-coaches',
    title: 'Coaches NLB Team',
    description: 'Der Coaching-Staff der Sharks ist auf der Suche nach Coaches auf folgenden Positionen. Wenn du Erfahrung als Spieler oder auch als Coach auf dieser Position hast dann melde dich.',
    email: 'teammanager@shsharks.ch'
  },
  {
    id: 'referee',
    title: 'Referee',
    description: 'Du interessierst dich für American Football und möchtest gerne Teil davon sein. Jedoch möchtest du nicht (oder nicht mehr) selbst als Spieler oder Coach auf dem Feld stehen? Dann werde Schiedsrichter.',
    email: 'teammanager@shsharks.ch'
  },
  {
    id: 'gameday-helper',
    title: 'Gameday-Helfer',
    description: 'An einem Spieltag fallen viele Arbeiten an. Angefangen bei der Chain-Crew, über Helfer am Spielfeldrand sowie für Auf- und Abbau und weiteres. Die Sharks sind immer dankbar für Hilfe.',
    email: 'teammanager@shsharks.ch'
  },
  // Add more jobs as needed
];

// Single job card component
const JobCard = ({ title, description, email }) => {
    return (
      <div className="card  bg-base-100 shadow-xl image-full m-4">
        <figure><img src="/background.png" alt={title} /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="collapse bg-base-200">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title text-primary-content peer-checked:bg- peer-checked:text-secondary-content">
            Mehr Infos
            </div>
            <div className="collapse-content"> 
              <p>{description}</p>
            </div>
          </div>
          <div className="card-actions justify-end">
            <a href={`mailto:${email}`} className="btn">Contact</a>
          </div>
        </div>
      </div>
    );
  };
  
  const JobsComponent = () => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {jobsData.map((job) => (
          <JobCard key={job.id} title={job.title} description={job.description} email={job.email} />
        ))}
      </div>
    );
  };
  
  export default JobsComponent;