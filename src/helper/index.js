
export const httpError = (res, message, data) => {
  res.error({message, data});
};

export const httpSuccess = (res, message, data) => {
  res.success({message, data});
}

export const validationSuccess = (res, field, fieldValue, condition, conditionValue) => {
  let message = `field ${field} successfully validated`
  res.success({message, 
    data:{
      validation:{
        "error": false,
        "field": field,
        "field_value": fieldValue,
        "condition": condition,
        "condition_value": conditionValue
    }}
  });
};

export const validationError = (res, field, fieldValue, condition, conditionValue) => {
  let message = `field ${field} failed validation.`;
  res.error({message,
    data:{
      validation:{
        "error": true,
        "field": field,
        "field_value": fieldValue,
        "condition": condition,
        "condition_value": conditionValue
    }}
  });
};