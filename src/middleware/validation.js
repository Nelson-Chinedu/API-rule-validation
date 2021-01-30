import { httpError } from "../helper/index";


const validation = (req, res, next) => {
  const {rule, data} = req.body;

    const checkIfArray = Array.isArray(data);
  
  if (Object.keys(req.body).length === 0){
    return httpError(res, 'Invalid JSON payload passed.', null);
  }
  if (!rule){
    return httpError(res, 'rule is required.', null);
  }

  if (!rule.field){
    return httpError(res, 'field is required.', null);
  }

  if (!rule.condition){
    return httpError(res, 'condition is required.', null);
  }

  if (!rule.condition_value){
    return httpError(res, 'condition value is requied.', null);
  }

  if (!data) {
    return httpError(res, 'data is required.', null);
  };

  if(typeof rule !== 'object'){
    return httpError(res, 'rule should be an object.', null);
  }

  if (typeof data !== 'string' && typeof data !== 'object' && !checkIfArray){
   return httpError(res, 'data field can be any of a valid JSON object, a string or an array.', null);
  };

  if(!checkIfArray){
    if (!data.hasOwnProperty(rule.field)){
      return httpError(res, `field ${rule.field} is missing from data.`, null);
    }
  }

  return next();
};

export default validation;