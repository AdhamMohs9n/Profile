import styled from 'styled-components';
import { Link } from 'react-router-dom';



export const NavbarSection = styled.div`

  padding: 5px 0;
  overflow: hidden;
  background: #fff;
  position: relative;
  border-bottom: 1px solid #000;

`

export const Logo = styled.div`

  width:50%;
  float: left;

`

export const  LogoText = styled.h2`
  font-size:30px;
  
`

export const Ullist = styled.ul`
  width:50%;
  float: left;
  list-style: none;
  padding: 0px;

`

export const ListItem = styled.li`
  display:inline-block;
`

export const A = styled.a`
  display: block;
  color:#222;
  text-decoration:none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover{
    color: #ed5424;
  }
`
export const ALink = styled(Link)`
  display: block;
  color:#222;
  text-decoration:none;
  padding: 10px 15px;
  font-weight: bold;
  &:hover{
    color: #ed5424;
  }
`