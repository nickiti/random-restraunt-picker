import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import Button from "react-bootstrap/Button";

export function ResultDisplay(props) { 
    let b = ""
    if (!props.businesses || !props.businesses.length) {
        return (<div>HOWDY IT DID NOT LOAD</div>);
    }  
    
    if (props.businesses.length > 0){
         b = props.businesses[Math.floor(Math.random() * props.businesses.length)];
    }

    const restaraunt = b.name;
    const tags = b.categories.map(category => (<span key={b.id + category.title}>{category.title}<br/></span>));
    const pic = b.image_url;
    const addressp1 = b.location.address1;
    const city = b.location.city;
    const state = b.location.state;
    const zip = b.location.zip_code;
    const distance = (Math.round(b.distance/1609));

    return ( 
            <div style={{display: "flex",justifyContent: "center",alignItems: "center"}} >
                <div>
                    <div>
                        <h1> {restaraunt} </h1>
                        <p> {tags} </p>
                    </div>
                    <img src={pic} width='200' height='200' alt="business_pic"/>
                    <div>
                        {addressp1} <br/>
                        {city}, {state} {zip}
                    </div>
                    <div>
                        <p>{distance} miles</p>
                    </div>
                </div>
                <LinkContainer to="/">
                    <Button variant='primary'>Home</Button>
                </LinkContainer>
                <Button onClick={() => window.location.reload(false)}>Redo</Button>
            </div>
        )

}
export default ResultDisplay;