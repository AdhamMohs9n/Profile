import styled from 'styled-components'




export const ProfileSkills = styled.div` 

  padding: 50px 0;
  overflow: hidden;
  
`

export const Profilee = styled.div` 
width: 50%;
float: left;
`

export const ProfileList = styled.h2` 
list-style: none
`

export const ProfileItem = styled.li`
margin-bottom: 8px
`

export const Spane = styled.span`
display: inline-block;
width: 100px;
padding-right:10px;
font-weight: bold
`

export const SpaneWeb = styled.span`
  font-weight: normal;
  color: #eb5424
`

export const Skills = styled.div` 
  width: 50%;
  float: left;
`

export const SkillsDesc= styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.5;
  margin-bottom: 20px
`

export const Bar = styled.div`
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px
`

export const Titled = styled.span`
  float: left;
`

export const Perc = styled.span`
  float: right;
  margin-right: 100px
`

export const Parent = styled.div` 
  height: 2px;
  clear: both;
  background: #f8f8f8;
  position: relative;
  top: 5px
  
  `
  export const Sp3 = styled.span`
    width: ${props => props.first === 1 ?'100%':'0%'};
    width: ${props => props.first === 2 ? '90%' : '0%'};
    width: ${props => props.first === 3 ?'80%':'0%'};
    `


    export const ProfileTitleSkills =styled.h2`
    font-size: 40px; 
    margin-bottom: 20px
    
    
    
  `




export const ProfileTitleSpan =styled.span`
  font-weight: normal;
`



