import React from 'react';
// import { Link } from 'react-router-dom';
import {NavbarSection ,Logo , A ,Ullist, ListItem ,LogoText ,ALink }  from'./style.js'

const NavBar =  () => {
  
  return (
    <NavbarSection>

      <div className='container'>

        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>
        <Ullist>
          <ListItem><ALink to='/'>Home</ALink></ListItem>
          <ListItem><A href='#'>About</A></ListItem>
          <ListItem><A href='#'>Work</A></ListItem>
          <ListItem><A href='#'>Resume</A></ListItem>
          <ListItem><A href='#'>Portfolio</A></ListItem>
          <ListItem><ALink to='/Contact'>Contact</ALink></ListItem>
        </Ullist>
      </div>
      
    </NavbarSection>
  );
}

export default NavBar ;