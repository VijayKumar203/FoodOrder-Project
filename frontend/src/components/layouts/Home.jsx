import React, { useEffect } from "react";
import CountRestaurants from "./CountRestaurants";
import Restaurant from "./Restaurant";
import { getRestaurants, sortByRatings, sortByReviews, toggleVegOnly } from "../../actions/restaurantAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from './Loader';
import Message from "./Message";

export default function Home() {
    const dispatch = useDispatch();

    const { loading: restaurantsLoading,
         error: restaurantsError,
          restaurants,
          showVegOnly,
         } = useSelector((state) => state.restaurants);

useEffect (() => {
    dispatch(getRestaurants());
}, [dispatch]);

const handleSortByReview = () => {
    dispatch(sortByReviews());
};
const handleSortByRatings = () => {
    dispatch(sortByRatings());
};
const handleToogleVegOnly = () => {
    dispatch(toggleVegOnly());
};
    return (
        <>
        <CountRestaurants />
        {restaurantsLoading ? (<Loader />) : restaurantsError ? (<Message variant="danger">{restaurantsError}</Message>) : (
            <>
             <section>
            <div className="sort">
                <button className="sort_veg p-3" onClick={handleToogleVegOnly}>{showVegOnly ? "Show ALL" : "Pure Veg"}</button>
                <button className="sort_rev p-3" onClick={handleSortByReview}>Sort by Review</button>
                <button className="sort_rate p-3" onClick={handleSortByRatings}>Sort by Rating</button>
            </div>
            <div className="row mt-4">
                {restaurants ? (restaurants.map((restaurant) =>
                !showVegOnly || (showVegOnly && restaurant.isVeg) ? (
                    <Restaurant key={restaurant._id} restaurant={restaurant} />)
                     : null)
                ) : (<Message variant="info">No Restaurants Found</Message>)}
            </div>
        </section>
            </>
        ) }
       
        </>
    );
}