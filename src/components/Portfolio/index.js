import React , {useState , useEffect} from 'react';
import axios from 'axios';
import { PortfolioSection , PortfolioTitle , Box , Spane ,  PortfolioList , PortfolioItem , Img , Spaan , Overlay } from './style.js'


const Portfolio =  () => {

  const [ images , setImages] = useState([]);

  useEffect( () => {
    axios.get('js/data.json').then( res => { setImages(res.data.portfolio)})
  } ,[]);

  const PortfolioImages = images.map( (imageItem) => {
    return(
      <Box key={imageItem.id}>
              <Img src={imageItem.image} alt=""/>
              <Overlay>
                  <Spaan>
                      Show Image
                  </Spaan>
              </Overlay>
          </Box>
    );
  });

  
  return (
    <PortfolioSection>
      <div className='container'>
            <PortfolioTitle><Spane>My</Spane> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PortfolioItem active>All</PortfolioItem>
                <PortfolioItem>HTML</PortfolioItem>
                <PortfolioItem>Photoshop</PortfolioItem>
                <PortfolioItem>Wordpress</PortfolioItem>
                <PortfolioItem>Mobile</PortfolioItem>
            </PortfolioList>
            
        <div className="box">
          
          {PortfolioImages}
          
        </div>
      </div>
      </PortfolioSection>
  );
}

export default Portfolio ;