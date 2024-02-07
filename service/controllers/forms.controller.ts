// eslint-disable-next-line no-unused-vars
import { putFormSchemaFunc } from "../functions/appbuilder.functions";
import * as formsController from "../functions/formSchema.helper";
/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getNoAuthFormSchema = async (req: any, res: any) => {
  try {
    let formID = req.params.formID;

    if (!formID) {
      return res
        .status(500)
        .json({ message: "formID is missing api path parameter" });
    }

    let formSchema = await getFormSchema(formID, res);

    if (formSchema) {
      res.status(200).json({
        message: "Entity data found successfully",
        data: formSchema,
        formID: formID,
      });
    } else {
      res.status(204);
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: error?.message || error,
      message: "Something went wrong",
    });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const getFormSchema = async (req: any, res: any) => {
  try {
    let formID: any = req;

    if (!formID) {
      return res
        .status(500)
        .json({ message: "formID is missing api path parameter" });
    }

    let formSchema = await formsController.getFormSchema(formID);

    if (formSchema) {
      res.status(200).json({
        message: "FormSchema data found successfully",
        data: formSchema,
        formID: formID,
      });
    } else {
      res.status(204);
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      error: error?.message || error,
      message: "Something went wrong",
    });
  }
};

const putFormSchema = async (req: any, res: any) => {
  try {
    // res.status(200).json({message: "API call succecfully!!"});
    let result = await putFormSchemaFunc(req, res);
    let { status, ...resdata } = result;
    res.status(status).json({ ...resdata });
  } catch (err: any) {
    res.status(500).json({ message: err });
  }
};

export { getNoAuthFormSchema, getFormSchema, putFormSchema };
