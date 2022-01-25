import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const ItemsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const TransferTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.regular};
  margin-top: 50px;
`;
