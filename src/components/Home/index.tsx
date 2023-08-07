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

const Home = () => {
  const [userId, setUserId] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;

    setUserId(value);
  };

  return (
    <Container>
      <Title>Velog 게시글 긁어오기</Title>

      <Wrapper>
        <Info>velog id를 입력해주세요.</Info>
        <FlexBox gap={16}>
          <Input
            value={userId}
            placeholder='ssssssssy'
            onChange={handleInputChange}
          />
          <SubmitBtn>확인</SubmitBtn>
        </FlexBox>
      </Wrapper>
    </Container>
  );
};

export default Home;
