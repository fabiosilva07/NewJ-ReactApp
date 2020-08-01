import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 1px solid;
  border-radius: 2px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 300px;
  width: 330px;
  height: 230px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 2px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  
  @media (min-width: 800px) {
    &:hover,
    &:focus {
      transform: scale(1.2);
      transition: scale 0.1s;
      border: none;
      z-index: 1000;
      opacity: .9;
    }
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
