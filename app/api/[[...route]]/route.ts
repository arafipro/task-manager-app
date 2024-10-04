import { taskTable } from "@/drizzle/schema";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app
  .get("/tasks", async (c) => {
    const db = drizzle(getRequestContext().env.DB);
    try {
      const res = await db.select().from(taskTable);
      return c.json(res);
    } catch (error) {
      return c.json({ error: error }, 500);
    }
  })
  .get("/tasks/:id", async (c) => {
    const db = drizzle(getRequestContext().env.DB);
    const id = parseInt(c.req.param("id"));
    try {
      const res = await db.select().from(taskTable).where(eq(taskTable.id, id));
      return c.json(res);
    } catch (error) {
      return c.json({ error: error }, 500);
    }
  });

export const GET = handle(app);
