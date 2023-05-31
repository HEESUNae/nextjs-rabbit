"use client";
import React from "react";

// style
import { StyledPrimaryBtn } from "./style";

interface PrimaryBtnProps {
  title: string;
  onClick?: () => void;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({ title, onClick }) => {
  return (
    <StyledPrimaryBtn>
      <button onClick={onClick}>{title}</button>
    </StyledPrimaryBtn>
  );
};

export default PrimaryBtn;
