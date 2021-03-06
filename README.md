# Strapi plugin content-export-import

![](https://github.com/lazurey/strapi-plugin-content-export-import/workflows/Run-Tests/badge.svg)

## First Setup
```bash

# create a strapi project 
yarn create strapi-app my-project --quickstart

cd /my-project

# create plugins folder if not exists
# mkdir plugins

# go to plugins folder
cd plugins

# clone the plugin code into a folder and skip the prefix. The folder name has to be the plugin name
git clone https://github.com/efechq/strapi-plugin-content-export-import content-export-import
# install dependencies
cd content-export-import && yarn install
# build the plugin
cd ../..
yarn build

# start
yarn develop
```

## Plugin development
```bash
yarn develop --watch-admin
```
Running at http://localhost:8000/

How to install:
--------
1. In a root folder of your strapi project run `npm install strapi-plugin-entity-relationship-chart --save`
2. Rebuild admin UI `strapi build`
3. Run strapi `strapi develop`

## Features

- Support JSON export & import
- Delete all content of a type

## How to test

Create a single and collection type without draft modus and the following fields:
- text
- number
- checkbox
- richtext

**Not supported**

- Media fields, e.g. image, video, etc.
- Any other file type, e.g. csv, etc.

## References

- [Component List - Strapi Helper Plugin](https://github.com/strapi/strapi/tree/master/packages/strapi-helper-plugin/lib/src/components)
- [Strapi Content Import Plugin](https://github.com/strapi/community-content/tree/master/tutorials/code/import-content-plugin-tutorial/plugins/import-content)
- [Guide to Strapi Content Import Plugin](https://strapi.io/blog/how-to-create-an-import-content-plugin-part-1-4?redirectPage=3)
- [Strapi Styled Component](https://buffetjs.io/storybook/?path=/story/components--button)
