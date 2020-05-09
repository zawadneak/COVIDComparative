import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Holder = styled.div`
  padding-top: 60px;
  align-self: center;
  max-width: 1200px;
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    margin: 50px;
  }

  p {
    margin-top: 100px;
    font-size: 24px;
    color: #000;
  }

  strong {
    opacity: 0.5;
    text-align: center;
  }
`;
