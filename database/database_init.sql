-- DROP TABLES

DROP TABLE IF EXISTS screener.public.teachers;
DROP TABLE IF EXISTS screener.public.answers;
DROP TABLE IF EXISTS screener.public.tests;
DROP TABLE IF EXISTS screener.public.questions;


-- CREATE TABLES

CREATE TABLE IF NOT EXISTS screener.public.teachers (
	teacher_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY
	, first_name text NOT NULL
	, last_name text NOT NULL
	, email text UNIQUE NOT NULL
	, password text
);

CREATE TABLE IF NOT EXISTS screener.public.answers (
	answer_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY
    , test_id integer NOT NULL
	, student_lectioid integer UNIQUE NOT NULL
    , student_class text NOT NULL
	, creation_time timestamp with time zone NOT NULL DEFAULT now()
	, content JSONB NOT NULL
);

CREATE TABLE IF NOT EXISTS screener.public.tests (
	test_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY
	, name text UNIQUE NOT NULL
    , year integer NOT NULL
);

CREATE TABLE IF NOT EXISTS screener.public.questions (
	question_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY
	, content text NOT NULL
);