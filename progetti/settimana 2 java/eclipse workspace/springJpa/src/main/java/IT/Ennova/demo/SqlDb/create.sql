create table mezzo (id serial not null, modello Varchar(50) not null, stato boolean not null, tipo Varchar(50) not null, primary key (id));
create table articoli (id bigint not null, data_rilascio date, descr varchar(100) not null, prezzo float4 not null, id_fornitore bigint, primary key (id));
create table fornitori (id bigserial not null, cognome varchar(100) not null, foto varchar(255), nome varchar(255), primary key (id));
create table mezzo (id serial not null, modello Varchar(50) not null, stato boolean not null, tipo Varchar(50) not null, primary key (id));
alter table if exists articoli add constraint FK8argq7l01roldr171th664h4w foreign key (id_fornitore) references fornitori;