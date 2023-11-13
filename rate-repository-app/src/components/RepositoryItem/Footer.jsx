import { View } from "react-native"
import Text from "../Text"

const styles = {
    container: {
        flexDirection: 'row',
    },
    itemContainer: {
        flexDirection: 'column',
        margin: 20,
        alignItems: 'center'
    },
    itemText: {
        marginBottom: 5,
    }
}

const Footer = ({ forksCount, stargazersCount, reviewCount, ratingAverage }) => {
    return (
        <View style={styles.container}>
            <FooterItem name='Forks' value={forksCount} />
            <FooterItem name='Stars' value={stargazersCount} />
            <FooterItem name='Reviews' value={reviewCount} />
            <FooterItem name='Rating' value={ratingAverage}/>
        </View>
    )
}

const FooterItem = ({ name, value}) => {
    return (
        <View style={styles.itemContainer}>
            <Text fontWeight='bold' style={styles.itemText}>{ convertToThousands(value) }</Text>
            <Text style={styles.itemText}>{ name }</Text>
        </View>
    )
}

const convertToThousands = number => {
    if(number < 1000){
        return number
    } else {
        return (Math.round((number / 100)) / 10) + 'k'
    }

}

export default Footer