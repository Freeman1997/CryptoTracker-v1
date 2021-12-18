import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Coin from './Coin'
import './Coin.css'

export default function CryptoTracker() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const makeRequest = async (config) => {
      return await axios(config)
    }
    const getData = () => {
      makeRequest({
        url:
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false',
        method: 'GET',
      })
        .then((res) => setCoins(res.data))
        .catch((err) => console.log(err))
    }
    getData()
  }, [])

  const changeHandler = (e) => {
    setSearch(e.target.value)
  }
  const filterCoin = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()),
  )
  return (
    <>
      <div className="coinApp">
        <div className="coinApp search">
          <h1 className="coinApp text">Search a currency</h1>
          <form action="">
            <input
              type="text"
              onChange={changeHandler}
              placeholder="Search"
              className="coinApp input"
            />
          </form>
        </div>
        <div className="coin-container titles">
          <div className="coin-column">
            <div className="coin-row titles">
              <div className="coin ">
                <p>#</p>
                <h1 className="coin text titles">Coin</h1>
              </div>
              <div className="coinData titles">
                <p className="coinData price">Price</p>
                <p className="coinData volume">24h Volume</p>
                <p className="coinData percent">24h</p>
                <p className="coinData marketCap">Mkt Cap</p>
                <p className="coinData lastUpdate">Last Updated</p>
              </div>
            </div>
          </div>
        </div>

        {filterCoin.map((coin, index) => {
          return (
            <Coin
              key={coin.id}
              id={index + 1}
              image={coin.image}
              cryptoName={coin.name}
              cryptoSymbol={coin.symbol}
              price={coin.current_price}
              marketCap={coin.market_cap}
              priceChange={coin.price_change_24h}
              volume={coin.total_volume}
              lastUpdate={coin.last_updated}
            />
          )
        })}
      </div>
    </>
  )
}
