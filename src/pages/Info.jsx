import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInfo } from '../redux/Info/actions'

function Info() {
   const dispatch = useDispatch()
   const { infoVariables } = useSelector(({ info }) => info)

   useEffect(() => {
      dispatch(fetchInfo())
   }, []) // eslint-disable-line

   return (
      <div className="info">
         <div className="container">
            <ul className="info__list">
               {infoVariables.map(item => (
                  <li key={item.ID}><Link to={`/variables/${item.ID}`}>{item.Name}</Link></li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default Info
