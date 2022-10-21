import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profileData: {
    intro: '',
    skillset: '',
    city: '',
    skills_needed: '',
    isTechnical: '',
    lookingFor: '',
    photoUrl: '',
  },
  isLoading: false,
  error: '',
  message: '',
};

const bootCamp = createSlice({
  name: 'bootcamp',
  initialState,
  reducers: {
    buyBootcamp: (state) => {
      state.isLoading = true;
      state.error = '';
      state.message = '';
    },
    clearProfile: (state) => {
      return {
        ...initialState,
      };
    },
  },
});

const { actions, reducer } = bootCamp;

export const {
  buyBootcamp,
  clearProfile,
} = actions;

export default reducer;


