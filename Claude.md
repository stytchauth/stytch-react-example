# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
See Agents.md for additional content.

## Development Commands

- `npm install` - Install dependencies
- `npm start` or `npm run dev` - Start both frontend (port 3000) and backend (port 3001) concurrently
- `npm run build` - Build the application for production using Vite
- `npm run server` - Alternative command that also starts both frontend and backend

## Architecture Overview

This is a Stytch authentication example application built with React + TypeScript + Vite, demonstrating Email Magic Links and OAuth integration.

### Project Structure
- **Frontend**: React application using Vite dev server on port 3000
- **Backend**: Express.js server on port 3001 with authentication middleware
- **Authentication**: Stytch SDK for React with pre-built UI components

### Key Components
- `src/App.tsx` - Main router with conditional rendering based on user state
- `src/components/Login.tsx` - Handles authentication flow
- `src/components/Profile.tsx` - User profile display for authenticated users
- `src/components/Authorize.tsx` - Connected Apps authorization component
- `src/components/TokenAuthenticator.tsx` - Token-based authentication logic
- `server/server.ts` - Express API server with Stytch token validation
- `server/middleware/authorizeToken.ts` - Authentication middleware

### Environment Configuration
- Frontend uses `VITE_STYTCH_PUBLIC_TOKEN` for Stytch configuration
- Backend uses standard environment variables for server configuration
- Copy `.env.template` to `.env.local` and configure with your Stytch credentials

### Stytch Configuration Requirements
- SDK must be enabled in Stytch Dashboard
- Authorized environment: `http://localhost:3000`
- Redirect URLs: `http://localhost:3000/authenticate` for LOGIN and SIGNUP

## Agent-Driven Setup

Follow instructions in Agents.md for automated setup using the Stytch MCP Server.

If the MCP server is not installed, ask the user to install it with:
```shell
claude mcp add --transport http stytch  https://mcp.stytch.dev/mcp
```