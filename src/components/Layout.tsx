import { Container, Box } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type LayoutProps = PropsWithChildren;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box bgColor="gray.50" minH="100vh">
      <Container p={10} maxW="6xl">
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
