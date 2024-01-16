import styled from "styled-components";

export const SPostItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s linear;
  .image-post {
    max-width: 100%;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .info {
    margin-top: 5px;
    .title {
      font-size: 24px;
      margin-bottom: 10px;
    }
    p {
      margin-top: 3px;
    }

    .hashTag {
      color: gray;
    }
  }
  &:hover {
    transform: translateY(-5px);
  }
`;
