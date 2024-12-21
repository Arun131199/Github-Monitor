import axios from 'axios';
import { UserActivity, Repository } from '../types';

const api = axios.create({
  baseURL: 'https://api.github.com'
});

export const getUser = async (username: string) => {
  const { data } = await api.get(`/users/${username}`);
  return data;
};

export const getUserActivities = async (username: string): Promise<UserActivity[]> => {
  const { data } = await api.get(`/users/${username}/events`);
  return data;
};

export const getUserRepositories = async (username: string): Promise<Repository[]> => {
  const { data } = await api.get(`/users/${username}/repos`, {
    params: {
      sort: 'updated',
      per_page: 10
    }
  });
  return data;
};