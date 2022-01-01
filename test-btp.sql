CREATE TABLE "methods" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR,
  "created_at" TIMESTAMP,
  "deleted_at" TIMESTAMP
);

CREATE TABLE "methods" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR,
  "created_at" TIMESTAMP,
  "deleted_at" TIMESTAMP
);

CREATE TABLE "schedules" (
  "id" SERIAL PRIMARY KEY,
  "method_id" int,
  "method_id" int,
  "start_date" TIMESTAMP,
  "end_date" TIMESTAMP,
  "created_at" TIMESTAMP,
  "deleted_at" TIMESTAMP
);

ALTER TABLE "schedules" ADD FOREIGN KEY ("method_id") REFERENCES "methods" ("id");

ALTER TABLE "schedules" ADD FOREIGN KEY ("method_id") REFERENCES "methods" ("id");
