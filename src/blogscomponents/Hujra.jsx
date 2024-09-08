import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom';

const Hujra = () => {
 const navigate=useNavigate();   
   const goback=()=>{
      // window.location.href='/Blog';
     
   }
  return (
    <div style={{marginTop:100}}>
       
       <Container>
        
  <Row className="justify-content-center"> {/* Centering the content */}
    <Col xs='4' md='2'>
    <Button onClick={()=>navigate(-1)}>goback</Button>
    </Col>
    <Col xs='4' md='8'>
      <div className="image_frame_react_bootstrap_hujra">
        <img src="https://khyber-institute.com/wp-content/uploads/2020/10/hujra.jpg" alt="" />
      </div>
      <div className="image_frame_react_bootstrap_hujra_content">
        <h4>The Pashtun Hujra: A Cultural Anchor</h4>
        <p>
          In the rugged and picturesque landscapes of the Pashtun regions, one finds not only breathtaking vistas but also a deeply ingrained culture of hospitality and community bonding. At the heart of this cultural ethos lies the institution of the Hujra, a traditional gathering place for Pashtun men where hospitality meets camaraderie
        </p>
        <div className="image_frame_react_bootstrap_hujra">
        <img width={600} height={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34Mu8NWlNyRKTovNgLxBAeDIhVPM0m_JD6FUgLzeBkyVYx1DShMJfHSznwGVRwy4YZZQ&usqp=CAU" alt="" />
      </div>
         <h4>Hospitality Unmatched: The Soul of the Hujra</h4>
          <p>
          The Hujra serves as a multifunctional space within Pashtun communities, fulfilling roles ranging from a guesthouse to a community center. Typically located at the heart of the village or neighborhood, the Hujra is a sanctuary for male members of the community, where they gather to discuss politics, share stories, seek advice from elders, and make collective decisions.

          </p>
           <h4>
           Culinary Delights and Warm Welcome
           </h4>
            <p>
            One of the most revered aspects of the Hujra culture is its unwavering commitment to hospitality. Guests, whether strangers passing through or members of the community, are received with open arms and treated with utmost respect and generosity. It's not uncommon for visitors to be greeted with traditional Pashtun delicacies such as chapli kebabs, mantu, or sheer khurma, showcasing the rich culinary heritage of the region.
            </p>
      </div>
    </Col>
    <Col xs='4' md='2'>
      3 of 3
    </Col>
  </Row>
</Container>;

    </div>
  )
}

export default Hujra