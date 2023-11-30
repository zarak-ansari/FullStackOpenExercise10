import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikHelpers/FormikTextInput';
import Text from './Text';
import theme from '../themes';
import * as yup from 'yup';
import useCreateUser from '../hooks/useCreateUser'
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
  confirmPassword: ''
}

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: theme.colors.white,
    margin: 20,
  },
  button: {
    backgroundColor: 'blue',
    margin: 20,
    maxWidth: 300,
    borderRadius: 5,
    alignItems: 'center',
    padding:10
  }
})

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password must be provided'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords don\'t match')
        .required('Password confirmation must be provided'),
})

const CreateUser = () => {

    const [createUser] = useCreateUser()
    const [signIn] = useSignIn()
    const navigate = useNavigate()

  const onSubmit = async ({username, password}) => {
    try {
      await createUser({username, password})
      await signIn({username, password})
      navigate('/')
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
      {({ handleSubmit }) => <CreateUserForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const CreateUserForm = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer} >
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry />
      <FormikTextInput name='confirmPassword' placeholder='Confirm Password' secureTextEntry />
      
      <Pressable onPress={onSubmit} style={styles.button}><Text color='white' fontWeight='bold'>Sign Up</Text></Pressable>
    </View>
  )
}

export default CreateUser;