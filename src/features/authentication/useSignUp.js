import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignUp() {
  const {
    mutate: signup,
    error,
    isLoading,
  } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      // console.log(user);
      toast.success(
        'Account successfully created.Please verify the new account from the user email address.'
      );
    },
  });

  return { signup, error, isLoading };
}
