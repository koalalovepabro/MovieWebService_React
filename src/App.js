import { useState, useEffect } from "react";
import './App.css';

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [budget, setBudget] = useState('');

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, [])
    // console.log(coins)

    const onChange = (event) => {
        setBudget(event.target.value);
    }

    return (
        <div>
            <h1>The Coins !
                {loading
                    ? ''
                    : `(${coins.length})`}
            </h1>
            <input value={budget}
                   onChange={onChange}
                   type="text"
                   placeholder="How much do you have?"/><br></br>

            {loading
                ? ""
                : (<select>
                    {coins.map((coin) => (
                        <option> {coin.name} ({coin.symbol}) : You can
                            buy {budget / coin.quotes.USD.price} {coin.symbol} with
                            your money.
                        </option>
                    ))}
                </select>)
            }
        </div>
    )
};

export default App;
