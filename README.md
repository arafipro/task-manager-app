# Task Manager App

タスクマネージャーアプリ

## 技術スタック

- Bun
- TypeScript
- Hono
- Next.js
- Tailwind CSS
- shadcn/ui
- Cloudflare D1
- Drizzle
- Cloudflare Pages

## 環境変数

`.env.local`を作成

```sh:.env.local
API_URL=http://localhost:3000
```

## 開発用サーバーを起動

```bash
bun run dev
```

ブラウザで[http://localhost:3000](http://localhost:3000)を開いて確認

## テーブル

### テーブル名 Tasks

| カラム名    | データ型 | 主キー | 備考        |
| ----------- | -------- | :----: | ----------- |
| id          | integer  |   ○    |             |
| title       | text     |        | タスク名    |
| description | text     |        | タスク内容  |
| due_date    | text     |        | 期日        |
| completed   | boolean  |        | 完了有無    |
| important   | boolean  |        | 重要有無    |
| user_id     | text     |        | ユーザー ID |
