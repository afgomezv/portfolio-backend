import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import abouts from "./abouts";
import brands from "./brands";
import contact from "./contact";
import experiences from "./experiences";
import skills from "./skills";
import testimonials from "./testimonials";
import workExperience from "./workExperience";
import works from "./works";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    abouts,
    brands,
    contact,
    experiences,
    skills,
    testimonials,
    workExperience,
    works,
  ]),
});
