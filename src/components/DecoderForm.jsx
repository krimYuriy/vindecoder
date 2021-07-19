import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import DecoderList from './DecoderList'
import { useSelector } from 'react-redux'


function DecoderForm({ onLoad }) {
   const [input, setInput] = React.useState('')

   const { isLoading, VINVariables, message } = useSelector(({ VIN }) => VIN)



   const submitHandler = e => {
      e.preventDefault()

      if (input) {
         onLoad(input)

         setInput('')
      }
   }


   return (
      <div className="decoder-form__wrapper">
         <form
            className="decoder__form"
            onSubmit={submitHandler}
         >
            <label htmlFor="decoder-input">Enter VIN:</label>
            <input
               type="text"
               className="decoder__input"
               id="decoder-input"
               value={input}
               onChange={e => setInput(e.target.value)}
               pattern="^[a-zA-Z0-9]+$"
               required
               maxLength="17"
            />
            <Button type="submit" className="decoder__submit" disabled={isLoading}>Decode</Button>


         </form>

         {
            VINVariables.length ? <DecoderList varList={VINVariables} title={message} /> : ''
         }

      </div>
   )
}

DecoderForm.propTypes = {
   onLoad: PropTypes.func.isRequired
}

export default DecoderForm
