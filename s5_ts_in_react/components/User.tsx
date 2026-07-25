type UserProps = {
  user: {
    firstName: string;
    lastName: string;
  };
};

const User = ({ user }: UserProps) => {
  return (
    <p>
      User Details: first name={user.firstName} & last name={user.lastName}
    </p>
  );
};

export default User;
