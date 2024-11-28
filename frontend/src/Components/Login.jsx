import React,{useEffect} from 'react'

function Login() {
  useEffect(()=>{
    document.title='User/Login'
  })
  return (
    <div style={{
      backgroundImage:'url(login.jpeg)',
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover'
      
    }}>
    <div className='form' style={{backgroundColor:"transparent"}}>
      <h1 style={{textAlign:'center'}}>Login</h1>
      <div className='form-body'>
        <div className='username'>
        <label for="Login Id " className="Form_Label">Login Id</label>
        <input type="Text" id="Login Id" className="Form_Input" placeholder=""></input>
        </div>
        
      </div>
      <div className='username'>
        <label for="Password" className="Form_Label">Password</label>
        <input type="Text" id="Password" className="Form_Input" placeholder="" ></input>
        </div>
        <br />
         <div className='footer' >
       
          <button type='button' style={{background:'grey'}}>Submit</button>
        </div>
    </div>
    </div>
  )
}

export default Login