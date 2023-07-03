import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ListingPage from "@/pages/ListingPage";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <ListingPage />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
