import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  /* Define your styles here */
  background-color: #f0f0f0;
  padding: 10px;
  border: 1px solid #ccc;
`;
 const MynextClass=styled.h3`
  padding:23px;
  background-color:yellow;
  text-align:center;
 `

const StyledComponent = () => {
  return (
    <>
     <StyledDiv>
     <h1>hello </h1>
    </StyledDiv>
     <MynextClass>
       <h3>hello 3</h3>
     </MynextClass>
     
    </>
  );
}

export default StyledComponent;
