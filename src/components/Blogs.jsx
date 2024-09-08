/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../Css/Blogs.css';
import mydata from '../Json/Blogs.json';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Blogs = () => {
  const [data_, setData] = useState(mydata);
  return (
    <>
      <div className="blogs_posts_custome" style={{textAlign:'center'}}>
        <div className="blogs_posts_one">
          <div className="content-blog">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQww99FnQmhRO8K1cMGDWr5i6EECoWwLW1-RQ&usqp=CAU" alt="" />
            <p style={{width:400}}>
A hujra is a traditional gathering place or guesthouse among the Pashtun people. It serves as a communal space where members of the community, often men, gather to discuss various matters, share stories, make decisions, and socialize. The hujra plays a significant role in Pashtun culture and is a place where hospitality is highly valued.
               </p>
         <Link to={'/Hujra'} href="/Hujra"  > <button>Leran More </button> </Link>
          </div>
        </div>
        <div className="blogs_posts_two" style={{textAlign:'center'}}>
          <div className="content-blog">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiAlyhTXjyGouIR7FEVpR2HrpqWbYIFpbCkQ&usqp=CAU" alt="" />
               <p style={{width:400}}>Gham khadi,Wada Koidana,Topak tamacha,hujra,kat bistara along with those is the arrival of Sparlay or Spring, known as Nava Wroz (New Day), is also celebrated by some Pashtuns.  </p>
         <Link  to={'/ghamkhadi'} > <button>Leran More </button> </Link>
          </div>
        </div>
        <div className="blogs_posts_three" style={{textAlign:'center'}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPT3q1s1G5tBaU01mVZlSoU92N5Z6PG4H4Q&usqp=CAU" alt="" />
               <p style={{width:400}}>
                Food
One of the most famous dishes includes tikkah,serge,sugi ka halwa,kawa,chapali kabab,kabala palao,special long naans. And many more.</p>
         <Link to={'/tradationalfoods'} > <button>Learn More </button> </Link>
        </div>
        <div className="blogs_posts_foure"  style={{textAlign:'center'}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEPT3q1s1G5tBaU01mVZlSoU92N5Z6PG4H4Q&usqp=CAU" alt="" />
               <p style={{width:400}}>
               It incorporates a variety of spices, meats, and grains, creating dishes that are both delicious and satisfying. Here are some notable Pashtun foods:
               </p>
         <Link href="/" > <button>Leran More </button> </Link>
        </div>
        <div className="blogs_posts_five" style={{textAlign:'center'}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4xwhQSiZPpjxrzH0NVGp8uchzGzxR2DPXWMSNvLci4O1sMHJqCrSmf0zZ2C1-lHjH_k&usqp=CAU" />
               <p style={{width:400}}>
               Attan (Pashto: اتڼ) is a traditional dance originating from the tribal Pashtun regions of Afghanistan and Northwestern Pakistan. The dance is performed during weddings or other celebrations (engagements, weddings and informal gatherings).
                
                 </p>
         <Link to={'/Attan'} > <button>Leran More </button> </Link>
        </div>
        <div className="blogs_posts_six">
        <img src="https://th.bing.com/th/id/OIP.X7uYlHfpy8VbLAEyTW-rygHaF0?rs=1&pid=ImgDetMain" width={300} alt="" />
               <p style={{width:400}}>
                mostly pashton people are also known is skillfull people over the world these people; mostly people of pashton are arts and crafts differnent type of skill they have which are ancienct to learn more click on the given links
                 </p>
         <Link to={'/pashtonskill'} > <button>Leran More </button> </Link>
        </div>
        <div className="blogs_posts_seven">
        <img src="https://gdb.rferl.org/10BE43A1-5234-435D-A7E5-1ACB64762F32_w1024_q10_s.jpg" width={300} alt="" />
               <p style={{width:400}}>
            Bridesmaids lead the bride to a Henna ceremony where her hands are adorned with intricate henna designs.
            The bride wears a colorful covering called Banrasy over her head.
              </p>         
            <Link to={'/Wedding'}><button>Learn more </button></Link>
        </div>
        <div className="blogs_posts_eight">
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG3RowaIFMehNlil3LTSPRva1PYayIe80F8Q&usqp=CAU' />
               <p style={{width:400}}>
             there isnt a universally recognized Pashtun Culture Day However, its worth noting that various events and celebrations may take place locally or within specific Pashtun communities to celebrate and promote Pashtun culture. 
                 </p>
                     <Link  to={'/nationalday'} > <button>Leran More </button> </Link>
        </div>
        <div className="blogs_posts_eight">
       <img width={300} src='https://th.bing.com/th/id/R.e1da6753057c461512b38ea0a0ba226f?rik=q5XKXkL7UD%2f%2b8w&pid=ImgRaw&r=0' />
               <p style={{width:400}}>
             tribal spirit, a sophisticated code of honour, moral and ethical rules of behaviour, the demand for martial bravery, reasonable actions and consultation, a system of customary legal norms and not least, faith in Islam.
                 </p>
         <Link to={'/pashtonSkill'}> <button>Leran More </button> </Link>
        </div>
      </div>
      <div>
        <div className="blog_headers_details">
          <h2 style={{ textAlign: 'center' }}>
            Timeless Treasures: Discover the Art of Tradition in Every Purchase!
          </h2>
        </div>
        {data_.map((blogItem) => (
          <div className="blog_post_one" key={blogItem.id}>
            <div className="blog_post_pic_1">
              <img src={blogItem.img} alt=" " />
            </div>
            <div className="blog_content_1">
              <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>{blogItem.productName}</h1>
              <p style={{ textAlign: 'center', padding: '30px' }}>{blogItem.productDescription}</p>
              <div style={{ textAlign: 'center' }}>
                <h4>{blogItem.subTopicheader}</h4>
                <p>{blogItem.subTopicDescription}</p>
              </div>
              <div className="container" style={{ textAlign: 'center' }}>
                {/* <Button style={{ textAlign: 'center', justifyContent: 'space-around' }}>Add To Cart</Button> */}
                <details>
                  <summary>
                    <a href="#">Learn More about it</a>
                  </summary>
                  <p>Additional details go here.</p>
                </details>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;

