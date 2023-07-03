import { Skeleton, Stack } from "@chakra-ui/react";

const ListingSkeleton = () => {
  return (
    <Stack>
      <Skeleton height="20px" />
      <Skeleton height="20px" />
      <Skeleton height="20px" />
    </Stack>
  );
};

export default ListingSkeleton;
