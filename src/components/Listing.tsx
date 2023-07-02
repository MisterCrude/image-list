import { ImageDto } from "@/api/images";

interface ListingProps {
  images: ImageDto[];
  onClick: (image: ImageDto) => void;
}

const Listing = ({ images, onClick }: ListingProps) => {
  return (
    <>
      {images.map((image) => (
        <div key={image.id} onClick={() => onClick(image)}>
          <img src={image.thumbnailUrl} alt={image.title} />
        </div>
      ))}
    </>
  );
};

export default Listing;
