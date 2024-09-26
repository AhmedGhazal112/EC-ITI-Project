"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./components/Card/card";
import Footer from "./components/Footer/footer";
import Nav from "./components/Nav/nav";
import styles from "./page.module.css";
import Link from "next/link";
import { useState, useRef } from "react";
import Carousel from "./components/Carousel/carousel";
export default function Home() {
  return (
    <div className={styles.mainPage}>
      <Nav />
      <div className={styles.mainContent}>
        <Carousel />
        <SpecialOffers />
        <NewProducts />
      </div>
      <Footer />
    </div>
  );
}

function SpecialOffers() {
  const container = useRef();

  function slideLeft() {
    container.current.scrollBy({ left: -260, behavior: "smooth" });
  }

  function slideRight() {
    container.current.scrollBy({ left: 260, behavior: "smooth" });
  }

  return (
    <div className={`${styles.section}`}>
      <div className={styles.header}>
        <h4>
          Special Offers{" "}
          <FontAwesomeIcon
            icon="fa-solid fa-fire"
            style={{ color: "#F8C051" }}
          />
        </h4>
        <Link href="/">View All →</Link>
      </div>
      <div className={styles.content}>
        <button onClick={slideLeft}>&lt;</button>
        <div className={styles.cardContainer} ref={container}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <button onClick={slideRight}>&gt;</button>
      </div>
    </div>
  );
}

function NewProducts() {
  const container = useRef();

  function slideLeft() {
    container.current.scrollBy({ left: -260, behavior: "smooth" });
  }

  function slideRight() {
    container.current.scrollBy({ left: 260, behavior: "smooth" });
  }

  return (
    <div className={`${styles.section}`}>
      <div className={styles.header}>
        <h4>New Products</h4>
        <Link href="/">View All →</Link>
      </div>
      <div className={styles.content}>
        <button onClick={slideLeft}>&lt;</button>
        <div className={styles.cardContainer} ref={container}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <button onClick={slideRight}>&gt;</button>
      </div>
    </div>
  );
}
