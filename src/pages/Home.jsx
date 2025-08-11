import Landpage from "../components/landpage/Landpage";
import News from "../components/news/News";
import InstituteData from "../components/institutedata/InstituteData";
import Product from "../components/product/Product";
import AboutComponent from "../components/aboutcomponent/AboutComponent";
import Gallery from "../components/gallery/Gallery";
import ContactComponent from "../components/contactcomponent/ContactComponent";
import Footer from "../components/footer/Footer";

const Home = () => {

  return (
    <main className="">
      <Landpage />
      <News />
      <InstituteData />
      <Product />
      <AboutComponent />
      <Gallery />
      <ContactComponent />
      <Footer />
    </main>
  );
};

export default Home;
