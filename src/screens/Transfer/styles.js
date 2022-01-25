import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { theme } from '../../global/theme';

export const Title = styled.Text`
  font-size: 34px;
  font-weight: 700;
  text-align: center;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.regular};
`;

export const WhoToSendContainer = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 34px;
`;

export const WhoToSendText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.color || theme.colors.white};
  font-family: ${theme.fonts.regular};
`;

export const Linear = styled(LinearGradient)`
  width: 100%;
  height: 51px;
  margin-top: 25px;
`;

export const InputContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputField = styled.TextInput`
  flex: 1;
  height: 96%;
  background-color: ${theme.colors.primary};
  font-family: ${theme.fonts.regular};
  font-weight: 700;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.55);
`;

export const ItemsContainer = styled.View`
  width: 100%;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: space-between;
`;

export const AllButton = styled.TouchableOpacity`
  margin: 51px 0px;
`;
