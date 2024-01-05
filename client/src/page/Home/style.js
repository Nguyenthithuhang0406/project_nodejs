import styled from "styled-components";

export const SHome = styled.div`
  .post-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  .pagination-wrapper {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
`;