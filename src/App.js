import Footer from './components/Footer';
import Nav from './components/Nav'
import QuienesSomos from './components/QuienesSomos';
import Servicios from './components/Servicios'
import BasicCard from './components/Card';
import Porque from './components/Porque';
import Carrusel from './components/Carrousel'
import Email from './components/Email';
import Moño from './components/Moño';


function App() {
  return (
    <div className="App">
    <Nav/>
    <QuienesSomos></QuienesSomos>
    <Moño></Moño>
    <Porque></Porque>
    <Servicios></Servicios>
    <BasicCard></BasicCard>
    <Email></Email>
    <Footer></Footer>
    </div>
  );
}

export default App;
