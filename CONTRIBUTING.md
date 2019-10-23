# Contribution Guide 

Thanks for taking interest and I appreciate your efforts towards making this projects even better. 

## How to setup?

This is the most simple project when it comes to contributions, setup, opening issues/pull requests. So et's get started.

- Clone the repo using the command `git clone git@github.com:knaxus/problem-solving-javascript.git`<sup>1</sup>
- Install the packages to get suport for linter using `npm install`

1: If you do not have **ssh** setup for github, while cloning go with **https** 

### Before you start, keep the following things in mind:
- We use ESLint for code linting
- The linter follows [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Go though the folder structure carefully and follow the same
- Go though the format and file convenetions used while adding tests (both test case and test files)

## Adding your code

- When adding a new problem with solution
  - Take care of the filename convention (Very Important)
  - Problem statement should be there and support it with some examples
  - Make sure you've add the **Run Time Complexity** of your solution
  - Please take care of the segregation of the Problems as per the given Folder Structure
  - It's great if you can add the Unit Tests to verify your solutions as well

- When adding a Unit Test
  - Take care of the file name convention
  - Make sure CI (Travis) is passing
  - Expanding the test suite until (close to) 100 percent code coverage is achieved

### Notes

- Keep an eye on this guide, it's subjected to change frequently.
- Please do not break the ESLint rules
- Todo
  - Issue Template
  - PR Template
