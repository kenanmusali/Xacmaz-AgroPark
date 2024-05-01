import React from 'react'
import './style.css'
import Arrowkey from './ArrowKey'
import Formkey from './FormKey'
import Modekey from './ModeKey'

function ShortCut() {
  return (
    <div>
      <div className="divShortCutIcon">
        <Arrowkey />
        <Formkey />
        <Modekey />
      </div>
    </div>
  )
}

export default ShortCut