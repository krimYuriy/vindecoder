import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import DecoderList from './DecoderList'
import { useSelector } from 'react-redux'
import Validator from './Validator'

function DecoderForm({ onLoad, onSetList }) {
   const [input, setInput] = React.useState('')
   const [val, setVal] = React.useState('')

   const { isLoading, VINVariables } = useSelector(({ VIN }) => VIN)

   const submitHandler = e => {
      e.preventDefault()

      if (!input) {
         setVal('The field must not be empty')
      } else if (input.length > 17) {
         setVal('no more than 17 symbols')
      } else if (input) {
         onLoad(input)
         onSetList(input)

         setInput('')
         setVal('')

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
               className={val ? " decoder__input decoder__input-danger" : "decoder__input"}
               id="decoder-input"
               value={input}
               onChange={e => setInput(e.target.value)}
            />
            <Button type="submit" className="decoder__submit" disabled={isLoading}>Decode</Button>
            {

            }
         </form>
         {
            val && <Validator valText={val} />
         }
         {
            VINVariables.length ? <DecoderList varList={VINVariables} /> : ''
         }

      </div>
   )
}

DecoderForm.propTypes = {
   onLoad: PropTypes.func.isRequired
}

export default DecoderForm
