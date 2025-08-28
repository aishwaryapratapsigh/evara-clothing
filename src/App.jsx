import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import CategoryList from "./components/Categorylist/CategoryList";
import ProductBox from "./components/ProductBox/ProductBox";
import TrendingSection from "./components/TrendingSection/TrendingSection";
import Subscribe from "./components/SubscribeSection/Subscribe";
import CollectionCards from "./components/CollectionCards/CollectionCards";
import SaleBanner from "./components/SaleBanner/SaleBanner";
import Support from "./components/SupportFeat/Support";
import Footer from "./components/Footer/Footer";

import heroImage from "./assets/heroImage.png";
import heroImage2 from "./assets/heroImage2.png";
import heroImg3 from "./assets/heroImg3.png";

import Search from "./pages/SearchBox/Search";
import Wishlists from "./pages/WishlistPage/Wishlists";
import AddToCart from "./pages/AddToCart/AddToCart";
import PageNotFound from "./pages/PageNotFound";
import ProfileLogin from "./pages/ProfileSection/ProfileLogin";
import ProfileSignUp from "./pages/ProfileSection/ProfileSignUp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection BannerImg={heroImage} />
            <CategoryList />
            <ProductBox />
            <TrendingSection TitleHeading="Trending T-Shirts" />
            <TrendingSection TitleHeading="Featured Products" />
            <HeroSection BannerImg={heroImage2} />
            <CollectionCards />
            <HeroSection BannerImg={heroImg3} />
            <SaleBanner />
            <Support />
            <Subscribe />
            <Footer />
          </>
        } />
        <Route path="/search" element={<Search />} />
        <Route path="/wishlist" element={<Wishlists />} />
        <Route path="/cart" element={<AddToCart />} />
        <Route path="/profile" element={<ProfileLogin />} />
        <Route path="/signup" element={<ProfileSignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;




