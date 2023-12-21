import { createSlice } from '@reduxjs/toolkit';
import { getSubscriptionDetailsAction } from '../thunks/subscription-thunk';

const initialState = {
  subscriptionDetails: {},
  isSubscriptionCreated: false,
  isSubscriptionPaymentDone: false,
  subscriptionDetailsLoading: false,
  subscriptionDetailsError: '',
}

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    resetSubscription(state, action) {
      console.log('reseting subscription reducer', initialState)
      // state = initialState;
      return initialState;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getSubscriptionDetailsAction.fulfilled, (state, action) => {
        state.subscriptionDetails = action.payload;
        state.isSubscriptionCreated = action.payload?.products?.length > 0 || false;
        state.isSubscriptionPaymentDone = action?.payload?.isSubscriptionPaymentDone || false;
        state.subscriptionDetailsLoading = false;
        state.subscriptionDetailsError = '';
      })
      .addCase(getSubscriptionDetailsAction.pending, (state, action) => {
        state.subscriptionDetails = {};
        state.subscriptionDetailsLoading = true;
        state.subscriptionDetailsError = '';
      })
      .addCase(getSubscriptionDetailsAction.rejected, (state, action) => {
        state.subscriptionDetails = {};
        state.subscriptionDetailsLoading = false;
        state.subscriptionDetailsError = action?.payload.errorMessage;
      })
  },
});

export const getSubscriptionState = state => state.subscription;
export const { resetSubscription } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
