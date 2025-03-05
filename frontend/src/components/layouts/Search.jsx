import React from "react";
import { IoMdSearch } from "react-icons/io";

export default function Search() {
    return (
        <form>
            <div className="input-group">
                <input type="text" placeholder="Search your favourite Restaurants" className="form-control" id="search_field" />
                <div className="input-group-append">
                    <button id="search_btn" className="btn">
                        <IoMdSearch className="fa fa-search" />
                    </button>
                </div>
            </div>
        </form>
    );
}