const { getFormSchema } = require("../functions/formSchema.helper");
const {putFormSchemaFunc, postDataFunc, postCloneFormschemaFunc, postUpdateStringValueFunc} = require("../functions/appbuilder.functions");
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

    let formSchema = await getFormSchema(formID, false);

    if (formSchema) {
      res.status(200).json({
        message: "Entity data found successfully",
        data  : formSchema,
        formID: formID
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

    let formSchema = await getFormSchema(formID);

    if (formSchema) {
      res.status(200).json({
        message: "FormSchema data found successfully",
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


module.exports.putFormSchema = async (req, res) => {
  try{
    // res.status(200).json({message: "API call succecfully!!"});
    let result = await putFormSchemaFunc(req, res);
    let {status, ...resdata} = result;
    res.status(status).json({...resdata});
  }catch(err){
    res.status(500).json({message: err});
  }
};

module.exports.postData = async (req,res) => {
  try{
    // res.status(200).json({message: "API call succesfully!!"});
    let result = await postDataFunc(req, res);
    let {status, ...resdata} = result;
    res.status(status).json({...resdata});
  }catch(err){
    res.status(500).json({message: err});
  }
};

module.exports.postCloneFormschema = async (req, res) => {
  try{ 
    // res.status(200).json({message: "API call succesfully!!"});
    let result = await postCloneFormschemaFunc(req, res);
    let {status, ...resdata} = result;
    res.status(status).json({...resdata});
  }catch(err){
    console.log(err);
    res.status(500).json({message: err});
  }
};

module.exports.postUpdateStringValue = async (req, res) => {
  try{ 
    // res.status(200).json({message: "API call succesfully!!"});
    let result = await postUpdateStringValueFunc(req, res);
    let {status, ...resdata} = result;
    res.status(status).json({...resdata});
  }catch(err){
    console.log(err);
    res.status(500).json({message: err});
  }
};