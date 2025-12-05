### Install shadcn CLI via npm

Source: https://ui.shadcn.com/docs/registry/getting-started

This command installs the latest version of the shadcn command-line interface (CLI) globally or as a dev dependency in your project. The CLI is essential for building and managing shadcn component registries and components.

```bash
npm install shadcn@latest
```

--------------------------------

### Install All shadcn/ui Components

Source: https://ui.shadcn.com/docs/installation/tanstack

Add all available shadcn/ui components to your project at once using the --all flag. This command installs the complete component library without selecting individual components.

```bash
npx shadcn@latest add --all
```

--------------------------------

### Serve shadcn Registry with Next.js Development Server

Source: https://ui.shadcn.com/docs/registry/getting-started

This command starts the Next.js development server, which will serve your shadcn registry files if your project is configured with Next.js. The registry items will be accessible via specific URLs under `/r/` after the build process.

```bash
npm run dev
```

--------------------------------

### Install Label Component via CLI

Source: https://ui.shadcn.com/docs/components/label

Installs the Label component and its dependencies using the shadcn CLI tool. This is the quickest installation method that automatically handles component setup and configuration.

```bash
npx shadcn@latest add label
```

--------------------------------

### Create TanStack Start Project with shadcn/ui

Source: https://ui.shadcn.com/docs/installation/tanstack

Initialize a new TanStack Start project with Tailwind CSS and shadcn/ui integration using npm. This command sets up the project structure and dependencies required for using shadcn/ui components.

```bash
npm create @tanstack/start@latest --tailwind --add-ons shadcn
```

--------------------------------

### Configure shadcn Build Script in package.json

Source: https://ui.shadcn.com/docs/registry/getting-started

This JSON snippet updates the `package.json` file by adding a `registry:build` script. This script executes the `shadcn build` command, which is used to generate the necessary JSON files for the component registry.

```json
{
  "scripts": {
    "registry:build": "shadcn build"
  }
}
```

--------------------------------

### Define Universal Registry Item for Multi-File Template (shadcn/ui)

Source: https://ui.shadcn.com/docs/registry/examples

This JSON configuration defines a shadcn/ui registry item named 'my-custom-start-template' that installs multiple files. It includes two files, each with an explicit target path, demonstrating how to create a universal starter template that can be installed without framework detection or components.json.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "my-custom-start-template",
  "type": "registry:item",
  "dependencies": ["better-auth"],
  "files": [
    {
      "path": "/path/to/file-01.json",
      "type": "registry:file",
      "target": "~/file-01.json",
      "content": "..."
    },
    {
      "path": "/path/to/file-02.vue",
      "type": "registry:file",
      "target": "~/pages/file-02.vue",
      "content": "..."
    }
  ]
}
```

--------------------------------

### Install Separator Component via CLI - Bash

Source: https://ui.shadcn.com/docs/components/separator

Installs the Separator component using the shadcn CLI tool. This is the quickest installation method that automatically handles dependencies and file setup.

```bash
npx shadcn@latest add separator
```

--------------------------------

### Execute shadcn Registry Build Script

Source: https://ui.shadcn.com/docs/registry/getting-started

This command runs the `registry:build` script defined in `package.json`. Executing this script triggers the shadcn CLI to generate the registry JSON files, typically placed in a `public/r` directory by default.

```bash
npm run registry:build
```

--------------------------------

### Add Component Definition to shadcn registry.json

Source: https://ui.shadcn.com/docs/registry/getting-started

This JSON snippet shows how to register a component, like `hello-world`, within the `registry.json` file. It includes metadata such as name, type, title, description, and defines the component's file path and type, ensuring it conforms to the registry item schema.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "files": [
        {
          "path": "registry/new-york/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

--------------------------------

### Install Shadcn UI Input OTP Component (CLI & Manual)

Source: https://ui.shadcn.com/docs/components/input-otp

Provides instructions for adding the Input OTP component to a project. Users can choose between the Shadcn UI CLI for automated setup or manual installation by adding the core `input-otp` dependency via npm and then integrating the component files.

```bash
npx shadcn@latest add input-otp
```

```bash
npm install input-otp
```

--------------------------------

### Install Shadcn UI Checkbox Component

Source: https://ui.shadcn.com/docs/components/checkbox

Provides instructions for installing the Shadcn UI Checkbox component. It covers the automated CLI method for quick setup and the manual steps for dependency installation, allowing users to choose their preferred method.

```bash
npx shadcn@latest add checkbox
```

```bash
npm install @radix-ui/react-checkbox
```

--------------------------------

### Create New Laravel Project with React

Source: https://ui.shadcn.com/docs/installation/laravel

Initialize a new Laravel project with Inertia and React using the Laravel installer. This command creates a fresh Laravel application with React pre-configured for use with Inertia.js.

```bash
laravel new my-app --react
```

--------------------------------

### Install shadcn Component from Registry via CLI

Source: https://ui.shadcn.com/docs/changelog

Command-line instruction to install a component from the shadcn/ui registry using npm. The example shows installing the ai-elements prompt-input component.

```bash
npx shadcn add @ai-elements/prompt-input
```

--------------------------------

### Define Initial shadcn registry.json Structure

Source: https://ui.shadcn.com/docs/registry/getting-started

This JSON snippet illustrates the basic structure for a `registry.json` file, which serves as the entry point for a shadcn component registry. It includes the schema reference, registry name, homepage URL, and an empty array for registry items, conforming to the specified registry schema.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    // ...
  ]
}
```

--------------------------------

### Install Block and Override Primitives in shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Configure a registry item to install a block from shadcn/ui and override default primitives with custom implementations from remote registries. This enables centralized dependency management for component hierarchies.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-login",
  "type": "registry:block",
  "registryDependencies": [
    "login-01",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json"
  ]
}
```

--------------------------------

### Create a Basic shadcn Component in TSX

Source: https://ui.shadcn.com/docs/registry/getting-started

This TypeScript React (TSX) code defines a simple `HelloWorld` component that renders a button with 'Hello World' text. It imports the `Button` component from a local UI library, demonstrating how to structure a component intended for the shadcn registry.

```tsx
import { Button } from "@/components/ui/button"

export function HelloWorld() {
  return <Button>Hello World</Button>
}
```

--------------------------------

### Basic Drawer Component Usage

Source: https://ui.shadcn.com/docs/components/drawer

Simple example demonstrating the basic structure of a drawer component with trigger button, header, description, and footer with action buttons. Shows the minimal setup required for a functional drawer.

```tsx
<Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
```

--------------------------------

### Define reusable registry block with components

Source: https://ui.shadcn.com/docs/registry/examples

Create a registry block item that bundles multiple related files (pages and components) with their dependencies. This block specifies registry dependencies on other components and defines file paths with content references for installation into target locations in the project structure.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "login-01",
  "type": "registry:block",
  "description": "A simple login form.",
  "registryDependencies": ["button", "card", "input", "label"],
  "files": [
    {
      "path": "blocks/login-01/page.tsx",
      "content": "import { LoginForm } ...",
      "type": "registry:page",
      "target": "app/login/page.tsx"
    },
    {
      "path": "blocks/login-01/components/login-form.tsx",
      "content": "...",
      "type": "registry:component"
    }
  ]
}
```

--------------------------------

### Install Dependencies with pnpm

Source: https://ui.shadcn.com/docs/blocks

Installs project dependencies using pnpm package manager. Required before starting development on the block.

```bash
pnpm install
```

--------------------------------

### Install shadcn/ui Badge Component using CLI (Bash)

Source: https://ui.shadcn.com/docs/components/badge

Installs the `shadcn/ui` Badge component into your project using the `npx shadcn@latest add badge` command-line interface. This method automates the component setup by adding necessary files and dependencies.

```bash
npx shadcn@latest add badge
```

--------------------------------

### Install Label Dependencies Manually

Source: https://ui.shadcn.com/docs/components/label

Installs the Radix UI React Label package as a manual installation alternative. This is part of the manual setup process where dependencies are installed separately before copying component files.

```bash
npm install @radix-ui/react-label
```

--------------------------------

### Install Textarea Component via CLI

Source: https://ui.shadcn.com/docs/components/textarea

Installs the Textarea component using the shadcn CLI tool. This is the quickest installation method and automatically handles project configuration.

```bash
npx shadcn@latest add textarea
```

--------------------------------

### Install Command Component via CLI in Bash

Source: https://ui.shadcn.com/docs/components/command

Uses the shadcn CLI tool to automatically install and configure the Command component and its dependencies into a React project. This is the recommended installation method as it handles all setup automatically.

```bash
npx shadcn@latest add command
```

--------------------------------

### Install Form Component via Shadcn CLI

Source: https://ui.shadcn.com/docs/components/form

This command provides the recommended method for installing the Shadcn UI form component using its command-line interface. Executing this command automates the addition of the form component and its dependencies to your project, simplifying the setup process.

```bash
npx shadcn@latest add form
```

--------------------------------

### Install Shadcn UI Kbd Component with CLI

Source: https://ui.shadcn.com/docs/components/kbd

Instructions for adding the Kbd component to a Shadcn UI project using the command-line interface. This command fetches and integrates the component's files into your project, simplifying the setup process.

```bash
npx shadcn@latest add kbd
```

--------------------------------

### Install Context Menu Dependencies Manually

Source: https://ui.shadcn.com/docs/components/context-menu

Install the required @radix-ui/react-context-menu dependency for manual setup. Use this approach if you prefer to configure the component yourself rather than using the CLI.

```bash
npm install @radix-ui/react-context-menu
```

--------------------------------

### Install Recharts Dependency via npm

Source: https://ui.shadcn.com/docs/components/chart

Installs the Recharts library as a project dependency for manual setup. Required when not using the CLI installation method.

```bash
npm install recharts
```

--------------------------------

### Install Navigation Menu Component - CLI

Source: https://ui.shadcn.com/docs/components/navigation-menu

Quick installation of the navigation-menu component using the shadcn CLI tool. Automatically downloads and configures the component in your project with all dependencies.

```bash
npx shadcn@latest add navigation-menu
```

--------------------------------

### Install Shadcn UI Spinner Component via CLI (Bash)

Source: https://ui.shadcn.com/docs/components/spinner

Provides the command-line interface (CLI) instruction to add the Shadcn UI Spinner component to your project. This command automates the setup, including creating the component file and configuring necessary dependencies. Ensure you have the Shadcn UI CLI installed globally or locally before running this command.

```bash
npx shadcn@latest add spinner
```

--------------------------------

### Install Resources from Namespaced Registries

Source: https://ui.shadcn.com/docs/components-json

Install components and resources using the namespace syntax after configuring registries. Supports installing from public registries, private authenticated registries, and multiple resources in a single command.

```bash
# Install from a configured registry
npx shadcn@latest add @v0/dashboard

# Install from private registry
npx shadcn@latest add @private/button

# Install multiple resources
npx shadcn@latest add @acme/header @internal/auth-utils
```

--------------------------------

### Install Aspect Ratio Component via CLI

Source: https://ui.shadcn.com/docs/components/aspect-ratio

Command-line interface installation for the AspectRatio component from shadcn/ui. This is the quickest method to add the component to your project with all dependencies automatically configured.

```bash
npx shadcn@latest add aspect-ratio
```

--------------------------------

### Create Remix Project with create-remix

Source: https://ui.shadcn.com/docs/installation/remix

Initialize a new Remix project using the create-remix command-line tool. This sets up the basic Remix application structure and dependencies.

```bash
npx create-remix@latest my-app
```

--------------------------------

### Basic Textarea Component Setup

Source: https://ui.shadcn.com/docs/components/textarea

Imports and renders a basic Textarea component with a placeholder. This demonstrates the minimal setup required to use the Textarea in your application.

```tsx
import { Textarea } from "@/components/ui/textarea"

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}
```

--------------------------------

### Install Carousel Component via CLI

Source: https://ui.shadcn.com/docs/components/carousel

shadcn/ui CLI command to automatically install and configure the carousel component with all dependencies and file setup. Simplest method for adding the carousel to your project.

```bash
npx shadcn@latest add carousel
```

--------------------------------

### Install Shadcn UI Toggle Component (CLI & npm)

Source: https://ui.shadcn.com/docs/components/toggle

Provides instructions for installing the Shadcn UI Toggle component using either the command-line interface or by manually installing the core Radix UI dependency.

```bash
npx shadcn@latest add toggle
```

```bash
npm install @radix-ui/react-toggle
```

--------------------------------

### Multiple Registry Setup with Mixed Authentication

Source: https://ui.shadcn.com/docs/components-json

Complete example showing how to configure multiple registries with different authentication methods and parameters. Demonstrates public registries, private registries with bearer tokens, and team registries with versioning and environment variables.

```json
{
  "registries": {
    "@shadcn": "https://ui.shadcn.com/r/{name}.json",
    "@company-ui": {
      "url": "https://registry.company.com/ui/{name}.json",
      "headers": {
        "Authorization": "Bearer ${COMPANY_TOKEN}"
      }
    },
    "@team": {
      "url": "https://team.company.com/{name}.json",
      "params": {
        "team": "frontend",
        "version": "${REGISTRY_VERSION}"
      }
    }
  }
}
```

--------------------------------

### Install Shadcn Dropdown Menu Component via CLI

Source: https://ui.shadcn.com/docs/components/dropdown-menu

Use this command-line interface (CLI) instruction to quickly add the Shadcn UI Dropdown Menu component to your project. This automates the setup, including necessary files and dependencies.

```bash
npx shadcn@latest add dropdown-menu
```

--------------------------------

### Define Universal Registry Item for ESLint Configuration (shadcn/ui)

Source: https://ui.shadcn.com/docs/registry/examples

This JSON configuration defines a shadcn/ui registry item named 'my-eslint-config' for a custom ESLint configuration. It specifies a single file with an explicit target path (~/.eslintrc.json), enabling universal installation of the ESLint config file without framework dependencies.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "my-eslint-config",
  "type": "registry:item",
  "files": [
    {
      "path": "/path/to/your/registry/default/custom-eslint.json",
      "type": "registry:file",
      "target": "~/.eslintrc.json",
      "content": "..."
    }
  ]
}
```

--------------------------------

### Start Development Server with pnpm

Source: https://ui.shadcn.com/docs/blocks

Starts the development server for the www application at http://localhost:3333. Enables live preview of blocks during development.

```bash
pnpm www:dev
```

--------------------------------

### Install Select Component via CLI

Source: https://ui.shadcn.com/docs/components/select

Command-line interface installation method for adding the Select component to a shadcn/ui project. Executes the shadcn CLI tool to automatically download and configure the component with all dependencies.

```bash
npx shadcn@latest add select
```

--------------------------------

### Install Drawer Component via CLI

Source: https://ui.shadcn.com/docs/components/drawer

Quick installation command using shadcn CLI to add the drawer component to your project. This is the recommended method for adding the drawer with all dependencies configured automatically.

```bash
npx shadcn@latest add drawer
```

--------------------------------

### Install Button Component via CLI

Source: https://ui.shadcn.com/docs/components/button

Quick installation of the Button component using the shadcn CLI tool. Automatically adds the button component and its dependencies to your project.

```bash
npx shadcn@latest add button
```

--------------------------------

### Add Components to Monorepo Workspace

Source: https://ui.shadcn.com/docs/monorepo

Add shadcn/ui components to your monorepo application by navigating to the app directory and running the add command. The CLI automatically determines component type and installs files to correct paths with proper import handling.

```bash
cd apps/web
npx shadcn@latest add [COMPONENT]
```

--------------------------------

### Install Shadcn UI Collapsible via CLI

Source: https://ui.shadcn.com/docs/components/collapsible

This command-line interface instruction adds the Shadcn UI Collapsible component to your project. It fetches and integrates the component's files automatically, simplifying the setup process.

```bash
npx shadcn@latest add collapsible
```

--------------------------------

### Install Native Select component via CLI

Source: https://ui.shadcn.com/docs/components/native-select

Use the shadcn CLI to easily add the Native Select component to your project. This command will scaffold the necessary files and update dependencies automatically, streamlining the setup process.

```bash
npx shadcn@latest add native-select
```

--------------------------------

### Install Menubar with CLI

Source: https://ui.shadcn.com/docs/components/menubar

Installs the menubar component using the shadcn CLI tool, which automatically adds the component and its dependencies to the project.

```bash
npx shadcn@latest add menubar
```

--------------------------------

### Import and Use shadcn/ui Button Component in TSX

Source: https://ui.shadcn.com/docs/installation/tanstack

Import the Button component from shadcn/ui and use it in a TanStack Start application. The component is imported from the @/components/ui directory and can be used as a standard React component.

```tsx
import { Button } from "@/components/ui/button"

function App() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

--------------------------------

### Install shadcn Table component and TanStack React Table

Source: https://ui.shadcn.com/docs/components/data-table

Installation commands to add the Table component from shadcn and the TanStack React Table dependency to your project. These are prerequisites for building data tables with this guide.

```bash
npx shadcn@latest add table
```

```bash
npm install @tanstack/react-table
```

--------------------------------

### Create custom style extending shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Define a custom registry style that extends shadcn/ui by installing dependencies, adding registry dependencies (components and remote blocks), and configuring CSS variables for fonts and brand colors in light and dark modes. This configuration is applied when running `npx shadcn init`.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "example-style",
  "type": "registry:style",
  "dependencies": ["@tabler/icons-react"],
  "registryDependencies": [
    "login-01",
    "calendar",
    "https://example.com/r/editor.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif"
    },
    "light": {
      "brand": "20 14.3% 4.1%"
    },
    "dark": {
      "brand": "20 14.3% 4.1%"
    }
  }
}
```

--------------------------------

### Install Sheet Component via CLI

Source: https://ui.shadcn.com/docs/components/sheet

Command to install the Sheet component and its dependencies using the shadcn CLI. This is the recommended installation method for projects using shadcn/ui.

```bash
npx shadcn@latest add sheet
```

--------------------------------

### Configure components.json for shadcn UI

Source: https://ui.shadcn.com/docs/changelog

Example components.json configuration file that defines project structure, Tailwind settings, component import paths, CSS variables usage, and React Server Components support. This file controls how components are installed and styled.

```json
{
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "rsc": false,
  "aliases": {
    "utils": "~/lib/utils",
    "components": "~/components"
  }
}
```

--------------------------------

### Install Aspect Ratio Dependencies via npm

Source: https://ui.shadcn.com/docs/components/aspect-ratio

Manual installation of the @radix-ui/react-aspect-ratio package dependency. This is required when manually setting up the component instead of using the CLI installation method.

```bash
npm install @radix-ui/react-aspect-ratio
```

--------------------------------

### Install Skeleton Component - Bash CLI

Source: https://ui.shadcn.com/docs/components/skeleton

Command-line installation method for adding the Skeleton component to a shadcn project. Uses the official shadcn CLI tool to automatically set up the component with all dependencies.

```bash
npx shadcn@latest add skeleton
```

--------------------------------

### Install Table Component via CLI

Source: https://ui.shadcn.com/docs/components/table

CLI command to install the shadcn/ui Table component using npx. This automatically adds the component to your project.

```bash
npx shadcn@latest add table
```

--------------------------------

### Install Tooltip Dependencies via npm

Source: https://ui.shadcn.com/docs/components/tooltip

Manual installation of the Radix UI tooltip dependency. Required when not using the shadcn CLI installation method. Install this package before copying the tooltip component source.

```bash
npm install @radix-ui/react-tooltip
```

--------------------------------

### Install Empty Component via CLI

Source: https://ui.shadcn.com/docs/components/empty

Command to install the Empty component using the shadcn package manager. Automatically adds the component and its dependencies to the project.

```bash
npx shadcn@latest add empty
```

--------------------------------

### Install Tailwind CSS and Autoprefixer

Source: https://ui.shadcn.com/docs/installation/remix

Install Tailwind CSS and Autoprefixer as development dependencies to enable styling support for shadcn/ui components in your Remix project.

```bash
npm install -D tailwindcss@latest autoprefixer@latest
```

--------------------------------

### Install Navigation Menu Dependencies - NPM

Source: https://ui.shadcn.com/docs/components/navigation-menu

Manual installation of the Radix UI navigation menu dependency. Required when setting up the component without the CLI tool.

```bash
npm install @radix-ui/react-navigation-menu
```

--------------------------------

### Create Astro project with TailwindCSS and React

Source: https://ui.shadcn.com/docs/installation/astro

Initialize a new Astro project using the create-astro command with TailwindCSS template and React integration. This command sets up the foundational project structure with automatic dependency installation and git initialization.

```bash
npx create-astro@latest astro-app  --template with-tailwindcss --install --add react --git
```

--------------------------------

### Create components.json configuration file

Source: https://ui.shadcn.com/docs/installation/manual

Initialize shadcn/ui configuration in the root of your project. This JSON file specifies the design style (new-york), enables TypeScript (tsx), configures Tailwind CSS with CSS variables and neutral base color, sets up path aliases for components and utilities, and selects lucide as the icon library.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

--------------------------------

### Install Shadcn UI Dialog component using CLI or npm

Source: https://ui.shadcn.com/docs/components/dialog

Instructions for installing the Shadcn UI Dialog component. Provides options for using the Shadcn CLI to add the component or manually installing the underlying Radix UI dependency.

```bash
npx shadcn@latest add dialog
```

```bash
npm install @radix-ui/react-dialog
```

--------------------------------

### Install Pagination Component - CLI

Source: https://ui.shadcn.com/docs/components/pagination

Command-line installation method for adding the pagination component to a shadcn/ui project. Uses npx to fetch and install the latest pagination component version with all dependencies.

```bash
npx shadcn@latest add pagination
```

--------------------------------

### Configure Global CSS Variables with Tailwind and Theme Configuration

Source: https://ui.shadcn.com/docs/installation/manual

Sets up global CSS variables for light and dark themes using OKLCH color format, defines custom variants, and configures Tailwind theme with color and radius tokens. This file establishes a comprehensive design system with support for backgrounds, cards, popovers, primary/secondary colors, sidebar styling, and chart colors for the application.

```css
@import "tailwindcss";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --radius: 0.625rem;
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.145 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.145 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.985 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.269 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.396 0.141 25.723);
  --destructive-foreground: oklch(0.637 0.237 25.331);
  --border: oklch(0.269 0 0);
  --input: oklch(0.269 0 0);
  --ring: oklch(0.439 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(0.269 0 0);
  --sidebar-ring: oklch(0.439 0 0);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

--------------------------------

### Define Universal Registry Item for Python Cursor Rules (shadcn/ui)

Source: https://ui.shadcn.com/docs/registry/examples

This JSON configuration defines a shadcn/ui registry item named 'python-rules' for custom Cursor rules. It specifies a single file with an explicit target path (~/.cursor/rules/custom-python.mdc), allowing the rule file to be installed universally without framework detection.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "python-rules",
  "type": "registry:item",
  "files": [
    {
      "path": "/path/to/your/registry/default/custom-python.mdc",
      "type": "registry:file",
      "target": "~/.cursor/rules/custom-python.mdc",
      "content": "..."
    }
  ]
}
```

--------------------------------

### Install Switch Component via CLI - Bash

Source: https://ui.shadcn.com/docs/components/switch

Command to install the Switch component using the shadcn CLI tool. This is the quickest method to add the component to your project with all dependencies and configuration automatically handled.

```bash
npx shadcn@latest add switch
```

--------------------------------

### Install Components from Namespaced Registries via CLI

Source: https://ui.shadcn.com/docs/changelog

Use the `npx shadcn add` command to install components by referencing their "@registry/name" format, pulling from the configured namespaced registries. This simplifies component distribution across different teams and projects.

```bash
npx shadcn add @acme/button @internal/auth-system
```

--------------------------------

### Item Component Installation - Bash

Source: https://ui.shadcn.com/docs/components/item

CLI command to install the Item component from shadcn. Requires Node.js and npm/pnpm package manager.

```bash
npx shadcn@latest add item
```

--------------------------------

### Install Radix UI Switch Dependency - Bash

Source: https://ui.shadcn.com/docs/components/switch

NPM command to install the core @radix-ui/react-switch dependency. Required for manual installation of the Switch component when not using the shadcn CLI.

```bash
npm install @radix-ui/react-switch
```

--------------------------------

### Install Button Dependencies via npm

Source: https://ui.shadcn.com/docs/components/button

Manual installation of required dependencies for the Button component. Install the @radix-ui/react-slot package which provides slot composition functionality.

```bash
npm install @radix-ui/react-slot
```

--------------------------------

### Quick Configuration with Basic Registries

Source: https://ui.shadcn.com/docs/registry/namespace

Set up a minimal components.json with two basic namespaced registries (v0 and acme). This configuration enables installing resources from both public and private registries.

```json
{
  "registries": {
    "@v0": "https://v0.dev/chat/b/{name}",
    "@acme": "https://registry.acme.com/resources/{name}.json"
  }
}
```

--------------------------------

### Handle `shadcn/ui` Initialization with React 19 Peer Dependency Prompt (npm)

Source: https://ui.shadcn.com/docs/react-19

This `bash` snippet illustrates the interactive prompt from the `shadcn/ui` CLI when initializing a project (`npx shadcn@latest init -d`) while using React 19 with `npm`. It guides users to select a resolution strategy, either `--force` or `--legacy-peer-deps`, to address potential peer dependency conflicts during the shadcn/ui installation process.

```bash
It looks like you are using React 19.
Some packages may fail to install due to peer dependency issues (see https://ui.shadcn.com/react-19).

? How would you like to proceed? › - Use arrow-keys. Return to submit.
❯   Use --force
    Use --legacy-peer-deps
```

--------------------------------

### Install Multiple Resources from Different Namespaces

Source: https://ui.shadcn.com/docs/registry/namespace

Install multiple resources from different namespaced registries in a single command. Supports combining resources from UI components, libraries, and AI prompts across various registries.

```bash
npx shadcn@latest add @acme/header @lib/auth-utils @ai/chatbot-rules
```

--------------------------------

### Install Tooltip via shadcn CLI

Source: https://ui.shadcn.com/docs/components/tooltip

Command-line installation method for adding the Tooltip component to a shadcn/ui project. This is the recommended approach for quickly adding pre-configured component files.

```bash
npx shadcn@latest add tooltip
```

--------------------------------

### Install Context Menu Component via CLI

Source: https://ui.shadcn.com/docs/components/context-menu

Install the context-menu component using the shadcn CLI tool. This command automatically downloads and configures the component in your project with all required dependencies.

```bash
npx shadcn@latest add context-menu
```

--------------------------------

### Install Menubar Dependencies with npm

Source: https://ui.shadcn.com/docs/components/menubar

Manually installs the Radix UI React Menubar package as a dependency for projects that prefer manual installation over the CLI method.

```bash
npm install @radix-ui/react-menubar
```

--------------------------------

### Install Hover Card via CLI

Source: https://ui.shadcn.com/docs/components/hover-card

Command-line installation method for adding the hover-card component to a shadcn/ui project. This is the quickest way to install and automatically sets up the component with proper configuration.

```bash
npx shadcn@latest add hover-card
```

--------------------------------

### Install Button Group via CLI - Bash

Source: https://ui.shadcn.com/docs/components/button-group

Command-line installation script for the Button Group component using the shadcn package manager. This is the recommended installation method that automatically sets up the component with dependencies.

```bash
npx shadcn@latest add button-group
```

--------------------------------

### Install Hover Card Dependencies

Source: https://ui.shadcn.com/docs/components/hover-card

Manual installation command for the @radix-ui/react-hover-card dependency required when not using the CLI installation method. Install this package before copying component source files.

```bash
npm install @radix-ui/react-hover-card
```

--------------------------------

### Install react-resizable-panels dependency via npm

Source: https://ui.shadcn.com/docs/components/resizable

This command installs the core `react-resizable-panels` library, which provides the underlying functionality for the shadcn/ui Resizable component. It's a necessary step for manual installation or when directly using the base library.

```bash
npm install react-resizable-panels
```

--------------------------------

### Complete Bar Chart with XAxis Implementation

Source: https://ui.shadcn.com/docs/components/chart

Full React component example using the 'use client' directive for client-side rendering. Demonstrates a complete bar chart setup with sample data for desktop and mobile metrics across six months, including XAxis configuration with custom tick formatting.

```tsx
"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```

--------------------------------

### Example Shadcn UI Registry Configuration (JSON)

Source: https://ui.shadcn.com/docs/registry/registry-index

This JSON configuration demonstrates a valid structure for a Shadcn UI registry. It includes a schema reference, the registry's name and homepage, and an array of items, each representing a component or example with its type, title, description, and associated file paths. This structure adheres to the specified registry schema requirements.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "acme",
  "homepage": "https://acme.com",
  "items": [
    {
      "name": "login-form",
      "type": "registry:component",
      "title": "Login Form",
      "description": "A login form component.",
      "files": [
        {
          "path": "registry/new-york/auth/login-form.tsx",
          "type": "registry:component"
        }
      ]
    },
    {
      "name": "example-login-form",
      "type": "registry:component",
      "title": "Example Login Form",
      "description": "An example showing how to use the login form component.",
      "files": [
        {
          "path": "registry/new-york/examples/example-login-form.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

--------------------------------

### Install Radix UI Progress Dependency

Source: https://ui.shadcn.com/docs/components/progress

NPM command to manually install the @radix-ui/react-progress package. Required when manually installing the Progress component instead of using the CLI method.

```bash
npm install @radix-ui/react-progress
```

--------------------------------

### Install Popover Component via CLI

Source: https://ui.shadcn.com/docs/components/popover

Command-line installation method for adding the Popover component to a shadcn/ui project. Requires npx and the shadcn CLI tool.

```bash
npx shadcn@latest add popover
```

--------------------------------

### Install Card Component via CLI

Source: https://ui.shadcn.com/docs/components/card

Install the Card component using shadcn CLI tool. This command automatically adds the component to your project with proper file structure and dependencies configured.

```bash
npx shadcn@latest add card
```

--------------------------------

### Install Separator Dependencies via npm - Bash

Source: https://ui.shadcn.com/docs/components/separator

Manually installs the Radix UI Separator dependency required for the component. Used as part of the manual installation process when not using the shadcn CLI.

```bash
npm install @radix-ui/react-separator
```

--------------------------------

### Install Chart Component via CLI

Source: https://ui.shadcn.com/docs/components/chart

Installs the chart.tsx component using shadcn's CLI tool. This command automatically sets up the chart component file in the project structure.

```bash
npx shadcn@latest add chart
```

--------------------------------

### Configure Plugin with NPM Dependencies in shadcn UI

Source: https://ui.shadcn.com/docs/registry/examples

Shows how to include external npm packages as dependencies when using Tailwind CSS plugins. The `dependencies` array declares required packages, while the `css` object configures both the plugin and custom CSS layers. This pattern ensures all required packages are installed before the component is used.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "typography-component",
  "type": "registry:item",
  "dependencies": ["@tailwindcss/typography"],
  "css": {
    "@plugin \"@tailwindcss/typography\"": {},
    "@layer components": {
      ".prose": {
        "max-width": "65ch"
      }
    }
  }
}
```

--------------------------------

### Install Progress Component via CLI

Source: https://ui.shadcn.com/docs/components/progress

Command to install the Progress component using the shadcn CLI tool. This is the quickest way to add the component to a project with all dependencies automatically configured.

```bash
npx shadcn@latest add progress
```

--------------------------------

### Install Breadcrumb Component via CLI

Source: https://ui.shadcn.com/docs/components/breadcrumb

Command-line interface installation method for the Breadcrumb component using shadcn CLI. This is the recommended automated installation approach.

```bash
npx shadcn@latest add breadcrumb
```

--------------------------------

### Install Single Resource from Namespaced Registry

Source: https://ui.shadcn.com/docs/registry/namespace

Install a single resource from a configured namespace using the shadcn CLI. The syntax uses @namespace/resource-name format to specify which registry and resource to install.

```bash
npx shadcn@latest add @v0/dashboard
```

--------------------------------

### Configure Secure Custom Registry with Authorization Headers (JSON)

Source: https://ui.shadcn.com/docs/registry/namespace

Provides an example of configuring a custom company registry in `components.json`, including a URL and authorization headers with an environment variable. This setup demonstrates best practices for securely connecting to private registries, requiring explicit authentication.

```json
{
  "@company": {
    "url": "https://registry.company.com/v1/{name}.json",
    "headers": {
      "Authorization": "Bearer ${COMPANY_TOKEN}",
      "X-Registry-Version": "1.0"
    }
  }
}
```

--------------------------------

### Install Alert Dialog via CLI - Bash

Source: https://ui.shadcn.com/docs/components/alert-dialog

Command-line installation of the Alert Dialog component using the shadcn CLI tool. This automated approach installs the component and its dependencies into the project's component directory.

```bash
npx shadcn@latest add alert-dialog
```

--------------------------------

### Import and Use shadcn/ui Switch Component in React

Source: https://ui.shadcn.com/docs/installation/laravel

Import and render the Switch component in a React page component within a Laravel Inertia application. The component is imported from the generated ui directory and can be used like any other React component.

```typescript
import { Switch } from "@/components/ui/switch"

const MyPage = () => {
  return (
    <div>
      <Switch />
    </div>
  )
}

export default MyPage
```

--------------------------------

### Initialize shadcn Project with init Command

Source: https://ui.shadcn.com/docs/cli

The init command sets up a new shadcn project by installing dependencies, adding the cn utility, and configuring CSS variables. It supports template selection, base color configuration, and directory structure options.

```bash
npx shadcn@latest init
```

```bash
Usage: shadcn init [options] [components...]

initialize your project and install dependencies

Arguments:
  components         name, url or local path to component

Options:
  -t, --template <template>      the template to use. (next, next-monorepo)
  -b, --base-color <base-color>  the base color to use. (neutral, gray, zinc, stone, slate)
  -y, --yes                      skip confirmation prompt. (default: true)
  -f, --force                    force overwrite of existing configuration. (default: false)
  -c, --cwd <cwd>                the working directory. defaults to the current directory.
  -s, --silent                   mute output. (default: false)
  --src-dir                      use the src directory when creating a new project. (default: false)
  --no-src-dir                   do not use the src directory when creating a new project.
  --css-variables                use css variables for theming. (default: true)
  --no-css-variables             do not use css variables for theming.
  --no-base-style                do not install the base shadcn style
  -h, --help                     display help for command
```

--------------------------------

### Install npm dependencies for shadcn UI

Source: https://ui.shadcn.com/docs/installation/manual

Install required npm packages including class-variance-authority, clsx, tailwind-merge, lucide-react, and tw-animate-css. These dependencies are necessary for shadcn UI components to function properly with styling and utility support.

```bash
npm install class-variance-authority clsx tailwind-merge lucide-react tw-animate-css
```

--------------------------------

### Install Shadcn UI Alert component using CLI

Source: https://ui.shadcn.com/docs/components/alert

This command line interface instruction adds the Shadcn UI Alert component and its dependencies to your project. Execute this in your project's terminal to quickly integrate the component.

```bash
npx shadcn@latest add alert
```

--------------------------------

### Complete registry.json Schema Structure

Source: https://ui.shadcn.com/docs/registry/registry-json

Full example of a registry.json file showing all main properties including schema reference, registry metadata, and component items with dependencies and file definitions. This demonstrates the complete structure needed to set up a custom component registry.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "shadcn",
  "homepage": "https://ui.shadcn.com",
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "registryDependencies": [
        "button",
        "@acme/input-form",
        "https://example.com/r/foo"
      ],
      "dependencies": ["is-even@3.0.0", "motion"],
      "files": [
        {
          "path": "registry/new-york/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

--------------------------------

### Add Media Query CSS Imports in shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Conditionally import stylesheets using media query syntax to load styles based on device type and screen dimensions, enabling responsive stylesheet management.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "responsive-import",
  "type": "registry:item",
  "css": {
    "@import \"print-styles.css\" print": {},
    "@import url(\"mobile.css\") screen and (max-width: 768px)": {}
  }
}
```

--------------------------------

### Install Input Component via CLI - TypeScript/React

Source: https://ui.shadcn.com/docs/components/input

Installs the Input component using the shadcn CLI tool. This is the quickest way to add the Input component to your project with all dependencies configured.

```bash
npx shadcn@latest add input
```

--------------------------------

### Create new React project with Vite

Source: https://ui.shadcn.com/docs/installation/vite

Initializes a new React project using Vite. This command uses the latest version of Vite and allows selecting the 'React + TypeScript' template during the interactive setup process.

```bash
npm create vite@latest
```

--------------------------------

### Radix UI Import Migration Example

Source: https://ui.shadcn.com/docs/changelog

Before and after example showing how AlertDialog imports are transformed from the old @radix-ui/react-dialog package to the new unified radix-ui package format.

```typescript
import { AlertDialog as AlertDialogPrimitive } from "radix-ui"
```

--------------------------------

### Initialize shadcn/ui in Next.js Project

Source: https://ui.shadcn.com/docs/installation/next

Initialize shadcn/ui in a new or existing Next.js project using the init command. This command sets up the necessary configuration and dependencies for shadcn/ui. Choose between a standalone Next.js project or a Monorepo setup.

```bash
npx shadcn@latest init
```

--------------------------------

### Install Slider Component via CLI

Source: https://ui.shadcn.com/docs/components/slider

Command to quickly install and set up the Slider component using the shadcn CLI tool. This is the recommended method for adding the component to your project.

```bash
npx shadcn@latest add slider
```

--------------------------------

### Install Alert Dialog Dependencies - Bash

Source: https://ui.shadcn.com/docs/components/alert-dialog

NPM installation command for the Radix UI Alert Dialog dependency. Required when manually installing the Alert Dialog component without using the shadcn CLI tool.

```bash
npm install @radix-ui/react-alert-dialog
```

--------------------------------

### Install Radix UI Avatar dependency manually

Source: https://ui.shadcn.com/docs/components/avatar

Installs the core `@radix-ui/react-avatar` dependency, which is a prerequisite for the Shadcn UI Avatar component. This step is part of the manual installation process.

```bash
npm install @radix-ui/react-avatar
```

--------------------------------

### Install Popover Dependencies via npm

Source: https://ui.shadcn.com/docs/components/popover

Manual npm installation of the @radix-ui/react-popover package dependency required for the Popover component.

```bash
npm install @radix-ui/react-popover
```

--------------------------------

### Add Environment Variables to Registry Item JSON

Source: https://ui.shadcn.com/docs/registry/registry-item-json

This JSON configuration specifies environment variables to be added to a project's `.env.local` or `.env` file upon installation. It's intended for development or example variables, and existing variables are not overwritten. Users are cautioned against using this for production environment variables.

```json
{
  "envVars": {
    "NEXT_PUBLIC_APP_URL": "http://localhost:4000",
    "DATABASE_URL": "postgresql://postgres:postgres@localhost:5432/postgres",
    "OPENAI_API_KEY": ""
  }
}
```

--------------------------------

### Install Radix UI React Tabs dependency with npm

Source: https://ui.shadcn.com/docs/components/tabs

This `npm` command installs the core `@radix-ui/react-tabs` package, which is a foundational dependency for the Shadcn UI Tabs component. This is part of the manual installation process.

```bash
npm install @radix-ui/react-tabs
```

--------------------------------

### Install Radix UI Select Dependency

Source: https://ui.shadcn.com/docs/components/select

Node package manager command to manually install the @radix-ui/react-select dependency. Required when manually setting up the Select component without using the shadcn CLI tool.

```bash
npm install @radix-ui/react-select
```

--------------------------------

### Manually Install Radix UI Dropdown Menu Dependency

Source: https://ui.shadcn.com/docs/components/dropdown-menu

This command manually installs the `@radix-ui/react-dropdown-menu` package, which is the underlying primitive for the Shadcn UI dropdown. It's an alternative to the CLI installation for managing dependencies.

```bash
npm install @radix-ui/react-dropdown-menu
```

--------------------------------

### Install Toggle Group Component via CLI

Source: https://ui.shadcn.com/docs/components/toggle-group

Install the toggle-group component and its dependencies using the shadcn CLI. This command downloads and configures the component in your project automatically.

```bash
npx shadcn@latest add toggle-group
```

--------------------------------

### Install Vaul Dependency Manually

Source: https://ui.shadcn.com/docs/components/drawer

Manual installation of the Vaul library dependency required for the drawer component. Use this approach when manually setting up the drawer component in your project.

```bash
npm install vaul
```

--------------------------------

### Install Radix UI Slider Dependency

Source: https://ui.shadcn.com/docs/components/slider

NPM command to manually install the @radix-ui/react-slider dependency, required when setting up the Slider component without using the CLI installation method.

```bash
npm install @radix-ui/react-slider
```

--------------------------------

### Install Shadcn UI Tabs component using CLI

Source: https://ui.shadcn.com/docs/components/tabs

This command line interface (CLI) instruction details how to add the `tabs` component to a Shadcn UI project. It uses `npx` to execute the Shadcn CLI, simplifying the installation process.

```bash
npx shadcn@latest add tabs
```

--------------------------------

### Scoped and File-Based Plugin Configuration

Source: https://ui.shadcn.com/docs/registry/examples

Demonstrates how to configure scoped npm packages, Tailwind plugin utilities, and local file-based plugins in a single registry item. Supports npm scoped packages like `@headlessui/tailwindcss`, core Tailwind plugin utilities, and relative file paths for custom plugins.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "scoped-plugins",
  "type": "registry:component",
  "css": {
    "@plugin \"@headlessui/tailwindcss\"": {},
    "@plugin \"tailwindcss/plugin\"": {},
    "@plugin \"./custom-plugin.js\"": {}
  }
}
```

--------------------------------

### Add Components with add Command

Source: https://ui.shadcn.com/docs/cli

The add command installs specific components and their dependencies into your project. It supports single or multiple component installation, file overwriting, and path customization.

```bash
npx shadcn@latest add [component]
```

```bash
Usage: shadcn add [options] [components...]

add a component to your project

Arguments:
  components         name, url or local path to component

Options:
  -y, --yes           skip confirmation prompt. (default: false)
  -o, --overwrite     overwrite existing files. (default: false)
  -c, --cwd <cwd>     the working directory. defaults to the current directory.
  -a, --all           add all available components (default: false)
  -p, --path <path>   the path to add the component to.
  -s, --silent        mute output. (default: false)
  --src-dir           use the src directory when creating a new project. (default: false)
  --no-src-dir        do not use the src directory when creating a new project.
  --css-variables     use css variables for theming. (default: true)
  --no-css-variables  do not use css variables for theming.
  -h, --help          display help for command
```

--------------------------------

### Install Radix UI Dialog Dependency

Source: https://ui.shadcn.com/docs/components/sheet

NPM installation command for the @radix-ui/react-dialog package, which is the underlying dependency for the Sheet component.

```bash
npm install @radix-ui/react-dialog
```

--------------------------------

### Install Calendar Component via CLI

Source: https://ui.shadcn.com/docs/components/calendar

Install the shadcn Calendar component using the CLI tool. This command automatically adds the Calendar component and its dependencies to your project.

```bash
npx shadcn@latest add calendar
```

--------------------------------

### Add Functional Utilities with Variants in shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Define functional utility classes with wildcard variants that accept dynamic values, enabling flexible utilities like tab-size that adapt to theme variables.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility tab-*": {
      "tab-size": "var(--tab-size-*)"
    }
  }
}
```

--------------------------------

### Install Resizable component using shadcn/ui CLI

Source: https://ui.shadcn.com/docs/components/resizable

This command utilizes the shadcn/ui CLI to automatically add the Resizable component and its dependencies to your project. It's the recommended and simplest way to integrate the component.

```bash
npx shadcn@latest add resizable
```

--------------------------------

### Complete BarChart with Legend implementation

Source: https://ui.shadcn.com/docs/components/chart

Full client-side component example with chart data, configuration, and legend. Includes sample data for desktop and mobile visitors across six months with corresponding color configuration.

```typescript
"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```

--------------------------------

### Create Gatsby Project

Source: https://ui.shadcn.com/docs/installation/gatsby

Initialize a new Gatsby project using the create-gatsby command. This sets up the basic project structure and dependencies required for a Gatsby application.

```bash
npm init gatsby
```

--------------------------------

### Install Shadcn UI Field Component via CLI

Source: https://ui.shadcn.com/docs/components/field

Installs the Shadcn UI Field component using the command-line interface. This command automatically adds the necessary files and dependencies to your project.

```bash
npx shadcn@latest add field
```

--------------------------------

### Environment Variables Setup

Source: https://ui.shadcn.com/docs/registry/authentication

Set registry authentication token in .env.local file. This stores the secret token that will be used for Bearer authentication when accessing private component registries.

```bash
REGISTRY_TOKEN=your_secret_token_here
```

--------------------------------

### Add Complex Utility with Pseudo-selectors in shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Create advanced utility classes with pseudo-selectors and nested rules to handle complex styling patterns like custom scrollbar hiding across different browsers.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility scrollbar-hidden": {
      "scrollbar-hidden": {
        "&::-webkit-scrollbar": {
          "display": "none"
        }
      }
    }
  }
}
```

--------------------------------

### Get Carousel API Instance and Track State

Source: https://ui.shadcn.com/docs/components/carousel

Initialize carousel state management using setApi prop to obtain a CarouselApi instance. This allows tracking the current slide position and total slide count through React state and useEffect hooks. The example renders a carousel with numbered items and displays the current slide information.

```tsx
"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export function CarouselDApiDemo() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <div className="mx-auto max-w-xs">
      <Carousel setApi={setApi} className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </div>
  )
}
```

--------------------------------

### URL Pattern with {name} Placeholder

Source: https://ui.shadcn.com/docs/registry/namespace

Demonstrates how the {name} placeholder is replaced with resource names during component installation. When installing @acme/button, the {name} is replaced with 'button' to construct the full registry URL.

```json
{
  "@acme": "https://registry.acme.com/{name}.json"
}
```

--------------------------------

### Install cmdk Dependency via npm in Bash

Source: https://ui.shadcn.com/docs/components/command

Manual installation of the cmdk package as a project dependency. This is required when manually adding the Command component to your project instead of using the CLI installation method.

```bash
npm install cmdk
```

--------------------------------

### Button Size Variants Example

Source: https://ui.shadcn.com/docs/components/button

Comprehensive example showing all Button size options: sm, icon-sm, default, icon, lg, and icon-lg. Demonstrates text and icon buttons at different sizes.

```typescript
import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonSize() {
  return (
    <div className="flex flex-col items-start gap-8 sm:flex-row">
      <div className="flex items-start gap-2">
        <Button size="sm" variant="outline">
          Small
        </Button>
        <Button size="icon-sm" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline">Default</Button>
        <Button size="icon" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button variant="outline" size="lg">
          Large
        </Button>
        <Button size="icon-lg" aria-label="Submit" variant="outline">
          <ArrowUpRightIcon />
        </Button>
      </div>
    </div>
  )
}
```

--------------------------------

### Manually install Radix UI Radio Group dependency via npm

Source: https://ui.shadcn.com/docs/components/radio-group

This `bash` command installs the `@radix-ui/react-radio-group` package, which is the foundational primitive for the Shadcn UI Radio Group component when performing a manual installation.

```bash
npm install @radix-ui/react-radio-group
```

--------------------------------

### Install Shadcn Accordion via CLI

Source: https://ui.shadcn.com/docs/components/accordion

This command-line interface (CLI) snippet demonstrates how to quickly add the Shadcn UI Accordion component to your project. Executing this command automates the installation and configuration process, integrating the component directly into your codebase.

```bash
npx shadcn@latest add accordion
```

--------------------------------

### Custom Registry Error Message Example

Source: https://ui.shadcn.com/docs/changelog

Example of a custom error response from a registry author providing actionable guidance to users and AI agents about authorization issues and how to resolve them.

```text
Error:
You are not authorized to access the item at http://example.com/r/component.

