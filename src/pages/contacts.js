import authProtecter from '../utils/authPageProtecter';

const contacts = props => {
  return;
};

export default contacts;

export async function getServerSideProps(context) {
  const result = await authProtecter(context);

  if (!result) {
    return {
      redirect: {
        destination: '/auth',
        permanent: true,
      },
    };
  }

  return {
    props: {},
  };
}
