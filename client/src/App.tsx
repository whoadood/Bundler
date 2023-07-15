import { act } from 'react-dom/test-utils';
import NewsLetter from './components/news-letter/NewsLetter';

import { useState } from 'react';

type Project = {
  name: string;
  id: string;
  component: JSX.Element;
};

const Header = ({
  projects,
  handleActiveTab,
}: {
  projects: Project[];
  handleActiveTab: (project?: Project) => void;
}) => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(!menuActive);
  const navigation = ['home', 'project1', 'project2'];

  return (
    <header className="bg-gradient-to-r from-teal-500 to-cyan-600 shadow-xl font-bold text-white text-2xl">
      <nav className="flex justify-between w-full relative p-4">
        <div onClick={() => handleActiveTab()} className="cursor-pointer hover:scale-105">
          Bundler
        </div>

        <button className="bg-red-500 hover:scale-105" onClick={toggleMenu}>
          {menuActive ? 'x' : 'menu'}
        </button>

        <ul className={menuActive ? 'flex flex-col bg-cyan-600 gap-4 absolute top-12 right-0 p-4' : 'hidden'}>
          {projects.map((n) => (
            <li onClick={() => handleActiveTab(n)} className="hover:scale-105 cursor-pointer" key={n.id}>
              {n.name.toUpperCase()}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

function App() {
  const [count, setCount] = useState(0);
  const [activeTab, setActiveTab] = useState<Project | null>(null);

  const handleActiveTab = (project?: Project) => {
    if (!project) {
      setActiveTab(null);
      return;
    }
    setActiveTab(project);
  };

  const projects: Project[] = [
    {
      name: 'News Letter',
      id: 'newsletter',
      component: <NewsLetter />,
    },
  ];

  return (
    <>
      <Header projects={projects} handleActiveTab={handleActiveTab} />
      <div className="h-screen bg-slate-400">
        {activeTab ? (
          activeTab.component
        ) : (
          <div className="h-screen bg-slate-700 font-bold text-white flex justify-center items-center">
            <span className="text-4xl">loading</span>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
