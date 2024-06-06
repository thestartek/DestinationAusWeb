import Image from "next/image";
import styles from "./card.module.css";

type GoalCardProps = {
  flexDirection: string;
};

const GoalCard = ({ flexDirection }: GoalCardProps) => {
  return (
    <div
      className={`${styles.cardContainer} rounded-lg px-4 py-2 bg-slate-200 max-w-[480px] mx-auto w-full flex items-center justify-between ${flexDirection}`}
    >
      <>
        <Image src="/connect.png" alt="Connect" width={40} height={40} />
      </>
      <p>Connect people in Australia from all around the world</p>
    </div>
  );
};

export default GoalCard;
