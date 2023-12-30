import styled from "styled-components";

const SHeader = styled.header`
    .header-wrapper{
        display: flex;
        justify-content: space-between;
        padding: 10px 0px;
        align-items: center;
        .logo{
            color: #c82525;
        } 
        .options{
            display: flex;
            align-items: center;
            gap: 15px;
            li{
                list-style: none;
            a{
                text-decoration: none;
                color: black;
            }
            }
        }
        .user-info {
      display: flex;
      align-items: center;
      gap: 15px;
      .create {
        font-weight: bold;
        color: #c82525;
        cursor: pointer;
      }
    }
  }
`;

export {SHeader};