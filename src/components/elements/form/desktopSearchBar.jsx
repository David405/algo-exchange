import React from "react";
import './desktopSearchBar.css'
export function DesktopSearchBar(params) {
  return (
    <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
      <div className="form-group has-search">
        <span className="fa fa-search form-control-feedback" />
        <input
          type="text"
          placeholder="Search"
          className="form-control searchbar"
        />
      </div>
    </form>
  );
}
