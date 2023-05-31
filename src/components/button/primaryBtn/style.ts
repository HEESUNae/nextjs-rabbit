import styled from "styled-components";

export const StyledPrimaryBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 10rem;
    height: 4rem;
    font-size: clamp(1.2rem, 3.5vw, 1.5rem);
    background-color: rgba(255, 255, 255, 0.15);
    border: 0.1rem solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(0.3rem);
    border-radius: 1rem;
    color: #fff;
  }
`;
