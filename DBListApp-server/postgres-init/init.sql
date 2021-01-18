DROP SCHEMA IF EXISTS test_schema;
CREATE SCHEMA test_schema AUTHORIZATION postgres;
SET search_path to test_schema;

DROP TABLE IF EXISTS test_table;

CREATE TABLE test_schema.test_table (
	file_name varchar NOT NULL,
	"create" timestamp(0) NULL,
	"update" timestamp(0) NULL,
	"delete" timestamp(0) NULL,
	"sign" timestamp(0) NULL,
	store timestamp(0) NULL,
	CONSTRAINT test_pkey PRIMARY KEY (file_name)
);