Message:
[Unauthorized] Your API key has expired. Renew it at https://example.com/api/renew-key.
```

--------------------------------

### Create custom style from scratch without shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Define a standalone registry style that does not extend shadcn/ui (using `extends: none`) by specifying npm dependencies, registry dependencies for components, and custom CSS variables for theme colors. This enables creating entirely custom component systems independent of shadcn/ui defaults.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "extends": "none",
  "name": "new-style",
  "type": "registry:style",
  "dependencies": ["tailwind-merge", "clsx"],
  "registryDependencies": [
    "utils",
    "https://example.com/r/button.json",
    "https://example.com/r/input.json",
    "https://example.com/r/label.json",
    "https://example.com/r/select.json"
  ],
  "cssVars": {
    "theme": {
      "font-sans": "Inter, sans-serif"
    },
    "light": {
      "main": "#88aaee",
      "bg": "#dfe5f2",
      "border": "#000",
      "text": "#000",
      "ring": "#000"
    },
    "dark": {
      "main": "#88aaee",
      "bg": "#272933",
      "border": "#000",
      "text": "#e6e6e6",
      "ring": "#fff"
    }
  }
}
```

--------------------------------

### Basic Table Structure Usage

Source: https://ui.shadcn.com/docs/components/table

Minimal example showing how to structure a Table with header, body, and a single row of data. Demonstrates the basic layout without data mapping.

```tsx
<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

--------------------------------

### shadcn Build Command Usage and Options

Source: https://ui.shadcn.com/docs/cli

Complete usage documentation showing all available command-line options for the build command, including arguments for registry path and options for output directory, working directory, and help.

```bash
Usage: shadcn build [options] [registry]

build components for a shadcn registry

Arguments:
  registry             path to registry.json file (default: "./registry.json")

Options:
  -o, --output <path>  destination directory for json files (default: "./public/r")
  -c, --cwd <cwd>      the working directory. defaults to the current directory.
  -h, --help           display help for command
```

--------------------------------

### Install Calendar Dependencies Manually

Source: https://ui.shadcn.com/docs/components/calendar

Manually install the required dependencies for the Calendar component. Requires react-day-picker for the calendar UI and date-fns for date manipulation utilities.

```bash
npm install react-day-picker date-fns
```

--------------------------------

### Install Shadcn UI Avatar component via CLI

Source: https://ui.shadcn.com/docs/components/avatar

Installs the Shadcn UI Avatar component into your project using the `shadcn` CLI tool. This command automatically adds the necessary files and dependencies.

```bash
npx shadcn@latest add avatar
```

--------------------------------

### Add URL-based CSS Imports in shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Import external stylesheets and web fonts using url() syntax for CDN resources and local files, enabling integration of Google Fonts and remote style libraries.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "font-import",
  "type": "registry:item",
  "css": {
    "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap\")": {},
    "@import url('./local-styles.css')": {}
  }
}
```

--------------------------------

### Add UI components with add command

Source: https://ui.shadcn.com/docs/changelog

Executes the add command to install shadcn UI components into the project. The CLI automatically resolves dependencies, formats components based on custom configuration, and adds them to the specified directory.

```bash
npx shadcn@latest add
```

--------------------------------

### Create TanStack Router Project with shadcn/ui

Source: https://ui.shadcn.com/docs/installation/tanstack-router

Initialize a new TanStack Router application with file-based routing, Tailwind CSS styling, and shadcn/ui component library pre-integrated. This command scaffolds the complete project structure with all necessary dependencies.

```bash
npx create-tsrouter-app@latest my-app --template file-router --tailwind --add-ons shadcn
```

--------------------------------

### Install Custom Shadcn Component with CLI

Source: https://ui.shadcn.com/docs/registry/namespace

This bash command uses the `shadcn` CLI to add a custom component. It installs the component, which in turn resolves its `registryDependencies` and applies any specified overrides, such as custom CSS variables.

```bash
npx shadcn@latest add @my-company/custom-button
```

--------------------------------

### Install Radix UI Accordion Dependencies Manually

Source: https://ui.shadcn.com/docs/components/accordion

This command installs the core Radix UI Accordion package, `@radix-ui/react-accordion`, which is a prerequisite for manual integration of the Shadcn UI Accordion component. It ensures the necessary React components are available for use in your project.

```bash
npm install @radix-ui/react-accordion
```

--------------------------------

### Install Calendar Blocks for shadcn

Source: https://ui.shadcn.com/docs/components/calendar

Command to install the latest calendar block components after upgrading the base Calendar component. Deploys pre-built calendar layout variations compatible with the upgraded component version.

```bash
npx shadcn@latest add calendar-02
```

--------------------------------

### Select Dropdown Usage Example with TSX

Source: https://ui.shadcn.com/docs/components/select

Complete usage example showing a Select component with a theme selector (Light, Dark, System options). Demonstrates SelectTrigger with placeholder text, SelectValue, and multiple SelectItem options within SelectContent.

```tsx
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Theme" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>
```

--------------------------------

### Install Input Group - CLI (bash)

Source: https://ui.shadcn.com/docs/components/input-group

Command to scaffold the input-group component using the shadcn CLI. Dependencies: Node.js and network access to install and run the npx package; Input: runs in project root; Output: adds component files to your project. Limitation: requires shadcn CLI and may need manual path adjustments after scaffolding.

```bash
npx shadcn@latest add input-group

```

--------------------------------

### Install Radix UI Toggle Group Dependency

Source: https://ui.shadcn.com/docs/components/toggle-group

Install the @radix-ui/react-toggle-group package as a dependency when manually setting up the toggle-group component. This is required for the component to function properly.

```bash
npm install @radix-ui/react-toggle-group
```

--------------------------------

### Install Embla Carousel Dependencies

Source: https://ui.shadcn.com/docs/components/carousel

NPM installation command for the Embla Carousel React library, required for the carousel component functionality. Run this command to add the necessary dependencies to your project.

```bash
npm install embla-carousel-react
```

--------------------------------

### Basic Empty State Demo with Project Icon

Source: https://ui.shadcn.com/docs/components/empty

Complete example demonstrating a basic empty state with header containing icon media, title, and description, plus action buttons in the content area. Uses Tabler and Lucide icons for visual elements.

```tsx
import { IconFolderCode } from "@tabler/icons-react"
import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderCode />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button>Create Project</Button>
          <Button variant="outline">Import Project</Button>
        </div>
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <a href="#">
          Learn More <ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  )
}
```

--------------------------------

### Manually install Radix UI Scroll Area dependency (NPM)

Source: https://ui.shadcn.com/docs/components/scroll-area

This command installs the core `@radix-ui/react-scroll-area` dependency, a prerequisite for manual integration of the Scroll Area component. After installation, you will need to copy the component's source code and update import paths.

```bash
npm install @radix-ui/react-scroll-area
```

--------------------------------

### Install Sonner Component with shadcn CLI

Source: https://ui.shadcn.com/docs/components/sonner

Command-line installation of the Sonner toast component using the shadcn package manager. This is the quickest method to add Sonner to a project with all necessary dependencies pre-configured.

```bash
npx shadcn@latest add sonner
```

--------------------------------

### Install Shadcn UI Sidebar Component via CLI

Source: https://ui.shadcn.com/docs/components/sidebar

This command uses npx to add the Shadcn UI Sidebar component to your project. It fetches the latest version and integrates `sidebar.tsx` into your components directory. Run this command in your project's terminal.

```bash
npx shadcn@latest add sidebar
```

--------------------------------

### Import UI Components from Monorepo Package

Source: https://ui.shadcn.com/docs/monorepo

Import shadcn/ui components from the @workspace/ui package using the configured aliases. Components are accessed through the ui alias pointing to the shared components directory.

```typescript
import { Button } from "@workspace/ui/components/button"
```

--------------------------------

### Basic Button Demo Component

Source: https://ui.shadcn.com/docs/components/button

Example React component demonstrating basic Button usage with outline variant and an icon button. Uses lucide-react icons and Tailwind CSS for layout.

```typescript
import { ArrowUpIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap items-center gap-2 md:flex-row">
      <Button variant="outline">Button</Button>
      <Button variant="outline" size="icon" aria-label="Submit">
        <ArrowUpIcon />
      </Button>
    </div>
  )
}
```

--------------------------------

### Basic Sheet Usage Example in TSX

Source: https://ui.shadcn.com/docs/components/sheet

Minimal Sheet implementation with trigger button, content area, header with title and description. Demonstrates the basic structure for creating a confirmation dialog.

```tsx
<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
```

--------------------------------

### Install Radix UI Collapsible Dependency Manually

Source: https://ui.shadcn.com/docs/components/collapsible

This command installs the `@radix-ui/react-collapsible` package, which is a prerequisite for the Shadcn UI Collapsible component. It provides the core unstyled primitive functionality that Shadcn UI builds upon.

```bash
npm install @radix-ui/react-collapsible
```

--------------------------------

### Multi-Registry Setup Organized by Stability Level

Source: https://ui.shadcn.com/docs/registry/namespace

Configure registries separated by stability levels (stable, latest/beta, experimental) to manage resources across different release channels and maturity levels.

```json
{
  "@stable": "https://registry.company.com/stable/{name}.json",
  "@latest": "https://registry.company.com/beta/{name}.json",
  "@experimental": "https://registry.company.com/experimental/{name}.json"
}
```

--------------------------------

### Install Sonner Dependencies Manually

Source: https://ui.shadcn.com/docs/components/sonner

Manual installation command for Sonner and next-themes dependencies when not using the shadcn CLI method. Required packages for setting up Sonner toast notifications in a Next.js project.

```bash
npm install sonner next-themes
```

--------------------------------

### Install Tailwind CSS dependencies

Source: https://ui.shadcn.com/docs/installation/vite

Installs Tailwind CSS and its Vite plugin as project dependencies. This step is necessary to integrate Tailwind CSS into the Vite build process, enabling utility-first styling.

```bash
npm install tailwindcss @tailwindcss/vite
```

--------------------------------

### Configure PostCSS for Remix

Source: https://ui.shadcn.com/docs/installation/remix

Create a postcss.config.js file that configures Tailwind CSS and Autoprefixer plugins for processing CSS in your Remix application.

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

--------------------------------

### Provide Documentation Message for Registry Item in JSON

Source: https://ui.shadcn.com/docs/registry/registry-item-json

This JSON snippet allows for a custom documentation message to be displayed when a registry item is installed via the CLI. It's useful for providing specific instructions or important notes to the user, enhancing the installation experience.

```json
{
  "docs": "To get an OPENAI_API_KEY, sign up for an account at https://platform.openai.com."
}
```

--------------------------------

### Inspect Registry Item Payload (Bash)

Source: https://ui.shadcn.com/docs/registry/namespace

Command-line instruction to view the raw payload of a registry item before installation. This helps in understanding the content of a resource and its dependencies, providing transparency about what will be installed.

```bash
npx shadcn@latest view @acme/button
```

--------------------------------

### Adding Custom Tailwind Colors

Source: https://ui.shadcn.com/docs/registry/faq

JSON configuration showing how to add custom Tailwind color variables for both light and dark themes using the cssVars property.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "hello-world",
  "title": "Hello World",
  "type": "registry:block",
  "description": "A complex hello world component",
  "files": [
    // ...
  ],
  "cssVars": {
    "light": {
      "brand-background": "20 14.3% 4.1%",
      "brand-accent": "20 14.3% 4.1%"
    },
    "dark": {
      "brand-background": "20 14.3% 4.1%",
      "brand-accent": "20 14.3% 4.1%"
    }
  }
}
```

--------------------------------

### Configure components.json for UI Package Workspace

Source: https://ui.shadcn.com/docs/monorepo

Configure the components.json file for the shared ui package workspace with shadcn/ui schema and @workspace/ui aliases. Defines how components, utilities, hooks, and libraries are resolved within the ui package.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/styles/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@workspace/ui/components",
    "utils": "@workspace/ui/lib/utils",
    "hooks": "@workspace/ui/hooks",
    "lib": "@workspace/ui/lib",
    "ui": "@workspace/ui/components"
  }
}
```

--------------------------------

### Basic Progress Component Usage

Source: https://ui.shadcn.com/docs/components/progress

Minimal example showing how to render a Progress component with a specific value. The value prop accepts a number representing the completion percentage.

```tsx
<Progress value={33} />
```

--------------------------------

### Import Hooks and Utilities from Monorepo

Source: https://ui.shadcn.com/docs/monorepo

Import custom hooks and utility functions from the @workspace/ui package using configured aliases. Provides access to theme hooks and utility functions like cn for className composition.

```typescript
import { useTheme } from "@workspace/ui/hooks/use-theme"
import { cn } from "@workspace/ui/lib/utils"
```

--------------------------------

### Add Environment Variables to shadcn UI Registry Item

Source: https://ui.shadcn.com/docs/registry/examples

Shows how to declare environment variables using the `envVars` field in a registry item. Variables are added to `.env.local` or `.env` files without overwriting existing values. Best practice is to use this for development and example variables only, never production secrets.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-item",
  "type": "registry:item",
  "envVars": {
    "NEXT_PUBLIC_APP_URL": "http://localhost:4000",
    "DATABASE_URL": "postgresql://postgres:postgres@localhost:5432/postgres",
    "OPENAI_API_KEY": ""
  }
}
```

--------------------------------

### View Registry Items with view Command

Source: https://ui.shadcn.com/docs/cli

The view command allows you to preview components and items from the registry before installation. Supports viewing single or multiple items, including namespaced registry items.

```bash
npx shadcn@latest view [item]
```

```bash
npx shadcn@latest view button card dialog
```

```bash
npx shadcn@latest view @acme/auth @v0/dashboard
```

```bash
Usage: shadcn view [options] <items...>

view items from the registry

Arguments:
  items            the item names or URLs to view

Options:
  -c, --cwd <cwd>  the working directory. defaults to the current directory.
  -h, --help       display help for command
```

--------------------------------

### Multiple Plugins with Automatic Deduplication

Source: https://ui.shadcn.com/docs/registry/examples

Illustrates how to declare multiple Tailwind CSS plugins with npm dependencies. The system automatically groups plugins together and removes duplicates. Multiple dependencies are declared in an array and corresponding plugins are referenced in the css object.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "multiple-plugins",
  "type": "registry:item",
  "dependencies": [
    "@tailwindcss/typography",
    "@tailwindcss/forms",
    "tw-animate-css"
  ],
  "css": {
    "@plugin \"@tailwindcss/typography\"": {},
    "@plugin \"@tailwindcss/forms\"": {},
    "@plugin \"tw-animate-css\"": {}
  }
}
```

--------------------------------

### Complex Component Registry Configuration

Source: https://ui.shadcn.com/docs/registry/faq

A complete JSON schema defining a complex shadcn/ui registry item that includes a page, multiple components, a hook, utilities, and a config file with specified targets.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "hello-world",
  "title": "Hello World",
  "type": "registry:block",
  "description": "A complex hello world component",
  "files": [
    {
      "path": "registry/new-york/hello-world/page.tsx",
      "type": "registry:page",
      "target": "app/hello/page.tsx"
    },
    {
      "path": "registry/new-york/hello-world/components/hello-world.tsx",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/hello-world/components/formatted-message.tsx",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/hello-world/hooks/use-hello.ts",
      "type": "registry:hook"
    },
    {
      "path": "registry/new-york/hello-world/lib/format-date.ts",
      "type": "registry:utils"
    },
    {
      "path": "registry/new-york/hello-world/hello.config.ts",
      "type": "registry:file",
      "target": "~/hello.config.ts"
    }
  ]
}
```

--------------------------------

### Overriding Tailwind Theme Variables

Source: https://ui.shadcn.com/docs/registry/faq

JSON configuration demonstrating how to add or override Tailwind theme variables including text size, easing functions, and font families.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "hello-world",
  "title": "Hello World",
  "type": "registry:block",
  "description": "A complex hello world component",
  "files": [
    // ...
  ],
  "cssVars": {
    "theme": {
      "text-base": "3rem",
      "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      "font-heading": "Poppins, sans-serif"
    }
  }
}
```

--------------------------------

### Configure components.json for Web App Workspace

Source: https://ui.shadcn.com/docs/monorepo

Configure the components.json file for the web app workspace with shadcn/ui schema, style settings, Tailwind CSS configuration, and path aliases for component imports. Maps local paths and external @workspace/ui package paths for seamless component resolution.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "../../packages/ui/src/styles/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "hooks": "@/hooks",
    "lib": "@/lib",
    "utils": "@workspace/ui/lib/utils",
    "ui": "@workspace/ui/components"
  }
}
```

--------------------------------

### Manually Install Form Dependencies

Source: https://ui.shadcn.com/docs/components/form

This command lists the essential npm packages required for manually installing the form component. These dependencies include `@radix-ui/react-label`, `@radix-ui/react-slot`, `react-hook-form`, `@hookform/resolvers`, and `zod`, which are crucial for the component's functionality and validation capabilities.

```bash
npm install @radix-ui/react-label @radix-ui/react-slot react-hook-form @hookform/resolvers zod
```

--------------------------------

### Initialize and Add Components from Local Files with shadcn CLI

Source: https://ui.shadcn.com/docs/changelog

Bash commands demonstrating the new local file support feature in shadcn CLI. Allows initialization of projects and addition of components, themes, hooks, and utilities from local JSON files without requiring remote registries.

```bash
# Initialize a project from a local file
npx shadcn init ./template.json

# Add a component from a local file
npx shadcn add ./block.json
```

--------------------------------

### Import and Use Button Component in Remix Route

Source: https://ui.shadcn.com/docs/installation/remix

Import the Button component from the ui folder and use it in a Remix route component. Demonstrates basic component usage in a Remix application.

```typescript
import { Button } from "~/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

--------------------------------

### Complete Collapsible Sidebar Example with Inset Header (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/sidebar

This comprehensive example presents a fully functional collapsible sidebar, integrating `SidebarProvider`, `Sidebar`, `SidebarContent`, and navigation menus. It also includes `SidebarInset` to define a distinct header area within the layout, which houses the `SidebarTrigger` for toggling the sidebar's visibility.

```tsx
"use client"

import {
  CalendarIcon,
  HomeIcon,
  InboxIcon,
  SearchIcon,
  SettingsIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: HomeIcon,
  },
  {
    title: "Inbox",
    url: "#",
    icon: InboxIcon,
  },
  {
    title: "Calendar",
    url: "#",
    icon: CalendarIcon,
  },
  {
    title: "Search",
    url: "#",
    icon: SearchIcon,
  },
  {
    title: "Settings",
    url: "#",
    icon: SettingsIcon,
  },
]

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center justify-between px-4">
          <SidebarTrigger />
        </header>
      </SidebarInset>
    </SidebarProvider>
  )
}
```

--------------------------------

### Configure TypeScript path aliases in tsconfig.json

Source: https://ui.shadcn.com/docs/installation/manual

Set up path aliases in your TypeScript configuration file to enable import shortcuts. The `@/*` alias maps to the project root, allowing imports like `@/components` instead of relative paths. This configuration is optional but recommended for cleaner imports.

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

--------------------------------

### Combined Imports and Plugins with Ordered CSS Processing

Source: https://ui.shadcn.com/docs/registry/examples

Shows the proper ordering of CSS directives in shadcn UI: imports first, then plugins, followed by layer and utility declarations. This pattern ensures correct CSS cascade and specificity when using both `@import` and `@plugin` directives with custom layers and utilities.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "combined-example",
  "type": "registry:item",
  "dependencies": ["@tailwindcss/typography", "tw-animate-css"],
  "css": {
    "@import \"tailwindcss\"": {},
    "@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap\")": {},
    "@plugin \"@tailwindcss/typography\"": {},
    "@plugin \"tw-animate-css\"": {},
    "@layer base": {
      "body": {
        "font-family": "Inter, sans-serif"
      }
    },
    "@utility content-auto": {
      "content-visibility": "auto"
    }
  }
}
```

--------------------------------

### Card Login Form Demo Component

Source: https://ui.shadcn.com/docs/components/card

Complete example of a Card component displaying a login form with email and password inputs, action buttons, and integrated form validation. Demonstrates responsive design with Tailwind classes and nested UI components.

```tsx
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  )
}
```

--------------------------------

### Define Custom Primary CSS Variables

Source: https://ui.shadcn.com/docs/theming

Provides an example of defining `--primary` and `--primary-foreground` CSS variables using the Oklch color format, adhering to the convention for background and foreground colors.

```css
--primary: oklch(0.205 0 0);
--primary-foreground: oklch(0.985 0 0);
```

--------------------------------

### Install next-themes Package

Source: https://ui.shadcn.com/docs/dark-mode/next

Install the next-themes npm package which provides theme management utilities for Next.js applications. This is the foundational dependency required for implementing dark mode functionality.

```bash
npm install next-themes
```

--------------------------------

### Add Custom Theme Variables to shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Define custom CSS variables in the theme object to extend shadcn/ui's design system with project-specific values for typography, shadows, and other design tokens.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "theme": {
      "font-heading": "Inter, sans-serif",
      "shadow-card": "0 0 0 1px rgba(0, 0, 0, 0.1)"
    }
  }
}
```

--------------------------------

### Add Simple Utility Class in shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Create a simple custom utility class using @utility directive to add single CSS property utilities to Tailwind's utility layer for common styling needs.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "css": {
    "@utility content-auto": {
      "content-visibility": "auto"
    }
  }
}
```

--------------------------------

### Add Base Styles Layer in shadcn/ui CSS

Source: https://ui.shadcn.com/docs/registry/examples

Define global base styles using Tailwind's @layer directive to style HTML elements like headings with theme variables, ensuring consistent typography across the application.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-style",
  "type": "registry:style",
  "css": {
    "@layer base": {
      "h1": {
        "font-size": "var(--text-2xl)"
      },
      "h2": {
        "font-size": "var(--text-xl)"
      }
    }
  }
}
```

--------------------------------

### Toast Types Examples with React and Sonner

Source: https://ui.shadcn.com/docs/components/sonner

Comprehensive example demonstrating all toast notification types: default, success, info, warning, error, and promise-based toasts. Shows how to trigger each toast type using buttons and handle async operations with promise toasts that display loading, success, and error states.

```tsx
"use client"

import { toast } from "sonner"

import { Button } from "@/components/ui/button"

export function SonnerTypes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => toast("Event has been created")}>
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("Event has been created")}
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info("Be at the area 10 minutes before the event time")
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("Event start time cannot be earlier than 8am")
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("Event has not been created")}
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          toast.promise<{ name: string }>(
            () =>
              new Promise((resolve) =>
                setTimeout(() => resolve({ name: "Event" }), 2000)
              ),
            {
              loading: "Loading...",
              success: (data) => `${data.name} has been created`,
              error: "Error",
            }
          )
        }}
      >
        Promise
      </Button>
    </div>
  )
}
```

--------------------------------

### Add Component CSS Layer in shadcn/ui

Source: https://ui.shadcn.com/docs/registry/examples

Define component-level styles using Tailwind's @layer components directive to create reusable styled components like cards with consistent design properties.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-card",
  "type": "registry:component",
  "css": {
    "@layer components": {
      "card": {
        "background-color": "var(--color-white)",
        "border-radius": "var(--rounded-lg)",
        "padding": "var(--spacing-6)",
        "box-shadow": "var(--shadow-xl)"
      }
    }
  }
}
```

--------------------------------

### Define Custom Animations with Keyframes and CSS Variables

Source: https://ui.shadcn.com/docs/registry/examples

Demonstrates how to create custom animations by defining both `@keyframes` in the css object and corresponding theme variables in `cssVars`. This pattern requires matching keyframe definitions and theme configuration to properly use animations in Tailwind classes.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-component",
  "type": "registry:component",
  "cssVars": {
    "theme": {
      "--animate-wiggle": "wiggle 1s ease-in-out infinite"
    }
  },
  "css": {
    "@keyframes wiggle": {
      "0%, 100%": {
        "transform": "rotate(-3deg)"
      },
      "50%": {
        "transform": "rotate(3deg)"
      }
    }
  }
}
```

--------------------------------

### Add Basic CSS Imports in shadcn/ui Registry

Source: https://ui.shadcn.com/docs/registry/examples

Include CSS imports in registry items using @import directives to load external stylesheets and frameworks. Imports are automatically placed at the top of generated CSS files.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-import",
  "type": "registry:component",
  "css": {
    "@import \"tailwindcss\"": {},
    "@import \"./styles/base.css\"": {}
  }
}
```

--------------------------------

### Configure Tailwind and PostCSS in remix.config.js

Source: https://ui.shadcn.com/docs/installation/remix

Update the remix.config.js file to enable Tailwind CSS and PostCSS processing. This allows Remix to handle CSS compilation during development and build.

```javascript
/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ...
  tailwind: true,
  postcss: true,
  ...
};
```

--------------------------------

### Define custom theme with OKLCH color values

Source: https://ui.shadcn.com/docs/registry/examples

Create a custom registry theme using OKLCH color space for light and dark modes, defining colors for background, foreground, primary, ring, and sidebar-specific variables. OKLCH provides perceptually uniform color values for better color consistency across themes.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "light": {
      "background": "oklch(1 0 0)",
      "foreground": "oklch(0.141 0.005 285.823)",
      "primary": "oklch(0.546 0.245 262.881)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.746 0.16 232.661)",
      "sidebar-primary": "oklch(0.546 0.245 262.881)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "sidebar-ring": "oklch(0.746 0.16 232.661)"
    },
    "dark": {
      "background": "oklch(1 0 0)",
      "foreground": "oklch(0.141 0.005 285.823)",
      "primary": "oklch(0.707 0.165 254.624)",
      "primary-foreground": "oklch(0.97 0.014 254.604)",
      "ring": "oklch(0.707 0.165 254.624)",
      "sidebar-primary": "oklch(0.707 0.165 254.624)",
      "sidebar-primary-foreground": "oklch(0.97 0.014 254.604)",
      "sidebar-ring": "oklch(0.707 0.165 254.624)"
    }
  }
}
```

--------------------------------

### Import Tailwind CSS in Remix Root Component

Source: https://ui.shadcn.com/docs/installation/remix

Import the tailwind.css stylesheet in your app/root.tsx file and add it to the links function to ensure global styles are applied throughout the application.

```typescript
import styles from "./tailwind.css?url"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
]
```

--------------------------------

### Install Node.js types for Vite configuration

Source: https://ui.shadcn.com/docs/installation/vite

Installs type definitions for Node.js as a development dependency. This is required for TypeScript to correctly type Node.js-specific modules like `path` which are often used in configuration files like `vite.config.ts`.

```bash
npm install -D @types/node
```

--------------------------------

### Create Basic AppSidebar Component in TSX

Source: https://ui.shadcn.com/docs/components/sidebar

This snippet demonstrates a simple React component, `AppSidebar`, that wraps the `Sidebar` component. It serves as an example of how to integrate the main `Sidebar` component into an application.

```tsx
import { Sidebar } from "@/components/ui/sidebar"

export function AppSidebar() {
  return <Sidebar />
}
```

--------------------------------

### Migrate Radix UI Imports with shadcn CLI

Source: https://ui.shadcn.com/docs/changelog

