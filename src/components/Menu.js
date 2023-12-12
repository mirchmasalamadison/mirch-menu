"use client";
import { useState } from "react";
import categories from "../../public/assets/categories.json";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import Image from "next/image";
import HeroDecoration from "../../public/assets/homeAssets/intro-decoration-hero.png";

const Category = ({ category }) => {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)}>
      <div className="menu-category">
        <h3 className="menu-category-heading">{category.sectionName}</h3>
        <div className="menu-category-dropdown">
          <h3>
            {!open ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropupCircle />}
          </h3>
        </div>
      </div>

      {open && <FoodList category={category} />}
    </div>
  );
};

const FoodList = ({ category }) => {
  return (
    <div className="menu-food-map">
      {category.foods.map((food) => (
        <div className="menu-food" key={food.foodId}>
          <div className="menu-food-header">
            <h4 className="menu-food-title">{food.foodName}</h4>
            <h4 className="menu-food-price">{food.price}</h4>
          </div>
          <div className="menu-food-text">
            <p>{food.description}</p>
          </div>

          <div className="border-bottom"></div>
        </div>
      ))}
    </div>
  );
};
const Menu = () => {
    const [open, setOpen] = useState(false);

  return (
    <section className="menu-section">
          <div className="menu-content-container">
      <Image
        src={HeroDecoration}
        width={200}
        height={35}
        alt="small gold stem decoration for hero section"
        className=""
      />

  


     
      <h1 className="menu-heading">Our Menu</h1>

            <div className='menu-buffet-dropdown' onClick={() => setOpen(!open)}>
      <div className="menu-category">
        <h2 className="menu-category-heading">Lunch Buffet</h2>
        <div className="menu-category-dropdown">
          <h3>
            {!open ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropupCircle />}
          </h3>
        </div>
      </div>

              {open && 
      <p>Our lunch buffet features an assortment of South Asian dishes
              with a <br/> rotating menu of entrees & desserts. 
              <br />  <br/>Favorites and staples such as:
                      <br /><br />Cumin Toasted White Rice
                      <br /> Naan
              <br /> Chicken Tikka Masala
              <br /> Samosa
              <br/><br/> are always served!
          </p>}
    </div>

          <h3 className="dining-menu-heading">Dining</h3>
          <p className="dining-menu-text">Available during lunch, dinner, for takeout, and delivery.</p>

      <div className="menu-category-map">
        {categories.map((category) => {
          return <Category key={category.sectionName} category={category} />;
        })}
      </div>
      </div>

      {/* <div className="triangle"></div> */}
    </section>
  );
};

export default Menu;
