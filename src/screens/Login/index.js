import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { theme } from '../../global/theme';
import {
  Button,
  ConsentContent,
  ContinueButton,
  ContinueTextButton,
  Header,
  InputField,
  Linear,
  Text,
  Title,
} from './styles';
import { Container } from '../../global/global.styles';

export default function Login({ navigation }) {
  return (
    <Container padTop={34 * 4}>
      <Header>
        <Title>Login</Title>
        <Button>
          <Feather name="x" size={22} color={theme.colors.primary} />
        </Button>
      </Header>
      <Text>Enter your mobile phone number</Text>
      <Linear
        colors={[theme.colors.green, theme.colors.secondary]}
        start={{ x: 0.0, y: -1.0 }}
        end={{ x: 0.35, y: 0.5 }}
      >
        <InputField
          value="+ 998 (_ _) _ _ _   _ _   _ _"
          keyboardType={'phone-pad'}
        />
      </Linear>
      <ConsentContent>
        <Feather name="info" size={26} color={theme.colors.white2} />
        <Text align="center">
          By click the “Continue” button, I declare{`\n`}my consent to ...
          <Text color={theme.colors.green}>Details</Text>
        </Text>
      </ConsentContent>
      <ContinueButton onPress={() => navigation.navigate('MainTab')}>
        <ContinueTextButton>Continue</ContinueTextButton>
      </ContinueButton>
    </Container>
  );
}
