import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikHelpers/FormikTextInput';
import Text from './Text';
import theme from '../themes';
import * as yup from 'yup';
// import useSignIn from '../hooks/useSignIn';
// import { useNavigate } from 'react-router-native';

const initialValues = {
  repositoryOwnerName: '',
  repositoryName: '',
  rating: '',
  reviewText: ''
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
    repositoryOwnerName: yup
        .string()
        .required(),
    repositoryName: yup
        .string()
        .required(),
    rating: yup
        .number()
        .min(0)
        .max(100)
        .required(),
    reviewText: yup
        .string()
})

const CreateReview = () => {

//   const [signIn] = useSignIn()
//   const navigate = useNavigate()

  const onSubmit = async (values) => {
    // try {
    //   await signIn(values)
    //   navigate('/')
    // } catch (e) {
    //   console.log(e)
    // }
    console.log(JSON.stringify(values))
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer} >
      <FormikTextInput name='repositoryOwnerName' placeholder='Repository Owner' />
      <FormikTextInput name='repositoryName' placeholder='Repository Name' />
      <FormikTextInput name='rating' placeholder='Rating from 0 to 100' />
      <FormikTextInput name='reviewText' placeholder='Review' multiline={true} />
      
      <Pressable onPress={onSubmit} style={styles.button}><Text color='white' fontWeight='bold'>Create a Review</Text></Pressable>
    </View>
  )
}

export default CreateReview;