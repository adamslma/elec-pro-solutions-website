---
name: "Élec’Pro Solutions"
description: "Le Chantier clair — une présence électrique franche, lisible et rassurante."
colors:
  graphite-technique: "#11110f"
  graphite-profond: "#0c0c0b"
  graphite-footer: "#070706"
  papier-chantier: "#f1eee6"
  papier-lumineux: "#faf8f2"
  orange-signal: "#ff5329"
  orange-signal-vif: "#ff724c"
  texte-muted: "#6c6a64"
  texte-sur-graphite-secondaire: "#9d9b96"
  texte-sur-graphite-discret: "#85837e"
  texte-sur-signal-secondaire: "#42180f"
  ligne-controle-sombre: "#66645f"
  surface-verre: "rgb(255 255 255 / 0.055)"
  ligne-claire: "rgb(255 255 255 / 0.16)"
typography:
  display:
    fontFamily: "Satoshi, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(4.2rem, 7.2vw, 8rem)"
    fontWeight: 600
    lineHeight: 0.86
    letterSpacing: "-0.085em"
  headline:
    fontFamily: "Satoshi, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(3.4rem, 6.6vw, 7rem)"
    fontWeight: 600
    lineHeight: 0.91
    letterSpacing: "-0.075em"
  title:
    fontFamily: "Satoshi, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 4.2rem)"
    fontWeight: 500
    lineHeight: 0.96
    letterSpacing: "-0.065em"
  body:
    fontFamily: "Satoshi, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Satoshi, Helvetica Neue, Helvetica, Arial, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.19em"
rounded:
  tight: "0.2rem"
  field: "0.25rem"
  control: "0.35rem"
  pill: "999px"
  circle: "50%"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  section: "clamp(8rem, 14vw, 13rem)"
components:
  button-signal:
    backgroundColor: "{colors.orange-signal}"
    textColor: "{colors.graphite-technique}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "1rem 1.35rem"
    height: "3.8rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.papier-lumineux}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "1rem 1.35rem"
    height: "3.8rem"
  field:
    backgroundColor: "{colors.surface-verre}"
    textColor: "{colors.papier-lumineux}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0.8rem 0.95rem"
    height: "3.35rem"
  nav-shell:
    backgroundColor: "rgb(17 17 15 / 0.76)"
    textColor: "{colors.papier-lumineux}"
    rounded: "{rounded.pill}"
    padding: "0.5rem 0.55rem 0.5rem 1rem"
    height: "4.25rem"
---

# Design System: Élec’Pro Solutions

## Overview

**Creative North Star: "Le Chantier clair"**

Le système donne à voir un chantier organisé avant même qu'un technicien n'arrive : chaque information a une place nette, chaque contraste a une fonction et l'énergie circule sans bruit visuel. L'atmosphère est franche, robuste, précise et rassurante. La densité alterne entre de grands messages très courts et des zones techniques plus structurées, afin d'associer impact commercial et maîtrise opérationnelle.

Le vocabulaire visuel oppose des fonds graphite à des surfaces papier, puis réserve l'orange signal aux actions et aux points de tension utiles. La grille, les traits fins, les aplats et les images désaturées évoquent le plan de chantier sans basculer dans l'imagerie futuriste. Le résultat doit rester tactile et direct, jamais corporate générique, néon technologique ou artisanal rustique.

**Key Characteristics:**

- Contraste franc entre graphite profond et papier chaud.
- Orange signal rare, énergique et toujours fonctionnel.
- Typographie Satoshi massive, compacte et très lisible.
- Composition asymétrique guidée par une grille technique.
- Composants tactiles et directs, avec peu d'ornement gratuit.

## Colors

La palette fonctionne comme un chantier balisé : une base neutre stable, une surface claire accueillante et un seul signal chromatique immédiatement reconnaissable.

### Primary

