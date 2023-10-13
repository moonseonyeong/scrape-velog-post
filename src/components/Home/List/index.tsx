'use strict';

import { Post } from '@/api/scraper/types';
import { FlexBox, FlexColumnBox } from '../styles';

interface P {
  posts: Post[];
}

const List = ({ posts }: P) => {
  return (
    <FlexColumnBox>
      {posts.map((post, idx) => {
        return (
          <FlexColumnBox key={idx}>
            <FlexBox gap={8}>
              <div>{idx + 1}</div>
              <div>{post.title}</div>
            </FlexBox>
          </FlexColumnBox>
        );
      })}

      <div>다운받기</div>
    </FlexColumnBox>
  );
};

export default List;
