import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { AxioContextProvider } from "./axioContext";

function App() {

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
