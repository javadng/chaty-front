import Image from 'next/image';
import PullScrollAnimation from '../pullup-animation';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const cardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const IntroductionItem = props => {
  return (
    <PullScrollAnimation
      cardVariants={cardVariants}
      hueA={props.hueA}
      hueB={props.hueB}
    >
      <div className="dark:bg-slate-700 dark:text-white text-gray-700 bg-slate-100 shadow-md bg-opacity-80 rounded-2xl p-3">
        <figure className="w-full h-60 rounded-2xl overflow-hidden relative">
          <Image src={props.srcImg} fill={true} />
        </figure>
        <h3 className="my-3 text-lg font-bold">{props.title}</h3>
        <ul className="text-start pl-5">
          {props.listItems.map(el => (
            <li key={el.id} className="my-1 flex items-center">
              <CheckCircleIcon className="text-green-500 text-sm mr-3" />
              <span>{el.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </PullScrollAnimation>
  );
};

export default IntroductionItem;
