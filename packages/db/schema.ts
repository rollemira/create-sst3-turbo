import { relations, sql } from "drizzle-orm";
import { index, int, serial, timestamp, varchar } from "drizzle-orm/mysql-core";

import { tableCreator } from "./_table";

export const galleries = tableCreator(
  "galleries",
  {
    id: serial("id").primaryKey(),
    siteKey: varchar("siteKey", { length: 255 }).notNull(),
    title: varchar("title", { length: 255 }),
    description: varchar("description", { length: 255 }),
    slug: varchar("slug", { length: 255 }),
    picture: varchar("picture", { length: 255 }),
    sortOrder: int("sortOrder").notNull().default(1),
    status: varchar("status", { length: 255 }).default("draft"),
    deletedAt: timestamp("deletedAt"),
    createdAt: timestamp("createdAt")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => {
    return {
      slug_idx: index("slug_idx").on(table.slug),
    };
  },
);

export const galleriesRelations = relations(galleries, ({ many }) => ({
  photos: many(photos, { relationName: "gallery" }),
}));

export const photos = tableCreator(
  "photos",
  {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 255 }),
    description: varchar("description", { length: 255 }),
    url: varchar("url", { length: 512 }),
    sortOrder: int("sortOrder").notNull().default(1),
    status: varchar("status", { length: 255 }).default("draft"),
    galleryId: int("galleryId").notNull(),
    deletedAt: timestamp("deletedAt"),
    createdAt: timestamp("createdAt")
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => {
    return {
      gallery_idx: index("gallery_idx").on(table.galleryId),
    };
  },
);

export const photosRelations = relations(photos, ({ one }) => ({
  gallery: one(galleries, {
    fields: [photos.galleryId],
    references: [galleries.id],
    relationName: "gallery",
  }),
}));
