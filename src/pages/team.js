// team/team.js
import Sharksteam from "@/app/components/sharks.team";
import Navbar from "@/app/components/nav";
import Juniors from "@/app/components/juniors";
import Ref from "@/app/components/ref";
import Footer from "@/app/components/footer";


const Team = () => {
  return (
    <div>
      
      {/* Fixed Navbar at the top */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="pt-20"> {/* Adjust pt-16 as needed to match the height of your Navbar */}
      <div className="container mx-auto mt-20" >
        {/* Centered the title, made it bigger and applied custom yellow color */}
        <h1 className="text-center text-8xl font-bold">The Sharktank</h1>
        <div className="flex justify-center pt-5 pb-5">
          <p className="text-center text-2xl w-1/2">Unser Haifischbecken besteht aus unterschiedlichen Teams und doch jagen wir, ganz nach dem Vorbild der Natur, gemeinsam nach unseren Zielen.</p>
        </div>
        <Sharksteam />
        <div className="mt-12">
          <div className="w-1/2 float-left">
            <Juniors />
          </div>
          <div className="w-1/2 float-right">
            <Ref />
          </div>
          <div style={{ clear: 'both' }}></div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>

  );
};

export default Team;
