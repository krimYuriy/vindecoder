import React from 'react'

function VINList({ varList }) {
   return (
      <div className="decoder__list vin">
         <h2 className="vin__title">Last decoded VIN numbers:</h2>
         {varList.length
            ? <ul className="vin__list">
               {varList.map((item, index) => (
                  <li key={`${item} ${index}`}>{item}</li>
               ))}
            </ul>
            : <p>You haven't entered any vin yet</p>
         }
      </div >
   )
}

export default VINList
