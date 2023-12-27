import {configureStore} from '@reduxjs/toolkit';

const store= configureStore({
  reducer: {
        // Add reducers here
      AdviceReducer: AdviceReducer,
  }
});

// FIXME: This is a hack to get the store to update when the reducer changes
store.dispatch({type: 'AdviceReducer/fetchAdvice'});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

