import './App.css';
import Header from '../src/Components/Header.jsx'
import Main from '../src/Components/Main.jsx'
import Footer from '../src/Components/Footer.jsx'

function App() {

  return (
    <div className="App">
      
      <Header />

      <section id='main'>
        <Main />
      </section>
      
      <Footer />
      
    </div>
  );
}

export default App;
