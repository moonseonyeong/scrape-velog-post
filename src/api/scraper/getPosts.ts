import { useMutation } from '@tanstack/react-query';
import api from '..';
import { PostRes, UsePostsProps } from './types';

export const getPosts = async (userId: string) => {
  const { data } = await api.post<PostRes>(`/posts`, { userId });

  return data;
};

export const usePosts = ({ options }: UsePostsProps) => {
  return useMutation(['posts'], getPosts, {
    ...options,
  });
};
