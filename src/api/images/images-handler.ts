import { ImageDto, ImageEntries } from "./images-entry";
import { useQuery } from "@tanstack/react-query";

const getImages = async (): Promise<ImageDto[]> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/albums/1/photos`
    );

    if (!response.ok) {
      throw new Error("An error occurred while fetching images");
    }

    const responseBody = await response.json();
    const validationResult = ImageEntries.safeParse(responseBody);
    if (!validationResult.success) {
      console.warn(
        `Wrong data format received from "/albums/1/photos" endpoint`
      );
      console.warn(validationResult.error);
    }
    return responseBody;
  } catch (error) {
    console.error(error);
    throw Error(
      `Network error, for path "${
        import.meta.env.VITE_BASE_URL
      }/albums/1/photos"`
    );
  }
};

export const useGetImages = () => {
  return useQuery<ImageDto[], void>(["images"], getImages);
};
