import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';


const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });

module.exports.newBirdSearch = async (req, res, next) => {
    const geoData = await geocoder.forwardGeocode(
        {
            query: 'Unionville, NY',
            limit: 1,
        }
    ).send()
    console.log(geoData);
    res.send('ok')
}


const localLat = ();
const localLng = ();
