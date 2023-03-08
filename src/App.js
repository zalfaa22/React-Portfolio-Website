import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';
// import Beranda from './beranda';
// import TentangSaya from './tentangsaya';
// import Karya from './karya';
// import Kontak from './kontak';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Gallery from './pages/Gallery';

class App extends React.Component {
  render(){
    return(
      <div> 
        <Navbar />
        <Utama/>
        <Footer />
      </div>
    );
  }
}

export default App;