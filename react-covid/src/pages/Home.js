import Footer from "../components/Footer";
import Hello from "../components/Hello";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar";
import Hero2 from "../components/Hero2/index";

function Main() {
  return (
    <main>
   <Hello/>
   <Hero/>
   <Hero2/>

    </main>
  );
}

function Home() {
  return (
 <div>   
      <Navbar />
      <Main />
      <Footer />
      
      
    </div>
  );
}

export default Home;
