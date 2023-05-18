--
-- PostgreSQL database dump
--

-- Dumped from database version 14.7 (Homebrew)
-- Dumped by pg_dump version 14.7 (Homebrew)

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
-- Name: adoptionform; Type: TABLE; Schema: public; Owner: yolismazacarias
--

CREATE TABLE public.adoptionform (
    id integer NOT NULL,
    pet_id integer,
    fullname character varying(255),
    email character varying(255),
    reason character varying(1200)
);


ALTER TABLE public.adoptionform OWNER TO yolismazacarias;

--
-- Name: adoptionform_id_seq; Type: SEQUENCE; Schema: public; Owner: yolismazacarias
--

CREATE SEQUENCE public.adoptionform_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.adoptionform_id_seq OWNER TO yolismazacarias;

--
-- Name: adoptionform_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yolismazacarias
--

ALTER SEQUENCE public.adoptionform_id_seq OWNED BY public.adoptionform.id;


--
-- Name: allanimals; Type: TABLE; Schema: public; Owner: yolismazacarias
--

CREATE TABLE public.allanimals (
    id integer NOT NULL
);


ALTER TABLE public.allanimals OWNER TO yolismazacarias;

--
-- Name: allanimals_id_seq; Type: SEQUENCE; Schema: public; Owner: yolismazacarias
--

CREATE SEQUENCE public.allanimals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.allanimals_id_seq OWNER TO yolismazacarias;

--
-- Name: allanimals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yolismazacarias
--

ALTER SEQUENCE public.allanimals_id_seq OWNED BY public.allanimals.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: yolismazacarias
--

CREATE TABLE public.users (
    id integer NOT NULL,
    firstname character varying(255),
    lastname character varying(255),
    email character varying(255)
);


ALTER TABLE public.users OWNER TO yolismazacarias;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: yolismazacarias
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO yolismazacarias;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: yolismazacarias
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: adoptionform id; Type: DEFAULT; Schema: public; Owner: yolismazacarias
--

ALTER TABLE ONLY public.adoptionform ALTER COLUMN id SET DEFAULT nextval('public.adoptionform_id_seq'::regclass);


--
-- Name: allanimals id; Type: DEFAULT; Schema: public; Owner: yolismazacarias
--

ALTER TABLE ONLY public.allanimals ALTER COLUMN id SET DEFAULT nextval('public.allanimals_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: yolismazacarias
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: adoptionform; Type: TABLE DATA; Schema: public; Owner: yolismazacarias
--

INSERT INTO public.adoptionform (id, pet_id, fullname, email, reason) VALUES (1, NULL, 'vlad2', 'vlad@gmail.com', 'toast toast');
INSERT INTO public.adoptionform (id, pet_id, fullname, email, reason) VALUES (2, 63594682, 'tubby', 'tubby@gmail.com', 'love');
INSERT INTO public.adoptionform (id, pet_id, fullname, email, reason) VALUES (3, 63594689, 'luis', 'luis@gmail.com', 'floof');
INSERT INTO public.adoptionform (id, pet_id, fullname, email, reason) VALUES (4, 63594684, 'yolis', 'yolis@gmail.com', 'floof');
INSERT INTO public.adoptionform (id, pet_id, fullname, email, reason) VALUES (5, 63594686, 'ruby', 'ruby@gmail.com', 'floof');
INSERT INTO public.adoptionform (id, pet_id, fullname, email, reason) VALUES (6, 63594688, 'vlad', 'vlad@gmail.com', 'chonks');
INSERT INTO public.adoptionform (id, pet_id, fullname, email, reason) VALUES (7, 63594689, 'vlad22', 'vlad@gmail.com', 'chonky ');


--
-- Data for Name: allanimals; Type: TABLE DATA; Schema: public; Owner: yolismazacarias
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: yolismazacarias
--



--
-- Name: adoptionform_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yolismazacarias
--

SELECT pg_catalog.setval('public.adoptionform_id_seq', 7, true);


--
-- Name: allanimals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yolismazacarias
--

SELECT pg_catalog.setval('public.allanimals_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: yolismazacarias
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: adoptionform adoptionform_pkey; Type: CONSTRAINT; Schema: public; Owner: yolismazacarias
--

ALTER TABLE ONLY public.adoptionform
    ADD CONSTRAINT adoptionform_pkey PRIMARY KEY (id);


--
-- Name: allanimals allanimals_pkey; Type: CONSTRAINT; Schema: public; Owner: yolismazacarias
--

ALTER TABLE ONLY public.allanimals
    ADD CONSTRAINT allanimals_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: yolismazacarias
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

