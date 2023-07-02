import { useState } from "react";
import { useGetImages, ImageDto } from "@/api/images";
import { isImage } from "@/utils";

const ImageListing = () => {
  const { isLoading, isError, data: images } = useGetImages();

  const [imageDetail, setImageDetail] = useState<ImageDto | null>(null);
  const [openImageModal, setOpenImageModal] = useState(false);

  const handleToggleModal = (image?: ImageDto) => {
    const isOpen = isImage(image);
    setOpenImageModal(isOpen);

    isOpen && setImageDetail(image);
  };

  if (isLoading) return <>Loading...</>;

  if (isError) return <>An error occurred while fetching the image list.</>;

  return (
    <>
      {openImageModal && (
        <div>
          <button onClick={() => handleToggleModal()}>x</button>
          <img src={imageDetail.url} alt={imageDetail.title} />
          <p>{imageDetail.title}</p>
          <p>{imageDetail.albumId}</p>
        </div>
      )}
      {images.map((image) => (
        <div key={image.id} onClick={() => handleToggleModal(image)}>
          <img src={image.thumbnailUrl} alt={image.title} />
        </div>
      ))}
    </>
  );
};

export default ImageListing;
