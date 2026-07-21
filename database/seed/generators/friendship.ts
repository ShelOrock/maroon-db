import { CreationAttributes } from "sequelize";
import { faker } from "@faker-js/faker";

import { UserTypes } from "../../Models/User/types.js";
import { FriendshipTypes } from "../../Models/Friendship/types.js";

const generateFriendships = (users: UserTypes[]): CreationAttributes<FriendshipTypes>[] => {

  enum FriendshipStatus {
    PENDING = "pending",
    ACCEPTED = "accepted",
    BLOCKED = "blocked"
  };

  const friendships: CreationAttributes<FriendshipTypes>[] = []
  const pairs = new Set<string>();

  users.forEach(requester => {
    const numberOfRequests = faker.helpers.weightedArrayElement([
      { value: 1, weight: 2 },
      { value: 2, weight: 8 },
      { value: 3, weight: 25 },
      { value: 5, weight: 30 },
      { value: 8, weight: 25 },
      { value: 15, weight: 8 },
      { value: 23, weight: 2 }
    ]);

    for(let i = 0; i < numberOfRequests; i++) {
      const receiver = faker.helpers.arrayElement(users);

      if(receiver.id === requester.id) {
        return;
      };

      const pair = requester.id < receiver.id
        ? `${ requester.id }:${ receiver.id }`
        : `${ receiver.id }:${ requester.id }`;

      if(pairs.has(pair)) {
        return;
      };

      pairs.add(pair);

      const status = faker.helpers.weightedArrayElement([
        { value: FriendshipStatus.ACCEPTED, weight: 80 },
        { value: FriendshipStatus.PENDING, weight: 15 },
        { value: FriendshipStatus.BLOCKED, weight: 5 }
      ]);

      friendships.push({
        requesterId: requester.id,
        receiverId: receiver.id,
        status
      });
    };
  });

  return friendships;
};

export default generateFriendships;
