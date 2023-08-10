import axios from 'axios';

// Create an Axios instance with base URL
const api = axios.create({
  baseURL: 'https://showbazi-store-api.onrender.com/',
});

// Request Interceptor
// api.interceptors.request.use((config) => {
//   // Set headers or perform other request modifications
//   config.headers['Content-Type'] = 'application/json';
//   return config;
// });

// // Response Interceptor
// api.interceptors.response.use(
//   (response) => {
//     // Handle successful responses
//     return response;
//   },
//   (error) => {
//     // Handle errors
//     throw error;
//   }
// );

export default api;
