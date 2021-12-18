import moment from 'moment'
import React from 'react'

export default function Coin({
  id,
  image,
  cryptoName,
  cryptoSymbol,
  price,
  volume,
  priceChange,
  marketCap,
  lastUpdate
}) {
  return (
    <>
      <div className="coin-container">
        <div className="coin-column">
          <div className="coin-row">
            <div className="coin">
              <p> {id} </p>{' '}
              <img src={image} alt="Crypto" className="coin img" />
              <h1 className="coin text"> {cryptoName} </h1>{' '}
              <p className="coin symbol"> {cryptoSymbol} </p>{' '}
            </div>{' '}
            <div className="coinData">
              <p className="coinData price"> $ {price.toLocaleString()} </p>{' '}
              <p className="coinData volume"> $ {volume.toLocaleString()} </p>{' '}
              {priceChange < 0 ? (
                <p className="coinData percent red">
                  $ {priceChange?.toFixed(2)}
                </p>
              ) : (
                <p className="coinData percent green">
                 $ +{priceChange?.toFixed(2)}
                </p>
              )}
              <p className="coinData marketCap">
                $ {marketCap.toLocaleString()}
              </p>
              <p className="coinData lastUpdated">
                { moment(lastUpdate).startOf('mm').fromNow()}               
              </p>
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </>
  )
}
