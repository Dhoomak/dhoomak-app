import { createSubscriptionApi, saveSubscriptionApi } from "../../module/home/api/subscription-api";
import store from "../../store/store";



export async function saveSubscriptionDataInDb(subscriptionData) {
    // console.log('INSIDE SAVE SUBSCRIPTION DATA IN DB UTILITY FUNCTION')
    let response;

    const isSubscribed = store.getState().subscription.isSubscriptionCreated;

    if (!isSubscribed) {
        // console.log('INSIDE CREATE SUBSCRIPTION');
        response = await createSubscriptionApi(subscriptionData);
    } else {
        // console.log('INSIDE UPDATE SUBSCRIPTION');
        response = await saveSubscriptionApi(subscriptionData);
    }

    return response;
}