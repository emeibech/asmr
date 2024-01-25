import { useState } from 'react';
import './App.css';
import Asmr from './components/Asmr';
import type { Name } from './components/Asmr';

function App() {
  const [activeTab, setActiveTab] = useState<Name>('cafe');

  return (
    <div
      className={`
      svh grid grid-cols-1 grid-rows-[8fr_1fr]
      bg-image bg-cafe
    `}
    >
      <main className="flex justify-center items-end">
        <Asmr name={activeTab} setActiveTab={setActiveTab} />
      </main>
      <footer
        className={`
         text-white opacity-75 text-sm flex justify-center items-end py-4
      `}
      >
        Copyright © 2024 emeibech asmr. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
