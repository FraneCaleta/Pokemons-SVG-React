import React, { useEffect, useState } from "react";

export default function Input() {
  const [inputs, setInputs] = useState({ color: "red" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [allCircles, setAllCircles] = useState([]);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (allCircles && allCircles.length > 0) {
      if (!("x" in allCircles[0])) {
        setAllCircles(allCircles.shift());
      }
    }
    setAllCircles([...new Set(allCircles), inputs]);
    console.log(allCircles);
    setIsSubmitted(false);
  }, [isSubmitted]);

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label className="block mt-3">
            <strong>Enter value for X:</strong>
            <input
              className="block"
              type="number"
              required
              name="x"
              value={inputs.x || ""}
              onChange={handleChange}
            />
          </label>
          <label className="block mt-3">
            <strong>Enter value for Y:</strong>
            <input
              className="block"
              type="number"
              required
              name="y"
              value={inputs.y || ""}
              onChange={handleChange}
            />
          </label>
          <label className="block mt-3">
            <strong>Enter value for R:</strong>
            <input
              className="block"
              type="number"
              required
              name="r"
              value={inputs.r || ""}
              onChange={handleChange}
            />
          </label>
          <label className="block mt-3">
            <strong>Choose a color:</strong>
            <select
              className="block"
              name="color"
              value={inputs.color || ""}
              onChange={handleChange}
            >
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="aqua">Aqua</option>
              <option value="black">Black</option>
              <option value="cyan">Cyan</option>
              <option value="gold">Gold</option>
              <option value="pink">Pink</option>
            </select>
          </label>
          <input type="submit" className="btn btn-primary btn-md mt-3" />
        </form>
      </div>
      <br />
      <div>
        {allCircles && allCircles.length > 0 && (
          <svg
            viewBox="0 0 600 600"
            style={{
              maxWidth: "min(600px, 80vw)",
              maxHeight: "min(600px, 80vh)",
            }}
          >
            {allCircles.map((element, i) => (
              <circle
                key={i}
                cx={element.x}
                cy={element.y}
                r={element.r}
                fill={element.color}
              />
            ))}
          </svg>
        )}
      </div>
    </>
  );
}
