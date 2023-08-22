import React, { useState } from "react";

import {
  CoreH5,
  CoreList,
  CoreIcon,
  CoreDivider,
  CoreClasses,
  CoreTypographyBody1,
  CoreTypographyBody2,
  CoreTableContainer,
  CoreTable,
  CoreTableHead,
  CoreTableRow,
  CoreTableCell,
  CoreTableBody,
  CorePaper,
} from "@wrappid/core";

import CodeSample from "../CodeSample";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CoreTableDocs() {
  return (
    <>
      <CoreH5 styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>CoreTable</CoreH5>

      <CoreTypographyBody1>
        Tables display sets of data. They can be fully customized.Tables display
        information in a way that's easy to scan, so that users can look for
        patterns and insights. They can be embedded in primary content, such as
        cards.
      </CoreTypographyBody1>

      <CodeSample
        title={"Basic Table"}
        description={<>A simple example with no frills.</>}
        code={`<CoreTableContainer component={CorePaper}>
<CoreTable styleClasses={[CoreClasses.WIDTH.MIN_W_75]}>
	<CoreTableHead>
		<CoreTableRow>
			<CoreTableCell>Dessert (100g serving)</CoreTableCell>
			<CoreTableCell align="right">Calories</CoreTableCell>
			<CoreTableCell align="right">Fat (g)</CoreTableCell>
			<CoreTableCell align="right">Carbs (g)</CoreTableCell>
			<CoreTableCell align="right">Protein (g)</CoreTableCell>
		</CoreTableRow>
	</CoreTableHead>
	<CoreTableBody>
		{rows.map((row) => (
			<CoreTableRow
				key={row.name}
			>
				<CoreTableCell component="th" scope="row">
					{row.name}
				</CoreTableCell>
				<CoreTableCell align="right">{row.calories}</CoreTableCell>
				<CoreTableCell align="right">{row.fat}</CoreTableCell>
				<CoreTableCell align="right">{row.carbs}</CoreTableCell>
				<CoreTableCell align="right">{row.protein}</CoreTableCell>
			</CoreTableRow>
		))}
	</CoreTableBody>
</CoreTable>
</CoreTableContainer>`}
        renderElement={
          <CoreTableContainer component={CorePaper}>
            <CoreTable
              styleClasses={[CoreClasses.WIDTH.MIN_W_75]}
            >
              <CoreTableHead>
                <CoreTableRow>
                  <CoreTableCell>Dessert (100g serving)</CoreTableCell>
                  <CoreTableCell align="right">Calories</CoreTableCell>
                  <CoreTableCell align="right">Fat (g)</CoreTableCell>
                  <CoreTableCell align="right">Carbs (g)</CoreTableCell>
                  <CoreTableCell align="right">Protein (g)</CoreTableCell>
                </CoreTableRow>
              </CoreTableHead>
              <CoreTableBody>
                {rows.map((row) => (
                  <CoreTableRow
                    key={row.name}
                  >
                    <CoreTableCell component="th" scope="row">
                      {row.name}
                    </CoreTableCell>
                    <CoreTableCell align="right">{row.calories}</CoreTableCell>
                    <CoreTableCell align="right">{row.fat}</CoreTableCell>
                    <CoreTableCell align="right">{row.carbs}</CoreTableCell>
                    <CoreTableCell align="right">{row.protein}</CoreTableCell>
                  </CoreTableRow>
                ))}
              </CoreTableBody>
            </CoreTable>
          </CoreTableContainer>
        }
      />

			{/* NOT YET WRITTEN */}
			{/* Data Table */}
      {/* <CodeSample
        title={"Data Table"}
        description={
          <>
            The <code>Table</code> component has a close mapping to the native{" "}
            <code>{`<table>`}</code> elements. This constraint makes building
            rich data tables challenging. The <code>DataGrid</code> component is
            designed for use-cases that are focused on handling large amounts of
            tabular data. While it comes with a more rigid structure, in
            exchange, you gain more powerful features.
          </>
        }
				code={``}
      	// renderElement={}
			/> */}

			{/* Dense Table */}
			<CodeSample
				title={"Dense Table"}
				description={<>A simple example of a dense table with no frills.</>}
				code={`<CoreTableContainer component={CorePaper}>
<CoreTable
	styleClasses={[CoreClasses.WIDTH.MIN_W_75]}
	size="small"
>
	<CoreTableHead>
		<CoreTableRow>
			<CoreTableCell>Dessert (100g serving)</CoreTableCell>
			<CoreTableCell align="right">Calories</CoreTableCell>
			<CoreTableCell align="right">Fat (g)</CoreTableCell>
			<CoreTableCell align="right">Carbs (g)</CoreTableCell>
			<CoreTableCell align="right">Protein (g)</CoreTableCell>
		</CoreTableRow>
	</CoreTableHead>
	<CoreTableBody>
		{rows.map((row) => (
			<CoreTableRow
				key={row.name}
			>
				<CoreTableCell component="th" scope="row">
					{row.name}
				</CoreTableCell>
				<CoreTableCell align="right">{row.calories}</CoreTableCell>
				<CoreTableCell align="right">{row.fat}</CoreTableCell>
				<CoreTableCell align="right">{row.carbs}</CoreTableCell>
				<CoreTableCell align="right">{row.protein}</CoreTableCell>
			</CoreTableRow>
		))}
	</CoreTableBody>
</CoreTable>
</CoreTableContainer>`}
				renderElement={
					<CoreTableContainer component={CorePaper}>
            <CoreTable
              styleClasses={[CoreClasses.WIDTH.MIN_W_75]}
              size="small"
            >
              <CoreTableHead>
                <CoreTableRow>
                  <CoreTableCell>Dessert (100g serving)</CoreTableCell>
                  <CoreTableCell align="right">Calories</CoreTableCell>
                  <CoreTableCell align="right">Fat (g)</CoreTableCell>
                  <CoreTableCell align="right">Carbs (g)</CoreTableCell>
                  <CoreTableCell align="right">Protein (g)</CoreTableCell>
                </CoreTableRow>
              </CoreTableHead>
              <CoreTableBody>
                {rows.map((row) => (
                  <CoreTableRow
                    key={row.name}
                  >
                    <CoreTableCell component="th" scope="row">
                      {row.name}
                    </CoreTableCell>
                    <CoreTableCell align="right">{row.calories}</CoreTableCell>
                    <CoreTableCell align="right">{row.fat}</CoreTableCell>
                    <CoreTableCell align="right">{row.carbs}</CoreTableCell>
                    <CoreTableCell align="right">{row.protein}</CoreTableCell>
                  </CoreTableRow>
                ))}
              </CoreTableBody>
            </CoreTable>
          </CoreTableContainer>
				}
			/>
    </>
  );
}
