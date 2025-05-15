import React, { useState } from 'react';

const BIMAnalysisExample = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Exemple de données pour le dashboard
  const bimData = {
    categoryCount: {
      "Murs": 217,
      "Fenêtres": 1648,
      "Portes": 21,
      "Meneaux de murs-rideaux": 2077,
      "Panneaux de murs-rideaux": 2333,
      "Plafonds": 7,
      "Toits": 5,
      "Ossature": 59
    },
    parameterCompletion: {
      "IDN_CODE_IDN": 100,
      "IfcExportAs": 62,
      "IDN_REFERENCE": 42,
      "IDN_CODE_PIECE": 25,
      "IDN_CODE_CHANGEMENT_CLIMATIQUE": 58
    },
    qualityIssues: [
      { id: 1, severity: "Critique", description: "Éléments non codifiés (suspentes)", elements: "6533905,6534169,6534177" },
      { id: 2, severity: "Moyen", description: "Éléments non codifiés (MR)", elements: "6285585,6285593,6285625" },
      { id: 3, severity: "Mineur", description: "Éléments non codifiés (Isolants)", elements: "6523453,6522884" },
      { id: 4, severity: "Critique", description: "Paramètre IDN_CODE_PIECE manquant", elements: "Multiple" },
      { id: 5, severity: "Moyen", description: "IfcExportAs non renseigné", elements: "107 éléments" }
    ],
    elementsByFloor: {
      "B_1S": 545,
      "B_VS": 320,
      "B_RC": 860,
      "B_1E": 784,
      "B_2E": 752,
      "B_3E": 725,
      "B_4E": 710,
      "B_5E": 698,
      "B_6E": 650,
      "B_7E": 212,
      "B_TT": 126
    }
  };
  
  // Calcul des totaux pour KPI
  const totalElements = Object.values(bimData.categoryCount).reduce((sum, count) => sum + count, 0);
  const completionAverage = Object.values(bimData.parameterCompletion).reduce((sum, val) => sum + val, 0) / Object.keys(bimData.parameterCompletion).length;
  const criticalIssues = bimData.qualityIssues.filter(issue => issue.severity === "Critique").length;
  
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <h1 className="text-2xl font-bold text-blue-800 mb-2">Analyse de maquette BIM avec Power BI</h1>
        <p className="text-gray-600">Exemple de dashboard d'analyse de maquette basé sur des données extraites via REVIT et IFC</p>
      </div>
      
      {/* Navigation */}
      <div className="flex mb-4 bg-white rounded-lg shadow overflow-hidden">
        <button 
          className={`py-3 px-6 font-medium ${activeTab === 'dashboard' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          onClick={() => setActiveTab('dashboard')}
        >
          Dashboard
        </button>
        <button 
          className={`py-3 px-6 font-medium ${activeTab === 'quality' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          onClick={() => setActiveTab('quality')}
        >
          Contrôle qualité
        </button>
        <button 
          className={`py-3 px-6 font-medium ${activeTab === 'distribution' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
          onClick={() => setActiveTab('distribution')}
        >
          Distribution
        </button>
      </div>
      
      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 mb-1">Nombre total d'éléments</div>
          <div className="text-2xl font-bold text-blue-800">{totalElements}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 mb-1">Taux de complétion moyen</div>
          <div className="text-2xl font-bold text-green-600">{completionAverage.toFixed(1)}%</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 mb-1">Problèmes critiques</div>
          <div className="text-2xl font-bold text-red-600">{criticalIssues}</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-sm font-medium text-gray-500 mb-1">Nombre d'étages</div>
          <div className="text-2xl font-bold text-purple-600">{Object.keys(bimData.elementsByFloor).length}</div>
        </div>
      </div>
      
      {/* Contenu principal basé sur l'onglet actif */}
      {activeTab === 'dashboard' && (
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium text-gray-700 mb-3">Nombre d'éléments par catégorie</h3>
            <div className="h-64 flex items-end space-x-2">
              {Object.entries(bimData.categoryCount).map(([category, count]) => (
                <div key={category} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full bg-blue-500 rounded-t-sm" 
                    style={{ height: `${(count / Math.max(...Object.values(bimData.categoryCount))) * 200}px` }}
                  ></div>
                  <div className="text-xs font-medium text-gray-600 mt-1 truncate w-full text-center">{category}</div>
                  <div className="text-xs text-gray-500">{count}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium text-gray-700 mb-3">Taux de complétion des paramètres clés</h3>
            {Object.entries(bimData.parameterCompletion).map(([param, rate]) => (
              <div key={param} className="mb-3">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-600">{param}</span>
                  <span className="text-sm font-medium text-gray-600">{rate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className={`h-2.5 rounded-full ${
                      rate >= 80 ? 'bg-green-500' : rate >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`} 
                    style={{ width: `${rate}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {activeTab === 'quality' && (
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-medium text-gray-700 mb-3">Problèmes de qualité détectés</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sévérité</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Éléments</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bimData.qualityIssues.map((issue) => (
                  <tr key={issue.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{issue.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        issue.severity === "Critique" ? 'bg-red-100 text-red-800' : 
                        issue.severity === "Moyen" ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-green-100 text-green-800'
                      }`}>
                        {issue.severity}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{issue.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{issue.elements}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {activeTab === 'distribution' && (
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium text-gray-700 mb-3">Distribution des éléments par étage</h3>
            <div className="h-64">
              <div className="flex h-full items-end space-x-1">
                {Object.entries(bimData.elementsByFloor).map(([floor, count]) => (
                  <div key={floor} className="flex flex-col items-center flex-1" title={`${floor}: ${count} éléments`}>
                    <div 
                      className="w-full bg-gradient-to-t from-blue-500 to-blue-300 rounded-t-sm relative group"
                      style={{ height: `${(count / Math.max(...Object.values(bimData.elementsByFloor))) * 200}px` }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-blue-800 bg-opacity-70 text-white text-xs font-bold rounded-t-sm">
                        {count}
                      </div>
                    </div>
                    <div className="text-xs font-medium text-gray-600 mt-1 rotate-45 origin-left translate-y-6">{floor}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-medium text-gray-700 mb-3">Répartition de la sévérité des problèmes</h3>
            <div className="flex justify-center space-x-8">
              {['Critique', 'Moyen', 'Mineur'].map(severity => {
                const count = bimData.qualityIssues.filter(issue => issue.severity === severity).length;
                const percentage = (count / bimData.qualityIssues.length) * 100;
                
                return (
                  <div key={severity} className="flex flex-col items-center">
                    <div className="relative w-32 h-32">
                      <svg className="w-32 h-32" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#e5e7eb"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke={severity === 'Critique' ? '#ef4444' : severity === 'Moyen' ? '#eab308' : '#22c55e'}
                          strokeWidth="3"
                          strokeDasharray={`${percentage}, 100`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <div className="text-2xl font-bold">{count}</div>
                        <div className="text-xs">{percentage.toFixed(0)}%</div>
                      </div>
                    </div>
                    <div className="mt-2 font-medium">{severity}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
      
      {/* Footer avec légende */}
      <div className="bg-white p-4 rounded-lg shadow mt-4 text-sm text-gray-500">
        <p>Ce tableau de bord est un exemple de ce qui peut être réalisé avec Power BI pour l'analyse de maquettes BIM.</p>
        <p>Les données utilisées ici sont basées sur un exemple de maquette de bâtiment à usage mixte.</p>
      </div>
    </div>
  );
};

export default BIMAnalysisExample;