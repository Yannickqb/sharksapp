import React from 'react';
import PlayerProfile from '@/app/components/playerprofile';

const players = [
  {
    id: "p1",
    position: "QB",
    name: "Yannick Ledermann",
    image: "/offence.png",
    number: "1",
    nationalityIcon: "/path-to-nationality-icon.jpg",
    buttonText: "View Profile"
  },
  {
    id: "p2",
    position: "RB",
    name: "Arius Grey",
    image: "/offence2.png",
    number: "22",
    nationalityIcon: "/path-to-nationality-icon2.jpg",
    buttonText: "View Profile"
  },
  // ... other players
  {
    id: "p20",
    position: "WR",
    name: "Xavier Enderson",
    image: "/offence20.png",
    number: "88",
    nationalityIcon: "/path-to-nationality-icon20.jpg",
    buttonText: "View Profile"
  },
  // Add more players as needed
];

export default function OffenseRoster() {
  const handleButtonClick = (playerId) => {
    // Implement navigation to player's detailed profile page
  };

  return (
    <div>
      {players.map((player, index) => (
        <PlayerProfile
          key={player.id}
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
