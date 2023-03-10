PGDMP     '    $        
        {         	   Trasporto    15.2    15.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16689 	   Trasporto    DATABASE     ~   CREATE DATABASE "Trasporto" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Italian_Italy.1252';
    DROP DATABASE "Trasporto";
                postgres    false            ?            1259    16691    Autista    TABLE     ?   CREATE TABLE public."Autista" (
    "ID" integer NOT NULL,
    "Nome" character varying(255) NOT NULL,
    "Cognome" character varying(255) NOT NULL,
    "Numero" integer NOT NULL
);
    DROP TABLE public."Autista";
       public         heap    postgres    false            ?            1259    16690    Autista_ID_seq    SEQUENCE     ?   ALTER TABLE public."Autista" ALTER COLUMN "ID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Autista_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215            ?            1259    16705    Cliente    TABLE     ?   CREATE TABLE public."Cliente" (
    "ID" integer NOT NULL,
    "Nome" character varying(255) NOT NULL,
    "Cognome" character varying(255) NOT NULL,
    "Email" character varying(255),
    "NumeroTelefono" integer,
    "Indirizzo" character varying
);
    DROP TABLE public."Cliente";
       public         heap    postgres    false            ?            1259    16704    Cliente_ID_seq    SEQUENCE     ?   ALTER TABLE public."Cliente" ALTER COLUMN "ID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Cliente_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            ?            1259    16713    Mezzo    TABLE     ?   CREATE TABLE public."Mezzo" (
    "ID" integer NOT NULL,
    "Tipologia" character varying(255) NOT NULL,
    "Targa" character varying(255) NOT NULL,
    "Prezzo" integer NOT NULL
);
    DROP TABLE public."Mezzo";
       public         heap    postgres    false            ?            1259    16712    Mezzo_ID_seq    SEQUENCE     ?   ALTER TABLE public."Mezzo" ALTER COLUMN "ID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Mezzo_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    219            ?            1259    16721    Tragitto    TABLE       CREATE TABLE public."Tragitto" (
    "ID" integer NOT NULL,
    "IDautista" integer NOT NULL,
    "IDmezzo" integer NOT NULL,
    "IDcliente" integer NOT NULL,
    "Citta" character varying(255) NOT NULL,
    "Data" date NOT NULL,
    "KM" integer NOT NULL
);
    DROP TABLE public."Tragitto";
       public         heap    postgres    false            ?            1259    16720    Tragitto_ID_seq    SEQUENCE     ?   ALTER TABLE public."Tragitto" ALTER COLUMN "ID" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Tragitto_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    221                      0    16691    Autista 
   TABLE DATA           F   COPY public."Autista" ("ID", "Nome", "Cognome", "Numero") FROM stdin;
    public          postgres    false    215                    0    16705    Cliente 
   TABLE DATA           d   COPY public."Cliente" ("ID", "Nome", "Cognome", "Email", "NumeroTelefono", "Indirizzo") FROM stdin;
    public          postgres    false    217   |                 0    16713    Mezzo 
   TABLE DATA           G   COPY public."Mezzo" ("ID", "Tipologia", "Targa", "Prezzo") FROM stdin;
    public          postgres    false    219                     0    16721    Tragitto 
   TABLE DATA           f   COPY public."Tragitto" ("ID", "IDautista", "IDmezzo", "IDcliente", "Citta", "Data", "KM") FROM stdin;
    public          postgres    false    221   b                   0    0    Autista_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Autista_ID_seq"', 4, true);
          public          postgres    false    214                       0    0    Cliente_ID_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Cliente_ID_seq"', 3, true);
          public          postgres    false    216                       0    0    Mezzo_ID_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Mezzo_ID_seq"', 4, true);
          public          postgres    false    218                       0    0    Tragitto_ID_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Tragitto_ID_seq"', 48, true);
          public          postgres    false    220            u           2606    16697    Autista Autista_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Autista"
    ADD CONSTRAINT "Autista_pkey" PRIMARY KEY ("ID");
 B   ALTER TABLE ONLY public."Autista" DROP CONSTRAINT "Autista_pkey";
       public            postgres    false    215            w           2606    16711    Cliente Cliente_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Cliente"
    ADD CONSTRAINT "Cliente_pkey" PRIMARY KEY ("ID");
 B   ALTER TABLE ONLY public."Cliente" DROP CONSTRAINT "Cliente_pkey";
       public            postgres    false    217            y           2606    16719    Mezzo Mezzo_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public."Mezzo"
    ADD CONSTRAINT "Mezzo_pkey" PRIMARY KEY ("ID");
 >   ALTER TABLE ONLY public."Mezzo" DROP CONSTRAINT "Mezzo_pkey";
       public            postgres    false    219            {           2606    16742    Tragitto Tragitto_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public."Tragitto"
    ADD CONSTRAINT "Tragitto_pkey" PRIMARY KEY ("ID");
 D   ALTER TABLE ONLY public."Tragitto" DROP CONSTRAINT "Tragitto_pkey";
       public            postgres    false    221            |           2606    16726     Tragitto Tragitto_IDautista_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Tragitto"
    ADD CONSTRAINT "Tragitto_IDautista_fkey" FOREIGN KEY ("IDautista") REFERENCES public."Autista"("ID") NOT VALID;
 N   ALTER TABLE ONLY public."Tragitto" DROP CONSTRAINT "Tragitto_IDautista_fkey";
       public          postgres    false    215    3189    221            }           2606    16736     Tragitto Tragitto_IDcliente_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Tragitto"
    ADD CONSTRAINT "Tragitto_IDcliente_fkey" FOREIGN KEY ("IDcliente") REFERENCES public."Cliente"("ID") NOT VALID;
 N   ALTER TABLE ONLY public."Tragitto" DROP CONSTRAINT "Tragitto_IDcliente_fkey";
       public          postgres    false    217    3191    221            ~           2606    16731    Tragitto Tragitto_IDmezzo_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Tragitto"
    ADD CONSTRAINT "Tragitto_IDmezzo_fkey" FOREIGN KEY ("IDmezzo") REFERENCES public."Mezzo"("ID") NOT VALID;
 L   ALTER TABLE ONLY public."Tragitto" DROP CONSTRAINT "Tragitto_IDmezzo_fkey";
       public          postgres    false    219    221    3193               M   x?m?1
? ?????פ9L
?tA!?????0??!??6?u?*??F8;?U"'?*?ns??Z??S.???y???u?         y   x?M?1?0Eg?9A?&?????X?A??Xr(COOU?????G?5?????*??*?1??l?-țT#?K#??w???X???<?G(?U???t??????SZ?V???????7?2?         M   x?3?tN?????t3612???4?2?t+-J??K??p6151q?4?2??x??:??L`??ML??|?zc???? ??         ?   x?M?1? ???q*?@h?҅v??B?P???4Q+?>~?(0^?uI??z?B??Y???V???`2?ZZ=z+?F??a???.G???ɳ???,x?QO˶Y?bV??????3N6?>c??G????AVr??s??i+Q     