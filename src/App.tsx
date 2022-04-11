import { ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

import Aeswolf from './components/Aeswolf';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);
  const listenToScroll = () => {
    let heightToHideFrom = 200;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    winScroll > heightToHideFrom ? isVisible && setIsVisible(false) : setIsVisible(true);
  };

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="flex h-screen flex-col items-center">
          <div className="mx-auto my-auto">
            <Aeswolf toggle={isVisible} />
          </div>
          {isVisible && (
            <Link
              className="absolute bottom-2 cursor-pointer"
              to="coming-soon"
              spy={true}
              smooth={true}
              duration={2500}
            >
              <ChevronDown size={50} color={'#2E6481'} />
            </Link>
          )}
        </div>
        <div className="h-[32vh] min-h-full">
          <h1
            id="coming-soon"
            className="mt-10 font-mono text-3xl font-bold tracking-wider text-slate-200"
          >
            Coming Soon
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
