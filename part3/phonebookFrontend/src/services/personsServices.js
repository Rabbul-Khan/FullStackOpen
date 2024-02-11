import axios from 'axios';

const baseUrl = '/api/persons';

const getAll = () => {
  return axios.get(baseUrl);
};

const add = (personObject) => {
  return axios.post(baseUrl, personObject);
};

const deleteContact = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

const updateContact = (updateObject) => {
  return axios.put(`${baseUrl}/${updateObject.id}`, updateObject);
};

export default {
  getAll: getAll,
  add: add,
  deleteContact: deleteContact,
  updateContact: updateContact,
};
