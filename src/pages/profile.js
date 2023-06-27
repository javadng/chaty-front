import MoreVertIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';
import EditIcon from '@mui/icons-material/Edit';
import PhoneIcon from '@mui/icons-material/Phone';
import LogoutIcon from '@mui/icons-material/Logout';
import DeleteIcon from '@mui/icons-material/Delete';

import authProtecter from '../utils/authPageProtecter';

const ProfilePage = props => {
  return (
    <div className="profile dark:text-white text-black">
      <div className="bg-royal-green bg-opacity-30 px-2 py-4">
        <div className="mx-auto sm:w-1/2">
          <div className="flex justify-between">
            <h1 className="font-bold">Settings</h1>
            <MoreVertIcon className="cursor-pointer" />
          </div>
          <div className="profile">
            <figure className="my-3">
              <Image
                src="/imgs/profile-photos-2.jpg"
                width={50}
                height={50}
                alt=""
                className="object-cover block w-20 h-20 mx-auto rounded-full"
              />
            </figure>
            <h2 className="text-center flex items-center justify-center">
              <span className="inline-block mr-2 text-xl capitalize">
                Mattew
              </span>
              <EditIcon className="cursor-pointer" />
            </h2>
          </div>
        </div>
      </div>
      <div className="mx-auto sm:w-1/2">
        <div className="flex items-center p-3 cursor-pointer my-2">
          <PhoneIcon className="text-blue-c" />
          <span className="text-xl ml-3 ">+982520520</span>
        </div>
        <div className="flex items-center  p-3 cursor-pointer my-2">
          <DeleteIcon className="" />
          <span className="ml-3">Delete Account</span>
        </div>
        <div className="flex items-center p-3 cursor-pointer my-2">
          <LogoutIcon className="text-red-500" />
          <span className="text-lg ml-3 text-red-500">Log out</span>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

export async function getServerSideProps(context) {
  const result = await authProtecter(context);

  if (!result || result === 'invalid signature') {
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
