import React , {useState , useEffect} from 'react';
import axios from 'axios';
import  {ProfileSkills , ProfileList , Profilee ,ProfileItem   ,Skills  , SkillsDesc  ,  Titled , Perc , Parent , Bar , Sp3 , Spane  , ProfileTitleSkills , ProfileTitleSpan , } from'./style.js'

const Profile =  () => {

    const [ skil , setskills] = useState([]);

    useEffect( () => {
        axios.get('js/data.json').then( res => { setskills(res.data.Myskills)})
    },[])

    const theEnd = skil.map( (theSkills) => {
        return(
            <Bar first={theSkills.id} key={theSkills.id}>
            <Titled>{theSkills.title}</Titled>
                <Perc>{theSkills.nomber}</Perc>
                <Parent>
                    <Sp3></Sp3>
                </Parent>
            </Bar>
        )

    })
  
  return (
    <ProfileSkills>
        <div className="container">
        
            <Profilee>
                <ProfileTitleSkills>My <ProfileTitleSpan>Profile</ProfileTitleSpan></ProfileTitleSkills>

                <ProfileList>
                    <ProfileItem>
                            <Spane>Name:</Spane>
                                Adham Mohsen
                    </ProfileItem>
                        
                    <ProfileItem>
                        <Spane>Address:</Spane>
                            Cairo,Egypt
                    </ProfileItem>
                    <ProfileItem>
                        <Spane>Phone:</Spane>
                            01098107017
                    </ProfileItem>
                    <ProfileItem >
                        <Spane>Email:</Spane>
                            Dev.AdhamMohsen@gmail.com
                </ProfileItem>
            
            </ProfileList>
        
            </Profilee>
                <Skills>
                    <ProfileTitleSkills>Some <ProfileTitleSpan>skills</ProfileTitleSpan></ProfileTitleSkills>
                    <SkillsDesc >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    
                    {theEnd}
                </Skills>
                
            
        </div>
        </ProfileSkills>
  );
}

export default Profile ;