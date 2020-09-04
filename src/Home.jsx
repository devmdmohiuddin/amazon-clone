import React from 'react'

import Product from './Product'

import './Home.css'

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      <div className="home__row">
        <Product
          id="1"
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quasi dolorum maiores porro cum esse."
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BD1,204,203,200.jpg"
        />
        <Product
          id="2"
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quasi dolorum maiores porro cum esse."
          price={30.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/warehousedeals/storefront/XCM_Manual_1186135_Amazon_Warehouse___Storefront_content_grid_440x440_Warehouse_Deals_XCM_Manual_1186135_878820_us_warehouse_deals_440x440_1566448366_jpg._CB437698791_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="3"
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quasi dolorum maiores porro cum esse."
          price={10.58}
          rating={5}
          image="https://m.media-amazon.com/images/G/01/sell/images/Anker-01._CB1580163796_.jpg"
        />
        <Product
          id="4"
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quasi dolorum maiores porro cum esse."
          price={13.56}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/6182S7MYC2L._AC_UL320_SR320,320_.jpg"
        />
        <Product
          id="5"
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quasi dolorum maiores porro cum esse."
          price={19.60}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51ZdmnHKukL._AC_UL320_SR320,320_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="6"
          title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga quasi dolorum maiores porro cum esse."
          price={110.6}
          rating={5}
          image="https://cdn.vox-cdn.com/thumbor/Qtv-OooWVxJzxUA_xSWSW3O5nK0=/0x0:1280x960/1400x1050/filters:focal(538x378:742x582):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/63709560/gifts-for-boomer-apple-tv.0.1486943161.0.jpg"
        />
      </div>
      
    </div>
  )
}

export default Home
