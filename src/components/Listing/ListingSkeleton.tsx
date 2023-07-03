import { Skeleton, Wrap, WrapItem } from "@chakra-ui/react";
import { getRange } from "@/utils";

export const ListingSkeleton = () => {
  const items = getRange(10);

  return (
    <Wrap justify="center">
      {items.map((item) => (
        <WrapItem key={item} p={4}>
          <Skeleton height="200px" width="200px" borderRadius="md" />
        </WrapItem>
      ))}
    </Wrap>
  );
};
