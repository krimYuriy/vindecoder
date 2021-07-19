import React from 'react'
import PropTypes from 'prop-types'

function VINList({ varList, onClick }) {

   return (
      <div className="decoder__list vin">
         <h2 className="vin__title">Last decoded VIN numbers:</h2>
         {varList.length
            ? <ul className="vin__list">
               {varList.map((item, index) => (
                  <li
                     onClick={() => onClick(item)}
                     key={`${item} ${index}`}
                  >{item}
                  </li>
               ))}
            </ul>
            : <p>You haven't entered any vin yet</p>
         }
      </div >
   )
}

VINList.propTypes = {
   varList: PropTypes.array,
   onClick: PropTypes.func
}
export default VINList
