// pages/index.js
import Navbar from '../app/components/nav';
import Hero from '../app/components/hero';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Hero/>
      </div>
    </div>
  );
};

export default Home;
