import UsersToolbar from "@/components/UsersToolbar";
import UserCard from "@/components/UserCard";
import { getPhotos, getUsers } from "@/lib/helpers";
import { Suspense } from "react";

export default async function UsersPage() {
  const [users, photos] = await Promise.all([getUsers(), getPhotos()]);

  return (
    <div className="container mx-auto p-4 text-black">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Users</h1>
      <UsersToolbar />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Suspense fallback={<p>Loading</p>}>
          {users.map((user) => (
            <UserCard key={user.id} user={user} photos={photos} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}
