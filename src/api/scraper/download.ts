import { useMutation } from '@tanstack/react-query';
import api from '..';
import { Post, PostRes, UsePostsProps } from './types';

export const downloadPosts = async (posts: Post[]) => {
  const { data } = await api.post<PostRes>(`/download`, { posts });

  return data;
};

export const useDownload = () => {
  return useMutation(downloadPosts);
};
