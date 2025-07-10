
## Agent Driven Setup

None of these steps are optional. Complete them in the exact order they are specified in. 

1. Make sure the Stytch MCP Server is installed. If not, prompt the user to install it from `https://mcp.stytch.dev`

2. Make sure all code dependencies are installed with `npm install`

3. Use the `listProjects` tool to find the Project ID of an existing `CONSUMER` `TEST` project. If there are multiple projects, you MUST ask the user which one to use. If the user wants to create a new project use the `createProject` tool.

4. Use the `updateConsumerSDKConfig` tool to ensure the SDK is enabled, and is authorized to run on `http://localhost:3000`. Make sure the Email Magic Links product and OAuth product are enabled and the SDK has permission to create new users.

5. Use the `getAllRedirectURLs` and `createRedirectURLs` tools to ensure `http://localhost:3000/authenticate` is registered as a default callback for `LOGIN` and `SIGNUP` actions.

6. Use the `getAllPublicTokens` and/or `createPublicToken` tools to retrieve the public token for the project.

7. Use the `createSecret` tool to create a new secret for the project.

8. Copy `.env.template` to `.env.local` and fill it out using the values generated previously.

8. Instruct the user to run `npm start` in a new terminal window. Do NOT attempt to run this command yourself.
