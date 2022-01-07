import React from 'react';
import { Toast } from 'react-bootstrap';


function Banner({ toggle }) {
    
    return (
        <Toast onClose={() => toggle(false)}>
            <Toast.Header>
                <strong className="mr-auto">This Song has been added to your Likes!</strong>
            </Toast.Header>
        </Toast>
    )
}

export default Banner
