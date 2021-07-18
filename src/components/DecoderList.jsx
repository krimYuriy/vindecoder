import React from 'react'
import PropTypes from 'prop-types'

function DecoderList({ varList }) {
   console.log(varList);
   return (
      <div className="decoder__info">
         <ul className="decoder__list">
            {varList && varList.map(item => (
               <li key={item.VariableId}>{item.Variable} <span>{item.Value}</span></li>
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
