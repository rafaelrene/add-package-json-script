# Add Project Script

## Description

This is a small package that will allow you to programatically add scripts to your package.json file.
It was inspired by [this package](https://github.com/coleww/npm-add-script), but this one allows you to specify path
to your package.json file as well. Note that you will (almost) never need to specify the path, as most of the time you will want to manipulate the package.json file in your current project (which the script will automatically assume if you don't specify path parameter). There are however few edge cases that can happen, mainly when dealing with git submodules and since I needed something like this, but wasn't able to find it, I just decided to build it myself and share it, because why not.

## Installation

If you're using npm you can write this to your terminal

```shell
npm install -save-dev add-project-script
```

Alternatively, you can also use yarn

```shell
yarn add --dev add-project-script
```

You can also install it globally in order to gain a nice command line tool in case you need it.

```shell
npm install -g add-project-script
```

## Usage

### CLI

Usage is fairly simple.

```shell
add-project-script -n "prestart" -v "node scripts/setup-hooks.js"
```

### API

Calling this from the node is equally simple. Simply pass an object of options.

```javascript
import addScript from 'add-project-script';

addScript({ name: 'prestart', value: 'node scripts/setup-hooks.js' });
```

### Available commands

Here is a list of all available commands.

| Short | Long        | API    | Description                                              | Type                     |
| ----- | ----------- | ------ | -------------------------------------------------------- | ------------------------ |
| -n    | --name      | name   | name of the script                                       | String                   |
| -v    | --value     | value  | value of the script                                      | String                   |
| -p    | --path      | path   | specify the path to package.json                         | String                   |
| -f    | --force     | force  | if script with same name exists, overwrite it            | Boolean (default: false) |
|       | --no-throws | throws | if package.json file is not found, do not throw an error | Boolean (default: true)  |
