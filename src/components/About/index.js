import React from 'react';
import  { AboutSection ,AbuotInfo  , InfoTitle , Span , InfoDir , InfoDesc , } from'./style.js'

const About =  () => {
  
  return (
    <AboutSection>
            <div className="container">
                <AbuotInfo>
                    <InfoTitle><Span>This is</Span> Me</InfoTitle>
                    <InfoDir>Creative Director</InfoDir>
                    <InfoDesc>
                    I've always been doing my best to learn and develop my experience more and more every day, 
                    so I will be able to continuously improve my performance and provide more and more to the company with every project I will work on.
                    </InfoDesc>
                    
                </AbuotInfo>
            </div>
        </AboutSection>
  );
}

export default About ;