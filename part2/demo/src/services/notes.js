import axios from "axios";

// const baseUrl = "http://localhost:3001/notes";
const baseUrl = "http://localhost:3001/api/notes";

// const getAll = () => {
//   return axios.get(baseUrl).then((response) => response.data);
// };
const getAll = () => {
  const request = axios.get(baseUrl);
  const nonExisting = {
    id: 10000,
    content: "This note is not saved to server",
    important: true,
  };
  return request.then((response) => response.data.concat(nonExisting));
};

const create = (newObject) => {
  return axios.post(baseUrl, newObject).then((response) => response.data);
};

const update = (id, newObject) => {
  return axios
    .put(`${baseUrl}/${id}`, newObject)
    .then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
};
// 由于键的名称和分配的变量是相同的，我们可以用如上更紧凑的语法
