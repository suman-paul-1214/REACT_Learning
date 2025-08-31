import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@{date}/{apiVersion}/{endpoint}

`)
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency]);
      })
      .catch((err) => {
        console.error("Error fetching currency data:", err);
        setData({});
      });
  }, [currency]);

  useEffect(() => {
    console.log("Updated data:", data);
  }, [data]);

  return data;
}

export default useCurrencyInfo;
