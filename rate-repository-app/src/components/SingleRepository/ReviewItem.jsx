import { StyleSheet, View } from "react-native"
import { format, parseISO } from "date-fns"
import Text from "../Text"
import theme from "../../themes"

const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
        backgroundColor: 'white'
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
    }
})

const ReviewItem = ({ review }) => {
    return(
        <View style={styles.mainContainer}>
            <Rating rating={review.rating}/>
            <ReviewInfo 
                username={review.user.username}
                date={review.createdAt}
                text={review.text}
            />
        </View>
    )
}

const ReviewInfo = (props) => {
    return(
        <View style={styles.infoContainer}>
            <Text>{props.username}</Text>
            <Text>{formatDate(props.date)}</Text>
            <Text>{props.text}</Text>
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
                <Text>{rating}</Text>
            </View>
        </View>
    )
}

export default ReviewItem