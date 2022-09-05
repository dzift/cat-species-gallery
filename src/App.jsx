import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catState";
import "./App.css";

function App() {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>CAT SRECIES GALLERY</h1>
      <p>
        Images of different spicies of cats. Lots of cats for your viewing
        plesure.
      </p>
      <hr />
      <div className="Gallery">
        {cats &&
          cats.map((cat) => (
            <div key={cat.id} className="row">
              <div className="column column-left">
                <img
                  src={cat.image.url}
                  alt={cat.name}
                  width="200"
                  height="200"
                />
              </div>
              <div className="column column-right">
                <h2>{cat.name}</h2>
                <h5>{cat.temperament}</h5>
                <p>{cat.description}</p>
              </div>
            </div>
          ))}
      </div>
      <button>VIEW MORE CATS</button>
    </div>
  );
}

export default App;
