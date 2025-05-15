# Analyse de maquettes BIM avec Power BI

<div align="center">
  <img src="https://via.placeholder.com/800x150/0078D7/FFFFFF/?text=Analyse+de+maquettes+BIM+avec+Power+BI" alt="Bannière du projet">
</div>

<div align="center">
  <h3>
    <a href="#introduction">
      📋 Introduction
    </a>
    <span> | </span>
    <a href="#workflow">
      🔄 Workflow
    </a>
    <span> | </span>
    <a href="#dashboard">
      📊 Dashboard
    </a>
    <span> | </span>
    <a href="#import">
      📥 Import
    </a>
    <span> | </span>
    <a href="#installation">
      ⚙️ Installation
    </a>
  </h3>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=power-bi&logoColor=black" alt="Power BI">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/BIM-0099DD?style=for-the-badge&logo=autodesk&logoColor=white" alt="BIM">
</div>

---

<a name="introduction"></a>
## 📋 Introduction

Cette présentation technique vise à faciliter la prise en main de Power BI pour l'analyse de maquettes BIM. Les composants interactifs permettent de comprendre les workflows d'analyse, d'explorer un exemple de dashboard de contrôle qualité, et d'apprendre comment importer des données depuis Revit et IFC.

### Objectifs du projet

- Faciliter la prise en main de Power BI pour l'analyse BIM
- Présenter les méthodes d'importation depuis Revit et IFC
- Démontrer des exemples concrets d'analyse de maquettes numériques
- Fournir des composants interactifs pour l'apprentissage

<div align="center">
  <a href="https://VOTRE-USERNAME.github.io/powerbi-bim-demos/">
    <img src="https://via.placeholder.com/500x300/0078D7/FFFFFF/?text=Démonstration+Interactive" alt="Démo">
  </a>
</div>

---

<a name="workflow"></a>
## 🔄 Workflow d'analyse

Le processus d'analyse des maquettes BIM avec Power BI suit un workflow en 6 étapes, de la préparation des données jusqu'à la publication des tableaux de bord.

1. **Préparation des données**
   - Exportation depuis Revit via Data Exchange Connector
   - Conversion du format IFC via Autodesk Construction Cloud
   - Nettoyage préliminaire des données

2. **Import dans Power BI**
   - Connexion à la source de données
   - Sélection des tables et champs nécessaires
   - Configuration des types de données

3. **Modélisation**
   - Établissement des relations entre tables
   - Création de hiérarchies (Bâtiment > Niveau > Local)
   - Configuration des filtres croisés

<div align="center">
  <a href="https://VOTRE-USERNAME.github.io/powerbi-bim-demos/workflow">
    <img src="https://via.placeholder.com/600x300/0078D7/FFFFFF/?text=Explorer+le+Workflow+Interactif" alt="Workflow">
  </a>
</div>

---

<a name="dashboard"></a>
## 📊 Dashboard exemple

Notre dashboard d'exemple permet d'analyser en détail une maquette BIM et d'en extraire des insights importants pour le contrôle qualité.

### Fonctionnalités principales

- **Vue d'ensemble** des éléments de la maquette par catégorie
- **Analyse de conformité** des paramètres partagés
- **Détection des problèmes** de qualité par sévérité
- **Distribution spatiale** des éléments par étage

<div align="center">
  <a href="https://VOTRE-USERNAME.github.io/powerbi-bim-demos/dashboard">
    <img src="https://via.placeholder.com/600x300/0078D7/FFFFFF/?text=Explorer+le+Dashboard+Interactif" alt="Dashboard">
  </a>
</div>

---

<a name="import"></a>
## 📥 Guide d'importation

L'importation des données BIM dans Power BI peut se faire par deux méthodes principales, selon le format source de vos maquettes.

### Revit - Data Exchange Connector

Pour les maquettes au format Revit (.rvt), nous utilisons le connecteur Data Exchange qui permet d'extraire les données directement depuis Revit vers Power BI.

### IFC - Autodesk Construction Cloud

Pour les maquettes au format IFC, nous passons par la plateforme Autodesk Construction Cloud qui permet de transformer les données IFC en format exploitable par Power BI.

<div align="center">
  <a href="https://VOTRE-USERNAME.github.io/powerbi-bim-demos/import">
    <img src="https://via.placeholder.com/600x300/0078D7/FFFFFF/?text=Explorer+le+Guide+d'Importation" alt="Import">
  </a>
</div>

---

<a name="installation"></a>
## ⚙️ Installation et configuration

### Prérequis

- Node.js (v14 ou supérieur)
- npm (v6 ou supérieur)
- Power BI Desktop
- Compte Autodesk (pour ACC)
- Revit 2019 ou supérieur (pour Data Exchange Connector)

### Installation

1. Clonez ce dépôt
   ```bash
   git clone https://github.com/VOTRE-USERNAME/powerbi-bim-demos.git
