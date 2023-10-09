// import React, { Component } from 'react';
// import axios from 'axios';
// import { ColorRing } from 'react-loader-spinner';

// class PixabayApp extends Component {
//   state = {
//     images: [],
//     isLoading: false,
//     error: null,
//     searchedKeyword: '',
//     key: '38934946-e5c499d2b8363eeb7af4782b0',
//   };

//   fetchImages = async keyword => {
//     try {
//       this.setState({ isLoading: true });
//       const response = await axios.get(
//         `https://pixabay.com/api/?q=${keyword}&page=1&key=${this.key}&image_type=photo&orientation=horizontal&per_page=12`
//       );
//       const images = response.data.hits.map(image => ({
//         id: image.id,
//         webformatURL: image.webformatURL,
//         largeImageURL: image.largeImageURL,
//       }));
//       this.setState({ images, searchedKeyword: keyword });
//     } catch (error) {
//       this.setState({ error: error.message });
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };

//   handleSearchSubmit = event => {
//     event.preventDefault();
//     const keyword = event.currentTarget.elements.keyword.value;
//     this.fetchImages(keyword);
//     event.currentTarget.reset();
//   };

//   render() {
//     const { images, isLoading, error, searchedKeyword } = this.state;

//     return (
//       <div>
//         <h1>Pixabay Image Search</h1>
//         <form onSubmit={this.handleSearchSubmit}>
//           <input
//             type="text"
//             name="keyword"
//             placeholder="Enter keyword"
//             required
//           />
//           <button type="submit">Search</button>
//         </form>

//         {isLoading && (
//           <div>
//             <ColorRing visible={true} height="80" width="80" />
//           </div>
//         )}

//         {error && <p className="error">{error}</p>}

//         <div className="imageList">
//           {images.map(image => (
//             <div key={image.id} className="imageItem">
//               <img src={image.webformatURL} alt={`Image ${image.id}`} />
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default PixabayApp;
