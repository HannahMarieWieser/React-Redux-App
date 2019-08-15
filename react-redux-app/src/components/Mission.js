import React from 'react';

const Mission = props =>{
    return (
        <div>
            <h4>Mission Name: {props.misson.mission_name}</h4>
            <p>Mission ID: {props.misson.mission_id}</p>
            <p>Launch Year: {props.misson.launch_year}</p>
            <p>Rocket Info: {props.misson.rocket.rocket_name}</p>
            <p>Launch Site: {props.misson.launch_site.site_name_long}</p>
            {/* <img src = {props.mission.links.flickr_images[0]} alt = {props.mission.links.flickr_images}/> */}
        </div>
    )
}

export default Mission