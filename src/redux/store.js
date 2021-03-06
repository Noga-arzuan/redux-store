import {createStore,applyMiddleware} from "redux";
import logger from "redux-logger";
import reduxThunk from 'redux-thunk';
import rootReducer from "./root-reducer";


const middlewares = [reduxThunk];

if (process.env.NODE_ENV === "development"){
    middlewares.push(logger);
}


const store = createStore(rootReducer,applyMiddleware(...middlewares));


// const store= createStore(rootReducer,applyMiddleware,{}
//         ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );


export default store;