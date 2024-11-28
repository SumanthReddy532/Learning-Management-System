import React from 'react'
import { useNavigate } from 'react-router-dom';


// import { Link } from 'react-router-dom';




  function Popularseeall() {
    const navigate = useNavigate();    

    const onjava = () => {     
      navigate('/Java');
    };      
  
    const onpowerbi = () => {     
      navigate('/powerbi');
    };   
  
    const onpython = () => {     
      navigate('/Python');
    };   
  
    const ondigital = () => {     
      navigate('/digital');
    };
 
    return (
    <div className='container'>
        <div>
          <h1>Popular courses </h1>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card" onClick={onpython} style={{ width: '18rem', height: '300px'}}>
                <img src="python.jpg" className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title btn" onClick={onpython}>Python</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" onClick={onpowerbi} style={{ width: '18rem', height: '300px'}}>
                <img src="power.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 className="card-title btn" onClick={onpowerbi}>Power BI</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" onClick={onjava} style={{ width: '18rem', height: '300px'}}>
                <img src="java.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title btn" onClick={onjava}>Java</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" onClick={ondigital}  style={{ width: '18rem', height: '300px' }}>
                <img src="digital.png" className="card-img-top" alt=" " />
                <div className="card-body">
                  <h5 className="card-title btn" onClick={ondigital}>Digital Marketing</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br /><br /><br /><br /><br />
        </div>
        
        
    
  )
}


export default Popularseeall;