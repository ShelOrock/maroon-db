import { faker } from "@faker-js/faker";

import { PackTypes } from "../../Models/Pack/types.js";
import { UserTypes } from "../../Models/User/types.js";

const generatePacks = (users: UserTypes[]): Partial<PackTypes>[] => {

  enum PackStatus {
    DRAFTED = "drafted",
    PUBLISHED = "published",
    HIDDEN = "hidden"
  };

  const packs: Partial<PackTypes>[] = [];

  users.forEach(user => {
    const packArray = faker.helpers.weightedArrayElement([
      { value: 0, weight: 2 },
      { value: 1, weight: 8 },
      { value: 10, weight: 25 },
      { value: 25, weight: 30 },
      { value: 50, weight: 25 },
      { value: 100, weight: 8 },
      { value: 1000, weight: 2 }
    ]);

    for(let i = 0; i < packArray; i++) {
      const views = faker.helpers.weightedArrayElement([
        { value: 3, weight: 1 },
        { value: 5, weight: 1 },
        { value: 8, weight: 2 },
        { value: 13, weight: 2 },
        { value: 21, weight: 3 },
        { value: 34, weight: 4 },
        { value: 55, weight: 6 },
        { value: 89, weight: 8 },
        { value: 144, weight: 11 },
        { value: 233, weight: 12 },
        { value: 377, weight: 12 },
        { value: 670, weight: 11 },
        { value: 987, weight: 8 },
        { value: 1597, weight: 6 },
        { value: 2584, weight: 4 },
        { value: 4181, weight: 3 },
        { value: 6765, weight: 2 },
        { value: 10946, weight: 2 },
        { value: 17711, weight: 1 },
        { value: 28657, weight: 1 },
      ]);

      const status = faker.helpers.weightedArrayElement([
        { value: PackStatus.DRAFTED, weight: 20 },
        { value: PackStatus.PUBLISHED, weight: 70 },
        { value: PackStatus.HIDDEN, weight: 10 }
      ]);

      packs.push({
        ownerId: user.id,
        views: status === PackStatus.DRAFTED ? 0 : views,
        status
      });
    };
  });

  return packs;

};

export default generatePacks;
