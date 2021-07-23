import React from 'react'
import PropTypes from 'prop-types'

function Validator({ valText }) {
   return (
      <div className="validator">
         {valText}
      </div>
   )
}

Validator.propTypes = {
   valText: PropTypes.string
}

export default Validator
