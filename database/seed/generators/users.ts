import { faker } from "@faker-js/faker";

import { RoleTypes, UserTypes } from "../../Models/User/types.js";

const generateUsers = (count: number): Partial<UserTypes>[] => {
  const users: Partial<UserTypes>[] = Array.from({ length: count }, () => {
    const singleUser = {
      username: faker.internet.username(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: [ "guest", "standard", "admin" ][ Math.floor(Math.random() * 3) ] as RoleTypes
    };

    return singleUser;
  });

  return users;
};

export default generateUsers;
