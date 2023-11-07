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
    nationalityIcon: "/swiss.jpeg",
    buttonText: "View Profile",
    internalAwards: ["2022: Offensive Captain"], // Array of awards
    athleticSuccesses: [
      "2021: Vize-Meister Liga C",
      "2020: Vize-Meister Fall Cup Liga C",
      "2019: Vize-Meister Liga C Ost"
    ], // Array of successes
    age: "20", // Add the actual age here
    height: "1.78 m", // Add the actual height here
    weight: "80 Kg", // Add the actual weight here
    season: "5", // Add the actual season here
    sinceSHARK: "2018", // Add the actual sinceSHARK here
    formerClubs: "--" // Add the actual former clubs here
  },
  {
    id: "p2",
    position: "RB",
    name: "Marc Hermann",
    image: "/marchermann.jpeg",
    number: "24",
    nationalityIcon: "/swiss.jpeg",
    buttonText: "View Profile",
    internalAwards: "2022: Offensive Captain", // Add the actual internal awards here
    athleticSuccesses: "2021: Vize-Meister Liga C", // Add the actual athletic successes here
    age: "19", // Add the actual age here
    height: "1.78 m", // Add the actual height here
    weight: "80 Kg", // Add the actual weight here
    season: "5", // Add the actual season here
    sinceSHARK: "2018", // Add the actual sinceSHARK here
    formerClubs: "--" // Add the actual former clubs here
  },

  {
    id: "p3",
    position: "RB",
    name: "Tyler Leemann",
    image: "/offence.png",
    number: "85",
    nationalityIcon: "/swiss.jpeg",
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
    <div className="relative min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: 'url("/Background.png")' }}>
      <Navbar fixed />
      <div className="pt-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white">Offense Roster</h1>
        </div>
        {players.map((player) => (
          <PlayerProfile key={player.id} {...player} onButtonClick={() => handleButtonClick(player.id)} />
        ))}
      </div>
      <Footer />
    </div>
  );
}