Command to migrate from individual @radix-ui/react-* packages to the unified radix-ui package. Automatically updates all imports in UI components and installs the new dependency.

```bash
npx shadcn@latest migrate radix
```

--------------------------------

### Configure Tailwind CSS import path

Source: https://ui.shadcn.com/docs/components-json

Defines the path to the CSS file that imports Tailwind CSS into the project. This helps the CLI locate and understand the Tailwind setup.

```json
{
  "tailwind": {
    "css": "styles/global.css"
  }
}
```

--------------------------------

### Install Shadcn UI Radio Group using CLI

Source: https://ui.shadcn.com/docs/components/radio-group

This `bash` command uses the Shadcn UI CLI to quickly add the Radio Group component to your project, automating dependency management and component file generation.

```bash
npx shadcn@latest add radio-group
```

--------------------------------

### Basic Registry Configuration with URL Templates

Source: https://ui.shadcn.com/docs/components-json

Configure multiple registries with simple URL template syntax. The {name} placeholder is automatically replaced with the resource name during installation. Supports multiple registry namespaces (@v0, @acme, @internal) for organizing component sources.

```json
{
  "registries": {
    "@v0": "https://v0.dev/chat/b/{name}",
    "@acme": "https://registry.acme.com/{name}.json",
    "@internal": "https://internal.company.com/{name}.json"
  }
}
```

--------------------------------

### GET /chat/api/open

Source: https://ui.shadcn.com/docs/registry/open-in-v0

Integrate your registry with Open in v0. This endpoint allows you to open a publicly accessible registry item in v0 by providing its URL.

```APIDOC
## GET /chat/api/open

### Description
This endpoint allows you to open a publicly accessible registry item in v0 by providing its URL. It redirects to or initiates an action within the v0 application.

### Method
GET

### Endpoint
/chat/api/open

### Parameters
#### Path Parameters
(None)

#### Query Parameters
- **url** (string) - Required - The publicly accessible URL of the registry item to open in v0.

#### Request Body
(None)

### Request Example
(N/A for GET request with query parameters)

### Response
#### Success Response (302 Redirect)
This endpoint typically performs a redirect or initiates an action within the v0 application, rather than returning a direct JSON response.

#### Response Example
(N/A)
```

--------------------------------

### Initialize shadcn MCP Server for AI Development Clients

Source: https://ui.shadcn.com/docs/registry/mcp

These `npx` commands initialize the shadcn Multi-Client Protocol (MCP) server, integrating it with specific AI development environments. Execute the relevant command in your project's root to enable your chosen AI client (e.g., Claude Code, Cursor, VS Code) to interact with your shadcn registry. Each command targets a different client via the `--client` flag, streamlining registry access for AI-driven component generation.

```bash
npx shadcn@latest mcp init --client claude
```

```bash
npx shadcn@latest mcp init --client cursor
```

```bash
npx shadcn@latest mcp init --client vscode
```

--------------------------------

### Force Install `npm` Packages to Resolve Peer Dependency Conflicts

Source: https://ui.shadcn.com/docs/react-19

These `npm` commands provide two methods to bypass strict peer dependency checks when installing packages. `--force` ignores and overrides any dependency conflicts, while `--legacy-peer-deps` skips strict peer dependency checks, allowing installation of packages with unmet dependencies. Use these when packages haven't updated their peer dependency declarations for React 19.

```bash
npm i <package> --force

npm i <package> --legacy-peer-deps
```

--------------------------------

### Install Scroll Area component using Shadcn UI CLI (Bash)

Source: https://ui.shadcn.com/docs/components/scroll-area

This command uses the `shadcn` CLI to automatically add the `ScrollArea` component to your project. This is the recommended method for quick and easy installation, handling component files and dependencies.

```bash
npx shadcn@latest add scroll-area
```

--------------------------------

### Dropdown Menu with Items

Source: https://ui.shadcn.com/docs/components/item

Complete example demonstrating how to integrate Item components within a DropdownMenu. Shows rendering a list of people with avatars, usernames, and emails.

```APIDOC
## Dropdown Menu Integration Example

### Description
Complete example showing how to use Item components within a DropdownMenu to display a list of selectable people with avatars and details.

### Implementation
```tsx
"use client"

import { ChevronDownIcon } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const people = [
  {
    username: "shadcn",
    avatar: "https://github.com/shadcn.png",
    email: "shadcn@vercel.com",
  },
  {
    username: "maxleiter",
    avatar: "https://github.com/maxleiter.png",
    email: "maxleiter@vercel.com",
  },
  {
    username: "evilrabbit",
    avatar: "https://github.com/evilrabbit.png",
    email: "evilrabbit@vercel.com",
  },
]

export function ItemDropdown() {
  return (
    <div className="flex min-h-64 w-full max-w-md flex-col items-center gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm" className="w-fit">
            Select <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-72 [--radius:0.65rem]" align="end">
          {people.map((person) => (
            <DropdownMenuItem key={person.username} className="p-0">
              <Item size="sm" className="w-full p-2">
                <ItemMedia>
                  <Avatar className="size-8">
                    <AvatarImage src={person.avatar} className="grayscale" />
                    <AvatarFallback>{person.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                </ItemMedia>
                <ItemContent className="gap-0.5">
                  <ItemTitle>{person.username}</ItemTitle>
                  <ItemDescription>{person.email}</ItemDescription>
                </ItemContent>
              </Item>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
```
```

--------------------------------

### Configure Initial CSS Variables with @theme Directive

Source: https://ui.shadcn.com/docs/tailwind-v4

This CSS snippet demonstrates the initial setup of CSS variables within a `@layer base` block, and their referencing under the `@theme` directive. It shows how `hsl` wrappers are directly applied to the theme variables.

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
  }
}

@theme {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
}
```

--------------------------------

### Query Parameter Authentication Configuration

Source: https://ui.shadcn.com/docs/registry/authentication

Configure query parameter-based authentication for simpler registry setups. Appends authentication token as query parameter to the registry URL, resulting in URLs like https://registry.company.com/button.json?token=your_token.

```json
{
  "registries": {
    "@internal": {
      "url": "https://registry.company.com/{name}.json",
      "params": {
        "token": "${ACCESS_TOKEN}"
      }
    }
  }
}
```

--------------------------------

### Basic Popover Usage in TSX

Source: https://ui.shadcn.com/docs/components/popover

Minimal example demonstrating how to implement a Popover with a trigger button and content area. The PopoverTrigger displays the open button and PopoverContent contains the portal content.

```typescript
<Popover>
  <PopoverTrigger>Open</PopoverTrigger>
  <PopoverContent>Place content for the popover here.</PopoverContent>
</Popover>
```

--------------------------------

### Configure import alias for UI components

Source: https://ui.shadcn.com/docs/components-json

Sets the import path alias specifically for UI components, allowing customization of the installation directory. Overrides the default location if needed.

```json
{
  "aliases": {
    "ui": "@/app/ui"
  }
}
```

--------------------------------

### Import and use Button component in Astro page

Source: https://ui.shadcn.com/docs/installation/astro

Import the Button component from the configured path alias and render it in an Astro page. Demonstrates proper component integration within an Astro layout with TailwindCSS styling.

```astro
---
import { Button } from "@/components/ui/button"
---

<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>Astro + TailwindCSS</title>
	</head>

	<body>
		<div className="grid place-items-center h-screen content-center">
			<Button>Button</Button>
		</div>
	</body>
</html>
```

--------------------------------

### Import and Use Basic Input Component - TypeScript/React

Source: https://ui.shadcn.com/docs/components/input

Demonstrates how to import and render a basic Input component with email type and placeholder. This is the minimal setup required to use the component in your application.

```tsx
import { Input } from "@/components/ui/input"

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}
```

--------------------------------

### Multi-Registry Setup Organized by Resource Type

Source: https://ui.shadcn.com/docs/registry/namespace

Configure registries separated by resource type (components, hooks, utilities, prompts) to organize resources by their functional category. Each namespace points to a different endpoint for its specific resource type.

```json
{
  "@components": "https://cdn.company.com/components/{name}.json",
  "@hooks": "https://cdn.company.com/hooks/{name}.json",
  "@utils": "https://cdn.company.com/utils/{name}.json",
  "@prompts": "https://cdn.company.com/ai-prompts/{name}.json"
}
```

--------------------------------

### Render Dynamic SidebarMenu with Projects in TSX

Source: https://ui.shadcn.com/docs/components/sidebar

This example demonstrates how to construct a complete sidebar menu using `SidebarProvider`, `Sidebar`, `SidebarContent`, `SidebarGroup`, `SidebarGroupLabel`, `SidebarGroupContent`, `SidebarMenu`, `SidebarMenuItem`, and `SidebarMenuButton`. It dynamically renders a list of project items with icons and links, showcasing a full implementation of the sidebar structure.

```tsx
"use client"\n\nimport {\n  FrameIcon,\n  LifeBuoyIcon,\n  MapIcon,\n  PieChartIcon,\n  SendIcon,\n} from "lucide-react"\n\nimport {\n  Sidebar,\n  SidebarContent,\n  SidebarGroup,\n  SidebarGroupContent,\n  SidebarGroupLabel,\n  SidebarMenu,\n  SidebarMenuButton,\n  SidebarMenuItem,\n  SidebarProvider,\n} from "@/components/ui/sidebar"\n\nconst projects = [\n  {\n    name: "Design Engineering",\n    url: "#",\n    icon: FrameIcon,\n  },\n  {\n    name: "Sales & Marketing",\n    url: "#",\n    icon: PieChartIcon,\n  },\n  {\n    name: "Travel",\n    url: "#",\n    icon: MapIcon,\n  },\n  {\n    name: "Support",\n    url: "#",\n    icon: LifeBuoyIcon,\n  },\n  {\n    name: "Feedback",\n    url: "#",\n    icon: SendIcon,\n  },\n]\n\nexport function AppSidebar() {\n  return (\n    <SidebarProvider>\n      <Sidebar>\n        <SidebarContent>\n          <SidebarGroup>\n            <SidebarGroupLabel>Projects</SidebarGroupLabel>\n            <SidebarGroupContent>\n              <SidebarMenu>\n                {projects.map((project) => (\n                  <SidebarMenuItem key={project.name}>\n                    <SidebarMenuButton asChild>\n                      <a href={project.url}>\n                        <project.icon />\n                        <span>{project.name}</span>\n                      </a>\n                    </SidebarMenuButton>\n                  </SidebarMenuItem>\n                ))}\n              </SidebarMenu>\n            </SidebarGroupContent>\n          </SidebarGroup>\n        </SidebarContent>\n      </Sidebar>\n    </SidebarProvider>\n  )\n}\n
```

--------------------------------

### Missing Environment Variables Error Message

Source: https://ui.shadcn.com/docs/changelog

CLI error output indicating missing required environment variables for a registry. Guides users to set the variables in .env or .env.local files.

```text
Registry "@private" requires the following environment variables:
  • REGISTRY_TOKEN

Set the required environment variables to your .env or .env.local file.
```

--------------------------------

### Initialize MCP Server with Shadcn CLI

Source: https://ui.shadcn.com/docs/changelog

Provides the command to add the MCP (Multi-Component Project) server to your project. This command enables better integration with the CLI and extends support for managing multiple registries within the same project.

```bash
npx shadcn@latest mcp init
```

--------------------------------

### Basic Hover Card Usage

Source: https://ui.shadcn.com/docs/components/hover-card

Minimal example demonstrating Hover Card basic structure with a trigger element and content that displays on hover. Shows the fundamental pattern for implementing hover preview functionality.

```tsx
<HoverCard>
  <HoverCardTrigger>Hover</HoverCardTrigger>
  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
</HoverCard>
```

--------------------------------

### Implement Checkbox Component with Examples (TSX)

Source: https://ui.shadcn.com/docs/components/checkbox

Showcases various use cases of the Shadcn UI Checkbox component, including basic interaction, associating with a description, disabled states, and advanced custom styling with a parent label. It imports `Checkbox` and `Label` components for a complete example.

```tsx
"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function CheckboxDemo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="terms-2" defaultChecked />
        <div className="grid gap-2">
          <Label htmlFor="terms-2">Accept terms and conditions</Label>
          <p className="text-muted-foreground text-sm">
            By clicking this checkbox, you agree to the terms and conditions.
          </p>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <Checkbox id="toggle" disabled />
        <Label htmlFor="toggle">Enable notifications</Label>
      </div>
      <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
        <Checkbox
          id="toggle-2"
          defaultChecked
          className="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700"
        />
        <div className="grid gap-1.5 font-normal">
          <p className="text-sm leading-none font-medium">
            Enable notifications
          </p>
          <p className="text-muted-foreground text-sm">
            You can enable or disable notifications at any time.
          </p>
        </div>
      </Label>
    </div>
  )
}
```

--------------------------------

### Configure Multiple Registries in components.json

Source: https://ui.shadcn.com/docs/registry/namespace

Set up multiple namespaced registries in your components.json configuration file. This example demonstrates organizing registries by type (UI, docs, AI, themes) and includes a private registry with authentication headers using environment variables.

```json
{
  "registries": {
    "@acme-ui": "https://registry.acme.com/ui/{name}.json",
    "@acme-docs": "https://registry.acme.com/docs/{name}.json",
    "@acme-ai": "https://registry.acme.com/ai/{name}.json",
    "@acme-themes": "https://registry.acme.com/themes/{name}.json",
    "@acme-internal": {
      "url": "https://internal.acme.com/registry/{name}.json",
      "headers": {
        "Authorization": "Bearer ${INTERNAL_TOKEN}"
      }
    }
  }
}
```

--------------------------------

### Drawer with State Management and Data Visualization

Source: https://ui.shadcn.com/docs/components/drawer

Advanced drawer component example featuring React state management with goal adjustment functionality, event handlers with boundary constraints, and integrated bar chart visualization using Recharts. Demonstrates interactive UI patterns with increment/decrement controls.

```tsx
"use client"

import * as React from "react"
import { Minus, Plus } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer } from "recharts"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const data = [
  { goal: 400 },
  { goal: 300 },
  { goal: 200 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 239 },
  { goal: 300 },
  { goal: 200 },
  { goal: 278 },
  { goal: 189 },
  { goal: 349 },
]

export function DrawerDemo() {
  const [goal, setGoal] = React.useState(350)

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)))
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <Minus />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-muted-foreground text-[0.70rem] uppercase">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <Plus />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
```

--------------------------------

### Import and Use Slider Component

Source: https://ui.shadcn.com/docs/components/slider

Basic usage example showing how to import the Slider component and render it with default value of 33, maximum value of 100, and step increment of 1.

```tsx
import { Slider } from "@/components/ui/slider"

<Slider defaultValue={[33]} max={100} step={1} />
```

--------------------------------

### Basic Plugin Usage in shadcn UI Registry

Source: https://ui.shadcn.com/docs/registry/examples

Demonstrates how to declare Tailwind CSS plugins in a shadcn UI registry item configuration. The `css` object contains plugin directives that reference Tailwind CSS packages and custom plugins. This is the foundational pattern for extending Tailwind functionality in shadcn components.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-plugin",
  "type": "registry:item",
  "css": {
    "@plugin \"@tailwindcss/typography\"": {},
    "@plugin \"foo\"": {}
  }
}
```

--------------------------------

### Implement a basic Shadcn UI Dialog in React

Source: https://ui.shadcn.com/docs/components/dialog

Shows the fundamental structure for a Shadcn UI Dialog, including a trigger button and content with a header, title, and description. This basic setup allows users to open a dialog to display information or ask for confirmation.

```tsx
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

--------------------------------

### Create React Router Project

Source: https://ui.shadcn.com/docs/installation/react-router

Initialize a new React Router project using the create-react-router CLI tool. This sets up the base project structure and dependencies needed for a React Router application.

```bash
npx create-react-router@latest my-app
```

--------------------------------

### Empty State with Gradient Background

Source: https://ui.shadcn.com/docs/components/empty

Advanced empty state example using gradient background utilities (bg-gradient-to-b) and muted colors for a polished appearance. Includes notification bell icon and refresh button for notification context.

```tsx
import { IconBell } from "@tabler/icons-react"
import { RefreshCcwIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyMuted() {
  return (
    <Empty className="from-muted/50 to-background h-full bg-gradient-to-b from-30%">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconBell />
        </EmptyMedia>
        <EmptyTitle>No Notifications</EmptyTitle>
        <EmptyDescription>
          You&apos;re all caught up. New notifications will appear here.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          <RefreshCcwIcon />
          Refresh
        </Button>
      </EmptyContent>
    </Empty>
  )
}
```

--------------------------------

### Multi-Registry Setup Organized by Team or Department

Source: https://ui.shadcn.com/docs/registry/namespace

Configure registries separated by team or department (design, engineering, marketing) allowing different organizational units to maintain their own resource registries with independent endpoints.

```json
{
  "@design": "https://design.company.com/registry/{name}.json",
  "@engineering": "https://eng.company.com/registry/{name}.json",
  "@marketing": "https://marketing.company.com/registry/{name}.json"
}
```

--------------------------------

### Import and Use Button Component in Next.js

Source: https://ui.shadcn.com/docs/installation/next

Import the Button component from shadcn/ui in a Next.js page component and render it. The component is imported from the @/components/ui/button path after installation, and can be used as a standard React component.

```tsx
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}
```

--------------------------------

### Override Tailwind CSS Variables in shadcn/ui Theme

Source: https://ui.shadcn.com/docs/registry/examples

Override Tailwind CSS variables including spacing and breakpoints within shadcn/ui theme configuration to customize responsive design behavior across the component library.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-theme",
  "type": "registry:theme",
  "cssVars": {
    "theme": {
      "spacing": "0.2rem",
      "breakpoint-sm": "640px",
      "breakpoint-md": "768px",
      "breakpoint-lg": "1024px",
      "breakpoint-xl": "1280px",
      "breakpoint-2xl": "1536px"
    }
  }
}
```

--------------------------------

### Registry Configuration Error Message

Source: https://ui.shadcn.com/docs/changelog

Example of an error message displayed when a registry is not properly defined in components.json. This helps users understand how to configure custom registries by showing the required JSON structure.

```json
{
  "registries": {
    "@acme": "[URL_TO_REGISTRY]"
  }
}
```

--------------------------------

### Define Registry Item Dependencies (JSON)

Source: https://ui.shadcn.com/docs/registry/namespace

Illustrates how to declare `registryDependencies` within a `registry-item.json` file. This allows resources to specify dependencies from various registries, which the CLI automatically resolves and installs.

```json
{
  "name": "dashboard",
  "type": "registry:block",
  "registryDependencies": [
    "@shadcn/card",
    "@v0/chart",
    "@acme/data-table",
    "@lib/data-fetcher",
    "@ai/analytics-prompt"
  ]
}
```

--------------------------------

### Shadcn CLI Commands for Registry Search and Discovery

Source: https://ui.shadcn.com/docs/changelog

Utilize new CLI commands to efficiently find and preview components across multiple registries. `npx shadcn view` allows inspecting an item, `npx shadcn search` helps locate items with specific queries, and `npx shadcn list` displays all items from a designated registry.

```bash
npx shadcn view @acme/auth-system
```

```bash
npx shadcn search @tweakcn -q "dark"
```

```bash
npx shadcn list @acme
```

--------------------------------

### Basic Registry Configuration with URL Template

Source: https://ui.shadcn.com/docs/registry/namespace

Configure simple namespaced registries using URL template strings in components.json. The {name} placeholder is automatically replaced with the resource name when installing components. This approach works for public registries without authentication requirements.

```json
{
  "registries": {
    "@v0": "https://v0.dev/chat/b/{name}",
    "@acme": "https://registry.acme.com/resources/{name}.json",
    "@lib": "https://lib.company.com/utilities/{name}",
    "@ai": "https://ai-resources.com/r/{name}.json"
  }
}
```

--------------------------------

### Add custom brand color to shadcn/ui style

Source: https://ui.shadcn.com/docs/registry/examples

Extend the default shadcn/ui style by adding a custom `brand` color variable with OKLCH values for both light and dark modes. This approach maintains shadcn/ui defaults while introducing brand-specific color customization.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "custom-style",
  "type": "registry:style",
  "cssVars": {
    "light": {
      "brand": "oklch(0.99 0.00 0)"
    },
    "dark": {
      "brand": "oklch(0.14 0.00 286)"
    }
  }
}
```

--------------------------------

### Configure TypeScript path resolution in tsconfig.json

Source: https://ui.shadcn.com/docs/installation/astro

Add baseUrl and paths configuration to the tsconfig.json file to enable import aliases. This allows using the @/* alias to reference files in the src directory, improving import readability and maintainability.

```typescript
{
  "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
}
```

--------------------------------

### Empty State with Dashed Border Outline

Source: https://ui.shadcn.com/docs/components/empty

Example demonstrating an outlined empty state using the border utility class with dashed style. Includes cloud icon and upload files action button for file storage context.

```tsx
import { IconCloud } from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyOutline() {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconCloud />
        </EmptyMedia>
        <EmptyTitle>Cloud Storage Empty</EmptyTitle>
        <EmptyDescription>
          Upload files to your cloud storage to access them anywhere.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Upload Files
        </Button>
      </EmptyContent>
    </Empty>
  )
}
```

--------------------------------

### Skeleton Card Component - TypeScript React

Source: https://ui.shadcn.com/docs/components/skeleton

Example implementation of a skeleton loading state for a card layout. Combines a large rectangular placeholder with multiple smaller text placeholders in a vertical flex layout.

```typescript
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
```

--------------------------------

### Item Component Variants Example - TSX

Source: https://ui.shadcn.com/docs/components/item

Demonstrates three Item variants: default (subtle styling), outline (clear borders), and muted (subdued colors). Each includes content with title, description, and action button.

```tsx
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

export function ItemVariant() {
  return (
    <div className="flex flex-col gap-6">
      <Item>
        <ItemContent>
          <ItemTitle>Default Variant</ItemTitle>
          <ItemDescription>
            Standard styling with subtle background and borders.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Outline Variant</ItemTitle>
          <ItemDescription>
            Outlined style with clear borders and transparent background.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Muted Variant</ItemTitle>
          <ItemDescription>
            Subdued appearance with muted colors for secondary content.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Open
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
```

--------------------------------

### Basic Button Group Usage - TSX

Source: https://ui.shadcn.com/docs/components/button-group

Minimal example showing how to create a simple button group with two buttons. This demonstrates the basic structure and usage pattern of the ButtonGroup container component.

```tsx
<ButtonGroup>
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</ButtonGroup>
```

--------------------------------

### Menu Action Active State Styling

Source: https://ui.shadcn.com/docs/components/sidebar

TSX example showing how to make a menu action visible when its associated menu button is in an active state using peer data attributes.

```tsx
<SidebarMenuItem>
  <SidebarMenuButton />
  <SidebarMenuAction className="peer-data-[active=true]/menu-button:opacity-100" />
</SidebarMenuItem>
```

--------------------------------

### Full App Sidebar Implementation with SidebarGroupAction (TSX)

Source: https://ui.shadcn.com/docs/components/sidebar

This comprehensive example demonstrates how to construct an `AppSidebar` component using Shadcn UI. It showcases the integration of `SidebarGroupAction` within a `SidebarGroup` to add an 'Add Project' button, utilizing `lucide-react` icons and `sonner` toasts for interactive feedback. The component provides a structured navigation for various project categories.

```tsx
"use client"

import { FrameIcon, MapIcon, PieChartIcon, PlusIcon } from "lucide-react"
import { toast, Toaster } from "sonner"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Toaster
        position="bottom-left"
        toastOptions={{
          className: "ml-[160px]",
        }}
      />
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupAction
              title="Add Project"
              onClick={() => toast("You clicked the group action!")}
            >
              <PlusIcon /> <span className="sr-only">Add Project</span>
            </SidebarGroupAction>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <FrameIcon />
                      <span>Design Engineering</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <PieChartIcon />
                      <span>Sales & Marketing</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#">
                      <MapIcon />
                      <span>Travel</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}
```

--------------------------------

### Basic Skeleton Demo - TypeScript React

Source: https://ui.shadcn.com/docs/components/skeleton

Demonstrates a basic skeleton loading placeholder with circular and rectangular shapes arranged in a flex layout. Shows import and component usage with Tailwind CSS classes for sizing and spacing.

```typescript
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
```

--------------------------------

### Import and Use Toast Function

Source: https://ui.shadcn.com/docs/components/sonner

Basic import statement and simple usage example of the toast function from Sonner. Demonstrates the minimal code required to display a default toast notification.

```tsx
import { toast } from "sonner"

toast("Event has been created.")
```

--------------------------------

### Configure Namespaced Registries in components.json

Source: https://ui.shadcn.com/docs/changelog

Configure various registries (e.g., "@acme", "@internal", "@design") with their URLs and authentication headers in your `components.json` file. This setup allows for fetching components from different community, private, or team-specific sources using a simple "@registry/name" format.

```json
{
  "registries": {
    "@acme": "https://acme.com/r/{name}.json",
    "@internal": {
      "url": "https://registry.company.com/{name}",
      "headers": {
        "Authorization": "Bearer ${REGISTRY_TOKEN}"
      }
    }
  }
}
```

```json
{
  "registries": {
    "@design": "https://registry.company.com/design/{name}.json",
    "@engineering": "https://registry.company.com/eng/{name}.json",
    "@marketing": "https://registry.company.com/marketing/{name}.json"
  }
}
```

--------------------------------

### Build Multi-field Form with FieldSet and FieldGroup

Source: https://ui.shadcn.com/docs/changelog

Create a structured form layout using FieldSet and FieldGroup for organization. This example shows username and password fields with proper semantic HTML and accessibility attributes.

```tsx
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldInput() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input id="username" type="text" placeholder="Max Leiter" />
            <FieldDescription>
              Choose a unique username for your account.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <FieldDescription>
              Must be at least 8 characters long.
            </FieldDescription>
            <Input id="password" type="password" placeholder="••••••••" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
```

--------------------------------

### InputGroupTextarea with Button

Source: https://ui.shadcn.com/docs/components/input-group

Example of using InputGroupTextarea with a block-end aligned button addon for message inputs.

```tsx
<InputGroup>
  <InputGroupTextarea placeholder="Enter message..." />
  <InputGroupAddon align="block-end">
    <InputGroupButton>Send</InputGroupButton>
  </InputGroupAddon>
</InputGroup>
```

--------------------------------

### EmptyContent Component with Button Action

Source: https://ui.shadcn.com/docs/components/empty

Display interactive content like buttons, inputs, or links in an empty state using EmptyContent component. This example shows a button for user action and supports className prop for styling customization.

```tsx
<EmptyContent>
  <Button>Add Project</Button>
</EmptyContent>
```

--------------------------------

### Configure TypeScript Path Resolution in tsconfig.json

Source: https://ui.shadcn.com/docs/installation/gatsby

Configure the TypeScript compiler to resolve path aliases starting with '@/' to the './src/' directory. This enables cleaner import statements throughout your project.

```typescript
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  }
}
```

--------------------------------

### Configure Private Registry with Environment Variable Authentication (JSON)

Source: https://ui.shadcn.com/docs/registry/namespace

Demonstrates how to configure a private registry in `components.json` using an environment variable for authorization. This setup ensures that authentication tokens are not hardcoded but expanded at runtime, enhancing security. The URL uses a placeholder for the registry name.

```json
{
  "registries": {
    "@private": {
      "url": "https://api.company.com/registry/{name}.json",
      "headers": {
        "Authorization": "Bearer ${PRIVATE_REGISTRY_TOKEN}"
      }
    }
  }
}
```

--------------------------------

### Configure shadcn MCP Registries in components.json

Source: https://ui.shadcn.com/docs/mcp

This JSON snippet demonstrates how to configure component registries within your project's `components.json` file. It sets up an example `@acme` registry pointing to a URL template for fetching component definitions, allowing the MCP server to discover and access components.

```json
{
  "registries": {
    "@acme": "https://acme.com/r/{name}.json"
  }
}
```

--------------------------------

### EmptyMedia Component with Avatar

Source: https://ui.shadcn.com/docs/components/empty

Display an avatar in the empty state using EmptyMedia with default variant. This example demonstrates nesting AvatarImage and AvatarFallback components within EmptyMedia for a complete avatar display in empty state UI.

```tsx
<EmptyMedia>
  <Avatar>
    <AvatarImage src="..." />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
</EmptyMedia>
```

--------------------------------

### Render Basic Keyboard Inputs with React Kbd and KbdGroup

Source: https://ui.shadcn.com/docs/components/kbd

Demonstrates how to display individual keyboard keys and group them using the Kbd and KbdGroup components in a React application. This example shows common modifier keys (⌘, ⇧, ⌥, ⌃) and key combinations like 'Ctrl + B'.

```tsx
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function KbdDemo() {
  return (
    <div className="flex flex-col items-center gap-4">
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⌃</Kbd>
      </KbdGroup>
      <KbdGroup>
        <Kbd>Ctrl</Kbd>
        <span>+</span>
        <Kbd>B</Kbd>
      </KbdGroup>
    </div>
  )
}
```

--------------------------------

### Generate Tokens with Expiration

Source: https://ui.shadcn.com/docs/registry/authentication

Create secure authentication tokens with automatic expiration dates for enhanced security. Tokens expire after a specified period (30 days in this example) to limit exposure from compromised credentials.

```typescript
function generateToken() {
  const token = crypto.randomBytes(32).toString("hex")
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)

  return { token, expiresAt }
}
```

--------------------------------

### Complete Table Demo with Sample Data

Source: https://ui.shadcn.com/docs/components/table

A full implementation of the Table component displaying invoice data with headers, body, and footer. Includes sample data structure and demonstrates mapping over data to create table rows.

```tsx
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
```

--------------------------------

### Build Next.js Form with Field Component

Source: https://ui.shadcn.com/docs/forms/next

This example demonstrates the basic structure of a form in Next.js using the `<Form />` and `<Field />` components, integrated with `useActionState` for managing form state and errors. It shows how to bind form elements, display errors, and handle disabled states to create an accessible form.

```tsx
<Form action={formAction}>
  <FieldGroup>
    <Field data-invalid={!!formState.errors?.title?.length}>
      <FieldLabel htmlFor="title">Bug Title</FieldLabel>
      <Input
        id="title"
        name="title"
        defaultValue={formState.values.title}
        disabled={pending}
        aria-invalid={!!formState.errors?.title?.length}
        placeholder="Login button not working on mobile"
        autoComplete="off"
      />
      <FieldDescription>
        Provide a concise title for your bug report.
      </FieldDescription>
      {formState.errors?.title && (
        <FieldError>{formState.errors.title[0]}</FieldError>
      )}
    </Field>
  </FieldGroup>
  <Button type="submit">Submit</Button>
</Form>
```

--------------------------------

### Create Class Name Utility Function with clsx and tailwind-merge

Source: https://ui.shadcn.com/docs/installation/manual

Exports a utility function that merges multiple class value inputs using clsx and tailwind-merge libraries. This function resolves conflicting Tailwind CSS classes and combines them efficiently, preventing style conflicts when conditionally applying classes to components.

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

--------------------------------

### Configure TypeScript path aliases in tsconfig.json

Source: https://ui.shadcn.com/docs/installation/vite

Adds `baseUrl` and `paths` properties to the `compilerOptions` section of `tsconfig.json`. This configuration helps resolve module imports starting with `@/` to the `./src` directory, improving code organization and developer experience.

```typescript
{
  "files": [],
  "references": [
    {
      "path": "./tsconfig.app.json"
    },
    {
      "path": "./tsconfig.node.json"
    }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

--------------------------------

### Calendar Component Usage Example in React

Source: https://ui.shadcn.com/docs/components/calendar

Basic usage pattern for rendering a single-select Calendar component with state management. Demonstrates setting selected date, handling date changes via onSelect callback, and applying custom className styling.

```tsx
const [date, setDate] = React.useState<Date | undefined>(new Date())

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="rounded-lg border"
  />
)
```

--------------------------------

### Alert Dialog Demo Component - TypeScript React

Source: https://ui.shadcn.com/docs/components/alert-dialog

A complete Alert Dialog implementation demonstrating the component structure with trigger button, header, description, and footer actions. This example shows a destructive action pattern with Cancel and Continue buttons, commonly used for confirmation dialogs.

```typescript
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
```

--------------------------------

### Configure Vite for path aliases and Tailwind CSS

Source: https://ui.shadcn.com/docs/installation/vite

Updates `vite.config.ts` to include path aliases and the Tailwind CSS plugin. This configuration allows resolving imports starting with `@/` to `./src` and integrates Tailwind CSS into the build process, ensuring all modules are correctly bundled.

```typescript
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

--------------------------------

### Configure Import Aliases in components.json

Source: https://ui.shadcn.com/docs/changelog

Update the components.json configuration file to include import aliases for components, utilities, UI components, libraries, and hooks. This setup enables the new CLI to properly resolve module paths when importing shadcn/ui components into your project. Replace the @ prefix with your preferred alias if using an alternative import prefix like ~.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "tailwind": {
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

--------------------------------

### Example Shadcn UI Form Section with Comments and Buttons

Source: https://ui.shadcn.com/docs/components/field

A partial JSX snippet demonstrating a form section with a `Textarea` for comments and `Button` components for submission and cancellation. Utilizes `FieldLabel` and `Field` components for accessibility and structure within a `FieldGroup`.

```tsx
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Comments
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Add any additional comments"
                  className="resize-none"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button">
              Cancel
            </Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
```

--------------------------------

### Render diverse Shadcn UI Alert examples in React

Source: https://ui.shadcn.com/docs/components/alert

This React functional component demonstrates various configurations of the Shadcn UI Alert component. It showcases alerts with success, informational, and destructive variants, including different combinations of icons, titles, and descriptions for user feedback.

```tsx
import { AlertCircleIcon, CheckCircle2Icon, PopcornIcon } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"

export function AlertDemo() {
  return (
    <div className="grid w-full max-w-xl items-start gap-4">
      <Alert>
        <CheckCircle2Icon />
        <AlertTitle>Success! Your changes have been saved</AlertTitle>
        <AlertDescription>
          This is an alert with icon, title and description.
        </AlertDescription>
      </Alert>
      <Alert>
        <PopcornIcon />
        <AlertTitle>
          This Alert has a title and an icon. No description.
        </AlertTitle>
      </Alert>
      <Alert variant="destructive">
        <AlertCircleIcon />
        <AlertTitle>Unable to process your payment.</AlertTitle>
        <AlertDescription>
          <p>Please verify your billing information and try again.</p>
          <ul className="list-inside list-disc text-sm">
            <li>Check your card details</li>
            <li>Ensure sufficient funds</li>
            <li>Verify billing address</li>
          </ul>
        </AlertDescription>
      </Alert>
    </div>
  )
}
```

--------------------------------

### Render Basic SidebarGroup Structure with Labels and Actions (TypeScript)

Source: https://ui.shadcn.com/docs/components/sidebar

This example demonstrates creating a fundamental `SidebarGroup` in a Shadcn UI sidebar. It showcases how to use `SidebarGroupLabel` for titles and `SidebarGroupContent` for nested menu items, along with an optional `SidebarGroupAction` to add interactive elements to the group header.

```tsx
"use client"

import { LifeBuoyIcon, SendIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Help</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <LifeBuoyIcon />
                    Support
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <SendIcon />
                    Feedback
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}
```

```tsx
import { Sidebar, SidebarContent, SidebarGroup } from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupAction>
            <Plus /> <span className="sr-only">Add Project</span>
          </SidebarGroupAction>
          <SidebarGroupContent></SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
```

--------------------------------

### Sheet Component Property Migration from position to side

Source: https://ui.shadcn.com/docs/changelog

Breaking change migration guide for updating Sheet component props from 'position' to 'side'. This rename improves API clarity by using more semantic terminology for slide-in positioning.

```diff
- <Sheet position="right" />
+ <Sheet side="right" />
```

--------------------------------

### Initialize Form with React Hook Form and Zod Resolver

Source: https://ui.shadcn.com/docs/components/form

This code demonstrates the complete setup of a form using the `useForm` hook from `react-hook-form`, integrating `zodResolver` for robust validation based on a predefined Zod `formSchema`. It includes defining a submit handler (`onSubmit`) for processing form values, ensuring both type-safety and validation before submission, and setting default values for form fields.

```tsx
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})

