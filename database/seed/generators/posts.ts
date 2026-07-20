import { faker } from "@faker-js/faker";

import { PostTypes } from "../../Models/Post/types.js";
import { PackTypes } from "../../Models/Pack/types.js";

const generatePosts = (packs: PackTypes[]): Partial<PostTypes>[] => {

  enum PostStatus {
    DRAFTED = "drafted",
    PUBLISHED = "published",
  };

  const posts: Partial<PostTypes>[] = [];

  packs.forEach(pack => {
    const postCount = pack.status === "drafted"
      ? 5
      : faker.number.int({ min: 1, max: 5 });

    Array.from({ length: postCount }).forEach(() => {
      const likes = faker.helpers.weightedArrayElement([
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
        { value: PostStatus.DRAFTED, weight: 20 },
        { value: PostStatus.PUBLISHED, weight: 80 },
      ]);

      posts.push({
        ownerId: pack.ownerId,
        packId: status === PostStatus.DRAFTED ? null : pack.id,
        image: faker.image.url(),
        caption: faker.lorem.sentence(),
        likes: status === PostStatus.DRAFTED ? 0 : likes,
        status
      });
    });
  });

  return posts;
};

export default generatePosts;
