import Navbar from '../components/NavBar';
import Details from '../components/Details';
import Projects from '../components/Projects';
import { ThemeProvider } from '@mui/material';
import theme from '../theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Details />
      <Projects />
    </ThemeProvider>
  );
}

export default App;
