import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Logo } from './styles';
import { Container } from '../../global/global.styles';

export default function Preload() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);

  return (
    <Container>
      <Logo source={require('../../assets/logo.png')} />
    </Container>
  );
}
