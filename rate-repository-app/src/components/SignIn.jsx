import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikHelpers/FormikTextInput';
import Text from './Text';
import theme from '../themes';

const initialValues = {
  username: '',
  password: ''
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: theme.colors.white,
    margin: 20,
  },
  button: {
    backgroundColor: 'blue',
    margin: 20,
    maxWidth: 60,
    borderRadius:5,
    alignItems: 'center',
  }
})

const SignIn = () => {
  
  const onSubmit = (values) => {
    console.log(`Username: ${values.username} | Password: ${values.password}`)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit}/>}
    </Formik>
  );
};

const SignInForm = ({onSubmit}) => {
  return (
    <View style={styles.formContainer} >
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <Pressable onPress={onSubmit} style={styles.button}><Text color='white'>Submit</Text></Pressable>
    </View>
  )
}

export default SignIn;