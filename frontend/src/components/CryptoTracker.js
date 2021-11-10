import React, { useState } from "react";
import { useQuery } from "react-query";
import { Row, Col } from "antd";

const useGetCardData = (cryptoName, options) => {
  return useQuery(
    `${cryptoName}-card`,
    async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${cryptoName}`
      );
      return await response.json();
    },
    options
  );
};

export const formatPrice = (price) => {
  const formatConfig = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatConfig.format(price);
};

export const formatMarketCap = (marketCap) => {
  const formatConfig = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return formatConfig.format(marketCap);
};

const formatPlusMinus = (priceChange) => {
  const isPositive = Math.sign(priceChange) >= 0;

  return (
    <span className={`${isPositive ? "positive" : "negative"}`}>
      {`${isPositive ? "+" : ""}${priceChange.toFixed(2)}%`}
    </span>
  );
};

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/bitcoin-price-tracking-with-react-query
 */
const CryptoTracker = ({ cryptoName }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { data, isLoading } = useGetCardData(cryptoName, {
    refetchInterval: 60000,
    staleTime: 60000,
  });

  const onCardClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  if (isLoading) return null;

  const { image, name, market_data: marketData } = data;

  return (
    <div className="cardContainer">
      <div className="card collapsed">
        <div className="card-inner">
          <div className="top-data">
            <img src={image?.large} alt={`${name} logo`} />
            <h3 className="crypto-name">{name}</h3>
            <Row>
              <Col span={12}><h4 className="crypto-price crypto-price-label">Precio Actual: </h4></Col>
              <Col span={12}>
                <h4 className="crypto-price crypto-price-value">
                  {formatPrice(marketData?.current_price?.usd)}
                  {formatPlusMinus(marketData?.price_change_percentage_24h)}
                </h4>
              </Col>
            </Row>
            <Row>
            <Col span={12}><h4 className="crypto-price crypto-price-label">Precio Máximo: </h4></Col>
            <Col span={12}>
            <h4 className="crypto-price crypto-price-value">
              {formatMarketCap(marketData?.ath?.usd)}
              {/* {formatPlusMinus(marketData?.ath_change_percentage?.usd)} */}             
            </h4>
            </Col>
            </Row>
            <Row>
            <Col span={12}><h4 className="crypto-price crypto-price-label">Cap. de Mercado: </h4></Col>
            <Col span={12}>
            <h4 className="crypto-price crypto-price-value">
              {formatMarketCap(marketData?.market_cap?.usd)}
              {formatPlusMinus(marketData?.market_cap_change_percentage_24h)}
            </h4>
            </Col>
            </Row>            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoTracker;
