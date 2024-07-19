#!/usr/bin/env node

const inquirer = require("inquirer");
const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`Failed to execute ${command}`, e);
    return false;
  }
  return true;
};

const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is your project named?",
  },
];

const projectName = process.argv[2];
const gitCloneCommand = `git clone --depth 1 https://github.com/EzequielVilla/base-express-backend ${projectName}`;
const installCommand = `cd ${projectName} && npm install`;
console.log("Cloning repository...");
const checkedOut = runCommand(gitCloneCommand);
if (!checkedOut) process.exit(-1);
const installedDeps = runCommand(installCommand);
if (!installedDeps) process.exit(-1);
console.log("Project created successfully with the following configuration:");

// const installInquirer = `npm install inquirer`;
// const inquirerInstalled = runCommand(installInquirer);
// if (!inquirerInstalled) process.exit(-1);
// const gitCloneCommand = `git clone --depth 1 https://github.com/EzequielVilla/base-express-backend ${projectName}`;

// inquirer
//   .prompt(questions)
//   .then((answers) => {
//     const { projectName } = answers;
//     console.log(`Project Name: ${projectName}`);
//   })
//   .catch((error) => {
//     console.error("Error creating project:", error);
//   });
