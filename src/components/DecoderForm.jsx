import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import DecoderList from './DecoderList'
import { useSelector } from 'react-redux'

function DecoderForm({ onLoad, onSetList }) {
   const [input, setInput] = React.useState('')

   const { isLoading, VINVariables } = useSelector(({ VIN }) => VIN)

   const submitHandler = e => {
      e.preventDefault()

      onLoad(input)
      onSetList(input)
      setInput('')
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
            />
            <Button type="submit" className="decoder__submit" disabled={isLoading}>Decode</Button>
         </form>
         <DecoderList varList={VINVariables} />
      </div>
   )
}

DecoderForm.propTypes = {
   onLoad: PropTypes.func.isRequired
}

export default DecoderForm
