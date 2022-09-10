import { createSlice } from '@reduxjs/toolkit';


export const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        isSaving: false,
        active: null,
        messageSaved: '',
        information: [],

    },    
    reducers: {
        setSection: (state, action) => {
            state.information = action.payload;  
            state.messageSaved = '';
        },
        setActiveInfo: (state, action) => {
            state.active = action.payload;  
            state.messageSaved = '';          
        },
        savingInfo: (state) => {
            state.isSaving = true;
            state.messageSaved = '';

        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        informationUpdated: (state, action) => { //payload: info
            state.isSaving = false;
            state.information = state.information.map( info => {

                if( info.id === action.payload.id ) {
                    return action.payload;
                }

                return info;
            });
            state.messageSaved = 'Información actualizada correctamente';
        }   
 
    }
})

export const {  
    informationUpdated, 
    savingInfo,
    setActiveInfo, 
    setSaving,
    setSection, 
} = aboutSlice.actions;
