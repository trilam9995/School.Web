import React from "react";
import styles from "./styles.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1 className="notFoundTitle">Oops! That page can’t be found.</h1>
      <p className="notFoundDesc">
        It looks like nothing was found at this location. Maybe try one of the
        links in the menu or press back to go to the previous page.
      </p>
    </div>
  );
};

export default NotFound;
