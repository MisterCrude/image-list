import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const ImageListing = () => {
  const {
    isLoading,
    isError,
    data: images,
  } = useQuery(["getImages"], async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/albums/1/photos`
    );

    if (!response.ok) {
      throw new Error("An error occurred while fetching the data");
    }
    return response.json();
  });
  const [imageDetail, setImageDetail] = useState();
  const [openImageModal, setOpenImageModal] = useState(false);

  const handleToggleModal = (image) => {
    const isOpen = Boolean(image);
    setOpenImageModal(isOpen);

    isOpen && setImageDetail(image);
  };

  console.log(openImageModal);

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
