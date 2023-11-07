import React from 'react';

export default function PlayerProfile({ position, name, image, number, nationalityIcon, buttonText, onButtonClick }) {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{position}</h2>
        <p>{name}</p>
        {number && <p>#{number}</p>}
        {nationalityIcon && <img src={nationalityIcon} alt="Nationality" />}
        <div className="card-actions justify-end">
          <button className="btn" onClick={onButtonClick}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
}
