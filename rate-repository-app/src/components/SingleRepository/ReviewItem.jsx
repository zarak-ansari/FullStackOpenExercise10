import { StyleSheet, View, Pressable, Alert } from "react-native"
import { format, parseISO } from "date-fns"
import Text from "../Text"
import theme from "../../themes"
import { useNavigate } from "react-router-native"
import useDeleteReview from "../../hooks/useDeleteReview"

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 10
    },
    ratingColumn:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
    },
    ratingContainer:{
        alignItems:'center',
        justifyContent: 'center',
        borderColor: theme.colors.primary,
        borderStyle: 'solid',
        borderWidth: 3,
        width: 50,
        height: 50,
        borderRadius: 25,
        margin:10
    },
    infoContainer:{
        flexDirection: 'column'
    },
    reviewTextContainer: {
        marginTop: 5,
        width: 300
    },
    button:{
        margin:5,
        padding:10,
        color:'white',
        backgroundColor:'blue',
        borderRadius: 5
    },
})

const ReviewItem = ({ review }) => {
    const onUserReviewPage = review.user === undefined 

    return(
        <View>
            <View style={styles.mainContainer}>
                <Rating rating={review.rating}/>
                <ReviewInfo 
                    heading={onUserReviewPage ? review.repository.fullName : review.user.username}
                    date={review.createdAt}
                    text={review.text}
                />
            </View>
            {onUserReviewPage && <Buttons repositoryId={review.repository.id} reviewId={review.id} />}
        </View>
    )
}

const Buttons = ({ repositoryId, reviewId }) => {
    const navigate = useNavigate()
    
    const [deleteReview] = useDeleteReview()

    return(
        <View style={styles.mainContainer}>
            <Pressable 
                style={styles.button}
                onPress={() => navigate(`/repository/${repositoryId}`)}
            >
                <Text color='white' fontWeight='bold'>View Repository</Text>
            </Pressable>
            <Pressable 
                style={{...styles.button, backgroundColor:'red'}}
                onPress={() => handleDeleteReview(deleteReview,reviewId)}
            >
                <Text color='white' fontWeight='bold'>Delete Review</Text>
            </Pressable>
        </View>
    )
}

const handleDeleteReview = (deleteReview, reviewId) => {
    Alert.alert(
        'Delete Review',
        'Are you sure you want to delete this review?',
        [
            {
                text: 'Cancel',
                onPress: () => console.log('deletion cancelled'),
                style: 'cancel'
            },
            {
                text: 'Confirm',
                onPress: () => deleteReview(reviewId),
            }
        ]
    )
}

const ReviewInfo = (props) => {
    return(
        <View style={styles.infoContainer}>
            <Text fontWeight='bold'>{props.heading}</Text>
            <Text>{formatDate(props.date)}</Text>
            <View style={styles.reviewTextContainer}><Text>{props.text}</Text></View>
        </View>
    )
}
const formatDate = dateTime => {
    const dateString = dateTime.substring(0,10)
    const date = parseISO(dateString)
    return format(date, 'dd.MM.yyyy')
}

const Rating = ({ rating }) => {
    return(
        <View>
            <View style={styles.ratingContainer}>
                <Text color='primary' fontWeight='bold'>{rating}</Text>
            </View>
        </View>
    )
}

export default ReviewItem