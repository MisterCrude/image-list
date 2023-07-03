import { ImageDto } from "@/api/images";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { ListingCard } from "./ListingCard";

interface ListingProps {
  images: ImageDto[];
  onClick: (image: ImageDto) => void;
}

const Listing = ({ images, onClick }: ListingProps) => {
  const handleClick = (image: ImageDto) => {
    onClick(image);
  };

  return (
    <Wrap justify="center">
      {images.map((image) => (
        <WrapItem key={image.id}>
          <ListingCard image={image} onClick={() => handleClick(image)} />
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Listing;
