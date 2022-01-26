import React from 'react';
import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

import { theme } from '../global/theme';

export default function SearchBar() {
  return (
    <Container>
      <Button>
        <Feather name="search" size={26} color={theme.colors.white2} />
      </Button>
      <Input
        selectionColor={theme.colors.white2}
        placeholder="Search"
        placeholderTextColor={theme.colors.white2}
      />
    </Container>
  );
}

const Container = styled.View`
  height: 50px;
  width: 100%;
  padding: 10px;
  margin-top: 34px;
  align-items: center;
  border-radius: 15px;
  flex-direction: row;
  background-color: ${theme.colors.secondary};
`;

const Button = styled.TouchableOpacity``;

const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding: 0px 10px;
  color: ${theme.colors.white2};
  font-family: ${theme.fonts.regular};
`;
