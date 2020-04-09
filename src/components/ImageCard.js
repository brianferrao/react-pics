import React from 'react';

class ImageCard extends React.Component {
    state = {spans: 0};
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', () => {
            const height = this.imageRef.current.clientHeight;
            const spans = Math.ceil(height / 10);
            this.setState({spans});
        });
    }

    render() {
        const {descripton, urls} = this.props.image;
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef} alt={descripton} src={urls.regular}></img>
            </div>
        )
    }
}

export default ImageCard;