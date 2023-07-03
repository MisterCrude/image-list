import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/components/Layout";
import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Layout />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
