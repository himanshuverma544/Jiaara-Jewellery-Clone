import Head from "@/components/pages/auth/Head";
import ByServices from "@/components/pages/auth/ByServices";
import ByEmail from "@/components/pages/auth/ByEmail";
import Bottom from "@/components/pages/auth/Bottom";
import Divider from "@/components/general/Divider";


export default function SignUp() {

  return (
    <div className="sign-up-page flex flex-col items-center justify-center gap-5 py-5">
      <Head/>
      <ByServices/>
      <Divider
        className="w-[85%]"
        text="Or"
        dividerLineClassName="border-primaryFont"
      />
      <ByEmail/>
      <Bottom/>
    </div>
  );
}
