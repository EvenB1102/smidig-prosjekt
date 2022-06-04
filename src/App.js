import './App.css';
import Navbar from './component/Navbar/Navbar';
import NewsPage from './component/NewsPage/newsPage';
import { BrowserRouter as Router,Routes ,Route,} from 'react-router-dom';


import Home from './component/Pages';
import Settings from './component/Pages/Settings';
import Resources from './component/Pages/resources';
import News from './component/Pages/news';



function App() {
  return (
    <Router>
      <Navbar />
      <NewsPage />
      <Routes >
        <Route path='/' exact element={Home}/>
        <Route path='/resources' element={Resources}/>
        <Route path='/settings' element={Settings}/>
        <Route path='/profile' element={Resources}/>
        <Route path='/settings' element={News}/>
        <Route path='/subscription' element={Resources}/>
        <Route path='/log-in' element={News}/>
      </Routes>
    </Router>
    
    
  );
}

export default App;
