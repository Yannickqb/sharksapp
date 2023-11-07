import React from 'react';
import PlayerProfile from '@/app/components/playerprofile';

const players = [
  {
    position: "QB",
    name: "Yannick Ledermann",
    image: "/offence.png",
    number: "1",
    nationalityIcon: "/path-to-nationality-icon.jpg",
    buttonText: "View Profile"
  },
  // ... other players
];

export default function OffenseRoster() {
  const handleButtonClick = (playerId) => {
    // Implement navigation to player's detailed profile page
  };

  return (
    <div>
      {players.map((player, index) => (
        <PlayerProfile
          key={index}
          position={player.position}
          name={player.name}
          image={player.image}
          number={player.number}
          nationalityIcon={player.nationalityIcon}
          buttonText={player.buttonText}
          onButtonClick={() => handleButtonClick(player.id)}
        />
      ))}
    </div>
  );
}
