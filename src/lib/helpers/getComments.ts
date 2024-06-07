import { Comment } from "../types";

const COMMENTS_API_URL = "https://jsonplaceholder.typicode.com/comments";

export async function getComments(): Promise<Comment[]> {
  try {
    const response = await fetch(COMMENTS_API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }

    const comments = await response.json();
    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
}
