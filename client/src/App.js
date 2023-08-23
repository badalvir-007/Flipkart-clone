
import './App.css';
import Headere from './components/header/Headere';
import Home from './components/header/home/Home';
import DataProvider from './context/DataProvider';
import { Box } from '@mui/material';
function App() {
  return (
    <DataProvider className='App'>
      <Headere />
      
      <Box  style={{margin :'54px'}}>
      <Home />
      </Box>
    </DataProvider>
  );
}

export default App;
