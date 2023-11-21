import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikHelpers/FormikTextInput';
import Text from './Text';
import theme from '../themes';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

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

const validationSchema = yup.object().shape({
  username: yup
              .string()
              .required(),
  password: yup
              .string()
              .required()
})

const SignIn = () => {
  
  const [signIn] = useSignIn()

  const onSubmit = async (values) => {
    try{
      const result = await signIn(values)
      console.log(JSON.stringify(result.data.authenticate.accessToken))
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Formik 
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
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