import { motion } from 'framer-motion';
import Link from 'next/link';
const transition = {
  duration: 0.7,
  ease: [0, 0.71, 0.2, 1.01],
  scale: {
    type: 'spring',
    damping: 4,
    stiffness: 100,
    restDelta: 0.001,
  },
};

const WelcomeLand = props => {
  return (
    <section className="bg-land1 p-8 text-gray-300">
      <header className="text-3xl font-bold my-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.9 }}
          transition={transition}
        >
          Welcome to Chaty-app
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, translateX: '100%' }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={transition}
          className="text-xl my-5"
        >
          Unveiling the Digital Canvas: A Journey Through the Internet's Visual
          Realm
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, translateX: '-100%' }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={transition}
          className="text-sm mt-8"
        >
          This is a chat applicaion build with next.js and socket.io...
        </motion.p>
      </header>
      <motion.footer
        initial={{ opacity: 0, translateY: '100%' }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={transition}
      >
        <Link href="/auth">
          <span
            className="shadow-md italic inline-block bg-blue-400 bg-opacity-90 text-white px-6 py-2 rounded-xl text-xl mt-6 mb-4 transition hover:-translate-y-1 hover:shadow-xl
  "
          >
            Let's get started!
          </span>
        </Link>
      </motion.footer>
    </section>
  );
};

export default WelcomeLand;
