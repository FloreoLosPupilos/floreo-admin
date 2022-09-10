import { doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { loadingSection } from '../../helpers';
import { informationUpdated, setActiveInfo, setSaving, setSection } from './aboutSlice';



export const startLoadingSection = () => {
    
    return async(dispatch) => {
        const sectionInformation = await loadingSection(); 
        const info = sectionInformation[0];
        dispatch( setSection( sectionInformation ) );
        dispatch( setActiveInfo(info));
    }    
};

export const startSavingSection = () => {
    return async(dispatch, getState) => {

        dispatch( setSaving() );

        const { active: information } = getState().section;

        const informationToFirestore = { ...information };
        delete informationToFirestore.id;

        const docRef = doc(FirebaseDB, `about/section/information/${ information.id }`);
        await setDoc(docRef, informationToFirestore, { merge: true });

        dispatch( informationUpdated( information ) );
        
    }

}