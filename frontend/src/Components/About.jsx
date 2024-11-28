import React,{useEffect} from 'react'

function About() {
  useEffect(()=>{
    document.title='About'
  })
  return (
    <div className="container">
      <h1 style={{textAlign:'center'}}>About Us</h1>
      <div className='row'>
       <div className='col'>
        <img src="kapil2.jpg" alt="" style={{width:'100%'}}/>
        <br /><br />
        <p>We are dedicated to empowering individuals with practical skills and knowledge through
industry-focused training programs. Our expert-led courses in fields like IT, healthcare, and
business are designed to prepare students for success. With hands-on projects and experienced
trainers, we help you achieve your career goals.</p>     
        </div>
        
       </div>
       <br /><br /><br /><br /><br /><br />
      <div className='row'>
        <div className='col' >
        
        <img src="kapil1.jpg" alt="" style={{width:'90%'}} />
       </div>
       
       <div className='col'>
       <h2>Our Vision</h2>
       <div className='divider'></div>
       <p>At Kapil Group, we believe that learning is a lifelong journey, grounded in curiosity and open- mindedness. We are committed to fostering growth and inspiring change across industries through innovation and sustainable practices. With roots that began in 1981, our journey has evolved into a diverse network of over 44 companies and 460 locations, serving communities in finance, technology, healthcare, agriculture, real estate, and more</p>
       </div>
       </div>
       <br /><br /><br /><br /><br />
       <div className='row'>
       <div className='col'>
       <h2>Discover And Growth Everyday</h2>
        <p>Kapil Group, a diverse conglomerate, operates over 44 companies across 460+ locations,
creating job opportunities for 17,000+ people and achieving an annual turnover surpassing Rs
6000 crore as of March 2021. With ventures in areas like finance, real estate, construction,
hospitality, healthcare, technology, agriculture, and even drone and software training, Kapil
Group has expanded from its modest beginnings in 1981 to become a leader across multiple
sectors. From building sustainable solutions to providing skill development, our journey is
driven by a commitment to innovation and impact.</p>
       </div>
       <div className='col'>
        <img src="kapil3.jpg" alt="" style={{width:'80%'}}/>
       </div>
       </div>
       <br /><br /><br /><br />
       <div className='row'>
       <div className='col'>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ad temporibus ipsum placeat voluptatem necessitatibus facere, velit adipisci at nulla dolore dolorum voluptate consectetur quas. Nobis provident unde non nostrum facere beatae aperiam quidem, ratione delectus expedita! Aspernatur voluptatem veniam doloribus velit voluptatibus amet cumque numquam expedita, esse quo culpa, impedit quis consequuntur, aperiam ullam asperiores officiis eaque? Tenetur sunt obcaecati qui dolore architecto. Officiis aperiam similique voluptates, obcaecati voluptatem perferendis! Autem minus adipisci nostrum amet expedita, architecto similique fuga harum nesciunt alias necessitatibus suscipit soluta saepe sit tenetur exercitationem quisquam et corporis modi voluptates omnis? Saepe architecto fugit nihil.</p>
       </div>
       <div className='col'>
        <img src="kapil.jpeg" alt="" style={{width:'60%'}}/>
       </div>
       <div className='col'>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ad temporibus ipsum placeat voluptatem necessitatibus facere, velit adipisci at nulla dolore dolorum voluptate consectetur quas. Nobis provident unde non nostrum facere beatae aperiam quidem, ratione delectus expedita! Aspernatur voluptatem veniam doloribus velit voluptatibus amet cumque numquam expedita, esse quo culpa, impedit quis consequuntur, aperiam ullam asperiores officiis eaque? Tenetur sunt obcaecati qui dolore architecto. Officiis aperiam similique voluptates, obcaecati voluptatem perferendis! Autem minus adipisci nostrum amet expedita, architecto similique fuga harum nesciunt alias necessitatibus suscipit soluta saepe sit tenetur exercitationem quisquam et corporis modi voluptates omnis? Saepe architecto fugit nihil.</p>
       </div>
       </div>
       
       </div>
  )
}

export default About