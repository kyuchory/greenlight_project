//spinner 컴포넌트, ActivityIndicator 이용
// Spinner은 화면 전체를 차지, 다른 컴포넌트 보다 위에 -> 사용자가 다른 행동 못하도록

import React, {useContext} from 'react';
import {ActivityIndicator} from 'react-native';
import styled, {ThemeContext} from 'styled-components/native';

const Container = styled.View`
    position: absolute;
    z-index: 2;
    opacity: 0.3;
    width: 100%;
    height: 100%;
    justify-content: center;
    background-color:${({ theme }) => theme.spinnerBackground};
`;

const Spinner = () => {
    const theme = useContext(ThemeContext);
    return(
        <Container>
            <ActivityIndicator size = {'large'} color={theme.spinnerIndicator} />
        </Container>
    );
};

export default Spinner;