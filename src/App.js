import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import Electronics from "./components/Electronics";
import Jewelery from "./components/Jewelery";
import SubNavbar from "./components/SubNavbar";
import ImageCarousel from "./components/ImageCarousel";
import { ClerkProvider } from "@clerk/clerk-react";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ClerkProvider publishableKey={clerkPubKey}>
          <Navbar />
          <SubNavbar />
          <ImageCarousel />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/mens" element={<Mens />} />
            <Route path="/womens" element={<Womens />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/jewelery" element={<Jewelery />} />
          </Routes>
        </ClerkProvider>
      </BrowserRouter>
    </>
  );
}
