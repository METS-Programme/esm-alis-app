import React from "react";
import Header from "../components/header/header.component";
import Illustration from "./alis-header-illustration.component";
import styles from "./alis.scss";
import DataList from "../components/data-table/data-table.component";
import { ALISData } from "../sample-data";
import { ALISHeaders } from "../constants";
const AlisTestsOrderedComponent: React.FC = () => {
  return (
    <>
      <Header illustrationComponent={<Illustration />} />

      <div className={styles.container}>
        <h3 className={styles.listHeading}> Test Requests</h3>
        <DataList columns={ALISHeaders} data={ALISData} />
      </div>
    </>
  );
};

export default AlisTestsOrderedComponent;
