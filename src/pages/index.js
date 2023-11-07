// pages/index.js
import Navbar from '../app/components/nav';
import Hero from '../app/components/hero';
import Footer from '@/app/components/footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        <Hero/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
