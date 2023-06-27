import authProtecter from '../utils/authPageProtecter';
import WelcomeLand from '../components/landing-page/welcome-land';
import IntroductionList from '../components/landing-page/introduction-list';
import LongDescription from '../components/landing-page/long-desc';

// ('Chat Unleashed: Igniting Connections through Words');
// ('From Text to Talk: The Evolution of Chatting');

const Home = props => {
  return (
    <div className="dark:text-white text-center dark:bg-blend-multiply">
      <WelcomeLand />
      <IntroductionList />
      <LongDescription />
      <p>
        First, you most create a account and then you can chat with other
        people.
      </p>
    </div>
  );
};
export default Home;

// export async function getServerSideProps(context) {
//   const { token, username } = await authProtecter(context);

// if (!token) {
//   return {
//     redirect: {
//       destination: '/auth',
//       permanent: true,
//     },
//   };
// }

// return {
//   props: {},
// };
// }
