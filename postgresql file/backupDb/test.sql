PGDMP         7                {            test    15.2    15.1 L    t           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            u           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            v           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            w           1262    16562    test    DATABASE     w   CREATE DATABASE test WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Italian_Italy.1252';
    DROP DATABASE test;
                postgres    false            ?            1259    16570 	   publisher    TABLE       CREATE TABLE public.publisher (
    "Id" integer NOT NULL,
    name character varying(255) NOT NULL,
    street character varying(255),
    city character varying(255),
    province character varying(255),
    postal_code character(5),
    country character varying(255)
);
    DROP TABLE public.publisher;
       public         heap    postgres    false            ?            1259    16575 	   1_asd_seq    SEQUENCE     ?   ALTER TABLE public.publisher ALTER COLUMN "Id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."1_asd_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            ?            1259    16655    Editor    TABLE     h   CREATE TABLE public."Editor" (
    "publicationId" integer NOT NULL,
    "PersonId" integer NOT NULL
);
    DROP TABLE public."Editor";
       public         heap    postgres    false            ?            1259    16621    Person    TABLE     ?   CREATE TABLE public."Person" (
    "Id" integer NOT NULL,
    surname character varying(255) NOT NULL,
    given_names character varying(255) NOT NULL
);
    DROP TABLE public."Person";
       public         heap    postgres    false            ?            1259    16662    article    TABLE       CREATE TABLE public.article (
    "Id" integer NOT NULL,
    title character varying(255) NOT NULL,
    pub_month integer,
    pub_year integer NOT NULL,
    journal character varying NOT NULL,
    volume character varying,
    pages integer,
    note character varying
);
    DROP TABLE public.article;
       public         heap    postgres    false            ?            1259    16616    author    TABLE     g   CREATE TABLE public.author (
    "pubblicationId" integer NOT NULL,
    "personId" integer NOT NULL
);
    DROP TABLE public.author;
       public         heap    postgres    false            ?            1259    16563    book    TABLE     S  CREATE TABLE public.book (
    "Id" integer NOT NULL,
    title character varying(255) NOT NULL,
    publisher integer NOT NULL,
    volume character varying(255),
    series character varying(255),
    edition character varying(255),
    pub_month character varying(255),
    pub_year integer NOT NULL,
    note character varying(255)
);
    DROP TABLE public.book;
       public         heap    postgres    false            ?            1259    16670    inBook    TABLE     ?   CREATE TABLE public."inBook" (
    "Id" integer NOT NULL,
    "bookId" integer NOT NULL,
    title character varying NOT NULL,
    charapter integer,
    pages integer,
    type character varying(255),
    note character varying(255)
);
    DROP TABLE public."inBook";
       public         heap    postgres    false            ?            1259    16734    inProceedings    TABLE     ?   CREATE TABLE public."inProceedings" (
    "Id" integer NOT NULL,
    "procedingId" integer NOT NULL,
    title character varying(255) NOT NULL,
    pages integer,
    type character varying(255),
    note character varying(255)
);
 #   DROP TABLE public."inProceedings";
       public         heap    postgres    false            ?            1259    16598    institution    TABLE       CREATE TABLE public.institution (
    "Id" integer NOT NULL,
    name character varying(255) NOT NULL,
    street character varying(255),
    city character varying(255),
    province character varying(255),
    postal_code character(5),
    country character varying(255)
);
    DROP TABLE public.institution;
       public         heap    postgres    false            ?            1259    16597    institution_Id_seq    SEQUENCE     ?   ALTER TABLE public.institution ALTER COLUMN "Id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."institution_Id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    219            ?            1259    16700    manual    TABLE     ?   CREATE TABLE public.manual (
    "Id" integer NOT NULL,
    title character varying NOT NULL,
    organizzation integer NOT NULL,
    edition character varying,
    pub_month integer,
    pub_year integer NOT NULL,
    note character varying(255)
);
    DROP TABLE public.manual;
       public         heap    postgres    false            ?            1259    16679    misc    TABLE     ?   CREATE TABLE public.misc (
    id integer NOT NULL,
    title character varying NOT NULL,
    address character varying,
    howpublished character varying,
    pub_month integer,
    pub_year integer NOT NULL,
    note character varying
);
    DROP TABLE public.misc;
       public         heap    postgres    false            ?            1259    16737    proceedings    TABLE     .  CREATE TABLE public.proceedings (
    "Id" integer NOT NULL,
    title character varying,
    publisher integer NOT NULL,
    volume character varying,
    series character varying,
    organizzation integer NOT NULL,
    pub_month integer,
    pub_year integer NOT NULL,
    note character varying
);
    DROP TABLE public.proceedings;
       public         heap    postgres    false            ?            1259    16611    pubblication    TABLE     a   CREATE TABLE public.pubblication (
    "Id" integer NOT NULL,
    type character(20) NOT NULL
);
     DROP TABLE public.pubblication;
       public         heap    postgres    false            ?            1259    16568    tabella1_id_seq    SEQUENCE     ?   ALTER TABLE public.book ALTER COLUMN "Id" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.tabella1_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    214            ?            1259    16667 
   techreport    TABLE       CREATE TABLE public.techreport (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    type character varying(255),
    number integer,
    pub_month integer,
    pub_yaer integer NOT NULL,
    note character varying(255),
    institution integer NOT NULL
);
    DROP TABLE public.techreport;
       public         heap    postgres    false            ?            1259    16633    thesis    TABLE     ?   CREATE TABLE public.thesis (
    "Id" integer NOT NULL,
    title character varying NOT NULL,
    type character varying,
    pub_month integer,
    pub_year integer NOT NULL,
    note character varying,
    school integer
);
    DROP TABLE public.thesis;
       public         heap    postgres    false            j          0    16655    Editor 
   TABLE DATA           ?   COPY public."Editor" ("publicationId", "PersonId") FROM stdin;
    public          postgres    false    224   ?a       h          0    16621    Person 
   TABLE DATA           >   COPY public."Person" ("Id", surname, given_names) FROM stdin;
    public          postgres    false    222   ?a       k          0    16662    article 
   TABLE DATA           a   COPY public.article ("Id", title, pub_month, pub_year, journal, volume, pages, note) FROM stdin;
    public          postgres    false    225   @b       g          0    16616    author 
   TABLE DATA           >   COPY public.author ("pubblicationId", "personId") FROM stdin;
    public          postgres    false    221   ?b       `          0    16563    book 
   TABLE DATA           j   COPY public.book ("Id", title, publisher, volume, series, edition, pub_month, pub_year, note) FROM stdin;
    public          postgres    false    214   ?b       m          0    16670    inBook 
   TABLE DATA           W   COPY public."inBook" ("Id", "bookId", title, charapter, pages, type, note) FROM stdin;
    public          postgres    false    227   Cc       p          0    16734    inProceedings 
   TABLE DATA           X   COPY public."inProceedings" ("Id", "procedingId", title, pages, type, note) FROM stdin;
    public          postgres    false    230   ?c       e          0    16598    institution 
   TABLE DATA           _   COPY public.institution ("Id", name, street, city, province, postal_code, country) FROM stdin;
    public          postgres    false    219   ?c       o          0    16700    manual 
   TABLE DATA           `   COPY public.manual ("Id", title, organizzation, edition, pub_month, pub_year, note) FROM stdin;
    public          postgres    false    229   ?d       n          0    16679    misc 
   TABLE DATA           [   COPY public.misc (id, title, address, howpublished, pub_month, pub_year, note) FROM stdin;
    public          postgres    false    228   ?d       q          0    16737    proceedings 
   TABLE DATA           w   COPY public.proceedings ("Id", title, publisher, volume, series, organizzation, pub_month, pub_year, note) FROM stdin;
    public          postgres    false    231   *e       f          0    16611    pubblication 
   TABLE DATA           2   COPY public.pubblication ("Id", type) FROM stdin;
    public          postgres    false    220   ?e       b          0    16570 	   publisher 
   TABLE DATA           ]   COPY public.publisher ("Id", name, street, city, province, postal_code, country) FROM stdin;
    public          postgres    false    216   kf       l          0    16667 
   techreport 
   TABLE DATA           e   COPY public.techreport (id, title, type, number, pub_month, pub_yaer, note, institution) FROM stdin;
    public          postgres    false    226   ?f       i          0    16633    thesis 
   TABLE DATA           V   COPY public.thesis ("Id", title, type, pub_month, pub_year, note, school) FROM stdin;
    public          postgres    false    223   =g       x           0    0 	   1_asd_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public."1_asd_seq"', 5, true);
          public          postgres    false    217            y           0    0    institution_Id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."institution_Id_seq"', 26, true);
          public          postgres    false    218            z           0    0    tabella1_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.tabella1_id_seq', 5, true);
          public          postgres    false    215            ?           2606    16574    publisher 1_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.publisher
    ADD CONSTRAINT "1_pkey" PRIMARY KEY ("Id");
 <   ALTER TABLE ONLY public.publisher DROP CONSTRAINT "1_pkey";
       public            postgres    false    216            ?           2606    16661    Editor Editor_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public."Editor"
    ADD CONSTRAINT "Editor_pkey" PRIMARY KEY ("publicationId");
 @   ALTER TABLE ONLY public."Editor" DROP CONSTRAINT "Editor_pkey";
       public            postgres    false    224            ?           2606    16627    Person Person_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Person"
    ADD CONSTRAINT "Person_pkey" PRIMARY KEY ("Id");
 @   ALTER TABLE ONLY public."Person" DROP CONSTRAINT "Person_pkey";
       public            postgres    false    222            ?           2606    16666    article articles_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.article
    ADD CONSTRAINT articles_pkey PRIMARY KEY ("Id");
 ?   ALTER TABLE ONLY public.article DROP CONSTRAINT articles_pkey;
       public            postgres    false    225            ?           2606    16641    author author_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.author
    ADD CONSTRAINT author_pkey PRIMARY KEY ("pubblicationId", "personId");
 <   ALTER TABLE ONLY public.author DROP CONSTRAINT author_pkey;
       public            postgres    false    221    221            ?           2606    16786    inBook inBook_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."inBook"
    ADD CONSTRAINT "inBook_pkey" PRIMARY KEY ("Id");
 @   ALTER TABLE ONLY public."inBook" DROP CONSTRAINT "inBook_pkey";
       public            postgres    false    227            ?           2606    16762     inProceedings inProceedings_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public."inProceedings"
    ADD CONSTRAINT "inProceedings_pkey" PRIMARY KEY ("Id");
 N   ALTER TABLE ONLY public."inProceedings" DROP CONSTRAINT "inProceedings_pkey";
       public            postgres    false    230            ?           2606    16604    institution institution_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.institution
    ADD CONSTRAINT institution_pkey PRIMARY KEY ("Id");
 F   ALTER TABLE ONLY public.institution DROP CONSTRAINT institution_pkey;
       public            postgres    false    219            ?           2606    16706    manual manual_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.manual
    ADD CONSTRAINT manual_pkey PRIMARY KEY ("Id");
 <   ALTER TABLE ONLY public.manual DROP CONSTRAINT manual_pkey;
       public            postgres    false    229            ?           2606    16685    misc misc_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.misc
    ADD CONSTRAINT misc_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.misc DROP CONSTRAINT misc_pkey;
       public            postgres    false    228            ?           2606    16743    proceedings proceedings_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.proceedings
    ADD CONSTRAINT proceedings_pkey PRIMARY KEY ("Id");
 F   ALTER TABLE ONLY public.proceedings DROP CONSTRAINT proceedings_pkey;
       public            postgres    false    231            ?           2606    16615    pubblication pubblication_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.pubblication
    ADD CONSTRAINT pubblication_pkey PRIMARY KEY ("Id");
 H   ALTER TABLE ONLY public.pubblication DROP CONSTRAINT pubblication_pkey;
       public            postgres    false    220            ?           2606    16567    book tabella1_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.book
    ADD CONSTRAINT tabella1_pkey PRIMARY KEY ("Id");
 <   ALTER TABLE ONLY public.book DROP CONSTRAINT tabella1_pkey;
       public            postgres    false    214            ?           2606    16694    techreport techreport_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.techreport
    ADD CONSTRAINT techreport_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.techreport DROP CONSTRAINT techreport_pkey;
       public            postgres    false    226            ?           2606    16718    thesis thesis_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.thesis
    ADD CONSTRAINT thesis_pkey PRIMARY KEY ("Id");
 <   ALTER TABLE ONLY public.thesis DROP CONSTRAINT thesis_pkey;
       public            postgres    false    223            ?           2606    16797    Editor Editor_PersonId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Editor"
    ADD CONSTRAINT "Editor_PersonId_fkey" FOREIGN KEY ("PersonId") REFERENCES public."Person"("Id") ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;
 I   ALTER TABLE ONLY public."Editor" DROP CONSTRAINT "Editor_PersonId_fkey";
       public          postgres    false    222    3242    224            ?           2606    16802     Editor Editor_publicationId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Editor"
    ADD CONSTRAINT "Editor_publicationId_fkey" FOREIGN KEY ("publicationId") REFERENCES public.pubblication("Id") ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;
 N   ALTER TABLE ONLY public."Editor" DROP CONSTRAINT "Editor_publicationId_fkey";
       public          postgres    false    224    220    3238            ?           2606    16807    Person Person_Id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."Person"
    ADD CONSTRAINT "Person_Id_fkey" FOREIGN KEY ("Id") REFERENCES public."Person"("Id") NOT VALID;
 C   ALTER TABLE ONLY public."Person" DROP CONSTRAINT "Person_Id_fkey";
       public          postgres    false    3242    222    222            ?           2606    16822    article article_Id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.article
    ADD CONSTRAINT "article_Id_fkey" FOREIGN KEY ("Id") REFERENCES public.pubblication("Id") ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;
 C   ALTER TABLE ONLY public.article DROP CONSTRAINT "article_Id_fkey";
       public          postgres    false    225    3238    220            ?           2606    16817    author author_personId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.author
    ADD CONSTRAINT "author_personId_fkey" FOREIGN KEY ("personId") REFERENCES public."Person"("Id") ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;
 G   ALTER TABLE ONLY public.author DROP CONSTRAINT "author_personId_fkey";
       public          postgres    false    222    221    3242            ?           2606    16812 !   author author_pubblicationId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.author
    ADD CONSTRAINT "author_pubblicationId_fkey" FOREIGN KEY ("pubblicationId") REFERENCES public.pubblication("Id") ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;
 M   ALTER TABLE ONLY public.author DROP CONSTRAINT "author_pubblicationId_fkey";
       public          postgres    false    3238    220    221            ?           2606    16773    book book_id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_id_fkey FOREIGN KEY ("Id") REFERENCES public.pubblication("Id") NOT VALID;
 ;   ALTER TABLE ONLY public.book DROP CONSTRAINT book_id_fkey;
       public          postgres    false    220    3238    214            ?           2606    16778    book book_publisher_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.book
    ADD CONSTRAINT book_publisher_fkey FOREIGN KEY (publisher) REFERENCES public.publisher("Id") ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;
 B   ALTER TABLE ONLY public.book DROP CONSTRAINT book_publisher_fkey;
       public          postgres    false    216    214    3234            ?           2606    16787    inBook inBook_Id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."inBook"
    ADD CONSTRAINT "inBook_Id_fkey" FOREIGN KEY ("Id") REFERENCES public.pubblication("Id") ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;
 C   ALTER TABLE ONLY public."inBook" DROP CONSTRAINT "inBook_Id_fkey";
       public          postgres    false    220    3238    227            ?           2606    16792    inBook inBook_bookId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."inBook"
    ADD CONSTRAINT "inBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES public.book("Id") ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;
 G   ALTER TABLE ONLY public."inBook" DROP CONSTRAINT "inBook_bookId_fkey";
       public          postgres    false    3232    214    227            ?           2606    16763 #   inProceedings inProceedings_Id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."inProceedings"
    ADD CONSTRAINT "inProceedings_Id_fkey" FOREIGN KEY ("Id") REFERENCES public.pubblication("Id") NOT VALID;
 Q   ALTER TABLE ONLY public."inProceedings" DROP CONSTRAINT "inProceedings_Id_fkey";
       public          postgres    false    220    230    3238            ?           2606    16768 ,   inProceedings inProceedings_procedingId_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public."inProceedings"
    ADD CONSTRAINT "inProceedings_procedingId_fkey" FOREIGN KEY ("procedingId") REFERENCES public.proceedings("Id") NOT VALID;
 Z   ALTER TABLE ONLY public."inProceedings" DROP CONSTRAINT "inProceedings_procedingId_fkey";
       public          postgres    false    230    3260    231            ?           2606    16707    manual manual_Id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.manual
    ADD CONSTRAINT "manual_Id_fkey" FOREIGN KEY ("Id") REFERENCES public.pubblication("Id") NOT VALID;
 A   ALTER TABLE ONLY public.manual DROP CONSTRAINT "manual_Id_fkey";
       public          postgres    false    3238    220    229            ?           2606    16712     manual manual_organizzation_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.manual
    ADD CONSTRAINT manual_organizzation_fkey FOREIGN KEY (organizzation) REFERENCES public.institution("Id") NOT VALID;
 J   ALTER TABLE ONLY public.manual DROP CONSTRAINT manual_organizzation_fkey;
       public          postgres    false    229    3236    219            ?           2606    16686    misc misc_fkey    FK CONSTRAINT     {   ALTER TABLE ONLY public.misc
    ADD CONSTRAINT misc_fkey FOREIGN KEY (id) REFERENCES public.pubblication("Id") NOT VALID;
 8   ALTER TABLE ONLY public.misc DROP CONSTRAINT misc_fkey;
       public          postgres    false    3238    220    228            ?           2606    16754    proceedings proceedings_Id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.proceedings
    ADD CONSTRAINT "proceedings_Id_fkey" FOREIGN KEY ("Id") REFERENCES public.pubblication("Id") NOT VALID;
 K   ALTER TABLE ONLY public.proceedings DROP CONSTRAINT "proceedings_Id_fkey";
       public          postgres    false    3238    231    220            ?           2606    16744 *   proceedings proceedings_organizzation_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.proceedings
    ADD CONSTRAINT proceedings_organizzation_fkey FOREIGN KEY (organizzation) REFERENCES public.institution("Id") NOT VALID;
 T   ALTER TABLE ONLY public.proceedings DROP CONSTRAINT proceedings_organizzation_fkey;
       public          postgres    false    219    231    3236            ?           2606    16749 &   proceedings proceedings_publisher_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.proceedings
    ADD CONSTRAINT proceedings_publisher_fkey FOREIGN KEY (publisher) REFERENCES public.publisher("Id") NOT VALID;
 P   ALTER TABLE ONLY public.proceedings DROP CONSTRAINT proceedings_publisher_fkey;
       public          postgres    false    3234    231    216            ?           2606    16695    techreport techReport_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.techreport
    ADD CONSTRAINT "techReport_fkey" FOREIGN KEY (institution) REFERENCES public.institution("Id") NOT VALID;
 F   ALTER TABLE ONLY public.techreport DROP CONSTRAINT "techReport_fkey";
       public          postgres    false    219    3236    226            ?           2606    16724    thesis thesis_Id_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.thesis
    ADD CONSTRAINT "thesis_Id_fkey" FOREIGN KEY ("Id") REFERENCES public.pubblication("Id") NOT VALID;
 A   ALTER TABLE ONLY public.thesis DROP CONSTRAINT "thesis_Id_fkey";
       public          postgres    false    220    3238    223            ?           2606    16729    thesis thesis_school_fkey    FK CONSTRAINT     ?   ALTER TABLE ONLY public.thesis
    ADD CONSTRAINT thesis_school_fkey FOREIGN KEY (school) REFERENCES public.institution("Id") NOT VALID;
 C   ALTER TABLE ONLY public.thesis DROP CONSTRAINT thesis_school_fkey;
       public          postgres    false    3236    223    219            j   !   x?3?4?2?4?2?4?2?4?2?4?????? '?      h   [   x??I?@?u?a???ޅ͇??!?????X/y9l?+b??~?VyC?/???(Kxp?n	?????
S?*?????nٔ???S??)u"t      k   |   x???1?@???ǈIԶ??X?B????C?(??????n?#K???H?????g;?uZ??uKs )??[?,???z???ҔZ$.5?=????o??????????W?o???????>VDt?|?      g   !   x?3?4?2?4?2?4?2?4?2?4?????? '?      `   6   x?3?,?,?I?4???C C??*g?E?*g?E?*g?E?*g?E.F??? ?!o      m   0   x?3?4?,?,?I????#.#N#,?Ɯ?XDM8M???r?b????? u??      p   G   x?3?4?,?,?I???? .#L!cL!L!SL!3L!sL!L!KL!C,b?Xİx???x??b???? ??H?      e   ?   x?m?1?0??9>'@؉\?tAV??U	H?=?%O?`=}??ay?&??OS?`s>8l???+?f|:[?K???\*??x?L:J?c??yl?|;???S??yj?|?:O48??չ6^>?Ε?????????W????,x?xNxV<xƍ?#W
?\)?Rp??J???+?3? ?$??      o   8   x?3?,?,?I?4???!CKK ?e?)n7?7??`????M1?MA?1z\\\ M??      n   7   x?3?,?,?I????"CKK ?e?E?$a?E?$a?E?$a?E?$???? ;
      q      x?u?=?0???0;ڱ9 '?R$RI{~?O7ۖl??[#Oy?o0~??]??-~???????8?Dre}H?;????+?ʜᑄz????CN??΍έΝ?O?_:sm?Q??p?)U??*"?F?Y      f   ?   x?u?M
?0@?ur??@:?i?[x 7R??J??Xp#t?,???##iY_?sn????w?????}??Ѻ??o{:??%~d???x{???,=??C???C?@???x?]{pWp????
?
?
??&?e???i
n?^??|??{??????S??e??      b   u   x?E?=
?0@?Y:ENP??m??!C??:?ܾB{{<>????oo?t??Cp??wT?9m?y??BN΃sr?<?yqFI.?Kr?<?eqAM??kr?<?uqEKn?[r?<?mq????\LX      l   =   x?3?,?,?I????"CKKC0?ed?E?Dsc?2?H?`?2Ѧ\?X?LA?W? S? h      i   7   x?3?,?,?I???!CKKC???]?*c?.a?0A?0?J??K?B%b???? P?9     