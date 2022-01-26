import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { theme } from '../global/theme';

export default function PaymentItem({ title, image }) {
  return (
    <Container>
      <Logo source={image} />
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin-right: 10px;
  border-radius: 20px;
  background-color: ${theme.colors.secondary};
`;

const Logo = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 25px;
  background-color: ${theme.colors.white3};
`;

const Title = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  font-weight: 600;
  color: ${theme.colors.white2};
  font-family: ${theme.fonts.regular};
`;
