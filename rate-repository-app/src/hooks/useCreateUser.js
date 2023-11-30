import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/queries";

const useCreateUser = () => {

  const [mutate, result] = useMutation(CREATE_USER);

  const signUp = async ({ username, password }) => {
    const result = await mutate({ variables: { user:{ username, password }} })
    return result
  }

  return [signUp, result];
};

export default useCreateUser;