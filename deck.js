// import global stylesheet
import "./style.css";

// import `slides` from your mdx files and spread into `slides` export
import { slides as introduction } from "./slides/00-introduction.mdx";
import { slides as finsihApplication } from "./slides/01-finish-application.mdx";
import { slides as compileApplication } from "./slides/02-compile-application.mdx";
import { slides as callbackMateri } from "./slides/03-callback-materi.mdx";
import { slides as penutup } from "./slides/99-penutupan.mdx";

// theme export for code-surfer
export { dracula as theme } from "code-surfer";

// Spread your slides here...
export const slides = [
  ...introduction,
  ...finsihApplication,
  ...compileApplication,
  ...callbackMateri,
  ...penutup
];
