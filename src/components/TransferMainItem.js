import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { theme } from '../global/theme';

export default function TransferMainItem({ title, Icon }) {
  return (
    <Container>
      <Icon width={34} height={30} />
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  flex: 0.47;
  height: 100px;
  padding: 25px;
  margin-top: 34px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 20px;
  background-color: ${theme.colors.secondary};
`;

const Title = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${theme.colors.white2};
  font-family: ${theme.fonts.regular};
`;
