import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyle = {
    zoom: '1',
    width: '100%',
    height: '90%',
};



class LeadMap extends React.Component {
    render(){
        return(
            <Map
                google = {this.props.google}
                zoom = {18}
                style = {mapStyle}
                initCenter = {
                    {
                    lat: 37.34928960034342,
                    lng: -123.93851050061684
                    }
                }
                
            />
        ); 
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBp65a7X_GWKi9xt9bk_n0DcRAPqZby988'
}) (LeadMap)