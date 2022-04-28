/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NextPage } from 'next';
import { MEDIA_DESKTOP, MEDIA_MOBILE } from 'src/var';

const Index: NextPage = () => {
  return (
    <div
      className=""
      css={css`
        ${MEDIA_DESKTOP} {
        }
        ${MEDIA_MOBILE} {
        }
      `}
    ></div>
  );
};

export default Index;
