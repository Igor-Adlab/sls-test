## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS


## Check this code

### Serverless offline
Run `serverless offline start`. API Url: `localhost:3000/dev/[function_name]`.

### Run one function locally

In order to test the hello function locally, run the following command:

- `npx sls invoke local -f counter --path src/functions/counter/mock.json` if you're using NPM
- `yarn sls invoke local -f counter --path src/functions/counter/mock.json` if you're using Yarn

### Remotely

Copy and replace your `url` - found in Serverless `deploy` command output - and `text` parameter in the following `curl` command in your terminal or in Postman to test your newly deployed application.

```
curl --location --request POST 'https://myApiEndpoint/dev/counter' \
--header 'Content-Type: application/json' \
--data-raw '{
    "text": "Hello world!"
}'
```
