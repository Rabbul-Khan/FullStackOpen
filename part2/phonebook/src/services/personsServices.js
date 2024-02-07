import axios from 'axios';

const getAll = () => {
  return axios.get('http://localhost:3001/persons');
};

const add = (personObject) => {
  return axios.post('http://localhost:3001/persons', personObject);
};

const deleteContact = (id) => {
  return axios.delete(`http://localhost:3001/persons/${id}`);
};

const updateContact = (updateObject) => {
  return axios.put(
    `http://localhost:3001/persons/${updateObject.id}`,
    updateObject
  );
};

export default {
  getAll: getAll,
  add: add,
  deleteContact: deleteContact,
  updateContact: updateContact,
};
