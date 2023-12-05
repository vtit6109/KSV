import Slider from '../components/Slides/Slider';
import HotFeeds from '../components/HotFeeds/HotFeeds'

const Home = () => {
  return (
    <>
      <Slider />
      <div className='container'>
        <div>Intro</div>
      </div>
      <HotFeeds/>
    </>
  );
};

export default Home;
