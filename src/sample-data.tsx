import { Button, ButtonSet } from "@carbon/react";
import { Edit, View, SendAlt } from "@carbon/react/icons";
import React from "react";

const getActions = () => {
  return (
    <ButtonSet>
      <Button
        renderIcon={View}
        kind="secondary--tertiary"
        size="sm"
        hasIconOnly
        iconDescription="View"
      />
      <Button
        renderIcon={Edit}
        kind="danger--primary"
        size="sm"
        hasIconOnly
        iconDescription="Edit"
      />
      <Button
        renderIcon={SendAlt}
        kind="danger--secondary"
        size="sm"
        hasIconOnly
        iconDescription="Send Result"
      />
    </ButtonSet>
  );
};

export const ALISData = [
  {
    date_ordered: "25-01-2024 01:34",
    patient_no: "U-0900-1-061805101508X",
    lab_number: "CPHL-7001-00001-FJ",
    patient_name: "Fred John (M, 23.4 years)",
    test_id: "PAR-1081",
    test: "BS for mps",
    visit_type: "Out-patient",
    actions: getActions(),
  },
  {
    date_ordered: "25-01-2024 01:34",
    patient_no: "U-0900-1-061805101508X",
    lab_number: "CPHL-7001-00001-FJ",
    patient_name: "Fred John (M, 23.4 years)",
    test_id: "HEM-1080",
    test: "CD4 Test",
    visit_type: "Out-patient",
    actions: getActions(),
  },
  {
    date_ordered: "25-01-2024 00:41",
    patient_no: "U-0192-1-130123130124X",
    lab_number: "CPHL-7001-00001-MM",
    patient_name: "Mawanda Max (M, 32.1 years)",
    test_id: "HEM-1076",
    test: "CD4 Test",
    visit_type: "Out-patient",
    actions: getActions(),
  },
  {
    date_ordered: "25-01-2024 00:41",
    patient_no: "U-0900-2-161509161509X",
    lab_number: "CPHL-7001-00001-PP",
    patient_name: "Poi Poi (M, 23.4 years)",
    test_id: "MIC-1070",
    test: "Urinalysis",
    visit_type: "Out-patient",
    actions: getActions(),
  },
  {
    date_ordered: "25-01-2024 00:41",
    patient_no: "U-0192-1-130123130124X",
    lab_number: "CPHL-7001-00001-MM",
    patient_name: "Mawanda Max (M, 32.1 years)",
    test_id: "HEM-1076",
    test: "BS for mps",
    visit_type: "Out-patient",
    actions: getActions(),
  },
  {
    date_ordered: "25-01-2024 00:41",
    patient_no: "U-0192-1-130123130124X",
    lab_number: "CPHL-7001-00001-MM",
    patient_name: "Poi Poi (M, 23.4 years)",
    test_id: "HEM-1076",
    test: "CD4 Test",
    visit_type: "Out-patient",
    actions: getActions(),
  },
];
