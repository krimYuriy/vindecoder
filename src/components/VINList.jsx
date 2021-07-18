import React from 'react'

function VINList({ varList }) {
   return (
      <div className="decoder__list vin">
         <h2 className="vin__title">Last decoded VIN numbers:</h2>
         <ul className="vin__list">
            {varList && varList.map((item, index) => (
               <li key={`${item} ${index}`}>{item}</li>
            ))}
         </ul>
      </div >
   )
}

export default VINList
