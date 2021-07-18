import React from 'react'

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

export default Button