import Navbar from '../components/nav';
import Footer from '@/app/components/footer';
import Galerieelement from '@/app/components/galerieelement';

const Galerie = () => {
  // Assuming you have an array of folder names
  const folders = ['folder1', 'folder2', 'folder3']; // This should come from a server or a JSON file

  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
        {folders.map((folder, index) => (
          // You can modify the Galerieelement component to accept props that will vary based on the folder
          <Galerieelement key={index} folder={folder} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Galerie;
