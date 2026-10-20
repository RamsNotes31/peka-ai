import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Live from './components/Live.jsx';
import SpecBoard from './components/SpecBoard.jsx';
import Feed from './components/Feed.jsx';
import BlogUpdates from './components/BlogUpdates.jsx';
import Lineup from './components/Lineup.jsx';
import Social from './components/Social.jsx';
import Products from './components/Products.jsx';
import Demo from './components/Demo.jsx';
import Why from './components/Why.jsx';
import Access from './components/Access.jsx';
import Footer from './components/Footer.jsx';
import { useLang } from './i18n.jsx';

export default function App() {
  const { t } = useLang();
  return (
    <>
      <a className="skip" href="#live">{t.nav.skip}</a>
      <Nav />
      <main id="top">
        <Hero />
        <Live />
        <SpecBoard />
        <Feed />
        <BlogUpdates />
        <Lineup />
        <Social />
        <Products />
        <Demo />
        <Why />
        <Access />
      </main>
      <Footer />
    </>
  );
}
