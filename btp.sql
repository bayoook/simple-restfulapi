CREATE TABLE "methods" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "created_at" timestamp default NOW(),
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "activities" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar,
  "created_at" timestamp default NOW(),
  "updated_at" timestamp,
  "deleted_at" timestamp
);

CREATE TABLE "schedules" (
  "id" SERIAL PRIMARY KEY,
  "method_id" int,
  "activity_id" int,
  "start_date" timestamp,
  "end_date" timestamp,
  "created_at" timestamp default NOW(),
  "updated_at" timestamp,
  "deleted_at" timestamp
);

ALTER TABLE "schedules" ADD FOREIGN KEY ("method_id") REFERENCES "methods" ("id");

ALTER TABLE "schedules" ADD FOREIGN KEY ("activity_id") REFERENCES "activities" ("id");