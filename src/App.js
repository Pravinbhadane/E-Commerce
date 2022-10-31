import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import Shop from './components/Routes/Shop';
import About from './components/Routes/About';
import Blog from './components/Routes/Blog';
import Contact from './components/Routes/Contact';
import Pages from './components/Routes/Pages';

function App() {

  // const [data, setData] = useState();

  return (
    <div>
      {/* <Navbar data={data} />
      <Header />
      <Products setData={setData} />
      <Footer /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pages' element={<Pages />} />
      </Routes>
    </div>
  );
}

export default App;
