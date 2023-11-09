# ecom-project
 
To adapt project:
change project name (and optionally port) in package.json "name" and "scripts.mongo dev", and in src/server/index.ts
create a directory for database, and change directory in package.json "scripts.mongo dev"

To run:
first time:
npm install
npm mongo

subsequent times:
npm run dev