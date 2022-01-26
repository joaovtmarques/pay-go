import React from 'react';

import { PaymentItemsContainer, ListItems } from './styles';
import { Container, Content, Title } from '../../global/global.styles';

import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import PaymentItem from '../../components/PaymentItem';
import HeaderListPay from '../../components/HeaderListPay';

import pubg from '../../assets/pubg-logo.png';
import beeline from '../../assets/beeline-logo.png';
import telecom from '../../assets/telecom-logo.png';

export default function Pay() {
  return (
    <Container>
      <Header />
      <Content showsVerticalScrollIndicator={false}>
        <Title>Payment</Title>
        <SearchBar />
        <PaymentItemsContainer>
          <HeaderListPay
            value="8"
            title="Popular"
            icon="star-box-multiple-outline"
          />
          <ListItems horizontal showsHorizontalScrollIndicator={false}>
            <PaymentItem image={beeline} title="Beeline" />
            <PaymentItem image={pubg} title="PUBG" />
            <PaymentItem image={telecom} title="Telecom" />
            <PaymentItem image={beeline} title="Beeline" />
            <PaymentItem image={pubg} title="PUBG" />
            <PaymentItem image={telecom} title="Telecom" />
            <PaymentItem image={beeline} title="Beeline" />
            <PaymentItem image={pubg} title="PUBG" />
          </ListItems>
        </PaymentItemsContainer>
        <PaymentItemsContainer>
          <HeaderListPay value="4" title="Mobile" icon="cellphone" />
          <ListItems horizontal showsHorizontalScrollIndicator={false}>
            <PaymentItem image={beeline} title="Beeline" />
            <PaymentItem image={pubg} title="PUBG" />
            <PaymentItem image={telecom} title="Telecom" />
            <PaymentItem image={beeline} title="Beeline" />
          </ListItems>
        </PaymentItemsContainer>
        <PaymentItemsContainer>
          <HeaderListPay
            value="12"
            title="Internet"
            icon="access-point-network"
          />
          <ListItems horizontal showsHorizontalScrollIndicator={false}>
            <PaymentItem image={beeline} title="Beeline" />
            <PaymentItem image={pubg} title="PUBG" />
            <PaymentItem image={telecom} title="Telecom" />
            <PaymentItem image={beeline} title="Beeline" />
            <PaymentItem image={pubg} title="PUBG" />
            <PaymentItem image={telecom} title="Telecom" />
            <PaymentItem image={beeline} title="Beeline" />
            <PaymentItem image={pubg} title="PUBG" />
            <PaymentItem image={telecom} title="Telecom" />
            <PaymentItem image={beeline} title="Beeline" />
            <PaymentItem image={pubg} title="PUBG" />
            <PaymentItem image={telecom} title="Telecom" />
          </ListItems>
        </PaymentItemsContainer>
      </Content>
    </Container>
  );
}
