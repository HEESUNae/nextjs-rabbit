import styled from "styled-components";

export const StyledPostList = styled.div`
  .post {
    table {
      width: 100%;
      border-top: 0.2rem solid brown;
      border-bottom: 0.1rem solid #121212;
      tr {
        border: 0.1rem solid #121212;
      }
      td {
        background-color: rgba(255, 255, 255, 0.1);
        min-height: 4rem;
        padding: 1.5rem;
        box-sizing: border-box;
        text-align: left;
        width: 100%;
        &:nth-child(1) {
          text-align: center;
          width: 5rem;
          box-sizing: border-box;
          border-right: 0.1rem solid #121212;
        }
        p {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
          color: #fff;
        }
      }
    }
  }
`;
