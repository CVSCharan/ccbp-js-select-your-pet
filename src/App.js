import { useState } from "react";
import "./App.css";

function App() {
  const [imageUrl, setImageUrl] = useState(
    "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png"
  );

  const onChangePet = (e) => {
    console.log(e.target.value);
    if (e.target.value === "cat") {
      setImageUrl(
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-cat-img.png"
      );
    } else if (e.target.value === "parrot") {
      setImageUrl(
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-parrot-img.png"
      );
    } else if (e.target.value === "spider") {
      setImageUrl(
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-spider-img.png"
      );
    } else if (e.target.value === "rabbit") {
      setImageUrl(
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-rabbit-img.png"
      );
    } else {
      setImageUrl(
        "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/select-your-pet-dog-img.png"
      );
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 bg-container pt-4 pb-4 mt-4">
          <h1 className="text-center mb-3 heading">Select your Pet</h1>
          <select
            id="petSelect"
            className="selector-pet"
            onChange={onChangePet}
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="parrot">Parrot</option>
            <option value="spider">Spider</option>
            <option value="rabbit">Rabbit</option>
          </select>
          <div className="mt-4">
            <img alt="img" id="petImg" className="pet-img" src={imageUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
