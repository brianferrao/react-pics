import React from 'react';

class SearchInput extends React.Component {

    state = { searchText: ''};

    onInputChange = (event) => {
        this.setState({searchText: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.searchText);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field"> 
                        <label>Search Text:</label>
                        <input type="text" value={this.state.searchText} onChange={this.onInputChange}/>
                    </div>                    
                </form>
            </div>
        );
    }
}

export default SearchInput;