import styled from "styled-components";

export const StyledPagination = styled.div`
  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 3rem;
    gap: 1rem;
    .page-btn {
      border-radius: 50%;
      width: 3rem;
      height: 3rem;
      background-color: #fff;
    }
    .active {
      background-color: blanchedalmond;
      color: chocolate;
      font-weight: 500;
    }
  }
`;
