# Contribution Guide

Thanks for taking interest and I appreciate your efforts towards making this project even better.

## How to setup?

This is the most simple project when it comes to contributions, setup, opening issues/pull requests. So let's get started.

- Clone the repo using the command `git clone git@github.com:knaxus/problem-solving-javascript.git`<sup>1</sup>
- Install the packages to get support for linter using `npm install`

1: If you do not have **ssh** setup for github, while cloning go with **https**

### Before you start, keep the following things in mind:

- We use ESLint for code linting
- The linter follows [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Go through the folder structure carefully and follow the same
- Go through the format and file conventions used while adding tests (both test case and test files)

## How to pick up an Issue

- Comment on the issue first so that we can assign you the issue.
- If you raise a Pull Request for an issue and the Issue was not assigned to you, your PR will be marked as **Invalid**

## Submittng a Pull Request (PR)

- Add yourself to the assignee section
- Add meaningful heading and description to your PR
- Also mention the issue number in the description using **'#'**, e.g: **#12**
- Not following the above will mark your PR invalid

## Adding your code

- When adding a new problem with a solution

  - Take care of the filename convention (Very Important)
  - A problem statement should be there and support it with some examples
  - Make sure you've added the **Run Time Complexity** of your solution
  - Please take care of the segregation of the Problems as per the given Folder Structure
  - It's great if you can add the Unit Tests to verify your solutions as well
  - Do not forget to update **[TOC.md](TOC.md)** with your new problem or data structure

- When adding a Unit Test
  - Take care of the file name convention
  - Make sure CI (Travis) is passing
  - Expanding the test suite until (close to) 100 percentage code coverage is achieved

### Notes

- Keep an eye on this guide, it's subjected to change frequently.
- Please do not break the ESLint rules
- Todo
  - Issue Template
  - PR Template
