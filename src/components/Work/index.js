import React , {Component} from 'react';
import axios from 'axios';
import  { Woork , WorkTitle , Spane , Part , Icon , PartTitle , Line , PartDesc } from './style.js';



class Work extends Component {
    
    state = {
    works : []
    }
    componentDidMount () {
        axios.get('js/data.json').then( res => {this.setState({works: res.data.works})} )
    }
    render(){
        const {works} = this.state;

        const worksList = works.map( (workItem) => {
            return(
                <Part first={workItem.id} key={workItem.id}>
                    <Icon className={workItem.icon_name}></Icon>
                    <PartTitle>{workItem.title}</PartTitle>
                    <Line />
                    <PartDesc>
                        {workItem.body}
                    </PartDesc>
                </Part>
            )
        })


        return(
            <Woork>
                <div className="container">
                    <WorkTitle><Spane>My</Spane> Work</WorkTitle>
                    
                    {worksList}
                </div>
            </Woork>
        );
    }
    };

export default Work ;