import styled from 'styled-components/native';
import { theme } from './theme';

export const Container = styled.View`
  flex: 1;
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  background-color: ${(props) => props.background || theme.colors.primary};
  padding-top: ${(props) => props.padTop || -1}px;
  padding-right: ${(props) => props.padRight || -1}px;
  padding-bottom: ${(props) => props.padBottom || -1}px;
  padding-left: ${(props) => props.padLeft || -1}px;
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 34,
  },
})`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.regular};
`;

export const Text = styled.Text`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.color || theme.colors.white};
  font-family: ${theme.fonts.regular};
`;
