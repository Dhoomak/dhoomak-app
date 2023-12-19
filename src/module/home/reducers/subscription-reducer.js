import { createSlice } from '@reduxjs/toolkit';
import { getSubscriptionDetailsAction } from '../thunks/subscription-thunk';

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState: {
    subscriptionDetails: {},
    isSubscriptionCreated: false,
    isSubscriptionPaymentDone: false,
    subscriptionDetailsLoading: false,
    subscriptionDetailsError: '',
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getSubscriptionDetailsAction.fulfilled, (state, action) => {
        // console.log("action: ", action.payload?.products?.length)
        // console.log("action: ", action.payload?.products?.length > 0)
        // console.log("isSubscriptionCreated: ", action?.payload?.isSubscriptionCreated)
        // console.log("isSubscriptionCreated value: ", action?.payload?.isSubscriptionCreated || false)
        // console.log("isSubscriptionPaymentDone: ", action?.payload?.isSubscriptionPaymentDone)
        // console.log("isSubscriptionPaymentDone value: ", action?.payload?.isSubscriptionPaymentDone || false)

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
export const { } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
