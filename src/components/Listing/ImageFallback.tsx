import { Center, Spinner } from "@chakra-ui/react";

interface ImageFallbackProps {
  width: number;
  height: number;
}

export const ImageFallback = ({ width, height }: ImageFallbackProps) => {
  return (
    <Center bgColor="gray.100" width={width} height={height} borderRadius="lg">
      <Spinner
        thickness="3px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="lg"
      />
    </Center>
  );
};
