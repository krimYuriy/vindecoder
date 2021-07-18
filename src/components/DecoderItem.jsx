import React from 'react'

function DecoderItem({ variableName, variableValue }) {
   return (
      <li className="decoder__item">
         <strong>{variableName}</strong>
         <span>{variableValue}</span>
      </li>
   )
}

export default DecoderItem
