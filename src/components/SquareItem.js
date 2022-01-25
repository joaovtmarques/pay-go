import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { theme } from '../global/theme';

export default function SquareItem({ title, icon, Icon }) {
  return (
    <Container>
      <Button>
        {Icon ? (
          <Icon height="34" width="34" />
        ) : (
          <Ionicons name={icon} size={34} color={theme.colors.white} />
        )}
      </Button>
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.View`
  margin-top: 34px;
  align-items: center;
  justify-content: center;
`;

const Button = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  padding: 15px;
  align-items: center;
  border-radius: 20px;
  justify-content: center;
  background-color: ${theme.colors.green};
`;

const Title = styled.Text`
  font-size: 14px;
  margin-top: 10px;
  font-weight: 600;
  color: ${theme.colors.white2};
  font-family: ${theme.fonts.regular};
`;
