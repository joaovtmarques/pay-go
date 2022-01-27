import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { ItemsContainer } from './styles';
import { theme } from '../../global/theme';
import { Container, Title, Content } from '../../global/global.styles';

import Header from '../../components/Header';
import ServiceItem from '../../components/ServiceItem';

export default function Services() {
  return (
    <Container>
      <Header />
      <Content>
        <Title>Services</Title>
        <ItemsContainer>
          <ServiceItem
            Icon={Ionicons}
            name="ios-airplane"
            color={theme.colors.green}
            title="PayMENT Avia"
            description="Purchase of air tickets"
          />
          <ServiceItem
            Icon={Ionicons}
            name="restaurant"
            color={theme.colors.yellow}
            title="Restaurant"
            description="Reservation of tables"
          />
          <ServiceItem
            Icon={FontAwesome}
            name="car"
            color={theme.colors.lightPurple2}
            title="Car Insurance"
            description="Buying a pole"
          />
          <ServiceItem
            Icon={MaterialIcons}
            name="payments"
            color={theme.colors.pink}
            title="Payments monitoring"
            description="Fines notification"
          />
          <ServiceItem
            Icon={Ionicons}
            name="ios-airplane"
            color={theme.colors.green}
            title="PayMENT Avia"
            description="Purchase of air tickets"
          />
          <ServiceItem
            Icon={Ionicons}
            name="restaurant"
            color={theme.colors.yellow}
            title="Restaurant"
            description="Reservation of tables"
          />
        </ItemsContainer>
      </Content>
    </Container>
  );
}
