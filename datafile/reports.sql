PGDMP     (    &        
        z           reports    14.5    14.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16394    reports    DATABASE     k   CREATE DATABASE reports WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE reports;
                postgres    false            �            1259    16395 	   incidents    TABLE       CREATE TABLE public.incidents (
    client_id bigint NOT NULL,
    incident_desc character varying NOT NULL,
    city character varying NOT NULL,
    country character varying NOT NULL,
    date date DEFAULT CURRENT_DATE NOT NULL,
    weather_report json NOT NULL
);
    DROP TABLE public.incidents;
       public         heap    postgres    false            �            1259    16398    incidents_client_id_seq    SEQUENCE     �   CREATE SEQUENCE public.incidents_client_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.incidents_client_id_seq;
       public          postgres    false    209            �           0    0    incidents_client_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.incidents_client_id_seq OWNED BY public.incidents.client_id;
          public          postgres    false    210            \           2604    16399    incidents client_id    DEFAULT     z   ALTER TABLE ONLY public.incidents ALTER COLUMN client_id SET DEFAULT nextval('public.incidents_client_id_seq'::regclass);
 B   ALTER TABLE public.incidents ALTER COLUMN client_id DROP DEFAULT;
       public          postgres    false    210    209            �          0    16395 	   incidents 
   TABLE DATA           b   COPY public.incidents (client_id, incident_desc, city, country, date, weather_report) FROM stdin;
    public          postgres    false    209   |       �           0    0    incidents_client_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.incidents_client_id_seq', 3, true);
          public          postgres    false    210            _           2606    16407    incidents incidents_pkey 
   CONSTRAINT     ]   ALTER TABLE ONLY public.incidents
    ADD CONSTRAINT incidents_pkey PRIMARY KEY (client_id);
 B   ALTER TABLE ONLY public.incidents DROP CONSTRAINT incidents_pkey;
       public            postgres    false    209            �   �   x����j1�g�S�i�8�lM�$��Eغ�h,�/���{�B���_��M͚b�e"��5�'Xi�pa��}B�ܣ�q�sw�c�c9��C�&6"�]��Aǐ���>�p����J����]ڙ��ƙW����o#��vՇK-6[�P5ޅK���\�x�dzˤ��Kwv��%�^�� !S�Z-:�қ�F2/����[`=R��%}*��i�Rqy     