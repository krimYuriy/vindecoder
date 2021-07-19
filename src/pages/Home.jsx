import React from 'react'
import DecoderForm from '../components/DecoderForm'
import VINList from '../components/VINList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVIN } from '../redux/VIN/actions'
import { selectVin, setList } from '../redux/VINList/actions'


function Home() {
   const dispatch = useDispatch()
   const { decodedVariables } = useSelector(({ decoded }) => decoded)

   const onVinLoading = input => {
      dispatch(fetchVIN(input))
      dispatch(setList(input))
   }


   const onSelectValue = value => {
      dispatch(selectVin(value))
      dispatch(fetchVIN(value))
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
                  onClick={onSelectValue} />
            </div>
         </div>
      </div>
   )
}

export default Home
