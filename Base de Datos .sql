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
contra VARCHAR (150), 
created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
descripcion VARCHAR (600),
imagen VARCHAR (150),
fecha DATE,
users_id INT UNSIGNED,
FOREIGN KEY (users_id) REFERENCES users(id),
created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comments(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
comentario VARCHAR (600),
fecha DATE,
post_id INT UNSIGNED,
users_id INT UNSIGNED,
FOREIGN KEY (users_id) REFERENCES users(id),
FOREIGN KEY (post_id) REFERENCES posts(id),
created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE followers(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
seguidor_id INT UNSIGNED,
seguido_id INT UNSIGNED, 
FOREIGN KEY (seguidor_id) REFERENCES users(id),
FOREIGN KEY (seguido_id) REFERENCES users(id),
created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE likes(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
post_id INT UNSIGNED,
users_id INT UNSIGNED,
FOREIGN KEY (users_id) REFERENCES users(id),
FOREIGN KEY (post_id) REFERENCES posts(id)
);

INSERT INTO users VALUES 
(DEFAULT,"LeylaFernandez_123","leyalfernandez@gmail.com","/images/users/usuario_id1.jpeg","2020-05-30",1123456789,"4871Leyla_",default,default),
(DEFAULT,"Emma_Raducanu.original","emmaraducanu_123@gmail.com","/images/users/usuario_id2.jpeg","2017-07-21",1134847943,"Radu_asdf",default,default),
(DEFAULT,"Trueno435_","alejotrueno.234@gmail.com","/images/users/usuario_id3.jpeg","2018-05-24",11236770405,"T@435_ml",default,default),
(DEFAULT,"Gamelogt_65T","isidroketerolak@gmail.com","/images/users/usuarios_id4.jpeg","2018-08-11",1134845436,"Red_g65",default,default),
(DEFAULT,"Sulivan.terotiman","sulivantero_1234@gmail.com","/images/users/usuarios_id5.jpeg","2016-04-20",1123457634,"Tero7856_AR",default,default);

INSERT INTO posts VALUES
(DEFAULT,"??Prepara sabrosos platos y postres de todo el mundo en este adictivo juego GRATUITO de gesti??n temporal! Usa cientos de deliciosos ingredientes para preparar platos de la mejor calidad.Prueba todo tipo de aparatos de cocina, desde cafeteras y ollas arroceras hasta hornos de pizza y m??quinas de palomitas.","/images/posts/cooking_fever.jpeg","2021-08-15",1,default,default),
(DEFAULT,"Dark Souls es un RPG de acci??n en tercera persona, que se caracteriza por una atm??sfera oscura y una dificultad muy por encima de los est??ndares actuales.","/images/posts/dark_souls.jpeg","2021-08-17",2,default,default),
(DEFAULT,"Para jugar con amigos, vaya a Amistosos en la secci??n Jugar. Una vez dentro, puedes jugar en el sof?? o enfrentarte a un amigo en l??nea. Luego confirma qu?? equipo est??s usando y selecciona el tipo de partido que deseas.","/images/posts/fifa_22.jpeg","2021-08-10",3,default,default),
(DEFAULT,"Fortnite es un juego online de disparos (lo que se conoce como un shooter) en tercera persona (es decir; que ves a tu personaje seg??n se mueve). Tiene dos modos de juego: Salvar al mundo y Battle Royale. .El juego consiste en pelear contra olas de enemigos, controlados por una inteligencia artificial, llamados Husks.","/images/posts/fortnite.jpeg","2021-08-27",4,default,default),
(DEFAULT,"League of Legends es un juego de estrategia por equipos en el que dos equipos conformados por cinco poderosos campeones se enfrentan para destruir la base del otro. Elige de entre m??s de 140 campeones para realizar jugadas ??picas, asegurar asesinatos y destruir torretas mientras avanzas hacia la victoria.","/images/posts/league_of_legends.jpeg","2021-08-03",5,default,default),
(DEFAULT,"Mario Bros es un videojuego de arcade desarrollado por Nintendo en el a??o 1983. Fue creado por Shigeru Miyamoto. En el juego, Mario es retratado como un fontanero ??talo-estadounidense que, junto con su hermano menor Luigi, tiene que derrotar a las criaturas que han venido de las alcantarillas debajo de Nueva York.","/images/posts/mario_bros.jpeg","2021-08-30",1,default,default),
(DEFAULT,"Minecraft es un videojuego de mundo abierto donde la exploraci??n y las construcciones son fundamentales. Al ser un videojuego de mundo abierto, no tiene una misi??n concreta (salvo alguno de sus modos de juego) y consiste en la construcci??n libre mediante el uso de cubos con texturas tridimensionales.","/images/posts/minecraft.jpeg","2021-08-23",2,default,default),
(DEFAULT,"El videojuego Pok??mon consiste en personificar el papel de un entrenador de criaturas pok??mon. Hoy en d??a existen seis generaciones de estos monstruos, siendo los primeros y m??s conocidos Charizard de Pok??mon rojo; Venusaur, de Pok??mon verde, y Pikachu, de Pok??mon amarillo.","/images/posts/pokemon.jpeg","2021-08-09",3,default,default),
(DEFAULT,"SimCity es una serie de videojuegos de construcci??n de ciudades desarrollada y publicada por Maxis (actualmente una divisi??n de Electronic Arts) en sus primeros juegos. La tem??tica de los juegos de la serie se enfoca en la creaci??n, gesti??n y evoluci??n de ciudades. El juego consiste exactamente en crear para abastecer.","/images/posts/sim_city.jpeg","2021-08-19",4,default,default),
(DEFAULT,"Preguntados es un juego de preguntas y respuestas de seis categor??as diferentes: geograf??a, historia, arte, ciencia, entretenimiento, deportes. Para ganar, tendr??s que conseguir los personajes correspondientes a cada una de las categor??as. Gira la rueda y el azar decidir?? las preguntas que tendr??s que responder.","/images/posts/trivia.jpeg","2021-08-21",5,default,default);


INSERT INTO comments VALUES
(DEFAULT,"Me encanta el juego, es muy aditivo.","2021-08-15",1,1,default,default),
(DEFAULT,"Estar??a bueno que uno pueda competir contra otros para ver quien tiene el mejor imperio de comida.","2021-08-15",1,3,default,default),
(DEFAULT,"Hay un truco que los va a ayudar a pasar de forma m??s r??pida los niveles. Primero usa las m??quinas de cocina y deja al final las mejoras de ingredientes.","2021-08-15",1,4,default,default),
(DEFAULT,"No me gusta que sea tan repetitivo.","2021-08-15",1,5,default,default),
(DEFAULT,"Muy violento para los ni??os.","2021-08-17",2,1,default,default),
(DEFAULT,"Es uno de los mejores juegos de aventura que he jugado en mi vida.","2021-08-17",2,3,default,default),
(DEFAULT,"Sin duda lo mejor del juego, es muy envolvente y los temas son muy ??picos en las batallas contra los bosses.","2021-08-17",2,3,default,default),
(DEFAULT,"Con respecto a la innovaci??n, buen apartado sin duda ya que es uno de los juegos m??s influyentes de la ??ltima d??cada, siendo su f??rmula una de las m??s copiadas sin ??xito por otros estudios.","2021-08-17",2,5,default,default),
(DEFAULT,"Me gustaba mucho m??s la actualizaci??n anterior.","2021-08-10",3,1,default,default),
(DEFAULT,"Es tremendo como estos tipos cambian dos boludeces y lanzan un nuevo modelo para que la gente lo compre.","2021-08-10",3,2,default,default),
(DEFAULT,"Estan barbaras todas las camisetas.","2021-08-10",3,4,default,default),
(DEFAULT,"Me gustar??a que en el pr??ximo lanzamiento innovaran m??s en las funcionalidades existentes.","2021-08-10",3,5,default,default),
(DEFAULT,"Me encanta el baile que realizan los personajes. Y su look and feel es espectacular.","2021-08-27",4,1,default,default),
(DEFAULT,"Este juego no aporta nada que no se haya visto antes, todos los juegos de su estilo son exactamente iguales, solo cambian los gr??ficos y algunas otras cosas.","2021-08-27",4,2,default,default),
(DEFAULT,"Me gusta poder estar conectado con mis amigos y jugar con o contra ellos.","2021-08-27",4,4,default,default),
(DEFAULT,"No me gust?? el juego. Muy violento.","2021-08-27",4,5,default,default),
(DEFAULT,"League of Legends ha sido mi asignatura pendiente durante pr??cticamente una d??cada.","2021-08-03",5,1,default,default),
(DEFAULT,"Nunca jugu?? al juego pero con la cantidad de videos que est??n subiendo me est??n motivando a hacerlo.","2021-08-03",5,2,default,default),
(DEFAULT,"Buen juego, el contenido, apartado gr??fico y las mec??nicas son geniales.","2021-08-03",5,3,default,default), 
(DEFAULT,"Solo lo recomiendo si vas a jugar con otros cuatro amigos y as?? evitais encontraros con jugadores extra??os en vuestro mismo equipo.","2021-08-03",5,4,default,default),
(DEFAULT,"El cl??sico juego que nunca pasa de moda.","2021-08-30",6,5,default,default),
(DEFAULT,"Me gustar??a poder aprender los trucos que hace el youtuber santiagotuyo.","2021-08-30",6,4,default,default),
(DEFAULT,"Me parece que Nintendo ya pas?? de moda y no logra sacar un juego disruptivo hace a??os.","2021-08-30",6,4,default,default),
(DEFAULT,"Mario fue el primer video juego que jugu?? en mi vida.","2021-08-30",6,2,default,default),
(DEFAULT,"Minecraft tambi??n les ense??a a mis hijos l??gica, resoluci??n de problemas, fijaci??n de objetivos.","2021-08-23",7,4,default,default),
(DEFAULT,"Me encanta poder crear mi propia ciudad y a la misma vez que mis amigos puedan colaborar conmigo haci??ndola.","2021-08-23",7,4,default,default),
(DEFAULT,"No me gusta el arte del juego.","2021-08-23",7,3,default,default),
(DEFAULT,"Me parece un juego hist??rico.","2021-08-23",7,1,default,default),
(DEFAULT,"Uno de los videojuegos que revolucion?? el mercado del gaming.","2021-08-09",8,1,default,default),
(DEFAULT,"Lo super recomiendo.","2021-08-09",8,2,default,default),
(DEFAULT,"??Alguno sabe como puedo hacer para ganarle al equipo Rocket?","2021-08-09",8,4,default,default),
(DEFAULT,"??Como hago para descargarme este juego?","2021-08-09",8,5,default,default),
(DEFAULT,"Es un buen juego, pero ten??a potencial para ser hist??rico.","2021-08-19",9,1,default,default),
(DEFAULT,"Me encanta el dise??o art??stico de este juego.","2021-08-19",9,1,default,default),
(DEFAULT,"La m??sica es genial.","2021-08-19",9,3,default,default),
(DEFAULT,"??C??mo hiciste para llegar al nivel 50? Estoy atascada en el 49 hace un mes y no se como ganarlo.","2021-08-19",9,5,default,default),
(DEFAULT,"Me gusto mucho el juego y me parecen geniales los nuevos desarrollos que est?? haciendo Etermax.","2021-08-21",10,1,default,default),
(DEFAULT,"Me encanta poder aprender de forma divertida mientras juego.","2021-08-21",10,2,default,default),
(DEFAULT,"Me gustar??a que hubiera una secci??n para que uno cree su propio Avatar.","2021-08-21",10,3,default,default),
(DEFAULT,"Estar??a bueno que den premios f??sicos en el ranking.","2021-08-21",10,3,default,default);





































