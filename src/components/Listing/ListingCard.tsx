import { Text, Box } from "@chakra-ui/react";
import Image from "@/components/Image";
import { ImageDto } from "@/api/images";

interface ListingCardProps {
  image: ImageDto;
  onClick: () => void;
}

export const ListingCard = ({ image, onClick }: ListingCardProps) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        "&": {
          padding: 5,
          borderRadius: "md",
          transition: "300ms ease-in-out",
          "&:hover": {
            cursor: "pointer",
            bgColor: "gray.100",
            boxShadow: "lg",
          },
        },
      }}
    >
      <Image
        height={150}
        src={image.thumbnailUrl}
        title={image.title}
        width={150}
      />
      <Box
        sx={{
          width: 200,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <Text
          sx={{
            marginTop: 2,
            fontWeight: "semibold",
            fontSize: "sm",
            color: "gray.600",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {image.title}
        </Text>
      </Box>
    </Box>
  );
};
