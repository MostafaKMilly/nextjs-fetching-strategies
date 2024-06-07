import { getComments } from "@/lib/helpers";
import { Photo, User } from "@/lib/types";
import Image from "next/image";

interface UserCardProps {
  user: User;
  photos: Photo[];
}

const UserCard = async ({ user, photos }: UserCardProps) => {
  const comments = await getComments();

  return (
    <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-semibold text-green-800">{user.name}</h2>
      <p className="text-gray-700">Email: {user.email}</p>
      <p className="text-gray-700">Phone: {user.phone}</p>
      <p className="text-gray-700">Website: {user.website}</p>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-black">Photos</h3>
        <div className="grid grid-cols-3 gap-2 mt-2">
          {photos
            .filter((photo) => photo.albumId === user.id)
            .slice(0, 3)
            .map((photo) => (
              <div key={photo.id} className="w-full h-full">
                <Image
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-black">Comments</h3>
        {comments
          .filter((comment) => comment.postId === user.id)
          .slice(0, 3)
          .map((comment) => (
            <div
              key={comment.id}
              className="p-3 mt-2 border border-gray-200 rounded-lg bg-gray-50"
            >
              <p className="font-bold text-black">{comment.name}</p>
              <p className="text-gray-700">{comment.body}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserCard;
