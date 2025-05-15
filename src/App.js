import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PowerBIWorkflow from './components/PowerBIWorkflow';
import BIMAnalysisExample from './components/BIMAnalysisExample';
import RevitIFCImportDemo from './components/RevitIFCImportDemo';

function App() {
  return (
    <Router basename="/powerbi-bim-demos">
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold">Analyse de maquettes BIM avec Power BI</h1>
            <p className="text-blue-100">Démos interactives pour votre présentation</p>
          </div>
        </header>
        
        <nav className="bg-white shadow-md mt-2">
          <div className="container mx-auto p-4">
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="font-medium text-blue-600 hover:text-blue-800">Accueil</Link>
              </li>
              <li>
                <Link to="/workflow" className="font-medium text-gray-600 hover:text-blue-600">Workflow d'analyse</Link>
              </li>
              <li>
                <Link to="/dashboard" className="font-medium text-gray-600 hover:text-blue-600">Dashboard exemple</Link>
              </li>
              <li>
                <Link to="/import" className="font-medium text-gray-600 hover:text-blue-600">Guide d'importation</Link>
              </li>
            </ul>
          </div>
        </nav>
        
        <main className="container mx-auto p-4 mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workflow" element={<PowerBIWorkflow />} />
            <Route path="/dashboard" element={<BIMAnalysisExample />} />
            <Route path="/import" element={<RevitIFCImportDemo />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} - Votre Nom - Démos pour présentation PowerBI BIM</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Bienvenue dans les démos interactives</h2>
      <p className="text-gray-600 mb-6">
        Ces démos illustrent l'utilisation de Power BI pour l'analyse de maquettes BIM. Vous pouvez les explorer en cliquant sur les liens ci-dessous.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-blue-800 mb-2">Workflow d'analyse</h3>
          <p className="text-gray-600 mb-4">Découvrez les étapes du processus d'analyse des données BIM avec Power BI.</p>
          <Link to="/workflow" className="block text-center py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Voir le workflow
          </Link>
        </div>
        
        <div className="bg-green-50 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-green-800 mb-2">Dashboard exemple</h3>
          <p className="text-gray-600 mb-4">Explorez un exemple de tableau de bord d'analyse de maquette BIM.</p>
          <Link to="/dashboard" className="block text-center py-2 px-4 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Voir le dashboard
          </Link>
        </div>
        
        <div className="bg-purple-50 rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold text-purple-800 mb-2">Guide d'importation</h3>
          <p className="text-gray-600 mb-4">Apprenez à importer des données depuis Revit et IFC vers Power BI.</p>
          <Link to="/import" className="block text-center py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            Voir le guide
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;