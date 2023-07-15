import Attribution from '../general/Attribution';
import ReactionIcon from '../../assets/results-summary/images/icon-reaction.svg';
import MemoryIcon from '../../assets/results-summary/images/icon-memory.svg';
import VerbalIcon from '../../assets/results-summary/images/icon-verbal.svg';
import VisualIcon from '../../assets/results-summary/images/icon-visual.svg';

type SummaryField = {
  name: string;
  icon: string;
  score: number;
  total: number;
};

type Data = {
  result: number;
  totalEntries: number;
  outLook: {
    title: string;
    text: string;
  };
  summary: {
    reaction: SummaryField;
    memory: SummaryField;
    verbal: SummaryField;
    visual: SummaryField;
  };
};

function SummaryItem({ field }: { field: SummaryField }) {
  const colorSelect = (name: string) => {
    switch (name.toLowerCase()) {
      case 'reaction':
        return 'text-lightRed bg-lightRed/10';
      case 'memory':
        return 'text-orangeyYellow bg-orangeyYellow/10';
      case 'verbal':
        return 'text-greenTeal bg-greenTeal/10';
      case 'visual':
        return 'text-cobaltBlue bg-cobaltBlue/10';
      default:
        return;
    }
  };

  return (
    <li className={`${colorSelect(field.name)} " flex flex-row items-center justify-between px-4 py-2 rounded "`}>
      <h3 className="flex gap-3">
        <img className="h-6 w-6" src={field.icon} />
        <span>{field.name}</span>
      </h3>
      <p className="text-femGrey">
        <span className="text-black">{field.score}</span> / <span>{field.total}</span>
      </p>
    </li>
  );
}

function ResultsSummary({
  data = {
    result: 76,
    totalEntries: 100,
    outLook: {
      title: 'Great',
      text: 'You scored higher than 65% of the people who have taken these tests.',
    },
    summary: {
      reaction: {
        name: 'Reaction',
        icon: ReactionIcon,
        score: 80,
        total: 100,
      },
      memory: {
        name: 'Memory',
        icon: MemoryIcon,
        score: 92,
        total: 100,
      },
      verbal: {
        name: 'Verbal',
        icon: VerbalIcon,
        score: 61,
        total: 100,
      },
      visual: {
        name: 'Visual',
        icon: VisualIcon,
        score: 72,
        total: 100,
      },
    },
  },
}: {
  data: Data;
}) {
  const summaryFields = [data.summary.reaction, data.summary.memory, data.summary.verbal, data.summary.visual];

  return (
    <main className="bg-gray-200 h-screen flex flex-col items-center font-bold justify-center">
      <div className="flex items-center rounded-xl bg-femWhite shadow-xl">
        <section className="h-[450px] w-[300px] bg-gradient-to-b from-violetBlue rounded-xl to-royalBlue flex flex-col justify-center items-center gap-6 text-center px-8 text-femGrey">
          <h2 className="text-2xl">Your Result</h2>
          <div className="px-12 py-10 rounded-full bg-gradient-to-b from-violetBlue to-royalBlue shadow-inverted flex flex-col">
            <span className="text-femWhite text-6xl">{data.result}</span>
            <span>of {data.totalEntries}</span>
          </div>
          <h3 className="text-femWhite text-2xl">{data.outLook.title}</h3>
          <p>{data.outLook.text}</p>
        </section>
        <section className="h-[400px] w-[350px] bg-transparent px-8 pt-2 flex flex-col gap-4">
          <h2 className="mb-4 text-2xl">Summary</h2>
          <ul className="flex flex-col gap-3 mb-10">
            {summaryFields.map((s) => (
              <SummaryItem key={s.name} field={s} />
            ))}
          </ul>
          <button className="hover:bg-gradient-to-b hover:from-violetBlue hover:to-royalBlue bg-darkSlate text-femWhite py-3 px-2 rounded-full w-full">
            Continue
          </button>
        </section>
      </div>
      <Attribution href="https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV" />
    </main>
  );
}

export default ResultsSummary;

/* 

# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

## Colors

### Primary

- Light red: hsl(0, 100%, 67%)
- Orangey yellow: hsl(39, 100%, 56%)
- Green teal: hsl(166, 100%, 37%)
- Cobalt blue: hsl(234, 85%, 45%)

## Gradients

- Light slate blue (background): hsl(252, 100%, 67%)
- Light royal blue (background): hsl(241, 81%, 54%)

- Violet blue (circle): hsla(256, 72%, 46%, 1)
- Persian blue (circle): hsla(241, 72%, 46%, 0)



### Neutral

- White: hsl(0, 0%, 100%)
- Pale blue: hsl(221, 100%, 96%)
- Light lavender: hsl(241, 100%, 89%)
- Dark gray blue: hsl(224, 30%, 27%)

### Notes

Use transparency to get the colour variations necessary to match the design. Hint: look into using `hsla()`.

## Typography

### Body Copy

- Font size (paragraphs): 18px

### Font

- Family: [Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk)
- Weights: 500, 700, 800

*/
