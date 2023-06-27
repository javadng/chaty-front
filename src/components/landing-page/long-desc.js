import Link from 'next/link';
import PullScrollAnimation from '../pullup-animation';
import DiamondContainer from './diamond-container';
const onscreen = {
  y: 0,
  rotate: 0,
  transition: {
    type: 'spring',
    bounce: 0.4,
    duration: 0.8,
  },
};

const cardVariants1 = {
  offscreen: {
    y: 300,
  },
  onscreen,
};

const cardVariants2 = {
  offscreen: {
    y: 500,
  },
  onscreen,
};
const LongDescription = props => {
  return (
    <section className="bg-imgage-chat2 bg-image md:p-10 p-6 flex flex-col md:flex-row justify-between  items-center">
      <PullScrollAnimation cardVariants={cardVariants1}>
        <div className="text-white bg-slate-400 bg-opacity-30 rounded-xl p-5 my-6">
          <h2 className="p-4 italic underline md:text-3xl text-xl">
            What is chaty app?
          </h2>
          <p className="py-2 text-gray-300">
            Sign up, create a room and chat with your freinds 👌
          </p>
          <Link
            href="/auth"
            className="block md:w-1/2 md:mx-auto bg-blue-400 p-1 my-3 shadow-lg hover:-translate-y-1 transition rounded-2xl"
          >
            SignUp
          </Link>
        </div>
      </PullScrollAnimation>
      <ul className="flex italic flex-col items-center p-5 mx-auto text-white w-full">
        <PullScrollAnimation cardVariants={cardVariants2}>
          <li className="my-2 p-3">
            <DiamondContainer>
              <p className="translate-y- -rotate-45">
                Enjoy real-time conversations with friends and family through
                our instant messaging feature.
              </p>
            </DiamondContainer>
          </li>
        </PullScrollAnimation>
        <PullScrollAnimation cardVariants={cardVariants2}>
          <li className="my-2">
            <DiamondContainer>
              <p className="translate-y- -rotate-45">
                share ideas, and connect with like-minded individuals from
                around the world.
              </p>
            </DiamondContainer>
          </li>
        </PullScrollAnimation>
        <PullScrollAnimation cardVariants={cardVariants2}>
          <li className="my-2">
            <DiamondContainer>
              <p className="translate-y- -rotate-45">
                Our app employs robust encryption protocols to protect your data
                and ensures that your remain private.
              </p>
            </DiamondContainer>
          </li>
        </PullScrollAnimation>
      </ul>
    </section>
  );
};

export default LongDescription;
