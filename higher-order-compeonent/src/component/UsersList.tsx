import { typeOfUser } from "../modal";
import HOC from "./HOC";

const UsersList: React.FC = ({ data }: any) => {
  return (
    <div>
      {data.map((user: typeOfUser) => {
        return (
          <div key={user.id}>
            <p>
              <strong>{user.name}</strong>
            </p>
          </div>
        );
      })}
    </div>
  );
};

const SearchUsers = HOC(UsersList, "users");

export default SearchUsers;
