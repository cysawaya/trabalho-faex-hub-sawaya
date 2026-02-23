import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #4f46e5, #9333ea);
  font-family: "Segoe UI", sans-serif;
`;

export const Card = styled.div`
  background: white;
  padding: 48px 40px;
  border-radius: 16px;
  width: 360px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  padding: 14px;
  border-radius: 10px;
  border: 1px solid #dcdcdc;
  font-size: 15px;

  &:focus {
    outline: none;
    border-color: #4f46e5;
  }
`;

export const Button = styled.button`
  padding: 14px;
  border-radius: 10px;
  border: none;
  background: #4f46e5;
  color: white;
  font-size: 16px;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #4338ca;
  }
`;

export const Footer = styled.p`
  text-align: center;
  font-size: 14px;

  a {
    color: #4f46e5;
    font-weight: 600;
    text-decoration: none;
  }
`;

