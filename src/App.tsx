import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ImageListing from "./ui/ImageListing";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ImageListing />
    </QueryClientProvider>
  );
};

export default App;
