import { useEffect, useState } from "react";
import { Center, Text, Badge } from "@chakra-ui/react";
import { isImage } from "@/utils";
import { useGetImages, ImageDto } from "@/api/images";
import ErrorAlert from "@/components/ErrorAlert";
import Layout from "@/components/Layout";
import Listing, { ListingSkeleton } from "@/components/Listing";
import Modal from "@/components/Modal";
import SearchBar, { SearchBarSkeleton } from "@/components/SearchBar";
import Image from "@/components/Image";

const ListingPage = () => {
  const [imageDetail, setImageDetail] = useState<ImageDto | null>(null);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [images, setImages] = useState<ImageDto[]>([]);
  const { isLoading, isError, data } = useGetImages();

  const noImagesFound = Boolean(!images.length && searchQuery.length);

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
      <Layout>
        <SearchBarSkeleton />
        <ListingSkeleton />
      </Layout>
    );

  if (isError)
    return (
      <Layout>
        <ErrorAlert />
      </Layout>
    );

  return (
    <Layout>
      <SearchBar query={searchQuery} onChange={handleChangeSearchQuery} />
      <Listing images={images} onClick={handleToggleModal} />

      {noImagesFound && (
        <Center>
          <Text fontSize="4xl" color="grey">
            No images found!
          </Text>
        </Center>
      )}

      <Modal isOpen={openImageModal} onClose={() => handleToggleModal()}>
        {imageDetail && (
          <Image
            height={600}
            src={imageDetail?.url}
            title={imageDetail?.title}
            width={600}
          />
        )}

        <Text my={4}>
          <Badge colorScheme="green" mr={2}>
            Album ID: {imageDetail?.albumId}
          </Badge>
          {imageDetail?.title}
        </Text>
      </Modal>
    </Layout>
  );
};

export default ListingPage;
