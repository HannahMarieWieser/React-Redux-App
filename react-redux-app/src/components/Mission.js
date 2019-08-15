import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

const Mission = props =>{
        console.log('rendering mission props' , props.mission.mission_name)
    return (
        <Card>
            <Image src= {props.mission.links.mission_patch_small} wrapped ui={false} />
            <Card.Content>
            <Card.Header>Mission: {props.mission.mission_name}</Card.Header>
            <Card.Meta>
                <span className='date'>Mission ID: {props.mission.mission_id}</span>
            </Card.Meta>
            <Card.Meta>
                <span className='date'>Launch Year: {props.mission.launch_year}</span>
            </Card.Meta>
            <Card.Meta>
                <span className='date'>Rocket Info: {props.mission.rocket.rocket_name}</span>
            </Card.Meta>
            <Card.Meta>
                <span className='date'>Launch Site: {props.mission.launch_site.site_name_long}</span>
            </Card.Meta>
            </Card.Content>
        </Card>
      
    )
}

export default Mission




// <div className = 'card'>
// <h4>Mission Name: {props.mission.mission_name}</h4>
// <p>Mission ID: {props.mission.mission_id}</p>
// <p>Launch Year: {props.mission.launch_year}</p>
// <p>Rocket Info: {props.mission.rocket.rocket_name}</p>
// <p>Launch Site: {props.mission.launch_site.site_name_long}</p>
// <img src = {props.mission.links.mission_patch_small} alt = {props.mission.links.mission_patch_small}/> 
// </div>