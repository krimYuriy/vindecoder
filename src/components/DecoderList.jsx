import React from 'react'
import PropTypes from 'prop-types'
import DecoderItem from './DecoderItem';

function DecoderList({ varList, title }) {

   return (
      <div className="decoder__info">
         <h2 className="decoder__title">{title}</h2>
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
   varList: PropTypes.arrayOf(PropTypes.object).isRequired,
   title: PropTypes.string
}

DecoderList.defaultProps = {
   varList: [],
   title: ''
}
export default DecoderList
