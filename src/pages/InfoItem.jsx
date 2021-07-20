import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

function InfoItem() {
   const { variableId } = useParams()

   const { infoVariables } = useSelector(({ info }) => info)

   const currentInfoVar = infoVariables.find(item => item.ID === +variableId)

   return (
      <div className="info">
         <div className="container">
            {currentInfoVar && <div className="info__text" dangerouslySetInnerHTML={{ __html: currentInfoVar.Description }} />}
         </div>
      </div>
   )
}

export default InfoItem
