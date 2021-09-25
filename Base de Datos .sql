DROP DATABASE IF EXISTS gametune;
CREATE DATABASE gametune;
USE gametune;

CREATE TABLE users(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre_de_usuario VARCHAR (100),
email VARCHAR (100),
imagen VARCHAR (150),
contra VARCHAR (150),
fecha DATE,
numero_telefono INT UNSIGNED 
);

CREATE TABLE posts(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
descripcion VARCHAR (500),
imagen VARCHAR (150),
fecha DATE,
users_id INT UNSIGNED,
FOREIGN KEY (users_id) REFERENCES users(id)
);

CREATE TABLE comments(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
comentario VARCHAR (500),
fecha DATE,
post_id INT UNSIGNED,
users_id INT UNSIGNED,
FOREIGN KEY (users_id) REFERENCES users(id),
FOREIGN KEY (post_id) REFERENCES posts(id)
);

CREATE TABLE followers(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
seguidor_id INT UNSIGNED,
seguido_id INT UNSIGNED, 
FOREIGN KEY (seguidor_id) REFERENCES users(id),
FOREIGN KEY (seguido_id) REFERENCES users(id)
);

INSERT INTO users VALUES 
(DEFAULT,"LeylaFernandez_123","leyalfernandez@gmail.com","/images/users/usuario_id1.jpg","4871Leyla_","2020-05-30",1123456789),
(DEFAULT,"Emma_Raducanu.original","emmaraducanu_123@gmail.com","/images/users/usuario_id2.jpg","Radu_asdf","2017-07-21",1134847943),
(DEFAULT,"Trueno435_","alejotrueno.234@gmail.com","/images/users/usuario_id3.jpeg","T@435_ml","2018-05-24",11236770405),
(DEFAULT,"Gamelogt_65T","isidroketerolak@gmail.com","/images/users/usuarios_id4.jpg","Red_g65","2018-08-11",1134845436),
(DEFAULT,"Sulivan.terotiman","sulivantero_1234@gmail.com","images/users/usuarios_id5.jpeg","Tero7856_AR","2016-04-20",1123457634);

INSERT INTO posts VALUES
(DEFAULT, "¡Prepara sabrosos platos y postres de todo el mundo en este adictivo juego GRATUITO de gestión temporal! Usa cientos de deliciosos ingredientes para preparar platos de la mejor calidad.Prueba todo tipo de aparatos de cocina, desde cafeteras y ollas arroceras hasta hornos de pizza y máquinas de palomitas.","/images/posts/cooking_fever.jpeg","2021-08-15",1),
(DEFAULT,"Dark Souls es un RPG de acción en tercera persona, que se caracteriza por una atmósfera oscura y una dificultad muy por encima de los estándares actuales.","/images/posts/dark_souls.jpeg","2021-08-17",2),
(DEFAULT,"Para jugar con amigos, vaya a Amistosos en la sección Jugar. Una vez dentro, puedes jugar en el sofá o enfrentarte a un amigo en línea. Luego confirma qué equipo estás usando y selecciona el tipo de partido que deseas.""/images/posts/fifa_22.jpeg","2021-08-10",3),
(DEFAULT,"Fortnite es un juego online de disparos (lo que se conoce como un shooter) en tercera persona (es decir; que ves a tu personaje según se mueve). Tiene dos modos de juego: Salvar al mundo y Battle Royale. .El juego consiste en pelear contra olas de enemigos, controlados por una inteligencia artificial, llamados Husks.","/images/posts/fortnite.jpeg","2021-08-27",4),
(DEFAULT,"League of Legends es un juego de estrategia por equipos en el que dos equipos conformados por cinco poderosos campeones se enfrentan para destruir la base del otro. Elige de entre más de 140 campeones para realizar jugadas épicas, asegurar asesinatos y destruir torretas mientras avanzas hacia la victoria.","/images/posts/league_of_legends.jpeg","2021-08-03",5),
(DEFAULT,"Mario Bros es un videojuego de arcade desarrollado por Nintendo en el año 1983. Fue creado por Shigeru Miyamoto. En el juego, Mario es retratado como un fontanero ítalo-estadounidense que, junto con su hermano menor Luigi, tiene que derrotar a las criaturas que han venido de las alcantarillas debajo de Nueva York.","/images/posts/mario_bros.jpeg","2021-08-30",1),
(DEFAULT,"Minecraft es un videojuego de mundo abierto donde la exploración y las construcciones son fundamentales. Al ser un videojuego de mundo abierto, no tiene una misión concreta (salvo alguno de sus modos de juego) y consiste en la construcción libre mediante el uso de cubos con texturas tridimensionales.","/images/posts/minecraft.jpeg","2021-08-23",2),
(DEFAULT,"El videojuego Pokémon consiste en personificar el papel de un entrenador de criaturas pokémon. Hoy en día existen seis generaciones de estos monstruos, siendo los primeros y más conocidos Charizard de Pokémon rojo; Venusaur, de Pokémon verde, y Pikachu, de Pokémon amarillo.","/images/posts/pokemon.jpeg","2021 - 08 - 09",3),
(DEFAULT,"SimCity es una serie de videojuegos de construcción de ciudades desarrollada y publicada por Maxis (actualmente una división de Electronic Arts) en sus primeros juegos. La temática de los juegos de la serie se enfoca en la creación, gestión y evolución de ciudades. El juego consiste exactamente en crear para abastecer.","/images/posts/sim_city.jpeg","2021-08-19",4),
(DEFAULT,"Preguntados es un juego de preguntas y respuestas de seis categorías diferentes: geografía, historia, arte, ciencia, entretenimiento, deportes. Para ganar, tendrás que conseguir los personajes correspondientes a cada una de las categorías. Gira la rueda y el azar decidirá las preguntas que tendrás que responder.","/images/posts/trivia.jpeg","2021-08-21",5);


INSERT INTO comments VALUES
(DEFAULT,"Me encanta el juego, es muy aditivo.","2021-08-15",1,1)

