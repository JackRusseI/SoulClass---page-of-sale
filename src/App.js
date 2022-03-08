import './App.css';
import { DowloadInfos } from './dowloadInfos/DowloadInfos';
import { Exclusive } from './exclusiveContents/Exclusive';
import { Explication } from './explication/Explication';
import { FirstOffer } from './firstoffer/FirstOffer';

import { Header } from './header/Header';
import { Platforms } from './platforms/Platforms';

function App() {
  return (
    <div className="App">
     <Header />
     <FirstOffer />
     <Explication />
     <Platforms />
     <DowloadInfos />
     <Exclusive />
    </div>
  );
}

export default App;
