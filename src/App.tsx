import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar.component";
import { SearchBar } from "./components/Search/SearchBar/SearchBar.component";
import { SearchResultsList } from "./components/Search/SearchResultList/SeachResultList.component";
import "./components/Search/search.scss";
import "./components/Sidebar/sidebar.scss";
import "./App.scss";
import Products from "./components/Products/Products.component";

function App() {
  const [filters, setFilters] = useState({
    selectedCategory: "",
    priceRange: "",
    rating: "",
  });

  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [products, setProducts] = useState<any[]>([]);
  const [result, setResult] = useState<any[]>([]);
  const [showProducts, setShowProducts] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchResults = (result: any) => {
    // TODO: handle search results

    const searchedResult = products?.filter(
      (p) => p.category === result.category
    );
    setShowProducts(true);
    setShowSearchResults((prev: boolean) => !prev);
    setResult(searchedResult);
  };

  async function fetchData() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setResult(data);
    } catch (error) {
      setError(`Error fetching data: ${error}`);
    }
  }

  const handleChange = (name: string, value: string) => {
    let filteredProducts = products;

    // Filtering by search query
    // if (query) {
    //   filteredProducts = filteredProducts.filter(
    //     (product) =>
    //       product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    //   );
    // }

    // Filtering by selected category
    if (name === "category") {
      filteredProducts = filteredProducts.filter(
        (product: any) => product.category === value
      );
    }

    // Filtering by price range
    else if (name === "priceRange") {
      if (value === "under100") {
        filteredProducts = filteredProducts.filter(
          (product: any) => product.price <= 100
        );
      } else if (value === "100to500") {
        filteredProducts = filteredProducts.filter(
          (product: any) => product.price > 100 && product.price <= 500
        );
      } else if (value === "above500") {
        filteredProducts = filteredProducts.filter(
          (product: any) => product.price > 500 && product.price < 1100
        );
      }
    }

    // filter by rating
    else if (name === "rating") {
      if (value === "5 star") {
        filteredProducts = filteredProducts.filter(
          (product: any) =>
            Math.round(product.rating.rate) <= 5 &&
            Math.round(product.rating.rate) > 4
        );
      } else if (value === "4 star") {
        filteredProducts = filteredProducts.filter(
          (product: any) =>
            Math.round(product.rating.rate) <= 4 &&
            Math.round(product.rating.rate) > 3
        );
      } else if (value === "3 star") {
        filteredProducts = filteredProducts.filter(
          (product: any) =>
            Math.round(product.rating.rate) <= 3 &&
            Math.round(product.rating.rate) > 2
        );
      } else if (value === "2 star") {
        filteredProducts = filteredProducts.filter(
          (product: any) =>
            Math.round(product.rating.rate) <= 2 &&
            Math.round(product.rating.rate) > 1
        );
      } else if (value === "1 star") {
        filteredProducts = filteredProducts.filter(
          (product: any) =>
            Math.round(product.rating.rate) <= 1 &&
            Math.round(product.rating.rate) > 0
        );
      }
    }

    setFilters((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));

    setProducts(filteredProducts);
  };

  return (
    <div className="App">
      <div className="components-container">
        <div className="sidebar-top-container">
          <Sidebar handleChange={handleChange} />
        </div>

        <div className="contents-container">
          <div className="search-bar-container ">
            <SearchBar
              data={products}
              setResults={setSearchResults}
              setShowSearchResults={setShowSearchResults}
            />

            {showSearchResults && searchResults && searchResults.length > 0 && (
              <SearchResultsList
                results={searchResults}
                handleSearchResults={handleSearchResults}
              />
            )}
          </div>

          {showProducts ? <Products filteredProducts={result} /> : null}
        </div>
      </div>
      {error ? <div>{error}</div> : null}
    </div>
  );
}

export default App;
