import dynamic from 'next/dynamic';
import authProtecter from '../../utils/authPageProtecter';
import { useSockets } from '../../context/socketContext';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ChatList = dynamic(() => import('../../components/chat/chat-list'), {
  ssr: false,
});

const ContactMessages = dynamic(
  () => import('../../components/chat/Contact-messages'),
  {
    ssr: false,
  }
);
const SideBarChat = dynamic(
  () => import('../../components/chat/sidebar-chat'),
  {
    ssr: false,
  }
);

const ChatPage = props => {
  const { setUsername } = useSockets();

  useEffect(() => {
    setUsername(props.username);
  }, [props.username]);

  return (
    <div className="chat h-[100vh] dark:bg-dark py-3 px-0.5 grid grid-cols-[3rem_1fr] sm:grid-cols-[12rem_1fr] md:grid-cols-chat-page gap-3">
      <SideBarChat />
      <ContactMessages />
      <ChatList className="hidden md:block" />
    </div>
  );
};

export default ChatPage;
export async function getServerSideProps(context) {
  const result = await authProtecter(context);
  let token, username;

  if (result) {
    token = result.token;
    username = result.username;
  }

  if (!token) {
    return {
      redirect: {
        destination: '/auth',
        permanent: true,
      },
    };
  }

  return {
    props: { username },
  };
}
