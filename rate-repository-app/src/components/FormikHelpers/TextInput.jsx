import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../../themes';

const styles = StyleSheet.create({
  errorTextInput: {
    borderColor: theme.colors.errorRed
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, error && styles.errorTextInput];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;