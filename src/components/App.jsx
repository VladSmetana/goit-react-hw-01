import userData from './Profile/userData.json';
import Profile from './Profile/Profile.jsx';
import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList.jsx';
import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';
const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
