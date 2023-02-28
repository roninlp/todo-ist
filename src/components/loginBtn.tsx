import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

import { api } from "~/utils/api";

const LoginBtn = () => {
  const { data: sessionData } = useSession();

  // const { data: secretMessage } = api.example.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: sessionData?.user !== undefined }
  // );

  return sessionData && sessionData.user && sessionData.user.image ? (
    <div className="ml-4 flex items-center gap-4">
      <button className="btn-accent btn-sm btn" onClick={() => signOut()}>
        Sign Out
      </button>
      <Image
        className="cursor-pointer rounded-full border border-accent bg-accent"
        src={sessionData.user.image}
        width={40}
        height={40}
        alt="pic"
      />
    </div>
  ) : (
    <button
      className="ml-4 rounded-md border-2 border-white bg-orange-600 py-2 px-4 text-sm font-bold text-white"
      onClick={() => signIn()}
    >
      Sign In
    </button>
  );
};
export default LoginBtn;
