import React from 'react';
import Us from './components/pages/us/Us'
import Home from './components/pages/home/Home'
import Solutions from './components/pages/solutions/Solutions'
import Access from './components/pages/access/Access'
import Events from './components/pages/events/Events'
import Footer from './components/pages/footer/Footer'
import Contact from './components/pages/contact/Contact'

import './rodriguez.scss';

const Rodriguez: React.FC = () => {
  return (
    <div className="App">
     <Home />
      <Us />
      <Solutions/>
      <Access />
      <Contact/>
      <Events/>
      <Footer />
    </div>
  );
}

export default Rodriguez;
