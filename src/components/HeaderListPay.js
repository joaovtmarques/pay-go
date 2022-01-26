import React from 'react';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { theme } from '../global/theme';
import { Text } from '../global/global.styles';

export default function SquareItem({ icon, title, value }) {
  return (
    <Container>
      <LeftContent>
        <Icon name={icon} size={26} color={theme.colors.green} />
        <Text>{title}</Text>
        <ValueText>{value}</ValueText>
      </LeftContent>
      <RightContent>
        <Text color={theme.colors.green}>All</Text>
      </RightContent>
    </Container>
  );
}

const Container = styled.View`
  margin-top: 40px;
  margin-bottom: 34px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftContent = styled.View`
  align-items: center;
  flex-direction: row;
`;

const Icon = styled(MaterialCommunityIcons)`
  margin-right: 10px;
`;

const ValueText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  margin-left: 10px;
  color: ${theme.colors.pink};
  font-family: ${theme.fonts.regular};
`;

const RightContent = styled.TouchableOpacity``;