- **Orange signal:** porte les appels à l'action, les repères de progression, les focus et les rares surfaces d'emphase.
- **Orange signal vif:** répond uniquement aux états interactifs et ne devient pas une seconde couleur d'accent.

### Neutral

- **Graphite technique:** fond principal, texte sur orange et structure des contrastes.
- **Graphite profond:** réserve sombre des sections de contact et des zones de forte concentration.
- **Graphite footer:** termine la page avec une profondeur supplémentaire sans introduire une nouvelle teinte.
- **Papier chantier:** fond chaud des chapitres éditoriaux et des réalisations.
- **Papier lumineux:** texte principal sur fond sombre et point le plus clair de la hiérarchie.
- **Texte muted:** texte secondaire sur papier, utilisé sans compromettre la lisibilité.
- **Texte sur graphite secondaire:** explications, libellés et navigation secondaire sur les surfaces sombres.
- **Texte sur graphite discret:** mentions légales, placeholders et informations tertiaires qui restent au-dessus du seuil AA.
- **Texte sur signal secondaire:** métadonnées et microcopie sur l'orange signal, teintées depuis le graphite plutôt que grisées par transparence.
- **Ligne de contrôle sombre:** contour accessible des champs et contrôles sur graphite.
- **Surface verre:** couche translucide des champs et surfaces flottantes sur graphite.
- **Ligne claire:** bordure structurelle sur les fonds sombres.

**The Signal Is Earned Rule.** L'orange identifie une action, un état ou une information prioritaire ; il ne remplit jamais l'interface par simple décoration.

## Typography

**Display Font:** Satoshi (avec Helvetica Neue, Helvetica, Arial et sans-serif en repli)

**Body Font:** Satoshi (avec Helvetica Neue, Helvetica, Arial et sans-serif en repli)

**Character:** Une seule famille sans-serif porte toute l'identité. Les grands écarts d'échelle, les approches négatives et les changements de graisse créent la tension entre impact, précision et proximité.

### Hierarchy

- **Display:** très grand, semi-gras, resserré et compact ; réservé au message décisif du premier écran.
- **Headline:** ample et dense ; structure les chapitres sans rivaliser avec le héros.
- **Title:** moyen à grand, plus léger ; porte les cartes, services et réalisations.
- **Body:** régulier et généreusement interligné ; explique les choix dans des colonnes courtes.
- **Label:** petit, gras, espacé et en capitales ; sert de repère technique, jamais de corps de lecture.

**The Compressed Impact Rule.** Les grands titres gagnent leur autorité par l'échelle et un rythme serré ; les paragraphes conservent au contraire un interlignage ample.

## Layout

La page repose sur des conteneurs centrés de 90 à 96rem, des grilles asymétriques en deux colonnes et des chapitres très espacés. Le héros superpose une grille technique à une composition texte-image déséquilibrée volontairement ; les services passent sur une grille de douze colonnes, tandis que la méthode, les réalisations, les témoignages et le contact utilisent des rapports de colonnes variables.

Le rythme spatial s'appuie principalement sur des pas de 0.5, 0.75, 1, 1.5 et 2rem, puis sur une respiration de chapitre fluide. Sous 1024px, les grandes compositions deviennent monocolonnes et les éléments collants reviennent dans le flux. Sous 768px, les cartes s'empilent, la navigation devient un panneau plein écran et le bouton d'appel se fixe au bord inférieur. Les titres restent expressifs mais autorisent les retours à la ligne.

**The Clear Route Rule.** Chaque section doit révéler en un coup d'œil son message principal, sa preuve et la prochaine action possible.

## Elevation & Depth

Le système est plat et structurel. La profondeur vient d'abord des ruptures de ton, des bordures fines, des voiles sur photographie, des effets de verre et des superpositions. Les ombres sont ambiantes et réservées aux objets qui flottent réellement : navigation, cartes collantes et appel mobile.

### Shadow Vocabulary

