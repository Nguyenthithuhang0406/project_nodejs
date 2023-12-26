import styled from "styled-components";
export const SAuth = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 450px;
    border-radius: 10px;
    transform: translate(-50%, -50%);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 10px 20px;
  h1{
    text-align: center;
  }
  form-item{
    margin: 10px 0px;
    input{
        margin-top: 5px;
    }
  }
  .submit{
    display: block;
    width: 100%;
    &.reset{
        margin-top: 10px;
    }
  }

`;