import React from 'react'
import DecoderForm from '../components/DecoderForm'
import VINList from '../components/VINList'

function Home() {
   return (
      <div className="decoder">
         <div className="container">
            <div className="decoder-wrapper">
               <DecoderForm />
               <VINList />
            </div>
         </div>
      </div>
   )
}

export default Home
