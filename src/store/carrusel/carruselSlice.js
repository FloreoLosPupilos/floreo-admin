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
    }
})

export const { 

    addNewImage, 
    savingNewImage, 
    setImages, 

} = carruselSlice.actions;
