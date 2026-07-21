import { describe, expect, it } from "vitest";

import { createModels } from "../Models/index.js";
import { createTestConnection } from "../utils/index.js";
import { PostTypes, CommentTypes, UserTypes } from "../Models/types.js";

describe("model associations", () => {
  const connection = createTestConnection();
  const models = createModels(connection);

  it("registers the expected associations for User", () => {
    expect(Object.keys(models.User.associations)).toEqual(["requestedFriendships", "receivedFriendships", "posts", "comments", "packs"]);
  });

  it("registers the expected associations for Post", () => {
    expect(Object.keys(models.Post.associations)).toEqual(["user", "pack", "comments"]);
  });

  it("registers the expected associations for Comment", () => {
    expect(Object.keys(models.Comment.associations)).toEqual(["user", "post"]);
  });

  it("registers the expected associations for Friendship", () => {
    expect(Object.keys(models.Friendship.associations)).toEqual(["requester", "receiver"]);
  });

  it("registers the expected associations for Pack", () => {
    expect(Object.keys(models.Pack.associations)).toEqual(["user", "posts"]);
  });

  it("links a Post to a User and to many Comments", async () => {
    const { Post, User, Comment } = models;

    const user: UserTypes = await User.create({
      username: "integration-user",
      password: "integration-password",
      role: "guest",
      email: "integration@example.com"
    });

    const post: PostTypes = await Post.create({
      ownerId: user.id,
      image: "https://example.com/image.jpg",
      likes: 0,
      status: "published",
      caption: "association test"
    });

    const comment: CommentTypes = await Comment.create({
      postId: post.id,
      comment: "hello from the test"
    });

    const postWithUser = await Post.findByPk(post.id, {
      include: [ User ]
    });

    const commentsForPost = await Comment.findAll({
      where: { postId: post.id }
    });

    if(postWithUser) {
      expect(postWithUser.ownerId).toBe(user.id);
    };
    
    expect(commentsForPost).toHaveLength(1);
    if(commentsForPost.length) {
      expect(commentsForPost[0].id).toBe(comment.id);
    };
  });
});
