import styled from '@emotion/styled';
import Spinner from './Spinner';
import { FlexColumnBox } from '../Home/styles';

interface P {
  backgroundColor?: 'grey';
}

const Loading = ({ backgroundColor }: P) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <Spinner />
    </Container>
  );
};

export default Loading;

export const Container = styled(FlexColumnBox)<{ backgroundColor?: string }>`
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${({ backgroundColor }) =>
    backgroundColor === 'grey' ? 'rgba(0, 0, 0, 0.5)' : 'white'};
  z-index: 99;

  > span {
    position: absolute;
  }
`;
