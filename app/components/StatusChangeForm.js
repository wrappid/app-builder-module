import { useEffect } from "react";

import {
  AppContainerLayout,
  CoreForm, CoreLayoutItem, FORM_EDIT_MODE,
  coreUseLocation, coreUseNavigate, coreUseParams,
  urls
} from "@wrappid/core";
import { useDispatch, useSelector } from "react-redux";

import { RESET_STATUS_SUCCESS_DATA } from "../types/appBuilderTypes";

export default function StatusChangeForm() {
  const location = coreUseLocation();
  const { state } = location;
  const { id, model, status } = coreUseParams();

  const navigate = coreUseNavigate();
  const dispatch = useDispatch();

  const statusUpdateSuccess = useSelector(
    (state) => state?.data?.statusUpdateSuccess
  );

  const routes = {
    BusinessEntitySchemas: "BUSINESS_ENTITY",
    Pages                : "PAGE",
  };

  useEffect(() => {
    if (statusUpdateSuccess) {
      dispatch({ type: RESET_STATUS_SUCCESS_DATA });
      navigate("/" + urls[routes[model]]);
      /** @todo
       * add dialog
       */
    }
  }, [statusUpdateSuccess]);

  return (
    <>
      <CoreLayoutItem id={AppContainerLayout.PLACEHOLDER.CONTENT}>
        <CoreForm
          apiMode={FORM_EDIT_MODE}
          initData={{ currentStatus: state?._status, id: id, nextStatus: status, requestTime: new Date() }}
          formId={"statusUpdateForm"}
          mode={FORM_EDIT_MODE}
          _query={{ model: model }}
          afterEditSuccess={() => {
            navigate(state.pageUrl);
          }}
        />
      </CoreLayoutItem>
    </>
  );
}
