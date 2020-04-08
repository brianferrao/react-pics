import React from 'react';
import unsplash from '../api/unsplash';
import SearchInput from './SearchInput';
import ImageList from './ImageList';

class App extends React.Component {
    state = {imageList: []};

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: { query: term}            
        });

        this.setState({imageList : response.data.results});
    }

    render() {
        return (
            <div className="ui container">
                <SearchInput onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.imageList}></ImageList>
            </div>
        );
    }    
}

export default App;