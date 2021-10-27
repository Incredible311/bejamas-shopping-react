import { createSlice } from '@reduxjs/toolkit';
import TabModel from '../../utils/models/TabModel';

interface stateTypes {
  isLoading: boolean;
  tabs: TabModel[];
  errorMessage: string;
}

const initialState: stateTypes = {
  isLoading: false,
  tabs: [],
  errorMessage: '',
};

export const slice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // INITIALISE
    getInitialize(state) {
      state.isLoading = true;
      state.tabs = [];
      state.errorMessage = '';
    },

    // SET USERS
    setTabs(state, action) {
      state.isLoading = false;
      state.tabs = action.payload.tabs;
    },

    // SET ERRORS
    setErrors(state, action) {
      state.isLoading = false;
      state.errorMessage = action.payload.errorMessage;
    },
  },
});

export const { actions } = slice;

export default slice.reducer;
