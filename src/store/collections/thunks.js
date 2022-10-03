import { getCollectionData } from '../../helpers';
import { setCategories, setCustomServices, setMembers, setServices, setSubscribers } from './collectionSlice';


export const startLoadingCategories = () => {
    return async (dispatch) => {
        const categories = await getCollectionData("Categorias");
        console.log("Categorias", categories);
        dispatch(setCategories(categories));
    }
};

export const startLoadingServices = () => {
    return async (dispatch) => {
        const services = await getCollectionData("Servicios");
        console.log("Servicios", services);
        dispatch(setServices(services));
    }
};

export const startLoadingCustomServices = (id, services) => {
    return (dispatch) => {
        const data = services.filter(object => {
            return object.categoria == id;
        });
        if (id != "") {
            dispatch(setCustomServices(data));
        } else {
            dispatch(setCustomServices(services));
        }
    }
};

export const startLoadingMembers = () => {
    return async (dispatch) => {
        const members = await getCollectionData("Integrantes");
        console.log("Integrantes", members);
        dispatch(setMembers(members));
    }
};

export const startLoadingSubscribers = () => {
    return async (dispatch) => {
        const subscribers = await getCollectionData("Suscriptores");
        console.log("Suscriptores", subscribers);
        dispatch(setSubscribers(subscribers));
    }
};

