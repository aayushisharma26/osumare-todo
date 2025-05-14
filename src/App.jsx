import { Nav } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeaturesSection } from "./components/Process";
import { Testimonial } from "./components/Testimonial";
import { Organize } from "./components/Organize";
import { Footer } from "./components/Footer";
 
function App(){
  return(
    <div>
      <Nav />
      <Hero />
      <FeaturesSection />
      <Testimonial />
      <Organize />
      <Footer />
    </div>
  )

}
export default App;