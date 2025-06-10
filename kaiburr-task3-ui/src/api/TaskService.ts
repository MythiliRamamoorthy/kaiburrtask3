import axios from 'axios';
import { Task } from '../types/task';


const BASE_URL = 'http://localhost:8080';
 // Your Java backend URL

// Create a new task
export const createTask = (task: Task) => {
  return axios.post(`${BASE_URL}/tasks`, task);
};

// Get tasks by name (for search functionality)
export const getTaskByName = (name: string) => {
  return axios.get<Task[]>(`${BASE_URL}/tasks?name=${name}`);
};
