/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
module.exports.getNoAuthFormSchema = async (req, res) => {
  try {
    let formID = req.params.formID;

    if (!formID) {
      return res.status(500).json({ message: "formID is missing api path parameter" });
    }

    let formSchema = await getFormSchema(db, formID, false);

    if (formSchema) {
      res.status(200).json({
        data  : formSchema,
        formID: formID,
      });
    } else {
      res.status(204);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error  : error?.message || error,
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
module.exports.getFormSchema = async (req, res) => {
  try {
    let formID = req.params.formID;

    if (!formID) {
      return res.status(500).json({ message: "formID is missing api path parameter" });
    }

    let formSchema = await getFormSchema(db, formID);

    if (formSchema) {
      res.status(200).json({
        data  : formSchema,
        formID: formID,
      });
    } else {
      res.status(204);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error  : error?.message || error,
      message: "Something went wrong",
    });
  }
};