"use client";
import "../../globals.css";
import styles from "./nav.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { useState, useRef } from "react";
import Link from "next/link";

library.add(fab, fas, far);

function CartItem() {
  const [amount, setAmount] = useState(1);
  const amountRef = useRef();

  function increaseAmount() {
    amountRef.current.value = parseInt(amountRef.current.value) + 1;
  }

  function decreaseAmount() {
    if (amountRef.current.value > 1)
      amountRef.current.value = amountRef.current.value - 1;
  }
  function removeCartItem(e) {
    e.target.closest(`.${styles.cartItemContainer}`).remove();
  }

  return (
    <div className={styles.cartItemContainer}>
      <div className={styles.imgContainer}>
        <img src="https://activ.eg/cdn/shop/files/BAG-ACTIVN-BCK4S23-296487-RED-BLK_2_large.jpg?v=1722063951" />
      </div>
      <div className={styles.itemInfo}>
        <div className={styles.itemInfoHead}>
          <p className={styles.title}>
            ACTIV LAPTOP BACKPACK L50*W34 - RED & BLK
          </p>
          <button onClick={removeCartItem}>
            <FontAwesomeIcon icon="fa-solid fa-xmark" />
          </button>
        </div>
        <div className={styles.quantity}>
          <div className={styles.quantityButtons}>
            <button onClick={decreaseAmount}>-</button>
            <input
              type="number"
              value={amount}
              ref={amountRef}
              onChange={(e) => {
                if (e.target.value === "") e.target.value = 1;
                setAmount(e.target.value);
              }}
            />
            <button onClick={increaseAmount}>+</button>
          </div>
          <p className={styles.price}>100.00 EGP</p>
        </div>
      </div>
    </div>
  );
}

function Nav1() {
  return (
    <div className={`container ${styles.nav1}`}>
      <Link href="/" className={styles.navHeader}>
        <div className={styles.logoContainer}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmef-O-JJCUsZZx1bY82wq9fqdthj-a48V2A&s" />
        </div>
        <h1>E-Commerce</h1>
      </Link>

      <div className={styles.searchBarContainer}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search for products..."
        />
        <button className={styles.searchBtn}>
          <FontAwesomeIcon
            icon="fa-solid fa-magnifying-glass"
            style={{ width: "25px" }}
          />
        </button>
      </div>

      <Link href="../pages/sign" className={styles.navBtns}>
        <FontAwesomeIcon
          icon="fa-regular fa-user"
          style={{ width: "30px", height: "25px" }}
        />
        <p>Sign in</p>
      </Link>

      <Link
        href="../pages/wishlist"
        className={`${styles.navBtns} ${styles.wishlist}`}
        title="Wishlist"
      >
        <div className={styles.counter}>
          <p>0</p>
        </div>
        <FontAwesomeIcon
          icon="fa-regular fa-heart"
          style={{ width: "40px", height: "30px" }}
        />
      </Link>

      <button
        className={styles.navBtns}
        data-bs-toggle="offcanvas"
        data-bs-target="#cartSideBar"
      >
        <div className={styles.counter}>
          <p>0</p>
        </div>
        <FontAwesomeIcon
          icon="fa-solid fa-cart-shopping"
          style={{ width: "40px", height: "30px" }}
        />
      </button>
      <div className={`offcanvas offcanvas-end`} id="cartSideBar">
        <div className={`offcanvas-header ${styles.cartHeader}`}>
          <p>CART (1)</p>
          <button type="button" data-bs-dismiss="offcanvas">
            <FontAwesomeIcon
              icon="fa-solid fa-xmark"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        </div>
        <div className={`offcanvas-body ${styles.cartBody}`}>
          <div className={styles.itemContainer}>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className={styles.cartFooter}>
            <div className={styles.total}>
              <p>TOTAL:</p>
              <p>100.00 EGP</p>
            </div>
            <div className={styles.footerLinks}>
              <Link href="../pages/cart">VIEW CART</Link>
              <Link href="/">CHECKOUT</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav2() {
  return (
    <div className={`container-fluid ${styles.nav2}`}>
      <div className={`container ${styles.contentContainer}`}>
        <ul className={styles.mainNav}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.categoriesLink}>
            <Link href="/">
              Categories <FontAwesomeIcon icon="fa-solid fa-caret-down" />
            </Link>
            <div className={styles.categoriesDropDown}>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">Categories</Link>
                </li>
                <li>
                  <Link href="/">About Us</Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="../pages/contact">Contact Us</Link>
          </li>
        </ul>

        <button
          className={styles.menuBtn}
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#navSideBar"
        >
          <FontAwesomeIcon
            className={styles.menuIcon}
            icon="fa-solid fa-bars"
          />
          <p>Menu</p>
        </button>

        <div className={styles.searchBarContainer}>
          <input
            type="text"
            className={styles.searchBar}
            placeholder="Search for products..."
          />
          <button type="submit" className={styles.searchBtn}>
            <FontAwesomeIcon
              icon="fa-solid fa-magnifying-glass"
              style={{ width: "25px" }}
            />
          </button>
        </div>

        <button
          className={styles.navBtns}
          data-bs-toggle="offcanvas"
          data-bs-target="#cartSideBar"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-cart-shopping"
            style={{ width: "40px", height: "30px" }}
          />
        </button>
      </div>

      <div
        className={`offcanvas offcanvas-start`}
        id="navSideBar"
        style={{ width: "350px" }}
      >
        <div className={`offcanvas-header ${styles.sideBarHeader}`}>
          <div className={styles.sideBarLogo}>
            <img src="../side-bar-logo.png" />
          </div>
          <button type="button" data-bs-dismiss="offcanvas">
            <FontAwesomeIcon
              icon="fa-solid fa-xmark"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        </div>
        <div className={`offcanvas-body ${styles.sideBarBody}`}>
          <li className={styles.sideNavItem}>
            <Link href="#">
              <FontAwesomeIcon icon="fa-solid fa-house" /> Home
            </Link>
          </li>
          <li className={styles.sideNavItem}>
            <button
              className={styles.categoriesBtn}
              data-bs-toggle="collapse"
              data-bs-target="#categoriesCollapse"
            >
              <FontAwesomeIcon icon="fa-solid fa-list" /> Categories
            </button>
          </li>
          <div
            id="categoriesCollapse"
            className={`collapse ${styles.categoriesSideNav}`}
          >
            <li className={styles.sideNavItem}>
              <Link href="#">Home</Link>
            </li>
            <li className={styles.sideNavItem}>
              <Link href="/">Categories</Link>
            </li>
            <li className={styles.sideNavItem}>
              <Link href="/">About Us</Link>
            </li>
          </div>
          <li className={styles.sideNavItem}>
            <Link href="/">
              <FontAwesomeIcon icon="fa-solid fa-address-card" /> About Us
            </Link>
          </li>
          <li className={styles.sideNavItem}>
            <Link href="/">
              <FontAwesomeIcon icon="fa-solid fa-heart" /> Wishlist
            </Link>
          </li>
          <li className={styles.sideNavItem}>
            <Link href="/">
              <FontAwesomeIcon icon="fa-solid fa-user" /> Sign in
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default function Nav() {
  return (
    <div className={styles.main}>
      <Nav1 />
      <Nav2 />
    </div>
  );
}
