import styled from "styled-components"

export const Div = styled.div`
padding-top: 1rem;
padding-bottom: 1rem; 
background-color: #ffffff; 
--bg-opacity: 0.2; 
width: 100%; 
height: 100%; 
border-radius: 0.25rem; 
drop-shadow: drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.1)); 
`
export const Div2 = styled.div`
display :flex;
flex-direction : column;
align-items : center;
`
export const Section = styled.section`
text-align: center;
border : 1px solid black;
border-radius : 20px;
padding : 20px;
width : 500px;
`

export const Section3 = styled.section`
display: flex;
flex-direction : column;
row-gap : 50px;
flex-wrap : wrap;
`

export const H2 = styled.h2`
font-size: 1.5rem;
line-height: 2rem; 
font-weight: 900; 
display : flex;
flex-direction : row;
align-items:flex-start;
`
export const MidPara = styled.p`
display : flex;
flex-direction : row;
align-items:flex-start;
`


export const Span = styled.span`
font-weight: 100; 
`

export const H1 = styled.h1`
font-size: 4rem;
line-height: 2.5rem; 
font-weight: 800; 
display:flex;
flex-direction : row;
justify-content : center;  
margin : 10px;
`

export const Para = styled.p`
font-size: 0.875rem;
line-height: 1.25rem; 
display : flex;
flex-direction : row;
align-items:flex-start;
`
export const ParaBold = styled.p`
font-size: 0.875rem;
line-height: 1.25rem; 
font-weight: 700;
`

export const MidSpan = styled.span`
display : flex;
flex-direction : row;
align-items : center;
column-gap : 60px;
border-bottom: 1px dashed black;
padding : 10px;
margin-bottom : -20px;
`

export const MainSection = styled.section`
display : flex;
flex-direction : row;
justify-content : center;
align-items : center;
column-gap : 120px;
`


export const Division = styled.div`
  position : relative;
  display : flex;
  margin-top: 2.5rem; 
`
export const Input = styled.input`
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  border-top-left-radius: 0.375rem;
  border-bottom: 2px dashed black; 
  outline : none;  
  margin-right : 40px;
`

export const Button = styled.button`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem; 
  padding-left: 0.8rem;
  padding-right: 0.8rem; 
  border-radius: 50px; 
  border-width: 2px; 
  cursor: pointer;
  color: black;
  background-color: white;
  border : 1px solid black;
`

export const SearchSection = styled.section`
  display : flex;
  flex-direction : column;
  align-items : center;
`

export const Header = styled.header`
  font-size: 2.25rem;
  line-height: 2.5rem; 
  font-weight: 100; 
`


export const Ul = styled.ul`
  position: absolute; 
  top: 2.25rem; 
  margin-left: 0.25rem; 
  background-color: black;
  color : white; 
  border-bottom-right-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem; 
`

export const SuggestionButton = styled.button`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem; 
  padding-left: 0.5rem;
  padding-right: 0.5rem; 
  font-size: 0.875rem;
  line-height: 1.25rem; 
  text-align: left; 
  width: 100%; 
  cursor: pointer; 
`