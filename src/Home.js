import React from "react";

import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          showIndicators={false}
          showThumbs={true}
          autoPlay
          interval={2000}
          infiniteLoop={true}
          className="home__image"
        >
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/sns/gw/2021Q3/1343546_1754645_us_gw_pc_tallhero_2x_1500x600_us-en._CB665619776_.jpg" />
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDU3MTYxZjAt/ZDU3MTYxZjAt-NmMzZGE3YTYt-w1500._CB663411053_.jpg" />
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NzkzZDYxNTkt/NzkzZDYxNTkt-Y2M2MGE1MmEt-w1500._CB663569411_.jpg" />
          </div>
        </Carousel>

        <div className="home__row">
          <Product
            id="12321341"
            title="cfmour Wood Plant Stand Indoor Outdoor, Plant Display Multi Tier Flower Shelves Stands, Garden Plant Shelf Rack Holder in Corner Living Room Balcony Patio Yard with 3 Free Gardening Tools
by cfmour"
            price={47.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51W-PbUtZgL.jpg"
          />
          <Product
            id="49538094"
            title="Adjustable Plant Stands 1 Pack,Width 8 to 12 inch,Mid Century Modern Indoor Potted Stand 15 inch Height, Bamboo Plant Holder for 8 to 12 inch Flower Pot (Only Plant Stand)"
            price={19.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81X6nD4VGaS._AC_SX522_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Jade Roller & Gua Sha, Face Roller, Facial Beauty Roller Skin Care Tools, BAIMEI Rose Quartz Massager for Face, Eyes, Neck, Body Muscle Relaxing and Relieve Fine Lines and Wrinkles"
            price={14.44}
            rating={4}
            image="https://m.media-amazon.com/images/I/61pew7OeBXL._SX466_.jpg"
          />
          <Product
            id="23445930"
            title="BESTOPE Makeup Brushes 16PCs Makeup Brushes Set with 4PCs Makeup Sponge and 1 Brush Cleaner Premium Synthetic Foundation Brushes Blending Face Powder Eye Shadows Make Up Brushes Tool(Rose Gold)"
            price={15.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71+azWrlU3L._SY355_.jpg"
          />
          <Product
            id="3254354345"
            title="SHANY Gift Surprise - AMAZON EXCLUSIVE - All in One Makeup Bundle - Includes Pro Makeup Brush Set, Eyeshadow Palette,Makeup Set or Lipgloss Set and etc. - COLORS & SELECTION VARY"
            price={64.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/813mTyG4F2L._SY355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="1232134121"
            title="Joyjoz Baby Musical Mats with 25 Music Sounds, Musical Toys Child Floor Piano Keyboard Mat Carpet Animal Blanket Touch Playmat Early Education Toys for Baby Girls Boys Toddlers (1 to 5 Years Old)"
            price={23.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71cIqnAle+L._AC_SX425_.jpg"
          />
          <Product
            id="23445303"
            title="Shynerk 3 in 1 Sprinkler Pool for Kids Toddlers, Inflatable Splash Pool Baby Splash Pad for Swimming Learning, Elephant Wading Pool Summer Outdoor Water Toys for Boys Girls Ages 3+"
            price={15.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81Ut62WQf+S._AC_SX679_.jpg"
          />
          <Product
            id="4953809435"
            title="Renfox Kids Musical Piano Mats - Dance & Learn Keyboard Play Mat with 8 Musical Instrument Sound, 5 Play Modes, Early Educational Toy Gift for 3+ Years Old Boys Girls kids Toddlers (58” x 24”)"
            price={25.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/810hjiwQ2ML._AC_SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="49038506"
            title="MOOKA WiFi Projector, 1080P Full HD Supported Video Projector, 7500L Mini Projector, Movie Home Theater for TV Stick, Video Games, HDMI/USB/AUX/AV/PS4, iOS Android Smartphone Screen,"
            price={110.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71I1dAWSIuL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id="234459303"
            title="Laptop Stand, Ergonomic Aluminum Computer Stand for Desk,Protable Detachable Laptop Riser Holder Compatible with MacBook Pro"
            price={15.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61TBiqti9zL._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="32543543454"
            title="Wireless Earbuds Occiam Bluetooth Headphones 48H Play Back Earphones in Ear Waterproof with Microphone LED Display for Sports Running Workout Black"
            price={39.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61cLu+0jalL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="123213418"
            title="Toshiba 43LF421U21 43-inch Smart HD 1080p TV - Fire TV, Released 2020"
            price={269.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61piX33QmAL._AC_SX679_.jpg"
          />
          <Product
            id="495380949"
            title="12’’ Screen Magnifier for Smartphone – Mobile Phone 3D Magnifier Projector Screen for Movies, Videos, and Gaming – Foldable Phone Stand with Screen Amplifier – Compatible with All Smartphones"
            price={20.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61iUlWXk3+L._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="908293325"
            title="Esright Right Facing Sectional Sofa with Ottoman,Convertible Corner Couches with Armrest Storage, Sectional Couch for Living Room & Apartment, Right Chaise & Gray"
            price={599.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81kqtB+MCnS._AC_SX569_.jpg"
          />
          <Product
            id="9082933256"
            title="kupet Modern Reversible Sectional Sofa Couch for Living Room with Chaise & Ottoman Micro Suede Fabric, Gray"
            price={875.59}
            rating={4}
            image="https://m.media-amazon.com/images/I/81AYHrQaLlL._AC_SL1500_.jpg"
          />
          <Product
            id="90829332567"
            title="Kealive Deluxe Upholstered Sleigh Bed Frame with Adjustable Headboard, Modern Faux Leather Low Profile Platform Bed, Wood Slat Support, King Size, Black"
            price={500.59}
            rating={4}
            image="https://m.media-amazon.com/images/I/81LOj-bB6FL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Bonzy Home Glossy LED TV Stand, Black TV Stand with LED RGB Lights, Wood Media Storage Console for 65 Inch TV, Flat Screen TV Cabinet, Gaming Consoles - in Lounge Room, Living Room and Bedroom (Black)"
            price={200.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/711jLJx+yJL._AC_SY355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
