import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justifycontent: center;
  height: 100vh;
  backgroundcolor: #e2e9f0;
  overflow: hidden;
  position: relative;
`;

export const Title = styled.div`
  display: flex;
  alignitems: end;
`;

export const Image = styled.img`
  src: ${(props) => props.src};
  alt: ${(props) => props.alt};
  width: 25v2;
  height: 25vh;
  position: absolute;
  top: 200px;
  right: 10%;
  zindex: 10;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 50px;
  background-color: #576fd7;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #aab4ff;
  }
`;
