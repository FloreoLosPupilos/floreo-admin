 import { createSlice } from '@reduxjs/toolkit';

export const carrouselSlice = createSlice({

    name: 'carrousel',
    initialState: {
        isSaving: false,
        messageSaved: '',
        carruselImages: [],
    },
    reducers: {
        savingNewImage: (state) => {
            state.isSaving = true;
        },
        addNewImage: (state, action ) => {
            state.carruselImages.push( action.payload );
            state.isSaving = false;      
        },
        setImages: (state, action) => {

        },
        setSaving: (state) => {

        },
        deleteImageById: (state, action) => {

        },
    }

});

//Action creators
export const { 
    addNewImage, 
    deleteImageById,
    savingNewImage,
    setImages, 
    setSaving, 
} = carrouselSlice.actions;