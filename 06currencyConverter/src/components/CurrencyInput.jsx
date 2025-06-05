import { useId } from "react";

const CurrencyInput = ({
  label,
  amount=0,
  currencyOptions = [],
  onAmountChange,
  onCurrencyChange,
  currency='usd',
  amountDisabled=false,
  currencyDisabled=false
}) => {
    const amountId = useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
          <div className="w-1/2">
              <label htmlFor="amountId" className="text-black/40 mb-2 inline-block">{label}</label>
              <input
                  id={amountId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled={amountDisabled}
                  value={amount}
                  onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                disabled={currencyDisabled}
                value={currency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}>
                  {currencyOptions.map((currencyOption) => (
                    <option key={currencyOption} value={currencyOption}>{currencyOption}</option>
                  ))}
              </select>
          </div>
        </div>
    );
}

export default CurrencyInput;
