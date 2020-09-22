import React, {useState} from 'react';
import './Store.css';
import PageUnderConstruction from '../components/PageUnderConstruction';
import { Button } from '../components/Button';

function Store() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton);


  return (
    <div className="">
      <p className="Hello-text">The Store!</p>

      <div className='menu-icon' onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
      </div>
      
      {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

      {/* <PageUnderConstruction /> */}
    </div>
  );
}

export default Store;
