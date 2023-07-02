import { z } from "zod";

const ImageEntry = z.object({
  albumId: z.number(),
  id: z.number(),
  title: z.string(),
  url: z.string().url(),
  thumbnailUrl: z.string().url(),
});

export const ImageEntries = z.array(ImageEntry);

export type ImageDto = z.infer<typeof ImageEntry>;
