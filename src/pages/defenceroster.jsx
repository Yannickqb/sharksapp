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
    internalAwards: ["2022: Offensive Captain", "2019: Offensive Captain"], // Array of awards
    athleticSuccesses: [
      "2021: Vize-Meister Liga C",
      "2020: Vize-Meister Fall Cup Liga C",
      "2019: Vize-Meister Liga C Ost"
    ], // Array of successes
    age: "30", // Add the actual age here
    height: "1.75 m", // Add the actual height here
    weight: "85 Kg", // Add the actual weight here
    season: "11", // Add the actual season here
    sinceSHARK: "2012", // Add the actual sinceSHARK here
    formerClubs: "--" // Add the actual former clubs here
  },

  {
    id: "p3",
    position: "RB",
    name: "Tyler Leemann",
    image: "/marchermann.jpeg",
    number: "85",
    nationalityIcon: "/swiss.jpeg",
    buttonText: "View Profile",
    internalAwards: ["2023: Offensive Captain"], // Array of awards
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
    id: "p4",
    position: "RB",
    name: "Ursin Käppeli",
    image: "/ursin.jpeg",
    number: "23",
    nationalityIcon: "/swiss.jpeg",
    buttonText: "View Profile",
    internalAwards: ["2020: Defensiv Captain", "2019: Defensiv Captain"], // Array of awards
    athleticSuccesses: [
      "2021: Vize-Meister Liga C",
      "2020: Vize-Meister Fall Cup Liga C",
      "2019: Vize-Meister Liga C Ost"
    ], // Array of successes
    age: "30", // Add the actual age here
    height: "1.80 m", // Add the actual height here
    weight: "98 Kg", // Add the actual weight here
    season: "10", // Add the actual season here
    sinceSHARK: "2013", // Add the actual sinceSHARK here
    formerClubs: "--" // Add the actual former clubs here
  },
  {
    id: "p5",
    position: "RB",
    name: "Giuliano Bianchi",
    image: "/giuliano.png",
    number: "33",
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
    id: "p6",
    position: "WR",
    name: "Patrick Burgunder",
    image: "/burgi.jpeg",
    number: "39",
    nationalityIcon: "/swiss.jpeg",
    buttonText: "View Profile",
    internalAwards: ["2023: Offensive Captain", "2022: Offensive Captain", "2021: Defensive-Captain"], // Array of awards
    athleticSuccesses: [
      "2023: NLB All-Star Wide Receiver",
      "2021: Vize-Meister Liga C",
      "2020: Vize-Meister Fall Cup Liga C",
      "2019: Vize-Meister Liga C Ost"
    ], // Array of successes
    age: "31", // Add the actual age here
    height: "1.92 m", // Add the actual height here
    weight: "80 Kg", // Add the actual weight here
    season: "9", // Add the actual season here
    sinceSHARK: "2014", // Add the actual sinceSHARK here
    formerClubs: "--" // Add the actual former clubs here
  },
  {
    id: "p7",
    position: "WR",
    name: "Joel Schäuble",
    image: "/joel.jpeg",
    number: "35",
    nationalityIcon: "/deutschland.jpeg",
    buttonText: "View Profile",
    internalAwards: [], // Array of awards
    athleticSuccesses: [
      "2021: Vize-Meister Liga C",
      "2020: Vize-Meister Fall Cup Liga C",
    ], // Array of successes
    age: "31", // Add the actual age here
    height: "1.84 m", // Add the actual height here
    weight: "76 Kg", // Add the actual weight here
    season: "4", // Add the actual season here
    sinceSHARK: "2020", // Add the actual sinceSHARK here
    formerClubs: "--" // Add the actual former clubs here
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
        <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="pt-20"></div>
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