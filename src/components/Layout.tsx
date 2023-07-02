import { useState } from "react";
import { useGetImages, ImageDto } from "@/api/images";
import { isImage } from "@/utils";
import Modal from "@/components/Modal";
import ImageListing from "@/components/Listing";

const Layout = () => {
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
      <ImageListing images={images} onClick={handleToggleModal} />

      <Modal isOpen={openImageModal} onClose={() => handleToggleModal()}>
        <img src={imageDetail?.url} alt={imageDetail?.title} />
        <p>{imageDetail?.title}</p>
        <p>{imageDetail?.albumId}</p>
      </Modal>
    </>
  );
};

export default Layout;
