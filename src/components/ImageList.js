import React from 'react';

class ImageList extends React.Component {
    state = {images: []};

 
    componentDidUpdate(prevProps) {
        if(this.props !== prevProps) {
            const imagesX = this.props.images.map( ({id, description, urls}) => {
                return <img key={id} alt={description} src={urls.regular} ></img>
            });
            this.setState({images: imagesX});
        }        
    }

    render() {
        return (
            <div>{this.state.images}</div>
        );
    }
    
};

export default ImageList;