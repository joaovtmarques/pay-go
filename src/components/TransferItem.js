import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { theme } from '../global/theme';

export default function TransferItem({ text, Icon }) {
  return (
    <Container>
      <CardAndTextContainer>
        {Icon ? (
          <Icon height="20" width="26" />
        ) : (
          <Ionicons name="card-outline" size={26} color={theme.colors.green} />
        )}
        <Text>{text}</Text>
      </CardAndTextContainer>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={30}
        color={theme.colors.green}
      />
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  align-items: center;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${theme.colors.secondary};
`;

const CardAndTextContainer = styled.View`
  align-items: center;
  flex-direction: row;
`;

const Text = styled.Text`
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.regular};
  margin-left: 15px;
`;
