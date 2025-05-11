import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const { isPending, data: stays } = useQuery({
    queryFn: getStaysTodayActivity,
    queryKey: ["todat-activity"],
  });
  return { stays, isPending };
}
