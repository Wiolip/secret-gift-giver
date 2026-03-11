// @ts-nocheck
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
});

export const peopleService = {

    getPeople() {
        return axiosInstance.get('/people');
    },


    addPerson(newPerson) {
        return axiosInstance.post('/people', newPerson);
    },


    deletePerson(id) {
        return axiosInstance.delete(`/people/${id}`);
    },


    getPersonById(id) {
        return axiosInstance.get(`/people/${id}`);
    }
};