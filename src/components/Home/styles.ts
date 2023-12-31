import styled from '@emotion/styled';

export const FlexBox = styled.div<{ gap?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => `${gap}px`};
`;

export const FlexColumnBox = styled.div<{ gap?: number }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: ${({ gap }) => (gap ? `${gap}px` : '0')};
`;

export const Container = styled(FlexBox)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h2``;

export const Input = styled.input`
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid #05c072;
  width: 240px;
  font-size: 18px;
  color: white;
  background: #05c072;

  ::placeholder {
    color: rgba(0, 92, 54, 0.4);
  }

  &:focus {
    outline: none;
    background: transparent;
    color: black;
  }

  &:focus::placeholder {
    color: #8e959e;
  }
`;

export const Info = styled.div`
  align-self: flex-start;
  color: #6e7781;
`;

export const Wrapper = styled(FlexBox)`
  width: max-content;
  flex-direction: column;
  gap: 4px;
`;

export const SubmitBtn = styled.button`
  border: 1px solid #1e2023;
  border-radius: 8px;
  padding: 8px;
  background-color: #1e2023;
  color: white;

  :disabled {
    background-color: #6e7781;
    border-color: #6e7781;
    opacity: 0.3;
    cursor: not-allowed;
  }
`;
