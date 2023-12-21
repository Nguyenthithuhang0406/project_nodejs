import styled from "styled-components";

const SHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
    /*.logo{
        color: #c82525;
    }*/
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
`;

export {SHeader};