- **Navigation ambiante:** large halo sombre et doux sous la capsule translucide.
- **Carte en pile:** ombre diffuse qui clarifie la superposition des réalisations collantes.
- **Appel mobile:** double anneau sombre et ombre plus dense pour détacher l'action fixe du contenu.

**The Flat First Rule.** Une surface reste plate tant que sa fonction ne justifie pas visuellement qu'elle flotte au-dessus du document.

## Shapes

Les contenus utilisent des angles courts et techniques, des bordures minces et des silhouettes rectangulaires. Les découpes obliques apparaissent ponctuellement sur les grands médias pour évoquer une pièce calibrée ou un plan coupé. Les formes entièrement rondes sont réservées aux actions compactes, icônes, portraits et contrôles ; la navigation seule emploie une grande capsule fonctionnelle.

**The Purposeful Curve Rule.** Un arrondi signale une prise en main ou une identité compacte ; il ne sert pas à adoucir arbitrairement chaque conteneur.

## Components

### Buttons

- **Shape:** rectangle compact aux angles courts pour les actions principales ; capsule uniquement dans la navigation.
- **Primary:** surface orange signal, texte graphite et graisse forte, avec une flèche diagonale qui matérialise l'élan.
- **Hover / Focus:** légère élévation verticale, orange plus vif au survol et anneau orange externe au clavier.
- **Ghost:** fond transparent, bordure claire et inversion papier/graphite au survol.

### Cards / Containers

- **Corner Style:** angles droits pour les grilles ; grandes images parfois découpées en biais.
- **Background:** photographies assombries, graphite ou papier selon le chapitre.
- **Shadow Strategy:** pas d'ombre par défaut ; ombre uniquement lorsque les cartes se superposent.
- **Border:** trait fin et contrasté qui construit la structure.
- **Internal Padding:** de 1.35 à 2rem selon la taille de la carte.

### Inputs / Fields

- **Style:** fond blanc translucide sur graphite, bordure claire fine et rayon très court.
- **Focus:** bordure orange signal, léger voile orange et anneau externe net.
- **State:** les champs conservent des libellés visibles ; la réussite remplace le formulaire par un panneau de confirmation explicite.

### Navigation

La navigation flotte dans une capsule graphite translucide. La marque reste à gauche, les liens sont calmes et espacés au centre, et l'action orange conclut la ligne. Sur mobile, un contrôle rond ouvre un panneau sombre plein écran et l'appel immédiat devient une action fixe distincte.

### Technical Kicker

Le petit libellé en capitales espacées introduit chaque chapitre comme une annotation de plan. Il adopte l'orange sur graphite, un orange assombri sur papier et le graphite sur une surface orange.

### Accordion Method

Les panneaux partagent une structure linéaire sombre. Le panneau actif s'élargit, révèle son explication et transforme son contrôle circulaire en signal orange ; l'animation reste fluide et fonctionnelle.

## Do's and Don'ts

### Do:

- **Do** réserver l'orange aux actions, états, repères et informations réellement prioritaires.
- **Do** associer des titres compacts et expressifs à des paragraphes courts, calmes et généreusement interlignés.
- **Do** utiliser les bordures, la grille et les contrastes de surface pour rendre la structure immédiatement lisible.
- **Do** préserver une action claire par chapitre et des états de focus visibles.
- **Do** réduire ou neutraliser les animations lorsque l'utilisateur préfère moins de mouvement.

### Don't:

- **Don't** introduire une seconde couleur vive, des dégradés néon ou des effets futuristes décoratifs.
- **Don't** arrondir toutes les cartes ou transformer chaque contrôle en capsule.
- **Don't** multiplier les ombres sur des surfaces qui ne flottent pas réellement.
- **Don't** utiliser une typographie rustique, manuscrite ou décorative pour simuler l'artisanat.
- **Don't** remplir les grands espaces : la respiration fait partie de la confiance et de la clarté.
