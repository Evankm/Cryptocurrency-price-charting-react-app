import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import './App.css';
import Header from './Components/Header';
import CoinPage from './Pages/CoinPage';
import HomePage from './Pages/HomePage';

function App() {

  const useStyles = makeStyles(() => ({
    App:{
      backgroundColor: '#001427',
     //backgroundColor: '#262828',
      color: 'white',
      minHeight: '100vh',
    }
  }));

  const classes =  useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
      <Header/>
      <Routes>
        <Route path='/' component={HomePage} element={<HomePage/>} exact/>
        <Route path='/coins/:id' component={CoinPage} element={<CoinPage/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
