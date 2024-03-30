import NewTour from "@/components/NewTour";
import { dehydrate , HydrationBoundary, QueryClient} from "@tanstack/react-query";
const NewTourPage = () => {
    const queryClient = new QueryClient();
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
        <div className="text-base-content">
            <NewTour />
        </div>
        </HydrationBoundary>
    );
}

export default NewTourPage;