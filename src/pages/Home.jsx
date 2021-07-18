import React from 'react'
import DecoderForm from '../components/DecoderForm'
import VINList from '../components/VINList'
import { useDispatch } from 'react-redux'
import { fetchVIN } from '../redux/VIN/actions'


function Home() {
   const dispatch = useDispatch()

   const onVinLoading = () => {
      dispatch(fetchVIN())
   }

   return (
      <div className="decoder">
         <div className="container">
            <div className="decoder-wrapper">
               <DecoderForm onLoad={onVinLoading} />
               <VINList />
            </div>
         </div>
      </div>
   )
}

export default Home
