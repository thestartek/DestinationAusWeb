"use client";

type SignOutProps = {
  icon: JSX.Element;
  title: string;
  className?: string;
};

const SignOut = ({ icon, title, className }: SignOutProps) => {
  const signOut = () => {
    console.log("Signing out");
  };

  return (
    <button
      onClick={signOut}
      className={`flex items-center justify-start w-[14rem] gap-2 px-3 py-3 rounded-xl hover:bg-[#FEF08A] cursor-pointer ${className}`}
    >
      {icon} <span className="select-none">{title}</span>
    </button>
  );
};

export default SignOut;
