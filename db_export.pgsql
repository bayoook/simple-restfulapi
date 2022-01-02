--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: activities; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.activities (
    id integer NOT NULL,
    name character varying,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.activities OWNER TO postgres;

--
-- Name: activities_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.activities_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.activities_id_seq OWNER TO postgres;

--
-- Name: activities_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.activities_id_seq OWNED BY public.activities.id;


--
-- Name: methods; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.methods (
    id integer NOT NULL,
    name character varying,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.methods OWNER TO postgres;

--
-- Name: methods_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.methods_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.methods_id_seq OWNER TO postgres;

--
-- Name: methods_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.methods_id_seq OWNED BY public.methods.id;


--
-- Name: schedules; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.schedules (
    id integer NOT NULL,
    method_id integer,
    activity_id integer,
    start_date timestamp without time zone,
    end_date timestamp without time zone,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone,
    deleted_at timestamp without time zone
);


ALTER TABLE public.schedules OWNER TO postgres;

--
-- Name: schedules_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.schedules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.schedules_id_seq OWNER TO postgres;

--
-- Name: schedules_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.schedules_id_seq OWNED BY public.schedules.id;


--
-- Name: activities id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.activities ALTER COLUMN id SET DEFAULT nextval('public.activities_id_seq'::regclass);


--
-- Name: methods id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.methods ALTER COLUMN id SET DEFAULT nextval('public.methods_id_seq'::regclass);


--
-- Name: schedules id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schedules ALTER COLUMN id SET DEFAULT nextval('public.schedules_id_seq'::regclass);


--
-- Data for Name: activities; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.activities (id, name, created_at, updated_at, deleted_at) FROM stdin;
1	Fundamental of Superintendence	2022-01-02 22:25:56.951798	\N	\N
2	Introduction to TIC Industry	2022-01-02 22:26:06.189532	\N	\N
3	Rindam "Bela Negara"	2022-01-02 22:26:23.009798	\N	\N
4	Human Resource Generalist	2022-01-02 22:26:40.337515	2022-01-02 22:26:56.358795	\N
5	Basic Finance for Business	2022-01-02 22:27:08.44635	\N	\N
6	Basic Auditing	2022-01-02 22:27:22.111076	\N	\N
7	Business Legal	2022-01-02 22:27:32.852798	\N	\N
8	General Affair	2022-01-02 22:27:39.001641	\N	\N
9	Risk Management	2022-01-02 22:27:47.1242	\N	\N
10	Basic Business Process	2022-01-02 22:27:57.440507	\N	\N
11	Basic Salesmanship	2022-01-02 22:28:07.081454	\N	\N
12	Creatuve Thinking	2022-01-02 22:28:15.825184	\N	\N
13	Data analytics	2022-01-02 22:28:26.696979	\N	\N
14	Managing Self Motivation	2022-01-02 22:28:37.09195	\N	\N
15	Problem Solving & Decision Making	2022-01-02 22:28:48.933633	\N	\N
16	Managing Performance	2022-01-02 22:28:56.96197	\N	\N
17	Sharing Practice	2022-01-02 22:29:08.579965	\N	\N
18	Ask The Expert	2022-01-02 22:29:17.492846	\N	\N
19	Group Coaching	2022-01-02 22:29:26.360346	\N	\N
20	Mentoring Session	2022-01-02 22:29:34.098402	\N	\N
22	For Delete Test Purpose	2022-01-02 22:53:19.751437	\N	2022-01-02 23:13:37.685846
23	For Delete Test Purpose	2022-01-02 23:13:30.709767	\N	2022-01-02 23:13:44.929951
21	For Update Test Purpose (update 2)	2022-01-02 22:52:55.681919	2022-01-02 23:14:06.199663	\N
\.


--
-- Data for Name: methods; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.methods (id, name, created_at, updated_at, deleted_at) FROM stdin;
1	Workshop/ Self Learning	2022-01-02 22:24:14.395987	\N	\N
2	Sharing Practice/ Professional's Talk	2022-01-02 22:24:28.207981	\N	\N
3	Discussion Room	2022-01-02 22:24:36.703148	\N	\N
4	Coaching	2022-01-02 22:24:42.331256	\N	\N
5	Mentoring	2022-01-02 22:24:47.804058	\N	\N
6	Job Assignment	2022-01-02 22:25:20.50627	\N	\N
8	For Delete Test Purpose	2022-01-02 22:52:33.658884	\N	2022-01-02 22:57:09.698889
7	For Update Test Purpose (update 2)	2022-01-02 22:52:01.56229	2022-01-02 23:13:00.395667	\N
9	For Delete Test Purpose	2022-01-02 23:12:49.729808	\N	2022-01-02 23:13:14.582876
\.


--
-- Data for Name: schedules; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.schedules (id, method_id, activity_id, start_date, end_date, created_at, updated_at, deleted_at) FROM stdin;
1	1	1	2019-01-02 07:00:00	2019-01-05 07:00:00	2022-01-02 22:31:55.5443	\N	\N
2	1	2	2019-01-03 07:00:00	2019-01-05 07:00:00	2022-01-02 22:32:20.080691	\N	\N
3	1	3	2019-01-04 07:00:00	2019-01-05 07:00:00	2022-01-02 22:32:32.260925	\N	\N
4	1	4	2019-01-05 07:00:00	2019-01-10 07:00:00	2022-01-02 22:33:02.968353	\N	\N
5	1	5	2019-01-10 07:00:00	2019-01-15 07:00:00	2022-01-02 22:35:10.979667	\N	\N
6	1	6	2019-02-02 07:00:00	2019-02-05 07:00:00	2022-01-02 22:35:32.837117	\N	\N
7	1	7	2019-02-03 07:00:00	2019-02-05 07:00:00	2022-01-02 22:35:46.273501	\N	\N
8	1	8	2019-02-04 07:00:00	2019-02-05 07:00:00	2022-01-02 22:37:00.010637	\N	\N
9	1	9	2019-02-05 07:00:00	2019-02-05 07:00:00	2022-01-02 22:37:12.029678	\N	\N
10	1	10	2019-02-12 07:00:00	2019-02-15 07:00:00	2022-01-02 22:38:16.132078	\N	\N
11	1	11	2019-06-02 07:00:00	2019-06-05 07:00:00	2022-01-02 22:38:27.134592	\N	\N
12	1	12	2019-06-02 07:00:00	2019-06-05 07:00:00	2022-01-02 22:44:13.046199	\N	\N
13	1	13	2019-06-02 07:00:00	2019-06-05 07:00:00	2022-01-02 22:44:13.049225	\N	\N
14	1	14	2019-06-02 07:00:00	2019-06-05 07:00:00	2022-01-02 22:44:13.051635	\N	\N
15	1	15	2019-06-02 07:00:00	2019-06-05 07:00:00	2022-01-02 22:44:13.05432	\N	\N
16	1	16	2019-06-02 07:00:00	2019-06-05 07:00:00	2022-01-02 22:44:13.056565	\N	\N
17	2	17	2019-03-12 07:00:00	2019-03-15 07:00:00	2022-01-02 22:47:47.066653	\N	\N
18	2	17	2019-05-12 07:00:00	2019-05-15 07:00:00	2022-01-02 22:47:47.069062	\N	\N
19	3	18	2019-03-02 07:00:00	2019-03-05 07:00:00	2022-01-02 22:47:47.070913	\N	\N
20	3	18	2019-04-12 07:00:00	2019-04-15 07:00:00	2022-01-02 22:47:47.073009	\N	\N
22	4	19	2019-05-12 07:00:00	2019-05-15 07:00:00	2022-01-02 22:47:47.077079	\N	\N
23	5	20	2019-03-05 07:00:00	2019-03-10 07:00:00	2022-01-02 22:47:47.079117	\N	\N
24	5	20	2019-04-12 07:00:00	2019-04-15 07:00:00	2022-01-02 22:47:47.080873	\N	\N
25	5	20	2019-05-02 07:00:00	2019-05-05 07:00:00	2022-01-02 22:47:47.082615	\N	\N
21	3	18	2019-05-02 19:10:02	2019-05-05 12:56:47	2022-01-02 22:47:47.074952	2022-01-02 22:54:25.565378	\N
27	8	22	1974-11-29 11:46:40	2019-02-05 07:00:00	2022-01-02 22:56:54.816978	\N	2022-01-02 22:57:00.000853
28	8	22	1974-11-29 11:46:40	2019-02-05 07:00:00	2022-01-02 22:57:05.101629	\N	\N
29	7	21	2022-01-02 19:10:02	2022-04-28 12:56:47	2022-01-02 23:14:22.565118	2022-01-02 23:17:43.625165	\N
26	7	21	2022-01-02 19:10:02	2022-04-28 12:56:47	2022-01-02 22:53:42.480402	2022-01-02 22:54:34.465107	2022-01-02 23:18:03.805221
\.


--
-- Name: activities_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.activities_id_seq', 23, true);


--
-- Name: methods_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.methods_id_seq', 9, true);


--
-- Name: schedules_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.schedules_id_seq', 29, true);


--
-- Name: activities activities_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.activities
    ADD CONSTRAINT activities_pkey PRIMARY KEY (id);


--
-- Name: methods methods_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.methods
    ADD CONSTRAINT methods_pkey PRIMARY KEY (id);


--
-- Name: schedules schedules_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_pkey PRIMARY KEY (id);


--
-- Name: schedules schedules_activity_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_activity_id_fkey FOREIGN KEY (activity_id) REFERENCES public.activities(id);


--
-- Name: schedules schedules_method_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.schedules
    ADD CONSTRAINT schedules_method_id_fkey FOREIGN KEY (method_id) REFERENCES public.methods(id);


--
-- PostgreSQL database dump complete
--

