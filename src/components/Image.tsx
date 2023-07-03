import { Image as ImageUI, AspectRatio } from "@chakra-ui/react";
import { ImageFallback } from "./Listing/ImageFallback";

interface ImageItemProps {
  height: number;
  src: string;
  title: string;
  width: number;
}

const Image = ({ title, src, height, width }: ImageItemProps) => {
  return (
    <AspectRatio maxW="100%" ratio={1 / 1}>
      <>
        <ImageFallback width={width} height={height} />
        <ImageUI
          loading="lazy"
          borderRadius="lg"
          alt={title}
          boxSize={`${width}px`}
          src={src}
        />
      </>
    </AspectRatio>
  );
};

export default Image;
