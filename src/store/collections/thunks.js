import { getCollectionData } from '../../helpers';
import { addService, delteCustomService, setCategories, setCustomServices, setMembers, setOrders, setServices, setSubscribers } from './collectionSlice';


export const startLoadingCategories = () => {
    return async (dispatch) => {
        const categories = await getCollectionData("Categorias");
        dispatch(setCategories(categories));
    }
};

export const startLoadingServices = () => {
    return async (dispatch) => {
        const services = await getCollectionData("Servicios");
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

export const addCustomServices = (service) => {
    return (dispatch) => {
        dispatch(addService(service));
    }
};

export const deleteCustomServices = (id) => {
    return (dispatch) => {
        dispatch(delteCustomService(id));
    }
};

export const startLoadingMembers = () => {
    return async (dispatch) => {
        const members = await getCollectionData("Integrantes");
        dispatch(setMembers(members));
    }
};

export const startLoadingSubscribers = () => {
    return async (dispatch) => {
        const subscribers = await getCollectionData("Suscriptores");
        dispatch(setSubscribers(subscribers));
    }
};

export const startLoadingOrders = () => {
    return async (dispatch) => {
        const orders = await getCollectionData("Pedidos");
        dispatch(setOrders(orders));
    }
};


