import React from 'react'
import PropTypes from 'prop-types'
import DecoderItem from './DecoderItem';

function DecoderList({ varList }) {

   return (
      <div className="decoder__info">
         <ul className="decoder__list">
            {varList && varList.map(item => (
               <DecoderItem
                  key={item.VariableId}
                  variableName={item.Variable}
                  variableValue={item.Value}
               />
            ))}
         </ul>
      </div>
   )
}

DecoderList.propTypes = {
   varList: PropTypes.arrayOf(PropTypes.object).isRequired
}

DecoderList.defaultProps = {
   varList: []
}
export default DecoderList
