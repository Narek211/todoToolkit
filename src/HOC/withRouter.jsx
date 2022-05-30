import React from "react";
import { useParams } from "react-router-dom";

// HOC -> withRouter
// hook -> useParams

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const params = useParams();

    return <Component params={params} {...props} />;
  };

  return Wrapper;
};