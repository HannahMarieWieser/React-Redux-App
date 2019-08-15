import React from 'react'
import {connect} from 'react-redux'
import Loader from 'react-loader-spinner'
import Mission from './Mission'

import { getData } from '../actions/index'

const MissionList = props => {
    console.log('mission props', props)
    return (
        <>
            <h1>SpaceX Launch-data App</h1>
            <button onClick={props.getData}>
                {props.isLoading ? (
                    <Loader type="Circles" color="#FF0000" height="50" width="100" /> 
                ):(
                    'Get SpaceX Launch Data'
                )}
            </button>
            
            {props.missions && 
             props.missions.map(launch => <Mission key={launch.mission_name} mission = {launch} />)}


        </>
    )
}


const mapStateToProps = state => {
    return{
        isLoading : state.isLoading,
        missions : state.missions
    }
}

export default connect(mapStateToProps, {getData})(MissionList)