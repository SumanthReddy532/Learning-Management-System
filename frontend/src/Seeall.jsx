
import React from 'react'; 
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function Home() {  
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

  const onCybersecurity = () => {     
    navigate('/Cybersecurity');
  };
  const onAws = () => {     
    navigate('/Aws');
  };

  return (
    <div className='container'>
      <div>
        <h1>New Technologies </h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card " onClick={onpython} style={{ width: '18rem', height: '300px'}}>
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
      <br /><br /><br /><br /> <br /><br /><br />
      <div className='container'>
      <div>
        
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card" onClick={onCybersecurity} style={{ width: '18rem', height: '300px'}}>
              <img src="cyber.jpg" className="card-img-top" alt="" height={'300px'}/>
              <div className="card-body">
                <h5 className="card-title btn" onClick={onCybersecurity}>Cyber Security</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={onAws} style={{ width: '18rem', height: '300px'}} >
              <img src="aws.webp" className="card-img-top" alt="..." width='250px' height='250px'/>
              <div className="card-body">
                <h1 className="card-title btn" onClick={onAws}>Aws</h1>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={onjava} style={{ width: '18rem', height: '300px'}}>
              <img src="devops.jpeg" className="card-img-top" alt="..."  style={{height:'18rem'}}/>
              <div className="card-body">
                <h5 className="card-title btn" onClick={onjava}>Devops</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={ondigital}  style={{ width: '18rem', height: '300px' }}>
              <img src="uiux.jpg" className="card-img-top" alt=" " />
              <div className="card-body">
                <h5 className="card-title btn" onClick={ondigital}>Ui Ux Design</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <br /><br /><br /><br />
      

      
      </div>
    
    );
}

export default Home;