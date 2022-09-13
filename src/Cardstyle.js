import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 2vw;
  margin-top: 10vw;
`;

export const Carddiv = styled.div`
  width: 18.229vw;
  height: 23.438vw;
  border-radius: 0.977vw;
  padding: 2vw;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.8s ease-out;
  box-shadow: 0px 7px 10px rgba(black, 0.5);
  &:hover {
    transform: translateY(40px);
  }
  &:before {
    opacity: 1;
  }
`;

export const Info = styled.div`
  position: relative;
  z-index: 3;
  color: white;
  opacity: 0;
  transform: translateY(100px);
  transition: 0.8s;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 0.977vw;
    background: rgba(black, 0.6);
    z-index: 2;
    transition: 0.8s;
    opacity: 0;
  }
  &:hover {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 0.977vw;
`;

export const H1 = styled.h1`
  margin: 0px;
`;

export const P = styled.p`
  letter-spacing: 1px;
  font-size: 0.977vw;
  margin-top: 8px;
`;

export const Button = styled.button`
  padding: 0.6rem;
  outline: none;
  border: none;
  border-radius: 3px;
  background: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s ease;
  &:hover {
    background: dodgerblue;
  }
`;
