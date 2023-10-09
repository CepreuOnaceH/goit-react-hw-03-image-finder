import React from 'react';

const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <li key={image.id} className="ImageGalleryItem">
      <img
        src={image.webformatURL}
        alt={image.tags}
        onClick={() => openModal(image.largeImageURL)}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;
