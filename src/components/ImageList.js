import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {
  const { images } = props;
  // Previously: const imagesList = images.map((image) => {
  // Now:
  const imagesList = images.map((image) => {
    return (<ImageCard key={image.id} imageDetails={image}/>);
  });
  return (
    <div className='image-list'>{imagesList}</div>
  );
};

export default ImageList;