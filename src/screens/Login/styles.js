import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

import { theme } from '../../global/theme';

export const Title = styled.Text`
  font-family: ${theme.fonts.regular};
  font-weight: 700;
  font-size: 36px;
  color: ${theme.colors.white};
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  height: 26px;
  width: 26px;
  background-color: ${theme.colors.white};
  align-items: center;
  justify-content: center;
  border-radius: 13px;
`;

export const Text = styled.Text`
  font-family: ${theme.fonts.regular};
  font-size: 14px;
  color: ${(props) => props.color || theme.colors.white2};
  text-align: ${(props) => props.align || 'left'};
  margin-top: 20px;
`;

export const Linear = styled(LinearGradient)`
  width: 100%;
  height: 51px;
  align-items: center;
  justify-content: center;
  align-self: center;
  border-radius: 15px;
  margin-top: 20px;
`;

export const InputField = styled.TextInput`
  width: 99%;
  height: 90%;
  background-color: ${theme.colors.secondary};
  border-radius: 15px;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.regular};
  font-weight: 700;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.55);
  padding-left: 34px;
  padding-right: 10px;
`;

export const ConsentContent = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 65px;
`;

export const ContinueButton = styled.TouchableOpacity`
  width: 100%;
  height: 51px;
  border-radius: 15px;
  background-color: ${theme.colors.green};
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ContinueTextButton = styled.Text`
  font-family: ${theme.fonts.regular};
  font-weight: 700;
  font-size: 16px;
  color: ${theme.colors.white};
`;
