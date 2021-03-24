import Loader from "components/COMMON/Loader/Loader";
import React, { Suspense } from "react";

function withSuspense(Component, props) {
  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
}

export default withSuspense;
