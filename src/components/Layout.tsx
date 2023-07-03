import { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import { isImage } from "@/utils";
import { useGetImages, ImageDto } from "@/api/images";
import ErrorAlert from "./ErrorAlert";
import ImageListing from "@/components/Listing";
import ListingSkeleton from "@/components/ListingSkeleton";
import Modal from "@/components/Modal";
import SearchBar from "./SearchBar";

const Layout = () => {
  const [imageDetail, setImageDetail] = useState<ImageDto | null>(null);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState<ImageDto[]>([]);

  const { isLoading, isError, data } = useGetImages();

  const handleToggleModal = (image?: ImageDto) => {
    const isOpen = isImage(image);
    setOpenImageModal(isOpen);
    isOpen && setImageDetail(image);
  };

  const handleChangeSearchQuery = (query: string) => {
    const filteredImages =
      data?.filter(({ title }) => title.includes(query)) || [];

    setSearchQuery(query);
    setImages(filteredImages);
  };

  useEffect(() => {
    data && setImages(data);
  }, [data]);

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
      <SearchBar query={searchQuery} onChange={handleChangeSearchQuery} />
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
