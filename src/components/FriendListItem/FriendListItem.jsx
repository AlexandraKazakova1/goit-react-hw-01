const FriendListItem = (avatar, name, isOnline) => {
  return (
    <div>
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p>{name}</p>
      <p>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;