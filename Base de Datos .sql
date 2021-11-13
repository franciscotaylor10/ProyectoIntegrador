DROP DATABASE IF EXISTS gametune;
CREATE DATABASE gametune;
USE gametune;

CREATE TABLE users(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre_de_usuario VARCHAR (100),
email VARCHAR (150),
imagen VARCHAR (150),
fecha DATE,
numero_telefono BIGINT UNSIGNED,
contra VARCHAR (150) 
);

CREATE TABLE posts(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
descripcion VARCHAR (600),
imagen VARCHAR (150),
fecha DATE,
users_id INT UNSIGNED,
FOREIGN KEY (users_id) REFERENCES users(id)
);

CREATE TABLE comments(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
comentario VARCHAR (600),
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
(DEFAULT,"LeylaFernandez_123","leyalfernandez@gmail.com","/images/users/usuario_id1.jpg","2020-05-30",1123456789,"4871Leyla_"),
(DEFAULT,"Emma_Raducanu.original","emmaraducanu_123@gmail.com","/images/users/usuario_id2.jpg","2017-07-21",1134847943,"Radu_asdf"),
(DEFAULT,"Trueno435_","alejotrueno.234@gmail.com","/images/users/usuario_id3.jpeg","2018-05-24",11236770405,"T@435_ml"),
(DEFAULT,"Gamelogt_65T","isidroketerolak@gmail.com","/images/users/usuarios_id4.jpg","2018-08-11",1134845436,"Red_g65"),
(DEFAULT,"Sulivan.terotiman","sulivantero_1234@gmail.com","/images/users/usuarios_id5.jpeg","2016-04-20",1123457634,"Tero7856_AR");

INSERT INTO posts VALUES
(DEFAULT,"¡Prepara sabrosos platos y postres de todo el mundo en este adictivo juego GRATUITO de gestión temporal! Usa cientos de deliciosos ingredientes para preparar platos de la mejor calidad.Prueba todo tipo de aparatos de cocina, desde cafeteras y ollas arroceras hasta hornos de pizza y máquinas de palomitas.","/images/posts/cooking_fever.jpeg","2021-08-15",1),
(DEFAULT,"Dark Souls es un RPG de acción en tercera persona, que se caracteriza por una atmósfera oscura y una dificultad muy por encima de los estándares actuales.","/images/posts/dark_souls.jpeg","2021-08-17",2),
(DEFAULT,"Para jugar con amigos, vaya a Amistosos en la sección Jugar. Una vez dentro, puedes jugar en el sofá o enfrentarte a un amigo en línea. Luego confirma qué equipo estás usando y selecciona el tipo de partido que deseas.","/images/posts/fifa_22.jpeg","2021-08-10",3),
(DEFAULT,"Fortnite es un juego online de disparos (lo que se conoce como un shooter) en tercera persona (es decir; que ves a tu personaje según se mueve). Tiene dos modos de juego: Salvar al mundo y Battle Royale. .El juego consiste en pelear contra olas de enemigos, controlados por una inteligencia artificial, llamados Husks.","/images/posts/fortnite.jpeg","2021-08-27",4),
(DEFAULT,"League of Legends es un juego de estrategia por equipos en el que dos equipos conformados por cinco poderosos campeones se enfrentan para destruir la base del otro. Elige de entre más de 140 campeones para realizar jugadas épicas, asegurar asesinatos y destruir torretas mientras avanzas hacia la victoria.","/images/posts/league_of_legends.jpeg","2021-08-03",5),
(DEFAULT,"Mario Bros es un videojuego de arcade desarrollado por Nintendo en el año 1983. Fue creado por Shigeru Miyamoto. En el juego, Mario es retratado como un fontanero ítalo-estadounidense que, junto con su hermano menor Luigi, tiene que derrotar a las criaturas que han venido de las alcantarillas debajo de Nueva York.","/images/posts/mario_bros.jpeg","2021-08-30",1),
(DEFAULT,"Minecraft es un videojuego de mundo abierto donde la exploración y las construcciones son fundamentales. Al ser un videojuego de mundo abierto, no tiene una misión concreta (salvo alguno de sus modos de juego) y consiste en la construcción libre mediante el uso de cubos con texturas tridimensionales.","/images/posts/minecraft.jpeg","2021-08-23",2),
(DEFAULT,"El videojuego Pokémon consiste en personificar el papel de un entrenador de criaturas pokémon. Hoy en día existen seis generaciones de estos monstruos, siendo los primeros y más conocidos Charizard de Pokémon rojo; Venusaur, de Pokémon verde, y Pikachu, de Pokémon amarillo.","/images/posts/pokemon.jpeg","2021-08-09",3),
(DEFAULT,"SimCity es una serie de videojuegos de construcción de ciudades desarrollada y publicada por Maxis (actualmente una división de Electronic Arts) en sus primeros juegos. La temática de los juegos de la serie se enfoca en la creación, gestión y evolución de ciudades. El juego consiste exactamente en crear para abastecer.","/images/posts/sim_city.jpeg","2021-08-19",4),
(DEFAULT,"Preguntados es un juego de preguntas y respuestas de seis categorías diferentes: geografía, historia, arte, ciencia, entretenimiento, deportes. Para ganar, tendrás que conseguir los personajes correspondientes a cada una de las categorías. Gira la rueda y el azar decidirá las preguntas que tendrás que responder.","/images/posts/trivia.jpeg","2021-08-21",5);


INSERT INTO comments VALUES
(DEFAULT,"Me encanta el juego, es muy aditivo.","2021-08-15",1,1),
(DEFAULT,"Estaría bueno que uno pueda competir contra otros para ver quien tiene el mejor imperio de comida.","2021-08-15",1,3),
(DEFAULT,"Hay un truco que los va a ayudar a pasar de forma más rápida los niveles. Primero usa las máquinas de cocina y deja al final las mejoras de ingredientes.","2021-08-15",1,4),
(DEFAULT,"No me gusta que sea tan repetitivo.","2021-08-15",1,5),
(DEFAULT,"Muy violento para los niños.","2021-08-17",2,1),
(DEFAULT,"Es uno de los mejores juegos de aventura que he jugado en mi vida.","2021-08-17",2,3),
(DEFAULT,"Sin duda lo mejor del juego, es muy envolvente y los temas son muy épicos en las batallas contra los bosses.","2021-08-17",2,3),
(DEFAULT,"Con respecto a la innovación, buen apartado sin duda ya que es uno de los juegos más influyentes de la última década, siendo su fórmula una de las más copiadas sin éxito por otros estudios.","2021-08-17",2,5),
(DEFAULT,"Me gustaba mucho más la actualización anterior.","2021-08-10",3,1),
(DEFAULT,"Es tremendo como estos tipos cambian dos boludeces y lanzan un nuevo modelo para que la gente lo compre.","2021-08-10",3,2),
(DEFAULT,"Estan barbaras todas las camisetas.","2021-08-10",3,4),
(DEFAULT,"Me gustaría que en el próximo lanzamiento innovaran más en las funcionalidades existentes.","2021-08-10",3,5),
(DEFAULT,"Me encanta el baile que realizan los personajes. Y su look and feel es espectacular.","2021-08-27",4,1),
(DEFAULT,"Este juego no aporta nada que no se haya visto antes, todos los juegos de su estilo son exactamente iguales, solo cambian los gráficos y algunas otras cosas.","2021-08-27",4,2),
(DEFAULT,"Me gusta poder estar conectado con mis amigos y jugar con o contra ellos.","2021-08-27",4,4),
(DEFAULT,"No me gustó el juego. Muy violento.","2021-08-27",4,5),
(DEFAULT,"League of Legends ha sido mi asignatura pendiente durante prácticamente una década.","2021-08-03",5,1),
(DEFAULT,"Nunca jugué al juego pero con la cantidad de videos que están subiendo me están motivando a hacerlo.","2021-08-03",5,2),
(DEFAULT,"Buen juego, el contenido, apartado gráfico y las mecánicas son geniales.","2021-08-03",5,3), 
(DEFAULT,"Solo lo recomiendo si vas a jugar con otros cuatro amigos y así evitais encontraros con jugadores extraños en vuestro mismo equipo.","2021-08-03",5,4),
(DEFAULT,"El clásico juego que nunca pasa de moda.","2021-08-30",6,5),
(DEFAULT,"Me gustaría poder aprender los trucos que hace el youtuber santiagotuyo.","2021-08-30",6,4),
(DEFAULT,"Me parece que Nintendo ya pasó de moda y no logra sacar un juego disruptivo hace años.","2021-08-30",6,4),
(DEFAULT,"Mario fue el primer video juego que jugué en mi vida.","2021-08-30",6,2),
(DEFAULT,"Minecraft también les enseña a mis hijos lógica, resolución de problemas, fijación de objetivos.","2021-08-23",7,4),
(DEFAULT,"Me encanta poder crear mi propia ciudad y a la misma vez que mis amigos puedan colaborar conmigo haciéndola.","2021-08-23",7,4),
(DEFAULT,"No me gusta el arte del juego.","2021-08-23",7,3),
(DEFAULT,"Me parece un juego histórico.","2021-08-23",7,1),
(DEFAULT,"Uno de los videojuegos que revolucionó el mercado del gaming.","2021-08-09",8,1),
(DEFAULT,"Lo super recomiendo.","2021-08-09",8,2),
(DEFAULT,"¿Alguno sabe como puedo hacer para ganarle al equipo Rocket?","2021-08-09",8,4),
(DEFAULT,"¿Como hago para descargarme este juego?","2021-08-09",8,5),
(DEFAULT,"Es un buen juego, pero tenía potencial para ser histórico.","2021-08-19",9,1),
(DEFAULT,"Me encanta el diseño artístico de este juego.","2021-08-19",9,1),
(DEFAULT,"La música es genial.","2021-08-19",9,3),
(DEFAULT,"¿Cómo hiciste para llegar al nivel 50? Estoy atascada en el 49 hace un mes y no se como ganarlo.","2021-08-19",9,5),
(DEFAULT,"Me gusto mucho el juego y me parecen geniales los nuevos desarrollos que está haciendo Etermax.","2021-08-21",10,1),
(DEFAULT,"Me encanta poder aprender de forma divertida mientras juego.","2021-08-21",10,2),
(DEFAULT,"Me gustaría que hubiera una sección para que uno cree su propio Avatar.","2021-08-21",10,3),
(DEFAULT,"Estaría bueno que den premios físicos en el ranking.","2021-08-21",10,3);





































