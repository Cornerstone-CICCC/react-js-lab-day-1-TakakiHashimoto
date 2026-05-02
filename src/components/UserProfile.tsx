import type { FormDataType } from "./UserForm";

function UserProfile({ user }: { user: FormDataType | null }) {
  return (
    <div className="flex flex-col gap-2">
      <h2>{user?.fullname}</h2>
      <p>{user?.age}</p>
      <p>{user?.education}</p>
      <p>{user?.bio}</p>
      <p>{user?.gender}</p>
      <p>{user?.skills.join(",")}</p>
    </div>
  );
}

export default UserProfile;
