import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Faq from './containers/Faq';
import Discover from './containers/Discover';
import AffiliatePrograms from './containers/AffiliatePrograms';
import AssetTrackers from './containers/AssetTrackers';
import OwnFractional from './containers/OwnFractional';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/affiliate" element={<AffiliatePrograms />} />
      <Route path="/asset-trackers" element={<AssetTrackers />} />
      <Route path="/why-invest" element={<OwnFractional />} />
    </Routes>
  </Router>
  )
}

export default App
