import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { theme } from '../global/theme';

export default function ServiceItem({ Icon, name, color, title, description }) {
  return (
    <Container>
      <Icon name={name} size={38} color={color} />
      <TextContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TextContent>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 24px;
  margin: 7px 0px;
  border-radius: 20px;
  flex-direction: row;
  background-color: ${theme.colors.secondary};
`;

const TextContent = styled.View`
  margin-left: 15px;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${theme.colors.white2};
  font-family: ${theme.fonts.regular};
`;

const Description = styled.Text`
  font-size: 16px;
  color: ${theme.colors.white3};
  font-family: ${theme.fonts.regular};
`;
