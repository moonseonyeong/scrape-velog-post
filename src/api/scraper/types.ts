import { UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export interface UsePostsProps {
  options?: UseMutationOptionsType<PostRes, string>;
}

export interface PostRes {
  posts: Post[];
}

export interface Post {
  title: string;
  createdAt: string;
  tags: string[];
  content: string;
}

export interface UseMutationOptionsType<T, K>
  extends UseMutationOptions<T, AxiosError, K, any> {}
