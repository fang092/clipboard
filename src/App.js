import Home from "./components/Home.js";
import './App.css';
import Snippets from "./components/Snippets.js";
import Features from "./components/Features.js";
import Access from "./components/Access.js";
import Supercharge from "./components/Supercharge.js";
import References from "./components/References.js";
import CTABottom from "./components/CTABottom.js";
import Footer from "./components/Footer.js";


function App() {
  return (
    <container className="max-w-full">

      <Home/>
      <Snippets/>
      <Features/>
      <Access/>
      <Supercharge/>
      <References/>
      <CTABottom/>
      <Footer/>

    </container>
   
  );
}

export default App;
