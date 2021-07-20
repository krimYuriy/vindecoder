import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, className, disabled, ...attr }) {
   return (
      <button
         {...attr}
         disabled={disabled}
         className={className}>
         {children}
      </button>
   )
}

Button.propTypes = {
   children: PropTypes.string,
   className: PropTypes.string,
   disabled: PropTypes.bool
}

export default Button