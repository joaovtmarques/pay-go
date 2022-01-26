import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { theme } from '../../global/theme';
import {
  WhoToSendContainer,
  Linear,
  InputContainer,
  InputField,
  ItemsContainer,
  AllButton,
} from './styles';
import { Container, Content, Title, Text } from '../../global/global.styles';

import Header from '../../components/Header';
import TransferItem from '../../components/TransferItem';
import CircleItemPerson from '../../components/CircleItemPerson';

import CardRequest from '../../assets/card-request.svg';

export default function Transfer() {
  return (
    <Container>
      <Header />
      <Content showsVerticalScrollIndicator={false}>
        <Title>Money transaction</Title>
        <WhoToSendContainer>
          <Text>Who to send</Text>
          <Ionicons name="scan-sharp" size={30} color={theme.colors.green} />
        </WhoToSendContainer>
        <Linear
          colors={[
            theme.colors.primary,
            theme.colors.white3,
            theme.colors.primary,
          ]}
          start={{ x: 0.8, y: -10 }}
          end={{ x: 0, y: -10 }}
        >
          <InputContainer>
            <InputField
              keyboardType="phone-pad"
              placeholder="Card or phone number"
              placeholderTextColor="rgba(255, 255, 255, 0.55)"
            />
            <Ionicons
              name="ios-person-outline"
              size={30}
              color={theme.colors.green}
            />
          </InputContainer>
        </Linear>
        <ItemsContainer>
          <CircleItemPerson background={theme.colors.pink} text="cd" />
          <CircleItemPerson background={theme.colors.lightPurple2} text="mm" />
          <CircleItemPerson background={theme.colors.lightBlue} text="mw" />
          <CircleItemPerson background={theme.colors.yellow} text="ub" />
          <CircleItemPerson text="MW" icon />
        </ItemsContainer>
        <AllButton>
          <Text color={theme.colors.green}>All</Text>
        </AllButton>
        <ItemsContainer flexDirection="column">
          <TransferItem text="Transfer to my card" />
          <TransferItem text="Request for founds" Icon={CardRequest} />
        </ItemsContainer>
      </Content>
    </Container>
  );
}