export function ProfileForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
}
```

--------------------------------

### Implement a Nested Sidebar Menu with `SidebarMenuSub` in TypeScript/React

Source: https://ui.shadcn.com/docs/components/sidebar

This example demonstrates how to integrate `SidebarMenuSub` components to create a multi-level sidebar navigation. It uses a predefined `items` array to dynamically render main menu items with nested sub-items, utilizing `SidebarProvider`, `Sidebar`, and other related components for a complete menu structure.

```tsx
"use client"\n\nimport {\n  Sidebar,\n  SidebarContent,\n  SidebarGroup,\n  SidebarGroupContent,\n  SidebarMenu,\n  SidebarMenuButton,\n  SidebarMenuItem,\n  SidebarMenuSub,\n  SidebarMenuSubButton,\n  SidebarMenuSubItem,\n  SidebarProvider,\n} from \"@/components/ui/sidebar\"\n\nconst items = [\n  {\n    title: \"Getting Started\",\n    url: \"#\",\n    items: [\n      {\n        title: \"Installation\",\n        url: \"#\",\n      },\n      {\n        title: \"Project Structure\",\n        url: \"#\",\n      },\n    ],\n  },\n  {\n    title: \"Building Your Application\",\n    url: \"#\",\n    items: [\n      {\n        title: \"Routing\",\n        url: \"#\",\n      },\n      {\n        title: \"Data Fetching\",\n        url: \"#\",\n        isActive: true,\n      },\n      {\n        title: \"Rendering\",\n        url: \"#\",\n      },\n      {\n        title: \"Caching\",\n        url: \"#\",\n      },\n      {\n        title: \"Styling\",\n        url: \"#\",\n      },\n      {\n        title: \"Optimizing\",\n        url: \"#\",\n      },\n      {\n        title: \"Configuring\",\n        url: \"#\",\n      },\n      {\n        title: \"Testing\",\n        url: \"#\",\n      },\n      {\n        title: \"Authentication\",\n        url: \"#\",\n      },\n      {\n        title: \"Deploying\",\n        url: \"#\",\n      },\n      {\n        title: \"Upgrading\",\n        url: \"#\",\n      },\n      {\n        title: \"Examples\",\n        url: \"#\",\n      },\n    ],\n  },\n  {\n    title: \"API Reference\",\n    url: \"#\",\n    items: [\n      {\n        title: \"Components\",\n        url: \"#\",\n      },\n      {\n        title: \"File Conventions\",\n        url: \"#\",\n      },\n      {\n        title: \"Functions\",\n        url: \"#\",\n      },\n      {\n        title: \"next.config.js Options\",\n        url: \"#\",\n      },\n      {\n        title: \"CLI\",\n        url: \"#\",\n      },\n      {\n        title: \"Edge Runtime\",\n        url: \"#\",\n      },\n    ],\n  },\n  {\n    title: \"Architecture\",\n    url: \"#\",\n    items: [\n      {\n        title: \"Accessibility\",\n        url: \"#\",\n      },\n      {\n        title: \"Fast Refresh\",\n        url: \"#\",\n      },\n      {\n        title: \"Next.js Compiler\",\n        url: \"#\",\n      },\n      {\n        title: \"Supported Browsers\",\n        url: \"#\",\n      },\n      {\n        title: \"Turbopack\",\n        url: \"#\",\n      },\n    ],\n  },\n]\n\nexport function AppSidebar() {\n  return (\n    <SidebarProvider>\n      <Sidebar>\n        <SidebarContent>\n          <SidebarGroup>\n            <SidebarGroupContent>\n              <SidebarMenu>\n                {items.map((item, index) => (\n                  <SidebarMenuItem key={index}>\n                    <SidebarMenuButton asChild>\n                      <a href={item.url}>\n                        <span>{item.title}</span>\n                      </a>\n                    </SidebarMenuButton>\n                    <SidebarMenuSub>\n                      {item.items.map((subItem, subIndex) => (\n                        <SidebarMenuSubItem key={subIndex}>\n                          <SidebarMenuSubButton asChild>\n                            <a href={subItem.url}>\n                              <span>{subItem.title}</span>\n                            </a>\n                          </SidebarMenuSubButton>\n                        </SidebarMenuSubItem>\n                      ))}\n                    </SidebarMenuSub>\n                  </SidebarMenuItem>\n                ))}\n              </SidebarMenu>\n            </SidebarGroupContent>\n          </SidebarGroup>\n        </SidebarContent>\n      </Sidebar>\n    </SidebarProvider>\n  )\n}
```

--------------------------------

### Authenticate registry requests - Next.js (TypeScript)

Source: https://ui.shadcn.com/docs/registry/open-in-v0

Example Next.js API route that validates a `token` query parameter and returns a 401 JSON error for invalid or missing tokens. Dependencies: NextRequest, NextResponse, and an `isValidToken` function plus a `registryItem` to return on success. Limitation: `isValidToken` and `registryItem` are placeholders and must be implemented according to your auth and data models.

```typescript
// Next.js API route example
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token")

  if (!isValidToken(token)) {
    return NextResponse.json(
      {
        error: "Unauthorized",
        message: "Invalid or missing token",
      },
      { status: 401 }
    )
  }

  // Return the registry item
  return NextResponse.json(registryItem)
}

```

--------------------------------

### Popover Demo with Dimension Controls in TSX

Source: https://ui.shadcn.com/docs/components/popover

A complete popover example that displays a form with dimension input fields for width, max-width, height, and max-height. The popover is triggered by a button and displays rich content in a portal using Radix UI primitives with shadcn/ui styling.

```typescript
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
```

--------------------------------

### Declare npm package dependencies for registry item

Source: https://ui.shadcn.com/docs/registry/registry-item-json

The `dependencies` property lists external npm packages that the registry item relies on for its functionality. It supports specifying exact versions using the `@version` syntax, ensuring compatibility and proper installation.

```json
{
  "dependencies": [
    "@radix-ui/react-accordion",
    "zod",
    "lucide-react",
    "name@1.0.2"
  ]
}
```

--------------------------------

### Switch Component Demo with Label - TSX

Source: https://ui.shadcn.com/docs/components/switch

A complete example of a Switch component integrated with a Label component. This creates an accessible toggle control with an associated label for airplane mode. The component uses Flexbox for layout and spacing utilities from Tailwind CSS.

```tsx
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}
```

--------------------------------

### SidebarMenuBadge Basic Usage - React TSX

Source: https://ui.shadcn.com/docs/components/sidebar

Minimal example showing how to add a badge to a sidebar menu item. The badge component is placed as a sibling to SidebarMenuButton within a SidebarMenuItem, displaying a numeric value.

```typescript
<SidebarMenuItem>
  <SidebarMenuButton />
  <SidebarMenuBadge>24</SidebarMenuBadge>
</SidebarMenuItem>
```

--------------------------------

### Render a basic Shadcn UI Tabs component in React

Source: https://ui.shadcn.com/docs/components/tabs

This `tsx` snippet provides a minimal example of how to render the `Tabs` component. It includes a `TabsList` with two `TabsTrigger` elements ("Account" and "Password") and corresponding `TabsContent` areas, demonstrating the fundamental structure and usage of the component.

```tsx
<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
```

--------------------------------

### Display a customizable Shadcn UI Alert in React

Source: https://ui.shadcn.com/docs/components/alert

This example illustrates how to render a Shadcn UI Alert component with a specified `variant` (e.g., 'default' or 'destructive'). It includes an `AlertTitle` and `AlertDescription` to convey information to the user, and can optionally include an icon.

```tsx
<Alert variant="default | destructive">
  <Terminal />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>
```

--------------------------------

### Shadcn UI Field with Textarea Component

Source: https://ui.shadcn.com/docs/components/field

Presents an example of using the Shadcn UI Field component with a Textarea for collecting user feedback. Includes FieldSet, FieldGroup, FieldLabel, Textarea, and FieldDescription for a well-structured input area.

```tsx
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

export function FieldTextarea() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="feedback">Feedback</FieldLabel>
            <Textarea
              id="feedback"
              placeholder="Your feedback helps us improve..."
              rows={4}
            />
            <FieldDescription>
              Share your thoughts about our service.
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
```

--------------------------------

### Basic Empty State Usage Pattern

Source: https://ui.shadcn.com/docs/components/empty

Minimal implementation pattern showing the structure of an Empty component with header, media icon, title, description, and content with an action button.

```tsx
<Empty>
  <EmptyHeader>
    <EmptyMedia variant="icon">
      <Icon />
    </EmptyMedia>
    <EmptyTitle>No data</EmptyTitle>
    <EmptyDescription>No data found</EmptyDescription>
  </EmptyHeader>
  <EmptyContent>
    <Button>Add data</Button>
  </EmptyContent>
</Empty>
```

--------------------------------

### Example Shadcn UI FieldSet with Multiple Fields

Source: https://ui.shadcn.com/docs/components/field

Demonstrates the usage of a FieldSet to group related input fields like full name, username, and a newsletter switch. Includes FieldLegend, FieldDescription, FieldLabel, Input, and Switch components for a structured form section.

```tsx
<FieldSet>
  <FieldLegend>Profile</FieldLegend>
  <FieldDescription>This appears on invoices and emails.</FieldDescription>
  <FieldGroup>
    <Field>
      <FieldLabel htmlFor="name">Full name</FieldLabel>
      <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
      <FieldDescription>This appears on invoices and emails.</FieldDescription>
    </Field>
    <Field>
      <FieldLabel htmlFor="username">Username</FieldLabel>
      <Input id="username" autoComplete="off" aria-invalid />
      <FieldError>Choose another username.</FieldError>
    </Field>
    <Field orientation="horizontal">
      <Switch id="newsletter" />
      <FieldLabel htmlFor="newsletter">Subscribe to the newsletter</FieldLabel>
    </Field>
  </FieldGroup>
</FieldSet>
```

--------------------------------

### Display DropdownMenu for SidebarMenuItem Action in TypeScript/React

Source: https://ui.shadcn.com/docs/components/sidebar

This concise TypeScript/React example focuses on embedding a Shadcn `DropdownMenu` directly within a `SidebarMenuItem`'s `SidebarMenuAction`. It shows the minimal structure required to display contextual options, such as 'Edit Project' and 'Delete Project', when an action icon is clicked. This snippet assumes the necessary Shadcn `DropdownMenu` and `Sidebar` components are imported and available.

```tsx
<SidebarMenuItem>
  <SidebarMenuButton asChild>
    <a href="#">
      <Home />
      <span>Home</span>
    </a>
  </SidebarMenuButton>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <SidebarMenuAction>
        <MoreHorizontal />
      </SidebarMenuAction>
    </DropdownMenuTrigger>
    <DropdownMenuContent side="right" align="start">
      <DropdownMenuItem>
        <span>Edit Project</span>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <span>Delete Project</span>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</SidebarMenuItem>
```

--------------------------------

### Implement basic RadioGroup component usage in React

Source: https://ui.shadcn.com/docs/components/radio-group

This React TSX example demonstrates how to import necessary components (`Label`, `RadioGroup`, `RadioGroupItem`) and then render a basic radio group with two options. It includes a `defaultValue` and associates labels with each radio item.

```tsx
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
```

```tsx
<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>
```

--------------------------------

### Render multiple Shadcn UI Avatar components in React

Source: https://ui.shadcn.com/docs/components/avatar

Demonstrates how to use `Avatar`, `AvatarImage`, and `AvatarFallback` components to display user avatars, including examples of grouped avatars and custom styling. It requires importing components from `@/components/ui/avatar`.

```tsx
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg">
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
```

--------------------------------

### Add Labels and Tooltips to Input Groups (Shadcn UI, TSX)

Source: https://ui.shadcn.com/docs/components/input-group

This example demonstrates how to incorporate `Label` components within `InputGroupAddon` for improved accessibility and clarity of input fields. It also shows the integration of a `Tooltip` with an `InfoIcon` to provide additional context or help information, enhancing the user's understanding of the input's purpose.

```tsx
import { InfoIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function InputGroupLabel() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup>
        <InputGroupInput id="email" placeholder="shadcn" />
        <InputGroupAddon>
          <Label htmlFor="email">@</Label>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput id="email-2" placeholder="shadcn@vercel.com" />
        <InputGroupAddon align="block-start">
          <Label htmlFor="email-2" className="text-foreground">
            Email
          </Label>
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton
                variant="ghost"
                aria-label="Help"
                className="ml-auto rounded-full"
                size="icon-xs"
              >
                <InfoIcon />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>We&apos;ll use this to send you notifications</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

--------------------------------

### Migrate React Component from `forwardRef` to Props

Source: https://ui.shadcn.com/docs/tailwind-v4

This example demonstrates how to refactor a React component to remove `React.forwardRef`. It shows the transformation from using `forwardRef` and `displayName` to a simpler named functional component that accepts props directly and includes a `data-slot` attribute.

```tsx
const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b last:border-b-0", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"
```

```tsx
function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  )
}
```

--------------------------------

### Refactor CSS Variables for @theme inline and HSL Wrappers

Source: https://ui.shadcn.com/docs/tailwind-v4

This CSS example refactors variable definitions for improved usability. It moves `hsl` wrappers to `:root` and `.dark` selectors and utilizes `@theme inline` to simplify variable access by directly referencing `--background` and `--foreground`.

```css
:root {
  --background: hsl(0 0% 100%); // <-- Wrap in hsl
  --foreground: hsl(0 0% 3.9%);
}

.dark {
  --background: hsl(0 0% 3.9%); // <-- Wrap in hsl
  --foreground: hsl(0 0% 98%);
}

@theme inline {
  --color-background: var(--background); // <-- Remove hsl
  --color-foreground: var(--foreground);
}
```

--------------------------------

### Update Tooltip Color Styling

Source: https://ui.shadcn.com/docs/components/tooltip

Migration guide for updating tooltip color scheme. Replace the old color classes (bg-primary text-primary-foreground) with new foreground/background colors for both TooltipContent and TooltipArrow components to match the 2025-09-22 update.

```tsx
bg-foreground text-background
```

--------------------------------

### Define Payment Data Type and Sample Data

Source: https://ui.shadcn.com/docs/components/data-table

TypeScript type definition for a Payment object with id, amount, status, and email fields, along with sample payment data array. This establishes the data structure for the table example.

```typescript
type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
]
```

--------------------------------

### Implement Sidebar Footer with Dropdown Menu (Shadcn UI, TSX)

Source: https://ui.shadcn.com/docs/components/sidebar

This TypeScript React example demonstrates how to integrate a `DropdownMenu` component into the `SidebarFooter`. It uses several Shadcn UI components including `SidebarProvider`, `Sidebar`, `SidebarHeader`, `SidebarContent`, `SidebarFooter`, `SidebarMenu`, `SidebarMenuItem`, and `SidebarMenuButton` to create a functional sidebar with an interactive footer for user actions.

```tsx
"use client"

import { ChevronUpIcon } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent />
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                    Username
                    <ChevronUpIcon className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-(--radix-popper-anchor-width)"
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center justify-between px-4">
          <SidebarTrigger />
        </header>
      </SidebarInset>
    </SidebarProvider>
  )
}
```

```tsx
export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent />
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Username
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Account</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
```

--------------------------------

### Fetch Projects with React Query - React TypeScript

Source: https://ui.shadcn.com/docs/components/sidebar

Fetches project data using React Query useQuery hook with identical loading state and skeleton UI patterns. Provides the same sidebar menu rendering with project links and icons as the SWR implementation.

```typescript
function NavProjects() {
  const { data, isLoading } = useQuery()

  if (isLoading) {
    return (
      <SidebarMenu>
        {Array.from({ length: 5 }).map((_, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuSkeleton showIcon />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    )
  }

  if (!data) {
    return ...
  }

  return (
    <SidebarMenu>
      {data.map((project) => (
        <SidebarMenuItem key={project.name}>
          <SidebarMenuButton asChild>
            <a href={project.url}>
              <project.icon />
              <span>{project.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
```

--------------------------------

### Implement a Complete Shadcn Dropdown Menu in TSX

Source: https://ui.shadcn.com/docs/components/dropdown-menu

This comprehensive example demonstrates how to build a feature-rich dropdown menu using Shadcn UI's DropdownMenu component. It showcases the integration of various elements like groups, separators, shortcuts, and sub-menus within a React component, providing a full working demo.

```tsx
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

--------------------------------

### Specify type of registry item

Source: https://ui.shadcn.com/docs/registry/registry-item-json

The `type` property categorizes the registry item, influencing how it's handled and resolved within a project. Examples include `registry:block` for complex components, `registry:component` for simple ones, or `registry:hook` for custom hooks.

```json
{
  "type": "registry:block"
}
```

--------------------------------

### Integrate Next.js Link Component - TSX

Source: https://ui.shadcn.com/docs/components/pagination

Migration guide for replacing default anchor tag with Next.js Link component in pagination. Updates the PaginationLink type definition and replaces the rendered element from <a> to <Link> for optimized client-side navigation.

```tsx
import Link from "next/link"

type PaginationLinkProps = ... & React.ComponentProps<typeof Link>

const PaginationLink = ({...props }: ) => (
  <PaginationItem>
    <Link>
      // ...
    </Link>
  </PaginationItem>
)
```

--------------------------------

### Render a Basic Collapsible Accordion in React/TypeScript

Source: https://ui.shadcn.com/docs/components/accordion

This React/TypeScript snippet provides a minimal example of rendering a single-type, collapsible Accordion with one item. It demonstrates the basic structure using `Accordion`, `AccordionItem`, `AccordionTrigger`, and `AccordionContent` to display a question and its corresponding answer.

```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

--------------------------------

### ButtonGroup Orientation Control - TypeScript React

Source: https://ui.shadcn.com/docs/components/button-group

Creates a vertically oriented button group with media control icons using the orientation prop. Demonstrates basic ButtonGroup setup with icon buttons from lucide-react and aria-label for accessibility.

```typescript
import { MinusIcon, PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"

export function ButtonGroupOrientation() {
  return (
    <ButtonGroup
      orientation="vertical"
      aria-label="Media controls"
      className="h-fit"
    >
      <Button variant="outline" size="icon">
        <PlusIcon />
      </Button>
      <Button variant="outline" size="icon">
        <MinusIcon />
      </Button>
    </ButtonGroup>
  )
}
```

--------------------------------

### Set Sidebar Position with `side` Prop in TSX

Source: https://ui.shadcn.com/docs/components/sidebar

This example shows how to use the `side` prop to control whether the sidebar appears on the `left` or `right` side of the screen. This prop modifies the visual placement of the sidebar.

```tsx
import { Sidebar } from "@/components/ui/sidebar"

export function AppSidebar() {
  return <Sidebar side="left | right" />
}
```

--------------------------------

### Basic Collapsible Component Structure in React (TSX)

Source: https://ui.shadcn.com/docs/components/collapsible

This example demonstrates the fundamental JSX structure for a collapsible component using Shadcn UI. It wraps the collapsible content within `CollapsibleContent` and uses `CollapsibleTrigger` to toggle its visibility, providing an interactive UI element.

```tsx
<Collapsible>
  <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
  <CollapsibleContent>
    Yes. Free to use for personal and commercial projects. No attribution
    required.
  </CollapsibleContent>
</Collapsible>
```

--------------------------------

### Build Registry with pnpm

Source: https://ui.shadcn.com/docs/blocks

Runs the build script to process block definitions and generate registry data. Execute this after updating block definitions before viewing or publishing.

```bash
pnpm registry:build
```

--------------------------------

### Set Up React Hook Form Instance with Zod Resolver

Source: https://ui.shadcn.com/docs/forms/react-hook-form

Demonstrates the setup of a React Hook Form instance within a functional component (`BugReportForm`). It initializes the form using `useForm`, connects it to a Zod schema via `zodResolver` for validation, sets default values, and defines an `onSubmit` function to handle validated form data.

```tsx
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

const formSchema = z.object({
  title: z
    .string()
    .min(5, "Bug title must be at least 5 characters.")
    .max(32, "Bug title must be at most 32 characters."),
  description: z
    .string()
    .min(20, "Description must be at least 20 characters.")
    .max(100, "Description must be at most 100 characters."),
})

export function BugReportForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(data)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* ... */}
      {/* Build the form here */}
      {/* ... */}
    </form>
  )
}
```

--------------------------------

### Complete DropdownMenu Dialog Implementation in React

Source: https://ui.shadcn.com/docs/components/dropdown-menu

Full component implementation showing a dropdown menu with multiple action items that trigger separate dialogs. Includes state management for dialog visibility and example dialogs for creating a new file and sharing a file, demonstrating form inputs and dialog structure with headers, content, and footer actions.

```tsx
"use client"

import { useState } from "react"
import { MoreHorizontalIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function DropdownMenuDialog() {
  const [showNewDialog, setShowNewDialog] = useState(false)
  const [showShareDialog, setShowShareDialog] = useState(false)

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" aria-label="Open menu" size="icon-sm">
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuLabel>File Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={() => setShowNewDialog(true)}>
              New File...
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setShowShareDialog(true)}>
              Share...
            </DropdownMenuItem>
            <DropdownMenuItem disabled>Download</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New File</DialogTitle>
            <DialogDescription>
              Provide a name for your new file. Click create when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="pb-3">
            <Field>
              <FieldLabel htmlFor="filename">File Name</FieldLabel>
              <Input id="filename" name="filename" placeholder="document.txt" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Create</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Share File</DialogTitle>
            <DialogDescription>
              Anyone with the link will be able to view this file.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="py-3">
            <Field>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="shadcn@vercel.com"
                autoComplete="off"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Message (Optional)</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="Check out this file"
              />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Send Invite</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
```

--------------------------------

### Utilize Shadcn UI useSidebar Hook for Control (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/sidebar

This example illustrates how to use the `useSidebar` hook to programmatically control the state and behavior of the Shadcn UI sidebar. It destructures various properties and functions for managing sidebar visibility and responsiveness, such as `state`, `open`, `setOpen`, and `toggleSidebar`.

```tsx
import { useSidebar } from "@/components/ui/sidebar"

export function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar()
}
```

--------------------------------

### Create Resizable Panel Group Layout with TypeScript and React

Source: https://ui.shadcn.com/docs/changelog

Build a resizable panel layout using ResizablePanelGroup, ResizablePanel, and ResizableHandle components from shadcn/ui. The example demonstrates a horizontal layout with a nested vertical panel group, with default sizes set to 50% and 25%/75% respectively. Components support mouse, touch, and keyboard interactions.

```typescript
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={50}>
        <div className="flex h-[200px] items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

--------------------------------

### Display a Spinner component within a React function in TSX

Source: https://ui.shadcn.com/docs/changelog

Illustrates rendering a `Spinner` component inside a functional React component, `SpinnerBasic`, centered within a flex container. This provides a complete example of how to integrate the spinner into a basic UI structure.

```tsx
import { Spinner } from "@/components/ui/spinner"

export function SpinnerBasic() {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <Spinner />
    </div>
  )
}
```

--------------------------------

### Create Input Group with Textarea and Addons (Shadcn UI, TSX)

Source: https://ui.shadcn.com/docs/components/input-group

This example demonstrates how to integrate a `Textarea` component within an `InputGroup`. It utilizes `InputGroupAddon` with `block-start` and `block-end` alignment to display icons, text, and buttons, providing a rich, interactive textarea experience for code or multi-line input.

```tsx
import {
  IconBrandJavascript,
  IconCopy,
  IconCornerDownLeft,
  IconRefresh,
} from "@tabler/icons-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

export function InputGroupTextareaExample() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup>
        <InputGroupTextarea
          id="textarea-code-32"
          placeholder="console.log('Hello, world!');"
          className="min-h-[200px]"
        />
        <InputGroupAddon align="block-end" className="border-t">
          <InputGroupText>Line 1, Column 1</InputGroupText>
          <InputGroupButton size="sm" className="ml-auto" variant="default">
            Run <IconCornerDownLeft />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="block-start" className="border-b">
          <InputGroupText className="font-mono font-medium">
            <IconBrandJavascript />
            script.js
          </InputGroupText>
          <InputGroupButton className="ml-auto" size="icon-xs">
            <IconRefresh />
          </InputGroupButton>
          <InputGroupButton variant="ghost" size="icon-xs">
            <IconCopy />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

--------------------------------

### Configure Carousel Autoplay Plugin

Source: https://ui.shadcn.com/docs/components/carousel

Add the Autoplay plugin to the Carousel component using the plugins prop. The Autoplay plugin automatically cycles through carousel items at a specified delay interval. This example shows basic configuration with a 2-second delay between slides.

```ts
import Autoplay from "embla-carousel-autoplay"

export function Example() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      // ...
    </Carousel>
  )
}
```

--------------------------------

### Implement Collapsible SidebarGroup with Shadcn UI (TypeScript)

Source: https://ui.shadcn.com/docs/components/sidebar

This example illustrates how to make a `SidebarGroup` collapsible using Shadcn UI's `Collapsible` component. It shows wrapping the group with `Collapsible` and placing the `CollapsibleTrigger` inside `SidebarGroupLabel` to control the visibility of `SidebarGroupContent`.

```tsx
"use client"

import { ChevronDownIcon, LifeBuoyIcon, SendIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
              >
                <CollapsibleTrigger>
                  Help
                  <ChevronDownIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>
              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <LifeBuoyIcon />
                        Support
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <SendIcon />
                        Feedback
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}
```

```tsx
export function AppSidebar() {
  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger>
            Help
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent />
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  )
}
```

--------------------------------

### Enable MCP Support for Registry

Source: https://ui.shadcn.com/docs/changelog

Command to enable zero-config Model Context Protocol (MCP) support for any shadcn/ui registry, making it compatible with MCP-enabled tools and agents.

```bash
npx shadcn registry:mcp
```

--------------------------------

### Basic Collapsible SidebarMenu Item Structure in TSX

Source: https://ui.shadcn.com/docs/components/sidebar

This code provides a simplified structural example of how to implement a single collapsible item within a `SidebarMenu` using Shadcn UI's `Collapsible` component. It illustrates the nesting of `CollapsibleTrigger` and `CollapsibleContent` within `SidebarMenuItem` and `SidebarMenuSub` to enable basic expand/collapse functionality for menu sub-items.

```tsx
<SidebarMenu>\n  <Collapsible defaultOpen className="group/collapsible">\n    <SidebarMenuItem>\n      <CollapsibleTrigger asChild>\n        <SidebarMenuButton />\n      </CollapsibleTrigger>\n      <CollapsibleContent>\n        <SidebarMenuSub>\n          <SidebarMenuSubItem />\n        </SidebarMenuSub>\n      </CollapsibleContent>\n    </SidebarMenuItem>\n  </Collapsible>\n</SidebarMenu>
```

--------------------------------

### Configure CSS Variables for Shadcn UI Sidebar

Source: https://ui.shadcn.com/docs/components/sidebar

This CSS block defines custom properties (variables) for the Shadcn UI Sidebar component, including its background, foreground, primary, accent, border, and ring colors for both light and dark themes. These variables are typically placed in `app/globals.css` and can be overridden for custom theming, applying to both CLI and manual installations.

```css
@layer base {
  :root {
    --sidebar: oklch(0.985 0 0);
    --sidebar-foreground: oklch(0.145 0 0);
    --sidebar-primary: oklch(0.205 0 0);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.97 0 0);
    --sidebar-accent-foreground: oklch(0.205 0 0);
    --sidebar-border: oklch(0.922 0 0);
    --sidebar-ring: oklch(0.708 0 0);
  }

  .dark {
    --sidebar: oklch(0.205 0 0);
    --sidebar-foreground: oklch(0.985 0 0);
    --sidebar-primary: oklch(0.488 0.243 264.376);
    --sidebar-primary-foreground: oklch(0.985 0 0);
    --sidebar-accent: oklch(0.269 0 0);
    --sidebar-accent-foreground: oklch(0.985 0 0);
    --sidebar-border: oklch(1 0 0 / 10%);
    --sidebar-ring: oklch(0.439 0 0);
  }
}
```

--------------------------------

### Downgrade React to Version 18 with `npm`

Source: https://ui.shadcn.com/docs/react-19

This `npm` command allows users to explicitly install `react` and `react-dom` at version 18. This can serve as a temporary solution to resolve peer dependency issues with third-party packages not yet compatible with React 19, ensuring project stability until updates are available.

```bash
npm i react@18 react-dom@18
```

--------------------------------

### Display Field-Specific Validation Errors in React/Next.js Forms

Source: https://ui.shadcn.com/docs/forms/next

This example shows how to display server-side validation errors next to their respective form fields. It utilizes `data-invalid` and `aria-invalid` props for accessibility and conditional rendering of `FieldError` components based on `formState.errors`.

```tsx
<Field data-invalid={!!formState.errors?.email?.length}>
  <FieldLabel htmlFor="email">Email</FieldLabel>
  <Input
    id="email"
    name="email"
    type="email"
    aria-invalid={!!formState.errors?.email?.length}
  />
  {formState.errors?.email && (
    <FieldError>{formState.errors.email[0]}</FieldError>
  )}
</Field>
```

--------------------------------

### Implement a basic vertical resizable panel group in React (Usage)

Source: https://ui.shadcn.com/docs/components/resizable

This snippet provides a minimal example of a vertical resizable panel group for direct use within a React component. It demonstrates the fundamental structure for creating vertically adjustable sections with two panels and a resize handle.

```tsx
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Example() {
  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

--------------------------------

### Accessible Button Group with ARIA Labels - TSX

Source: https://ui.shadcn.com/docs/components/button-group

Example demonstrating accessibility best practices for the Button Group component using ARIA labels. The aria-label attribute provides semantic meaning for screen readers and assistive technologies.

```tsx
<ButtonGroup aria-label="Button group">
  <Button>Button 1</Button>
  <Button>Button 2</Button>
</ButtonGroup>
```

--------------------------------

### Persist Sidebar State in Next.js App Router

Source: https://ui.shadcn.com/docs/components/sidebar

This Next.js `app/layout.tsx` example shows how to persist the sidebar's open/closed state across page reloads using cookies. It reads the `sidebar_state` cookie to set the initial `defaultOpen` prop for the `SidebarProvider`.

```tsx
import { cookies } from "next/headers"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export async function Layout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}
```

--------------------------------

### Define NativeSelectOption Components (tsx)

Source: https://ui.shadcn.com/docs/components/native-select

This example demonstrates how to use the `NativeSelectOption` component to define individual selectable items within a `NativeSelect`. It also includes an instance of a disabled option, showing how to prevent user selection for specific choices. These options map directly to HTML `<option>` elements.

```tsx
<NativeSelectOption value="apple">Apple</NativeSelectOption>
<NativeSelectOption value="banana" disabled>
  Banana
</NativeSelectOption>
```

--------------------------------

### Display Spinner in an Item Component (TypeScript)

Source: https://ui.shadcn.com/docs/components/spinner

Demonstrates how to integrate the Spinner component within an Item component to show a loading state, such as during payment processing. It utilizes Shadcn UI components like Item, ItemContent, ItemMedia, and ItemTitle to build a structured display. This example sets up a flex container with specific styling for visual presentation.

```tsx
import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">Processing payment...</ItemTitle>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm tabular-nums">$100.00</span>
        </ItemContent>
      </Item>
    </div>
  )
}
```

--------------------------------

### Input Group with Text Addons (TSX)

Source: https://ui.shadcn.com/docs/components/input-group

Displays input fields with text addons for currency symbols, URL prefixes, suffixes, and metadata. Supports InputGroupInput and InputGroupTextarea with inline-start, inline-end, and block-end addon positioning. Includes character counter example.

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

export function InputGroupTextExample() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="example.com" className="!pl-0.5" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Enter your username" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@company.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Enter your message" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-muted-foreground text-xs">
            120 characters left
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

--------------------------------

### Configure Chart Legend Data and Chart Config with Custom Names

Source: https://ui.shadcn.com/docs/components/chart

Define chart data with browser properties and create a corresponding chart configuration object with custom color values. This setup enables the legend to display custom names when used with the nameKey prop.

```tsx
const chartData = [
  { browser: "chrome", visitors: 187, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
]

const chartConfig = {
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig
```

--------------------------------

### Implement Input OTP with Custom Pattern in React (TSX)

Source: https://ui.shadcn.com/docs/components/input-otp

Shows how to apply a custom input pattern to the OTP component using the `pattern` prop and `REGEXP_ONLY_DIGITS_AND_CHARS` from `input-otp`. This example restricts input to only digits and characters, ensuring data integrity for specific OTP requirements.

```tsx
"use client"

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

export function InputOTPPattern() {
  return (
    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  )
}
```

--------------------------------

### Build Checkbox Field Groups with FieldSet - React TSX

Source: https://ui.shadcn.com/docs/changelog

Demonstrates how to create organized checkbox field groups using FieldSet, FieldLegend, FieldDescription, and multiple Field components with horizontal orientation. Includes examples for desktop item visibility preferences and iCloud sync options.

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Field, FieldContent, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet } from "@/components/ui/field"

export function FieldCheckbox() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLegend variant="label">Show these items on the desktop</FieldLegend>
          <FieldDescription>Select the items you want to show on the desktop.</FieldDescription>
          <FieldGroup className="gap-3">
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-hard-disks-ljj" />
              <FieldLabel htmlFor="finder-pref-9k2-hard-disks-ljj" className="font-normal" defaultChecked>Hard disks</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-external-disks-1yg" />
              <FieldLabel htmlFor="finder-pref-9k2-external-disks-1yg" className="font-normal">External disks</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-cds-dvds-fzt" />
              <FieldLabel htmlFor="finder-pref-9k2-cds-dvds-fzt" className="font-normal">CDs, DVDs, and iPods</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="finder-pref-9k2-connected-servers-6l2" />
              <FieldLabel htmlFor="finder-pref-9k2-connected-servers-6l2" className="font-normal">Connected servers</FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <Field orientation="horizontal">
          <Checkbox id="finder-pref-9k2-sync-folders-nep" defaultChecked />
          <FieldContent>
            <FieldLabel htmlFor="finder-pref-9k2-sync-folders-nep">Sync Desktop & Documents folders</FieldLabel>
            <FieldDescription>Your Desktop & Documents folders are being synced with iCloud Drive. You can access them from other devices.</FieldDescription>
          </FieldContent>
        </Field>
      </FieldGroup>
    </div>
  )
}
```

--------------------------------

### Set Custom Sidebar Width with Style Prop in TSX

Source: https://ui.shadcn.com/docs/components/sidebar

This example demonstrates how to dynamically set custom sidebar widths using CSS variables via the `style` prop on the `SidebarProvider` component. This approach allows for individual sidebar width configuration when multiple sidebars are present.

```tsx
<SidebarProvider
  style={{
    "--sidebar-width": "20rem",
    "--sidebar-width-mobile": "20rem"
  }}
>
  <Sidebar />
</SidebarProvider>
```

--------------------------------

### Display Spinner in Empty State Component (React/TypeScript)

Source: https://ui.shadcn.com/docs/components/spinner

This example shows how to use the `Spinner` component within an `Empty` state component to signify an ongoing process. The spinner is placed inside `EmptyMedia` to visually represent a task like 'Processing your request' alongside a descriptive message.

```tsx
import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerEmpty() {
  return (
    <Empty className="w-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner />
        </EmptyMedia>
        <EmptyTitle>Processing your request</EmptyTitle>
        <EmptyDescription>
          Please wait while we process your request. Do not refresh the page.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
      </EmptyContent>
    </Empty>
  )
}
```

--------------------------------

### Organize Fields for Responsive Layouts with Shadcn UI FieldGroup (TSX)

Source: https://ui.shadcn.com/docs/components/field

This TSX example showcases the `FieldGroup` component, a layout wrapper designed to stack `Field` components and enable responsive orientations. It supports container queries, allowing for dynamic layout adjustments using utility classes like `@container/field-group`.

```tsx
<FieldGroup className="@container/field-group flex flex-col gap-6">
  <Field>{/* ... */}</Field>
  <Field>{/* ... */}</Field>
</FieldGroup>
```

--------------------------------

### Add Shadcn Resources Using CLI Command

Source: https://ui.shadcn.com/docs/registry/namespace

This bash snippet represents the beginning of a `shadcn` CLI command for adding resources from a configured registry. The full command would typically specify the resource to be added.

```bash

```

--------------------------------

### Integrate Shadcn UI InputOTP into a Form with React Hook Form and Zod Validation

Source: https://ui.shadcn.com/docs/components/input-otp

This example demonstrates how to integrate the `InputOTP` component within a form managed by `react-hook-form` and validated using `zod`. It defines a schema for validation, handles form submission with `toast` notifications, and displays form-related messages.

```tsx
"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp"

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
})

export function InputOTPForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
```

--------------------------------

### Structure Sidebar Content with Groups (Shadcn UI, TSX)

Source: https://ui.shadcn.com/docs/components/sidebar

This TypeScript React example illustrates the basic usage of the `SidebarContent` component to wrap and organize content within a sidebar. It demonstrates how to place multiple `SidebarGroup` components inside the scrollable content area of a Shadcn UI sidebar, providing a structured layout for navigation or information.

```tsx
import { Sidebar, SidebarContent } from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
    </Sidebar>
  )
}
```

--------------------------------

### Apply Tailwind CSS Prefix to Components in JSX/TSX

Source: https://ui.shadcn.com/docs/changelog

Example of using a custom Tailwind prefix (tw-) on AlertDialog component classes. The CLI automatically prefixes utility classes when adding components, enabling shadcn/ui integration into existing projects with custom design systems without style conflicts.

```typescript
<AlertDialog className="tw-grid tw-gap-4 tw-border tw-bg-background tw-shadow-lg" />
```

--------------------------------

### Autoplay Plugin with Stop on Interaction

Source: https://ui.shadcn.com/docs/components/carousel

Implement Autoplay plugin with stopOnInteraction option and mouse event handlers to pause/resume autoplay. This example stores the plugin in a useRef to persist across renders and adds mouse enter/leave handlers to control the autoplay behavior for better user experience.

```tsx
"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

--------------------------------

### Implement a Radio Group Field with Shadcn UI and React

Source: https://ui.shadcn.com/docs/components/field

This example shows how to create a radio button group for selecting a subscription plan using Shadcn UI components in a React application. It organizes radio items horizontally within a fieldset, complete with a label and description.

```tsx
import {
  Field,
  FieldDescription,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

export function FieldRadio() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldLabel>Subscription Plan</FieldLabel>
        <FieldDescription>
          Yearly and lifetime plans offer significant savings.
        </FieldDescription>
        <RadioGroup defaultValue="monthly">
          <Field orientation="horizontal">
            <RadioGroupItem value="monthly" id="plan-monthly" />
            <FieldLabel htmlFor="plan-monthly" className="font-normal">
              Monthly ($9.99/month)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="yearly" id="plan-yearly" />
            <FieldLabel htmlFor="plan-yearly" className="font-normal">
              Yearly ($99.99/year)
            </FieldLabel>
          </Field>
          <Field orientation="horizontal">
            <RadioGroupItem value="lifetime" id="plan-lifetime" />
            <FieldLabel htmlFor="plan-lifetime" className="font-normal">
              Lifetime ($299.99)
            </FieldLabel>
          </Field>
        </RadioGroup>
      </FieldSet>
    </div>
  )
}
```

--------------------------------

### Render SidebarMenuButton as Link Element in TSX

Source: https://ui.shadcn.com/docs/components/sidebar

This example shows how to use the `asChild` prop with `SidebarMenuButton` to render an `<a>` tag, effectively turning the menu button into a navigable link. This allows for custom child elements to inherit the button's styling and functionality, making it flexible for various navigation needs.

```tsx
<SidebarMenuButton asChild>\n  <a href="#">Home</a>\n</SidebarMenuButton>
```

--------------------------------

### Listen to Carousel Select Events

Source: https://ui.shadcn.com/docs/components/carousel

Attach event listeners to the carousel API instance using the on() method. This example demonstrates listening to the 'select' event, which fires whenever the carousel slide changes. The event handler can be used to trigger custom logic or state updates.

```tsx
import { type CarouselApi } from "@/components/ui/carousel"

export function Example() {
  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      // Do something on select.
    })
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}
```

--------------------------------

### Render a basic Scroll Area with static text content (React/TypeScript)

Source: https://ui.shadcn.com/docs/components/scroll-area

This example demonstrates how to wrap static text content within a `ScrollArea` component. It applies basic styling for dimensions, border, and padding, allowing the content to scroll within the defined area.

```tsx
<ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
  Jokester began sneaking into the castle in the middle of the night and leaving
  jokes all over the place: under the king's pillow, in his soup, even in the
  royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
  then, one day, the people of the kingdom discovered that the jokes left by
  Jokester were so funny that they couldn't help but laugh. And once they
  started laughing, they couldn't stop.
