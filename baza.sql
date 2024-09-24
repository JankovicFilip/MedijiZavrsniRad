SELECT name, collation_name from sys.databases;
GO
ALTER DATABASE db_aad926_medijiapp SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
GO
ALTER DATABASE db_aad926_medijiapp COLLATE Croatian_CI_AS;
GO
ALTER DATABASE db_aad926_medijiapp SET MULTI_USER;
GO
SELECT name, collation_name FROM sys.databases;







create table korisnici(
sifra int not null primary key identity(1,1),
ime varchar(50) not null,
prezime varchar(50) not null,
email varchar(50) not null,
password varchar(50) not null
);

create table mediji(
sifra int not null primary key identity(1,1),
naziv varchar(50) not null,
opis varchar(8000),
vrsta varchar(20),
genre varchar(100)
);

create table komentari(
sifra int not null primary key identity(1,1),
opis varchar(1000),
korisnik int not null,
medij int not null
);

alter table komentari add foreign key(medij) references mediji(sifra);
alter table komentari add foreign key(korisnik) references korisnici(sifra);


insert into korisnici (ime, prezime, email, password) values
('Milo', 'Schwartz', 'magpieluthien@gmail.com', '1234abcd'),
('Damien', 'Elis', 'woodchuckungol@gmail.com', 'abcd1234'),
('Addie', 'Hess', 'snailcirith@gmail.com', 'efgh5678'),
('Caitlyn', 'West', 'ibexedori@gmail.com', '1234'),
('Susan', 'Huber', 'widgeonent@gmail.com', 'abcd');
select * from korisnici;




insert into mediji (naziv, opis, vrsta, genre) values
('The Dark Knight', 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.', 'Movie', 'Action, Crime, Drama'),
('Pulp Fiction', 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.', 'Movie', 'Crime, Drama'),
('Breaking Bad', 'A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family''s future.', 'TV show' ,'Crime, Drama, Thriller'),
('Game of Thrones', 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.', 'TV show', 'Action, Adventure, Drama'),
('Sousou no Frieren', 'During their decade-long quest to defeat the Demon King, the members of the hero''s party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them.
However, the time that Frieren spends with her comrades is equivalent to merely a fraction of her life, which has lasted over a thousand years. When the party disbands after their victory, Frieren casually returns to her "usual" routine of collecting spells across the continent. Due to her different sense of time, she seemingly holds no strong feelings toward the experiences she went through.
As the years pass, Frieren gradually realizes how her days in the hero''s party truly impacted her. Witnessing the deaths of two of her former companions, Frieren begins to regret having taken their presence for granted; she vows to better understand humans and create real personal connections. Although the story of that once memorable journey has long ended, a new tale is about to begin.', 'TV show', 'Adventure, Drama, Fantasy'),
('Koe no Katachi', 'As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye.
Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends.
Koe no Katachi tells the heartwarming tale of Shouya''s reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past.', 'Movie', 'Romance, Drama');

select * from mediji;


insert into komentari ( opis, korisnik, medij) values 
('Best Batman movie, 10/10', 1, 1),
('Loved the acting of the main cast', 1, 3),
('So touching story, loved it', 5, 6),
('The character development is top notch from any media', 4, 5);

select * from komentari;