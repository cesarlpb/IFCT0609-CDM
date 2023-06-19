-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-06-2023 a las 15:17:15
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subastas`
--

CREATE TABLE `subastas` (
  `subastasId` smallint(6) NOT NULL,
  `ubicacion` varchar(255) NOT NULL,
  `expedienteId` varchar(255) NOT NULL,
  `estado` varchar(255) NOT NULL,
  `descripcion` mediumtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `subastas`
--

INSERT INTO `subastas` (`subastasId`, `ubicacion`, `expedienteId`, `estado`, `descripcion`) VALUES
(4, 'JUZGADO 1ª INSTANCIA 32 - MADRID', '0325/21', 'Celebrándose - [Conclusión prevista: 03/07/2023 a las 18:00:00]', 'FINCA NÚMERO 18.580. Sita en la calle Genciana nº 29, con vueltaa la calle Miosotis nº 51 de Madrid, bajo 3 ó primera letra-A, en planta 1ª.'),
(5, 'JUZGADO 1ª INST E INSTRUCC. 1 - SEGOVIA', '0125/17', 'Celebrándose - [Conclusión prevista: 03/07/2023 a las 18:00:00]', 'MITAD INDIVISA DE LA FINCA REGISTRAL 6177 DEL REGISTRO DE LA PROPIEDAD Nº 14 DE MADRID, BIEN INMUEBLE, EDIFICIO DE VIVIENDAS, TOMO 1009, LIBRO 471, FOLIO 220 CON REFERECIA CATASTRAL DE LA FINCA MATRIZ 2876905VK4727F0001BH, SITA EN C/ MALCAMPO 3 DE MADRID.'),
(6, 'JUZGADO MERCANTIL 3 - MADRID', '0549/14', 'Celebrándose - [Conclusión prevista: 03/07/2023 a las 18:00:00]', 'Subasta con varios lotes. Lote 1: DOSCIENTOS.- Vivienda dúplex Tipo \"M\", en dos plantas unidas ambas por una escalera interior y distribuidas en varias dependencias. Tiene su acceso a través de una escalera exterior que arranca de la planta baja, ubicada en el bloque II de la primera Fase del complejo urbanístico \"EL PEDRUCHILLO, PRIMERA, SEGUNDA Y TERCERA FASE\", asentado sobre la parcela o porción \"E\", del núcleo o zona de uso colectivo número ocho del Plan de Ordenación Urbana de la Zona Norte de la Manga del Mar Menor, o Hacienda de la Mangade San Javier, sita en el Paraje de La Manga, término municipal de la villa de San Javier. CUOTA: Doscientas cincuenta y ocho milésimas por ciento. Lote 2: CIENTO DOS.- APARCAMIENTO señalado sobre el pavimento con el número CIENTO DOS, en planta SEMISÓTANO X, de la Primera Fase del Complejo Urbanístico denominado \"EL PEDRUCHILLO, PRIMERA, SEGUNDA Y TERCERA FASE\", asentado sobre la parcela o porción \"E\" del núcleo o zona de uso colectivo número ocho del Plan de Ordenación Urbana dela Zona Norte de la Manga del Mar Menor, o Hacienda de la Manga de San Javier, sita en el paraje de La Manga, término municipal de la villa de San Javier. Lote 3: UNA PARTICIPACIÓN INDIVISA DE 11/40 de la siguiente finca registral, que corresponde a las plazas de garaje números 1, 6, 7, 11, 12, 13, 14, 28, 30, 31 y 32. URBANA.- FINCA NÚMERO UNO DEL EDIFICIO SITO EN LA CALLE CONDE DE BARCELONA NÚMERO SIETE Y FINCA NÚMERO UNO, DEL EDIFICIO SITO EN LA CALLE CONDE DE BARCELONA NÚMERO NUEVE EN LEGANÉS. Local en planta sótano y semisótano del primer edificio y en planta sótano y semisótano del segundo edificio. CUOTA: Veinte enteros, trescientasnoventa y tres milésimas por ciento en el primer edificio y de treinta y cuatro enteros, setecientas seis milésimas por ciento en el segundo edificio. Respecto auna treceava parte de la finca común, parcela número 656 del Plano de Adjudicaciones, se la adjudica al titular de la finca de este número una cuota indivisa igual a la cuota que le corresponde en el valor, elementos y gastos comunes de la total finca, como derecho subjetivamente real o titularidad OB REM, no pudiendo sertitular de dicha cuota de la citada parcela quien no sea a la vez propietario dela finca de este número. Esta finca no está coordinada gráficamente con el catastro, a los efectos del artículo 10.5 de la Ley Hipotecaria en la redacción establecida por la Ley 13/2015 de 24 de junio. VENDIDAS 29 cuotas indivisas de 1/40 de la finca matriz descrita anteriormente, quedan sin vender 11 cuotas de 1/40, que corresponden a la siguientes plazas de aparcamiento: 1, 6, 7, 11, 12, 13, 14, 28,30, 31 y 32. Lote 4: URBANA.- LOCAL NÚMERO DOS. LOCAL COMERCIAL EN PLANTA BAJA DEL EDIFICIO SITO EN LA CALLE CONDE DE BARCELONA NÚMERO SIETE Y FINCA NÚMERO DOS, LOCAL COMERCIAL EN PLANTA BAJA DEL EDIFICIO SITO EN LA CALLE CONDE DE BARCELONA NÚMERO NUEVE, EN LEGANÉS. CUOTA: Ochocientas noventa milésimas por ciento en el primer edificio y de ochocientas treinta y dos milésimas por ciento en el segundo edificio. Lote 5: FINCA SIETE.- PLAZA DE GARAJE NÚMERO SIETE, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES,NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20 %. Lote 6: FINCA OCHO.- PLAZA DE GARAJE NÚMERO OCHO, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20 %. Lote 7: FINCA NUEVE.- PLAZA DE GARAJE NÚMERO NUEVE, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20 %. Lote 8: FINCA DIEZ.- PLAZA DE GARAJE NÚMERO DIEZ, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20 %. Lote 9: FINCA ONCE.- PLAZA DE GARAJE NÚMERO ONCE, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITOEN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20 %. Lote 10: FINCA DOCE.- PLAZADE GARAJE NÚMERO DOCE, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20 %. Lote 11: FINCA SESENTA Y OCHO.- PLAZA DE GARAJE NÚMERO SESENTA Y OCHO, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20 %. Lote 12: URBANA.- FINCA SESENTA Y NUEVE.- PLAZA DE GARAJE NÚMERO SESENTA Y NUEVE, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES,NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20 %. Lote 13: URBANA.- FINCA SETENTA.- PLAZA DE GARAJE NÚMERO SETENTA, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LASNIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20 %. Lote 14: URBANA.- FINCA SETENTA Y UNO.- PLAZA DE GARAJE NÚMERO SETENTAY UNO, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20%. Lote 15: URBANA.- FINCA SETENTA Y DOS.- PLAZA DE GARAJE NÚMERO SETENTA Y DOS, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20% Lote 16: URBANA.- FINCA SETENTA YTRES.- PLAZA DE GARAJE NÚMERO SETENTA Y TRES, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20%. Lote 17: URBANA.- FINCA SETENTA Y CUATRO.- PLAZA DE GARAJE NÚMERO SETENTA Y CUATRO, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20%. Lote 18: URBANA.- FINCA SETENTA Y CINCO.- PLAZA DE GARAJE NÚMERO SETENTA Y CINCO, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CONFACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20 %. Lote 19: URBANA.- FINCA SETENTA Y SEIS.- PLAZA DE GARAJE NÚMERO SETENTA Y SEIS, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIOSITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE YCALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20%. Lote 20: URBANA.- FINCASETENTA Y SIETE.- PLAZA DE GARAJE NÚMERO SETENTA Y SIETE, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20 %.Lote 21: URBANA.- FINCA NOVENTA Y DOS.- PLAZA DE GARAJE NÚMERO NOVENTA Y DOS, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERODOS. CUOTA: 0,20%. Lote 22: URBANA.- FINCA NOVENTA Y TRES.- PLAZA DE GARAJE NÚMERO NOVENTA Y TRES, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20 %. Lote 23: URBANA.- FINCA NOVENTA Y CUATRO.- PLAZA DE GARAJE NÚMERO NOVENTA Y CUATRO, SITA EN LA PLANTA SEGUNDO SÓTANO DELEDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LAS NIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20 %. Lote 24: URBANA.- FINCA NOVENTA Y CINCO.- PLAZA DE GARAJE NÚMERO NOVENTA Y CINCO, SITA EN LA PLANTA SEGUNDO SÓTANO DEL EDIFICIO SITO EN MÓSTOLES, CON FACHADA A LA AVDA. DE LASNIEVES, NÚMERO TREINTA Y SIETE Y CALLE PUERTO DE LA CRUZ VERDE, NÚMERO DOS. CUOTA: 0,20 %. Lote 25: URBANA.- FINCA NÚMERO DOS.- LOCAL COMERCIAL DESTINADO A APARCAMIENTO, en la planta de semisótano del edificio sito en el número cuatro del Paseo de las Murallas, en Baeza. CUOTA: 21,68 %.'),
(7, 'JUZGADO 1ª INSTANCIA 3 - MOSTOLES', '0319/21', 'Celebrándose - [Conclusión prevista: 03/07/2023 a las 18:00:00]', 'Finca número 3.203 del Registro de la Propiedad nº 3 de Móstoles. LOCAL COMERCIAL. Descripción de la finca URBANA: 148 Local comercial nº 4, bloque 5, en Calle Azorín S/N de Móstoles. Inscrita en el Registro de la Propiedad deMóstoles nº 3 al Tomo: 1.824 Libro 468 Folio 104 finca número 3203, hipoteca a la inscripción 6ª de 9-5-2011.'),
(8, 'JUZGADO 1ª INSTANCIA 32 - MADRID', '0147/16', 'Celebrándose - [Conclusión prevista: 03/07/2023 a las 18:00:00]', 'C/ RIO BRAVO Nº 16, 2º DRCHA'),
(9, 'AUDIENCIA PROV. SECC. 6 - MADRID', '0061/18', 'Celebrándose - [Conclusión prevista: 29/06/2023 a las 18:00:00]', '100% inmueble urbano consistente en local comercial FINCA  Nº 4757 REGISTRO PROPIEDAD Nº1 GETAFE Inmueble sito en calle Cataluña nº17,esc E, SÓTANO PUERTA 37'),
(10, 'JUZGADO 1ª INSTANCIA 100 - MADRID', '0065/21', 'Celebrándose - [Conclusión prevista: 29/06/2023 a las 18:00:00]', 'Subasta con varios lotes. Lote 1: FINCA 12.612 DEL REGISTRO DE LA PROPIEDAD Nº 7 DE MADRID Lote 2: FINCA 12.627 DEL REGISTRO DE LA PROPIEDAD Nº 7DE MADRID'),
(11, 'JUZGADO 1ª INST E INSTRUCC. 5 - COLMENAR VIEJO', '0001/21', 'Celebrándose - [Conclusión prevista: 29/06/2023 a las 18:00:00]', 'FINCA Nº 7879 DE MIRAFLORES DE LA SIERRA INSCRITA EN EL REGISTRODE LA PROPIEDAD Nº 2 DE COLMENAR VIEJO, AL TOMO 1060, LIBRO 128, FOLIO 214, INSCRIPCION 4ª'),
(12, 'JUZGADO 1ª INSTANCIA 100 - MADRID', '0237/20', 'Celebrándose - [Conclusión prevista: 29/06/2023 a las 18:00:00]', 'finca 9.007'),
(13, 'JUZGADO 1ª INST E INSTRUCC. 3 - ARGANDA DEL REY', '0221/20', 'Celebrándose - [Conclusión prevista: 28/06/2023 a las 18:00:00]', 'FINCA URBANA EN C/ MIRALPARQUE, PORTAL 13, 4ª PLANTA, LETRA B, EN ARGANDA DEL REY'),
(14, 'JUZGADO 1ª INSTANCIA 100 - MADRID', '0127/18', 'Celebrándose - [Conclusión prevista: 28/06/2023 a las 18:00:00]', 'Subasta con varios lotes. Lote 1: finca 33890 Lote 2: finca 33894 Lote 3: finca 34076 Lote 4: finac 34708 Lote 5: finca 34714 Lote 6: finca 34422'),
(15, 'JUZGADO 1ª INSTANCIA 31 - MADRID', '1571/12', 'Celebrándose - [Conclusión prevista: 28/06/2023 a las 18:00:00]', 'FINCA 4.193 DEL REGISTRO PROPIEDAD 34 DE MADRID'),
(16, 'JUZGADO 1ª INSTANCIA 32 - MADRID', '0311/18', 'Celebrándose - [Conclusión prevista: 28/06/2023 a las 18:00:00]', 'Subasta con varios lotes. Lote 1: FINCA Nº.74.720- APARTAMENTO DUPLEX LETRAS G-H, PLANTA 6ª Y ÁTICO. CALLE CASADO DEL ALISAL Nº 14 Y 15 DE LA CALLE ALBERTO BOSCH DE MADRID. Lote 2: FINCA Nº 97.709 CALLE RECOLETOS Nº 14, 5º-B DE MADRID'),
(17, 'JUZGADO 1ª INSTANCIA 1 - MOSTOLES', '0438/21', 'Celebrándose - [Conclusión prevista: 28/06/2023 a las 18:00:00]', 'CONSULTAR EDICTO'),
(18, 'JUZGADO 1 INSTANCIA 3 - TOLEDO', '0054/18', 'Celebrándose - [Conclusión prevista: 28/06/2023 a las 18:00:00]', 'Subasta con varios lotes. Lote 1: FINCA DE LEGANES SECCION 2º Nº38227, URBANA PLAZA DE GARAJE, CALLE ZARAGOZA, NUMERO 11, PLANTA SÓTANO , GARAJE3 Lote 2: FINCA DE LEGANES SECCION 2º Nº 38228, URBANA PLAZA DE GARAJE, CALLE ZARAGOZA, NUMERO 11, PLANTA SÓTANO , GARAJE 4 Lote 3: INCA DE LEGANES SECCION 2º Nº38229, URBANA PLAZA DE GARAJE, CALLE ZARAGOZA, NUMERO 11, PLANTA SÓTANO , GARAJE5.'),
(19, 'JUZGADO 1ª INST E INSTRUCC. 4 - ARANJUEZ', '0483/13', 'Celebrándose - [Conclusión prevista: 28/06/2023 a las 18:00:00]', 'FINCA REGISTRAL 20.554 RP ARANJUEZ . INSCRIPCION 5ª sita en caleGlorieta de Clavel  7 2 Izda de aranjuez'),
(20, 'JUZGADO 1ª INST E INSTRUCC. 1 - COSLADA', '0113/20', 'Celebrándose - [Conclusión prevista: 26/06/2023 a las 18:00:00]', 'FINCA 5451 DE MEJORADA DEL CAMPO, PARCELA DE TERRENO AL SITIO DELOS ALAMILLOS O PASEO DE ARANERO NUM.10, SUPERFICIE 629M, 95'),
(21, 'JUZGADO 1ª INSTANCIA 1 - JAEN', '0766/21', 'Celebrándose - [Conclusión prevista: 26/06/2023 a las 18:00:00]', 'FINCA  5361 REGISTRO DE LA PROPIEDAD DE NAVALCARNERO'),
(22, 'JUZGADO 1ª INSTANCIA 2 - BARAKALDO', '0375/21', 'Celebrándose - [Conclusión prevista: 26/06/2023 a las 18:00:00]', 'Vivienda adosada sita en Villaviciosa de Odón, calle Alta nº 33.'),
(23, 'U.R. SUBASTAS CATALUÑA - BARCELONA', 'Celebrándose', 'POL 3 PARC 31 LA GREDERA. LA AMARGUILA- VICALVARO - MADRID', ''),
(24, 'JUZGADO 1ª INSTANCIA 31 - MADRID', '0195/22', 'Celebrándose - [Conclusión prevista: 26/06/2023 a las 18:00:00]', 'FR 7036 RP 42 DE MADRID'),
(25, 'JUZGADO 1ª INST E INSTRUCC. 5 - LEGANES', '0118/20', 'Celebrándose - [Conclusión prevista: 26/06/2023 a las 18:00:00]', 'Subasta con varios lotes. Lote 1: Urbana dos. vivienda bajo letra A, de la casa en Leganés   en el Poblado de la Fortuna en la Calle  San Juan Bosco número 6, con vuelta a la calle Maria Auxiliadora , número 26, hoy número 22.Lote 2: Solar señalado con el número 9 de la hoy Avda de la Libertsad , antes Avda de la Victoria del Poblado de la Fortuna en la Colonia Pacuaria, al sitio de la Piqueñas en en término de  Leganés'),
(26, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'pleno dominio de vivienda en CL VENTURA RODRIGUEZ 2 Es:2 Pl:02 Pt:B. 28660 BOADILLA DEL MONTE  M', ''),
(27, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'de la Nuda Propiedad  de VIVIENDA  sita en CADALSO DE LOS VIDRIOS (MADRID)', ''),
(28, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'de la Nuda Propiedad  de VIVIENDA  sita en CADALSO DE LOS VIDRIOS (MADRID)', ''),
(29, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'pleno dominio de local de oficina sito en CL MONTERA 32, 03', 'oficina 06, 28013 MADRID'),
(30, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'de zona comercial en CL NORAY 6 Pl:00 Pt:A 28042 MADRID  MADRID', ''),
(31, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'comercial en CL NORAY 6 Pl:00 Pt:B 28042 MADRID  MADRID', ''),
(32, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO TIERRA DE RIEGO,  Suelo Polígono 15 Parcela 56 CERRO GULLON. ARANJUEZ (MADRID)', ''),
(33, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO TIERRA DE RIEGO,  Suelo Polígono 15 Parcela 41 CERRO GULLON. ARANJUEZ (MADRID)', ''),
(34, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO. GARAJE. CL/ SANTA BARBARA, 20 ST 16. 28180 -', 'TORRELAGUNA (MADRID)'),
(35, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO.GARAJE. CL/ SANTA BARBARA, 20 ST 15. 28180 - TORRELAGUNA (MADRID)', ''),
(36, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(37, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(38, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(39, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(40, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(41, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(42, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(43, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(44, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(45, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(46, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(47, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(48, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(49, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(50, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(51, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', ''),
(52, 'U.R. SUBASTAS MADRID - MADRID', 'Celebrándose', 'PLENO DOMINIO DE GARAJE SITO EN MADRID', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `subastas`
--
ALTER TABLE `subastas`
  ADD PRIMARY KEY (`subastasId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `subastas`
--
ALTER TABLE `subastas`
  MODIFY `subastasId` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
