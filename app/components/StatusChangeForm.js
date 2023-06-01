import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
// import swal from "sweetalert";

import { RESET_STATUS_SUCCESS_DATA } from "../types/appBuilderTypes";
import { CoreForm, FORM_IDS } from "@wrappid/core";
import { urls } from "../constants/constants";

export default function StatusChangeForm() {
  const location = useLocation();
  const { state } = location;
  const { id, model, status } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const statusUpdateSuccess = useSelector(
    (state) => state?.data?.statusUpdateSuccess
  );

  const routes = {
    BusinessEntitySchemas: "BUSINESS_ENTITY",
    Pages: "PAGE",
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
    <CoreForm
      initData={{ currentStatus: state?._status, id: id, nextStatus: status }}
      formId={FORM_IDS.__STATUS_UPDATE_FORM}
      _query={{ model: model }}
    />
  );
}
