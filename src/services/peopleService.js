// @ts-nocheck
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001'
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