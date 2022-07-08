import React from 'react'

const CreateProposal = () => {
  return (
    <div className='CreateProposal'>
        <form>
        <label>
        Fund Type
            <input type="text" name="name" />
        </label>

    <label>
    Descripton
    <input type="text" name='Descripton'/>
    </label>
    <label>
    Wallet ID
    <input type="text" name='walletId'/>
    </label>
    <label >
        Amount
        <input type="number" name="Amount" id="Amount" />
    </label>
    <label>
        Duration
        <input type="date" name="Duration" id="Duration" />
    </label>    
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default CreateProposal
