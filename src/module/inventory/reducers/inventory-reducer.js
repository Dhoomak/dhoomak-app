import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    inventoryItems: [],
    inventoryAddedIdList: [],
    totalInventoryItems: 0,
    showProductInventoryTab: false,
}

const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        addToInventory(state, action) {
            state.inventoryItems = [...state.inventoryItems, { ...action.payload, unitAdded: 1 }];
            state.inventoryAddedIdList = [...state.inventoryAddedIdList, action.payload._id];
            updateCommonState(state);
        },
        removeFromInventory(state, action) {
            state.inventoryItems = state.inventoryItems.filter((inventoryItem) => inventoryItem._id !== action.payload);
            state.inventoryAddedIdList = state.inventoryAddedIdList.filter((inventoryItem) => inventoryItem !== action.payload);
            updateCommonState(state);
        },
        addProductInventoryUnits(state, action) {
            state.inventoryItems = incrementParticularProductUnits(state.inventoryItems, action.payload)
        },
        removeProductInventoryUnits(state, action) {
            state = decrementParticularProductUnits(state, action.payload);
        },
        enterProductInventoryUnits(state, action) {
            state = enterParticularProductUnits(state, action.payload);
        },
        resetInventory(state, action) {
            console.log('reseting inventory reducer', initialState)
            // state = initialState;
            // state = initialState;
            return initialState;
        }
    },
})

function updateCommonState(state) {
    state.totalInventoryItems = state.inventoryItems.length;
    state.showProductInventoryTab = state.inventoryItems.length > 0 ? true : false;
}

function incrementParticularProductUnits(state, payload) {
    const inventory = state.find((inventoryItem) => inventoryItem._id == payload._id);
    inventory.unitAdded = parseInt(inventory.unitAdded) || 1;
    inventory.unitAdded = inventory.unitAdded + 1;
    return state;
}

function decrementParticularProductUnits(state, payload) {
    const inventory = state.inventoryItems.find((inventoryItem) => inventoryItem._id == payload._id);

    if (inventory.unitAdded > 1) {
        inventory.unitAdded = inventory.unitAdded - 1;
    } else {
        state.inventoryItems = state.inventoryItems.filter((inventoryItem) => inventoryItem._id !== payload._id);
        state.inventoryAddedIdList = state.inventoryAddedIdList.filter((inventoryId) => inventoryId !== payload._id);
        updateCommonState(state);
        return state;
    }

    return state;
}

function enterParticularProductUnits(state, payload) {
    const inventory = state.inventoryItems.find((inventoryItem) => inventoryItem._id == payload._id);

    if (payload.value == 0) {
        state.inventoryItems = state.inventoryItems.filter((inventoryItem) => inventoryItem._id !== payload._id);
        state.inventoryAddedIdList = state.inventoryAddedIdList.filter((inventoryId) => inventoryId !== payload._id);
        updateCommonState(state);
        return state;
    }

    inventory.unitAdded = parseInt(payload.value);
    return state;
}

export const getInventoryState = (state) => state.inventory;

export const {
    addToInventory,
    removeFromInventory,
    addProductInventoryUnits,
    removeProductInventoryUnits,
    enterProductInventoryUnits,
    resetInventory,
} = inventorySlice.actions;

export default inventorySlice.reducer;