import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';


const MailViewList = ({ mails }) => {
  return (
    <ListGroup style={{overflowY:"scroll",height:"100vh"}}>
      {mails.map((mail) => (
        <ListGroup.Item key={mail.mId}>
          <Card>
            <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
                {mail.from.slice(0,25) + '...'}
              </Card.Subtitle>
              <Card.Title>{mail.subject.slice(0,25) + '...'}</Card.Title>
              <Card.Text className="mb-2 text-muted" >
                {mail.content.slice(0,30) + `...`}
              </Card.Text>
            </Card.Body>
          </Card>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default MailViewList;
