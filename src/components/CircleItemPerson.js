import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { theme } from '../global/theme';

export default function CircleItemPerson({ text, background, icon }) {
  return (
    <Container background={background}>
      {icon ? (
        <Ionicons name="add" size={30} color={theme.colors.white} />
      ) : (
        <Text>{text}</Text>
      )}
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  width: 55px;
  height: 55px;
  margin-top: 34px;
  align-items: center;
  border-radius: 50px;
  justify-content: center;
  background-color: ${(props) => props.background || theme.colors.green};
`;

const Text = styled.Text`
  font-size: 18px;
  text-transform: uppercase;
  color: ${theme.colors.white};
  font-weight: 700;
  font-family: ${theme.fonts.regular};
`;
