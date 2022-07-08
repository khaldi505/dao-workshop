import React from 'react'
import './components/CreateProposal.css'


const CreateProposal = () => {

  return (
    <div className='CreateProposal d-flex flex-column justify-content-center align-items-center '>
        <h3>Create Propsal</h3>
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
        <input type="submit" className='btn btn-primary' value="Submit" />
        </form>
    </div>
  )
}

export default CreateProposal;