import { httpSuccess } from "../helper/index";


export const index = (req, res) => {
  const message = "My Rule-Validation API";
  const data = {
    name: "Egwu Chinedu Nelson",
    github: "@nelson-chinedu",
    email: "egwuchinedu.dev@gmail.com",
    mobile: "08132937769",
    twitter: "@iamNelsonDev"
  }
  return httpSuccess(res, message, data);
};

