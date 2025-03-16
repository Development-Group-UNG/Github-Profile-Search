import React from 'react';
import { useHistory } from 'react-router-dom';

import { 
    Container,
    NumberContainer
} from "./style";

const UserNumbers = props => {
    const history = useHistory();
    const handleOnClick = route => history.push(route);

    return (
        <Container>
            <NumberContainer onClick={() => handleOnClick('/repos')}>
                <h1>{props?.repos}</h1>
                {/* <h1>{40}</h1> */}
                <h2>Repositórios</h2>
            </NumberContainer>

            {/* <NumberContainer onClick={() => handleOnClick('/followers')}> */}
            {/* Implementação futura que irá mostrar meus seguidores no GitHub */}

            <NumberContainer>
                <h1>{props?.followers}</h1>
                {/* <h1>{146}</h1> */}
                <h2>Seguidores</h2>
            </NumberContainer>

            {/* <NumberContainer onClick={() => handleOnClick('/following')}> */}
            {/* Implementação futura que irá mostrar quem eu sigo no GitHub */}

            <NumberContainer>
                <h1>{props?.following}</h1>
                {/* <h1>{156}</h1> */}
                <h2>Seguindo</h2>
            </NumberContainer>
        </Container>
    );
}

export default UserNumbers;