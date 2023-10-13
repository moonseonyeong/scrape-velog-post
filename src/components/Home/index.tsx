'use client';

import { useState } from 'react';
import {
  Container,
  FlexBox,
  Info,
  Input,
  SubmitBtn,
  Title,
  Wrapper,
} from './styles';
import { usePosts } from '@/api/scraper/getPosts';
import Loading from '../Loading';
import { Post } from '@/api/scraper/types';
import List from './List';

const Home = () => {
  const [userId, setUserId] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const {
    mutate: getPosts,
    isLoading,
    isSuccess,
  } = usePosts({
    options: {
      onSuccess: (data) => {
        setPosts(data.posts);
        console.log(data);
      },
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setUserId(value);
  };

  const handleSubmit = () => {
    getPosts(userId);
  };

  console.log(posts, '?');

  return (
    <Container>
      {isLoading && (
        <>
          <div>게시글이 많을수록 시간이 오래 소요됩니다.</div>
          <Loading backgroundColor='grey' />
        </>
      )}
      <Title>Velog 게시글 긁어오기</Title>

      <Wrapper>
        <Info>velog id를 입력해주세요.</Info>
        <FlexBox gap={16}>
          <Input
            value={userId}
            placeholder='velog id'
            onChange={handleInputChange}
            name='userId'
            autoFocus={true}
          />
          <SubmitBtn disabled={userId.length === 0} onClick={handleSubmit}>
            확인
          </SubmitBtn>
        </FlexBox>
      </Wrapper>

      {isSuccess && <List posts={posts} />}
    </Container>
  );
};

export default Home;
