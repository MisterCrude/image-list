import { ImageDto } from "@/api/images";

export const isImage = (image?: ImageDto | null): image is ImageDto =>
  Boolean(image?.albumId && image?.title);
