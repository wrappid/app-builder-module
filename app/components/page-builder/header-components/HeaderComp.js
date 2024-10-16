import { useEffect, useState } from "react";

import {
  CoreBox, CoreButton, CoreClasses, CoreInput, CoreTypographyBody2,
  coreUseLocation,
  HTTP,
  apiRequestAction
} from "@wrappid/core";
import { useDispatch, useSelector } from "react-redux";

import IconSelector from "./IconSelector";
import { GET_PAGE_DATA } from "../../../types/appBuilderTypes";

export default function HeaderComp() {
  const location = coreUseLocation();
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const pageId = searchParams.get("id");

    if (pageId) {
      const pageIdUri = encodeURIComponent(JSON.stringify({ id: pageId }));

      dispatch(
        apiRequestAction(
          HTTP.GET,
          `/business/individual/Pages?_defaultFilter=${pageIdUri}`,
          true,
          {},
          GET_PAGE_DATA
        )
      );
    }
  }, [location.search]);

  const pageData = useSelector((state) => state.testBuilderReducer?.pageData);

  const pageName = pageData?.data?.data?.name;

  useEffect(() => {
    if (pageName !== inputText) {
      setInputText(pageName || "");
    }
  }, [pageName]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <CoreBox
      styleClasses={[
        CoreClasses.HEIGHT.VH_8,
        CoreClasses.DISPLAY.FLEX,
        CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_SPACE_BETWEEN,
        CoreClasses.BG.BG_GREY_100,
        CoreClasses.PADDING.PX1,
      ]}
    >
      <CoreBox
        styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.GAP.GAP_2]}
      >
        <CoreButton
          variant="text"
          styleClasses={[CoreClasses.GAP.GAP_1, CoreClasses.COLOR.TEXT_BLACK_50]}
        >
          <CoreTypographyBody2
            styleClasses={[CoreClasses.MARGIN.M0, CoreClasses.COLOR.TEXT_BLACK_50]}
          >
            Example Module
          </CoreTypographyBody2>
        </CoreButton>

        <CoreInput
          id="outlined-basic"
          placeholder="Page Name"
          value={inputText}
          onChange={handleInputChange}
          styleClasses={[CoreClasses.MARGIN.M0]}
        />
      </CoreBox>

      <IconSelector />

      <CoreBox styleClasses={[
        CoreClasses.DISPLAY.FLEX,
        CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER,
        CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
        CoreClasses.GAP.GAP_2,
        CoreClasses.COLOR.TEXT_BLACK_50
      ]}>
        <CoreButton label="Preview" variant="text" color="inherit"/>

        <CoreButton label="History" variant="text" color="inherit" />

        <CoreButton label="Request for Review" variant="text" color="inherit" />

        <CoreButton label="Save" />
      </CoreBox>
    </CoreBox>
  );
}