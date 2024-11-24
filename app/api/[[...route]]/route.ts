import { taskTable } from "@/drizzle/schema";
import { CreateTask } from "@/types/task";
import { getRequestContext } from "@cloudflare/next-on-pages";
import { format } from "date-fns";
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
  .post("/tasks", async (c) => {
    const db = drizzle(getRequestContext().env.DB);
    const { title, description, dueDate, important } =
      await c.req.json<CreateTask>();
    try {
      await db.insert(taskTable).values({
        title,
        description,
        dueDate: format(dueDate, "yyyy-MM-dd"),
        important,
      });
      return c.json({ message: "success" }, 201);
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
  })
  .delete("/tasks/:id", async (c) => {
    const db = drizzle(getRequestContext().env.DB);
    const id = parseInt(c.req.param("id"));
    try {
      await db.delete(taskTable).where(eq(taskTable.id, id));
      return c.json({ message: "success" }, 200);
    } catch (error) {
      return c.json({ error: error }, 500);
    }
  });

export const GET = handle(app);
export const POST = handle(app);
export const DELETE = handle(app);
