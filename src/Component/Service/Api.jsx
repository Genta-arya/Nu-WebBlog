import axios from 'axios';

const API_BASE_URL = 'https://api-blog-nu-8w8s.vercel.app';
// const API_BASE_URL = 'http://192.168.1.6:3001'
// Fungsi untuk melakukan permintaan login
export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, { email, password});
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


export const getPostings = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posting`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getPostingById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posting/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getPostingByCategory = async (category) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/posting/category/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};


export const posting = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/posting`, data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw new Error("Error server");
  }
};