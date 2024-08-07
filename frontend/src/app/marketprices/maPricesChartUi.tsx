import React from 'react';
import PriceChart from './MarketPricesChart';
import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'prices.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);

  return {
    props: {
      data,
    },
  };
}

const Home = ({ data }:any) => {
  return (
    <div>
      <h1>Product Prices</h1>
      <PriceChart data={data} />
    </div>
  );
};

export default Home;
