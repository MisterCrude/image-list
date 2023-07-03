import { ImageDto } from "@/api/images";
import {
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Center,
  Text,
} from "@chakra-ui/react";

interface ListingProps {
  images: ImageDto[];
  onClick: (image: ImageDto) => void;
}

const Listing = ({ images, onClick }: ListingProps) => {
  return (
    <>
      {images.map((image) => (
        <Card key={image.id} maxW="sm">
          <CardBody>
            <Image
              src={image.thumbnailUrl}
              alt={image.title}
              borderRadius="lg"
            />
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button
                variant="solid"
                colorScheme="blue"
                onClick={() => onClick(image)}
              >
                Show details
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}

      {images.length === 0 && (
        <Center>
          <Text fontSize="4xl" color="grey">
            Not any images found!
          </Text>
        </Center>
      )}
    </>
  );
};

export default Listing;
