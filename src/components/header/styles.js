import styled from 'styled-components';

export const HeaderSection = styled.header`
    width: 70%;
    height: 130px;
    background: rgba(255,255,255, .2);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 0;
    @media (max-width: 825px) {
        width: 80%;
        height: 120px;
    }
`

export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 15px 0;
    color: #fff;
    font-size: 25pt;
    font-weight: 700;
    text-align: center;
    width: 100%;
    @media (max-width: 445px) {
        font-size: 15pt;
    }
`

export const HeaderInputContainer = styled.div`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderInput = styled.input`
    width: 85%;
    height: 30px;
    border-radius: 20px;
    border: none;
    padding: 0 16px;
    color: #444;
    transition: .4s ease;
    @media (max-width: 825px) {
        width: 85%;
    }

    &:focus {
        outline: none;
        width: 80%;
        transition: .4s ease;
    }
`

export const HeaderSearchButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background: #FF7A00;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    transition: ease .3s;

    &:hover {
        transform: scale(1.05);
        transition: ease .3s;
        cursor: pointer;
    }
`