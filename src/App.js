import React from 'react';
import './App.css';
import logo from './assets/Cat.dancing.png';
import ic_bell from './assets/ic_bell.svg';
import ic_mailbox from './assets/ic_mailbox.svg';
import ic_user from './assets/ic_user.svg';
import ic_chat from './assets/ic_chat.svg';
import Navigation from './components/Navigation';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <div>
    <Navigation></Navigation>
    <HomeScreen></HomeScreen>
    </div>
    
  );
}
const styles = {
  
}
export default App;