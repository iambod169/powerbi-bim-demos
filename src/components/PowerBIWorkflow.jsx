import React, { useState, useEffect } from 'react';

const PowerBIWorkflow = () => {
  const [activeStep, setActiveStep] = useState(1);
  const totalSteps = 6;
  const [showTip, setShowTip] = useState(false);

  const nextStep = () => {
    if (activeStep < totalSteps) {
      setActiveStep(activeStep + 1);
    }
  };

  const prevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  useEffect(() => {
    // Afficher le conseil pour certaines étapes
    if (activeStep === 2 || activeStep === 4) {
      setShowTip(true);
    } else {
      setShowTip(false);
    }
  }, [activeStep]);
  const steps = [
    {
      id: 1,
      title: "Préparation des données",
      description: "Préparation et nettoyage des données issues de la maquette BIM",
      tasks: [
        "Exportation depuis Revit via Data Exchange Connector",
        "Conversion du format IFC via Autodesk Construction Cloud",
        "Nettoyage préliminaire des données (filtrage des éléments pertinents)"
      ],
      icon: "📊"
    },
    {
      id: 2,
      title: "Import dans Power BI",
      description: "Import des données préparées dans Power BI Desktop",
      tasks: [
        "Connexion à la source de données",
        "Sélection des tables et champs nécessaires",
        "Configuration des types de données et filtres initiaux"
      ],
      icon: "🔄"
    },
    {
      id: 3,
      title: "Modélisation",
      description: "Création du modèle de données relationnel",
      tasks: [
        "Établissement des relations entre tables",
        "Création de tables de dates pour l'analyse temporelle",
        "Définition des hiérarchies (Bâtiment > Niveau > Local)"
      ],
      icon: "🔗"
    },
    {
      id: 4,
      title: "Mesures et calculs",
      description: "Création des mesures DAX pour l'analyse BIM",
      tasks: [
        "Calculs de conformité et contrôle qualité",
        "Agrégations par catégories d'éléments",
        "Mesures comparatives entre versions"
      ],
      icon: "🧮"
    },
    {
      id: 5,
      title: "Visualisation",
      description: "Création des tableaux de bord et rapports",
      tasks: [
        "Tableaux/matrices pour les données détaillées",
        "Graphiques pour l'analyse qualitative et quantitative",
        "Filtres et segments pour l'exploration interactive"
      ],
      icon: "📈"
    },
    {
      id: 6,
      title: "Publication et partage",
      description: "Diffusion des analyses auprès des équipes",
      tasks: [
        "Publication sur Power BI Service",
        "Configuration des actualisations programmées",
        "Partage sécurisé avec les parties prenantes"
      ],
      icon: "🌐"
    }
  ];

  const activeStepData = steps.find(step => step.id === activeStep);

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-blue-800 mb-6 text-center">Workflow d'analyse de maquettes BIM avec Power BI</h1>
      
      {/* Barre de progression */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
        <div 
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-in-out" 
          style={{ width: `${(activeStep / totalSteps) * 100}%` }}
        ></div>
      </div>
      
      {/* Étapes numérotées */}
      <div className="flex justify-between mb-8">
        {steps.map(step => (
          <div 
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${activeStep >= step.id ? 'opacity-100' : 'opacity-50'}`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-2 ${activeStep >= step.id ? 'bg-blue-600' : 'bg-gray-400'}`}>
              {step.id}
            </div>
            <span className="text-xs text-center font-medium max-w-[80px]">{step.title}</span>
          </div>
        ))}
      </div>
      
      {/* Contenu de l'étape active */}
      <div className="flex-grow bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex items-center mb-4">
          <span className="text-4xl mr-4">{activeStepData.icon}</span>
          <div>
            <h2 className="text-xl font-bold text-gray-800">{activeStepData.title}</h2>
            <p className="text-gray-600">{activeStepData.description}</p>
          </div>
        </div>
        
        <ul className="mt-4 space-y-3">
          {activeStepData.tasks.map((task, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mr-3">
                {index + 1}
              </span>
              <span className="text-gray-700">{task}</span>
            </li>
          ))}
        </ul>
        
        {activeStep === 2 && showTip && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">Conseil pour l'import</h3>
            <p className="text-sm text-gray-700">
              Lorsque vous importez des données Revit, filtrez les éléments directement à la source plutôt qu'après l'import pour optimiser les performances de Power BI.
            </p>
          </div>
        )}
        
        {activeStep === 4 && showTip && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-800 mb-2">Astuce pour les mesures DAX</h3>
            <p className="text-sm text-gray-700">
              Créez des mesures de base réutilisables pour calculer les totaux, pourcentages et ratios par catégorie d'éléments. Cela simplifiera vos calculs plus complexes.
            </p>
          </div>
        )}
      </div>
      
      {/* Boutons de navigation */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={activeStep === 1}
          className={`px-4 py-2 rounded-lg font-medium ${activeStep === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-100 text-blue-700 hover:bg-blue-200'}`}
        >
          Précédent
        </button>
        
        <button
          onClick={nextStep}
          disabled={activeStep === totalSteps}
          className={`px-4 py-2 rounded-lg font-medium ${activeStep === totalSteps ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default PowerBIWorkflow;