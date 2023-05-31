import styled from "styled-components";

export const StyledPostDetail = styled.div`
  .post-detail {
    width: 60rem;
    table {
      width: 100%;
      border-top: 0.2rem solid brown;
      border-bottom: 0.1rem solid #121212;
      tr {
        border: 0.1rem solid #121212;
        background-color: rgba(255, 255, 255, 0.1);
        &.contents {
          p {
            min-height: 15rem;
          }
        }
      }
      th {
        width: 20%;
        border-right: 0.1rem solid #121212;
      }
      td {
        min-height: 4rem;
        padding: 1.5rem;
        box-sizing: border-box;
        text-align: left;
        width: 80%;
      }
    }
    .btn-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      margin-top: 2rem;
    }
  }
  @media (max-width: 610px) {
    .post-detail {
      width: 90%;
    }
  }
`;
