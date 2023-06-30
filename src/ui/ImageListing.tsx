import { useQuery } from "@tanstack/react-query";

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

  if (isLoading) return <>Loading...</>;

  if (isError) return <>An error occurred while fetching the image list.</>;

  return (
    <>
      {images.map(({ id, url, title, thumbnailUrl }) => (
        <div key={id}>
          <img src={thumbnailUrl} alt={title} />
        </div>
      ))}
    </>
  );
};

export default ImageListing;
