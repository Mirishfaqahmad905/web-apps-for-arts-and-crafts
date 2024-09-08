import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
const PashtonSkills = () => {
   const navigate=useNavigate();

  return (
     <div>
         <div className="reverse_button">
           <Container>
         <Row>
           <Col md='2'>  <Button onClick={()=>navigate(-1)}>GoBack</Button></Col>
           <Col md='8'>
             <div className="pashton_national_day_culture">
               <img width={700} height={300} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxYaaX3EXJEF6LRE9issgu0XrujQ-EszSgyNhgR753A8QDQj6m6wcyIYuhoz7AW95cVA&usqp=CAU" alt="" />
                <h4>Pashtun Culture Day: Celebrating Heritage, Unity, and Resilience</h4>
                 <p>
                 Pashtun Culture Day stands as a vibrant celebration of the rich tapestry of traditions, values, and customs that define the Pashtun community. Held annually, this occasion serves as a poignant reminder of the resilience, unity, and cultural pride deeply embedded within Pashtun society.
                 </p>
                  <h4>Honoring Tradition</h4>
                   <p>
                   At the heart of Pashtun Culture Day lies a profound reverence for tradition. Pashtuns from all walks of life come together to showcase and celebrate the diverse elements of their cultural heritage, ranging from music, dance, and attire to culinary delights and folklore. It's a time when elders pass down stories of valor and wisdom to younger generations, ensuring the preservation of Pashtun identity for years to come.
                   </p>
                    <h4>Unity Amid Diversity</h4>
                     <p>
                     Pashtun Culture Day transcends geographical boundaries and political affiliations, uniting Pashtuns from across the globe in a spirit of camaraderie and solidarity. Whether residing in the rugged mountains of Afghanistan, the lush valleys of Pakistan, or the bustling cities of the diaspora, Pashtuns stand united in their shared commitment to preserving and promoting their cultural legacy.
                     </p>
                      <h4>Looking Towards the Future</h4>
                       <p>
                       As Pashtun Culture Day unfolds each year, it also serves as a platform for envisioning the future of the Pashtun community. Discussions on education, women's empowerment, socioeconomic development, and peace-building initiatives take center stage, reflecting a collective commitment to shaping a brighter tomorrow while staying rooted in the cultural heritage of the past.
                       </p>
             </div>
           </Col>
           <Col md='2'></Col>
         </Row>
      </Container>
         </div>
     </div>
  )
}
export default PashtonSkills;