import React from 'react';
import '../Css/About.css';
import Lottie from 'lottie-react';
import JoinUs from '../assets/JoinUss.json';
import Vision from '../assets/vision.json';
import WhoWeare from '../assets/Who_weAre.json';
import animationData from '../assets/ourMission.json'
import '../style.css';
// import  AboutUspage from '../assets/data.lottie';
const About = () => {
  return (
 <>
  <div className="about-page-react">
     <div className="our-story">
       <div className="left-image-story">
         {/* <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" /> */}
       </div>
        <div className="right-story-image">
          <div className="head-store">
           
               <h1 style={{fontWeight:'bolder'}}>About Us </h1>
      
    

               <p>

Welcome to tradiotional Arts and Crafts , where style meets substance! We're more than just an online store; we're a passionate team of individuals dedicated to helping you discover and embrace your unique sense of style while making your shopping experience extraordinary.
               </p>
          </div>
        </div>
     </div> 


      <div className="about-me-creater_website">
     

      </div>
    
      <div className="who_we_are">
         <center>
           <div className="top-image-who-weare">
            
            <Lottie style={{width:400,height:300}} animationData={WhoWeare} autoplay={true} loop={true}/>
            <h2>Who  We Are </h2> 
               
           </div>
            <div className="content-who-weare">
               <p>
                we are  a group of poeple we working  as team and we are very excited to work and make our work more and more good . we are collecting also those people who are not very good in his work and gave chance and opertunity to him 
               </p>
            </div>
         </center>
      </div>
     <div className="container-display-image">
     <div className="our-mission-about">
      <center>
      <div className="missson-content">
         <div className="mession-image">
             {/* <img src="https://media.istockphoto.com/id/501539900/photo/mission.jpg?s=612x612&w=is&k=20&c=QMPAnMV1Gh952tU-RkGlJ5lI4AEz4eBdbYwoCQOOA5s=" alt="" /> */}
                <Lottie style={{width:200,height:300}} animationData={animationData} autoPlay={true} loop={true}/>
          </div>
            <h1>Our Mission</h1>
             <p style={{textAlign:'center'}}>
At [Your Brand Name], our mission is simple yet profound: to inspire and empower you to express yourself confidently through fashion. We believe that style is a form of self-expression, and it should be accessible, sustainable, and ethical. We're committed to curating a collection of products that align with these principles.
             </p>
         </div>
      </center>
      </div>
       <div className="join-us-team">
         <div className="left-image">
           <center> <Lottie  style={{width:200,height:300,textAlign:'center'}} onPlay={true} animationData={JoinUs}    /></center>
           {/* <img src="https://thumbs.dreamstime.com/z/join-us-concept-wooden-cubes-against-blue-background-job-vacancy-community-membership-announcement-business-195920824.jpg?w=992" alt="" /> */}
         </div>
          <div className="right-container">
             <h1> Join Us </h1>
             <p >
     
We invite you to explore our ever-evolving collection and discover pieces that resonate with your unique style. Whether you're a trendsetter, a conscious consumer, or both, there's a place for you here. Follow us on social media [Links to Social Media] to stay updated on the latest trends, promotions, and news.
Thank you for choosing tradiotional  as your destination for fashion and lifestyle products. We look forward to being part of your style journey and making your shopping experience exceptional.
             </p>
          </div>
       </div>
        <div className="our-vission-team">
           <div className="logo-vission">
             <Lottie style={{width:200,height:300}} animationData={Vision} autoplay={true} loop={true}/>
           </div>
              <h1>Our Vision</h1>
            <div className="content-vission">
               <p>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nisi et veritatis magni, soluta, molestiae dicta quia culpa alias at, harum voluptatum dolorem odio ex nam nulla ipsam repellendus explicabo.
               </p>
            </div>
        </div>
     </div>
  </div>

 </>
  )
}

export default About