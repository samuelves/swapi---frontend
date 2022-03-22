import axios from 'axios'

const token = localStorage.getItem('token')

export default axios.create({
  baseURL: String(import.meta.env.VITE_STORE_URL_API),
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
    accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
axios.defaults.withCredentials = true
