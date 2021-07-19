import React, { useEffect, useState } from 'react'

function Info() {
   const [data, setData] = useState([])

   useEffect(() => {
      fetch('https://vpic.nhtsa.dot.gov/api/vehicles/getvehiclevariablelist?format=json')
         .then(response => response.json())
         .then(data => {
            console.log(data)
            setData(data.Results)
         })
   }, [])

   return (
      <div className="info">
         <div className="container">
            <ul className="info__list">
               {data.map(item => (
                  <li key={item.ID}>{item.Name}</li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default Info
