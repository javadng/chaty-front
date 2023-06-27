import authProtecter from '../utils/authPageProtecter';

const MenuPage = props => {
  return;
};

export default MenuPage;

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
