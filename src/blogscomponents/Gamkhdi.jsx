import React from 'react'
// import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom';

const Gamkhdi = () => {
   const navigate=useNavigate();
    const goback=()=>{
      // navigate(-1);
    }
    const GhamKhadi=()=>{
      //  window.location.href="/ghamkhadi";
    }
  return (
 <div>
  <Container style={{marginTop:30}}>
  <Row>
  <Col> <button onClick={()=>navigate(-1)}>GoBack</button></Col>
        <Col xs={6} >
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDKhjrKmWZrIBSwL_LMjsnmxBdolaFu0eDg&s" alt="" />
          <p>
          د کلي ووځه خو له نرخه مه وځه
Da kaley wawoza kho la narkha ma woza
“Let leave the village but not its conventions”

In the above proverb, the love of traditions and conventions is described to be more essential for a Pashtun than the love of the village they are born in. In some ways, it can be the equivalent of the old English adage “when in Rome, do as the Romans do” but the intensity and meaning of the Pashto proverb is quite different. It says that one can’t give up the conventions of their village even after one moves to another part of the world.

Pashtuns live in tribal society, in which a village is considered to be a unit of families. In villages, Pashtuns live like a family; they know each other by names and clans, help each other in time of need, and share food and other daily necessities. This relationship is called غم ښادي (gham khadi). Pashtuns have a natural love for the village in which they are born and raised, and usually only leave their village when they feel a threat to their life.

غم ښادي (Gham Khadhi)

This literally means “sadness and happiness” and refers to celebration of sad and happy events in the social life of a Pashtun. A good example would be a wedding celebration in which the whole village participate in a way like close family members do. Similarly, if someone dies, the whole village gets together in the village hall called هوجره (hujra) to pray for the departed soul. Participation and collective celebration of these events is extremely important to Pashtuns, a way of life which is known as Gham Khadi. It is unthinkable to live in a Pashtun society without attending these gatherings.

رواج (Revaaj)

Revaaj means conventions or unwritten rules which regulate social order in a Pashtun society. Pashtuns strictly adhere to revaaj even if they are in conflict with the law of the land. This word can be used to mean “custom” in Hindi, Persian, Arabic and Urdu. In Pashto, it specifically refers to the Pashtun way of life.

پښتونولي (Pashtunwali)

A good Pashtun is one who strictly adheres to the Pashtun code of life which is called  پښتونولي (Pashtunwali). These are conventions but they have a vigilant social censure behind them which make them impossible to be broken by a Pashtun. A Pashtun is expected to respect these conventions even if he/she is no more residing in a Pashtun society.
د کلي ووځه خو له نرخه مه وځه
          </p>
          </Col>
        <Col>3 of 3</Col>
      </Row>
  </Container>
 </div>
  )
}

export default Gamkhdi