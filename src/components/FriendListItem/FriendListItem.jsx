const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="container-friend">
      <img
        className="img-friend"
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
      />
      <p className="name-friend">{name}</p>
      <p className="isonline-friend">{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;
