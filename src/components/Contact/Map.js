import React, { Component } from 'react';
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';

export class MyHome extends Component {
  state = {
    showInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
  
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showInfoWindow) {
      this.setState({
        showInfoWindow: false,
        activeMarker: null
      })
    }
  };

  render() {
    const mapStyles = {
      position: 'relative', 
      width: '100%',
      height: '350px'
    }
    const containerStyle = {
      position: 'relative',  
      width: '100%',
      height: '100%'
    }
    const InfoStyles ={
      fontSize: '14px',
      fontFamily: 'Montserrat'
    }

    const locationText = '7-6-10 Shimosakunobe Takatsu Ward, Kawasaki, Kanagawa 213-0033'

    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        containerStyle={containerStyle}
        initialCenter={{ lat: 35.6020703, lng: 139.6050062 }}
        onClick={this.onMapClicked}
      >
        <Marker
          position={{ lat: 35.6020703, lng: 139.6050062 }}
          onClick={this.onMarkerClick}
          name={locationText}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showInfoWindow}
        >
          <div>
            <h1 style={InfoStyles}><strong>HOME</strong></h1>
            <h1 style={InfoStyles}>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>

    );
  }
}

export default GoogleApiWrapper({ apiKey: 'AIzaSyC8CUUCZwesIyEMP7puc_Ye-CRhOJvUcbM' })(MyHome);




{/* <Map google={this.props.google} zoom={14}>
 
<Marker onClick={this.onMarkerClick}
        name={'Current location'} />

<InfoWindow onClose={this.onInfoWindowClose}>
    <div>
      <h1>{this.state.selectedPlace.name}</h1>
    </div>
</InfoWindow>
</Map> */}