import car from "../../images/svg-1.svg";
import piggybank from "../../images/svg-2.svg";
import signup from "../../images/svg-3.svg";
import team from '../../images/team-discussing-on-website-development.svg'

import mission from '../../images/cryptocurrency-mobile-app.svg'


export const homeObjOne = {
  id: "ourmission",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  headline: "Our Mission",
  description:
    "Is to secure the decentralized internet and try to reduce the $700 million stolen in 2021 in digital assets every year. For this, we are 100% aware that we must be able to audit any type of project: large, medium and small.",
  buttonLabel: "Get started",
  imgStart: false,
  img:mission,
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "aboutus",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  headline: "About us",
  description:
    "We are a group of Argentine auditors who have more than 15 years of experience in the world of software development and more than 3 years of experience in the world of solidity smart contract audits.",
  imgStart: true,
  img: team,
  alt: "Papers",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  headline: "Final Report",
  description:
    "Our final report includes a detailed summary of the audit process, links to the audited smart contract, and an explanation of what it does. "+
    "The report then details the performed analysis and describes the issues found in the contract including severity level. "+
    "Based on code best practices, we propose improvements which would enhance the contract code semantics. "+
    "Finally, we wrap up the report with a conclusion which includes a summary of the most important items we noticed in the audit process.",
  buttonLabel: "Start Now",
  imgStart: false,
  img: signup,
  alt: "Papers",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjFour = {
  id: "discover",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Services",
  headline: "Login to your account at any time",
  description:
    "We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.",
  buttonLabel: "Learn More",
  imgStart: true,
  img: piggybank,
  alt: "Piggybank",
  dark: false,
  primary: false,
  darkText: true,
};