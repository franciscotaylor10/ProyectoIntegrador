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
(DEFAULT,"LeylaFernandez_123","leyalfernandez@gmail.com","/images/users/usuario_id1.jpg","4871Leyla_","2020-05-30",1123456789);

INSERT INTO posts VALUES
(DEFAULT, "¡Prepara sabrosos platos y postres de todo el mundo en este adictivo juego GRATUITO de gestión temporal! Usa cientos de deliciosos ingredientes para preparar platos de la mejor calidad.Prueba todo tipo de aparatos de cocina, desde cafeteras y ollas arroceras hasta hornos de pizza y máquinas de palomitas.","/images/posts/cooking_fever.jpeg","2021-08-15",1);

INSERT INTO comments VALUES
(DEFAULT,"Me encanta el juego, es muy aditivo.","2021-08-15",1,1)
