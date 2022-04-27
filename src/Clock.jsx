/* eslint-disable no-unused-vars */
import React from "react";
import Spinner from "./layout/Spinner";

export function Clock() {
  const [date, setDate] = React.useState();

  // update date -> set full new Date, because we can't guarantee only 1s passed
  const updateDate = () => setDate(new Date());

  React.useEffect(() => {
    console.log("Set interval");
    const timerId = setInterval(updateDate, 1000);

    return () => {
      console.log("Clear interval");
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="mt-5">
      <h1 className="text-red-700 text-3xl font-bold underline text-center">
        {date ? date.toLocaleTimeString() : <Spinner />}
      </h1>
    </div>
  );
}
