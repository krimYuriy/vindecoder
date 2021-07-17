import React from 'react'

function DecoderForm() {
   const [input, setInput] = React.useState('')

   return (
      <div className="decoder-form__wrapper">
         <form className="decoder__form">
            <label htmlFor="decoder-input">Enter VIN:</label>
            <input
               type="text"
               className="decoder__input"
               id="decoder-input"
               value={input}
               onChange={e => setInput(e.target.value)}
            />
            <button type="submit" className="decoder__submit">Decode</button>
         </form>
         <div className="decoder__info">
            API info
         </div>
      </div>
   )
}

export default DecoderForm
