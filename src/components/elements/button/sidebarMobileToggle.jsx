import React from "react";
// TODO use name exports for reusable components
export  function SidebarMobileToggle (params) {
  return (
    <button
      id="sidebarToggleTop"
      className="btn btn-link d-md-none rounded-circle mr-3"
    >
      <i className="fa fa-bars" />
    </button>
  );
};
