import React from 'react'
import DecoderForm from '../components/DecoderForm'
import VINList from '../components/VINList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVIN, loadMessage, loadVin } from '../redux/VIN/actions'



function Home() {
   const dispatch = useDispatch()
   const { decodedVariables, cashedVar } = useSelector(({ decoded }) => decoded)

   const onVinLoading = input => {
      dispatch(fetchVIN(input))
   }

   const onUseDecodedVin = vin => {
      dispatch(loadVin(cashedVar[vin][0]))
      dispatch(loadMessage(cashedVar[vin][1]))
   }

   return (
      <div className="decoder">
         <div className="container">
            <div className="decoder-wrapper">
               <DecoderForm
                  onLoad={onVinLoading}
               />
               <VINList
                  varList={decodedVariables}
                  onClick={onUseDecodedVin} />
            </div>
         </div>
      </div>
   )
}

export default Home
