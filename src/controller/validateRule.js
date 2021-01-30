import { 
  httpError, 
  validationError, 
  validationSuccess 
} from "../helper/index";


export const validateRule = (req, res) => {
  // Get request body
  const {rule, data} = req.body;

  // Get values to check against
  const fieldValue = data[rule.field];
  const conditionValue = rule.condition_value;

  // Check conditions
  switch(rule.condition){
    case 'gte':
      fieldValue >= conditionValue 
        ?
          validationSuccess(res, rule.field, data[rule.field], rule.condition, rule.condition_value)
        :
          validationError(res, rule.field, data[rule.field], rule.condition, rule.condition_value); 
        break;
      case 'eq':
        fieldValue === conditionValue 
          ? 
            validationSuccess(res, rule.field, data[rule.field], rule.condition, rule.condition_value)
          :
            validationError(res, rule.field, data[rule.field], rule.condition, rule.condition_value); 
          break;
      case 'neq':
        fieldValue != conditionValue
          ?
            validationSuccess(res, rule.field, data[rule.field], rule.condition, rule.condition_value)
          :
            validationError(res, rule.field, data[rule.field], rule.condition, rule.condition_value); 
          break;
      case 'gt':
        fieldValue > conditionValue
          ?
            validationSuccess(res, rule.field, data[rule.field], rule.condition, rule.condition_value)
          :
            validationError(res, rule.field, data[rule.field], rule.condition, rule.condition_value); 
          break;
      case 'contains':
        conditionValue.includes(rule.field) 
          ? 
            validationSuccess(res, rule.field, data[rule.field], rule.condition, rule.condition_value) 
          : 
            httpError(res, `field ${rule.field} is missing from data`, null);
          break;
  }
}