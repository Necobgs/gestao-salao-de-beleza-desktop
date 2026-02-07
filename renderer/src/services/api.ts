import axios from 'axios';
import { environment } from '../environment';


const api = axios.create({
  baseURL: environment.base_url,
  timeout: 10000, // 10 segundos antes de cancelar a requisição
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});


api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Se a API retornar 401, desloga o usuário
    if (error.response && error.response.status === 401) {
      console.error('Sessão expirada. Redirecionando...');
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    // Padroniza a mensagem de erro
    const message = error.response?.data?.message || 'Erro inesperado no servidor';
    return Promise.reject({ ...error, message });
  }
);

export default api;