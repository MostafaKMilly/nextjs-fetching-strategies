import { Photo } from "../types";

const PHOTOS_API_URL = "https://jsonplaceholder.typicode.com/photos";

export async function getPhotos(): Promise<Photo[]> {
  try {
    const response = await fetch(PHOTOS_API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch photos");
    }

    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error("Error fetching photos:", error);
    throw error;
  }
}
