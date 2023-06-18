import { Outlet } from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Navbar';
import Container from './components/Container';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>

      <Container customClass='min-height'>
        <Outlet/>
      </Container>

      <p>teste</p>

      <Footer/>
    </div>
  );
}

export default App;
