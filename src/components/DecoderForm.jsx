import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import DecoderList from './DecoderList'
import { useSelector } from 'react-redux'
import Validator from './Validator'


function DecoderForm({ onLoad }) {
   const [input, setInput] = React.useState('')
   const [validator, setValidator] = React.useState('')

   const { isLoading, VINVariables, message } = useSelector(({ VIN }) => VIN)



   const submitHandler = e => {
      e.preventDefault()

      if (!input) {
         setValidator('The field must not be empty')
      } else if (input.length < 17) {
         setValidator('At least 17 digits must be entered')
      } else if (input.search(/^[a-zA-Z0-9]+$/) === -1) {
         setValidator('Only Latin letters and numbers can be entered')
      } else {
         onLoad(input)

         setInput('')
         setValidator('')
      }

   }


   return (
      <div className="decoder-form__wrapper">
         <form
            className={"decoder__form"}
            onSubmit={submitHandler}
         >
            <label htmlFor="decoder-input">Enter VIN:</label>
            <input
               type="text"
               className={validator ? "decoder__input invalid" : "decoder__input"}
               id="decoder-input"
               value={input}
               onChange={e => setInput(e.target.value)}
               maxLength="17"
            />
            <Button type="submit" className="decoder__submit" disabled={isLoading}>Decode</Button>


         </form>
         {
            validator && <Validator valText={validator} />
         }
         {
            VINVariables.length ? <DecoderList varList={VINVariables} title={message} /> : ''
         }

      </div>
   )
}

DecoderForm.propTypes = {
   onLoad: PropTypes.func.isRequired,
}

export default DecoderForm
