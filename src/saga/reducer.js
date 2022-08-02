import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  users: [],
};

const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase('INC_PAYLOAD', (state, action) => {
    state.count = state.count + action.payload;
  });

  builder.addCase('DEC', (state, action) => {
    state.count = state.count - action.payload;
  });

  builder.addCase('USERS_DATA', (state, action) => {
    state.users = action.payload;
  });
});

export default counterReducer;
