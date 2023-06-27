import { motion } from 'framer-motion';

const hue = h => `hsl(${h}, 100%, 50%)`;

const PullScrollAnimation = props => {
  // const background = `linear-gradient(306deg, ${hue(props.hueA)}, ${hue(
  //   props.hueB
  // )})`;

  return (
    <motion.div
      className="w-full"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={props.cardVariants}>{props.children}</motion.div>
    </motion.div>
  );
};
export default PullScrollAnimation;
