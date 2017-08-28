# Automation starter kit

It is a starter kit for automation projects so that you can focus on the stuff
to be automated over project configuration.

## How to use this project
Clone this repository, delete `.git` folder to delete git history and start a
new git project using `git init`. Modify tests for your use case. Supply any
variables using environment variables. Alternatively,
[fork](https://help.github.com/articles/fork-a-repo/) this project to make a
quick copy of it on your Github account.

## Manage sensitive credentials
Sensitive credentials like username and password must be supplied as an
environment variable and not be added in codebase.

## Example
A project `effortless` is built and configured on CI on the same lines. You can
[see it here](https://github.com/crashuniverse/effortless).

## Setup Travis CI for scheduled jobs in 5 steps
1. Make a free account or login with an existing account at
[Github](https://github.com/).
2. [Fork](https://help.github.com/articles/fork-a-repo/)
`automation-starter-kit` project that makes a copy of the project in your
account.
3. Make a free account at a leading
[Continuous Integration](https://en.wikipedia.org/wiki/Continuous_integration)
SaaS software [Travis CI](https://travis-ci.org/) using Github credentials or
login with an existing account.
4. [Add environment variables](https://docs.travis-ci.com/user/environment-variables/#Defining-Variables-in-Repository-Settings)
in Travis CI:
```
USERNAME: john.doe
PASSWORD: password
```
5. At 5pm on one of these days,
[add a cron job](https://docs.travis-ci.com/user/cron-jobs/#Adding-Cron-Jobs)
in Travis CI so that it runs a build everyday.

## How to stop using this project
If you decide to stop using automation of your project for any reason, you
should turn off builds for your project listed under
[Travis CI profile](https://travis-ci.org/profile).

## Development pre-requisites
`node`, `npm`  
`java8` or `java version "1.8.0_xxx"`

Install `node` and `npm` using
[nvm](https://github.com/creationix/nvm#installation)

## Install
`npm i`

## Run
`TEXT=radiohead npm start`

## Console output
```
$ TEXT=radiohead npm start

> automation-starter-kit@1.0.0 start /Users/Spock/Development/labs/automation-starter-kit
> npm t


> automation-starter-kit@1.0.0 test /Users/Spock/Development/labs/automation-starter-kit
> nightwatch tests

Starting selenium server... started - PID:  23355

[Automation] Test Suite
========================

Running:  automation
 ✔ Element <input[title="Search"]> was visible after 71 milliseconds.
 ✔ Element <input[value="Google Search"]> was visible after 57 milliseconds.

OK. 2 assertions passed. (29.026s)
```

Made with ❤️ in India.
