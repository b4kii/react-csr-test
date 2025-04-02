/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TestingRouteImport } from './routes/testing/route'
import { Route as IndexImport } from './routes/index'
import { Route as UsersIndexImport } from './routes/users/index'
import { Route as UsersLayoutImport } from './routes/users/_layout'
import { Route as TestingBakiImport } from './routes/testing/baki'
import { Route as authRegisterImport } from './routes/(auth)/register'
import { Route as authLoginImport } from './routes/(auth)/login'
import { Route as UsersLayoutUserIdImport } from './routes/users/_layout.$userId'

// Create Virtual Routes

const UsersImport = createFileRoute('/users')()

// Create/Update Routes

const UsersRoute = UsersImport.update({
  id: '/users',
  path: '/users',
  getParentRoute: () => rootRoute,
} as any)

const TestingRouteRoute = TestingRouteImport.update({
  id: '/testing',
  path: '/testing',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const UsersIndexRoute = UsersIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => UsersRoute,
} as any)

const UsersLayoutRoute = UsersLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => UsersRoute,
} as any)

const TestingBakiRoute = TestingBakiImport.update({
  id: '/baki',
  path: '/baki',
  getParentRoute: () => TestingRouteRoute,
} as any)

const authRegisterRoute = authRegisterImport.update({
  id: '/(auth)/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  id: '/(auth)/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const UsersLayoutUserIdRoute = UsersLayoutUserIdImport.update({
  id: '/$userId',
  path: '/$userId',
  getParentRoute: () => UsersLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/testing': {
      id: '/testing'
      path: '/testing'
      fullPath: '/testing'
      preLoaderRoute: typeof TestingRouteImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/login': {
      id: '/(auth)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/register': {
      id: '/(auth)/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof authRegisterImport
      parentRoute: typeof rootRoute
    }
    '/testing/baki': {
      id: '/testing/baki'
      path: '/baki'
      fullPath: '/testing/baki'
      preLoaderRoute: typeof TestingBakiImport
      parentRoute: typeof TestingRouteImport
    }
    '/users': {
      id: '/users'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersImport
      parentRoute: typeof rootRoute
    }
    '/users/_layout': {
      id: '/users/_layout'
      path: '/users'
      fullPath: '/users'
      preLoaderRoute: typeof UsersLayoutImport
      parentRoute: typeof UsersRoute
    }
    '/users/': {
      id: '/users/'
      path: '/'
      fullPath: '/users/'
      preLoaderRoute: typeof UsersIndexImport
      parentRoute: typeof UsersImport
    }
    '/users/_layout/$userId': {
      id: '/users/_layout/$userId'
      path: '/$userId'
      fullPath: '/users/$userId'
      preLoaderRoute: typeof UsersLayoutUserIdImport
      parentRoute: typeof UsersLayoutImport
    }
  }
}

// Create and export the route tree

interface TestingRouteRouteChildren {
  TestingBakiRoute: typeof TestingBakiRoute
}

const TestingRouteRouteChildren: TestingRouteRouteChildren = {
  TestingBakiRoute: TestingBakiRoute,
}

const TestingRouteRouteWithChildren = TestingRouteRoute._addFileChildren(
  TestingRouteRouteChildren,
)

interface UsersLayoutRouteChildren {
  UsersLayoutUserIdRoute: typeof UsersLayoutUserIdRoute
}

const UsersLayoutRouteChildren: UsersLayoutRouteChildren = {
  UsersLayoutUserIdRoute: UsersLayoutUserIdRoute,
}

const UsersLayoutRouteWithChildren = UsersLayoutRoute._addFileChildren(
  UsersLayoutRouteChildren,
)

interface UsersRouteChildren {
  UsersLayoutRoute: typeof UsersLayoutRouteWithChildren
  UsersIndexRoute: typeof UsersIndexRoute
}

const UsersRouteChildren: UsersRouteChildren = {
  UsersLayoutRoute: UsersLayoutRouteWithChildren,
  UsersIndexRoute: UsersIndexRoute,
}

const UsersRouteWithChildren = UsersRoute._addFileChildren(UsersRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/testing': typeof TestingRouteRouteWithChildren
  '/login': typeof authLoginRoute
  '/register': typeof authRegisterRoute
  '/testing/baki': typeof TestingBakiRoute
  '/users': typeof UsersLayoutRouteWithChildren
  '/users/': typeof UsersIndexRoute
  '/users/$userId': typeof UsersLayoutUserIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/testing': typeof TestingRouteRouteWithChildren
  '/login': typeof authLoginRoute
  '/register': typeof authRegisterRoute
  '/testing/baki': typeof TestingBakiRoute
  '/users': typeof UsersIndexRoute
  '/users/$userId': typeof UsersLayoutUserIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/testing': typeof TestingRouteRouteWithChildren
  '/(auth)/login': typeof authLoginRoute
  '/(auth)/register': typeof authRegisterRoute
  '/testing/baki': typeof TestingBakiRoute
  '/users': typeof UsersRouteWithChildren
  '/users/_layout': typeof UsersLayoutRouteWithChildren
  '/users/': typeof UsersIndexRoute
  '/users/_layout/$userId': typeof UsersLayoutUserIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/testing'
    | '/login'
    | '/register'
    | '/testing/baki'
    | '/users'
    | '/users/'
    | '/users/$userId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/testing'
    | '/login'
    | '/register'
    | '/testing/baki'
    | '/users'
    | '/users/$userId'
  id:
    | '__root__'
    | '/'
    | '/testing'
    | '/(auth)/login'
    | '/(auth)/register'
    | '/testing/baki'
    | '/users'
    | '/users/_layout'
    | '/users/'
    | '/users/_layout/$userId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  TestingRouteRoute: typeof TestingRouteRouteWithChildren
  authLoginRoute: typeof authLoginRoute
  authRegisterRoute: typeof authRegisterRoute
  UsersRoute: typeof UsersRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  TestingRouteRoute: TestingRouteRouteWithChildren,
  authLoginRoute: authLoginRoute,
  authRegisterRoute: authRegisterRoute,
  UsersRoute: UsersRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/testing",
        "/(auth)/login",
        "/(auth)/register",
        "/users"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/testing": {
      "filePath": "testing/route.tsx",
      "children": [
        "/testing/baki"
      ]
    },
    "/(auth)/login": {
      "filePath": "(auth)/login.tsx"
    },
    "/(auth)/register": {
      "filePath": "(auth)/register.tsx"
    },
    "/testing/baki": {
      "filePath": "testing/baki.tsx",
      "parent": "/testing"
    },
    "/users": {
      "filePath": "users",
      "children": [
        "/users/_layout",
        "/users/"
      ]
    },
    "/users/_layout": {
      "filePath": "users/_layout.tsx",
      "parent": "/users",
      "children": [
        "/users/_layout/$userId"
      ]
    },
    "/users/": {
      "filePath": "users/index.tsx",
      "parent": "/users"
    },
    "/users/_layout/$userId": {
      "filePath": "users/_layout.$userId.tsx",
      "parent": "/users/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
