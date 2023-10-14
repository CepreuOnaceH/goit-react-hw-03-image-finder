import { Component } from 'react';
import { findImage } from 'services/api';
import Loader from './Loader';
import Modal from './Modal';
import Button from './Button';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import swal from 'sweetalert';
import '../css/styles.css';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    querry: '',
    modalImageUrl: null,
    isModalOpen: false,
    page: 1,
    hasMoreImages: true,
  };

  FetchPostByQuerry = async () => {
    try {
      this.setState({ isLoading: true, images: [] });
      const images = await findImage(this.state.querry, this.state.page);
      if (images.length === 0) {
        swal(
          'Oops',
          `Sorry, no images found for the query "${this.state.querry}"`,
          'error'
        );
      } else {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      }
    } catch (error) {
      this.setState({ error: error.message });
      swal('Error', 'Error 404 - "Not Found"', 'error');
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMoreImages = () => {
    this.setState({ isLoading: true });

    findImage(this.state.querry, this.state.page)
      .then(newImages => {
        this.setState(prevState => ({
          images: [...prevState.images, ...newImages],
          page: prevState.page + 1,
          isLoading: false,
        }));
      })
      .catch(error => {
        this.setState({
          error: error.message,
          isLoading: false,
          hasMoreImages: false,
        });
      });
  };

  componentDidUpdate(_, prevState) {
    if (prevState.querry !== this.state.querry) {
      this.setState({ page: 1 });
      this.FetchPostByQuerry();
    }
  }

  handleSearchSubmit = e => {
    e.preventDefault();
    this.setState({ page: 1 });
    const querry = e.currentTarget.elements.searchImage.value;
    this.setState({ querry });
    e.currentTarget.reset();
  };

  openModal = imageUrl => {
    this.setState({
      modalImageUrl: imageUrl,
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalImageUrl: null,
      isModalOpen: false,
    });
  };

  render() {
    const showPosts = this.state.images.length > 0;

    return (
      <>
        <Searchbar handleSearchSubmit={this.handleSearchSubmit} />
        {this.state.isLoading && <Loader />}
        {this.state.error ? (
          this.setState({ hasMoreImages: false })
        ) : (
          <ImageGallery
            images={this.state.images}
            openModal={this.openModal}
            showPosts={showPosts}
          />
        )}
        {showPosts && this.state.hasMoreImages && (
          <Button
            onClick={this.loadMoreImages}
            showButton={!this.state.isLoading}
          />
        )}
        {this.state.isModalOpen && (
          <Modal
            isOpen={this.state.isModalOpen}
            imageUrl={this.state.modalImageUrl}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}
