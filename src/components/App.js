import React from 'react';
import Axios from 'axios';
import SearchBar from './SearchBar';



class App extends React.Component {
    onSearchSubmit(term){
        Axios.get('https://api.unsplash.com/search/photos',{
          params: {query: term},
          headers: {
            Authorization: 'Client-ID d08ad4699635babec40705871cdc8d01621bd188c2bf2151e91271bb6e6d4020'
          }
        });
    }
    render () {
      return (
        <div className="container" style= {{margin: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
        </div>
      );
    }
}

export default App;