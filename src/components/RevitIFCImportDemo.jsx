import React, { useState } from 'react';

const RevitIFCImportDemo = () => {
  const [activeTab, setActiveTab] = useState('revit');
  const [step, setStep] = useState(1);
  
  const RevitSteps = [
    {
      title: "Installation du Data Exchange Connector",
      content: "Téléchargez et installez l'extension Data Exchange Connector depuis Autodesk App Store compatible avec votre version de Revit.",
      image: "https://via.placeholder.com/500x300?text=Installation+du+Connector"
    },
    {
      title: "Configuration du Connector dans Revit",
      content: "Ouvrez votre maquette Revit et accédez à l'onglet Add-ins > External Tools > Data Exchange. Configurez les paramètres d'exportation en sélectionnant les catégories d'éléments et les propriétés pertinentes pour votre analyse.",
      image: "https://via.placeholder.com/500x300?text=Configuration+dans+Revit"
    },
    {
      title: "Exportation des données",
      content: "Lancez l'exportation et enregistrez le fichier au format .json ou .xlsx selon l'option disponible. Vérifiez que toutes les données nécessaires ont été exportées correctement.",
      image: "https://via.placeholder.com/500x300?text=Exportation+des+données"
    },
    {
      title: "Importation dans Power BI",
      content: "Dans Power BI Desktop, utilisez 'Obtenir les données' > 'Fichier' > JSON ou Excel selon le format d'export. Naviguez jusqu'au fichier exporté et importez-le.",
      image: "https://via.placeholder.com/500x300?text=Import+dans+Power+BI"
    },
    {
      title: "Transformation et chargement",
      content: "Utilisez Power Query pour nettoyer et transformer les données. Créez les relations nécessaires entre les tables pour établir votre modèle de données avant de charger dans Power BI.",
      image: "https://via.placeholder.com/500x300?text=Transformation+des+données"
    }
  ];
  
  const IFCSteps = [
    {
      title: "Préparation du fichier IFC",
      content: "Assurez-vous que votre fichier IFC est valide et conforme au standard (IFC2x3 ou IFC4). Validez-le si nécessaire avec un outil comme le validateur IFC de buildingSMART.",
      image: "https://via.placeholder.com/500x300?text=Préparation+IFC"
    },
    {
      title: "Chargement dans Autodesk Construction Cloud",
      content: "Connectez-vous à votre compte ACC et importez le fichier IFC dans votre projet. Vérifiez que le modèle est correctement chargé avec toutes ses propriétés.",
      image: "https://via.placeholder.com/500x300?text=Chargement+ACC"
    },
    {
      title: "Configuration de Data Exchange",
      content: "Dans ACC, configurez Data Exchange pour extraire les données pertinentes de votre modèle IFC. Sélectionnez les propriétés et éléments que vous souhaitez analyser.",
      image: "https://via.placeholder.com/500x300?text=Configuration+Data+Exchange"
    },
    {
      title: "Exportation vers Power BI",
      content: "Utilisez l'option d'exportation vers Power BI dans Data Exchange. Alternativement, exportez au format CSV ou Excel pour une importation manuelle.",
      image: "https://via.placeholder.com/500x300?text=Exportation+vers+Power+BI"
    },
    {
      title: "Configuration du modèle de données",
      content: "Dans Power BI, structurez votre modèle de données en créant les relations entre tables et en définissant les hiérarchies spatiales (Site > Bâtiment > Étage > Espace).",
      image: "https://via.placeholder.com/500x300?text=Configuration+du+modèle"
    }
  ];
  
  const currentSteps = activeTab === 'revit' ? RevitSteps : IFCSteps;
  const currentStep = currentSteps[step - 1];

  const nextStep = () => {
    if (step < currentSteps.length) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
    setStep(1);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* En-tête */}
      <div className="bg-blue-600 p-4 text-white">
        <h2 className="text-xl font-bold">Importation de données BIM dans Power BI</h2>
        <p className="text-sm opacity-80">Guide étape par étape pour importer des données depuis Revit et IFC</p>
      </div>
      
      {/* Onglets */}
      <div className="flex border-b">
        <button 
          className={`flex-1 py-3 px-4 font-medium ${activeTab === 'revit' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => switchTab('revit')}
        >
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Revit - Data Exchange Connector
          </div>
        </button>
        <button 
          className={`flex-1 py-3 px-4 font-medium ${activeTab === 'ifc' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
          onClick={() => switchTab('ifc')}
        >
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            IFC - Autodesk Construction Cloud
          </div>
        </button>
      </div>
      
      {/* Indicateur de progression */}
      <div className="px-6 pt-6">
        <div className="flex items-center justify-between mb-2">
          {currentSteps.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  i + 1 === step ? 'bg-blue-600 text-white' : 
                  i + 1 < step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}
              >
                {i + 1 < step ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <div className={`absolute mt-10 text-xs text-center max-w-[80px] ${i + 1 === step ? 'font-semibold text-blue-600' : 'text-gray-500'}`}>
                {i === 0 ? 'Prép.' : i === currentSteps.length - 1 ? 'Config.' : `Étape ${i + 1}`}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300 ease-in-out" 
            style={{ width: `${(step / currentSteps.length) * 100}%` }}
          />
        </div>
      </div>
      
      {/* Contenu de l'étape */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{currentStep.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600 mb-4">{currentStep.content}</p>
            
            {activeTab === 'revit' && step === 4 && (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      Assurez-vous que les données importées contiennent bien les paramètres partagés et les propriétés personnalisées définis dans Revit.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'ifc' && step === 1 && (
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-blue-700">
                      Utilisez des outils comme le validateur IFC de buildingSMART pour vérifier que votre fichier IFC est structuré correctement avant de l'importer.
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-700 mb-2">Points clés:</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {activeTab === 'revit' ? (
                  <>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Filtrez les données directement à la source pour une meilleure performance
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Exportez dans un format structuré (JSON de préférence)
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Vérifiez l'exhaustivité des paramètres partagés
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Vérifiez les Psets et propriétés standardisées IFC
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Exploitez la hiérarchie spatiale IFC (IfcSite, IfcBuilding, etc.)
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Utilisez ACC pour faciliter le travail collaboratif
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <img 
              src={currentStep.image} 
              alt={currentStep.title}
              className="w-full h-auto rounded-lg shadow-md" 
            />
            <p className="text-xs text-gray-500 mt-2 text-center italic">Figure: {currentStep.title}</p>
          </div>
        </div>
      </div>
      
      {/* Boutons de navigation */}
      <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-t">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className={`px-4 py-2 rounded-md font-medium ${
            step === 1 
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          }`}
        >
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Précédent
          </span>
        </button>
        
        <div className="text-sm text-gray-500">
          Étape {step} sur {currentSteps.length}
        </div>
        
        <button
          onClick={nextStep}
          disabled={step === currentSteps.length}
          className={`px-4 py-2 rounded-md font-medium ${
            step === currentSteps.length 
            ? 'bg-green-100 text-green-800 cursor-not-allowed' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
          }`}
        >
          <span className="flex items-center">
            {step === currentSteps.length ? (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Terminé
              </>
            ) : (
              <>
                Suivant
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default RevitIFCImportDemo;