import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import movieBannerReducer from "./reducer/MovieBanner";
import movieListReducer from "./reducer/Movies";
import theaterReducer from "./reducer/Theater";
import userReducer from "./reducer/UserReducer";
import bookingTicketReducer from "./reducer/BookingTicket";
import userAdminReducer from "./reducer/UserAdmin";

const rootReducer = combineReducers({
  movieBannerReducer,
  movieListReducer,
  theaterReducer,
  userReducer,
  bookingTicketReducer,
  userAdminReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;