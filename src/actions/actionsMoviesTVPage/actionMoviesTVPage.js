import * as actionTypes from './actionTypesMoviesTVPage';

const popularMoviesRequested = () => {
    return {
        type: actionTypes.POPULAR_MOVIES_REQUESTED
    }
}

const popularMoviesLoaded = (payload) => {
    return {
        type: actionTypes.POPULAR_MOVIES_LOADED,
        payload
    }
}

const popularMoviesError = () => {
    return {
        type: actionTypes.POPULAR_MOVIES_ERROR
    }
}

const popularMoviesMoreRequested = () => {
    return {
        type: actionTypes.POPULAR_MOVIES_MORE_REQUESTED
    }
}

const popularMoviesMoreLoaded = (payload) => {
    return {
        type: actionTypes.POPULAR_MOVIES_MORE_LOADED,
        payload
    }
}

const playingNowMoviesRequested = () => {
    return {
        type: actionTypes.PLAYING_NOW_MOVIES_REQUESTED
    }
}

const playingNowMoviesLoaded = (payload) => {
    return {
        type: actionTypes.PLAYING_NOW_MOVIES_LOADED,
        payload
    }
}

const playingNowMoviesMoreRequested = () => {
    return {
        type: actionTypes.PLAYING_NOW_MOVIES_MORE_REQUESTED
    }
}

const playingNowMoviesMoreLoaded = (payload) => {
    return {
        type: actionTypes.PLAYING_NOW_MOVIES_MORE_LOADED,
        payload
    }
}

const upcomingMoviesRequested = () => {
    return {
        type: actionTypes.UPCOMING_MOVIES_REQUESTED
    }
}

const upcomingMoviesLoaded = (payload) => {
    return {
        type: actionTypes.UPCOMING_MOVIES_LOADED,
        payload
    }
}

const upcomingMoviesMoreRequested = () => {
    return {
        type: actionTypes.UPCOMING_MOVIES_MORE_REQUESTED
    }
}

const upcomingMoviesMoreLoaded = (payload) => {
    return {
        type: actionTypes.UPCOMING_MOVIES_MORE_LOADED,
        payload
    }
}

const topRatedMoviesRequested = () => {
    return {
        type: actionTypes.TOP_RATED_MOVIES_REQUESTED
    }
}

const topRatedMoviesLoaded = (payload) => {
    return {
        type: actionTypes.TOP_RATED_MOVIES_LOADED,
        payload
    }
}

const topRatedMoviesMoreRequested = () => {
    return {
        type: actionTypes.TOP_RATED_MOVIES_MORE_REQUESTED
    }
}

const topRatedMoviesMoreLoaded = (payload) => {
    return {
        type: actionTypes.TOP_RATED_MOVIES_MORE_LOADED,
        payload
    }
}

const popularTvRequested = () => {
    return {
        type: actionTypes.POPULAR_TV_REQUESTED
    }
}

const popularTvLoaded = (payload) => {
    return {
        type: actionTypes.POPULAR_TV_LOADED,
        payload
    }
}

const popularTvError = () => {
    return {
        type: actionTypes.POPULAR_TV_ERROR
    }
}

const popularTvMoreRequested = () => {
    return {
        type: actionTypes.POPULAR_TV_MORE_REQUESTED
    }
}

const popularTvMoreLoaded = (payload) => {
    return {
        type: actionTypes.POPULAR_TV_MORE_LOADED,
        payload
    }
}

const airingTodayTvRequested = () => {
    return {
        type: actionTypes.AIRING_TODAY_TV_REQUESTED
    }
}

const airingTodayTvLoaded = (payload) => {
    return {
        type: actionTypes.AIRING_TODAY_TV_LOADED,
        payload
    }
}

const airingTodayTvMoreRequested = () => {
    return {
        type: actionTypes.AIRING_TODAY_TV_MORE_REQUESTED
    }
}

const airingTodayTvMoreLoaded = (payload) => {
    return {
        type: actionTypes.AIRING_TODAY_TV_MORE_LOADED,
        payload
    }
}

const onTheAirTvRequested = () => {
    return {
        type: actionTypes.ON_THE_AIR_TV_REQUESTED
    }
}

const onTheAirTvLoaded = (payload) => {
    return {
        type: actionTypes.ON_THE_AIR_TV_LOADED,
        payload
    }
}

const onTheAirTvMoreRequested = () => {
    return {
        type: actionTypes.ON_THE_AIR_TV_MORE_REQUESTED
    }
}

const onTheAirTvMoreLoaded = (payload) => {
    return {
        type: actionTypes.ON_THE_AIR_TV_MORE_LOADED,
        payload
    }
}

const topRatedTvRequested = () => {
    return {
        type: actionTypes.TOP_RATED_TV_REQUESTED
    }
}

const topRatedTvTvLoaded = (payload) => {
    return {
        type: actionTypes.TOP_RATED_TV_LOADED,
        payload
    }
}

const topRatedTvTvMoreRequested = () => {
    return {
        type: actionTypes.TOP_RATED_TV_MORE_REQUESTED
    }
}

const topRatedTvTvMoreLoaded = (payload) => {
    return {
        type: actionTypes.TOP_RATED_TV_MORE_LOADED,
        payload
    }
}

export {
    popularMoviesRequested,
    popularMoviesLoaded,
    popularMoviesError,
    popularMoviesMoreRequested,
    popularMoviesMoreLoaded,
    playingNowMoviesRequested,
    playingNowMoviesLoaded,
    playingNowMoviesMoreRequested,
    playingNowMoviesMoreLoaded,
    upcomingMoviesRequested,
    upcomingMoviesLoaded,
    upcomingMoviesMoreRequested,
    upcomingMoviesMoreLoaded,
    topRatedMoviesRequested,
    topRatedMoviesLoaded,
    topRatedMoviesMoreRequested,
    topRatedMoviesMoreLoaded,
    popularTvRequested,
    popularTvLoaded,
    popularTvError,
    popularTvMoreRequested,
    popularTvMoreLoaded,
    airingTodayTvRequested,
    airingTodayTvLoaded,
    airingTodayTvMoreRequested,
    airingTodayTvMoreLoaded,
    onTheAirTvRequested,
    onTheAirTvLoaded,
    onTheAirTvMoreRequested,
    onTheAirTvMoreLoaded,
    topRatedTvRequested,
    topRatedTvTvLoaded,
    topRatedTvTvMoreRequested,
    topRatedTvTvMoreLoaded
}