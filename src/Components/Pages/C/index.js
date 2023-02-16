import React, { useEffect } from "react";
import { useLocation, useParams} from "react-router-dom";

export default function CComponent() {
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    console.log({location, params});
  }, []);

  return <div>CComponent</div>;
}
