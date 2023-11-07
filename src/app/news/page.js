// pages/news.js
// pages/index.js
import Navbar from '../components/nav';
import Newhc from '@/app/components/news/newhc';

const News = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
      <Newhc/>
      </div>
    </div>
  );
};

export default News;
