import React, {Component} from 'react';
import MovieList from './components/movieList';
import WithMoviesService from '../hoc/withMoviesService';
import {connect} from 'react-redux';
import {popularMoviesRequested, popularMoviesLoaded, popularMoviesError, popularMoviesMoreLoaded, popularMoviesMoreRequested} from '../../actions/actions';


class PopularPage extends Component {
    componentWillMount() {
        document.title = this.props.title;

        if (!this.props.movies.length) {
            this.props.popularMoviesRequested();
            this.loadMovies(this.props.popularMoviesLoaded);  
        }
    }

    onLoading = (response) => {
        this.setState({
            movies: [...this.state.movies, ...response],
            loading: false,
            page: this.state.page + 1,
            loadingMore: false
        })
    }

    loadMovies = (success) => {
        const {MoviesService, popularMoviesError, page} = this.props;

        MoviesService.getPopular(page + 1)
            .then((res) => success(res.results))
            .catch(error => popularMoviesError());
    }

    loadMoreMovies = () => {
        const {popularMoviesMoreLoaded, popularMoviesMoreRequested, page} = this.props;

        if (page > 500) {
            return
        }
        popularMoviesMoreRequested();
        this.loadMovies(popularMoviesMoreLoaded);
    }


    render() {
        const {movies, loading, history, loadingMore} = this.props;

        return(
            <MovieList
                movies={movies}
                loading={loading}
                loadingMore={loadingMore}
                history={history}
                url={history.location.pathname}
                getMovies = {this.loadMoreMovies}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.popularMovies,
        loading: state.loading,
        loadingMore: state.loadingMore,
        page: state.page
    }
} 

const mapDispatchToProps = {
    popularMoviesLoaded,
    popularMoviesRequested,
    popularMoviesError,
    popularMoviesMoreRequested,
    popularMoviesMoreLoaded
};

export default WithMoviesService()(connect(mapStateToProps, mapDispatchToProps)(PopularPage));
