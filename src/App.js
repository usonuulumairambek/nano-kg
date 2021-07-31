import './App.css';
import Header from './components/header/Header';
import Marking from './components/marking/Marking';
import NewsMarking from './components/news/NewsMarking';
import Swiperr from './components/swiperPage/Swiper.jsx';

function App() {
  return (
    <div className="App">
     <Header />
     <Swiperr />
     <Marking />
     <NewsMarking />
    </div>
  );
}

export default App;
