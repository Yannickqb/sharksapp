import React from 'react';
import PlayerProfile from '@/app/components/playerprofile';
import Navbar from '@/app/components/nav';
import Footer from '@/app/components/footer';

const players = [
  {
    id: "p1",
    position: "QB",
    name: "Yannick Ledermann",
    image: "/yannick.jpeg",
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


// Define an order for the positions
const positionOrder = ['QB', 'RB', 'WR', 'OL'];

// Function to sort players by the defined position order
const sortPlayersByPosition = (players, order) => {
  return players.slice().sort((a, b) => order.indexOf(a.position) - order.indexOf(b.position));
};

export default function Defense() {
  const handleButtonClick = (playerId) => {
    // Implement navigation to player's detailed profile page
  };

  const sortedPlayers = sortPlayersByPosition(players, positionOrder);

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("/Background.png")' }}>
      <Navbar /> {/* Sticky Navbar */}
      <div className="flex flex-wrap lg:flex-nowrap pt-20"> {/* Use flexbox for layout */}
        {/* Steps Indicator */}
        <div className="hidden lg:block w-48">
          <ul className="steps steps-vertical">
            <li className="step step-primary">QB</li>
            <li className="step step-primary">RB</li>
            <li className="step">WR</li>
            <li className="step">OL</li>
            {/* More steps can be added as needed */}
          </ul>
        </div>
        {/* Player profiles list */}
        <div className="flex-1">
          {sortedPlayers.map((player, index) => (
            <div key={player.id} className="my-4">
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
      </div>
      <Footer />
    </div>
  );
}
