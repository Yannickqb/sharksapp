import React from 'react';
import PlayerProfile from '@/app/components/playerprofile';
import Navbar from '@/app/components/nav';
import Footer from '@/app/components/footer';

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
    name: "Marc Hermann",
    image: "/offence.png",
    number: "22",
    nationalityIcon: "/path-to-nationality-icon2.jpg",
    buttonText: "View Profile"
  },
  
  {
    id: "p3",
    position: "RB",
    name: "Alessio sacullo",
    image: "/offence.png",
    number: "22",
    nationalityIcon: "/path-to-nationality-icon2.jpg",
    buttonText: "View Profile"
  },

  {
    id: "p4",
    position: "RB",
    name: "Arius Grey",
    image: "/offence.png",
    number: "22",
    nationalityIcon: "/path-to-nationality-icon2.jpg",
    buttonText: "View Profile"
  },
  {
    id: "p20",
    position: "WR",
    name: "Xavier Enderson",
    image: "/offence.png",
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
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/Background.png")' }}>
      {/* Sticky Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      
      {/* Title */}
      <div className="text-center pt-20"> {/* Adjust padding-top as necessary */}
        <h1 className="text-6xl font-bold text-white">SHARKS</h1>
      </div>

      {/* Spacing for the first component */}
      <div className="pt-16"> {/* This adds padding-top to make space for the sticky navbar */}
        {players.map((player, index) => (
          <div key={player.id} className="my-4"> {/* This adds margin to the y-axis (top and bottom) for each PlayerProfile component */}
            <PlayerProfile
              position={player.position}
              name={player.name}
              image={player.image}
              number={player.number}
              nationalityIcon={player.nationalityIcon}
              buttonText={player.buttonText}
              onButtonClick={() => handleButtonClick(player.id)}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
