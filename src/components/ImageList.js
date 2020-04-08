import React from 'react';

class ImageList extends React.Component {

    render() {
        const images = this.props.images.map( ({id, description, urls}) => {
            return <img key={id} alt={description} src={urls.regular} ></img>
        }); 
        return (
            <div>{images}</div>
        );
    }
    
};

export default ImageList;