import PropTypes from "prop-types";
const UserCard = ({ name }) => {
	return (
		<div className="user-card">
			<h2>User: {name}</h2>
		</div>
	);
};

// PropTypes validation
UserCard.propTypes = {
	name: PropTypes.string.isRequired,
};

export default UserCard;
