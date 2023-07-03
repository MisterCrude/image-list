import { useState } from "react";
import { Container } from "@chakra-ui/react";
import { isImage } from "@/utils";
import { useGetImages, ImageDto } from "@/api/images";
import ErrorAlert from "./ErrorAlert";
import ImageListing from "@/components/Listing";
import ListingSkeleton from "@/components/ListingSkeleton";
import Modal from "@/components/Modal";

const Layout = () => {
  const [imageDetail, setImageDetail] = useState<ImageDto | null>(null);
  const [openImageModal, setOpenImageModal] = useState(false);

  const { isLoading, isError, data: images } = useGetImages();

  const handleToggleModal = (image?: ImageDto) => {
    const isOpen = isImage(image);
    setOpenImageModal(isOpen);
    isOpen && setImageDetail(image);
  };

  if (isLoading)
    return (
      <Container centerContent p={10} maxW="4xl">
        <ListingSkeleton />
      </Container>
    );

  if (isError)
    return (
      <Container centerContent p={10} maxW="4xl">
        <ErrorAlert />
      </Container>
    );

  return (
    <Container p={10} maxW="4xl">
      <ImageListing images={images} onClick={handleToggleModal} />

      <Modal isOpen={openImageModal} onClose={() => handleToggleModal()}>
        <img src={imageDetail?.url} alt={imageDetail?.title} />
        <p>{imageDetail?.title}</p>
        <p>{imageDetail?.albumId}</p>
      </Modal>
    </Container>
  );
};

export default Layout;
