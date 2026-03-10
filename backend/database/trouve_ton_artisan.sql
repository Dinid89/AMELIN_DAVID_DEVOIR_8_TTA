-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mar. 10 mars 2026 à 09:51
-- Version du serveur : 8.4.7
-- Version de PHP : 8.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `trouve_ton_artisan`
--

-- --------------------------------------------------------

--
-- Structure de la table `artisan`
--

DROP TABLE IF EXISTS `artisan`;
CREATE TABLE IF NOT EXISTS `artisan` (
  `id_artisan` int NOT NULL AUTO_INCREMENT,
  `nom_artisan` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_specialite` int NOT NULL,
  `note_artisan` decimal(2,1) NOT NULL,
  `rue_artisan` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `codepostal_artisan` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ville_artisan` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apropos_artisan` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_artisan` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `site_artisan` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo_artisan` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `top_artisan` tinyint(1) NOT NULL,
  PRIMARY KEY (`id_artisan`),
  UNIQUE KEY `email_artisan` (`email_artisan`),
  UNIQUE KEY `site_artisan` (`site_artisan`),
  KEY `id_specialité` (`id_specialite`)
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `artisan`
--

INSERT INTO `artisan` (`id_artisan`, `nom_artisan`, `id_specialite`, `note_artisan`, `rue_artisan`, `codepostal_artisan`, `ville_artisan`, `apropos_artisan`, `email_artisan`, `site_artisan`, `photo_artisan`, `top_artisan`) VALUES
(19, 'Boucherie Dumont', 1, 4.5, '', '', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'boucherie.dumond@gmail.com', NULL, '/artisans/boucherieDumont.jpg', 0),
(54, 'Au pain chaud', 2, 4.8, '', '', 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'aupainchaud@hotmail.com', NULL, '/artisans/aupainchaud.jpg', 1),
(55, 'Chocolaterie Labbé', 3, 4.9, '', '', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', '/artisans/chocolaterieLabee.jpg', 1),
(56, 'Traiteur Truchon', 4, 4.1, '', '', 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', '/artisans/traiteurTruchon.jpg', 0),
(57, 'Orville Salmons', 5, 5.0, '', '', 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'o-salmons@live.com', NULL, '/artisans/chauffagiste.jpg', 1),
(58, 'Mont Blanc Eléctricité', 6, 4.5, '', '', 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', '/artisans/electricienMontBlanc.jpg', 0),
(59, 'Boutot & fils', 7, 4.7, '', '', 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', '/artisans/menuisierBoutot.jpg', 0),
(60, 'Vallis Bellemare', 8, 4.0, '', '', 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', '/artisans/plombierBellemare.jpg', 0),
(61, 'Claude Quinn', 9, 4.2, '', '', 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'claude.quinn@gmail.com', NULL, '/artisans/bijoutierQuinn.jpg', 0),
(62, 'Amitee Lécuyer', 10, 4.5, '', '', 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', '/artisans/couturierLecuyer.jpg', 0),
(63, 'Ernest Carignan', 11, 5.0, '', '', 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'e-carigan@hotmail.com', NULL, '/artisans/ferronierCarignan.jpg', 0),
(64, 'Royden Charbonneau', 12, 3.8, '', '', 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'r.charbonneau@gmail.com', NULL, '/artisans/coiffeurCharbonneau.jpg', 0),
(65, 'Leala Dennis', 12, 3.8, '', '', 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'l.dennis@hotmail.fr', 'https://coiffure-leala-chambery.fr', '/artisans/coiffeurDennis.jpg', 0),
(66, 'C\'est sup\'hair', 12, 4.1, '', '', 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'sup-hair@gmail.com', 'https://sup-hair.fr', '/artisans/coiffeurSuphair.jpg', 0),
(67, 'Le monde des fleurs', 13, 4.0, '', '', 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', '/artisans/fleuristeMdf.jpg', 0),
(68, 'Valérie Laderoute', 14, 4.0, '', '', 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'v-laredoute@gmail.com', NULL, '/artisans/toiletteurLaderoute.jpg', 0),
(69, 'CM Graphisme', 15, 4.4, '', '', 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. \r\n', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', '/artisans/webdesignCM.jpg', 0);

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

DROP TABLE IF EXISTS `categorie`;
CREATE TABLE IF NOT EXISTS `categorie` (
  `id_categorie` int NOT NULL AUTO_INCREMENT,
  `nom_categorie` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id_categorie`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`id_categorie`, `nom_categorie`) VALUES
(1, 'Bâtiment'),
(2, 'Services'),
(3, 'Fabrication'),
(4, 'Alimentation');

-- --------------------------------------------------------

--
-- Structure de la table `specialite`
--

DROP TABLE IF EXISTS `specialite`;
CREATE TABLE IF NOT EXISTS `specialite` (
  `id_specialite` int NOT NULL AUTO_INCREMENT,
  `nom_specialite` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_categorie` int NOT NULL,
  PRIMARY KEY (`id_specialite`),
  KEY `id_categorie` (`id_categorie`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `specialite`
--

INSERT INTO `specialite` (`id_specialite`, `nom_specialite`, `id_categorie`) VALUES
(1, 'Boucher', 4),
(2, 'Boulanger', 4),
(3, 'Chocolatier', 4),
(4, 'Traiteur', 4),
(5, 'Chauffagiste', 1),
(6, 'Electricien', 1),
(7, 'Menuisier', 3),
(8, 'Plombier', 1),
(9, 'Bijoutier', 3),
(10, 'Couturier', 3),
(11, 'Ferronier', 3),
(12, 'Coiffeur', 2),
(13, 'Fleuriste', 2),
(14, 'Toiletteur', 2),
(15, 'Webdesign', 2);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `artisan`
--
ALTER TABLE `artisan`
  ADD CONSTRAINT `artisan_ibfk_1` FOREIGN KEY (`id_specialite`) REFERENCES `specialite` (`id_specialite`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Contraintes pour la table `specialite`
--
ALTER TABLE `specialite`
  ADD CONSTRAINT `specialite_ibfk_1` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`id_categorie`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
