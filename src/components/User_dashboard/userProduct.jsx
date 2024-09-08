import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import SideBar_user from './SideBar_user';
import User_dashboard from '../User_dashboard';
const userProduct = () => {
  return (
    <Container>
    <Row>
      <Col sm={4}>
      <SideBar_user/>   
       
      </Col>
      <Col sm={8}>
  <User_dashboard/>
      </Col>
    </Row>
    
  </Container>
  )
}

export default userProduct