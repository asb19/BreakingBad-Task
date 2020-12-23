import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "../ui/Spinner";
import Search from "../ui/Search";

const PER_PAGE = 10;

const CharacterUi = ({ items, isLoading }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [query, setQuery] = useState("");
  const [filteredItems, setFilterItems] = useState([]);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  useEffect(() => {
    items = items.filter((x) =>
      x.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilterItems(items);
    console.log(filteredItems);
  }, [query, items]);

  const offset = currentPage * PER_PAGE;

  const currentPageData = (
    <>
      <Search getQuery={(q) => setQuery(q)} />
      <h2 className="center">
        Total count of characters: {filteredItems.length}
      </h2>
      <section className="cards">
        {filteredItems.slice(offset, offset + PER_PAGE).map((item) => (
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title>
                <Link
                  to={{
                    pathname: "/item",
                    state: {
                      item: item,
                    },
                  }}
                >
                  {item.name}
                </Link>
              </Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <b>Occupation:</b> {item.occupation}
              </ListGroupItem>
              <ListGroupItem>
                <b> DateOfBirth:</b> {item.birthday}
              </ListGroupItem>
              <ListGroupItem>
                <b>Status:</b> {item.status}
              </ListGroupItem>
            </ListGroup>
          </Card>
        ))}
      </section>
    </>
  );

  const pageCount = Math.ceil(items.length / PER_PAGE);

  console.log(isLoading, items);
  return isLoading ? (
    <Spinner />
  ) : (
    <div>
      {currentPageData}
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
};

export default CharacterUi;
