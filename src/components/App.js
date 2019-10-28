import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

  state = {
    images: [],
  }

  onSearchSubmit = async (term) => {
    console.log('From App', term);
    const resp = await unsplash.get('/search/photos', {
      params: {
        query: term
      },
    });
    // console.log(resp.data.results);
    // console.log(this.state);
    this.setState({ images: resp.data.results });
  }

  render(){
    const { images } = this.state;
    const numImages = images.length;
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        Found: {numImages} images
        <ImageList images = {images}/>
      </div>
    );
  }
}

export default App;