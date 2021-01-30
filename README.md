## Rule Validation API

![deploy status](https://img.shields.io/badge/heroku-success-green)


### Technologies Used
- NodeJs/ExpressJs


### Api
https://api-rule-validation.herokuapp.com/

### Endpoint
`GET` ```/```

`POST` `/validate-rule`

### How To Test the Api Endpoint
Make a `GET` request to the API or make a `POST` request with a valid JSON object 


### Example

- Request
```
{
  "rule": {
    "field": "missions",
    "condition": "gte",
    "condition_value": 30
  },
  "data": {
    "name": "James Holden",
    "crew": "Rocinante",
    "age": 34,
    "position": "Captain",
    "missions": 45
  }
}
```

- Response
```
{
  "status": "success",
  "message": "field missions successfully validated",
  "data": {
    "validation": {
      "error": false,
      "field": "missions",
      "field_value": 45,
      "condition": "gte",
      "condition_value": 30
    }
  }
}
```
___

- Request
```
{
  "rule": {
    "field": "0",
    "condition": "eq",
    "condition_value": "a"
  },
  "data": "damien-marley"
}
```

- Response
```
{
  "status": "error",
  "message": "field 0 failed validation.",
  "data": {
    "validation": {
      "error": true,
      "field": "0",
      "field_value": "d",
      "condition": "eq",
      "condition_value": "a"
    }
  }
}
```