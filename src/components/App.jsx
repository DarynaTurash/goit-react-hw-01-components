import { Profile } from "./profile/profile";
import userInfo from "../utils/user.json";
import data from "../utils/data.json";
import { Statistics } from "./statistics/statistics";
import friends from "../utils/friends.json";
import { FriendList } from "./friendList/friendList";
import { TransactionHistory } from "./transactionHistory/transactionHistory";
import items from "../utils/transactions.json";




export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
    <Profile
    name={userInfo.username}
    tag={userInfo.tag}
    location={userInfo.location}
    avatar={userInfo.avatar}
    followers={userInfo.stats.followers}
    views={userInfo.stats.views}
    likes={userInfo.stats.likes}
    />

    <Statistics title="Upload stats" stats={data} />

    <FriendList friends={friends} />

    <TransactionHistory items={items} />
    </div>
  );
};
