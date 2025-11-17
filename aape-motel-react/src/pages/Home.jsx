import Hero from '../components/Hero';
import Rooms from '../components/Rooms';
import Restaurant from '../components/Restaurant';
import Facilities from '../components/Facilities';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Rooms />
      <Facilities />
      <Restaurant />
    </div>
  );
};

export default Home;