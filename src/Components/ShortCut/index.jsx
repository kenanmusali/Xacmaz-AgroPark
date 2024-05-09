import React from 'react';
import { useLocation } from 'react-router-dom';
import './style.css';
import Arrowkey from './ArrowKey';
import Formkey from './FormKey';
import Modekey from './ModeKey';

function ShortCut() {
  const location = useLocation();
  const isContactOrHome = location.pathname === '/contact' || location.pathname === '/';

  return (
    <div>
      <div className={`divShortCutIcon ${isContactOrHome ? 'smallGap' : ''}`}>
        <Arrowkey />
        <Formkey />
        <Modekey />
      </div>
    </div>
  );
}

export default ShortCut;
