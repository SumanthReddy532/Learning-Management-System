import React from 'react'

function Logoutone() {
  return (
    <div className='form' style={{textAlign:'center'}}> 
        <h1 >Logout</h1>
    <div>
    <h5 >Please confirm</h5>
    <p >Are you sure want to log out from my app?</p>
 </div>
     <div className='footer'>
        <button type='submit' className='bg-secondary'> Yes</button>   <button type='submit' className='bg-secondary'>No</button>                     

      </div>
      <br /><br /><br /><br />
      </div>   
  )
}

export default Logoutone