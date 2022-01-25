import styled from 'styled-components/native';
import { theme } from './theme';

export const Container = styled.View`
  flex: 1;
  align-items: ${(props) => props.align || 'stretch'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  background-color: ${(props) => props.background || theme.colors.primary};
  padding-top: ${(props) => props.padTop || 34}px;
  padding-right: ${(props) => props.padRight || 34}px;
  padding-bottom: ${(props) => props.padBottom || 34}px;
  padding-left: ${(props) => props.padLeft || 34}px;
`;
