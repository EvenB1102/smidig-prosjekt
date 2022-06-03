import './App.css';
import Navbar from './component/Navbar/Navbar';
import NewsPage from './component/NewsPage/newsPage';
import { BrowserRouter as Router,Routes ,Route,} from 'react-router-dom';


import Home from './component/Pages';
import Explore from './component/Pages/explore';
import Resources from './component/Pages/resources';
import News from './component/Pages/news';



function App() {
  return (
    <Router>
      <Navbar />
      <NewsPage />
      <Routes >
        <Route path='/' exact element={Home}/>
        <Route path='/explore' element={Explore}/>
        <Route path='/resources' element={Resources}/>
        <Route path='/news' element={News}/>
      </Routes>
    </Router>
    
    
  );
}

export default App;
