import './App.css';
import { DowloadInfos } from './dowloadInfos/DowloadInfos';
import { Exclusive } from './exclusiveContents/Exclusive';
import { Explication } from './explication/Explication';
import { FirstOffer } from './firstoffer/FirstOffer';
import { Footer } from './footer/Footer';

import { Header } from './header/Header';
import { Platforms } from './platforms/Platforms';
import { Pricing } from './pricing/Pricing';
import { Sample } from './sample/Sample';
import { SoulTV } from './soultv/SoulTV';

function App() {
  return (
    <div className="App">
     <Header />
     <FirstOffer />
     <Explication />
     <Platforms />
     <DowloadInfos />
     <Exclusive />
     <SoulTV />
     <Pricing />
     <Sample />
     <Footer />
    </div>
  );
}

export default App;
