import dynamic from 'next/dynamic';

const ChatList = dynamic(() => import('../../components/chat/chat-list'), {
  ssr: false,
});

import authProtecter from '../../utils/authPageProtecter';

const PvChatPage = props => {
  return (
    <div className="chat dark:bg-slate-600 h-full p-3 py-5 pb-28">
      <ChatList />
    </div>
  );
};

export default PvChatPage;

export async function getServerSideProps(context) {
  const { token, username } = await authProtecter(context);

  if (!token) {
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
