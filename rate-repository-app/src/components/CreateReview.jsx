import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import FormikTextInput from './FormikHelpers/FormikTextInput';
import Text from './Text';
import theme from '../themes';
import * as yup from 'yup';
import useCreateReview from '../hooks/useCreateReview';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
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
    ownerName: yup
        .string()
        .required('Repository owner name is required'),
    repositoryName: yup
        .string()
        .required('Repository name is required'),
    rating: yup
        .number()
        .min(0, 'Rating cannot be negative')
        .max(100, 'Rating must be 100 or below')
        .required('Rating must be provided'),
    text: yup
        .string()
})

const CreateReview = () => {

const [createReview] = useCreateReview()

  const onSubmit = async (values) => {
    try {
      values = {...values, rating:parseInt(values.rating)}
      await createReview(values)
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
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const CreateReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.formContainer} >
      <FormikTextInput name='ownerName' placeholder='Repository Owner' />
      <FormikTextInput name='repositoryName' placeholder='Repository Name' />
      <FormikTextInput name='rating' placeholder='Rating from 0 to 100' />
      <FormikTextInput name='text' placeholder='Review' multiline={true} />
      
      <Pressable onPress={onSubmit} style={styles.button}><Text color='white' fontWeight='bold'>Create a Review</Text></Pressable>
    </View>
  )
}

export default CreateReview;