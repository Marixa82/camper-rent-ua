import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  font-size: large;
  color: #212121;
 display: flex;
  &.active {
    color: blue;
    }
`;
const Container = styled.div`

    max-width: 1158px;
    margin-left: auto;
    margin-right: auto;
    
`
const Header = styled.header`
   border-bottom: solid 2px rgba(0,0,0,0.3);
`
const Ul = styled.ul`
   display : flex ;
   padding: 0%;
   `
const Li = styled.li`
    list-style: none;
   display: inline-block;
    padding: 15px 25px;
    margin-left: 15px;
    font-size: 22px;
    background-color: lightgray;
    border-radius: 5px;
    &:hover, :focus {
      background-color: darkgray;
transition: all 0.3s;
    }
    `
export { StyledLink, Container, Header, Ul, Li }