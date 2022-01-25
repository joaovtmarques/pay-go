import React from 'react';

import { Container, Content } from '../../global/global.styles';
import { ItemsContainer, TransferTitle } from './styles';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import SquareItem from '../../components/SquareItem';
import TransferMainItem from '../../components/TransferMainItem';

import PayGoIcon from '../../assets/pay-go-icon.svg';
import CardTransfer from '../../assets/card-transfer.svg';
import CardRequest from '../../assets/card-request.svg';

export default function Main() {
  return (
    <Container padTop={24} padBottom={-1}>
      <Header />
      <Content showsVerticalScrollIndicator={false}>
        <Balance />
        <ItemsContainer>
          <SquareItem title="My card" icon="card-outline" />
          <SquareItem title="Pay GO" Icon={PayGoIcon} />
          <SquareItem title="QR payment" icon="scan-sharp" />
        </ItemsContainer>
        <TransferTitle>Transfer</TransferTitle>
        <ItemsContainer>
          <TransferMainItem Icon={CardTransfer} title={`Transfer\nfunds`} />
          <TransferMainItem Icon={CardRequest} title={`Request\nfunds`} />
        </ItemsContainer>
      </Content>
    </Container>
  );
}
