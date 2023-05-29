import { Outlet } from 'react-router-dom';

// COMPONENTS
import Navbar from './components/Navbar';
import Container from './components/Container';

function App() {
  return (
    <div>
      <Navbar/>

      <Container customClass='min-height'>
        <Outlet/>
      </Container>

      <p>footer</p>
    </div>
  );
}

export default App;
