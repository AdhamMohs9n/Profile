import React from 'react';
import {HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc , Spane ,HomeBtn} from './style.js'

const Home =  () => {
  
  return (
    <HomeSection>
      <div className="container">
          <HomeInformation>
              <HomeTitle>Adham Mohsen</HomeTitle>
              <HomeInfo>Creative Director</HomeInfo>
              <HomeDesc>
                  Iam a professional <Spane>Front-End Developer</Spane> and UX Designer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
              </HomeDesc>
              <HomeBtn>Let's Begin</HomeBtn>
          </HomeInformation>
      </div>
    </HomeSection>
  );
}

export default Home ;