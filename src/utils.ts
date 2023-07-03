import { ImageDto } from "@/api/images";

export const isImage = (image?: ImageDto | null): image is ImageDto =>
  Boolean(image?.albumId && image?.title);

export const getRange = (steps: number) => Array.from(Array(steps).keys());
