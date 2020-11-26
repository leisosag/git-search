import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const UserCard = ({ user }) => {
  return (
    <div className="col-md-6 col-lg-4 pb-3">
      <Card>
        <Card.Img variant="top" src={user.avatar_url} />
        <Card.Body>
          <Card.Title>{user.login}</Card.Title>
          <Card.Text>ID: {user.id}</Card.Text>
          <Card.Text>GitHub</Card.Text>
          <Button
            className="btn-dark"
            href={user.html_url}
            target="_blank"
            variant="primary"
          >
            View profile
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserCard;
