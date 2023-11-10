// pages/index.js
import Navbar from '../app/components/nav';
import Hero from '../app/components/hero';
import Footer from '@/app/components/footer';

const Home = () => {
  return (
    <div>
     {/* Fixed Navbar at the top */}
     <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="pt-20"> {/* Adjust pt-16 as needed to match the height of your Navbar */}
      <div className="container mx-auto mt-8">
        <Hero/>
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default Home;
