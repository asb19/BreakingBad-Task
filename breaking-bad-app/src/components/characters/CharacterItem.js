import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const CharacterItem = (props) => {
  const item = props.location.state.item;
  const firstName = item.name.split(" ")[0];
  const lastName = item.name.split(" ")[1];
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/quote?author=${firstName}+${lastName}`
      );
      setQuotes(result.data);
    };
    fetchQuotes();
  }, [item, firstName, lastName]);
  return (
    <>
      <section style={{ margin: "auto", height: "550px", width: "500px" }}>
        {/* <Card
          style={{
            width: "18rem",
            margin: "auto",
            display: "block",
          }}
          bg="info"
          className="text-center"
        >
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
            <Card.Title>Name: {item.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Occupation: {item.occupation}</ListGroupItem>
            <ListGroupItem>Date-Of-Birth: {item.birthday}</ListGroupItem>
            <ListGroupItem>Status: {item.status}</ListGroupItem>

            <ListGroupItem>NickName: {item.nickname}</ListGroupItem>
            <ListGroupItem>Portrayed By : {item.portrayed}</ListGroupItem>
            <ListGroupItem>Appeared : {item.appearance}</ListGroupItem>
            <ListGroupItem>Appeared : {item.appearance}</ListGroupItem>
            <ListGroupItem>
              Quotes :{" "}
              {quotes.map((e) => (
                <li key={e.quote_id}>{e.quote}</li>
              ))}
            </ListGroupItem>
          </ListGroup>
        </Card> */}
        <div className="myCard">
          <div className="card-inner">
            <div className="card-front">
              <img src={item.img} alt="" />
            </div>
            <div className="card-back">
              <h1>{item.name}</h1>
              <ul>
                <li>
                  <strong>Actor Name:</strong> {item.portrayed}
                </li>
                <li>
                  <strong>Nickname:</strong> {item.nickname}
                </li>
                <li>
                  <strong>Occupation:</strong> {item.occupation}
                </li>
                <li>
                  <strong>Birthday:</strong> {item.birthday}
                </li>
                <li>
                  <strong>Appeared:</strong> {item.appearance}
                </li>
                <li>
                  <strong>Status:</strong> {item.status}
                </li>
                <li>
                  <strong>Quotes:</strong>
                  <ul>
                    {quotes.slice(0, 4).map((quote) => (
                      <li key={quote.quote_id}>{quote.quote}</li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CharacterItem;
