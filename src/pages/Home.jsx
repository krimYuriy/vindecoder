import React from 'react'
import DecoderForm from '../components/DecoderForm'
import VINList from '../components/VINList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchVIN } from '../redux/VIN/actions'
import { setList } from '../redux/VINList/actions'


function Home() {
   const dispatch = useDispatch()

   const onVinLoading = input => {
      dispatch(fetchVIN(input))
   }

   const onSetVarList = variable => {
      dispatch(setList(variable))
   }
   const { decodedVariables } = useSelector(({ decoded }) => decoded)

   return (
      <div className="decoder">
         <div className="container">
            <div className="decoder-wrapper">
               <DecoderForm
                  onLoad={onVinLoading}
                  onSetList={onSetVarList}
               />
               <VINList varList={decodedVariables} />
            </div>
         </div>
      </div>
   )
}

export default Home
