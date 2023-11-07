import React from 'react';

export default function PlayerProfile({ position, name, image, number, nationalityIcon, buttonText, onButtonClick }) {
  // Styles to ensure the image height is 140px, border radius, and left margin
  const imageStyle = { height: '140px', borderRadius: '0.5rem', marginLeft: '1rem' };
  // Style for 75% opacity
  const cardStyle = { backgroundColor: 'rgba(0, 0, 0, 0.75)' }; // Adjust the rgba values as needed to change the color and opacity

  return (
    <div className="card lg:card-side shadow-xl w-3/4 mx-auto" style={cardStyle}>
      <figure className="ml-4">
        <img src={image} alt={`Profile of ${name}`} style={imageStyle} />
      </figure>
      <div className="card-body">
        {/* Position and Number on one line, Name on the next line */}
        <div className="mb-2">
          <span className="font-bold">{position} #{number}</span>
        </div>
        <div className="mb-4">
          <h2 className="card-title">{name}</h2>
        </div>
        <div>
          <img src={nationalityIcon} alt="Nationality" style={{ height: '24px' }} />
        </div>
        <div className="card-actions justify-end">
          <button className="btn" onClick={onButtonClick}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
}
