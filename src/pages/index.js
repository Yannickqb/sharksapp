// pages/index.js
import Navbar from '../app/components/nav';
import Hero from '../app/components/hero';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold">Home</h1>
        <p>Hier kommt der Inhalt der Home-Seite.</p>
        <Hero/>
      </div>
    </div>
  );
};

export default Home;