</ScrollArea>
```

--------------------------------

### Create Native Select with grouped department options in React

Source: https://ui.shadcn.com/docs/components/native-select

This React component demonstrates how to organize `NativeSelectOption` elements into logical categories using `NativeSelectOptGroup`. It shows an example of selecting departments (Engineering, Sales, Operations), enhancing usability for longer lists by grouping related options.

```tsx
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"

export function NativeSelectGroups() {
  return (
    <NativeSelect>
      <NativeSelectOption value="">Select department</NativeSelectOption>
      <NativeSelectOptGroup label="Engineering">
        <NativeSelectOption value="frontend">Frontend</NativeSelectOption>
        <NativeSelectOption value="backend">Backend</NativeSelectOption>
        <NativeSelectOption value="devops">DevOps</NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Sales">
        <NativeSelectOption value="sales-rep">Sales Rep</NativeSelectOption>
        <NativeSelectOption value="account-manager">
          Account Manager
        </NativeSelectOption>
        <NativeSelectOption value="sales-director">
          Sales Director
        </NativeSelectOption>
      </NativeSelectOptGroup>
      <NativeSelectOptGroup label="Operations">
        <NativeSelectOption value="support">
          Customer Support
        </NativeSelectOption>
        <NativeSelectOption value="product-manager">
          Product Manager
        </NativeSelectOption>
        <NativeSelectOption value="ops-manager">
          Operations Manager
        </NativeSelectOption>
      </NativeSelectOptGroup>
    </NativeSelect>
  )
}
```

--------------------------------

### Clone shadcn/ui Repository with Git

Source: https://ui.shadcn.com/docs/blocks

Clones the shadcn/ui repository to local workspace. This is the first step in setting up the development environment for contributing blocks.

```bash
git clone https://github.com/shadcn-ui/ui.git
```

--------------------------------

### Disable Form Field and Apply Styling Based on Pending State in React/Next.js

Source: https://ui.shadcn.com/docs/forms/next

This example illustrates how to disable an individual form field and apply data attributes for styling when the form is in a pending state. It uses the `data-disabled` prop on the `<Field />` component and the `disabled` prop on the `<Input />`.

```tsx
<Field data-disabled={pending}>
  <FieldLabel htmlFor="name">Name</FieldLabel>
  <Input id="name" name="name" disabled={pending} />
</Field>
```

--------------------------------

### Create Basic Item with Icon in TSX

Source: https://ui.shadcn.com/docs/changelog

Demonstrates a basic Item component structure with an icon media element, title, and description. The ItemMedia variant="icon" provides appropriate styling for icon displays.

```tsx
<Item>
  <ItemMedia variant="icon">
    <HomeIcon />
  </ItemMedia>
  <ItemContent>
    <ItemTitle>Dashboard</ItemTitle>
    <ItemDescription>Overview of your account and activity.</ItemDescription>
  </ItemContent>
</Item>
```

--------------------------------

### Implement a Basic Form Field with React Hook Form

Source: https://ui.shadcn.com/docs/components/form

This example demonstrates how to create a single input field (e.g., 'username') within a form using the `FormField` component from React Hook Form. It shows how to link the field to the form's control, apply a label, an input component, a description, and a message for validation feedback, integrating seamlessly with Radix UI components.

```tsx
const form = useForm()

<FormField
  control={form.control}
  name="username"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Username</FormLabel>
      <FormControl>
        <Input placeholder="shadcn" {...field} />
      </FormControl>
      <FormDescription>This is your public display name.</FormDescription>
      <FormMessage />
    </FormItem>
  )}
/>
```

--------------------------------

### Registry Authentication for Open in v0

Source: https://ui.shadcn.com/docs/registry/open-in-v0

This section describes the recommended authentication mechanism for registry servers to integrate with Open in v0. Registry items can be accessed with a `token` query parameter for authentication.

```APIDOC
## GET /r/{item}.json (Registry Server Authentication)

### Description
This describes how a registry server should implement authentication for its items when accessed by `Open in v0`. It uses a `token` query parameter for authentication.

### Method
GET

### Endpoint
/r/{item}.json

### Parameters
#### Path Parameters
- **item** (string) - Required - The path to the specific registry item, typically ending with `.json`.

#### Query Parameters
- **token** (string) - Optional - A secure token used to authenticate access to the registry item. If provided, the server should validate it.

#### Request Body
(None)

### Request Example
(N/A for GET request with query parameters)

### Response
#### Success Response (200)
- Returns the content of the registry item (e.g., JSON).

#### Response Example
```json
{
  "name": "login-01",
  "description": "A login form with email and password fields.",
  "component": "<Login01 />"
}
```

#### Error Response (401 Unauthorized)
- **error** (string) - The error type, typically "Unauthorized".
- **message** (string) - A descriptive message about the authorization failure.

#### Response Example
```json
{
  "error": "Unauthorized",
  "message": "Invalid or missing token"
}
```
```

--------------------------------

### Configure Field Component Orientation in TSX

Source: https://ui.shadcn.com/docs/components/field

The Field component acts as a core wrapper for form fields, providing control over orientation (vertical, horizontal, responsive), invalid state styling, and spacing. This example demonstrates setting the orientation to horizontal for a label and a switch component.

```tsx
<Field orientation="horizontal">
  <FieldLabel htmlFor="remember">Remember me</FieldLabel>
  <Switch id="remember" />
</Field>
```

--------------------------------

### Components Configuration File JSON

Source: https://ui.shadcn.com/docs/changelog

Configuration file that defines the project structure for shadcn UI components including Tailwind CSS settings, path aliases, and styling preferences. This file establishes the foundation for component scaffolding and ensures consistent path resolution throughout the project.

```json
{
  "style": "default",
  "rsc": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

--------------------------------

### Group Form Controls with Shadcn UI FieldSet (TSX)

Source: https://ui.shadcn.com/docs/components/field

This TSX example illustrates the use of the `FieldSet` component to semantically group related form controls, enhancing both structure and accessibility. It typically includes a `FieldLegend` for the group's title and `FieldGroup` to organize the contained fields.

```tsx
<FieldSet>
  <FieldLegend>Delivery</FieldLegend>
  <FieldGroup>{/* Fields */}</FieldGroup>
</FieldSet>
```

--------------------------------

### Integrate SidebarMenuAction with Button and Link in TSX

Source: https://ui.shadcn.com/docs/components/sidebar

This example demonstrates how to combine `SidebarMenuButton` (acting as a clickable link) and `SidebarMenuAction` (an independent action button) within a single `SidebarMenuItem`. The action button can contain an icon and a screen-reader-only label, allowing for multiple interactive elements per menu item, enhancing functionality.

```tsx
<SidebarMenuItem>\n  <SidebarMenuButton asChild>\n    <a href="#">\n      <Home />\n      <span>Home</span>\n    </a>\n  </SidebarMenuButton>\n  <SidebarMenuAction>\n    <Plus /> <span className="sr-only">Add Project</span>\n  </SidebarMenuAction>\n</SidebarMenuItem>
```

--------------------------------

### Apply Custom Spinner Colors with Utility Classes (TypeScript)

Source: https://ui.shadcn.com/docs/components/spinner

Demonstrates how to customize the color of the Spinner component using Tailwind CSS `text-*` utility classes. This example displays several spinners, each with a different color applied, such as red, green, blue, yellow, and purple. It highlights the flexibility in styling the spinner to match specific brand guidelines or UI themes.

```tsx
import { Spinner } from "@/components/ui/spinner"

export function SpinnerColor() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-6 text-red-500" />
      <Spinner className="size-6 text-green-500" />
      <Spinner className="size-6 text-blue-500" />
      <Spinner className="size-6 text-yellow-500" />
      <Spinner className="size-6 text-purple-500" />
    </div>
  )
}
```

--------------------------------

### Use AspectRatio Component with Image in TypeScript React

Source: https://ui.shadcn.com/docs/components/aspect-ratio

Basic usage example of the AspectRatio component wrapping an image with a 16:9 aspect ratio. The component accepts a ratio prop (numeric value) and children elements, maintaining the specified aspect ratio regardless of container size.

```typescript
<AspectRatio ratio={16 / 9}>
  <Image src="..." alt="Image" className="rounded-md object-cover" />
</AspectRatio>
```

--------------------------------

### Implement Responsive Form Layout with Shadcn UI Fields (TSX)

Source: https://ui.shadcn.com/docs/components/field

This TypeScript/TSX example demonstrates how to construct a responsive form using Shadcn UI's Field components. It utilizes `orientation="responsive"` on individual `Field` elements within a `FieldGroup` to achieve automatic column layouts for various screen sizes, leveraging components like `Input`, `Textarea`, and `Button`.

```tsx
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function FieldResponsive() {
  return (
    <div className="w-full max-w-4xl">
      <form>
        <FieldSet>
          <FieldLegend>Profile</FieldLegend>
          <FieldDescription>Fill in your profile information.</FieldDescription>
          <FieldSeparator />
          <FieldGroup>
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <FieldDescription>
                  Provide your full name for identification
                </FieldDescription>
              </FieldContent>
              <Input id="name" placeholder="Evil Rabbit" required />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <FieldContent>
                <FieldLabel htmlFor="lastName">Message</FieldLabel>
                <FieldDescription>
                  You can write your message here. Keep it short, preferably
                  under 100 characters.
                </FieldDescription>
              </FieldContent>
              <Textarea
                id="message"
                placeholder="Hello, world!"
                required
                className="min-h-[100px] resize-none sm:min-w-[300px]"
              />
            </Field>
            <FieldSeparator />
            <Field orientation="responsive">
              <Button type="submit">Submit</Button>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </form>
    </div>
  )
}
```

--------------------------------

### Create Selectable Field Groups with Radio Buttons in React

Source: https://ui.shadcn.com/docs/components/field

This example demonstrates how to construct a 'Choice Card' using `FieldGroup`, `FieldSet`, and `FieldLabel` to wrap `RadioGroup` components. It showcases horizontal orientation for field content and integrates `FieldTitle` and `FieldDescription` for rich selection options, allowing users to choose between compute environments.

```tsx
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group"

export function FieldChoiceCard() {
  return (
    <div className="w-full max-w-md">
      <FieldGroup>
        <FieldSet>
          <FieldLabel htmlFor="compute-environment-p8w">
            Compute Environment
          </FieldLabel>
          <FieldDescription>
            Select the compute environment for your cluster.
          </FieldDescription>
          <RadioGroup defaultValue="kubernetes">
            <FieldLabel htmlFor="kubernetes-r2h">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Kubernetes</FieldTitle>
                  <FieldDescription>
                    Run GPU workloads on a K8s configured cluster.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="kubernetes" id="kubernetes-r2h" />
              </Field>
            </FieldLabel>
            <FieldLabel htmlFor="vm-z4k">
              <Field orientation="horizontal">
                <FieldContent>
                  <FieldTitle>Virtual Machine</FieldTitle>
                  <FieldDescription>
                    Access a VM configured cluster to run GPU workloads.
                  </FieldDescription>
                </FieldContent>
                <RadioGroupItem value="vm" id="vm-z4k" />
              </Field>
            </FieldLabel>
          </RadioGroup>
        </FieldSet>
      </FieldGroup>
    </div>
  )
}
```

--------------------------------

### Display ResizableHandle with Handle in Shadcn UI TSX

Source: https://ui.shadcn.com/docs/components/resizable

This TSX code example demonstrates how to configure a `ResizablePanelGroup` to display a visible handle for the `ResizableHandle` component using the `withHandle` prop. It sets up a horizontal layout with two panels, 'Sidebar' and 'Content', separated by the handle, illustrating basic usage and styling.

```tsx
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableHandleDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

```tsx
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export default function Example() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel>One</ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>Two</ResizablePanel>
    </ResizablePanelGroup>
  )
}
```

--------------------------------

### Integrate Spinner into a Button for Loading State (TypeScript)

Source: https://ui.shadcn.com/docs/components/spinner

Shows how to embed a Spinner component within a button to visually indicate a loading or processing state. This example includes multiple buttons with different variants (default, outline, secondary) and disabled states, each displaying a spinner alongside descriptive text. The Button component automatically handles the appropriate spacing between the spinner and its content.

```tsx
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerButton() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Button disabled size="sm">
        <Spinner />
        Loading...
      </Button>
      <Button variant="outline" disabled size="sm">
        <Spinner />
        Please wait
      </Button>
      <Button variant="secondary" disabled size="sm">
        <Spinner />
        Processing
      </Button>
    </div>
  )
}
```

--------------------------------

### Configure Files for a Registry Item in JSON

Source: https://ui.shadcn.com/docs/registry/registry-item-json

This JSON snippet demonstrates how to define files for a registry item, specifying their paths, types (e.g., page, component, hook, file), and optional target locations within a project. The `target` property is crucial for `registry:page` and `registry:file` types to dictate where the file should be placed, with `~` referring to the project root.

```json
{
  "files": [
    {
      "path": "registry/new-york/hello-world/page.tsx",
      "type": "registry:page",
      "target": "app/hello/page.tsx"
    },
    {
      "path": "registry/new-york/hello-world/hello-world.tsx",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/hello-world/use-hello-world.ts",
      "type": "registry:hook"
    },
    {
      "path": "registry/new-york/hello-world/.env",
      "type": "registry:file",
      "target": "~/.env"
    }
  ]
}
```

--------------------------------

### Add Accessibility Label to NativeSelect Component (tsx)

Source: https://ui.shadcn.com/docs/components/native-select

This example demonstrates enhancing accessibility for the `NativeSelect` component by using the `aria-label` attribute. The label provides a descriptive text for screen readers, ensuring users understand the purpose of the select input. It contains options for different languages.

```tsx
<NativeSelect aria-label="Choose your preferred language">
  <NativeSelectOption value="en">English</NativeSelectOption>
  <NativeSelectOption value="es">Spanish</NativeSelectOption>
  <NativeSelectOption value="fr">French</NativeSelectOption>
