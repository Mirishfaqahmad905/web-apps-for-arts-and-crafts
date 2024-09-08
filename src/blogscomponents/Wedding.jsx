import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom'
const Wedding = () => {
  const navigate=useNavigate();
    const goBack=()=>{
       navigate(-1);
    }
  return (
    <div>
       <button onClick={goBack}>Back </button>
     <Container>
     <Row>
        <Col>1 of 3</Col>
        <Col xs={6}>  <br/>
   <strong>      Talk Dil Ka Rishta</strong> 

  <br/>

 <strong>Pashtun customs related to weddings and marriage.</strong>  <br/>

 <strong>Introduction:</strong>
 <p> A Wedding Is One of the Most Important Ceremonies in Pashtun Culture. 

A wedding is one of the most important ceremonies in Pashtun culture. It is a time when families come together to celebrate the love and commitment of their children. The bride and groom exchange vows and share a special dance, called the Attan, which is considered to be the national dance of Afghanistan. The celebration typically lasts for three days, and includes music, food, and traditional dances.  
  <br/>
<strong>Traditions:  <br/></strong>   <br/>There Are Many Traditions Associated With Pashtun Weddings. 

A wedding is one of the most important ceremonies in Pashtun culture. It is a time to celebrate the love between two people and to come together as a community. Weddings are typically very large and festive affairs, with many guests in attendance. The bride and groom exchange vows and share a dance, surrounded by their friends and family. Wedding traditions vary from one Pashtun community to the next, but they all hold great importance to the people who observe them. 
</p>  <br/>
<strong>The Engagement</strong>:  <br/> One of the First Steps in a Pashtun Wedding Is Engagement. 

The engagement is one of the first steps in a Pashtun wedding. This can be a very special time for the bride and groom-to-be, as they start to prepare for their big day. There are many customs and rituals that take place during an engagement, which can vary depending on the region of Afghanistan that you are from. Typically, the families of the bride and groom will meet to discuss the details of the wedding. This includes the date, location, and who will be performing the ceremony.  
  <br/>
<strong>The Ceremony</strong>:  <br/> The Actual Wedding Ceremony Is a Very Special Event. 

The wedding ceremony is a very important event in Pashtun weddings. It is often the most anticipated and celebrated event of the wedding. The ceremony is a time for family and friends to come together and celebrate the new couple's union. The ceremony typically takes place outdoors, under a large tent, and is presided over by an elder or religious leader. The bride and groom exchange vows and rings, and share a cup of honey to symbolize their sweetness together. There is usually lots of music, dancing, and celebration during the ceremony. It is a very special time for the bride and groom and their families. 

The Reception: After the Wedding Ceremony, There Is a Reception. 

The reception is the most festive and joyous part of a Pashtun wedding. It is a time for family and friends to come together and celebrate the new couple. There is usually lots of food, music, and dancing. Guests may also give speeches or perform traditional dances. The bride and groom usually have their first dance as husband and wife at the reception. 
  <br/>
<strong>Food</strong>:  <br/> One of the Most Important Aspects of Any Wedding Is Food. 

Food is one of the most important aspects of any wedding. The food at a Pashtun wedding is no exception. There are many traditional Pashtun dishes that are served at weddings. Some of the most popular dishes include qabli pulao, machh borani, and shalwar kameez. These dishes are all very flavorful and hearty. They are sure to satisfy everyone's appetite. 
  <br/>
<strong>Gifts</strong>:  <br/> Guests Typically Bring Gifts to a Pashtun Wedding. 

An important aspect of any wedding is the food. Gifts are usually something that the couple can use in their new home, such as kitchenware, bedding, or furniture. Sometimes, guests will also give money to the newlyweds. In some cases, the bride's family will give the groom a gift to show their acceptance of him into the family. 
         
         </Col>
        <Col>3 of 3</Col>
      </Row>
     </Container>
    </div>
  )
}

export default Wedding