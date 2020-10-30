import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";
import {sagaMovies} from "../modules/movies/saga";
import {rootReducer} from "../rootReducer";
import {sagaFilter} from "../modules/overlayLayout/saga";

const sagas = [sagaMovies,sagaFilter]

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)));
    sagas.forEach(saga=>sagaMiddleware.run(saga))
    return store
}

export const store = configureStore();
