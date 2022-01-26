import React from 'react';
import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Grid from '../assets/grid-header.svg';
import { theme } from '../global/theme';

export default function Header() {
  return (
    <Container>
      <Grid />
      <NotificationButton>
        <Ionicons
          name="notifications-outline"
          size={26}
          color={theme.colors.white2}
        />
      </NotificationButton>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding: 15px 34px;
  justify-content: space-between;
  background-color: ${theme.colors.primary};
`;

const NotificationButton = styled.TouchableOpacity``;