</NativeSelect>
```

--------------------------------

### Fetch Projects with SWR - React TypeScript

Source: https://ui.shadcn.com/docs/components/sidebar

Fetches project data using SWR hook with loading state management and skeleton UI fallback. Displays a sidebar menu with project links and icons. Handles loading and empty data states before rendering the project list.

```typescript
function NavProjects() {
  const { data, isLoading } = useSWR("/api/projects", fetcher)

  if (isLoading) {
    return (
      <SidebarMenu>
        {Array.from({ length: 5 }).map((_, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuSkeleton showIcon />
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    )
  }

  if (!data) {
    return ...
  }

  return (
    <SidebarMenu>
      {data.map((project) => (
        <SidebarMenuItem key={project.name}>
          <SidebarMenuButton asChild>
            <a href={project.url}>
              <project.icon />
              <span>{project.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
```

--------------------------------

### Define Array Field Structure with Shadcn Components

Source: https://ui.shadcn.com/docs/forms/react-hook-form

This JSX snippet illustrates how to structure an array field using Shadcn's `FieldSet`, `FieldLegend`, and `FieldDescription` components. This setup provides semantic grouping and a clear description for a collection of dynamic array items.

```tsx
<FieldSet className="gap-4">
  <FieldLegend variant="label">Email Addresses</FieldLegend>
  <FieldDescription>
    Add up to 5 email addresses where we can contact you.
  </FieldDescription>
  <FieldGroup className="gap-4">{/* Array items go here */}</FieldGroup>
</FieldSet>
```

--------------------------------

### Create Label with Checkbox Component in React/TSX

Source: https://ui.shadcn.com/docs/components/label

Renders an accessible label associated with a checkbox control. The Label component uses the htmlFor attribute to connect with the checkbox's id, ensuring proper accessibility. This example demonstrates basic usage with Flexbox layout and spacing utilities.

```tsx
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  )
}
```

--------------------------------

### Calendar with Timezone Support

Source: https://ui.shadcn.com/docs/components/calendar

Example implementation of a calendar component with timezone awareness. Detects the user's local timezone using Intl.DateTimeFormat() in a useEffect hook during client-side rendering to avoid hydration mismatches. Passes the detected timezone to the Calendar component for proper date display and selection.

```TypeScript
export function CalendarWithTimezone() {
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  const [timeZone, setTimeZone] = React.useState<string | undefined>(undefined)

  React.useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone)
  }, [])

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      timeZone={timeZone}
    />
  )
}
```

--------------------------------

### Adjust Spinner Size with Utility Classes (TypeScript)

Source: https://ui.shadcn.com/docs/components/spinner

Illustrates how to change the visual size of the Spinner component using Tailwind CSS `size-*` utility classes directly via the `className` prop. This example renders multiple spinners with different predefined sizes, including `size-3`, `size-4`, `size-6`, and `size-8`. It provides a clear demonstration of how to apply various size variations to the spinner.

```tsx
import { Spinner } from "@/components/ui/spinner"

export function SpinnerSize() {
  return (
    <div className="flex items-center gap-6">
      <Spinner className="size-3" />
      <Spinner className="size-4" />
      <Spinner className="size-6" />
      <Spinner className="size-8" />
    </div>
  )
}
```

--------------------------------

### Initialize shadcn MCP Client

Source: https://ui.shadcn.com/docs/mcp

These commands initialize the shadcn Model Context Protocol (MCP) server for various development environments. Each command configures the MCP server specifically for the designated AI client, allowing it to interact with shadcn components.

```bash
npx shadcn@latest mcp init --client claude
```

```bash
npx shadcn@latest mcp init --client cursor
```

```bash
npx shadcn@latest mcp init --client vscode
```

```bash
npx shadcn@latest mcp init --client codex
```

--------------------------------

### Understand `npm` Peer Dependency Error for React 19

Source: https://ui.shadcn.com/docs/react-19

This `npm` error output demonstrates a common `ERESOLVE` issue encountered when a package's peer dependencies do not explicitly list React 19. It indicates a conflict where the root project uses React 19 but a dependency expects an older version, leading to installation failure.

```bash
npm error code ERESOLVE
npm error ERESOLVE unable to resolve dependency tree
npm error
npm error While resolving: my-app@0.1.0
npm error Found: react@19.0.0-rc-69d4b800-20241021
npm error node_modules/react
npm error   react@"19.0.0-rc-69d4b800-20241021" from the root project
```

--------------------------------

### Implement React Hook Form Radio Group with Zod and Shadcn UI

Source: https://ui.shadcn.com/docs/forms/react-hook-form

This comprehensive example showcases how to build a subscription plan selection form using Shadcn UI's RadioGroup, managed by React Hook Form, and validated with Zod. It includes state management for radio inputs, error display using `FieldError`, and form submission handling with `sonner` toasts.

```tsx
"use client"\n\nimport * as React from \"react\"\nimport { zodResolver } from \"@hookform/resolvers/zod\"\nimport { Controller, useForm } from \"react-hook-form\"\nimport { toast } from \"sonner\"\nimport * as z from \"zod\"\n\nimport { Button } from \"@/components/ui/button\"\nimport {\n  Card,\n  CardContent,\n  CardDescription,\n  CardFooter,\n  CardHeader,\n  CardTitle,\n} from \"@/components/ui/card\"\nimport {\n  Field,\n  FieldContent,\n  FieldDescription,\n  FieldError,\n  FieldGroup,\n  FieldLabel,\n  FieldLegend,\n  FieldSet,\n  FieldTitle,\n} from \"@/components/ui/field\"\nimport {\n  RadioGroup,\n  RadioGroupItem,\n} from \"@/components/ui/radio-group\"\n\nconst plans = [\n  {\n    id: \"starter\",\n    title: \"Starter (100K tokens/month)\",\n    description: \"For everyday use with basic features.\",\n  },\n  {\n    id: \"pro\",\n    title: \"Pro (1M tokens/month)\",\n    description: \"For advanced AI usage with more features.\",\n  },\n  {\n    id: \"enterprise\",\n    title: \"Enterprise (Unlimited tokens)\",\n    description: \"For large teams and heavy usage.\",\n  },\n] as const\n\nconst formSchema = z.object({\n  plan: z.string().min(1, \"You must select a subscription plan to continue.\"),\n})\n\nexport function FormRhfRadioGroup() {\n  const form = useForm<z.infer<typeof formSchema>>({\n    resolver: zodResolver(formSchema),\n    defaultValues: {\n      plan: \"\",\n    },\n  })\n\n  function onSubmit(data: z.infer<typeof formSchema>) {\n    toast(\"You submitted the following values:\", {\n      description: (\n        <pre className=\"bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4\">\n          <code>{JSON.stringify(data, null, 2)}</code>\n        </pre>\n      ),\n      position: \"bottom-right\",\n      classNames: {\n        content: \"flex flex-col gap-2\",\n      },\n      style: {\n        \"--border-radius\": \"calc(var(--radius)  + 4px)\",\n      } as React.CSSProperties,\n    })\n  }\n\n  return (\n    <Card className=\"w-full sm:max-w-md\">\n      <CardHeader>\n        <CardTitle>Subscription Plan</CardTitle>\n        <CardDescription>\n          See pricing and features for each plan.\n        </CardDescription>\n      </CardHeader>\n      <CardContent>\n        <form id=\"form-rhf-radiogroup\" onSubmit={form.handleSubmit(onSubmit)}>\n          <FieldGroup>\n            <Controller\n              name=\"plan\"\n              control={form.control}\n              render={({ field, fieldState }) => (\n                <FieldSet data-invalid={fieldState.invalid}>\n                  <FieldLegend>Plan</FieldLegend>\n                  <FieldDescription>\n                    You can upgrade or downgrade your plan at any time.\n                  </FieldDescription>\n                  <RadioGroup\n                    name={field.name}\n                    value={field.value}\n                    onValueChange={field.onChange}\n                    aria-invalid={fieldState.invalid}\n                  >\n                    {plans.map((plan) => (\n                      <FieldLabel\n                        key={plan.id}\n                        htmlFor={`form-rhf-radiogroup-${plan.id}`}\n                      >\n                        <Field\n                          orientation=\"horizontal\"\n                          data-invalid={fieldState.invalid}\n                        >\n                          <FieldContent>\n                            <FieldTitle>{plan.title}</FieldTitle>\n                            <FieldDescription>\n                              {plan.description}\n                            </FieldDescription>\n                          </FieldContent>\n                          <RadioGroupItem\n                            value={plan.id}\n                            id={`form-rhf-radiogroup-${plan.id}`}\n                            aria-invalid={fieldState.invalid}\n                          />\n                        </Field>\n                      </FieldLabel>\n                    ))}\n                  </RadioGroup>\n                  {fieldState.invalid && (\n                    <FieldError errors={[fieldState.error]} />\n                  )}\n                </FieldSet>\n              )}\n            />\n          </FieldGroup>\n        </form>\n      </CardContent>\n      <CardFooter>\n        <Field orientation=\"horizontal\">\n          <Button type=\"button\" variant=\"outline\" onClick={() => form.reset()}>\n            Reset\n          </Button>\n          <Button type=\"submit\" form=\"form-rhf-radiogroup\">\n            Save\n          </Button>\n        </Field>\n      </CardFooter>\n    </Card>\n  )\n}
```

--------------------------------

### Display Loading Spinners in Input Groups (Shadcn UI, TSX)

Source: https://ui.shadcn.com/docs/components/input-group

This example illustrates how to embed loading indicators, such as the `Spinner` component or `LoaderIcon`, within `InputGroup` addons. It showcases various configurations for providing visual feedback during processing or searching operations, typically with disabled input fields, to improve user experience during asynchronous tasks.

```tsx
import { LoaderIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group"
import { Spinner } from "@/components/ui/spinner"

export function InputGroupSpinner() {
  return (
    <div className="grid w-full max-w-sm gap-4">
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Searching..." disabled />
        <InputGroupAddon align="inline-end">
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Processing..." disabled />
        <InputGroupAddon>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Saving changes..." disabled />
        <InputGroupAddon align="inline-end">
          <InputGroupText>Saving...</InputGroupText>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput placeholder="Refreshing data..." disabled />
        <InputGroupAddon>
          <LoaderIcon className="animate-spin" />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupText className="text-muted-foreground">
            Please wait...
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

--------------------------------

### Item Link Component with asChild Prop in TSX

Source: https://ui.shadcn.com/docs/components/item

Renders Item components as anchor links with hover and focus states applied to the anchor element using the asChild prop. Includes examples of internal links with chevron icons and external links with security attributes and external link icons from lucide-react.

```tsx
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"

export function ItemLink() {
  return (
    <div className="flex w-full max-w-md flex-col gap-4">
      <Item asChild>
        <a href="#">
          <ItemContent>
            <ItemTitle>Visit our documentation</ItemTitle>
            <ItemDescription>
              Learn how to get started with our components.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
      <Item variant="outline" asChild>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <ItemContent>
            <ItemTitle>External resource</ItemTitle>
            <ItemDescription>
              Opens in a new tab with security attributes.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <ExternalLinkIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  )
}
```

--------------------------------

### Full List of Global Theming CSS Variables in app/globals.css

Source: https://ui.shadcn.com/docs/theming

Comprehensive list of predefined CSS variables for a theming system, including `root` and `dark` mode definitions for various UI elements and chart colors, using the Oklch color format for consistent styling.

```css
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --input: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0 0);
  --sidebar-foreground: oklch(0.145 0 0);
  --sidebar-primary: oklch(0.205 0 0);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.97 0 0);
  --sidebar-accent-foreground: oklch(0.205 0 0);
  --sidebar-border: oklch(0.922 0 0);
  --sidebar-ring: oklch(0.708 0 0);
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  --card: oklch(0.205 0 0);
  --card-foreground: oklch(0.985 0 0);
  --popover: oklch(0.269 0 0);
  --popover-foreground: oklch(0.985 0 0);
  --primary: oklch(0.922 0 0);
  --primary-foreground: oklch(0.205 0 0);
  --secondary: oklch(0.269 0 0);
  --secondary-foreground: oklch(0.985 0 0);
  --muted: oklch(0.269 0 0);
  --muted-foreground: oklch(0.708 0 0);
  --accent: oklch(0.371 0 0);
  --accent-foreground: oklch(0.985 0 0);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.556 0 0);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.205 0 0);
  --sidebar-foreground: oklch(0.985 0 0);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0 0);
  --sidebar-accent: oklch(0.269 0 0);
  --sidebar-accent-foreground: oklch(0.985 0 0);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.439 0 0);
}
```

--------------------------------

### Create Checkout Form with Field Components - React TSX

Source: https://ui.shadcn.com/docs/changelog

A comprehensive checkout form example using Field, FieldSet, FieldGroup, and FieldSeparator components to organize payment information, billing address, and comments sections. Includes SelectItem for year selection, Input for CVV, Checkbox for address matching, Textarea for comments, and submit/cancel buttons.

```tsx
<form>
  <FieldGroup>
    <FieldSet>
      <FieldLegend>Payment Method</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-expiry-year">Expiry Year</FieldLabel>
          <Select>
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2025">2025</SelectItem>
            <SelectItem value="2026">2026</SelectItem>
            <SelectItem value="2027">2027</SelectItem>
            <SelectItem value="2028">2028</SelectItem>
            <SelectItem value="2029">2029</SelectItem>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
          <Input id="checkout-7j9-cvv" placeholder="123" required />
        </Field>
      </FieldGroup>
    </FieldSet>
    <FieldSeparator />
    <FieldSet>
      <FieldLegend>Billing Address</FieldLegend>
      <FieldDescription>The billing address associated with your payment method</FieldDescription>
      <FieldGroup>
        <Field orientation="horizontal">
          <Checkbox id="checkout-7j9-same-as-shipping-wgm" defaultChecked />
          <FieldLabel htmlFor="checkout-7j9-same-as-shipping-wgm" className="font-normal">Same as shipping address</FieldLabel>
        </Field>
      </FieldGroup>
    </FieldSet>
    <FieldSet>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="checkout-7j9-optional-comments">Comments</FieldLabel>
          <Textarea id="checkout-7j9-optional-comments" placeholder="Add any additional comments" className="resize-none" />
        </Field>
      </FieldGroup>
    </FieldSet>
    <Field orientation="horizontal">
      <Button type="submit">Submit</Button>
      <Button variant="outline" type="button">Cancel</Button>
    </Field>
  </FieldGroup>
</form>
```

--------------------------------

### Render a Submit Button for React Hook Form

Source: https://ui.shadcn.com/docs/forms/react-hook-form

Demonstrates rendering a submit button within a Shadcn UI CardFooter component. The button is explicitly linked to a form via its `form` attribute for submission, indicating its role in a larger React Hook Form setup.

```tsx
<Button type="submit" form="form-rhf-demo">
  Submit
</Button>
```

--------------------------------

### Implement a horizontal Scroll Area for an image gallery (React/TypeScript)

Source: https://ui.shadcn.com/docs/components/scroll-area

This advanced React example creates a horizontal scrolling container suitable for an image gallery. It uses both `ScrollArea` and `ScrollBar` components, along with `next/image` for optimized image display, demonstrating a common pattern for carousels or horizontal lists.

```tsx
import * as React from "react"
import Image from "next/image"

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export interface Artwork {
  artist: string
  art: string
}

export const works: Artwork[] = [
  {
    artist: "Ornella Binni",
    art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Tom Byrom",
    art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
  },
  {
    artist: "Vladimir Malyavko",
    art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
  },
]

export function ScrollAreaHorizontalDemo() {
  return (
    <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
      <div className="flex w-max space-x-4 p-4">
        {works.map((artwork) => (
          <figure key={artwork.artist} className="shrink-0">
            <div className="overflow-hidden rounded-md">
              <Image
                src={artwork.art}
                alt={`Photo by ${artwork.artist}`}
                className="aspect-[3/4] h-fit w-fit object-cover"
                width={300}
                height={400}
              />
            </div>
            <figcaption className="text-muted-foreground pt-2 text-xs">
              Photo by{" "}
              <span className="text-foreground font-semibold">
                {artwork.artist}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
```

--------------------------------

### Item Component

Source: https://ui.shadcn.com/docs/components/item

The main component for displaying content with media, title, description, and actions. Supports multiple variants and sizes with flexible composition.

```APIDOC
## Item Component

### Description
The main component for displaying content with media, title, description, and actions. It provides a flexible container for building list items, dropdown selections, and grouped content with consistent styling.

### Props
- **variant** (string) - Optional - Display style variant: `"default" | "outline" | "muted"` (default: `"default"`)
- **size** (string) - Optional - Component size: `"default" | "sm"` (default: `"default"`)
- **asChild** (boolean) - Optional - Render a custom component as the item with hover and focus states applied (default: `false`)
- **className** (string) - Optional - Additional CSS classes

### Basic Usage
```tsx
<Item size="" variant="">
  <ItemMedia />
  <ItemContent>
    <ItemTitle>Item</ItemTitle>
    <ItemDescription>Item</ItemDescription>
  </ItemContent>
  <ItemActions />
</Item>
```

### AsChild Pattern
Use the `asChild` prop to render a custom component like a link. Hover and focus states are automatically applied.

```tsx
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export function ItemLink() {
  return (
    <Item asChild>
      <a href="/dashboard">
        <ItemMedia variant="icon">
          <Home />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Dashboard</ItemTitle>
          <ItemDescription>
            Overview of your account and activity.
          </ItemDescription>
        </ItemContent>
      </a>
    </Item>
  )
}
```
```

--------------------------------

### Complete AppSidebar with React Server Components

Source: https://ui.shadcn.com/docs/components/sidebar

A full implementation of a sidebar component using React Server Components that fetches project data asynchronously. The component wraps the NavProjects server component with React.Suspense to display a skeleton loader while data is being fetched. Includes project data structure with icons from lucide-react and badge counts.

```tsx
import * as React from "react"
import {
  FrameIcon,
  LifeBuoyIcon,
  MapIcon,
  PieChartIcon,
  SendIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarProvider,
} from "@/components/ui/sidebar"

const projects = [
  {
    name: "Design Engineering",
    url: "#",
    icon: FrameIcon,
    badge: "24",
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: PieChartIcon,
    badge: "12",
  },
  {
    name: "Travel",
    url: "#",
    icon: MapIcon,
    badge: "3",
  },
  {
    name: "Support",
    url: "#",
    icon: LifeBuoyIcon,
    badge: "21",
  },
  {
    name: "Feedback",
    url: "#",
    icon: SendIcon,
    badge: "8",
  },
]

// Dummy fetch function
async function fetchProjects() {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return projects
}

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <React.Suspense fallback={<NavProjectsSkeleton />}>
                <NavProjects />
              </React.Suspense>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}

function NavProjectsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

async function NavProjects() {
  const projects = await fetchProjects()

  return (
    <SidebarMenu>
      {projects.map((project) => (
        <SidebarMenuItem key={project.name}>
          <SidebarMenuButton asChild>
            <a href={project.url}>
              <project.icon />
              <span>{project.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
```

--------------------------------

### Configure TanStack Form Validation Modes (TSX)

Source: https://ui.shadcn.com/docs/forms/tanstack-form

This example illustrates how to configure multiple validation modes within TanStack Form's `validators` option. By specifying `onSubmit`, `onChange`, and `onBlur`, validation can be triggered at different interaction points, providing flexible user feedback.

```tsx
const form = useForm({
  defaultValues: {
    title: "",
    description: "",
  },
  validators: {
    onSubmit: formSchema,
    onChange: formSchema,
    onBlur: formSchema,
  },
})
```

--------------------------------

### Add Multiple Resources with CLI (Bash)

Source: https://ui.shadcn.com/docs/registry/namespace

Command to add multiple resources using the CLI, showcasing how the CLI handles resolution order and deduplication. The last specified resource for a given file path will override previous ones.

```bash
npx shadcn@latest add @acme/auth @custom/login-form
```

--------------------------------

### Implement Textarea with TanStack React Form and Zod Validation

Source: https://ui.shadcn.com/docs/forms/tanstack-form

This example demonstrates a complete React component (`FormTanstackTextarea`) that integrates a Shadcn UI `Textarea` with `@tanstack/react-form` for state management and Zod for validation. It showcases form submission with `sonner` toasts, dynamic error display, and reset functionality.

```tsx
/* eslint-disable react/no-children-prop */
"use client"

import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  about: z
    .string()
    .min(10, "Please provide at least 10 characters.")
    .max(200, "Please keep it under 200 characters."),
})

export function FormTanstackTextarea() {
  const form = useForm({
    defaultValues: {
      about: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast("You submitted the following values:", {
        description: (
          <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      })
    },
  })

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Personalization</CardTitle>
        <CardDescription>
          Customize your experience by telling us more about yourself.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="form-tanstack-textarea"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="about"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor="form-tanstack-textarea-about">
                      More about you
                    </FieldLabel>
                    <Textarea
                      id="form-tanstack-textarea-about"
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="I'm a software engineer..."
                      className="min-h-[120px]"
                    />
                    <FieldDescription>
                      Tell us more about yourself. This will be used to help us
                      personalize your experience.
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-tanstack-textarea">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
```

--------------------------------

### Basic Card Component Usage

Source: https://ui.shadcn.com/docs/components/card

Demonstrates the basic structure of a Card with header, content, and footer sections. Use CardTitle for headings, CardDescription for supplementary text, and CardAction for interactive elements.

```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
    <CardAction>Card Action</CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
```

--------------------------------

### Manage Select Component with React Hook Form

Source: https://ui.shadcn.com/docs/forms/react-hook-form

This example demonstrates how to connect a Shadcn UI `Select` component, used for choosing a billing period, to React Hook Form's `Controller`. It ensures the selected value is reflected in the form state and handles invalid states for styling.

```tsx
            <Controller
              name="billingPeriod"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="form-rhf-complex-billingPeriod">
                    Billing Period
                  </FieldLabel>
                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="form-rhf-complex-billingPeriod"
                      aria-invalid={fieldState.invalid}
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monthly">Monthly</SelectItem>
                      <SelectItem value="yearly">Yearly</SelectItem>
                    </SelectContent>
                  </Select>
                  <FieldDescription>
                    Choose how often you want to be billed.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
```

--------------------------------

### URL Pattern with {style} Placeholder

Source: https://ui.shadcn.com/docs/registry/namespace

Configure registries to serve different component versions based on the current style configuration. The {style} placeholder is replaced with the active style (e.g., 'new-york'). Useful for maintaining style-specific variants of components.

```json
{
  "@themes": "https://registry.example.com/{style}/{name}.json"
}
```

--------------------------------

### Build an Accessible Form with Shadcn UI Field Components (TSX)

Source: https://ui.shadcn.com/docs/components/field

This TypeScript React example demonstrates how to construct a complex, accessible form using various Shadcn UI components. It combines Field, FieldGroup, FieldSet, FieldLabel, FieldDescription, Input, Select, and Checkbox to create a payment and billing information form with proper semantic structure and accessibility attributes.

```tsx
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function FieldDemo() {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Name on Card
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Card Number
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <FieldDescription>
                  Enter your 16-digit card number
                </FieldDescription>
              </Field>
              <div className="grid grid-cols-3 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-exp-month-ts6">
                    Month
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01">01</SelectItem>
                      <SelectItem value="02">02</SelectItem>
                      <SelectItem value="03">03</SelectItem>
                      <SelectItem value="04">04</SelectItem>
                      <SelectItem value="05">05</SelectItem>
                      <SelectItem value="06">06</SelectItem>
                      <SelectItem value="07">07</SelectItem>
                      <SelectItem value="08">08</SelectItem>
                      <SelectItem value="09">09</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                    Year
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-7j9-exp-year-f59">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2027">2027</SelectItem>
                      <SelectItem value="2028">2028</SelectItem>
                      <SelectItem value="2029">2029</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
                  <Input id="checkout-7j9-cvv" placeholder="123" required />
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
          <FieldSeparator />
          <FieldSet>
            <FieldLegend>Billing Address</FieldLegend>
            <FieldDescription>
              The billing address associated with your payment method
            </FieldDescription>
            <FieldGroup>
              <Field orientation="horizontal">
                <Checkbox
                  id="checkout-7j9-same-as-shipping-wgm"
                  defaultChecked
                />
                <FieldLabel
                  htmlFor="checkout-7j9-same-as-shipping-wgm"
                  className="font-normal"
                >
                  Same as shipping address
                </FieldLabel>
              </Field>
            </FieldGroup>
          </FieldSet>
          <FieldSet>
            <FieldGroup>
              <Field>

```

--------------------------------

### Embed Spinner within a Badge for Status Indication (TypeScript)

Source: https://ui.shadcn.com/docs/components/spinner

Illustrates the usage of a Spinner component inside a Badge to signify an ongoing process or status. This example displays several badges with different variants (default, secondary, outline), each containing a spinner and relevant text like 'Syncing' or 'Updating'. It demonstrates how to visually enhance status indicators with an animated element.

```tsx
import { Badge } from "@/components/ui/badge"
import { Spinner } from "@/components/ui/spinner"

export function SpinnerBadge() {
  return (
    <div className="flex items-center gap-4 [--radius:1.2rem]">
      <Badge>
        <Spinner />
        Syncing
      </Badge>
      <Badge variant="secondary">
        <Spinner />
        Updating
      </Badge>
      <Badge variant="outline">
        <Spinner />
        Processing
      </Badge>
    </div>
  )
}
```

--------------------------------

### Provide detailed description for registry item

Source: https://ui.shadcn.com/docs/registry/registry-item-json

The `description` property offers a more extensive explanation of the registry item's purpose and functionality. It allows for detailed context that complements the concise title, helping users understand what the item does.

```json
{
  "description": "A simple hello world component."
}
```

--------------------------------

### Registry Authentication - .env.local

Source: https://ui.shadcn.com/docs/mcp

Environment variables for authenticating with private component registries. Set these credentials in `.env.local` to enable the MCP server to access protected registry endpoints.

```bash
REGISTRY_TOKEN=your_token_here
API_KEY=your_api_key_here
```

--------------------------------

### Configure components.json to Enable CSS Variable Theming

Source: https://ui.shadcn.com/docs/theming

Shows the configuration in `components.json` required to enable CSS variable-based theming in a project, specifically setting `tailwind.cssVariables` to `true`.

```json
{
  "style": "new-york",
  "rsc": true,
  "tailwind": {
    "config": "",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

--------------------------------

### Implement a React Select Field with Form Validation

Source: https://ui.shadcn.com/docs/forms/tanstack-form

This example showcases a `form.Field` component that renders a dropdown `Select` for choosing a billing period. It integrates with the form's state (`field.state.value`, `field.handleChange`) and displays validation errors using `FieldError` based on the `isInvalid` status, providing clear user feedback.

```tsx
<form.Field
  name="billingPeriod"
  children={(field) => {
    const isInvalid =
      field.state.meta.isTouched && !field.state.meta.isValid
    return (
      <Field data-invalid={isInvalid}>
        <FieldLabel htmlFor={field.name}>Billing Period</FieldLabel>
        <Select
          name={field.name}
          value={field.state.value}
          onValueChange={field.handleChange}
          aria-invalid={isInvalid}
        >
          <SelectTrigger id={field.name}>
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
        <FieldDescription>
          Choose how often you want to be billed.
        </FieldDescription>
        {isInvalid && (
          <FieldError errors={field.state.meta.errors} />
        )}
      </Field>
    )
  }}
/>
```

--------------------------------

### Build Command Menu Demo with Icons and Shortcuts in React/TSX

Source: https://ui.shadcn.com/docs/components/command

Demonstrates a fully functional command menu with icon integration from lucide-react, grouped command items organized by categories (Suggestions and Settings), keyboard shortcuts, and disabled state handling. The component includes a search input, empty state message, and organized command groups with visual separators.

```tsx
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem disabled>
            <Calculator />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
```

--------------------------------

### Implement Checkboxes with TanStack Form and shadcn/ui

Source: https://ui.shadcn.com/docs/forms/tanstack-form

This TypeScript/TSX example demonstrates how to integrate single and array checkboxes into a form using TanStack React Form and shadcn/ui components. It covers form initialization with `useForm`, Zod validation for both boolean and array checkboxes, handling `onCheckedChange` for state updates, displaying errors with `aria-invalid` and `data-invalid` props, and managing checkbox arrays with `mode="array"` and `tasks.map`.

```tsx
/* eslint-disable react/no-children-prop */
"use client"

import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"

const tasks = [
  {
    id: "push",
    label: "Push notifications",
  },
  {
    id: "email",
    label: "Email notifications",
  },
] as const

const formSchema = z.object({
  responses: z.boolean(),
  tasks: z
    .array(z.string())
    .min(1, "Please select at least one notification type.")
    .refine(
      (value) => value.every((task) => tasks.some((t) => t.id === task)),
      {
        message: "Invalid notification type selected.",
      }
    ),
})

export function FormTanstackCheckbox() {
  const form = useForm({
    defaultValues: {
      responses: true,
      tasks: [] as string[],
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast("You submitted the following values:", {
        description: (
          <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      })
    },
  })

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>Manage your notification preferences.</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="form-tanstack-checkbox"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="responses"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <FieldSet>
                    <FieldLegend variant="label">Responses</FieldLegend>
                    <FieldDescription>
                      Get notified for requests that take time, like research or
                      image generation.
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      <Field orientation="horizontal" data-invalid={isInvalid}>
                        <Checkbox
                          id="form-tanstack-checkbox-responses"
                          name={field.name}
                          checked={field.state.value}
                          onCheckedChange={(checked) =>
                            field.handleChange(checked === true)
                          }
                          disabled
                        />
                        <FieldLabel
                          htmlFor="form-tanstack-checkbox-responses"
                          className="font-normal"
                        >
                          Push notifications
                        </FieldLabel>
                      </Field>
                    </FieldGroup>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </FieldSet>
                )
              }}
            />
            <FieldSeparator />
            <form.Field
              name="tasks"
              mode="array"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <FieldSet>
                    <FieldLegend variant="label">Tasks</FieldLegend>
                    <FieldDescription>
                      Get notified when tasks you&apos;ve created have updates.
                    </FieldDescription>
                    <FieldGroup data-slot="checkbox-group">
                      {tasks.map((task) => (
                        <Field
                          key={task.id}
```

--------------------------------

### Apply Invalid State to NativeSelect Component (tsx)

Source: https://ui.shadcn.com/docs/components/native-select

This snippet shows a direct example of applying the `aria-invalid="true"` attribute to a `NativeSelect` component. This attribute signals to assistive technologies and styling systems that the input currently holds an invalid value. It includes several `NativeSelectOption` elements for various countries.

```tsx
<NativeSelect aria-invalid="true">
  <NativeSelectOption value="">Select a country</NativeSelectOption>
  <NativeSelectOption value="us">United States</NativeSelectOption>
  <NativeSelectOption value="uk">United Kingdom</NativeSelectOption>
  <NativeSelectOption value="ca">Canada</NativeSelectOption>
</NativeSelect>
```

--------------------------------

### Define a full shadcn/ui registry item configuration

Source: https://ui.shadcn.com/docs/registry/registry-item-json

This JSON configuration defines a complete shadcn/ui registry item, including its unique name, type, human-readable title, and descriptive text. It specifies both npm package dependencies and references to other registry items, along with the file paths for its components and custom CSS variables for thematic styling.

```json
{
  "$schema": "https://ui.shadcn.com/schema/registry-item.json",
  "name": "hello-world",
  "type": "registry:block",
  "title": "Hello World",
  "description": "A simple hello world component.",
  "registryDependencies": [
    "button",
    "@acme/input-form",
    "https://example.com/r/foo"
  ],
  "dependencies": ["is-even@3.0.0", "motion"],
  "files": [
    {
      "path": "registry/new-york/hello-world/hello-world.tsx",
      "type": "registry:component"
    },
    {
      "path": "registry/new-york/hello-world/use-hello-world.ts",
      "type": "registry:hook"
    }
  ],
  "cssVars": {
    "theme": {
      "font-heading": "Poppins, sans-serif"
    },
    "light": {
      "brand": "20 14.3% 4.1%"
    },
    "dark": {
      "brand": "20 14.3% 4.1%"
    }
  }
}
```

--------------------------------

### Display React Hook Form validation errors with FieldError and ARIA attributes (TypeScript)

Source: https://ui.shadcn.com/docs/forms/react-hook-form

This example shows how to display validation errors for a form field using React Hook Form's `Controller`. It demonstrates conditionally rendering `FieldError` and applying `data-invalid` and `aria-invalid` attributes for styling and improved accessibility.

```tsx
<Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type="email"
        aria-invalid={fieldState.invalid}
      />
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>
```

--------------------------------

### Server Component for Fetching and Rendering Projects

Source: https://ui.shadcn.com/docs/components/sidebar

An async server component that fetches project data and renders a menu list. The component awaits the fetchProjects() function and dynamically generates menu items with project icons and names. Each project item is wrapped with SidebarMenuButton for interactive behavior.

```tsx
async function NavProjects() {
  const projects = await fetchProjects()

  return (
    <SidebarMenu>
      {projects.map((project) => (
        <SidebarMenuItem key={project.name}>
          <SidebarMenuButton asChild>
            <a href={project.url}>
              <project.icon />
              <span>{project.name}</span>
            </a>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
```

--------------------------------

### Implement Shadcn UI Select with TanStack Form and Zod Validation in React

Source: https://ui.shadcn.com/docs/forms/tanstack-form

This example demonstrates how to build a form with a Select input using `@tanstack/react-form` for form state management and `zod` for schema validation. It integrates Shadcn UI's `Select` component, utilizing `SelectTrigger`, `SelectValue`, `SelectContent`, and `SelectItem` to construct the user interface. The snippet also illustrates how to handle and display validation errors by conditionally setting `aria-invalid` on the `SelectTrigger` and `data-invalid` on the `Field` component.

```tsx
/* eslint-disable react/no-children-prop */
"use client"

import { useForm } from "@tanstack/react-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const spokenLanguages = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Italian", value: "it" },
  { label: "Chinese", value: "zh" },
  { label: "Japanese", value: "ja" },
] as const

const formSchema = z.object({
  language: z
    .string()
    .min(1, "Please select your spoken language.")
    .refine((val) => val !== "auto", {
      message:
        "Auto-detection is not allowed. Please select a specific language.",
    }),
})

export function FormTanstackSelect() {
  const form = useForm({
    defaultValues: {
      language: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      toast("You submitted the following values:", {
        description: (
          <pre className="bg-code text-code-foreground mt-2 w-[320px] overflow-x-auto rounded-md p-4">
            <code>{JSON.stringify(value, null, 2)}</code>
          </pre>
        ),
        position: "bottom-right",
        classNames: {
          content: "flex flex-col gap-2",
        },
        style: {
          "--border-radius": "calc(var(--radius)  + 4px)",
        } as React.CSSProperties,
      })
    },
  })

  return (
    <Card className="w-full sm:max-w-lg">
      <CardHeader>
        <CardTitle>Language Preferences</CardTitle>
        <CardDescription>
          Select your preferred spoken language.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="form-tanstack-select"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="language"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field orientation="responsive" data-invalid={isInvalid}>
                    <FieldContent>
                      <FieldLabel htmlFor="form-tanstack-select-language">
                        Spoken Language
                      </FieldLabel>
                      <FieldDescription>
                        For best results, select the language you speak.
                      </FieldDescription>
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </FieldContent>
                    <Select
                      name={field.name}
                      value={field.state.value}
                      onValueChange={field.handleChange}
                    >
                      <SelectTrigger
                        id="form-tanstack-select-language"
                        aria-invalid={isInvalid}
                        className="min-w-[120px]"
                      >
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent position="item-aligned">
                        <SelectItem value="auto">Auto</SelectItem>
                        <SelectSeparator />
                        {spokenLanguages.map((language) => (
                          <SelectItem
                            key={language.value}
                            value={language.value}
                          >
                            {language.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                )
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="form-tanstack-select">
            Save
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
```

--------------------------------

### Carousel with Spacing Configuration in React TSX

Source: https://ui.shadcn.com/docs/components/carousel

Implements a carousel component with configurable spacing using Tailwind CSS utilities. Uses `pl-[VALUE]` on CarouselItem and `-ml-[VALUE]` on CarouselContent to control item spacing. The example creates a responsive carousel with 5 items that displays 1 item on mobile, 2 on tablet, and 3 on desktop.

```tsx
import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSpacing() {
  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
```

--------------------------------

### Integrate shadcn/ui Switch with React Hook Form Controller in TypeScript

Source: https://ui.shadcn.com/docs/forms/react-hook-form

This focused TypeScript snippet demonstrates the specific setup for connecting a `shadcn/ui` Switch component to `react-hook-form` using the `Controller` component. It illustrates how to bind `field.value` to `checked`, `field.onChange` to `onCheckedChange`, and propagate validation state using `aria-invalid` and `data-invalid` props for error visualization.

```tsx
<Controller
  name="twoFactor"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field orientation="horizontal" data-invalid={fieldState.invalid}>
      <FieldContent>
        <FieldLabel htmlFor="form-rhf-switch-twoFactor">
          Multi-factor authentication
        </FieldLabel>
        <FieldDescription>
          Enable multi-factor authentication to secure your account.
        </FieldDescription>
        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
      </FieldContent>
      <Switch
        id="form-rhf-switch-twoFactor"
        name={field.name}
        checked={field.value}
        onCheckedChange={field.onChange}
        aria-invalid={fieldState.invalid}
      />
    </Field>
  )}
/>
```

--------------------------------

### Group Keyboard Keys for Combinations

Source: https://ui.shadcn.com/docs/components/kbd

Demonstrates using the KbdGroup component to visually group multiple Kbd components. This is ideal for representing keyboard shortcuts or key combinations within descriptive text, enhancing readability for users.

```tsx
import { Kbd, KbdGroup } from "@/components/ui/kbd"

export function KbdGroupExample() {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-muted-foreground text-sm">
        Use{" "}
        <KbdGroup>
          <Kbd>Ctrl + B</Kbd>
          <Kbd>Ctrl + K</Kbd>
        </KbdGroup>{" "}
        to open the command palette
      </p>
    </div>
  )
}
```

--------------------------------

### Basic Sheet Component Demo in TSX

Source: https://ui.shadcn.com/docs/components/sheet

Demonstrates a complete Sheet implementation with header, form inputs, and footer actions. Includes edit profile form with name and username fields, along with save and close buttons using shadcn UI components.

```tsx
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">Name</Label>
            <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-username">Username</Label>
            <Input id="sheet-demo-username" defaultValue="@peduarte" />
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
```

--------------------------------

### Create AspectRatio Demo Component in TypeScript React

Source: https://ui.shadcn.com/docs/components/aspect-ratio

Demonstrates a basic AspectRatio component implementation with a 16:9 ratio displaying an optimized image from Unsplash. The component uses Next.js Image for lazy loading and responsive sizing with dark mode adjustments. Requires @radix-ui/react-aspect-ratio and next/image dependencies.

```typescript
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export function AspectRatioDemo() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
      <Image
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Photo by Drew Beamer"
        fill
        className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </AspectRatio>
  )
}
```

--------------------------------

### Configure Shadcn Registry for Semantic Versioning

Source: https://ui.shadcn.com/docs/registry/namespace

This JSON snippet configures a Shadcn registry to support semantic versioning and prerelease flags. It uses `semver` and `prerelease` parameters, allowing users to specify version ranges (e.g., `^2.0.0`) and control prerelease inclusion via an environment variable.

```json
{
  "@npm-style": {
    "url": "https://registry.example.com/{name}",
    "params": {
      "semver": "^2.0.0",
      "prerelease": "${ALLOW_PRERELEASE}"
    }
  }
}
```

--------------------------------

### Framework Selection Grid Component - JSX/React

Source: https://ui.shadcn.com/docs/forms

Creates a responsive grid layout displaying framework options as linked cards with icons and labels. Uses Tailwind CSS for styling and accepts href props for navigation to framework-specific documentation. Includes conditional styling for disabled/coming-soon options with dashed borders.

```jsx
<div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-6">
  <LinkedCard href="/docs/forms/react-hook-form">
    <ClipboardListIcon className="size-10" />
    <p className="mt-2 font-medium">React Hook Form</p>
  </LinkedCard>
  <LinkedCard href="/docs/forms/tanstack-form">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="size-10"
      fill="currentColor"
    >
      <path d="M6.93 13.688a.343.343 0 0 1 .468.132l.063.106c.48.851.98 1.66 1.5 2.426a35.65 35.65 0 0 0 2.074 2.742.345.345 0 0 1-.039.484l-.074.066c-2.543 2.223-4.191 2.665-4.953 1.333-.746-1.305-.477-3.672.808-7.11a.344.344 0 0 1 .153-.18ZM17.75 16.3a.34.34 0 0 1 .395.27l.02.1c.628 3.286.187 4.93-1.325 4.93-1.48 0-3.36-1.402-5.649-4.203a.327.327 0 0 1-.074-.222c0-.188.156-.34.344-.34h.121a32.984 32.984 0 0 0 2.809-.098c1.07-.086 2.191-.23 3.359-.437zm.871-6.977a.353.353 0 0 1 .445-.21l.102.034c3.262 1.11 4.504 2.332 3.719 3.664-.766 1.305-2.993 2.254-6.684 2.848a.362.362 0 0 1-.238-.047.343.343 0 0 1-.125-.476l.062-.106a34.07 34.07 0 0 0 1.367-2.523c.477-.989.93-2.051 1.352-3.184zM7.797 8.34a.362.362 0 0 1 .238.047.343.343 0 0 1 .125.476l-.062.106a34.088 34.088 0 0 0-1.367 2.523c-.477.988-.93 2.051-1.352 3.184a.353.353 0 0 1-.445.21l-.102-.034C1.57 13.742.328 12.52 1.113 11.188 1.88 9.883 4.106 8.934 7.797 8.34Zm5.281-3.984c2.543-2.223 4.192-2.664 4.953-1.332.746 1.304.477 3.671-.808 7.109a.344.344 0 0 1-.153.18.343.343 0 0 1-.468-.133l-.063-.106a34.64 34.64 0 0 0-1.5-2.426 35.65 35.65 0 0 0-2.074-2.742.345.345 0 0 1 .039-.484ZM7.285 2.274c1.48 0 3.364 1.402 5.649 4.203a.349.349 0 0 1 .078.218.348.348 0 0 1-.348.344l-.117-.004a34.584 34.584 0 0 0-2.809.102 35.54 35.54 0 0 0-3.363.437.343.343 0 0 1-.394-.273l-.02-.098c-.629-3.285-.188-4.93 1.324-4.93Zm2.871 5.812h3.688a.638.638 0 0 1 .55.316l1.848 3.22a.644.644 0 0 1 0 .628l-1.847 3.223a.638.638 0 0 1-.551.316h-3.688a.627.627 0 0 1-.547-.316L7.758 12.25a.644.644 0 0 1 0-.629L9.61 8.402a.627.627 0 0 1 .546-.316Zm3.23.793a.638.638 0 0 1 .552.316l1.39 2.426a.644.644 0 0 1 0 .629l-1.39 2.43a.638.638 0 0 1-.551.316h-2.774a.627.627 0 0 1-.546-.316l-1.395-2.43a.644.644 0 0 1 0-.629l1.395-2.426a.627.627 0 0 1 .546-.316Zm-.491.867h-1.79a.624.624 0 0 0-.546.316l-.899 1.56a.644.644 0 0 0 0 .628l.899 1.563a.632.632 0 0 0 .547.316h1.789a.632.632 0 0 0 .547-.316l.898-1.563a.644.644 0 0 0 0-.629l-.898-1.558a.624.624 0 0 0-.547-.317Zm-.477.828c.227 0 .438.121.547.317l.422.73a.625.625 0 0 1 0 .629l-.422.734a.627.627 0 0 1-.547.317h-.836a.632.632 0 0 1-.547-.317l-.422-.734a.625.625 0 0 1 0-.629l.422-.73a.632.632 0 0 1 .547-.317zm-.418.817a.548.548 0 0 0-.473.273.547.547 0 0 0 0 .547.544.544 0 0 0 .473.27.544.544 0 0 0 .473-.27.547.547 0 0 0 0-.547.548.548 0 0 0-.473-.273Zm-4.422.546h.98M18.98 7.75c.391-1.895.477-3.344.223-4.398-.148-.63-.422-1.137-.84-1.508-.441-.39-1-.582-1.625-.582-1.035 0-2.12.472-3.281 1.367a14.9 14.9 0 0 0-1.473 1.316 1.206 1.206 0 0 0-.136-.144c-1.446-1.285-2.66-2.082-3.7-2.39-.617-.184-1.195-.2-1.722-.024-.559.187-1.004.574-1.317 1.117-.515.894-.652 2.074-.46 3.527.078.59.214 1.235.402 1.934a1.119 1.119 0 0 0-.215.047C3.008 8.62 1.71 9.269.926 10.015c-.465.442-.77.938-.883 1.481-.113.578 0 1.156.312 1.7.516.894 1.465 1.597 2.817 2.155.543.223 1.156.426 1.844.61a1.023 1.023 0 0 0-.07.226c-.391 1.891-.477 3.344-.223 4.395.148.629.425 1.14.84 1.508.44.39 1 .582 1.625.582 1.035 0 2.12-.473 3.28-1.364.477-.37.973-.816 1.489-1.336a1.2 1.2 0 0 0 .195.227c1.446 1.285 2.66 2.082 3.7 2.39.617.184 1.195.2 1.722.024.559-.187 1.004-.574 1.317-1.117.515-.894.652-2.074.46-3.527a14.941 14.941 0 0 0-.425-2.012 1.225 1.225 0 0 0 .238-.047c1.828-.61 3.125-1.258 3.91-2.004.465-.441.77-.937.883-1.48.113-.578 0-1.157-.313-1.7-.515-.894-1.464-1.597-2.816-2.156a14.576 14.576 0 0 0-1.906-.625.865.865 0 0 0 .059-.195z" />
    </svg>
    <p className="mt-2 font-medium">TanStack Form</p>
  </LinkedCard>
  <LinkedCard href="#" className="border border-dashed bg-transparent">
    <svg
      role="img"
      viewBox="0 0 24 24"
      className="size-10"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>React</title>
    </svg>
  </LinkedCard>
</div>
```

--------------------------------

### Import Empty Component and Subcomponents

Source: https://ui.shadcn.com/docs/components/empty

Import the Empty component and its subcomponents (EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle) from the UI components library. These form the building blocks for constructing empty state layouts.

```tsx
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
```

--------------------------------

### Create Basic Field with Input Control

Source: https://ui.shadcn.com/docs/changelog

Build a simple form field combining FieldLabel, Input control, and FieldDescription. This demonstrates the basic composition pattern for a single form field with helper text.

```tsx
<Field>
  <FieldLabel htmlFor="username">Username</FieldLabel>
  <Input id="username" placeholder="Max Leiter" />
  <FieldDescription>
    Choose a unique username for your account.
  </FieldDescription>
</Field>
```

--------------------------------

### Configure shadcn MCP Server for Codex

Source: https://ui.shadcn.com/docs/mcp

This TOML configuration snippet manually sets up the shadcn MCP server within Codex's `~/.codex/config.toml` file. It defines the command and arguments required for Codex to interact with the shadcn MCP functionality, as the CLI cannot automatically update this file.

```toml
[mcp_servers.shadcn]
command = "npx"
args = ["shadcn@latest", "mcp"]
```

--------------------------------

### Basic Navigation Menu Structure - React

Source: https://ui.shadcn.com/docs/components/navigation-menu

Fundamental navigation menu implementation with a trigger and content area. Demonstrates the minimal structure required to create a dropdown menu with one item and link.

```typescript
<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>
```

--------------------------------

### Import Navigation Menu Components - TypeScript/React

Source: https://ui.shadcn.com/docs/components/navigation-menu

Import all available navigation menu components from the shadcn UI components directory. Provides access to menu structure, triggers, content, links, and viewport elements.

```typescript
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
```

--------------------------------

### Execute shadcn Build Command

Source: https://ui.shadcn.com/docs/cli

Basic command to build and generate registry JSON files. This command reads the default registry.json file and outputs the generated files to the public/r directory.

```bash
npx shadcn@latest build
```

--------------------------------

### React Suspense Integration with Server Components

Source: https://ui.shadcn.com/docs/components/sidebar

Demonstrates proper integration of React.Suspense with server components to handle asynchronous data fetching. The Suspense boundary wraps the NavProjects server component and displays NavProjectsSkeleton as a fallback UI. This pattern enables progressive rendering and improved user experience.

```tsx
function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <React.Suspense fallback={<NavProjectsSkeleton />}>
              <NavProjects />
            </React.Suspense>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
```

--------------------------------

### Import Tooltip Components

Source: https://ui.shadcn.com/docs/components/tooltip

Standard import statement for using Tooltip, TooltipContent, and TooltipTrigger components from the ui components directory. Must be placed at the top of component files using the tooltip.

```tsx
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
```

--------------------------------

### Create Basic AppSidebar Component (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/sidebar

This code defines a basic `AppSidebar` component using `Sidebar` and `SidebarContent` from the Shadcn/UI library. It establishes the initial structure for a collapsible sidebar, ready to be populated with navigation elements.

```tsx
import { Sidebar, SidebarContent } from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent />
    </Sidebar>
  )
}
```

--------------------------------

### Loading Skeleton Component for Sidebar Menu

Source: https://ui.shadcn.com/docs/components/sidebar

A skeleton component that displays placeholder loaders while async data is being fetched. It renders 5 skeleton menu items with icon placeholders to provide visual feedback during loading. Used as a Suspense fallback to improve perceived performance.

```tsx
function NavProjectsSkeleton() {
  return (
    <SidebarMenu>
      {Array.from({ length: 5 }).map((_, index) => (
        <SidebarMenuItem key={index}>
          <SidebarMenuSkeleton showIcon />
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}
```

--------------------------------

### Item Component Demo - TSX

Source: https://ui.shadcn.com/docs/components/item

Demonstrates basic and advanced Item component usage with media, content, actions, and link integration. Shows variant and size prop customization with icon support from lucide-react.

```tsx
import { BadgeCheckIcon, ChevronRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export function ItemDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>Basic Item</ItemTitle>
          <ItemDescription>
            A simple item with title and description.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" asChild>
        <a href="#">
          <ItemMedia>
            <BadgeCheckIcon className="size-5" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Your profile has been verified.</ItemTitle>
          </ItemContent>
          <ItemActions>
            <ChevronRightIcon className="size-4" />
          </ItemActions>
        </a>
      </Item>
    </div>
  )
}
```

--------------------------------

### Basic Pagination Component Demo - TSX

Source: https://ui.shadcn.com/docs/components/pagination

Demonstrates a complete pagination component with previous/next navigation, page links, and ellipsis. Includes active page state management using the isActive prop. Imports all necessary pagination sub-components from the ui library.

```tsx
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
```

--------------------------------

### Sample Payment Data Array - TypeScript

Source: https://ui.shadcn.com/docs/components/data-table

Creates an array of five sample Payment objects with realistic test data. Each payment record contains an id, amount value, status state, and email address used for populating the initial data table.

```typescript
const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@example.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@example.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@example.com",
  },
  {
    id: "5kma53ae",
    amount: 874,
    status: "success",
    email: "Silas22@example.com",
  },
  {
    id: "bhqecj4p",
    amount: 721,
    status: "failed",
    email: "carmella@example.com",
  },
]
```

--------------------------------

### Display Keyboard Shortcut in React Tooltip

Source: https://ui.shadcn.com/docs/components/kbd

Illustrates integrating the Kbd component within a Tooltip to provide users with a visual cue for keyboard shortcuts associated with actions. This enhances discoverability and usability of application features.

```tsx
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function KbdTooltip() {
  return (
    <div className="flex flex-wrap gap-4">
      <ButtonGroup>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              Save
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              Save Changes <Kbd>S</Kbd>
            </div>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="sm" variant="outline">
              Print
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center gap-2">
              Print Document{" "}
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </div>
  )
}
```

--------------------------------

### Basic Context Menu Implementation

Source: https://ui.shadcn.com/docs/components/context-menu

Create a simple context menu that appears on right-click with a list of menu items. The ContextMenuTrigger wraps the element to trigger the menu, and ContextMenuContent holds the menu items.

```tsx
<ContextMenu>
  <ContextMenuTrigger>Right click</ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Profile</ContextMenuItem>
    <ContextMenuItem>Billing</ContextMenuItem>
    <ContextMenuItem>Team</ContextMenuItem>
    <ContextMenuItem>Subscription</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>
```

--------------------------------

### Create Responsive Dialog with TSX React

Source: https://ui.shadcn.com/docs/components/drawer

A responsive modal component that renders a Dialog on desktop (768px+) and a Drawer on mobile devices. Uses React hooks for state management and media query detection. Includes a ProfileForm subcomponent with email, username fields, and save functionality. Combines shadcn/ui Dialog, Drawer, Button, Input, and Label components.

```tsx
"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function DrawerDialogDemo() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Edit profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" defaultValue="shadcn@example.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@shadcn" />
      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
```

--------------------------------

### List Registry Items with list Command

Source: https://ui.shadcn.com/docs/cli

The list command displays all available items from specified registries. It supports multiple registry sources and serves as an alias for the search command.

```bash
npx shadcn@latest list @acme
```

```bash
Usage: shadcn list [options] <registries...>

list items from registries

Arguments:
  registries             the registry names or urls to list items from. Names
                         must be prefixed with @.
```

--------------------------------

### Item Component Structure with Media, Content, and Actions in TypeScript/React

Source: https://ui.shadcn.com/docs/components/item

Shows the basic structure of the Item component with optional ItemMedia, ItemContent containing ItemTitle and ItemDescription, and ItemActions. Demonstrates the component's composition pattern for building list items with consistent styling and layout.

```typescript
<Item size="" variant="">
  <ItemMedia />
  <ItemContent>
    <ItemTitle>Item</ItemTitle>
    <ItemDescription>Item</ItemDescription>
  </ItemContent>
  <ItemActions />
</Item>
```

--------------------------------

### Import Drawer Components

Source: https://ui.shadcn.com/docs/components/drawer

Import all necessary drawer subcomponents from the UI library. These imports are required for constructing a complete drawer interface with trigger, content, header, and footer sections.

```tsx
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
```

--------------------------------

### Item Link Structure with asChild and Media in TSX

Source: https://ui.shadcn.com/docs/components/item

Demonstrates the basic structure of an Item component rendered as a link using the asChild prop, including ItemMedia, ItemContent with title and description, and ItemActions slots for flexible composition.

```tsx
<Item asChild>
  <a href="/dashboard">
    <ItemMedia />
    <ItemContent>
      <ItemTitle>Dashboard</ItemTitle>
      <ItemDescription>Overview of your account and activity.</ItemDescription>
    </ItemContent>
    <ItemActions />
  </a>
</Item>
```

--------------------------------

### Test Authenticated Registry with shadcn CLI

Source: https://ui.shadcn.com/docs/registry/authentication

Verify registry authentication using the shadcn CLI tool by setting the REGISTRY_TOKEN environment variable. Tests end-to-end authentication workflow with private namespaced registries.

```bash
REGISTRY_TOKEN=your_token npx shadcn@latest add @private/button
```

--------------------------------

### Empty State with Header and Multiple Actions in TypeScript React

Source: https://ui.shadcn.com/docs/changelog

Demonstrates a more complex empty state with EmptyHeader, icon media, title, description, and multiple action buttons including a link. Useful for onboarding or project creation flows.

```typescript
import { IconFolderCode } from "@tabler/icons-react"
import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function EmptyDemo() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <IconFolderCode />
        </EmptyMedia>
        <EmptyTitle>No Projects Yet</EmptyTitle>
        <EmptyDescription>
          You haven't created any projects yet. Get started by creating
          your first project.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button>Create Project</Button>
          <Button variant="outline">Import Project</Button>
        </div>
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <a href="#">
          Learn More <ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  )
}
```

--------------------------------

### Configure Shadcn Registry for Dynamic Version Selection

Source: https://ui.shadcn.com/docs/registry/namespace

This JSON configuration sets up a Shadcn registry to dynamically select resource versions based on an environment variable. It uses `${REGISTRY_VERSION}` in the `params` object, allowing version control to be managed externally for different deployment environments.

```json
{
  "@stable": {
    "url": "https://registry.company.com/{name}",
    "params": {
      "version": "${REGISTRY_VERSION}"
    }
  }
}
```

--------------------------------

### Sample Chart Data with Date and View Metrics

Source: https://ui.shadcn.com/docs/components/chart

Array of data objects containing date, desktop, and mobile view counts for a 12-day period. This data structure serves as the input for the bar chart visualization, with daily metrics for tracking visitor statistics across different device types.

```JavaScript
[
  { date: "2024-06-19", desktop: 341, mobile: 290 },
  { date: "2024-06-20", desktop: 408, mobile: 450 },
  { date: "2024-06-21", desktop: 169, mobile: 210 },
  { date: "2024-06-22", desktop: 317, mobile: 270 },
  { date: "2024-06-23", desktop: 480, mobile: 530 },
  { date: "2024-06-24", desktop: 132, mobile: 180 },
  { date: "2024-06-25", desktop: 141, mobile: 190 },
  { date: "2024-06-26", desktop: 434, mobile: 380 },
  { date: "2024-06-27", desktop: 448, mobile: 490 },
  { date: "2024-06-28", desktop: 149, mobile: 200 },
  { date: "2024-06-29", desktop: 103, mobile: 160 },
  { date: "2024-06-30", desktop: 446, mobile: 400 }
]
```

--------------------------------

### Import Context Menu Components

Source: https://ui.shadcn.com/docs/components/context-menu

Import the necessary Context Menu components from the ui package to use in your application. Includes the main wrapper, trigger, content, and various menu item types.

```tsx
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
```

--------------------------------

### Define Component Dependencies Across Registries in registry-item.json

Source: https://ui.shadcn.com/docs/changelog

Illustrates how a component's `registryDependencies` can reference items from different registries, such as default, specific versions, or custom. This highlights the decentralized resolution mechanism, enabling components to utilize dependencies from various sources.

```json
{
  "name": "dashboard",
  "type": "registry:block",
  "registryDependencies": [
    "@shadcn/card", // From default registry
    "@v0/chart", // From v0 registry
    "@acme/data-table", // From acme registry
    "@lib/data-fetcher", // Utility library
    "@ai/analytics-prompt" // AI prompt resource
  ]
}
```

--------------------------------

### API Key Authentication Configuration

Source: https://ui.shadcn.com/docs/registry/authentication

Configure API key authentication with custom headers for registry access. Supports multiple custom headers like X-API-Key and X-Workspace-Id for more granular access control and workspace isolation.

```json
{
  "registries": {
    "@company": {
      "url": "https://api.company.com/registry/{name}.json",
      "headers": {
        "X-API-Key": "${API_KEY}",
        "X-Workspace-Id": "${WORKSPACE_ID}"
      }
    }
  }
}
```

--------------------------------

### Render Basic Shadcn Menubar (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/menubar

This code illustrates how to construct a basic Menubar component using Shadcn UI in a React application. It includes a 'File' menu with several items such as 'New Tab' (displaying a keyboard shortcut), 'New Window', 'Share', and 'Print', utilizing `MenubarSeparator` components to group related items.

```tsx
<Menubar>
  <MenubarMenu>
    <MenubarTrigger>File</MenubarTrigger>
    <MenubarContent>
      <MenubarItem>
        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>New Window</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Share</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Print</MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
```

--------------------------------

### items Array with Registry Item Definitions

Source: https://ui.shadcn.com/docs/registry/registry-json

Contains an array of registry items, each implementing the registry-item schema specification. Each item defines a component with its name, type, dependencies, and file references for the registry catalog.

```json
{
  "items": [
    {
      "name": "hello-world",
      "type": "registry:block",
      "title": "Hello World",
      "description": "A simple hello world component.",
      "registryDependencies": [
        "button",
        "@acme/input-form",
        "https://example.com/r/foo"
      ],
      "dependencies": ["is-even@3.0.0", "motion"],
      "files": [
        {
          "path": "registry/new-york/hello-world/hello-world.tsx",
          "type": "registry:component"
        }
      ]
    }
  ]
}
```

--------------------------------

### Import and Basic Usage of Shadcn UI Toggle (React/TypeScript)

Source: https://ui.shadcn.com/docs/components/toggle

Shows how to import the Toggle component from the UI library and render a simple instance with default text.

```tsx
import { Toggle } from "@/components/ui/toggle"
```

```tsx
<Toggle>Toggle</Toggle>
```

--------------------------------

### Responsive Navigation Menu with Triggers - React

Source: https://ui.shadcn.com/docs/components/navigation-menu

Multi-section navigation menu with responsive visibility using Tailwind's md breakpoint. Includes simple layout and icon-based menu variations with grid-based content organization.

```typescript
<NavigationMenuList>
  <NavigationMenuItem className="hidden md:block">
    <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-[200px] gap-4">
        <li>
          <NavigationMenuLink asChild>
            <Link href="#">Components</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="#">Documentation</Link>
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Link href="#">Blocks</Link>
          </NavigationMenuLink>
        </li>
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
  <NavigationMenuItem className="hidden md:block">
    <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
    <NavigationMenuContent>
      <ul className="grid w-[200px] gap-4">
        <li>
          <NavigationMenuLink asChild>
            <Link href="#" className="flex-row items-center gap-2">
              <CircleHelpIcon />
              Backlog
            </Link>
          </NavigationMenuLink>
        </li>
      </ul>
    </NavigationMenuContent>
  </NavigationMenuItem>
</NavigationMenuList>
```

--------------------------------

### Configure Multi-Registry with Different Authentication Methods

Source: https://ui.shadcn.com/docs/registry/authentication

Set up multiple component registries with different authentication strategies using namespaced registry configuration. Supports bearer tokens, API keys, and custom headers for different access levels (public, internal, premium).

```json
{
  "registries": {
    "@public": "https://public.company.com/{name}.json",
    "@internal": {
      "url": "https://internal.company.com/{name}.json",
      "headers": {
        "Authorization": "Bearer ${INTERNAL_TOKEN}"
      }
    },
    "@premium": {
      "url": "https://premium.company.com/{name}.json",
      "headers": {
        "X-License-Key": "${LICENSE_KEY}"
      }
    }
  }
}
```

--------------------------------

### Advanced Context Menu with Submenus and Options

Source: https://ui.shadcn.com/docs/components/context-menu

Demonstrates a comprehensive context menu with submenus, keyboard shortcuts, separators, checkbox items, radio groups, and disabled states. Includes nested menu structures and various interaction patterns.

```tsx
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-44">
            <ContextMenuItem>Save Page...</ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem variant="destructive">Delete</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuLabel inset>People</ContextMenuLabel>
          <ContextMenuRadioItem value="pedro">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}
```

--------------------------------

### Import Kbd Component into React Project

Source: https://ui.shadcn.com/docs/components/kbd

Shows the required import statement to use the Kbd component in a React or Next.js file. This import assumes the component is located at the standard Shadcn UI path: `@/components/ui/kbd`.

```tsx
import { Kbd } from "@/components/ui/kbd"
```

--------------------------------

### Import Item Components in TSX

Source: https://ui.shadcn.com/docs/changelog

Imports all necessary Item-related components from the shadcn/ui library. These components work together to create structured content displays with media, titles, descriptions, and action areas.

```tsx
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
```

--------------------------------

### Theme with CSS variables

Source: https://ui.shadcn.com/docs/changelog

Demonstrates theming using CSS custom properties (variables) for dynamic styling. Set cssVariables to true in components.json to enable this approach. Components will use semantic class names like bg-background and text-foreground.

```tsx
<div className="bg-background text-foreground" />
```

```json
{
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  }
}
```

--------------------------------

### Advanced Registry Configuration with Authentication

Source: https://ui.shadcn.com/docs/components-json

Configure private registries with authentication headers and query parameters. Supports environment variable expansion using ${VAR_NAME} syntax for secure credential management. Headers like Authorization and X-API-Key can be configured per registry.

```json
{
  "registries": {
    "@private": {
      "url": "https://api.company.com/registry/{name}.json",
      "headers": {
        "Authorization": "Bearer ${REGISTRY_TOKEN}",
        "X-API-Key": "${API_KEY}"
      },
      "params": {
        "version": "latest"
      }
    }
  }
}
```

--------------------------------

### Create Basic Fieldset Form Layout with shadcn Field Components

Source: https://ui.shadcn.com/docs/changelog

Demonstrates a basic form structure using FieldSet, FieldLegend, FieldGroup, and Field components to organize form inputs with labels and descriptions. This pattern creates a well-structured address information form with grouped input fields arranged in a responsive grid layout.

```tsx
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldFieldset() {
  return (
    <div className="w-full max-w-md space-y-6">
      <FieldSet>
        <FieldLegend>Address Information</FieldLegend>
        <FieldDescription>
          We need your address to deliver your order.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="street">Street Address</FieldLabel>
            <Input id="street" type="text" placeholder="123 Main St" />
          </Field>
          <div className="grid grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input id="city" type="text" placeholder="New York" />
            </Field>
            <Field>
              <FieldLabel htmlFor="zip">Postal Code</FieldLabel>
              <Input id="zip" type="text" placeholder="90502" />
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
```

--------------------------------

### Create Navigation Menu with Dropdown Items in TSX

Source: https://ui.shadcn.com/docs/components/navigation-menu

Implements a responsive navigation menu component using Radix UI NavigationMenu primitives with dropdown triggers and content sections. Includes mobile detection via useIsMobile hook and supports dynamic component mapping for menu items. The component uses Next.js Link for routing and Tailwind CSS for styling.

```tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import { useIsMobile } from "@/components/hooks/use-mobile"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response."
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link."
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content."
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time."
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it."
  }
]

export function NavigationMenuDemo() {
  const isMobile = useIsMobile()

  return (
    <NavigationMenu viewport={isMobile}>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6"
                    href="/"
                  >
                    <div className="mb-2 text-lg font-medium sm:mt-4">shadcn/ui</div>
                    <p className="text-muted-foreground text-sm leading-tight">Beautifully designed components built with Tailwind CSS.</p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Introduction">Re-usable components built using Radix UI and Tailwind CSS.</ListItem>
              <ListItem href="/docs/installation" title="Installation">How to install dependencies and structure your app.</ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">Styles for headings, paragraphs, lists...etc</ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:block">
          <NavigationMenuTrigger>List</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">
                    <div className="font-medium">Components</div>
                    <div className="text-muted-foreground">Browse all components in the library.</div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
```

--------------------------------

### Advanced Registry Configuration with Headers and Params

Source: https://ui.shadcn.com/docs/registry/namespace

Configure registries with authentication headers and query parameters using object format. Supports environment variable expansion with ${VAR_NAME} syntax for secure credential management. Use this for private registries requiring authentication or additional configuration.

```json
{
  "registries": {
    "@private": {
      "url": "https://api.company.com/registry/{name}.json",
      "headers": {
        "Authorization": "Bearer ${REGISTRY_TOKEN}",
        "X-API-Key": "${API_KEY}"
      },
      "params": {
        "version": "latest",
        "format": "json"
      }
    }
  }
}
```

--------------------------------

### Commit Pending Changes Before Component Updates

Source: https://ui.shadcn.com/docs/tailwind-v4

This `bash` command sequence is recommended before running CLI tools that might overwrite components. It stages all changes and commits them, ensuring a recoverable state.

```bash
git add .
git commit -m "..."
```

--------------------------------

### Store Registry Tokens in Environment Variables

Source: https://ui.shadcn.com/docs/registry/authentication

Use environment variables to securely store authentication tokens and API keys without committing them to version control. Environment variables are referenced using template syntax in registry configuration.

```bash
REGISTRY_TOKEN=your_secret_token_here
API_KEY=your_api_key_here
```

--------------------------------

### Select Component Import Statement

Source: https://ui.shadcn.com/docs/components/select

Demonstrates the necessary import statement for using Select components from the shadcn/ui library. Includes SelectTrigger, SelectValue, SelectContent, and SelectItem components needed for basic dropdown functionality.

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
```

--------------------------------

### Define ChartConfig with labels, icons, and colors

Source: https://ui.shadcn.com/docs/components/chart

Create a chart configuration object that defines labels, icons, and color values for chart data keys. Supports single colors or theme objects with light/dark variants.

```typescript
import { Monitor } from "lucide-react"

import { type ChartConfig } from "@/components/ui/chart"

const chartConfig = {
  desktop: {
    label: "Desktop",
    icon: Monitor,
    // A color like 'hsl(220, 98%, 61%)' or 'var(--color-name)'
    color: "#2563eb",
    // OR a theme object with 'light' and 'dark' keys
    theme: {
      light: "#2563eb",
      dark: "#dc2626",
    },
  },
} satisfies ChartConfig
```

--------------------------------

### Update All Shadcn UI Components via CLI

Source: https://ui.shadcn.com/docs/tailwind-v4

This `bash` command uses the Shadcn CLI to add or update all components, with the `--overwrite` flag indicating that existing component files will be replaced. It's crucial for applying new component versions or dark mode changes.

```bash
npx shadcn@latest add --all --overwrite
```

--------------------------------

### Create Basic Tooltip with Button Trigger

Source: https://ui.shadcn.com/docs/components/tooltip

Demonstrates a simple tooltip implementation with a button trigger. The tooltip displays 'Add to library' text when the user hovers over or focuses on the button. Uses the TooltipDemo export component pattern with outline button variant.

```tsx
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function TooltipDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  )
}
```

--------------------------------

### Create Basic Command Menu Dialog with Keyboard Shortcut (⌘K) in React (Shadcn UI)

Source: https://ui.shadcn.com/docs/components/command

The `CommandMenu` component provides a simpler command dialog activated by pressing `⌘K` (or `Ctrl+K`). It uses Shadcn UI's `CommandDialog`, `CommandInput`, `CommandList`, `CommandEmpty`, and `CommandGroup` to display a basic list of suggestions. The component manages its open state via `useState` and sets up a global keyboard event listener using `useEffect`.

```tsx
export function CommandMenu() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Calendar</CommandItem>
          <CommandItem>Search Emoji</CommandItem>
          <CommandItem>Calculator</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  )
}
```

--------------------------------

### User-Personalized Registry

Source: https://ui.shadcn.com/docs/registry/authentication

Implement user-personalized component registries based on user preferences. Authenticates the user, retrieves their style and framework preferences, and returns personalized component versions tailored to their settings.

```typescript
async function GET(request: NextRequest) {
  const user = await authenticateUser(request)

  // Get user's style and framework preferences.
  const preferences = await getUserPreferences(user.id)

  // Get personalized component version.
  const component = await getPersonalizedComponent(params.name, preferences)

  return NextResponse.json(component)
}
```

--------------------------------

### Capture Block Screenshots with pnpm

Source: https://ui.shadcn.com/docs/blocks

Captures screenshots of blocks in both light and dark modes for the registry. Required before submitting pull requests for publication.

```bash
pnpm registry:capture
```

--------------------------------

### Wrap React Application with ThemeProvider in Vite

Source: https://ui.shadcn.com/docs/dark-mode/vite

This snippet illustrates how to integrate the custom `ThemeProvider` into the root layout of a React application, typically in `App.tsx`. By wrapping the main application components with `ThemeProvider`, the theme context becomes globally available, allowing any child component to consume or modify the theme. It demonstrates setting a default theme (e.g., "dark") and a storage key for persistence.

```tsx
import { ThemeProvider } from "@/components/theme-provider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  )
}

export default App
```

--------------------------------

### Configure jsconfig.json for import aliases

Source: https://ui.shadcn.com/docs/javascript

Set up the jsconfig.json file to configure path aliases for module imports. This enables using @ as an alias for the root directory, allowing cleaner import statements throughout the JavaScript project.

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

--------------------------------

### Implement Inset Sidebar Variant with `SidebarInset` in TSX

Source: https://ui.shadcn.com/docs/components/sidebar

This code demonstrates the usage of the `inset` sidebar variant, which requires wrapping the main content within a `SidebarInset` component. This ensures proper layout and spacing when the sidebar is rendered in an 'inset' style.

```tsx
<SidebarProvider>
  <Sidebar variant="inset" />
  <SidebarInset>
    <main>{children}</main>
  </SidebarInset>
</SidebarProvider>
```

--------------------------------

### Implement Shadcn UI InputOTP Composition Pattern in JSX/TSX

Source: https://ui.shadcn.com/docs/components/input-otp

This diff illustrates how to refactor your application code to use the new composition pattern for the `InputOTP` component. It demonstrates directly nesting `InputOTPSlot` and `InputOTPSeparator` within `InputOTPGroup` as children, simplifying the component structure.

```diff
<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>
```

--------------------------------

### Set JSON Schema reference

Source: https://ui.shadcn.com/docs/components-json

Adds the JSON Schema reference to components.json for IDE validation and autocomplete support. This ensures the configuration file is properly validated against the shadcn/ui schema.

```json
{
  "$schema": "https://ui.shadcn.com/schema.json"
}
```

--------------------------------

### Search Registry with search Command

Source: https://ui.shadcn.com/docs/cli

The search command queries component registries with optional filtering. Supports searching single or multiple registries with query strings, pagination controls, and registry aliases.

```bash
npx shadcn@latest search [registry]
```

```bash
npx shadcn@latest search @shadcn -q "button"
```

```bash
npx shadcn@latest search @shadcn @v0 @acme
```

```bash
npx shadcn@latest list @acme
```

```bash
Usage: shadcn search|list [options] <registries...>

search items from registries

Arguments:
  registries             the registry names or urls to search items from. Names
                         must be prefixed with @.

Options:
  -c, --cwd <cwd>        the working directory. defaults to the current directory.
  -q, --query <query>    query string
  -l, --limit <number>   maximum number of items to display per registry (default: "100")
  -o, --offset <number>  number of items to skip (default: "0")
  -h, --help             display help for command
```

--------------------------------

### Define Global CSS Variables for Light and Dark Themes (CSS)

Source: https://ui.shadcn.com/docs/theming

This CSS snippet defines a comprehensive set of custom properties (CSS variables) for various UI elements, including colors for background, foreground, cards, popovers, primary/secondary/accent elements, and charts. It includes distinct definitions for both light (default) and dark themes, allowing for easy theme switching by applying the `.dark` class. These variables are typically used in a `globals.css` file to provide a consistent styling foundation across a web application, often in conjunction with UI libraries like shadcn.

```css
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.147 0.004 49.25);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.147 0.004 49.25);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.147 0.004 49.25);
  --primary: oklch(0.216 0.006 56.043);
  --primary-foreground: oklch(0.985 0.001 106.423);
  --secondary: oklch(0.97 0.001 106.424);
  --secondary-foreground: oklch(0.216 0.006 56.043);
  --muted: oklch(0.97 0.001 106.424);
  --muted-foreground: oklch(0.553 0.013 58.071);
  --accent: oklch(0.97 0.001 106.424);
  --accent-foreground: oklch(0.216 0.006 56.043);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.923 0.003 48.717);
  --input: oklch(0.923 0.003 48.717);
  --ring: oklch(0.709 0.01 56.259);
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
  --sidebar: oklch(0.985 0.001 106.423);
  --sidebar-foreground: oklch(0.147 0.004 49.25);
  --sidebar-primary: oklch(0.216 0.006 56.043);
  --sidebar-primary-foreground: oklch(0.985 0.001 106.423);
  --sidebar-accent: oklch(0.97 0.001 106.424);
  --sidebar-accent-foreground: oklch(0.216 0.006 56.043);
  --sidebar-border: oklch(0.923 0.003 48.717);
  --sidebar-ring: oklch(0.709 0.01 56.259);
}

.dark {
  --background: oklch(0.147 0.004 49.25);
  --foreground: oklch(0.985 0.001 106.423);
  --card: oklch(0.216 0.006 56.043);
  --card-foreground: oklch(0.985 0.001 106.423);
  --popover: oklch(0.216 0.006 56.043);
  --popover-foreground: oklch(0.985 0.001 106.423);
  --primary: oklch(0.923 0.003 48.717);
  --primary-foreground: oklch(0.216 0.006 56.043);
  --secondary: oklch(0.268 0.007 34.298);
  --secondary-foreground: oklch(0.985 0.001 106.423);
  --muted: oklch(0.268 0.007 34.298);
  --muted-foreground: oklch(0.709 0.01 56.259);
  --accent: oklch(0.268 0.007 34.298);
  --accent-foreground: oklch(0.985 0.001 106.423);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(1 0 0 / 10%);
  --input: oklch(1 0 0 / 15%);
  --ring: oklch(0.553 0.013 58.071);
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
  --sidebar: oklch(0.216 0.006 56.043);
  --sidebar-foreground: oklch(0.985 0.001 106.423);
  --sidebar-primary: oklch(0.488 0.243 264.376);
  --sidebar-primary-foreground: oklch(0.985 0.001 106.423);
  --sidebar-accent: oklch(0.268 0.007 34.298);
  --sidebar-accent-foreground: oklch(0.985 0.001 106.423);
  --sidebar-border: oklch(1 0 0 / 10%);
  --sidebar-ring: oklch(0.553 0.013 58.071);
}
```

--------------------------------

### Import Card Component and Subcomponents

Source: https://ui.shadcn.com/docs/components/card

Import all Card-related components from the UI components directory. Includes Card container and specialized subcomponents for different content sections.

```tsx
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
```

--------------------------------

### Render Basic Toggle Component with Bookmark Icon (React/TypeScript)

Source: https://ui.shadcn.com/docs/components/toggle

Demonstrates a basic Shadcn UI Toggle component using `BookmarkIcon`, configured with `sm` size, `outline` variant, and custom Tailwind CSS classes for state-based styling.

```tsx
import { BookmarkIcon } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleDemo() {
  return (
    <Toggle
      aria-label="Toggle bookmark"
      size="sm"
      variant="outline"
      className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
    >
      <BookmarkIcon />
      Bookmark
    </Toggle>
  )
}
```

--------------------------------

### Import Shadcn Menubar Components (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/menubar

This snippet demonstrates how to import all necessary sub-components for the Shadcn UI Menubar, including Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, and MenubarTrigger, from the local UI components path. These imports are essential for assembling a functional menubar.

```tsx
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
```

--------------------------------

### Handle Different Authentication Error Scenarios

Source: https://ui.shadcn.com/docs/registry/authentication

Implement error handling for multiple authentication failure scenarios including missing tokens, expired tokens, and insufficient permissions. Returns appropriate HTTP status codes and contextual error messages for each case.

```typescript
if (!token) {
  return NextResponse.json(
    {
      error: "Unauthorized",
      message:
        "Authentication required. Set REGISTRY_TOKEN in your .env.local file",
    },
    { status: 401 }
  )
}

if (isExpiredToken(token)) {
  return NextResponse.json(
    {
      error: "Unauthorized",
      message: "Token expired. Request a new token at company.com/tokens",
    },
    { status: 401 }
  )
}

if (!hasTeamAccess(token, component)) {
  return NextResponse.json(
    {
      error: "Forbidden",
      message: `Component '${component}' is restricted to the Design team`,
    },
    { status: 403 }
  )
}
```

--------------------------------

### ItemContent Component

Source: https://ui.shadcn.com/docs/components/item

Wraps the title and description of an item. Provides consistent spacing and layout for textual content.

```APIDOC
## ItemContent Component

### Description
Wraps the title and description of the item. Provides consistent spacing and layout for textual content. Can be omitted if only a title is needed.

### Props
- **className** (string) - Optional - Additional CSS classes

### Basic Usage
```tsx
<ItemContent>
  <ItemTitle>Item</ItemTitle>
  <ItemDescription>Item</ItemDescription>
</ItemContent>
```
```

--------------------------------

### Render InputGroup Demo - React TypeScript (TSX)

Source: https://ui.shadcn.com/docs/components/input-group

A demo React component showcasing multiple InputGroup configurations with addons, buttons, tooltips, dropdowns, icons, and separators. Dependencies: React, @tabler/icons-react, lucide-react, and local UI components under "@/components/ui/*". Input: none (self-contained component); Output: JSX UI; Limitations: requires project styling and the referenced UI component implementations.

```tsx
import { IconCheck, IconInfoCircle, IconPlus } from "@tabler/icons-react"
import { ArrowUpIcon, Search } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function InputGroupDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="example.com" className="!pl-1" />
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <InputGroupButton className="rounded-full" size="icon-xs">
                <IconInfoCircle />
              </InputGroupButton>
            </TooltipTrigger>
            <TooltipContent>This is content in a tooltip.</TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Ask, Search or Chat..." />
        <InputGroupAddon align="block-end">
          <InputGroupButton
            variant="outline"
            className="rounded-full"
            size="icon-xs"
          >
            <IconPlus />
          </InputGroupButton>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <InputGroupButton variant="ghost">Auto</InputGroupButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              align="start"
              className="[--radius:0.95rem]"
            >
              <DropdownMenuItem>Auto</DropdownMenuItem>
              <DropdownMenuItem>Agent</DropdownMenuItem>
              <DropdownMenuItem>Manual</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <InputGroupText className="ml-auto">52% used</InputGroupText>
          <Separator orientation="vertical" className="!h-4" />
          <InputGroupButton
            variant="default"
            className="rounded-full"
            size="icon-xs"
            disabled
          >
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="@shadcn" />
        <InputGroupAddon align="inline-end">
          <div className="bg-primary text-primary-foreground flex size-4 items-center justify-center rounded-full">
            <IconCheck className="size-3" />
          </div>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

```

```tsx
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

```

```tsx
<InputGroup>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon>
    <SearchIcon />
  </InputGroupAddon>
  <InputGroupAddon align="inline-end">
    <InputGroupButton>Search</InputGroupButton>
  </InputGroupAddon>
</InputGroup>

```

--------------------------------

### shadcn Build Command with Custom Output Directory

Source: https://ui.shadcn.com/docs/cli

Build command with the --output option to specify a custom destination directory for generated JSON files. This allows flexibility in where registry files are written.

```bash
npx shadcn@latest build --output ./public/registry
```

--------------------------------

### Create Basic Search Input with Icon - TypeScript React

Source: https://ui.shadcn.com/docs/changelog

Demonstrates a simple input group with a search icon addon. The InputGroupInput serves as the text input field while InputGroupAddon wraps the SearchIcon, creating a cohesive search interface component.

```typescript
<InputGroup>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon>
    <SearchIcon />
  </InputGroupAddon>
</InputGroup>
```

--------------------------------

### Carousel Options Configuration with Embla Carousel

Source: https://ui.shadcn.com/docs/components/carousel

Demonstrates passing configuration options to the Carousel component via the `opts` prop. Includes `align` and `loop` properties from Embla Carousel library. Refer to Embla Carousel documentation for additional available options.

```tsx
<Carousel
  opts={{
    align: "start",
    loop: true,
  }}
>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
</Carousel>
```

--------------------------------

### Create Lead/Intro Text Component with React and Tailwind CSS

Source: https://ui.shadcn.com/docs/components/typography

Exports a reusable lead paragraph component with larger text size (text-xl), muted foreground color, and semantic emphasis. Used for introductory or summary text sections.

```tsx
export function TypographyLead() {
  return (
    <p className="text-muted-foreground text-xl">
      A modal dialog that interrupts the user with important content and expects
      a response.
    </p>
  )
}
```

--------------------------------

### Import Spinner Component (TypeScript)

Source: https://ui.shadcn.com/docs/components/spinner

Shows the essential import statement required to make the Spinner component available for use in your TypeScript/React files. This line typically assumes a standard Shadcn UI project structure where components are located under `@/components/ui/`. It is a prerequisite for rendering the Spinner in your application.

```tsx
import { Spinner } from "@/components/ui/spinner"
```

--------------------------------

### Import Sheet Components in TSX

Source: https://ui.shadcn.com/docs/components/sheet

Shows the import statement for using Sheet components. Includes Sheet wrapper, trigger, content, and sub-components like header, title, and description.

```tsx
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
```

--------------------------------

### Define Form Structure with Radix UI

Source: https://ui.shadcn.com/docs/components/form

This snippet illustrates the basic structural components of a form using the Shadcn UI `<Form>` and `<FormField>`, integrating Radix UI components like `FormItem`, `FormLabel`, `FormControl`, `FormDescription`, and `FormMessage`. It outlines how to render custom form fields within the `render` prop for flexible UI construction.

```tsx
<Form>
  <FormField
    control={...}
    name="..."
    render={() => (
      <FormItem>
        <FormLabel />
        <FormControl>
          { /* Your form field */}
        </FormControl>
        <FormDescription />
        <FormMessage />
      </FormItem>
    )}
  />
</Form>
```

--------------------------------

### Define Original Vendor Component in Shadcn Registry

Source: https://ui.shadcn.com/docs/registry/namespace

This JSON snippet defines a standard button component from a vendor registry. It specifies the component's name, type, file path for its implementation, and light-mode CSS variables for styling. This serves as the base component to be overridden.

```json
{
  "name": "button",
  "type": "registry:ui",
  "files": [
    {
      "path": "components/ui/button.tsx",
      "type": "registry:ui",
      "content": "// Vendor's button implementation\nexport function Button() { ... }"
    }
  ],
  "cssVars": {
    "light": {
      "--button-bg": "blue"
    }
  }
}
```

--------------------------------

### Basic Authentication Configuration

Source: https://ui.shadcn.com/docs/registry/namespace

Configure HTTP Basic Authentication for registries using Base64-encoded credentials. The encoded credentials are stored in an environment variable and added to the Authorization header with 'Basic' scheme.

```json
{
  "@internal": {
    "url": "https://registry.company.com/{name}.json",
    "headers": {
      "Authorization": "Basic ${BASE64_CREDENTIALS}"
    }
  }
}
```

--------------------------------

### Item Component Import and Basic Usage - TSX

Source: https://ui.shadcn.com/docs/components/item

Shows standard import statement for all Item sub-components and basic JSX structure with header, media, content, actions, and footer.

```tsx
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

<Item>
  <ItemHeader>Item Header</ItemHeader>
  <ItemMedia />
  <ItemContent>
    <ItemTitle>Item</ItemTitle>
    <ItemDescription>Item</ItemDescription>
  </ItemContent>
  <ItemActions />
  <ItemFooter>Item Footer</ItemFooter>
</Item>
```

--------------------------------

### Import Progress Component

Source: https://ui.shadcn.com/docs/components/progress

Standard import statement to include the Progress component from the project's UI components directory. Used at the top of files where the Progress component is needed.

```tsx
import { Progress } from "@/components/ui/progress"
```

--------------------------------

### Multiple Authentication Methods Configuration

Source: https://ui.shadcn.com/docs/registry/namespace

Configure registries that require multiple authentication methods simultaneously. Combines Bearer token, API key, and workspace identification headers with query parameters. Typical for enterprise registries with complex security requirements.

```json
{
  "@enterprise": {
    "url": "https://api.enterprise.com/v2/registry/{name}",
    "headers": {
      "Authorization": "Bearer ${ACCESS_TOKEN}",
      "X-API-Key": "${API_KEY}",
      "X-Workspace-Id": "${WORKSPACE_ID}"
    },
    "params": {
      "version": "latest"
    }
  }
}
```

--------------------------------

### Update Project Dependencies Using PNPM

Source: https://ui.shadcn.com/docs/tailwind-v4

This `bash` command uses `pnpm` to update several specified project dependencies to their latest available versions. It targets `@radix-ui/*`, `cmdk`, `lucide-react`, `recharts`, `tailwind-merge`, and `clsx`.

```bash
pnpm up "@radix-ui/*" cmdk lucide-react recharts tailwind-merge clsx --latest
```

--------------------------------

### Import Switch Component - TSX

Source: https://ui.shadcn.com/docs/components/switch

Basic import statement for the Switch component from the project's UI components directory. Used at the top of any file where you want to use the Switch control.

```tsx
import { Switch } from "@/components/ui/switch"
```

--------------------------------

### Extend Shadcn Component Without Full Replacement

Source: https://ui.shadcn.com/docs/registry/namespace

This JSON configuration demonstrates how to extend an existing Shadcn registry component rather than fully replacing it. It lists the original vendor table as a dependency and then defines a new file for additional functionality, importing the base component for extension.

```json
{
  "name": "extended-table",
  "registryDependencies": ["@vendor/table"],
  "files": [
    {
      "path": "components/ui/table-extended.tsx",
      "content": "import { Table } from '@vendor/table'\n// Add your extensions\nexport function ExtendedTable() { ... }"
    }
  ]
}
```

--------------------------------

### Basic Shadcn Dropdown Menu Usage in TSX

Source: https://ui.shadcn.com/docs/components/dropdown-menu

This snippet illustrates the fundamental structure for implementing a simple dropdown menu. It includes the required imports and the basic JSX markup for rendering a trigger, content, label, separator, and menu items.

```tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
```

```tsx
<DropdownMenu>
  <DropdownMenuTrigger>Open</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Team</DropdownMenuItem>
    <DropdownMenuItem>Subscription</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

--------------------------------

### Create Basic Command Menu Structure in React/TSX

Source: https://ui.shadcn.com/docs/components/command

Shows the fundamental structure of a command menu component with input field, empty state handling, grouped command items organized into categories, separators between groups, and individual command items with keyboard shortcut indicators.

```tsx
<Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>Profile</CommandItem>
      <CommandItem>Billing</CommandItem>
      <CommandItem>Settings</CommandItem>
    </CommandGroup>
  </CommandList>
</Command>
```

--------------------------------

### Claude Code MCP Configuration - .mcp.json

Source: https://ui.shadcn.com/docs/mcp

Configuration file for integrating the shadcn MCP server with Claude Code. Add this to your project's `.mcp.json` file and restart Claude Code, then run `/mcp` to verify the connection status.

```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}
```

--------------------------------

### Track upstream updates with diff command

Source: https://ui.shadcn.com/docs/changelog

Uses the experimental diff command to identify and view changes in upstream components. Run without arguments to list all components with available updates, or specify a component name to see detailed changes in diff format.

```bash
npx shadcn diff
```

```bash
npx shadcn diff alert
```

--------------------------------

### Configure Shadcn Registry for Basic Versioning

Source: https://ui.shadcn.com/docs/registry/namespace

This JSON snippet configures a Shadcn registry to include a basic version parameter in resource URLs. It defines a custom registry alias (`@versioned`) and appends `version=v2` as a query parameter to all requests, enabling fixed version pinning.

```json
{
  "@versioned": {
    "url": "https://registry.example.com/{name}",
    "params": {
      "version": "v2"
    }
  }
}
```

--------------------------------

### Migrate Tailwind CSS `w-* h-*` Utilities to `size-*`

Source: https://ui.shadcn.com/docs/tailwind-v4

This `diff` snippet shows the migration from using separate `w-*` (width) and `h-*` (height) Tailwind utility classes to the consolidated `size-*` utility. This update aligns with Tailwind v3.4 for more concise styling.

```diff
- w-4 h-4
+ size-4
```

--------------------------------

### Textarea Component Import

Source: https://ui.shadcn.com/docs/components/textarea

Standard import statement for the Textarea component. Use this import in any component where you need to use the Textarea functionality.

```tsx
import { Textarea } from "@/components/ui/textarea"
```

--------------------------------

### EmptyDescription Component

Source: https://ui.shadcn.com/docs/components/empty

Display descriptive text in an empty state using EmptyDescription component. Provides context to users about why content is unavailable and supports className prop for custom styling.

```tsx
<EmptyDescription>You do not have any notifications.</EmptyDescription>
```

--------------------------------

### Create a Full Collapsible SidebarMenu Component in TSX

Source: https://ui.shadcn.com/docs/components/sidebar

This TypeScript/TSX snippet demonstrates how to construct a complete, functional and collapsible `SidebarMenu` component using Shadcn UI. It includes defining the data structure for menu items, importing necessary components, and rendering the menu with `Collapsible`, `CollapsibleTrigger`, and `CollapsibleContent` to manage expand/collapse states.

```tsx
"use client"\n\nimport { ChevronRightIcon } from "lucide-react"\n\nimport {\n  Collapsible,\n  CollapsibleContent,\n  CollapsibleTrigger,\n} from "@/components/ui/collapsible"\nimport {\n  Sidebar,\n  SidebarContent,\n  SidebarGroup,\n  SidebarGroupContent,\n  SidebarMenu,\n  SidebarMenuButton,\n  SidebarMenuItem,\n  SidebarMenuSub,\n  SidebarMenuSubButton,\n  SidebarMenuSubItem,\n  SidebarProvider,\n} from "@/components/ui/sidebar"\n\nconst items = [\n  {\n    title: "Getting Started",\n    url: "#",\n    items: [\n      {\n        title: "Installation",\n        url: "#",\n      },\n      {\n        title: "Project Structure",\n        url: "#",\n      },\n    ],\n  },\n  {\n    title: "Building Your Application",\n    url: "#",\n    items: [\n      {\n        title: "Routing",\n        url: "#",\n      },\n      {\n        title: "Data Fetching",\n        url: "#",\n        isActive: true,\n      },\n      {\n        title: "Rendering",\n        url: "#",\n      },\n      {\n        title: "Caching",\n        url: "#",\n      },\n      {\n        title: "Styling",\n        url: "#",\n      },\n      {\n        title: "Optimizing",\n        url: "#",\n      },\n      {\n        title: "Configuring",\n        url: "#",\n      },\n      {\n        title: "Testing",\n        url: "#",\n      },\n      {\n        title: "Authentication",\n        url: "#",\n      },\n      {\n        title: "Deploying",\n        url: "#",\n      },\n      {\n        title: "Upgrading",\n        url: "#",\n      },\n      {\n        title: "Examples",\n        url: "#",\n      },\n    ],\n  },\n  {\n    title: "API Reference",\n    url: "#",\n    items: [\n      {\n        title: "Components",\n        url: "#",\n      },\n      {\n        title: "File Conventions",\n        url: "#",\n      },\n      {\n        title: "Functions",\n        url: "#",\n      },\n      {\n        title: "next.config.js Options",\n        url: "#",\n      },\n      {\n        title: "CLI",\n        url: "#",\n      },\n      {\n        title: "Edge Runtime",\n        url: "#",\n      },\n    ],\n  },\n  {\n    title: "Architecture",\n    url: "#",\n    items: [\n      {\n        title: "Accessibility",\n        url: "#",\n      },\n      {\n        title: "Fast Refresh",\n        url: "#",\n      },\n      {\n        title: "Next.js Compiler",\n        url: "#",\n      },\n      {\n        title: "Supported Browsers",\n        url: "#",\n      },\n      {\n        title: "Turbopack",\n        url: "#",\n      },\n    ],\n  },\n]\n\nexport function AppSidebar() {\n  return (\n    <SidebarProvider>\n      <Sidebar>\n        <SidebarContent>\n          <SidebarGroup>\n            <SidebarGroupContent>\n              <SidebarMenu>\n                {items.map((item, index) => (\n                  <Collapsible\n                    key={index}\n                    className="group/collapsible"\n                    defaultOpen={index === 0}\n                  >\n                    <SidebarMenuItem>\n                      <CollapsibleTrigger asChild>\n                        <SidebarMenuButton>\n                          <span>{item.title}</span>\n                          <ChevronRightIcon className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />\n                        </SidebarMenuButton>\n                      </CollapsibleTrigger>\n                      <CollapsibleContent>\n                        <SidebarMenuSub>\n                          {item.items.map((subItem, subIndex) => (\n                            <SidebarMenuSubItem key={subIndex}>\n                              <SidebarMenuSubButton asChild>\n                                <a href={subItem.url}>\n                                  <span>{subItem.title}</span>\n                                </a>\n                              </SidebarMenuSubButton>\n                            </SidebarMenuSubItem>\n                          ))}\n                        </SidebarMenuSub>\n                      </CollapsibleContent>\n                    </SidebarMenuItem>\n                  </Collapsible>\n                ))}\n              </SidebarMenu>\n            </SidebarGroupContent>\n          </SidebarGroup>\n        </SidebarContent>\n      </Sidebar>\n    </SidebarProvider>\n  )\n}\n
```

--------------------------------

### Define Shadcn Component with Dependency Resolution Order

Source: https://ui.shadcn.com/docs/registry/namespace

This JSON configuration defines a dashboard component with multiple `registryDependencies`. The order of dependencies is crucial as later dependencies can override earlier ones if they target the same resource, illustrating the resolution priority.

```json
{
  "name": "dashboard",
  "registryDependencies": [
    "@shadcn/card", // 1. Resolved first
    "@vendor/chart", // 2. Resolved second
    "@custom/card" // 3. Resolved last (overrides @shadcn/card)
  ]
}
```

--------------------------------

### Implement Shadcn UI SidebarHeader with Dropdown Menu (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/sidebar

This snippet shows how to integrate a `SidebarHeader` component into the `Sidebar` to create a sticky header. It further demonstrates adding a `DropdownMenu` within the header for workspace selection, utilizing `DropdownMenuTrigger`, `DropdownMenuContent`, and `DropdownMenuItem` components for interactive functionality.

```tsx
"use client"

import { ChevronDownIcon } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                    Select Workspace
                    <ChevronDownIcon className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-(--radix-popper-anchor-width)">
                  <DropdownMenuItem>
                    <span>Acme Inc</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Acme Corp.</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-12 items-center justify-between px-4">
          <SidebarTrigger />
        </header>
      </SidebarInset>
    </SidebarProvider>
  )
}
```

```tsx
<Sidebar>
  <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              Select Workspace
              <ChevronDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
            <DropdownMenuItem>
              <span>Acme Inc</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Acme Corp.</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
</Sidebar>
```

--------------------------------

### Implement Sidebar Menu with Navigation Items (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/sidebar

This snippet enhances the `AppSidebar` component by adding a `SidebarMenu` with dynamic navigation items. It utilizes `SidebarGroup`, `SidebarGroupLabel`, `SidebarGroupContent`, `SidebarMenu`, `SidebarMenuButton`, and `SidebarMenuItem` to structure the menu with icons and links, demonstrating a common pattern for application navigation.

```tsx
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
```

--------------------------------

### Build Menubar Component with TypeScript React

Source: https://ui.shadcn.com/docs/components/menubar

Creates a complete menubar with multiple menu sections (File, Edit, View, Profiles) demonstrating various menu item types including nested submenus, checkbox items, radio groups, keyboard shortcuts, and disabled states. The component imports all necessary menubar subcomponents from the UI library and renders an interactive desktop-style menu.

```tsx
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

export function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New Incognito Window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print... <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find Next</MenubarItem>
              <MenubarItem>Find Previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
          <MenubarCheckboxItem checked>
            Always Show Full URLs
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem inset>
            Reload <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled inset>
            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Toggle Fullscreen</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Hide Sidebar</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <MenubarContent>
          <MenubarRadioGroup value="benoit">
            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
          </MenubarRadioGroup>
          <MenubarSeparator />
          <MenubarItem inset>Edit...</MenubarItem>
          <MenubarSeparator />
          <MenubarItem inset>Add Profile...</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
```

--------------------------------

### Configure Multiple Registries - components.json

Source: https://ui.shadcn.com/docs/mcp

Configuration for multiple component registries including namespaced registries and private registries with authentication headers. Supports both simple URL strings and complex objects with authorization headers using environment variable interpolation.

```json
{
  "registries": {
    "@acme": "https://registry.acme.com/{name}.json",
    "@internal": {
      "url": "https://internal.company.com/{name}.json",
      "headers": {
        "Authorization": "Bearer ${REGISTRY_TOKEN}"
      }
    }
  }
}
```

--------------------------------

### Group multiple Kbd components with KbdGroup in TSX

Source: https://ui.shadcn.com/docs/changelog

Illustrates how to use the `KbdGroup` component to display a sequence of keyboard keys together. This is useful for representing key combinations or multiple key presses in a cohesive manner.

```tsx
<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <Kbd>B</Kbd>
</KbdGroup>
```

--------------------------------

### Theme with Tailwind utility classes

Source: https://ui.shadcn.com/docs/changelog

Demonstrates theming using Tailwind CSS utility classes instead of CSS variables. Set cssVariables to false in components.json to enable this approach. Components will use hardcoded utility classes like bg-zinc-950 and dark mode variants.

```tsx
<div className="bg-zinc-950 dark:bg-white" />
```

```json
{
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": false
  }
}
```

--------------------------------

### Import Popover Components in TSX

Source: https://ui.shadcn.com/docs/components/popover

Standard import statement for using the Popover, PopoverContent, and PopoverTrigger components from the UI components directory.

```typescript
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
```

--------------------------------

### Build Complex Payment Form with Multiple Controls

Source: https://ui.shadcn.com/docs/changelog

Create a comprehensive payment form demonstrating Field usage with diverse form controls including text inputs, selects, checkboxes, and textareas. Shows FieldLegend, FieldSeparator, and nested FieldGroups for complex layouts.

```tsx
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function FieldDemo() {
  return (
    <div className="w-full max-w-md">
      <form>
        <FieldGroup>
          <FieldSet>
            <FieldLegend>Payment Method</FieldLegend>
            <FieldDescription>
              All transactions are secure and encrypted
            </FieldDescription>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Name on Card
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="Evil Rabbit"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                  Card Number
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-number-uw1"
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <FieldDescription>
                  Enter your 16-digit card number
                </FieldDescription>
              </Field>
              <div className="grid grid-cols-3 gap-4">
                <Field>
                  <FieldLabel htmlFor="checkout-exp-month-ts6">
                    Month
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-exp-month-ts6">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01">01</SelectItem>
                      <SelectItem value="02">02</SelectItem>
                      <SelectItem value="03">03</SelectItem>
                      <SelectItem value="04">04</SelectItem>
                      <SelectItem value="05">05</SelectItem>
                      <SelectItem value="06">06</SelectItem>
                      <SelectItem value="07">07</SelectItem>
                      <SelectItem value="08">08</SelectItem>
                      <SelectItem value="09">09</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
                <Field>
                  <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                    Year
                  </FieldLabel>
                  <Select defaultValue="">
                    <SelectTrigger id="checkout-7j9-exp-year-f59">
                      <SelectValue placeholder="YYYY" />
                    </SelectTrigger>
                    <SelectContent>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
            </FieldGroup>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  )
}
```

--------------------------------

### Build Multiple Input Types with Icons - TypeScript React

Source: https://ui.shadcn.com/docs/changelog

Creates a grid layout displaying various input group configurations including search, email, credit card, and star rating inputs. Each uses different icon addons and positioning (inline-start/inline-end) to demonstrate the component's flexibility for diverse input scenarios.

```typescript
import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export function InputGroupIcon() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput type="email" placeholder="Enter your email" />
        <InputGroupAddon>
          <MailIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon>
          <CreditCardIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <CheckIcon />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="Card number" />
        <InputGroupAddon align="inline-end">
          <StarIcon />
          <InfoIcon />
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

--------------------------------

### Enable React Server Components support

Source: https://ui.shadcn.com/docs/components-json

Enables or disables React Server Components (RSC) support. When set to true, the CLI automatically adds 'use client' directives to client components.

```json
{
  "rsc": true | false
}
```

--------------------------------

### ToggleGroup Component API

Source: https://ui.shadcn.com/docs/components/toggle-group

Documents the available properties for the ToggleGroup component, which acts as a wrapper for toggle group items.

```APIDOC
## Component: ToggleGroup

### Description
The main component that wraps toggle group items.

### Props
- **type** (`"single" | "multiple"`) - Default: `"single"` - Determines whether only one item can be selected or multiple.
- **variant** (`"default" | "outline"`) - Default: `"default"` - Defines the visual style of the toggle group.
- **size** (`"default" | "sm" | "lg"`) - Default: `"default"` - Sets the size of the toggle group items.
- **spacing** (`number`) - Default: `0` - Adds spacing between toggle group items.
- **className** (`string`) - No Default - Custom CSS classes to apply to the component.

### Usage Example
```tsx
<ToggleGroup type="single" variant="outline" size="sm">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
</ToggleGroup>
```
```

--------------------------------

### Implement Custom ChartTooltip with labelKey and nameKey Props

Source: https://ui.shadcn.com/docs/components/chart

Create a ChartTooltip component with ChartTooltipContent that uses custom keys to map data properties to tooltip labels and names. The labelKey references the 'visitors' property for the label, and nameKey references 'browser' for tooltip item names.

```tsx
<ChartTooltip
  content={<ChartTooltipContent labelKey="visitors" nameKey="browser" />}
/>
```

--------------------------------

### Chart Tooltip Integration with ChartTooltipContent

Source: https://ui.shadcn.com/docs/components/chart

Basic usage pattern for integrating the ChartTooltip component with ChartTooltipContent to render custom tooltips in chart components. Pass ChartTooltipContent as the content prop.

```typescript
<ChartTooltip content={<ChartTooltipContent />} />
```

--------------------------------

### Implement Rate Limiting for Registry Protection

Source: https://ui.shadcn.com/docs/registry/authentication

Add rate limiting middleware to protect registry endpoints from abuse and unauthorized access attempts. Limits requests per IP address within a specified time window using express-rate-limit.

```typescript
import rateLimit from "express-rate-limit"

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
})

app.use("/registry", limiter)
```

--------------------------------

### Enable or disable CSS variables for theming

Source: https://ui.shadcn.com/docs/components-json

Determines whether components use CSS variables (true) or Tailwind utility classes (false) for theming. This cannot be changed after initialization; components must be reinstalled to switch methods.

```json
{
  "tailwind": {
    "cssVariables": true | false
  }
}
```

--------------------------------

### Import Button Component

Source: https://ui.shadcn.com/docs/components/button

Basic import statement to use the Button component in your React application. Import from the UI components directory.

```typescript
import { Button } from "@/components/ui/button"
```

--------------------------------

### Query Parameter Authentication

Source: https://ui.shadcn.com/docs/registry/namespace

Pass authentication credentials as query parameters in the registry URL. Supports multiple parameters like api_key, client_id, and request signatures. Useful for registries that require query-based authentication instead of headers.

```json
{
  "@secure": {
    "url": "https://registry.example.com/{name}.json",
    "params": {
      "api_key": "${API_KEY}",
      "client_id": "${CLIENT_ID}",
      "signature": "${REQUEST_SIGNATURE}"
    }
  }
}
```

--------------------------------

### Implement DropdownMenu within a full Sidebar component in TypeScript/React

Source: https://ui.shadcn.com/docs/components/sidebar

This TypeScript/React component demonstrates a complete integration of Shadcn's `DropdownMenu` within a custom `Sidebar` structure. It renders a list of projects, where each project entry includes a `SidebarMenuAction` that triggers a `DropdownMenu` with options like 'Edit Project' and 'Delete Project'. Dependencies include `lucide-react` for icons and various Shadcn UI components for both `DropdownMenu` and `Sidebar`.

```tsx
"use client"

import {
  FrameIcon,
  LifeBuoyIcon,
  MapIcon,
  MoreHorizontalIcon,
  PieChartIcon,
  SendIcon,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

const projects = [
  {
    name: "Design Engineering",
    url: "#",
    icon: FrameIcon,
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: PieChartIcon,
  },
  {
    name: "Travel",
    url: "#",
    icon: MapIcon,
  },
  {
    name: "Support",
    url: "#",
    icon: LifeBuoyIcon,
  },
  {
    name: "Feedback",
    url: "#",
    icon: SendIcon,
  },
]

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project.name}>
                    <SidebarMenuButton
                      asChild
                      className="group-has-[[data-state=open]]/menu-item:bg-sidebar-accent"
                    >
                      <a href={project.url}>
                        <project.icon />
                        <span>{project.name}</span>
                      </a>
                    </SidebarMenuButton>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuAction>
                          <MoreHorizontalIcon />
                          <span className="sr-only">More</span>
                        </SidebarMenuAction>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent side="right" align="start">
                        <DropdownMenuItem>
                          <span>Edit Project</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <span>Delete Project</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}
```

--------------------------------

### Import Kbd and KbdGroup components in TypeScript/TSX

Source: https://ui.shadcn.com/docs/changelog

Demonstrates how to import the `Kbd` and `KbdGroup` components from the shadcn UI library. These imports are necessary to use the keyboard key display components in a React application.

```tsx
import { Kbd, KbdGroup } from "@/components/ui/kbd"
```

--------------------------------

### Build Combobox with React and shadcn/ui

Source: https://ui.shadcn.com/docs/components/combobox

A fully functional combobox component demonstrating autocomplete search with a dropdown menu. Uses React state to manage open/closed state and selected value, integrates Popover for positioning and Command for search functionality. Supports keyboard navigation and displays a checkmark for the selected item.

```tsx
"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : "Select framework..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
```

--------------------------------

### Basic Carousel Structure with TypeScript React

Source: https://ui.shadcn.com/docs/components/carousel

Minimal carousel layout showing the required component hierarchy with three sample items and navigation controls. Demonstrates the basic structure needed for any carousel implementation.

```tsx
<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

--------------------------------

### Item Header with Grid Layout and Images in TSX

Source: https://ui.shadcn.com/docs/components/item

Creates a responsive grid layout of Item components displaying model cards with images, titles, and descriptions. Uses Next.js Image component for optimization and maps through a models array to render multiple items with outline variants.

```tsx
import Image from "next/image"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item"

const models = [
  {
    name: "v0-1.5-sm",
    description: "Everyday tasks and UI generation.",
    image:
      "https://images.unsplash.com/photo-1650804068570-7fb2e3dbf888?q=80&w=640&auto=format&fit=crop",
    credit: "Valeria Reverdo on Unsplash",
  },
  {
    name: "v0-1.5-lg",
    description: "Advanced thinking or reasoning.",
    image:
      "https://images.unsplash.com/photo-1610280777472-54133d004c8c?q=80&w=640&auto=format&fit=crop",
    credit: "Michael Oeser on Unsplash",
  },
  {
    name: "v0-2.0-mini",
    description: "Open Source model for everyone.",
    image:
      "https://images.unsplash.com/photo-1602146057681-08560aee8cde?q=80&w=640&auto=format&fit=crop",
    credit: "Cherry Laithang on Unsplash",
  },
]

export function ItemHeaderDemo() {
  return (
    <div className="flex w-full max-w-xl flex-col gap-6">
      <ItemGroup className="grid grid-cols-3 gap-4">
        {models.map((model) => (
          <Item key={model.name} variant="outline">
            <ItemHeader>
              <Image
                src={model.image}
                alt={model.name}
                width={128}
                height={128}
                className="aspect-square w-full rounded-sm object-cover"
              />
            </ItemHeader>
            <ItemContent>
              <ItemTitle>{model.name}</ItemTitle>
              <ItemDescription>{model.description}</ItemDescription>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}
```

--------------------------------

### Add Keyboard Shortcut to React Input Group

Source: https://ui.shadcn.com/docs/components/kbd

Demonstrates using the Kbd component within an InputGroupAddon to display a keyboard shortcut relevant to an input field. This provides an accessible visual hint, such as '⌘K' for initiating a search.

```tsx
import { SearchIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"

export function KbdInputGroup() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-6">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
```

--------------------------------

### Render Basic shadcn/ui Badge with Variants (TypeScript/React)

Source: https://ui.shadcn.com/docs/components/badge

Shows how to render a basic `shadcn/ui` Badge component, specifying different `variant` props such as `default`, `outline`, `secondary`, or `destructive`. This allows for quick styling changes to fit various UI contexts.

```tsx
<Badge variant="default | outline | secondary | destructive">Badge</Badge>
```

--------------------------------

### Basic Label Usage with Form Input

Source: https://ui.shadcn.com/docs/components/label

Demonstrates basic usage of the Label component with a form input field. The htmlFor attribute connects the label to an input with a matching id attribute, providing accessibility and improved user interaction.

```tsx
<Label htmlFor="email">Your email address</Label>
```

--------------------------------

### Implement Theme Mode Toggle Component

Source: https://ui.shadcn.com/docs/dark-mode/next

Create a ModeToggle component that provides a dropdown menu for switching between light, dark, and system themes. Uses lucide-react icons and shadcn/ui components for the UI, with the useTheme hook to manage theme changes.

```typescript
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

--------------------------------

### Test Authenticated Registry with curl

Source: https://ui.shadcn.com/docs/registry/authentication

Verify authenticated registry connectivity using curl command-line tool with bearer token authentication. Tests that the registry endpoint is accessible and properly configured.

```bash
curl -H "Authorization: Bearer your_token" \
  https://registry.company.com/button.json
```

--------------------------------

### Configure components.json for JavaScript

Source: https://ui.shadcn.com/docs/javascript

Set up the components.json configuration file to disable TypeScript by setting the tsx flag to false. This file specifies project styling, component rendering mode, Tailwind CSS configuration, icon library, and path aliases for component imports.

```json
{
  "style": "new-york",
  "rsc": false,
  "tsx": false,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "zinc",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

--------------------------------

### Complete Bar Chart with XAxis and Tooltip

Source: https://ui.shadcn.com/docs/components/chart

Full React component featuring a bar chart with both XAxis and tooltip components enabled. Includes sample monthly data comparing desktop and mobile metrics with custom configuration for axis formatting and tooltip display.

```tsx
"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```

--------------------------------

### Complete Bar Chart Component with CartesianGrid

Source: https://ui.shadcn.com/docs/components/chart

Full React component implementation combining data, configuration, and CartesianGrid for an enhanced bar chart visualization. Includes accessibility layer and responsive sizing with CSS classes.

```typescript
"use client"

import { Bar, BarChart, CartesianGrid } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```

--------------------------------

### Build Bar Chart Component with Recharts

Source: https://ui.shadcn.com/docs/components/chart

Create a React component that renders a responsive bar chart using ChartContainer, BarChart, and Bar components from Recharts. Requires min-h CSS class for responsive height and uses CSS variables for dynamic color theming.

```typescript
"use client"

import { Bar, BarChart } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig

export function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
```

--------------------------------

### Display Single Keyboard Key with React Kbd

Source: https://ui.shadcn.com/docs/components/kbd

Illustrates the basic usage of the Kbd component to render a single keyboard key. This is useful for representing individual key presses or as part of a larger key combination.

```tsx
<Kbd>Ctrl</Kbd>
```

--------------------------------

### SidebarMenuBadge with Projects List - React TSX

Source: https://ui.shadcn.com/docs/components/sidebar

Complete sidebar implementation using SidebarMenuBadge to display badge counts next to project menu items. Uses lucide-react icons and maps through a projects array to render menu items with badges. Requires SidebarProvider wrapper and imports from @/components/ui/sidebar.

```typescript
"use client"

import {
  FrameIcon,
  LifeBuoyIcon,
  MapIcon,
  PieChartIcon,
  SendIcon,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

const projects = [
  {
    name: "Design Engineering",
    url: "#",
    icon: FrameIcon,
    badge: "24",
  },
  {
    name: "Sales & Marketing",
    url: "#",
    icon: PieChartIcon,
    badge: "12",
  },
  {
    name: "Travel",
    url: "#",
    icon: MapIcon,
    badge: "3",
  },
  {
    name: "Support",
    url: "#",
    icon: LifeBuoyIcon,
    badge: "21",
  },
  {
    name: "Feedback",
    url: "#",
    icon: SendIcon,
    badge: "8",
  },
]

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Projects</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {projects.map((project) => (
                  <SidebarMenuItem key={project.name}>
                    <SidebarMenuButton
                      asChild
                      className="group-has-[[data-state=open]]/menu-item:bg-sidebar-accent"
                    >
                      <a href={project.url}>
                        <project.icon />
                        <span>{project.name}</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>{project.badge}</SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}
```

--------------------------------

### Implement Command Dialog with Keyboard Shortcut (⌘J) in React (Shadcn UI)

Source: https://ui.shadcn.com/docs/components/command

This `CommandDialogDemo` component showcases a feature-rich command dialog that opens when the user presses `⌘J` (or `Ctrl+J`). It leverages several Shadcn UI components like `CommandDialog`, `CommandInput`, `CommandList`, `CommandGroup`, and `CommandItem`, along with `lucide-react` icons, managing its open state with `useState` and a global keyboard event listener via `useEffect`.

```tsx
"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <p className="text-muted-foreground text-sm">
        Press{" "}
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
          <span className="text-xs">⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>
              <User />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
```

--------------------------------

### Create Bar Chart with ChartContainer and ChartTooltip

Source: https://ui.shadcn.com/docs/components/chart

Demonstrates how to build a bar chart using Recharts components with custom ChartContainer and ChartTooltipContent components. The component accepts data and renders a bar chart with tooltip functionality. This pattern follows composition principles where Recharts components remain unwrapped, allowing direct access to official upgrade paths.

```typescript
import { Bar, BarChart } from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

export function MyChart() {
  return (
    <ChartContainer>
      <BarChart data={data}>
        <Bar dataKey="value" />
        <ChartTooltip content={<ChartTooltipContent />} />
      </BarChart>
    </ChartContainer>
  )
}
```

--------------------------------

### Choose TypeScript or JavaScript for components

Source: https://ui.shadcn.com/docs/components-json

Controls the file format for generated components. Set to true for TypeScript (.tsx) or false for JavaScript (.jsx). Determines the language syntax used in all generated component files.

```json
{
  "tsx": true | false
}
```

--------------------------------

### Input Component with File Upload - TypeScript/React

Source: https://ui.shadcn.com/docs/components/input

Creates an Input component configured for file uploads, wrapped with a Label component and container styling. Demonstrates how to handle file input types with proper labeling and layout.

```tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputFile() {
  return (
    <div className="grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>
  )
}
```

--------------------------------

### Partial Override for Multi-File Shadcn Component

Source: https://ui.shadcn.com/docs/registry/namespace

This JSON configuration shows how to partially override a multi-file Shadcn component from a vendor. It declares the vendor component as a dependency and then provides a custom implementation for only a specific file within that component, leaving other files untouched.

```json
{
  "name": "custom-auth",
  "registryDependencies": [
    "@vendor/auth" // Has multiple files
  ],
  "files": [
    {
      "path": "lib/auth-server.ts",
      "type": "registry:lib",
      "content": "// Your custom auth server"
    }
  ]
}
```

--------------------------------

### Basic Switch Component Usage - TSX

Source: https://ui.shadcn.com/docs/components/switch

Minimal implementation of the Switch component. Renders a simple toggle control without any additional props or labels. Can be enhanced with event handlers and state management as needed.

```tsx
<Switch />
```

--------------------------------

### Create Custom Shadcn Registry Override for Component

Source: https://ui.shadcn.com/docs/registry/namespace

This JSON snippet illustrates how to create a custom override for a third-party component. It imports the original vendor button using `registryDependencies` and then modifies the `cssVars` property to change the button's background color, demonstrating a simple customization.

```json
{
  "name": "custom-button",
  "type": "registry:ui",
  "registryDependencies": [
    "@vendor/button" // Import original first
  ],
  "cssVars": {
    "light": {
      "--button-bg": "purple" // Override the color
    }
  }
}
```

--------------------------------

### Input with Prefix and Button Suffix in ButtonGroup

Source: https://ui.shadcn.com/docs/changelog

A simple ButtonGroup pattern demonstrating how to add prefix text and a suffix button to an input field. This basic structure shows the composition of ButtonGroupText, Input, and Button components for creating input addon patterns.

```tsx
<ButtonGroup>
  <ButtonGroupText>Prefix</ButtonGroupText>
  <Input placeholder="Type something here..." />
  <Button>Button</Button>
</ButtonGroup>
```

--------------------------------

### Update Shadcn UI InputOTP Package with npm

Source: https://ui.shadcn.com/docs/components/input-otp

This command updates the `input-otp` package to its latest version using npm. It ensures that you have the most recent features, bug fixes, and API changes for the component.

```bash
npm install input-otp@latest
```

--------------------------------

### SVG TanStack Router Icon Component

Source: https://ui.shadcn.com/docs/installation

A scalable SVG icon component for TanStack Router with custom styling using Tailwind CSS classes. The icon uses a complex path definition with multiple geometric shapes and is wrapped in a linked card component for navigation documentation.

```JSX
<LinkedCard href="/docs/installation/manual">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-10 w-10"
    fill="currentColor"
  >
    <path d="M6.93 13.688a.343.343 0 0 1 .468.132l.063.106c.48.851.98 1.66 1.5 2.426a35.65 35.65 0 0 0 2.074 2.742.345.345 0 0 1-.039.484l-.074.066c-2.543 2.223-4.191 2.665-4.953 1.333-.746-1.305-.477-3.672.808-7.11a.344.344 0 0 1 .153-.18ZM17.75 16.3a.34.34 0 0 1 .395.27l.02.1c.628 3.286.187 4.93-1.325 4.93-1.48 0-3.36-1.402-5.649-4.203a.327.327 0 0 1-.074-.222c0-.188.156-.34.344-.34h.121a32.984 32.984 0 0 0 2.809-.098c1.07-.086 2.191-.23 3.359-.437zm.871-6.977a.353.353 0 0 1 .445-.21l.102.034c3.262 1.11 4.504 2.332 3.719 3.664-.766 1.305-2.993 2.254-6.684 2.848a.362.362 0 0 1-.238-.047.343.343 0 0 1-.125-.476l.062-.106a34.07 34.07 0 0 0 1.367-2.523c.477-.989.93-2.051 1.352-3.184zM7.797 8.34a.362.362 0 0 1 .238.047.343.343 0 0 1 .125.476l-.062.106a34.088 34.088 0 0 0-1.367 2.523c-.477.988-.93 2.051-1.352 3.184a.353.353 0 0 1-.445.21l-.102-.034C1.57 13.742.328 12.52 1.113 11.188 1.88 9.883 4.106 8.934 7.797 8.34Zm5.281-3.984c2.543-2.223 4.192-2.664 4.953-1.332.746 1.304.477 3.671-.808 7.109a.344.344 0 0 1-.153.18.343.343 0 0 1-.468-.133l-.063-.106a34.64 34.64 0 0 0-1.5-2.426 35.65 35.65 0 0 0-2.074-2.742.345.345 0 0 1 .039-.484ZM7.285 2.274c1.48 0 3.364 1.402 5.649 4.203a.349.349 0 0 1 .078.218.348.348 0 0 1-.348.344l-.117-.004a34.584 34.584 0 0 0-2.809.102 35.54 35.54 0 0 0-3.363.437.343.343 0 0 1-.394-.273l-.02-.098c-.629-3.285-.188-4.93 1.324-4.93Zm2.871 5.812h3.688a.638.638 0 0 1 .55.316l1.848 3.22a.644.644 0 0 1 0 .628l-1.847 3.223a.638.638 0 0 1-.551.316h-3.688a.627.627 0 0 1-.547-.316L7.758 12.25a.644.644 0 0 1 0-.629L9.61 8.402a.627.627 0 0 1 .546-.316Zm3.23.793a.638.638 0 0 1 .552.316l1.39 2.426a.644.644 0 0 1 0 .629l-1.39 2.43a.638.638 0 0 1-.551.316h-2.774a.627.627 0 0 1-.546-.316l-1.395-2.43a.644.644 0 0 1 0-.629l1.395-2.426a.627.627 0 0 1 .546-.316Zm-.491.867h-1.79a.624.624 0 0 0-.546.316l-.899 1.56a.644.644 0 0 0 0 .628l.899 1.563a.632.632 0 0 0 .547.316h1.789a.632.632 0 0 0 .547-.316l.898-1.563a.644.644 0 0 0 0-.629l-.898-1.558a.624.624 0 0 0-.547-.317Zm-.477.828c.227 0 .438.121.547.317l.422.73a.625.625 0 0 1 0 .629l-.422.734a.627.627 0 0 1-.547.317h-.836a.632.632 0 0 1-.547-.317l-.422-.734a.625.625 0 0 1 0-.629l.422-.73a.632.632 0 0 1 .547-.317zm-.418.817a.548.548 0 0 0-.473.273.547.547 0 0 0 0 .547.544.544 0 0 0 .473.27.544.544 0 0 0 .473-.27.547.547 0 0 0 0-.547.548.548 0 0 0-.473-.273Zm-4.422.546h.98" />
  </svg>
  <p className="mt-2 font-medium">TanStack Router</p>
</LinkedCard>
```

--------------------------------

### Navigation Menu with Complex Content Layout - React

Source: https://ui.shadcn.com/docs/components/navigation-menu

Advanced navigation menu with multiple content sections, descriptions, and Tailwind CSS styling. Includes documentation links with supporting text and responsive visibility controls.

```typescript
<NavigationMenuContent>
  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
    <li>
      <NavigationMenuLink asChild>
        <Link href="#">
          <div className="font-medium">Documentation</div>
          <div className="text-muted-foreground">
            Learn how to use the library.
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
    <li>
      <NavigationMenuLink asChild>
        <Link href="#">
          <div className="font-medium">Blog</div>
          <div className="text-muted-foreground">
            Read our latest blog posts.
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  </ul>
</NavigationMenuContent>
```

--------------------------------

### Basic Empty State with Icon in TypeScript React

Source: https://ui.shadcn.com/docs/changelog

Creates a basic empty state component with an icon media variant, title, description, and a button action. This demonstrates the simplest usage of the Empty component for displaying a message-free state.

```typescript
<Empty>
  <EmptyMedia variant="icon">
    <InboxIcon />
  </EmptyMedia>
  <EmptyTitle>No messages</EmptyTitle>
  <EmptyDescription>You don't have any messages yet.</EmptyDescription>
  <EmptyContent>
    <Button>Send a message</Button>
  </EmptyContent>
</Empty>
```

--------------------------------

### Add input-group tooltips (React TSX)

Source: https://ui.shadcn.com/docs/components/input-group

Shows how to attach tooltip triggers to InputGroup buttons to provide contextual help or instructions. Depends on project Tooltip primitives, InputGroup components, and lucide-react icons. Inputs are text/password/API-key input fields; outputs are tooltip overlays. Limitations: tooltips rely on library positioning and the project's Tooltip implementation.

```tsx
import { HelpCircle, InfoIcon } from "lucide-react"\n\nimport {\n  InputGroup,\n  InputGroupAddon,\n  InputGroupButton,\n  InputGroupInput,\n} from "@/components/ui/input-group"\nimport {\n  Tooltip,\n  TooltipContent,\n  TooltipTrigger,\n} from "@/components/ui/tooltip"\n\nexport function InputGroupTooltip() {\n  return (\n    <div className="grid w-full max-w-sm gap-4">\n      <InputGroup>\n        <InputGroupInput placeholder="Enter password" type="password" />\n        <InputGroupAddon align="inline-end">\n          <Tooltip>\n            <TooltipTrigger asChild>\n              <InputGroupButton\n                variant="ghost"\n                aria-label="Info"\n                size="icon-xs"\n              >\n                <InfoIcon />\n              </InputGroupButton>\n            </TooltipTrigger>\n            <TooltipContent>\n              <p>Password must be at least 8 characters</p>\n            </TooltipContent>\n          </Tooltip>\n        </InputGroupAddon>\n      </InputGroup>\n      <InputGroup>\n        <InputGroupInput placeholder="Your email address" />\n        <InputGroupAddon align="inline-end">\n          <Tooltip>\n            <TooltipTrigger asChild>\n              <InputGroupButton\n                variant="ghost"\n                aria-label="Help"\n                size="icon-xs"\n              >\n                <HelpCircle />\n              </InputGroupButton>\n            </TooltipTrigger>\n            <TooltipContent>\n              <p>We&apos;ll use this to send you notifications</p>\n            </TooltipContent>\n          </Tooltip>\n        </InputGroupAddon>\n      </InputGroup>\n      <InputGroup>\n        <InputGroupInput placeholder="Enter API key" />\n        <Tooltip>\n          <TooltipTrigger asChild>\n            <InputGroupAddon>\n              <InputGroupButton\n                variant="ghost"\n                aria-label="Help"\n                size="icon-xs"\n              >\n                <HelpCircle />\n              </InputGroupButton>\n            </InputGroupAddon>\n          </TooltipTrigger>\n          <TooltipContent side="left">\n            <p>Click for help with API keys</p>\n          </TooltipContent>\n        </Tooltip>\n      </InputGroup>\n    </div>\n  )\n}\n
```

--------------------------------

### Import Shadcn UI Dialog components in React

Source: https://ui.shadcn.com/docs/components/dialog

Imports the necessary components for using the Shadcn UI Dialog, including Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, and DialogTrigger. These components are sourced from the local UI library, enabling the creation of interactive dialogs in a React application.

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
```

--------------------------------

### Textarea Minimal Usage

Source: https://ui.shadcn.com/docs/components/textarea

Renders a basic Textarea element without any props or customization. This is the simplest form of the component.

```tsx
<Textarea />
```

--------------------------------

### Import ChartLegend and ChartLegendContent components

Source: https://ui.shadcn.com/docs/components/chart

Import the legend components from the ui/chart module. These components are required to display a legend in your chart.

```typescript
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart"
```

--------------------------------

### Import Skeleton Component - TypeScript React

Source: https://ui.shadcn.com/docs/components/skeleton

Standard import statement for using the Skeleton component in TypeScript React applications. Imports from the local components directory following shadcn project structure.

```typescript
import { Skeleton } from "@/components/ui/skeleton"
```

--------------------------------

### Import AspectRatio Component in TypeScript React

Source: https://ui.shadcn.com/docs/components/aspect-ratio

Basic import statement for the AspectRatio component from the shadcn/ui components directory. This import is required before using the component in any React component.

```typescript
import { AspectRatio } from "@/components/ui/aspect-ratio"
```

--------------------------------

### Display Item List with Images in Next.js/TypeScript

Source: https://ui.shadcn.com/docs/components/item

Renders a music playlist using Next.js Image component for optimization and shadcn UI Item components. Maps through a music array to display each song with title, album, artist, and duration. Uses variant="outline" styling and includes grayscale image filtering.

```tsx
import Image from "next/image"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

const music = [
  {
    title: "Midnight City Lights",
    artist: "Neon Dreams",
    album: "Electric Nights",
    duration: "3:45",
  },
  {
    title: "Coffee Shop Conversations",
    artist: "The Morning Brew",
    album: "Urban Stories",
    duration: "4:05",
  },
  {
    title: "Digital Rain",
    artist: "Cyber Symphony",
    album: "Binary Beats",
    duration: "3:30",
  },
]

export function ItemImage() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup className="gap-4">
        {music.map((song) => (
          <Item key={song.title} variant="outline" asChild role="listitem">
            <a href="#">
              <ItemMedia variant="image">
                <Image
                  src={`https://avatar.vercel.sh/${song.title}`}
                  alt={song.title}
                  width={32}
                  height={32}
                  className="object-cover grayscale"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="line-clamp-1">
                  {song.title} - <span className="text-muted-foreground">{song.album}</span>
                </ItemTitle>
                <ItemDescription>{song.artist}</ItemDescription>
              </ItemContent>
              <ItemContent className="flex-none text-center">
                <ItemDescription>{song.duration}</ItemDescription>
              </ItemContent>
            </a>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}
```

--------------------------------

### Enforce HTTPS for Registry URLs (JSON)

Source: https://ui.shadcn.com/docs/registry/namespace

Shows how to configure registry URLs in `components.json`, distinguishing between recommended secure HTTPS connections and insecure HTTP connections. It emphasizes the importance of using HTTPS for encrypted transport and credential protection.

```json
{
  "registries": {
    "@secure": "https://registry.example.com/{name}.json",
    "@insecure": "http://registry.example.com/{name}.json"
  }
}
```

--------------------------------

### Create Link Styled as Button using asChild Prop in React/TSX

Source: https://ui.shadcn.com/docs/components/button

Demonstrates using the Button component's asChild prop to render a Next.js Link element with button styling. This approach allows any component to inherit button styling without changing its underlying HTML element or functionality.

```tsx
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function LinkAsButton() {
  return (
    <Button asChild>
      <Link href="/login">Login</Link>
    </Button>
  )
}
```

--------------------------------

### Render Data Table in Page Component

Source: https://ui.shadcn.com/docs/components/data-table

Demonstrates how to fetch payment data asynchronously and render the DataTable component in a Next.js page. The component imports column definitions and Payment type from a columns file, fetches data via getData function, and displays the table within a container with responsive padding.

```tsx
import { columns, Payment } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
```

--------------------------------

### Add Text Labels and Prefix/Suffix to Input - TypeScript React

Source: https://ui.shadcn.com/docs/changelog

Demonstrates InputGroupText and InputGroupTextarea components for adding text labels, currency symbols, and protocol prefixes around inputs. Shows both prefix (left addon) and suffix (right addon with inline-end alignment) patterns for creating labeled input fields.

```typescript
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

export function InputGroupTextExample() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>$</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>USD</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
```

--------------------------------

### EmptyMedia Component with Icon Variant

Source: https://ui.shadcn.com/docs/components/empty

Display media content in empty state using the EmptyMedia component with icon variant. Accepts children elements like icons or avatars and supports two variants: 'default' and 'icon'. The component is flexible and can wrap various child components.

```tsx
<EmptyMedia variant="icon">
  <Icon />
</EmptyMedia>
```

--------------------------------

### Shadcn UI Field with Input Components

Source: https://ui.shadcn.com/docs/components/field

Shows how to create a form section using FieldSet and FieldGroup, containing two Field components with Input elements for username and password. Demonstrates FieldLabel, Input, and FieldDescription for user guidance.

```tsx
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldInput() {
  return (
    <div className="w-full max-w-md">
      <FieldSet>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input id="username" type="text" placeholder="Max Leiter" />
            <FieldDescription>
              Choose a unique username for your account.
            </FieldDescription>
          </Field>
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <FieldDescription>
              Must be at least 8 characters long.
            </FieldDescription>
            <Input id="password" type="password" placeholder="••••••••" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  )
}
```