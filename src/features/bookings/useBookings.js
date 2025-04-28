import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [searchParmas] = useSearchParams();

  const filterValue = searchParmas.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  const {
    isPending,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter],
    queryFn: () => getBookings({ filter }),
  });

  return { isPending, bookings, error };
}
