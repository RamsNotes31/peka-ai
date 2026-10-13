import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import SpecBoard from './components/SpecBoard.jsx';
import Feed from './components/Feed.jsx';
import Products from './components/Products.jsx';
import Demo from './components/Demo.jsx';
import Why from './components/Why.jsx';
import Access from './components/Access.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip" href="#produk">Lewati ke konten</a>
      <Nav />
      <main id="top">
        <Hero />
        <SpecBoard />
        <Feed />
        <Products />
        <Demo />
        <Why />
        <Access />
      </main>
      <Footer />
    </>
  );
}
