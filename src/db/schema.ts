import { pgTable, serial, varchar, timestamp, boolean, integer, text } from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    email: varchar('email').notNull().unique(),
    isAuthor: boolean('is_author').default(false).notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow()
  });

  export const posts = pgTable('posts', {
    id: serial('id').primaryKey(),
    title: varchar('title').notNull(),
    content: varchar('content'),
    userId: integer('user_id')
      .notNull()
      .references(() => users.id),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('created_at').notNull().defaultNow().$onUpdate(() => new Date()),
  });

  export const articles = pgTable('articles', {
    id: integer('id').primaryKey(),
    title: text('title').notNull(),
    content: text('content'),
    authorId: integer('author_id')
      .notNull()
      .references(() => users.id),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    updatedAt: timestamp('created_at').notNull().defaultNow().$onUpdate(() => new Date()),
  });

  export const usersRelations = relations(users, ({ many }) => ({
    posts: many(posts),
    articles: many(articles),
  }));

  export const postsRelations = relations(posts, ({ one }) => ({
    user: one(users, {
      fields: [posts.userId],
      references: [users.id],
    }),
  }));

  export const articlesRelations = relations(articles, ({ one }) => ({
    author: one(users, {
      fields: [articles.authorId],
      references: [users.id],
    }),
  }));


  export const enforceAuthorConstraint = (authorId: number, userIsAuthor: boolean) => {
    if (!userIsAuthor) {
      throw new Error('Only authors can create articles.');
    }
  };
