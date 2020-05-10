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

  > img {
    margin: 50px;
  }

  > p {
    margin: 200px;
    font-size: 24px;
    color: #000;
  }

  > strong {
    opacity: 0.5;
    text-align: center;
  }
  > a {
    text-decoration: none;
    color: #000;
    margin: 10px;
  }
`;

export const APIList = styled.div`
  width: 100%;
  padding: 20px;

  div {
    background-color: #ddd;
    border-radius: 4px;
    margin-bottom: 5px;
    padding: 10px;
    transition: 500ms;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  > strong {
    font-size: 21px;
    font-weight: 700;
  }
  > a {
    text-decoration: none;
    color: #000;
  }
`;
