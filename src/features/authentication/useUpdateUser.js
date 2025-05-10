import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCurrentUser as updateCurrentUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();
  const { mutate: updateCurrentUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUserApi,
    onSuccess: () => {
      toast.success("User successfully updated");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
  return { updateCurrentUser, isUpdating };
}
