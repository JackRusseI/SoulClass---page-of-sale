import './App.css';
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
    </div>
  );
}

export default App;
