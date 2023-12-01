import { useMutation, useQuery } from "@apollo/client"
import { DELETE_REVIEW, GET_USER } from "../graphql/queries"

const useDeleteReview = () => {

    const [mutate, result] = useMutation(DELETE_REVIEW)
    const { refetch } = useQuery(GET_USER, {variables:{includeReviews:true}})

    const deleteReview = async (reviewId) => {
        const result = await mutate({variables: {deleteReviewId: reviewId}})
        await refetch()
        return result
    }

    return ([deleteReview, result])
}

export default useDeleteReview