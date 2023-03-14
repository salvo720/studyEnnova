PGDMP         ;        
        {            AgenziaTrasporti    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16476    AgenziaTrasporti    DATABASE     �   CREATE DATABASE "AgenziaTrasporti" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Italian_Italy.1252';
 "   DROP DATABASE "AgenziaTrasporti";
                postgres    false            �            1259    16482    autista    TABLE     �  CREATE TABLE public.autista (
    id integer NOT NULL,
    nome character varying(32) NOT NULL,
    cognome character varying(32) NOT NULL,
    telefono character varying(10) NOT NULL,
    indirizzo character varying(128) NOT NULL,
    email character varying(32),
    data_nascita character varying(10) NOT NULL,
    data_assunzione character varying(10) NOT NULL,
    patente character varying(1) NOT NULL,
    stato boolean NOT NULL
);
    DROP TABLE public.autista;
       public         heap    postgres    false            �            1259    16514    autista_id_seq    SEQUENCE     �   ALTER TABLE public.autista ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.autista_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215            �            1259    16477    cliente    TABLE       CREATE TABLE public.cliente (
    id integer NOT NULL,
    nome character varying(32) NOT NULL,
    cognome character varying(32) NOT NULL,
    telefono character varying(10) NOT NULL,
    email character varying(32),
    indirizzo character varying(128) NOT NULL
);
    DROP TABLE public.cliente;
       public         heap    postgres    false            �            1259    16515    cliente_id_seq    SEQUENCE     �   ALTER TABLE public.cliente ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.cliente_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    214            �            1259    16487    mezzo    TABLE     �   CREATE TABLE public.mezzo (
    id integer NOT NULL,
    modello character varying NOT NULL,
    tipo character varying(8) NOT NULL,
    stato boolean NOT NULL
);
    DROP TABLE public.mezzo;
       public         heap    postgres    false            �            1259    16516    mezzo_id_seq    SEQUENCE     �   ALTER TABLE public.mezzo ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.mezzo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            �            1259    16494    viaggio    TABLE       CREATE TABLE public.viaggio (
    id integer NOT NULL,
    descrizione character varying(255),
    data character varying(10) NOT NULL,
    km double precision NOT NULL,
    id_autista integer NOT NULL,
    id_cliente integer NOT NULL,
    id_mezzo integer NOT NULL
);
    DROP TABLE public.viaggio;
       public         heap    postgres    false            �            1259    16517    viaggio_id_seq    SEQUENCE     �   ALTER TABLE public.viaggio ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.viaggio_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217                      0    16482    autista 
   TABLE DATA              COPY public.autista (id, nome, cognome, telefono, indirizzo, email, data_nascita, data_assunzione, patente, stato) FROM stdin;
    public          postgres    false    215   �                 0    16477    cliente 
   TABLE DATA           P   COPY public.cliente (id, nome, cognome, telefono, email, indirizzo) FROM stdin;
    public          postgres    false    214   A                  0    16487    mezzo 
   TABLE DATA           9   COPY public.mezzo (id, modello, tipo, stato) FROM stdin;
    public          postgres    false    216   �                  0    16494    viaggio 
   TABLE DATA           ^   COPY public.viaggio (id, descrizione, data, km, id_autista, id_cliente, id_mezzo) FROM stdin;
    public          postgres    false    217   Q!                  0    0    autista_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.autista_id_seq', 3, true);
          public          postgres    false    218                       0    0    cliente_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.cliente_id_seq', 5, true);
          public          postgres    false    219                       0    0    mezzo_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.mezzo_id_seq', 4, true);
          public          postgres    false    220                       0    0    viaggio_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.viaggio_id_seq', 9, true);
          public          postgres    false    221            w           2606    16486    autista autista_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.autista
    ADD CONSTRAINT autista_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.autista DROP CONSTRAINT autista_pkey;
       public            postgres    false    215            u           2606    16481    cliente cliente_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.cliente
    ADD CONSTRAINT cliente_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.cliente DROP CONSTRAINT cliente_pkey;
       public            postgres    false    214            y           2606    16493    mezzo mezzo_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.mezzo
    ADD CONSTRAINT mezzo_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.mezzo DROP CONSTRAINT mezzo_pkey;
       public            postgres    false    216            {           2606    16519    viaggio viaggio_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.viaggio
    ADD CONSTRAINT viaggio_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.viaggio DROP CONSTRAINT viaggio_pkey;
       public            postgres    false    217            |           2606    16499    viaggio viaggio_id_autista_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.viaggio
    ADD CONSTRAINT viaggio_id_autista_fkey FOREIGN KEY (id_autista) REFERENCES public.autista(id);
 I   ALTER TABLE ONLY public.viaggio DROP CONSTRAINT viaggio_id_autista_fkey;
       public          postgres    false    217    215    3191            }           2606    16504    viaggio viaggio_id_cliente_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.viaggio
    ADD CONSTRAINT viaggio_id_cliente_fkey FOREIGN KEY (id_cliente) REFERENCES public.cliente(id);
 I   ALTER TABLE ONLY public.viaggio DROP CONSTRAINT viaggio_id_cliente_fkey;
       public          postgres    false    217    214    3189            ~           2606    16509    viaggio viaggio_id_mezzo_fkey    FK CONSTRAINT     }   ALTER TABLE ONLY public.viaggio
    ADD CONSTRAINT viaggio_id_mezzo_fkey FOREIGN KEY (id_mezzo) REFERENCES public.mezzo(id);
 G   ALTER TABLE ONLY public.viaggio DROP CONSTRAINT viaggio_id_mezzo_fkey;
       public          postgres    false    217    216    3193               �   x�=�Q
�0D�'��	��V0��'�'im]��������`��1�iM�P��ꡐ#�h���e/%yaܮ ��@!"x;��{ф�n��;����&���'&�0!��3ɬ��4��#��J�3�vB���%���tm;9�b_3�         �   x�M�1�0Eg�9AE�V�-a1��H"���3q.F���7xx_On� �0da�S�Z_lr�'���u��:e@�d�eO�������u�i"��6ea���C�pc�\�~�{<�Pz�v����yy0M��&}�{p�����}{��y�1ֺn�#��_׻��#jӪs���\�         B   x�3�,J�K,�)Q�N�K���L�,�2�LN�����@�1�BZfb	��/�̃�0��0������ P�.         �   x�M��
�0��s�.�H�j�.�d"R�V�{��n�H9��CL|rɬ�Vsaph-9|@"����Z�X���u^y<��B�nͥ��:�*�d�J�z�j�un[���&
�Q/���Or�VV��U�8z�T��e�u�_-������%��F)���:�     