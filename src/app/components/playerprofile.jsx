import React from 'react';

export default function PlayerProfile({
  position,
  name,
  image,
  number,
  nationalityIcon,
  buttonText,
  onButtonClick,
  // New props for additional information
  internalAwards,
  athleticSuccesses,
  age,
  height,
  weight,
  season,
  sinceSHARK,
  formerClubs
}) {
  const cardHeight = `calc((100vh - 20px - 20px - 60px) / 1.5)`; // Adjust 60px to your navbar and footer height.

  return (
    <div className="card lg:card-side shadow-xl w-3/4 mx-auto bg-opacity-75 bg-black my-10"
         style={{ height: cardHeight, marginBottom: '20px' }}>
      <figure className="p-4">
        <img src={image} alt={`Profile of ${name}`} className="rounded-lg h-full w-auto object-cover" />
      </figure>
      <div className="card-body overflow-auto">
        <div className="mb-2">
          <span className="font-bold">{position} #{number}</span>
        </div>
        <div className="mb-4 flex items-center">
          <h2 className="card-title">{name}</h2>
          <img src={nationalityIcon} alt="Nationality" className="h-6 ml-2" />
        </div>
        <div className="card-actions justify-end">
          <div className="collapse collapse-arrow border rounded-box border-base-300 bg-base-100">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              More Information
            </div>
            <div className="collapse-content">
              {Array.isArray(internalAwards) && (
                <div className="mb-4">
                  <h3 className="font-semibold">Internal Awards:</h3>
                  <ul>
                    {internalAwards.map((award, index) => (
                      <li key={index}>{award}</li>
                    ))}
                  </ul>
                </div>
              )}
              {Array.isArray(athleticSuccesses) && (
                <div className="mb-4">
                  <h3 className="font-semibold">Athletic Successes:</h3>
                  <ul>
                    {athleticSuccesses.map((success, index) => (
                      <li key={index}>{success}</li>
                    ))}
                  </ul>
                </div>
              )}
              <p>Age: {age} years</p>
              <p>Height: {height}</p>
              <p>Weight: {weight} kg</p>
              <p>Season: {season}</p>
              <p>SHARK since: {sinceSHARK}</p>
              <p>Former Clubs: {formerClubs || 'None'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}