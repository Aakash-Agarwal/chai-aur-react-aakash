import { useState } from 'react'
import CurrencyInput from './components/CurrencyInput'
import useCurrencyRate from './hooks/useCurrencyRate'

function App() {
  const [fromAmount, setFromAmount] = useState(0)
  const [toAmount, setToAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('usd')
  const [toCurrency, setToCurrency] = useState('inr')

  const currencyRate = useCurrencyRate(fromCurrency, toCurrency)
  const options = Object.keys(currencyRate)

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    setFromAmount(toAmount)
    setToAmount(fromAmount)
  }

  const convertAmount = () => {
    setToAmount(fromAmount * currencyRate[toCurrency])
  }

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://www.shutterstock.com/shutterstock/photos/2507388155/display_1500/stock-photo-currency-exchange-international-money-transfer-or-foreign-exchange-forex-trading-global-2507388155.jpg')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convertAmount()
                      }}
                  >
                      <div className="w-full mb-1">
                          <CurrencyInput
                              label="From"
                              currency={fromCurrency}
                              amount={fromAmount}
                              currencyOptions={options}
                              onAmountChange={(newAmount) => setFromAmount(newAmount)}
                              onCurrencyChange={(newCurrency) => setFromCurrency(newCurrency)}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <CurrencyInput
                              label="To"
                              currency={toCurrency}
                              amount={toAmount}
                              currencyOptions={options}
                              onCurrencyChange={(newCurrency) => setToCurrency(newCurrency)}
                              amountDisabled
                          />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        onClick={convertAmount}
                      >
                          Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
    );
}

export default App
