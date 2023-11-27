import { useEffect } from "react"
import { useApolloClient } from "@apollo/client"
import { useNavigate } from "react-router-native"
import useAuthStorage from "../hooks/useAuthStorage"

const SignOut = () => {
    
    const apolloClient = useApolloClient()
    const navigate = useNavigate()
    const authStorage = useAuthStorage()

    const handleLogout = async () => {
        await authStorage.removeAccessToken()
        await apolloClient.resetStore()
    }

    useEffect(() => {
        handleLogout()
        navigate('/')
    },[])
    
    return <></>
}

export default SignOut