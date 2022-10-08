import { createSlice } from '@reduxjs/toolkit';


export const collectionSlice = createSlice({
    name: 'collections',
    initialState: {
        categories: [],
        services: [],
        customServices: [],
        members: [],
        subscribers: []
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setServices: (state, action) => {
            state.services = action.payload;
        },
        setCustomServices: (state, action) => {
            state.customServices = action.payload;
        },
        addService: (state, action) => {
            state.customServices.push(action.payload);
        },
        delteCustomService: (state, action) => {
            state.customServices = state.customServices.filter(service => service.id !== action.payload);
        },
        setMembers: (state, action) => {
            state.members = action.payload;
        },
        setSubscribers: (state, action) => {
            state.subscribers = action.payload;
        }

    }
})

export const {
    setCategories,
    setServices,
    setCustomServices,
    addService,
    delteCustomService,
    setMembers,
    setSubscribers
} = collectionSlice.actions;
