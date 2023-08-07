import { useState, useEffect } from 'react'
import Map, {Marker, Popup} from 'react-map-gl';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "mapbox-gl/dist/mapbox-gl.css";
import './App.css'
import axios from 'axios';

function App() {
  const [pins, setPins] = useState([])
  const [currentPinId, setCurrentPinId] = useState('');
  const [viewPort, setviewPort] = useState({
    longitude: 73.038080,
    latitude: 33.601920,
    zoom: 4
  })
  const clickMe = (id) => {
    debugger
    setCurrentPinId(id)
  }
  
  useEffect(() => {
    
    getPins();
  }, []);
  const getPins = async () => {
    const pins = await axios.get('https://xt61ittnn3.execute-api.eu-north-1.amazonaws.com/pin')
    // debugger
    if(pins.data.body.Items.length > 0) setPins(pins.data.body.Items)
  }

  const getMarkerLocations = pins.map((pin, index) => {
    return (
            <Marker
              longitude={pin.long}
              latitude={pin.lat}
              key={pin._id}
            >
              <LocationOnIcon onClick={() => {clickMe(pin._id)}} />

            {/* {pin._id === currentPinId && ( */}
            <Popup longitude={pin.long} latitude={pin.lat}
              className="popup"
              anchor="bottom"
              // onClose={() => setShowPopup(false)}
              >
              <div className='card'>
                <label style={{color: "black"}}>Place name</label>
                <h4 className='place'>{pin.title}</h4>
                <label style={{color: "black"}}>Review</label>
                <div>
                  {/* <span class="material-icons"> star_rate </span> */}
                  <svg className='star' xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" ><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg className='star' xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" ><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg className='star' xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" ><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg className='star' xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" ><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg className='star' xmlns="http://www.w3.org/2000/svg"viewBox="0 0 24 24" ><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
                <label style={{color: "black"}}>Description</label>
                <p>{pin.desc}</p>
              </div>
            </Popup>
            {/* )
            } */}
          </Marker>
    )
  })
  
  return (
    <>

        <Map
            mapboxAccessToken="pk.eyJ1IjoiYXNoaXIxMjM0IiwiYSI6ImNsazBidWs4ZjByenozaWxob292eG5ldHAifQ.fveehiFH8IC65KYx503HDQ"
            initialViewState={viewPort}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            style={{width: "100vw",  height: "100vh"}}
          >
          {getMarkerLocations}
        
        </Map>
    

    </>
  )
}

export default App
