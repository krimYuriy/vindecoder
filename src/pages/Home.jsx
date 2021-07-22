import React from 'react'
import DecoderForm from '../components/DecoderForm'
import VINList from '../components/VINList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVIN, loadVin } from '../redux/VIN/actions'
import { setList } from '../redux/VINList/actions'


function Home() {
   const dispatch = useDispatch()
   const { decodedVariables, cashedVar } = useSelector(({ decoded }) => decoded)

   const onVinLoading = input => {
      dispatch(fetchVIN(input))
      dispatch(setList(input))
   }

   const onUseDecodedVin = vin => {
      dispatch(loadVin(cashedVar[vin]))
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
