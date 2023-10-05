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
      <div style={styles.container}>
        <div style={styles.columnContainer}>
          <HomeScreen title={"Secret Garden"} subtitle={"(NewYork Times Best Seller, #1)"}></HomeScreen>
          <HomeScreen title={"Dune"}></HomeScreen>
          <HomeScreen></HomeScreen>
          <HomeScreen></HomeScreen>
        </div>
        <div style={styles.columnContainer}>
          <HomeScreen></HomeScreen>
          <HomeScreen></HomeScreen>
          <HomeScreen></HomeScreen>
          <HomeScreen></HomeScreen>
        </div>
      </div>
    </div>

  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
},
  columnContainer:{
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    
    display: "flex",
    flexDirection: "column"
  },
  

}
export default App;