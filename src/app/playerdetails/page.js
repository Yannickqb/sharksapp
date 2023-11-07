import { useParams } from 'react-router-dom';
import { players } from './path-to-players-array'; // Ensure you export the players array from where it's defined

const PlayerDetailsPage = () => {
  let { playerId } = useParams();
  let player = players.find(p => p.id === playerId);

  if (!player) {
    return <div>Player not found</div>;
  }

  return (
    <div>
      <h1>{player.name}</h1>
      <img src={player.image} alt={`Profile of ${player.name}`} />
      {/* Add more details as needed */}
    </div>
  );
};

export default PlayerDetailsPage;