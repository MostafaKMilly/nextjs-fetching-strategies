"use client";
import { useSearchParams, useRouter } from "next/navigation";

function UsersToolbar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const search = String(searchParams.get("search") || "");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    router.push(`?${params.toString()}`);
  };

  return (
    <div className="mb-6 flex justify-center">
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={handleSearch}
        className="p-3 border border-gray-400 rounded-l-lg focus:outline-none"
      />
      <button className="p-3 bg-neutral-900 text-white rounded-r-lg hover:bg-neutral-800">
        Add
      </button>
    </div>
  );
}

export default UsersToolbar;
