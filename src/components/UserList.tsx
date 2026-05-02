import type { User } from "../App";

type Props = {
  user: User;
  edit: (id: string) => void;
  deleteUser: (id: string) => void;
  view: (id: string) => void;
};

function UserList({ user, edit, deleteUser, view }: Props) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-1">
        <p>FullName: {user.user.fullname}</p>
        <p>ID: {user.id}</p>
      </div>
      <div className="flex gap-1">
        <button onClick={() => view(user.id)}>View</button>
        <button onClick={() => edit(user.id)}>Edit</button>
        <button onClick={() => deleteUser(user.id)}>Delete</button>
      </div>
    </div>
  );
}

export default UserList;
