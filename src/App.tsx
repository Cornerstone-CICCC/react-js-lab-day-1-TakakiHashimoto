import { useState } from "react";
import UserForm, { type FormDataType } from "./components/UserForm";
import UserList from "./components/UserList";
import UserProfile from "./components/UserProfile";

export interface User {
  id: string;
  user: FormDataType;
}
function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<FormDataType | null>(null);
  const [isUserVisible, setIsUserVisible] = useState<boolean>(false);

  function onSubmit(data: FormDataType) {
    const id = Math.random().toString(36).substring(2, 7);
    setUsers((prev) => [...prev, { id, user: data }]);
  }

  function edit(id: string) {
    // const foundUser = users.find((u) => u.id === id);
    // if (!foundUser) return;
    // const newUserData = {
    //   fullname: newData.fullname ?? foundUser.user.fullname,
    //   age: newData.age ?? foundUser.user.age,
    //   bio: newData.bio ?? foundUser.user.bio,
    //   education: newData.education ?? foundUser.user.education,
    //   gender: newData.gender ?? foundUser.user.gender,
    //   skills: newData.skills ?? foundUser.user.skills,
    // };

    // setUsers((prev) => [...prev, { id: id, user: newUserData }]);
    console.log(`Open modal for user: ${id}`);
  }

  function deleteUser(id: string) {
    const newUsers = users.filter((u) => u.id !== id);
    setUsers(newUsers);
  }

  function viewUser(id: string) {
    const foundUser = users.find((u) => u.id === id);
    if (!foundUser) {
      setSelectedUser(null);
      return;
    }

    setSelectedUser(foundUser.user);
    setIsUserVisible((prev) => !prev);
  }

  return (
    <div className="flex flex-col gap-2 items-center min-w-[80%]">
      <UserForm onSubmit={onSubmit} />
      <div>
        {users.map((user) => (
          <UserList
            key={user.id}
            user={user}
            edit={edit}
            deleteUser={deleteUser}
            view={viewUser}
          />
        ))}
      </div>
      {isUserVisible && <UserProfile user={selectedUser} />}
    </div>
  );
}

export default App;
