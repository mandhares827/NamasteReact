import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const About = () => {
  const { loggedInUser } = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      {loggedInUser}
      <UserClass />
    </div>
  );
};

export default About;
