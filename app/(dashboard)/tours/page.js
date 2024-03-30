import ToursPage from "@/components/ToursPage";
import { getAllTours } from "@/utils/action";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
const AllToursPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tours", ""],
    queryFn: () => getAllTours(),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="text-base-content">
        <ToursPage />
      </div>
    </HydrationBoundary>
  );
};

export default AllToursPage;
