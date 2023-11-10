import Navbar from '../app/components/nav';
import Footer from '@/app/components/footer';
import Vorstand from '@/app/components/vorstand';
import JobsComponent from '@/app/components/jobs';

const Verein = () => {
  return (
    <div>
     {/* Fixed Navbar at the top */}
     <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="pt-20"></div>
      <div className="pt-8">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white">Jobs</h1>
          <JobsComponent/>
          <div className="pt-8">
          <h1 className="text-6xl font-bold text-white">Vorstand</h1>
          </div>
        <Vorstand/>
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default Verein;
