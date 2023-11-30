import { useMutation } from "@apollo/client"
import { useNavigate } from "react-router-native"
import { CREATE_REVIEW } from "../graphql/queries"

const useCreateReview = () => {
    const navigate = useNavigate()
    const [mutate, result] = useMutation(CREATE_REVIEW)

    const createReview = async (review) => {
        const result = await mutate({variables: {review: review}})
        navigate(`/repository/${result.data.createReview.repositoryId}`)
        return result
    }
    return [createReview, result];
}

export default useCreateReview