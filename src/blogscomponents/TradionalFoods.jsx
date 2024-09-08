import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const tradationalfoods = () => {
  const navigate=useNavigate();

  const  Goback=()=>{
     navigate(-1);
  };
  return (
    <div> 
      <Container style={{marginTop:30}}>
      <Row>
        <Col>  <button onClick={Goback}>go back</button></Col>
        <Col xs={6}>  
         
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Afghan_cuisine.jpg/800px-Afghan_cuisine.jpg" alt=""  style={{width:'100%', height:300}} />
           <small>
       <br />    Khyber Pakhtunkhwa (KPK), located in the northwest of Pakistan, has a rich culinary heritage that reflects its diverse culture and history. The food from this region is hearty, flavorful, and often influenced by Afghan and Central Asian cuisine. Here's a brief overview of some popular dishes:
<br />
<strong>Chapli Kebab</strong>
A signature dish from KPK, chapli kebab is a spicy, flattened patty made from minced meat (usually beef or lamb) mixed with spices like coriander, cumin, pomegranate seeds, and chilies. It is often served with naan and chutney.
<br />
<strong>Peshawari Naan</strong>
A specialty from Peshawar, this type of naan is soft and thick, often stuffed with nuts and dried fruits. It’s usually eaten with various curries or kebabs.
<br />
<strong>Lamb Karahi</strong>
A rich, flavorful lamb curry cooked in a wok (karahi) with tomatoes, green chilies, ginger, and a few select spices. It’s typically served with naan or chapati and garnished with fresh coriander.
<br />
<strong>
Kabuli Pulao 
</strong>
 <br />
This rice dish, which has roots in Afghanistan, is popular in KPK. It’s made with basmati rice, lamb or beef, raisins, carrots, and nuts, giving it a sweet and savory flavor.
<br />
 <strong>Saag</strong> <br />
A traditional dish made from leafy green vegetables (often spinach or mustard greens), saag is slowly cooked with spices and sometimes mixed with meat. It’s typically eaten with cornmeal flatbread.
<br />
<strong>Namak Mandi Lamb</strong> <br />
This dish, popular in the Namak Mandi area of Peshawar, consists of lamb cooked with minimal spices, usually just salt and a bit of black pepper. It highlights the natural flavor of the meat.
<br />
<strong>Shinwari Karahi</strong> <br />
Originating from the Shinwari tribe, this dish is a simple yet delicious mutton or beef curry cooked with tomatoes, green chilies, and salt. It’s famous for its rich, hearty taste and minimal use of spices.
 <br />
 <strong>Charsi Tikka</strong> <br />
A popular dish in KPK’s Charsi Tikka spots, this is a simple yet flavorful preparation of marinated lamb or beef chunks, slow-cooked on skewers over an open fire.
 <br />
 <strong>Yakhni</strong><br />
A light, comforting broth made with mutton, Yakhni is flavored with minimal spices and is often served with rice. It’s considered a healthy and nourishing meal, especially during winters.

Unique Aspects of KPK Cuisine:
Hearty and Meat-Centric: KPK food is largely centered around meat, with lamb, beef, and chicken being common in most dishes.
Minimalist Spice Use: Unlike other regions of Pakistan, KPK cuisine uses fewer spices, allowing the natural flavors of meat and vegetables to shine through.
Influence of Afghan Cuisine: Due to its proximity to Afghanistan, many dishes like Kabuli Pulao and Shinwari Karahi have Afghan influences.
KPK foods are a reflection of the region’s rugged, mountainous landscape and nomadic traditions, offering simple yet deeply satisfying flavors.
        
           </small>
          </Col>
        <Col>
       
        </Col>
      </Row>
      </Container>
      
        <p> traditional foods page is here </p>
    </div>
  )
}
export default tradationalfoods