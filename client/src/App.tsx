import NewsLetter from './components/news-letter/NewsLetter';
import ResultsSummary from './components/results-summary/ResultsSummary';
import CreditCard from './components/credit-card/CreditCard';
import ExpensesChart from './components/expenses-chart/ExpensesChart';
import NewsHomepage from './components/news-homepage/NewsHomepage';
import ProductPreview from './components/product-preview/ProductPreview';
import NotificationPage from './components/notification-page/NotificationPage';

import newsLetterPreview from './assets/news-letter/images/desktop-preview.jpg';
import resultsSummaryPreview from './assets/results-summary/images/desktop-preview.jpg';
import creditCardPreview from './assets/credit-card/images/desktop-preview.jpg';
import productPreviewPreview from './assets/product-preview/images/desktop-preview.jpg';
import expensesChartPreview from './assets/expenses-chart/images/desktop-preview.jpg';
import newsHomepagePreview from './assets/news-homepage/images/desktop-preview.jpg';
import notificationPagePreview from './assets/notification-page/images/desktop-preview.jpg';

import { EyeIcon, PaperAirplaneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

import { useState } from 'react';

type Difficulty = 'newbie' | 'junior' | 'intermediate' | 'advanced' | 'guru';

type Project = {
  name: string;
  id: string;
  component: JSX.Element;
  preview: string;
  difficulty: Difficulty;
  url: string;
};

const Header = ({
  projects,
  handleActiveTab,
  headerColorSelect,
  difficulty,
}: {
  projects: Project[];
  handleActiveTab: (project?: Project) => void;
  headerColorSelect: (
    difficulty: Difficulty,
  ) => '' | 'border-green-500' | 'border-yellow-600' | 'border-orange-500' | 'border-red-500' | 'border-black';
  difficulty: Difficulty;
}) => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(!menuActive);

  return (
    <header
      className={`${headerColorSelect(
        difficulty,
      )} " bg-gradient-to-r from-teal-400 via-cyan-500 to-violet-600 border-b-2 shadow-xl border-solid pt-1 font-bold text-white text-2xl"`}
    >
      <nav className="flex bg-black justify-between items-center w-full relative p-2">
        <div onClick={() => handleActiveTab()} className="cursor-pointer hover:scale-105">
          Bundler
        </div>

        <button className="bg-red-500 hover:scale-105 p-2" onClick={toggleMenu}>
          {menuActive ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
        </button>

        <ul className={menuActive ? 'flex flex-col bg-cyan-600 gap-4 absolute z-50 top-16 right-0 p-4' : 'hidden'}>
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
      preview: newsLetterPreview,
      difficulty: 'junior',
      url: 'https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv',
    },
    {
      name: 'Results Summary',
      id: 'resultssummary',
      component: <ResultsSummary />,
      preview: resultsSummaryPreview,
      difficulty: 'newbie',
      url: 'https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV',
    },
    {
      name: 'Credit Card',
      id: 'creditcard',
      component: <CreditCard />,
      preview: creditCardPreview,
      difficulty: 'junior',
      url: 'https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw',
    },
    {
      name: 'Product Preview',
      id: 'productpreview',
      component: <ProductPreview />,
      preview: productPreviewPreview,
      difficulty: 'newbie',
      url: 'https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa',
    },
    {
      name: 'Expenses Chart',
      id: 'expenseschart',
      component: <ExpensesChart />,
      preview: expensesChartPreview,
      difficulty: 'junior',
      url: 'https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt',
    },
    {
      name: 'News Homepage',
      id: 'newshomepage',
      component: <NewsHomepage />,
      preview: newsHomepagePreview,
      difficulty: 'junior',
      url: 'https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl',
    },
    {
      name: 'Notification Page',
      id: 'notificationpage',
      component: <NotificationPage />,
      preview: notificationPagePreview,
      difficulty: 'junior',
      url: 'https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC',
    },
  ];

  const colorSelect = (difficulty: Difficulty) => {
    switch (difficulty) {
      case 'newbie':
        return 'bg-green-500';
      case 'junior':
        return 'bg-yellow-600';
      case 'intermediate':
        return 'bg-orange-500';
      case 'advanced':
        return 'bg-red-500';
      case 'guru':
        return 'bg-black';
      default:
        return 'bg-gradient-t-r from-teal-500 to-cyan-600';
    }
  };

  const shadowColorSelect = (difficulty: Difficulty) => {
    switch (difficulty) {
      case 'newbie':
        return 'shadow-green-500 hover:shadow-green-500';
      case 'junior':
        return 'shadow-yellow-600 hover:shadow-yellow-600';
      case 'intermediate':
        return 'shadow-orange-500 hover:shadow-orange-500';
      case 'advanced':
        return 'shadow-red-500 hover:shadow-red-500';
      case 'guru':
        return 'shadow-black hover:shadow-black';
      default:
        return '';
    }
  };

  const headerColorSelect = (difficulty: Difficulty) => {
    switch (difficulty) {
      case 'newbie':
        return 'border-green-500';
      case 'junior':
        return 'border-yellow-600';
      case 'intermediate':
        return 'border-orange-500';
      case 'advanced':
        return 'border-red-500';
      case 'guru':
        return 'border-black';
      default:
        return '';
    }
  };

  return (
    <>
      <Header
        projects={projects}
        handleActiveTab={handleActiveTab}
        headerColorSelect={headerColorSelect}
        difficulty={activeTab ? activeTab.difficulty : 'guru'}
      />
      <div className="h-screen">
        {activeTab ? (
          activeTab.component
        ) : (
          <div className="min-h-screen bg-slate-600 font-bold text-white p-2 flex justify-center items-center py-4">
            <ul className="grid grid-cols-1 sm:grid-cols-3 max-w-7xl gap-2">
              {projects.map((p) => (
                <li
                  className={`${shadowColorSelect(
                    p.difficulty,
                  )} " rounded-xl hover:shadow-xl shadow-md overflow-hidden"`}
                  key={p.id}
                >
                  <div className="relative group">
                    <img src={p.preview} className=" rounded-t-xl" />
                    <div className="hidden group-hover:flex absolute top-0 bottom-0 right-0 left-0 bg-black/30 justify-center items-center rounded-t-xl">
                      <button
                        onClick={() => handleActiveTab(p)}
                        className="bg-gradient-to-r from-cyan-500 hover:from-cyan-400 hover:to-teal-500 to-teal-600 border-2 border-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out p-2 cursor-pointer"
                      >
                        {<EyeIcon className="h-6 w-6" />}
                      </button>
                    </div>
                  </div>
                  <h2 className={`${colorSelect(p.difficulty)} p-4 rounded-b-xl flex justify-between`}>
                    <span>{p.name}</span>
                    <a className="hover:scale-110 rounded-full" target="_blank" href={p.url}>
                      {<PaperAirplaneIcon className="h-6 w-6" />}
                    </a>
                  </h2>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
