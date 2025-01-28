import {link} from 'react-router-router-dom';

function UserCard({user}) {
  return (
    <article>
        <h2>{user.name}</h2>
        <link to={`/profile/${user.id}}`}>View profile</link>
    </article>
  );
};

export default UserCard;