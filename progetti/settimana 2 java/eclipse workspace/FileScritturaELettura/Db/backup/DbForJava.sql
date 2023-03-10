PGDMP     	            	        {         	   DbForJava    15.2    15.2 !    !           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            "           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            #           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            $           1262    16562 	   DbForJava    DATABASE     ~   CREATE DATABASE "DbForJava" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Italian_Italy.1252';
    DROP DATABASE "DbForJava";
                postgres    false            ?            1259    16563    Cliente    TABLE     ?   CREATE TABLE public."Cliente" (
    id integer NOT NULL,
    nome character varying(255),
    cognome character varying(255),
    email character varying(255),
    password character varying(255),
    "indirizzoId" integer
);
    DROP TABLE public."Cliente";
       public         heap    postgres    false            ?            1259    16604    Cliente_id_seq    SEQUENCE     ?   ALTER TABLE public."Cliente" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Cliente_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    214            ?            1259    16582    Prodotti    TABLE     ?   CREATE TABLE public."Prodotti" (
    id integer NOT NULL,
    nome character varying(255),
    categoria character varying(255),
    prezzo double precision,
    quantita integer
);
    DROP TABLE public."Prodotti";
       public         heap    postgres    false            ?            1259    16605    Prodotti_id_seq    SEQUENCE     ?   ALTER TABLE public."Prodotti" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Prodotti_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            ?            1259    16608    ScontrinoTesta    TABLE     |   CREATE TABLE public."ScontrinoTesta" (
    id integer NOT NULL,
    "clienteId" integer NOT NULL,
    data date NOT NULL
);
 $   DROP TABLE public."ScontrinoTesta";
       public         heap    postgres    false            ?            1259    16628    ScontrinoTesta_id_seq    SEQUENCE     ?   ALTER TABLE public."ScontrinoTesta" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."ScontrinoTesta_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    222            ?            1259    16589    Vendite    TABLE     ?   CREATE TABLE public."Vendite" (
    id integer NOT NULL,
    "prodottoId" integer NOT NULL,
    "ScontrinoTestaid" integer NOT NULL,
    "quantitaVendute" integer NOT NULL
);
    DROP TABLE public."Vendite";
       public         heap    postgres    false            ?            1259    16606    Vendite_id_seq    SEQUENCE     ?   ALTER TABLE public."Vendite" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Vendite_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            ?            1259    16570 	   indirizzo    TABLE     ?   CREATE TABLE public.indirizzo (
    id integer NOT NULL,
    "via " character varying(255),
    numero integer,
    cap character varying(255),
    citta character varying(255)
);
    DROP TABLE public.indirizzo;
       public         heap    postgres    false            ?            1259    16607    indirizzo_id_seq    SEQUENCE     ?   ALTER TABLE public.indirizzo ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.indirizzo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215                      0    16563    Cliente 
   TABLE DATA           V   COPY public."Cliente" (id, nome, cognome, email, password, "indirizzoId") FROM stdin;
    public          postgres    false    214   <&                 0    16582    Prodotti 
   TABLE DATA           K   COPY public."Prodotti" (id, nome, categoria, prezzo, quantita) FROM stdin;
    public          postgres    false    216   ?&                 0    16608    ScontrinoTesta 
   TABLE DATA           A   COPY public."ScontrinoTesta" (id, "clienteId", data) FROM stdin;
    public          postgres    false    222   ='                 0    16589    Vendite 
   TABLE DATA           \   COPY public."Vendite" (id, "prodottoId", "ScontrinoTestaid", "quantitaVendute") FROM stdin;
    public          postgres    false    217   u'                 0    16570 	   indirizzo 
   TABLE DATA           C   COPY public.indirizzo (id, "via ", numero, cap, citta) FROM stdin;
    public          postgres    false    215   ?'       %           0    0    Cliente_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Cliente_id_seq"', 15, true);
          public          postgres    false    218            &           0    0    Prodotti_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Prodotti_id_seq"', 4, true);
          public          postgres    false    219            '           0    0    ScontrinoTesta_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public."ScontrinoTesta_id_seq"', 5, true);
          public          postgres    false    223            (           0    0    Vendite_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public."Vendite_id_seq"', 6, true);
          public          postgres    false    220            )           0    0    indirizzo_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.indirizzo_id_seq', 1, true);
          public          postgres    false    221            z           2606    16569    Cliente Cliente_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Cliente"
    ADD CONSTRAINT "Cliente_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Cliente" DROP CONSTRAINT "Cliente_pkey";
       public            postgres    false    214            ~           2606    16588    Prodotti Prodotti_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Prodotti"
    ADD CONSTRAINT "Prodotti_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Prodotti" DROP CONSTRAINT "Prodotti_pkey";
       public            postgres    false    216            ?           2606    16612 "   ScontrinoTesta ScontrinoTesta_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."ScontrinoTesta"
    ADD CONSTRAINT "ScontrinoTesta_pkey" PRIMARY KEY (id);
 P   ALTER TABLE ONLY public."ScontrinoTesta" DROP CONSTRAINT "ScontrinoTesta_pkey";
       public            postgres    false    222            ?           2606    16593    Vendite Vendite_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Vendite"
    ADD CONSTRAINT "Vendite_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Vendite" DROP CONSTRAINT "Vendite_pkey";
       public            postgres    false    217            |           2606    16576    indirizzo indirizzo_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.indirizzo
    ADD CONSTRAINT indirizzo_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.indirizzo DROP CONSTRAINT indirizzo_pkey;
       public            postgres    false    215            ?           2606    16577     Cliente Cliente_indirizzoId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Cliente"
    ADD CONSTRAINT "Cliente_indirizzoId_fkey" FOREIGN KEY ("indirizzoId") REFERENCES public.indirizzo(id) NOT VALID;
 N   ALTER TABLE ONLY public."Cliente" DROP CONSTRAINT "Cliente_indirizzoId_fkey";
       public          postgres    false    215    3196    214            ?           2606    16618 ,   ScontrinoTesta ScontrinoTesta_clienteId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."ScontrinoTesta"
    ADD CONSTRAINT "ScontrinoTesta_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES public."Cliente"(id) NOT VALID;
 Z   ALTER TABLE ONLY public."ScontrinoTesta" DROP CONSTRAINT "ScontrinoTesta_clienteId_fkey";
       public          postgres    false    222    3194    214            ?           2606    16613 %   Vendite Vendite_ScontrinoTestaid_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Vendite"
    ADD CONSTRAINT "Vendite_ScontrinoTestaid_fkey" FOREIGN KEY ("ScontrinoTestaid") REFERENCES public."ScontrinoTesta"(id) NOT VALID;
 S   ALTER TABLE ONLY public."Vendite" DROP CONSTRAINT "Vendite_ScontrinoTestaid_fkey";
       public          postgres    false    217    3202    222            ?           2606    16623    Vendite Vendite_prodottoId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Vendite"
    ADD CONSTRAINT "Vendite_prodottoId_fkey" FOREIGN KEY ("prodottoId") REFERENCES public."Prodotti"(id) NOT VALID;
 M   ALTER TABLE ONLY public."Vendite" DROP CONSTRAINT "Vendite_prodottoId_fkey";
       public          postgres    false    217    3198    216               ?   x?3?t?I???/.??L2?@,????????\???NC.#??Ģ?|Τ?ļ??L?AQ?Tl?Y???	6??n?)?&?p??q???ڜ$?$??$I??i?ISNt?@?????B? QS? @"? $???? ??ž         V   x?E??
? ?o?F????t4??k???10?i&?\X?,Ռd??cf} ???:?[?цYǨ??????K???p?f7Dt??         (   x?3?4?4200?50?52?2B?s!sM9???1z\\\ R?
+         /   x???  ???0& 0???a5M?.o????.ʺ?6?bT69???t         #   x?3?,?LT0?420?4??̒?DC?=... a#9     