import React from 'react'
import PropTypes from 'prop-types'

function DecoderItem({ variableName, variableValue }) {
   return (
      <li className="decoder__item">
         <strong>{variableName}</strong>
         <span>{variableValue}</span>
      </li>
   )
}

DecoderItem.propTypes = {
   variableName: PropTypes.string,
   variableValue: PropTypes.string
}

export default DecoderItem
