import React, { useState, useEffect } from "react";
import Button from "./Button";
import Card from "./Card";
import Search from "./Search";

const CardList = ({ data }) => {
  // Define limit, offset, and products state
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));

  // Handle Previous button click
  const handlePrevious = () => {
    setOffset((prevOffset) => Math.max(prevOffset - limit, 0));
  };

  // Handle Next button click
  const handleNext = () => {
    setOffset((prevOffset) =>
      Math.min(prevOffset + limit, data.length - limit)
    );
  };

  // Update products when offset changes
  useEffect(() => {
    setProducts(data.slice(offset, offset + limit));
  }, [offset, data]);

  // const filterTags = (tagQuery) => {
  //   const filtered = data.filter(product => {
  //     if (!tagQuery) {
  //       return product
  //     }
  //     return product.ags.find(({title}) => title === tagQuery)
  //   })
  const filterTags = (tagQuery) => {
    const filtered = data.filter((product) => {
      if (!tagQuery) {
        return true; // Return all products if no query
      }
      return product.tags.some(({ title }) => title.toLowerCase() === tagQuery.toLowerCase());
    });

    setOffset(0); // Reset offset to display filtered results from the beginning
    setProducts(filtered);
  };


  //   setOffset(0)
  //   setProducts(filtered)
  // }

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags}/>
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>

      <div className="flex items-center justify-center pa4">
        <Button text="Previous" handleClick={() => setOffset(offset - limit)} />
        <Button text="Next" handleClick={() => setOffset(offset + limit)} />
      </div>
    </div>
  );
};

export default CardList;
