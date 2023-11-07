// pages/index.js
import Navbar from './components/nav';
import Hero from './components/hero';
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
