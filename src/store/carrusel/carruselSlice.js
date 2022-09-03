import { createSlice } from '@reduxjs/toolkit';


export const carruselSlice = createSlice({
    name: 'carrusel',
    initialState: {
        isSaving: false,
        images: [],

    },    
    reducers: {
        
        savingNewImage: (state) => {
            state.isSaving = true;
        },
        addNewImage: (state, action) => {
            state.images.push(action.payload);
            state.isSaving = false;

        },
        setImages: (state, action) => {
            state.images = action.payload;            
        },

        clearImagesLogout: (state) => {
            state.isSaving = false;
            state.images = []
        },

        deleteImage: (state, action) => {
            state.images = state.images.filter( img => img.id !== action.payload );
        }
    }
})

export const { 

    addNewImage, 
    clearImagesLogout,
    deleteImage,
    savingNewImage, 
    setImages, 
} = carruselSlice.actions;
