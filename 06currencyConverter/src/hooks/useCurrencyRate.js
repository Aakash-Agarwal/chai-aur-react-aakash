import { useEffect, useState } from "react";

const useCurrencyRate = (currency) => {
    const [currencyRate, setCurrencyRate] = useState({})
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then(response => response.json())
        .then(response => setCurrencyRate(response[currency]))
    }, [currency])
    return currencyRate
}

export default useCurrencyRate;


