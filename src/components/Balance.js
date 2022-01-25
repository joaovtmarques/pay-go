import React, { useState } from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { theme } from '../global/theme';

export default function Balance() {
  const [button, setButton] = useState(true);

  function setButtonState() {
    button ? setButton(false) : setButton(true);
  }

  return (
    <Container>
      <Title>Balance</Title>
      <ValueContainer>
        <ValueText>{button ? '3012 $' : '────'}</ValueText>
        <Button onPress={setButtonState}>
          <Ionicons
            name={button ? 'eye-off-outline' : 'eye-outline'}
            size={26}
            color={theme.colors.white}
          />
        </Button>
      </ValueContainer>
      <ConsumptionText>Consumption for August - 188 $</ConsumptionText>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 175px;
  padding: 34px 26px;
  margin-top: 19px;
  border-radius: 20px;
  justify-content: space-between;
  align-items: flex-start;
  background-color: ${theme.colors.green};
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.regular};
`;

const ValueContainer = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const ValueText = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.regular};
`;

const Button = styled.TouchableOpacity``;

const ConsumptionText = styled.Text`
  font-size: 14px;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.text};
`;
