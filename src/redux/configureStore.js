import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './mission/Mission';
import rocketReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketReducer,
  },
});
export default store;
