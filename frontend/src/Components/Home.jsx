
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Home() {
  useEffect(() => {
    document.title = 'Home'
  })
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

    
  const onTeacher3 = () => {
    navigate('/Teacher3');
  };

  const onTeacher1 = () => {
    navigate('/Teacher1');
  };

  const onTeacher2 = () => {
    navigate('/Teacher2');
  };

  const onTeacher4 = () => {
    navigate('/Teacher4');
  };


  return (
    <div className='container' >
      <img src="homeimg.jpg" alt="" width={'100%'} />
      <br /><br /><br />
      <div>
        <h1>Latest courses <Link to='/Seeall' className='float-end'> <h4>See All</h4></Link></h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col" >
            <div className="card" onClick={onpython} style={{ width: '18rem', height: '300px' }}>
              <img src="python.jpg " className="card-img-top " alt=""/>
              <div className="card-body">
                <h5 className="card-title btn" onClick={onpython}>Python</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={onpowerbi} style={{ width: '18rem', height: '300px' }}>
              <img src="power.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h1 className="card-title btn" onClick={onpowerbi}>Power BI</h1>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={onjava} style={{ width: '18rem', height: '300px' }}>
              <img src="java.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title btn" onClick={onjava}>Java</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={ondigital} style={{ width: '18rem', height: '300px' }}>
              <img src="digital.png" className="card-img-top" alt=" " width={'100%'} height={'100%'}/>
              <div className="card-body">
                <h5 className="card-title btn" onClick={ondigital}>Digital Marketing</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br />



      <div className='container'>
        <div>
          <h1>Popular courses <Link to='/Popularseeall' className='float-end'><h4>See All</h4></Link></h1>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="card" onClick={onpython} style={{ width: '18rem', height: '300px' }}>
                <img src="python.jpg" className="card-img-top" alt="" />
                <div className="card-body">
                  <h5 className="card-title btn" onClick={onpython}>Python</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" onClick={onpowerbi} style={{ width: '18rem', height: '300px' }}>
                <img src="power.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h1 className="card-title btn" onClick={onpowerbi}>Power BI</h1>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" onClick={onjava} style={{ width: '18rem', height: '300px' }}>
                <img src="java.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title btn" onClick={onjava}>Java</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card" onClick={ondigital} style={{ width: '18rem', height: '300px' }}>
                <img src="digital.png" className="card-img-top" alt=" " />
                <div className="card-body">
                  <h5 className="card-title btn" onClick={ondigital}>Digital Marketing</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <br /><br /><br /><br /><br /><br />

      <div>
        <h1>Professor <Link to='/Professorseeall' className='float-end'><h4>See All</h4></Link></h1>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card" onClick={onTeacher3} style={{ width: '18rem', height: '300px' }}>
              <img src="teach1.avif" className="card-img-top" alt="" style={{ width: '18rem', height: '290px' }} />
              <div className="card-body">
                <h5 className="card-title">Francesca</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={onTeacher1} style={{ width: '18rem', height: '300px' }}>
              <img src="teach3.avif" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Paul Jhonson</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={onTeacher4} style={{ width: '18rem', height: '300px' }}>
              <img src="teach2.jpeg" className="card-img-top" alt="..." style={{ width: '16rem', height: '290px' }} />
              <div className="card-body">
                <h5 className="card-title">Valentina</h5>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" onClick={onTeacher2} style={{ width: '18rem', height: '300px' }}>
              <img src="teach4.png" className="card-img-top" alt="" style={{ width: '17rem', height: '290px' }} />
              <div className="card-body">
                <h5 className="card-title">Christopher</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br /><br /><br /><br />


      <div className="container">
      <br /><br />
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="kapil2.jpg" class="d-block w-100" alt="" style={{ height: '400px', }} />
          </div>
          <div class="carousel-item">
            <img src="soft.jpg" class="d-block w-100" alt="" style={{ height: '400px', }} />
          </div>

          <div class="carousel-item">
            <img src="clouds.jpg" class="d-block w-100" alt="" style={{ height: '400px', }} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
</div>
      <br /><br /><br /><br /><br /><br />
  </div>
  );
}

export default Home;
