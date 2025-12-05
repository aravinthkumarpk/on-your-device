### Next.js Project Setup and AI SDK Installation

Source: https://ai-sdk.dev/elements/examples/chatbot

Commands to set up a new Next.js project and install necessary AI SDK dependencies. This includes creating the project, navigating into the directory, and installing core AI libraries and Zod for validation.

```bash
npx create-next-app@latest ai-chatbot && cd ai-chatbot
npx ai-elements@latest
npm i ai @ai-sdk/react zod
```

--------------------------------

### Install v0 SDK with npm

Source: https://ai-sdk.dev/elements/components/web-preview

Installs the v0-sdk package using npm. This is the initial step to integrate the SDK into your project.

```bash
npm i v0-sdk
```

--------------------------------

### Install AI Elements Panel Component

Source: https://ai-sdk.dev/elements/components/panel

Instructions for installing the AI Elements Panel component using npm or npx. This involves adding the component to your project.

```bash
npx ai-elements@latest add panel
```

```bash
npx shadcn@latest add @ai-elements/panel
```

--------------------------------

### Install AI Elements Package

Source: https://ai-sdk.dev/elements/components/prompt-input

This command installs the AI Elements package globally for use in your project. It's typically the first step before adding specific AI components.

```bash
npx ai-elements@latest add prompt-input
```

--------------------------------

### Reasoning Component Example (JavaScript)

Source: https://ai-sdk.dev/elements/components/reasoning

This code demonstrates how to use the `Reasoning` component to display AI reasoning content. It includes a mock streaming setup that simulates the AI generating reasoning tokens, which are then displayed by the component. The component automatically opens and closes based on the streaming state.

```JavaScript
"use client";

import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/ai-elements/reasoning";
import { useCallback, useEffect, useState } from "react";

const reasoningSteps = [
  "Let me think about this problem step by step.",
  "\n\nFirst, I need to understand what the user is asking for.",
  "\n\nThey want a reasoning component that opens automatically when streaming begins and closes when streaming finishes. The component should be composable and follow existing patterns in the codebase.",
  "\n\nThis seems like a collapsible component with state management would be the right approach.",
].join("");

const Example = () => {
  const [content, setContent] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [currentTokenIndex, setCurrentTokenIndex] = useState(0);
  const [tokens, setTokens] = useState<string[]>([]);

  // Function to chunk text into fake tokens of 3-4 characters
  const chunkIntoTokens = useCallback((text: string): string[] => {
    const tokens: string[] = [];
    let i = 0;
    while (i < text.length) {
      const chunkSize = Math.floor(Math.random() * 2) + 3; // Random size between 3-4
      tokens.push(text.slice(i, i + chunkSize));
      i += chunkSize;
    }
    return tokens;
  }, []);

  useEffect(() => {
    const tokenizedSteps = chunkIntoTokens(reasoningSteps);
    setTokens(tokenizedSteps);
    setContent("");
    setCurrentTokenIndex(0);
    setIsStreaming(true);
  }, [chunkIntoTokens]);

  useEffect(() => {
    if (!isStreaming || currentTokenIndex >= tokens.length) {
      if (isStreaming) {
        setIsStreaming(false);
      }
      return;
    }

    const timer = setTimeout(() => {
      setContent((prev) => prev + tokens[currentTokenIndex]);
      setCurrentTokenIndex((prev) => prev + 1);
    }, 25); // Faster interval since we're streaming smaller chunks

    return () => clearTimeout(timer);
  }, [isStreaming, currentTokenIndex, tokens]);

  return (
    <div className="w-full p-4" style={{ height: "300px" }}>
      <Reasoning className="w-full" isStreaming={isStreaming}>
        <ReasoningTrigger />
        <ReasoningContent>{content}</ReasoningContent>
      </Reasoning>
    </div>
  );
};

export default Example;
```

--------------------------------

### Install shadcn/ui Queue Integration

Source: https://ai-sdk.dev/elements/components/queue

Command to add the shadcn/ui-compatible queue component to your project. Requires shadcn/ui to be configured.

```shell
npx shadcn@latest add @ai-elements/queue
```

--------------------------------

### Install AI Elements Queue via CLI

Source: https://ai-sdk.dev/elements/components/queue

Command to add the queue component to your project using the AI Elements CLI. Requires Node.js and npm/npx to be installed.

```shell
npx ai-elements@latest add queue
```

--------------------------------

### Install ai-elements Confirmation

Source: https://ai-sdk.dev/elements/components/confirmation

Command to add the confirmation component from the ai-elements package using npx. This is a direct installation from the ai-elements package.

```bash
npx ai-elements@latest add confirmation
```

--------------------------------

### Install AI SDK Toolbar Component

Source: https://ai-sdk.dev/elements/components/toolbar

Instructions for installing the AI SDK toolbar component using npx. This involves adding the toolbar to your project either via the ai-elements package or shadcn.

```bash
npx ai-elements@latest add toolbar
```

```bash
npx shadcn@latest add @ai-elements/toolbar
```

--------------------------------

### Install AI SDK Edge Components

Source: https://ai-sdk.dev/elements/components/edge

Commands to install the AI SDK edge components using npx. This includes adding the core 'edge' package and the shadcn integration.

```bash
npx ai-elements@latest add edge

```

```bash
npx shadcn@latest add @ai-elements/edge

```

--------------------------------

### Install AI Elements Plan via npx

Source: https://ai-sdk.dev/elements/components/plan

Use this command to add the AI Elements Plan component to your project using npx. This is the primary installation method for the ai-elements package.

```bash
npx ai-elements@latest add plan
```

--------------------------------

### Install AI Elements Context Component

Source: https://ai-sdk.dev/elements/components/context

Install the context component using npx commands for ai-elements and shadcn-ui. This adds the necessary UI components and dependencies to the project. No additional configuration is required beyond running these in the project root.

```bash
npx ai-elements@latest add context

npx shadcn@latest add @ai-elements/context
```

--------------------------------

### Install AI Elements Code Block

Source: https://ai-sdk.dev/elements/components/code-block

These commands install the AI Elements code-block component using either the `ai-elements` CLI or the `shadcn` CLI. Ensure you have the respective CLIs installed and configured.

```bash
npx ai-elements@latest add code-block
```

```bash
npx shadcn@latest add @ai-elements/code-block
```

--------------------------------

### Install ai-elements Conversation Module (CLI)

Source: https://ai-sdk.dev/elements/components/conversation

This command uses npx to directly add the conversation module from the ai-elements package. It's a straightforward way to get the necessary components for a chat interface.

```bash
npx ai-elements@latest add conversation
```

--------------------------------

### Install AI Elements Sources Component

Source: https://ai-sdk.dev/elements/components/sources

Provides commands to install the Sources component using either the AI Elements CLI or the shadcn-ui CLI. This allows for easy integration into your project.

```bash
npx ai-elements@latest add sources

```

```bash
npx shadcn@latest add @ai-elements/sources

```

--------------------------------

### Install Web Preview with ai-elements CLI

Source: https://ai-sdk.dev/elements/components/web-preview

Command to add the web-preview component using the ai-elements CLI. This is the primary method for integrating the component into your project.

```bash
npx ai-elements@latest add web-preview
```

--------------------------------

### React Sources Component Example

Source: https://ai-sdk.dev/elements/components/sources

This example demonstrates how to use the Sources component with a predefined list of sources. It includes the necessary imports from '@/components/ai-elements/sources' and displays the count of sources along with their titles and links.

```jsx
"use client";

import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/components/ai-elements/sources";

const sources = [
  { href: "https://stripe.com/docs/api", title: "Stripe API Documentation" },
  { href: "https://docs.github.com/en/rest", title: "GitHub REST API" },
  {
    href: "https://docs.aws.amazon.com/sdk-for-javascript/",
    title: "AWS SDK for JavaScript",
  },
];

const Example = () => (
  <div style={{ height: "110px" }}>
    <Sources>
      <SourcesTrigger count={sources.length} />
      <SourcesContent>
        {sources.map((source) => (
          <Source href={source.href} key={source.href} title={source.title} />
        ))}
      </SourcesContent>
    </Sources>
  </div>
);

export default Example;

```

--------------------------------

### Install Checkpoint Component with npx

Source: https://ai-sdk.dev/elements/components/checkpoint

Installs the ai-elements checkpoint component using npx. This command adds the necessary files and configurations to your project for using the checkpoint feature.

```bash
npx ai-elements@latest add checkpoint
```

```bash
npx shadcn@latest add @ai-elements/checkpoint
```

--------------------------------

### Install AI Elements Connection Component

Source: https://ai-sdk.dev/elements/components/connection

Provides commands to add the 'connection' component to your project using ai-elements or shadcn. This is the initial step before integrating the component.

```bash
npx ai-elements@latest add connection
```

```bash
npx shadcn@latest add @ai-elements/connection
```

--------------------------------

### Install ai-elements CLI Tool

Source: https://ai-sdk.dev/elements/components/inline-citation

This command installs the ai-elements CLI tool globally or for the current project, allowing you to add inline citation functionality.

```bash
npx ai-elements@latest add inline-citation
```

--------------------------------

### Install Web Preview with shadcn CLI

Source: https://ai-sdk.dev/elements/components/web-preview

Command to add the web-preview component using the shadcn CLI. This method is an alternative for projects already integrated with shadcn.

```bash
npx shadcn@latest add @ai-elements/web-preview
```

--------------------------------

### Install Inline Citation Component with shadcn CLI

Source: https://ai-sdk.dev/elements/components/inline-citation

This command uses the shadcn CLI to add the @ai-elements/inline-citation component to your project, integrating it with your existing shadcn-ui setup.

```bash
npx shadcn@latest add @ai-elements/inline-citation
```

--------------------------------

### Install @ai-sdk/openai Package

Source: https://ai-sdk.dev/elements/components/image

Installs the OpenAI SDK package for AI integration using npm. This package allows for interaction with OpenAI's models, including image generation.

```bash
npm i @ai-sdk/openai
```

--------------------------------

### Install AI Elements Shadcn Package

Source: https://ai-sdk.dev/elements/components/image

Installs the AI Elements shadcn-ui package using npm. This package provides UI components for AI-related applications, including image display.

```bash
npx ai-elements@latest add image
```

```bash
npx shadcn@latest add @ai-elements/image
```

--------------------------------

### Install shadcn/ui Prompt Input Component

Source: https://ai-sdk.dev/elements/components/prompt-input

This command adds the prompt-input component from shadcn/ui, which integrates with AI Elements. Ensure shadcn/ui is already configured in your project.

```bash
npx shadcn@latest add @ai-elements/prompt-input
```

--------------------------------

### Install AI Elements CLI Tool

Source: https://ai-sdk.dev/elements/components/tool

Command to add the AI Elements tool using the npx command.

```bash
npx ai-elements@latest add tool
```

--------------------------------

### Install AI Elements Reasoning Command

Source: https://ai-sdk.dev/elements/components/reasoning

Command to add the reasoning component from ai-elements to your project using npx.

```bash
npx ai-elements@latest add reasoning
```

--------------------------------

### Install Chain of Thought with AI Elements

Source: https://ai-sdk.dev/elements/components/chain-of-thought

This command installs the Chain of Thought feature from the ai-elements package using npx.

```bash
npx ai-elements@latest add chain-of-thought
```

--------------------------------

### Install shadcn/ui Plan Component via npx

Source: https://ai-sdk.dev/elements/components/plan

This command specifically adds the Plan component from the ai-elements shadcn package. It assumes you have shadcn/ui already configured in your project.

```bash
npx shadcn@latest add @ai-elements/plan
```

--------------------------------

### Install AI Elements Artifact Component

Source: https://ai-sdk.dev/elements/components/artifact

Commands to add the AI Elements artifact component to your project using npx. These commands are used for direct installation or integration with shadcn/ui.

```bash
npx ai-elements@latest add artifact
```

```bash
npx shadcn@latest add @ai-elements/artifact
```

--------------------------------

### Example Prompts and Mock Response Data

Source: https://ai-sdk.dev/elements/examples/chatbot

Contains example user prompts and mock assistant responses for testing chat interface functionality. These arrays provide sample data for development and testing purposes without requiring actual API calls.

```JavaScript
const suggestions = [
  "What are the latest trends in AI?",
  "How does machine learning work?",
  "Explain quantum computing",
  "Best practices for React development",
  "Tell me about TypeScript benefits",
  "How to optimize database queries?",
  "What is the difference between SQL and NoSQL?",
  "Explain cloud computing basics",
];

const mockResponses = [
  "That's a great question! Let me help you understand this concept better. The key thing to remember is that proper implementation requires careful consideration of the underlying principles and best practices in the field.",
  "I'd be happy to explain this topic in detail. From my understanding, there are several important factors to consider when approaching this problem. Let me break it down step by step for you.",
  "This is an interesting topic that comes up frequently. The solution typically involves understanding the core concepts and applying them in the right context. Here's what I recommend...",
  "Great choice of topic! This is something that many developers encounter. The approach I'd suggest is to start with the fundamentals and then build up to more complex scenarios.",
  "That's definitely worth exploring. From what I can see, the best way to handle this is to consider both the theoretical aspects and practical implementation details.",
];
```

--------------------------------

### Install Chain of Thought with Shadcn UI

Source: https://ai-sdk.dev/elements/components/chain-of-thought

This command installs the Chain of Thought component specifically for Shadcn UI using the shadcn CLI.

```bash
npx shadcn@latest add @ai-elements/chain-of-thought
```

--------------------------------

### Install Shadcn Reasoning Component Command

Source: https://ai-sdk.dev/elements/components/reasoning

Command to add the reasoning component from shadcn-ui, likely a pre-built integration with ai-elements.

```bash
npx shadcn@latest add @ai-elements/reasoning
```

--------------------------------

### Install AI Elements Shadcn Component

Source: https://ai-sdk.dev/elements/components/tool

Command to add the AI Elements tool component specifically for Shadcn UI.

```bash
npx shadcn@latest add @ai-elements/tool
```

--------------------------------

### Handle database_query tool with approval-requested state

Source: https://ai-sdk.dev/elements/components/tool

This JavaScript example illustrates the 'approval-requested' state for a 'database_query' tool. It displays the tool's input, a confirmation request with actions to accept or reject, and messages for both accepted and rejected states.

```javascript
"use client";

import {
  Confirmation,
  ConfirmationAccepted,
  ConfirmationAction,
  ConfirmationActions,
  ConfirmationRejected,
  ConfirmationRequest,
  ConfirmationTitle,
} from "@/components/ai-elements/confirmation";
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
} from "@/components/ai-elements/tool";
import type { ToolUIPart } from "ai";
import { CheckIcon, XIcon } from "lucide-react";
import { nanoid } from "nanoid";

const toolCall = {
  type: "tool-database_query" as const,
  toolCallId: nanoid(),
  state: "approval-requested" as const,
  input: {
    query: "SELECT COUNT(*) FROM users WHERE created_at >= ?",
    params: ["2024-01-01"],
    database: "analytics",
  },
};

// Example for approval-requested state
<Tool>
  <ToolHeader
    state={"approval-requested" as ToolUIPart["state"]}
    title="database_query"
    type="tool-database_query"
  />
  <ToolContent>
    <ToolInput input={toolCall.input} />
    <Confirmation approval={{ id: nanoid() }} state="approval-requested">
      <ConfirmationTitle>
        <ConfirmationRequest>
          This tool will execute a query on the production database.
        </ConfirmationRequest>
        <ConfirmationAccepted>
          <CheckIcon className="size-4 text-green-600 dark:text-green-400" />
          <span>Accepted</span>
        </ConfirmationAccepted>
        <ConfirmationRejected>
          <XIcon className="size-4 text-destructive" />
          <span>Rejected</span>
        </ConfirmationRejected>
      </ConfirmationTitle>
      <ConfirmationActions>
        <ConfirmationAction
          onClick={() => {
            // In production, call addConfirmationResponse
          }}
          variant="outline"
        >
          Reject
        </ConfirmationAction>
        <ConfirmationAction
          onClick={() => {
            // In production, call addConfirmationResponse
          }}
          variant="default"
        >
          Accept
        </ConfirmationAction>
      </ConfirmationActions>
    </Confirmation>
  </ToolContent>
</Tool>
```

--------------------------------

### Install Open-in-Chat package via npx (Shell)

Source: https://ai-sdk.dev/elements/components/open-in-chat

Run these npx commands to add the Open-in-Chat integration to your project. The first command installs the latest AI Elements package, while the second adds the specific UI component from the shadcn collection. No additional dependencies are required beyond a Node.js environment.

```Shell
npx ai-elements@latest add open-in-chat
```

```Shell
npx shadcn@latest add @ai-elements/open-in-chat
```

--------------------------------

### Example React Component with Message Handling

Source: https://ai-sdk.dev/elements/components/message

A comprehensive React component example demonstrating the integration of various UI elements and hooks for handling messages. It includes state management for likes/dislikes, copy functionality, and UI rendering for message content and actions.

```javascript
const Example = () => {
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [disliked, setDisliked] = useState<Record<string, boolean>>({});

  const handleCopy = (content: string) => {
    navigator.clipboard.writeText(content);
  };

  const handleRetry = () => {
    console.log("Retrying...");
  };

  return (
    <div className="flex flex-col gap-4">
      {messages.map((message) => (
        <Message from={message.from} key={message.key}>
          {message.versions?.length && message.versions.length > 1 ? (
            <MessageBranch defaultBranch={0} key={message.key}>
              <MessageBranchContent>
                {message.versions?.map((version) => (
                  <MessageContent key={version.id}>
                    <MessageResponse>{version.content}</MessageResponse>
                  </MessageContent>
                ))}
              </MessageBranchContent>
              {message.from === "assistant" && (
                <MessageToolbar>
                  <MessageBranchSelector from={message.from}>
                    <MessageBranchPrevious />
                    <MessageBranchPage />
                    <MessageBranchNext />
                  </MessageBranchSelector>
                  <MessageActions>
                    <MessageAction
                      label="Retry"
                      onClick={handleRetry}
                      tooltip="Regenerate response"
                    >
                      <RefreshCcwIcon className="size-4" />
                    </MessageAction>
                    <MessageAction
                      label="Like"
                      onClick={() =>
                        setLiked((prev) => ({
                          ...prev,
                          [message.key]: !prev[message.key],
                        }))
                      }
                      tooltip="Like this response"
                    >
                      <ThumbsUpIcon
                        className="size-4"
                        fill={liked[message.key] ? "currentColor" : "none"}
                      />
                    </MessageAction>
                    <MessageAction
                      label="Dislike"
                      onClick={() =>
                        setDisliked((prev) => ({
                          ...prev,
                          [message.key]: !prev[message.key],
                        }))
                      }
                      tooltip="Dislike this response"
                    >
                      <ThumbsDownIcon
                        className="size-4"
                        fill={disliked[message.key] ? "currentColor" : "none"}
                      />
                    </MessageAction>
                    <MessageAction
                      label="Copy"
                      onClick={() =>
                        handleCopy(
                          message.versions?.find((v) => v.id)?.content || ""
                        )
                      }
                      tooltip="Copy to clipboard"
                    >
                      <CopyIcon className="size-4" />
                    </MessageAction>
                  </MessageActions>
                </MessageToolbar>
              )}
            </MessageBranch>
          ) : (
            <div key={message.key}>
              {message.attachments && message.attachments.length > 0 && (
                <MessageAttachments className="mb-2">
                  {message.attachments.map((attachment) => (
                    <MessageAttachment data={attachment} key={attachment.url} />
                  ))}
                </MessageAttachments>
              )}
              <MessageContent>
                {message.from === "assistant" ? (
                  <MessageResponse>{message.content}</MessageResponse>
                ) : (
                  message.content
                )}
              </MessageContent>
              {message.from === "assistant" && message.versions && (
                <MessageActions>
                  <MessageAction
                    label="Retry"
                    onClick={handleRetry}
                    tooltip="Regenerate response"
                  >
                    <RefreshCcwIcon className="size-4" />
                  </MessageAction>
                  <MessageAction
                    label="Like"
                    onClick={() =>
                      setLiked((prev) => ({
                        ...prev,
                      }))
                    }
                    tooltip="Like this response"
                  >
                    <ThumbsUpIcon
                      className="size-4"
                      fill={liked[message.key] ? "currentColor" : "none"}
                    />
                  </MessageAction>
                  <MessageAction
                    label="Dislike"
                    onClick={() =>
                      setDisliked((prev) => ({
                        ...prev,
                      }))
                    }
                    tooltip="Dislike this response"
                  >
                    <ThumbsDownIcon
                      className="size-4"
                      fill={disliked[message.key] ? "currentColor" : "none"}
                    />
                  </MessageAction>
                  <MessageAction
                    label="Copy"
                    onClick={() =>
                      handleCopy(
                        message.versions?.find((v) => v.id)?.content || ""
                      )
                    }
                    tooltip="Copy to clipboard"
                  >
                    <CopyIcon className="size-4" />
                  </MessageAction>
                </MessageActions>
              )}
            </div>
          )}
        </Message>
      ))}
    </div>
  );
};
```

--------------------------------

### Plan Component Usage Example

Source: https://ai-sdk.dev/elements/components/plan

Demonstrates how to use the Plan component to create a collapsible interface for AI-generated execution plans. Shows the complete structure including header, content, and footer sections with React/JSX syntax. Includes PlanTrigger for collapse/expand functionality and PlanAction for interactive elements like buttons.

```javascript
"use client";

import {
  Plan,
  PlanAction,
  PlanContent,
  PlanDescription,
  PlanFooter,
  PlanHeader,
  PlanTitle,
  PlanTrigger,
} from "@/components/ai-elements/plan";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Example = () => (
  <Plan defaultOpen={false}>
    <PlanHeader>
      <div>
        <div className="mb-4 flex items-center gap-2">
          <FileText className="size-4" />
          <PlanTitle>Rewrite AI Elements to SolidJS</PlanTitle>
        </div>
        <PlanDescription>
          Rewrite the AI Elements component library from React to SolidJS while
          maintaining compatibility with existing React-based shadcn/ui
          components using solid-js/compat, updating all 29 components and their
          test suite.
        </PlanDescription>
      </div>
      <PlanTrigger />
    </PlanHeader>
    <PlanContent>
      <div className="space-y-4 text-sm">
        <div>
          <h3 className="mb-2 font-semibold">Overview</h3>
          <p>
            This plan outlines the migration strategy for converting the AI
            Elements library from React to SolidJS, ensuring compatibility and
            maintaining existing functionality.
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Key Steps</h3>
          <ul className="list-inside list-disc space-y-1">
            <li>Set up SolidJS project structure</li>
            <li>Install solid-js/compat for React compatibility</li>
            <li>Migrate components one by one</li>
            <li>Update test suite for each component</li>
            <li>Verify compatibility with shadcn/ui</li>
          </ul>
        </div>
      </div>
    </PlanContent>
    <PlanFooter className="justify-end">
      <PlanAction>
        <Button size="sm">
          Build <kbd className="font-mono">⌘↩</kbd>
        </Button>
      </PlanAction>
    </PlanFooter>
  </Plan>
);

export default Example;
```

--------------------------------

### Display database_query tool with output-available state

Source: https://ai-sdk.dev/elements/components/tool

This JavaScript example shows the 'output-available' state for a 'database_query' tool, indicating a completed operation. It includes the tool header, input, and a confirmation indicating the query was accepted and the output is ready.

```javascript
"use client";

import {
  Confirmation,
  ConfirmationAccepted,
  ConfirmationRequest,
  ConfirmationTitle,
} from "@/components/ai-elements/confirmation";
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
} from "@/components/ai-elements/tool";
import type { ToolUIPart } from "ai";
import { CheckIcon } from "lucide-react";
import { nanoid } from "nanoid";

const toolCall: ToolUIPart = {
  type: "tool-database_query" as const,
  toolCallId: nanoid(),
  state: "output-available" as const,
  input: {
    query: "SELECT COUNT(*) FROM users WHERE created_at >= ?",
    params: ["2024-01-01"],
    database: "analytics",
  },
  output: `| User ID | Name | Email | Created At |
|---------|------|-------|------------|
| 1 | John Doe | john@example.com | 2024-01-15 |
| 2 | Jane Smith | jane@example.com | 2024-01-20 |
| 3 | Bob Wilson | bob@example.com | 2024-02-01 |
| 4 | Alice Brown | alice@example.com | 2024-02-10 |
| 5 | Charlie Davis | charlie@example.com | 2024-02-15 |`,
  errorText: undefined,
};

// Example for output-available state (Completed)
<Tool>
  <ToolHeader state={toolCall.state} type={toolCall.type} />
  <ToolContent>
    <ToolInput input={toolCall.input} />
    <Confirmation
      approval={{ id: nanoid(), approved: true }}
      state="output-available"
    >
      <ConfirmationTitle>
        <ConfirmationRequest>
          This tool will execute a query on the production database.
        </ConfirmationRequest>
        <ConfirmationAccepted>
          <CheckIcon className="size-4 text-green-600 dark:text-green-400" />
          <span>Accepted</span>
        </ConfirmationAccepted>
      </ConfirmationTitle>
    </Confirmation>
  </ToolContent>
</Tool>
```

--------------------------------

### Install Model Selector in Shell

Source: https://ai-sdk.dev/elements/components/model-selector

Provides npx commands to add the model-selector component to a project, supporting both ai-elements and shadcn package methods. Requires Node.js and npm to execute. No specific inputs or outputs beyond command-line confirmation of installation.

```shell
npx ai-elements@latest add model-selector
```

```shell
npx shadcn@latest add @ai-elements/model-selector
```

--------------------------------

### Using Loader Component in React

Source: https://ai-sdk.dev/elements/components/loader

This example demonstrates how to import and use the Loader component within a React application, centering it in a div for display. It requires the component to be installed via AI Elements or shadcn. The component accepts size and className props for customization, with no specific inputs or outputs beyond visual rendering.

```typescript
"use client";

import { Loader } from "@/components/ai-elements/loader";

const Example = () => (
  <div className="flex items-center justify-center p-8">
    <Loader />
  </div>
);

export default Example;

```

--------------------------------

### Create Mock Workflow Nodes (TypeScript)

Source: https://ai-sdk.dev/elements/examples/workflow

Defines an array of node objects, each representing a step in the workflow. Each node includes an ID, type, position, and data such as label, description, content, and footer information. Handles indicate connection points.

```typescript
const nodes = [
  {
    id: nodeIds.start,
    type: 'workflow',
    position: { x: 0, y: 0 },
    data: {
      label: 'Start',
      description: 'Initialize workflow',
      handles: { target: false, source: true },
      content: 'Triggered by user action at 09:30 AM',
      footer: 'Status: Ready',
    },
  },
  {
    id: nodeIds.process1,
    type: 'workflow',
    position: { x: 500, y: 0 },
    data: {
      label: 'Process Data',
      description: 'Transform input',
      handles: { target: true, source: true },
      content: 'Validating 1,234 records and applying business rules',
      footer: 'Duration: ~2.5s',
    },
  },
  {
    id: nodeIds.decision,
    type: 'workflow',
    position: { x: 1000, y: 0 },
    data: {
      label: 'Decision Point',
      description: 'Route based on conditions',
      handles: { target: true, source: true },
      content: "Evaluating: data.status === 'valid' && data.score > 0.8",
      footer: 'Confidence: 94%',
    },
  },
  {
    id: nodeIds.output1,
    type: 'workflow',
    position: { x: 1500, y: -300 },
    data: {
      label: 'Success Path',
      description: 'Handle success case',
      handles: { target: true, source: true },
      content: '1,156 records passed validation (93.7%)',
      footer: 'Next: Send to production',
    },
  },
  {
    id: nodeIds.output2,
    type: 'workflow',
    position: { x: 1500, y: 300 },
    data: {
      label: 'Error Path',
      description: 'Handle error case',
      handles: { target: true, source: true },
      content: '78 records failed validation (6.3%)',
      footer: 'Next: Queue for review',
    },
  },
  {
    id: nodeIds.process2,
    type: 'workflow',
    position: { x: 2000, y: 0 },
    data: {
      label: 'Complete',
      description: 'Finalize workflow',
      handles: { target: true, source: false },
      content: 'All records processed and routed successfully',
      footer: 'Total time: 4.2s',
    },
  },
];
```

--------------------------------

### Installing Canvas Component via CLI

Source: https://ai-sdk.dev/elements/components/canvas

Use npx to add the Canvas component to your project using ai-elements or shadcn. This command fetches and installs the component files, requiring Node.js and npm. It sets up dependencies for React Flow integration.

```bash
npx ai-elements@latest add canvas

npx shadcn@latest add @ai-elements/canvas
```

--------------------------------

### Suggestion Component Usage Example (React)

Source: https://ai-sdk.dev/elements/components/suggestion

This example demonstrates how to use the Suggestion component to display a list of clickable suggestions. It imports the Suggestion and Suggestions components and defines a handler for suggestion clicks. The component maps over an array of suggestion strings to render individual Suggestion buttons.

```javascript
"use client";

import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion";

const suggestions = [
  "What are the latest trends in AI?",
  "How does machine learning work?",
  "Explain quantum computing",
  "Best practices for React development",
  "Tell me about TypeScript benefits",
  "How to optimize database queries?",
  "What is the difference between SQL and NoSQL?",
  "Explain cloud computing basics",
];

const Example = () => {
  const handleSuggestionClick = (suggestion: string) => {
    console.log("Selected suggestion:", suggestion);
  };

  return (
    <Suggestions>
      {suggestions.map((suggestion) => (
        <Suggestion
          key={suggestion}
          onClick={handleSuggestionClick}
          suggestion={suggestion}
        />
      ))}
    </Suggestions>
  );
};

export default Example;

```

--------------------------------

### Install Latest AI Elements CLI

Source: https://ai-sdk.dev/elements/troubleshooting

Ensures you are using the most recent version of the AI Elements CLI for project integration. Run this command in your project's root directory.

```shell
npx ai-elements@latest
```

--------------------------------

### Dijkstra's Algorithm Implementation (Python)

Source: https://ai-sdk.dev/elements/components/artifact

This code demonstrates a Python implementation of Dijkstra's algorithm for finding the shortest paths from a starting node to all other nodes in a graph. It utilizes the `heapq` module for efficient priority queue management and returns a dictionary containing the shortest distances from the start node to each node in the graph.

```python
1# Dijkstra's Algorithm implementation
2import heapq
3
4def dijkstra(graph, start):
5    distances = {node: float('inf') for node in graph}
6    distances[start] = 0
7    heap = [(0, start)]
8    visited = set()
9    
10    while heap:
11        current_distance, current_node = heapq.heappop(heap)
12        if current_node in visited:
13            continue
14        visited.add(current_node)
15        
16        for neighbor, weight in graph[current_node].items():
17            distance = current_distance + weight
18            if distance < distances[neighbor]:
19                distances[neighbor] = distance
20                heapq.heappush(heap, (distance, neighbor))
21    
22    return distances
23
24# Example graph
25 graph = {
26    'A': {'B': 1, 'C': 4},
27    'B': {'A': 1, 'C': 2, 'D': 5},
28    'C': {'A': 4, 'B': 2, 'D': 1},
29    'D': {'B': 5, 'C': 1}
30}
31
32print(dijkstra(graph, 'A'))
```

--------------------------------

### Install shadcn Confirmation for AI Elements

Source: https://ai-sdk.dev/elements/components/confirmation

Command to add the confirmation component for AI Elements to a shadcn project using npx. This command ensures compatibility with shadcnUI.

```bash
npx shadcn@latest add @ai-elements/confirmation
```

--------------------------------

### Dijkstra's Algorithm Implementation in Python

Source: https://ai-sdk.dev/elements/components/artifact

This Python code implements Dijkstra's algorithm to find the shortest paths from a starting node in a weighted graph. It utilizes a min-heap for efficient retrieval of the closest node. The function takes a graph represented as an adjacency list and a starting node as input, returning a dictionary of shortest distances from the start node to all other nodes.

```python
# Dijkstra's Algorithm implementation
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    heap = [(0, start)]
    visited = set()
    
    while heap:
        current_distance, current_node = heapq.heappop(heap)
        if current_node in visited:
            continue
        visited.add(current_node)
        
        for neighbor, weight in graph[current_node].items():
            distance = current_distance + weight
            if distance < distances[neighbor]:
                distances[neighbor] = distance
                heapq.heappush(heap, (distance, neighbor))
    
    return distances

# Example graph
graph = {
   'A': {'B': 1, 'C': 4},
   'B': {'A': 1, 'C': 2, 'D': 5},
   'C': {'A': 4, 'B': 2, 'D': 1},
   'D': {'B': 5, 'C': 1}
}

print(dijkstra(graph, 'A'))
```

--------------------------------

### React useState and useEffect Example

Source: https://ai-sdk.dev/elements/examples/chatbot

Demonstrates the usage of useState for managing local component state and useEffect for handling side effects, specifically fetching user data based on a userId.

```jsx
function ProfilePage({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // This runs after render and when userId changes
    fetchUser(userId).then(userData => {
      setUser(userData);
    });
  }, [userId]);

  return user ? <Profile user={user} /> : <Loading />; 
}
```

--------------------------------

### Running Tool State - React

Source: https://ai-sdk.dev/elements/components/tool

Illustrates a tool that is actively executing. This example showcases the active execution state, including input parameters like prompt, style, resolution, and quality for image generation. It utilizes React components from the ai-elements library.

```jsx
"use client";

import { Tool, ToolContent, ToolHeader, ToolInput } from "@/components/ai-elements/tool";
import { nanoid } from "nanoid";

const toolCall = {
  type: "tool-image_generation" as const,
  toolCallId: nanoid(),
  state: "input-available" as const,
  input: {
    prompt: "A futuristic cityscape at sunset with flying cars",
    style: "digital_art",
    resolution: "1024x1024",
    quality: "high",
  },
  output: undefined,
  errorText: undefined,
};

const Example = () => (
  <div style={{ height: "500px" }}>
    <Tool>
      <ToolHeader state={toolCall.state} type={toolCall.type} />
      <ToolContent>
        <ToolInput input={toolCall.input} />
      </ToolContent>
    </Tool>
  </div>
);

export default Example;
```

--------------------------------

### React useState Hook Example

Source: https://ai-sdk.dev/elements/components/message

Demonstrates the usage of the `useState` hook to manage component state. It shows how to declare state variables and their corresponding update functions, and how to use them within a React component.

```javascript
const [liked, setLiked] = useState<Record<string, boolean>>({});
const [disliked, setDisliked] = useState<Record<string, boolean>>({});
```

--------------------------------

### CodeBlock Component Dark Mode Example (React)

Source: https://ai-sdk.dev/elements/components/code-block

This example demonstrates how to use the `CodeBlock` component in dark mode by wrapping it in a `div` with the `dark` class. It showcases a simple React component with syntax highlighting and copy functionality.

```jsx
"use client";

import { CodeBlock, CodeBlockCopyButton } from "@/components/ai-elements/code-block";

const code = `function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`;

const Example = () => (
  <div className="dark">
    <CodeBlock code={code} language="jsx">
      <CodeBlockCopyButton
        onCopy={() => console.log("Copied code to clipboard")}
        onError={() => console.error("Failed to copy code to clipboard")}
      />
    </CodeBlock>
  </div>
);

export default Example;

```

--------------------------------

### Input Streaming Tool State - React

Source: https://ai-sdk.dev/elements/components/tool

Demonstrates a tool in an initial state while parameters are being processed. This example uses React components and the ai-elements library to render the tool's UI. It includes handling for input parameters, such as a search query and the number of results.

```jsx
use client;

import { Tool, ToolContent, ToolHeader, ToolInput } from "@/components/ai-elements/tool";
import { nanoid } from "nanoid";

const toolCall = {
  type: "tool-web_search" as const,
  toolCallId: nanoid(),
  state: "input-streaming" as const,
  input: {
    query: "latest AI market trends 2024",
    max_results: 10,
    include_snippets: true,
  },
  output: undefined,
  errorText: undefined,
};

const Example = () => (
  <div style={{ height: "500px" }}>
    <Tool>
      <ToolHeader state={toolCall.state} type={toolCall.type} />
      <ToolContent>
        <ToolInput input={toolCall.input} />
      </ToolContent>
    </Tool>
  </div>
);

export default Example;
```

--------------------------------

### Install Shadcn UI Conversation Component (CLI)

Source: https://ai-sdk.dev/elements/components/conversation

This command utilizes the shadcn/ui CLI to add the conversation component, likely a wrapper or integration provided by ai-elements within the shadcn ecosystem. This ensures compatibility and styling consistency.

```bash
npx shadcn@latest add @ai-elements/conversation
```

--------------------------------

### Import AI Elements and UI Components (TypeScript)

Source: https://ai-sdk.dev/elements/examples/workflow

Imports necessary components from the AI Elements library and the UI library for building the workflow visualization. This includes components for the canvas, connections, controls, edges, nodes, panels, and toolbar, along with UI buttons.

```typescript
'use client';

import { Canvas } from '@/components/ai-elements/canvas';
import { Connection } from '@/components/ai-elements/connection';
import { Controls } from '@/components/ai-elements/controls';
import { Edge } from '@/components/ai-elements/edge';
import {
  Node,
  NodeContent,
  NodeDescription,
  NodeFooter,
  NodeHeader,
  NodeTitle,
} from '@/components/ai-elements/node';
import { Panel } from '@/components/ai-elements/panel';
import { Toolbar } from '@/components/ai-elements/toolbar';
import { Button } from '@/components/ui/button';
```

--------------------------------

### React Prompt Input Component Example

Source: https://ai-sdk.dev/elements/components/prompt-input

This React component demonstrates the usage of various PromptInput components, including model selection, image upload button, and submission controls. It utilizes state management for model selection and open/close states for the model selector.

```jsx
import React, {
  useCallback,
  useMemo,
  useState,
} from "react";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTools,
} from "@/components/prompt-input";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorLogo,
  ModelSelectorLogoGroup,
  ModelSelectorName,
  ModelSelectorTrigger,
} from "@/components/model-selector";
import {
  CheckIcon,
  ImageIcon,
} from "lucide-react";

const Example = () => {
  const [status, setStatus] = useState("default");
  const [modelSelectorOpen, setModelSelectorOpen] = useState(false);
  const [model, setModel] = useState("gpt-4o");

  const models = useMemo(() => [
    {
      id: "gpt-4o",
      name: "GPT-4o",
      chef: "OpenAI",
      chefSlug: "openai",
      providers: ["openai"],
    },
    {
      id: "gpt-4-turbo",
      name: "GPT-4 Turbo",
      chef: "OpenAI",
      chefSlug: "openai",
      providers: ["openai"],
    },
    {
      id: "claude-3-opus",
      name: "Claude 3 Opus",
      chef: "Anthropic",
      chefSlug: "anthropic",
      providers: ["anthropic"],
    },
    {
      id: "claude-3-sonnet",
      name: "Claude 3 Sonnet",
      chef: "Anthropic",
      chefSlug: "anthropic",
      providers: ["anthropic"],
    },
    {
      id: "gemini-1.5-pro",
      name: "Gemini 1.5 Pro",
      chef: "Google",
      chefSlug: "google",
      providers: ["google"],
    },
  ], []);

  const selectedModelData = useMemo(() => {
    return models.find((m) => m.id === model);
  }, [model, models]);

  const onModelChange = useCallback((value) => {
    setModel(value);
    setModelSelectorOpen(false);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <PromptInput>
        <PromptInputTools>
          <ModelSelector
            onOpenChange={setModelSelectorOpen}
            open={modelSelectorOpen}
          >
            <ModelSelectorTrigger asChild>
              <PromptInputButton>
                {selectedModelData?.chefSlug && (
                  <ModelSelectorLogo provider={selectedModelData.chefSlug} />
                )}
                {selectedModelData?.name && (
                  <ModelSelectorName>
                    {selectedModelData.name}
                  </ModelSelectorName>
                )}
              </PromptInputButton>
            </ModelSelectorTrigger>
            <ModelSelectorContent>
              <ModelSelectorInput placeholder="Search models..." />
              <ModelSelectorList>
                <ModelSelectorEmpty>No models found.</ModelSelectorEmpty>
                {["OpenAI", "Anthropic", "Google"].map((chef) => (
                  <ModelSelectorGroup key={chef} heading={chef}>
                    {models
                      .filter((m) => m.chef === chef)
                      .map((m) => (
                        <ModelSelectorItem
                          key={m.id}
                          onSelect={() => {
                            onModelChange(m.id);
                          }}
                          value={m.id}
                        >
                          <ModelSelectorLogo provider={m.chefSlug} />
                          <ModelSelectorName>{m.name}</ModelSelectorName>
                          <ModelSelectorLogoGroup>
                            {m.providers.map((provider) => (
                              <ModelSelectorLogo
                                key={provider}
                                provider={provider}
                              />
                            ))}
                          </ModelSelectorLogoGroup>
                          {model === m.id ? (
                            <CheckIcon className="ml-auto size-4" />
                          ) : (
                            <div className="ml-auto size-4" />
                          )}
                        </ModelSelectorItem>
                      ))}
                  </ModelSelectorGroup>
                ))}
              </ModelSelectorList>
            </ModelSelectorContent>
          </ModelSelector>
        </PromptInputTools>
        <PromptInputFooter>
          <div className="flex items-center gap-2">
            <Button size="icon-sm" variant="ghost">
              <ImageIcon className="text-muted-foreground" size={16} />
            </Button>
            <PromptInputSubmit className="!h-8" status={status} />
          </div>
        </PromptInputFooter>
      </PromptInput>
    </div>
  );
};

export default Example;

```

--------------------------------

### Add AI Elements message component with npx

Source: https://ai-sdk.dev/elements/components/message

Installs the message component using npx commands. The first command adds the component from the ai-elements package, while the second integrates it with the shadcn UI library.

```shell
npx ai-elements@latest add message
```

```shell
npx shadcn@latest add @ai-elements/message
```

--------------------------------

### Create Mock Workflow Edges (TypeScript)

Source: https://ai-sdk.dev/elements/examples/workflow

Defines an array of edge objects, representing the connections between nodes in the workflow. Each edge has an ID, source, target, and type ('animated' for active paths, 'temporary' for conditional paths).

```typescript
const edges = [
  {
    id: 'edge1',
    source: nodeIds.start,
    target: nodeIds.process1,
    type: 'animated',
  },
  {
    id: 'edge2',
    source: nodeIds.process1,
    target: nodeIds.decision,
    type: 'animated',
  },
  {
    id: 'edge3',
    source: nodeIds.decision,
    target: nodeIds.output1,
    type: 'animated',
  },
  {
    id: 'edge4',
    source: nodeIds.decision,
    target: nodeIds.output2,
    type: 'temporary',
  },
  {
    id: 'edge5',
    source: nodeIds.output1,
    target: nodeIds.process2,
    type: 'animated',
  },
  {
    id: 'edge6',
    source: nodeIds.output2,
    target: nodeIds.process2,
    type: 'temporary',
  },
];
```

--------------------------------

### Approval Request State with Action Buttons (React/TypeScript)

Source: https://ai-sdk.dev/elements/components/confirmation

Demonstrates the Confirmation component in the 'approval-requested' state, displaying action buttons for rejection and approval. It includes a query example and necessary imports from '@/components/ai-elements/confirmation'.

```typescript
"use client";

import {
  Confirmation,
  ConfirmationAccepted,
  ConfirmationAction,
  ConfirmationActions,
  ConfirmationRejected,
  ConfirmationRequest,
  ConfirmationTitle,
} from "@/components/ai-elements/confirmation";
import { CheckIcon, XIcon } from "lucide-react";
import { nanoid } from "nanoid";

const Example = () => (
  <div className="w-full max-w-2xl">
    <Confirmation approval={{ id: nanoid() }} state="approval-requested">
      <ConfirmationTitle>
        <ConfirmationRequest>
          This tool wants to execute a query on the production database:
          <code className="mt-2 block rounded bg-muted p-2 text-sm">
            SELECT * FROM users WHERE role = &apos;admin&apos;
          </code>
        </ConfirmationRequest>
        <ConfirmationAccepted>
          <CheckIcon className="size-4 text-green-600 dark:text-green-400" />
          <span>You approved this tool execution</span>
        </ConfirmationAccepted>
        <ConfirmationRejected>
          <XIcon className="size-4 text-destructive" />
          <span>You rejected this tool execution</span>
        </ConfirmationRejected>
      </ConfirmationTitle>
      <ConfirmationActions>
        <ConfirmationAction
          onClick={() => {
            // In production, call respondToConfirmationRequest with approved: false
          }}
          variant="outline"
        >
          Reject
        </ConfirmationAction>
        <ConfirmationAction
          onClick={() => {
            // In production, call respondToConfirmationRequest with approved: true
          }}
          variant="default"
        >
          Approve
        </ConfirmationAction>
      </ConfirmationActions>
    </Confirmation>
  </div>
);

export default Example;

```

--------------------------------

### Create React Component with JSX

Source: https://ai-sdk.dev/elements/components/code-block

This snippet demonstrates a simple React component that renders a heading and a paragraph. This component serves as a basic example for showcasing JSX syntax within the AI Elements CodeBlock component.

```jsx
function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}
```

```jsx
function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}
```

--------------------------------

### React useEffect Hook Usage

Source: https://ai-sdk.dev/elements/components/message

Illustrates the practical application of the `useEffect` hook, typically used for handling side effects in functional components. This example may involve setting up subscriptions, fetching data, or manually changing the DOM.

--------------------------------

### React useState Hook Example

Source: https://ai-sdk.dev/elements/components/message

Demonstrates the usage of the useState hook in a functional React component to manage and update component state. It's used for adding state to functional components.

```jsx
const [count, setCount] = useState(0);

return (
  <button onClick={() => setCount(count + 1)}>
    Count: {count}
  </button>
);
```

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

--------------------------------

### Shimmer Component Usage Example

Source: https://ai-sdk.dev/elements/components/shimmer

Demonstrates how to use the Shimmer component in a React application to apply animated text effects. It shows basic usage, applying it to headings, and customizing animation duration and spread.

```typescript
"use client";

import { Shimmer } from "@/components/ai-elements/shimmer";

const Example = () => (
  <div className="flex flex-col items-center justify-center gap-4 p-8">
    <Shimmer>This text has a shimmer effect</Shimmer>
    <Shimmer as="h1" className="font-bold text-4xl">
      Large Heading
    </Shimmer>
    <Shimmer duration={3} spread={3}>
      Slower shimmer with wider spread
    </Shimmer>
  </div>
);

export default Example;

```

--------------------------------

### Build Main React Flow Canvas Component with Customizations

Source: https://ai-sdk.dev/elements/examples/workflow

Constructs the main application component that renders a React Flow Canvas. It integrates nodes, edges, custom connection lines, interactive controls, and custom UI panels. The component accepts nodes, edges, and their respective types as props, enabling features like fitView and custom connection components. Requires React and React Flow.

```tsx
const App = () => (
  <Canvas
    edges={edges}
    edgeTypes={edgeTypes}
    fitView
    nodes={nodes}
    nodeTypes={nodeTypes}
    connectionLineComponent={Connection}
  >
    <Controls />
    <Panel position="top-left">
      <Button size="sm" variant="secondary">
        Export
      </Button>
    </Panel>
  </Canvas>
);

export default App;
```

--------------------------------

### React useMemo Example

Source: https://ai-sdk.dev/elements/examples/chatbot

Shows how useMemo can be used to memoize a value, preventing expensive calculations from running on every render. The calculation `expensiveSort(items)` only runs when `items` changes.

```jsx
// Without useMemo - expensive calculation runs on every render
const sortedList = expensiveSort(items);

// With useMemo - calculation only runs when items change
const sortedList = useMemo(() => expensiveSort(items), [items]);
```

--------------------------------

### Dijkstra's Algorithm Implementation in Python

Source: https://ai-sdk.dev/elements/components/artifact

This Python code defines a graph and then calls a `dijkstra` function (assumed to be defined elsewhere) to find the shortest path from a starting node. It takes a graph represented as an adjacency list and a starting node as input, returning the shortest distances to all other nodes.

```python
graph = {
    'A': {'B': 1, 'C': 4},
    'B': {'A': 1, 'C': 2, 'D': 5},
    'C': {'A': 4, 'B': 2, 'D': 1},
    'D': {'B': 5, 'C': 1}
}

print(dijkstra(graph, 'A'))
```

--------------------------------

### React Workflow Visualization with AI Elements

Source: https://ai-sdk.dev/elements/examples/workflow

Initializes and renders a workflow visualization using AI Elements and React Flow. It defines nodes with custom types, data, and positions, along with animated and temporary edges. Dependencies include '@xyflow/react' and AI Elements components.

```tsx
"use client";

import { Canvas } from "@/components/ai-elements/canvas";
import { Edge } from "@/components/ai-elements/edge";
import {
  Node,
  NodeContent,
  NodeDescription,
  NodeFooter,
  NodeHeader,
  NodeTitle,
} from "@/components/ai-elements/node";
import { nanoid } from "nanoid";

const nodeIds = {
  start: nanoid(),
  process1: nanoid(),
  process2: nanoid(),
  decision: nanoid(),
  output1: nanoid(),
  output2: nanoid(),
};

const nodes = [
  {
    id: nodeIds.start,
    type: "workflow",
    position: { x: 0, y: 0 },
    data: {
      label: "Start",
      description: "Initialize workflow",
      handles: { target: false, source: true },
    },
  },
  {
    id: nodeIds.process1,
    type: "workflow",
    position: { x: 500, y: 0 },
    data: {
      label: "Process Data",
      description: "Transform input",
      handles: { target: true, source: true },
    },
  },
  {
    id: nodeIds.decision,
    type: "workflow",
    position: { x: 1000, y: 0 },
    data: {
      label: "Decision Point",
      description: "Route based on conditions",
      handles: { target: true, source: true },
    },
  },
  {
    id: nodeIds.output1,
    type: "workflow",
    position: { x: 1500, y: -100 },
    data: {
      label: "Success Path",
      description: "Handle success case",
      handles: { target: true, source: true },
    },
  },
  {
    id: nodeIds.output2,
    type: "workflow",
    position: { x: 1500, y: 100 },
    data: {
      label: "Error Path",
      description: "Handle error case",
      handles: { target: true, source: true },
    },
  },
  {
    id: nodeIds.process2,
    type: "workflow",
    position: { x: 2000, y: 0 },
    data: {
      label: "Complete",
      description: "Finalize workflow",
      handles: { target: true, source: false },
    },
  },
];

const edges = [
  {
    id: nanoid(),
    source: nodeIds.start,
    target: nodeIds.process1,
    type: "animated",
  },
  {
    id: nanoid(),
    source: nodeIds.process1,
    target: nodeIds.decision,
    type: "animated",
  },
  {
    id: nanoid(),
    source: nodeIds.decision,
    target: nodeIds.output1,
    type: "animated",
  },
  {
    id: nanoid(),
    source: nodeIds.decision,
    target: nodeIds.output2,
    type: "temporary",
  },
  {
    id: nanoid(),
    source: nodeIds.output1,
    target: nodeIds.process2,
    type: "animated",
  },
  {
    id: nanoid(),
    source: nodeIds.output2,
    target: nodeIds.process2,
    type: "temporary",
  },
];

const nodeTypes = {
  workflow: ({
    data,
  }: { data: { label: string; description: string; handles: { target: boolean; source: boolean } } }) => (
    <Node handles={data.handles}>
      <NodeHeader>
        <NodeTitle>{data.label}</NodeTitle>
        <NodeDescription>{data.description}</NodeDescription>
      </NodeHeader>
      <NodeContent>
        <p>test</p>
      </NodeContent>
      <NodeFooter>
        <p>test</p>
      </NodeFooter>
    </Node>
  ),
};

const edgeTypes = {
  animated: Edge.Animated,
  temporary: Edge.Temporary,
};

const Example = () => (
  <Canvas
    edges={edges}
    edgeTypes={edgeTypes}
    fitView
    nodes={nodes}
    nodeTypes={nodeTypes}
  />
);

export default Example;

```

--------------------------------

### Define Node IDs for Workflow (TypeScript)

Source: https://ai-sdk.dev/elements/examples/workflow

Creates a constant object to manage unique identifiers for each node in the workflow. This practice simplifies referencing nodes when defining connections (edges) and ensures consistency.

```typescript
const nodeIds = {
  start: 'start',
  process1: 'process1',
  process2: 'process2',
  decision: 'decision',
  output1: 'output1',
  output2: 'output2',
};
```

--------------------------------

### Completed Tool State with JSON Output - React

Source: https://ai-sdk.dev/elements/components/tool

Demonstrates a completed tool with successful results, specifically displaying a JSON object output. This example uses React components and the CodeBlock component to render the JSON output in a formatted manner. The tool call includes input parameters, output data, and error handling.

```jsx
"use client";

import { CodeBlock } from "@/components/ai-elements/code-block";
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from "@/components/ai-elements/tool";
import type { ToolUIPart } from "ai";
import { nanoid } from "nanoid";

const toolCall: ToolUIPart = {
  type: "tool-database_query" as const,
  toolCallId: nanoid(),
  state: "output-available" as const,
  input: {
    query: "SELECT COUNT(*) FROM users WHERE created_at >= ?",
    params: ["2024-01-01"],
    database: "analytics",
  },
  output: [
    {
      "User ID": 1,
      Name: "John Doe",
      Email: "john@example.com",
      "Created At": "2024-01-15",
    },
    {
      "User ID": 2,
      Name: "Jane Smith",
      Email: "jane@example.com",
      "Created At": "2024-01-20",
    },
    {
      "User ID": 3,
      Name: "Bob Wilson",
      Email: "bob@example.com",
      "Created At": "2024-02-01",
    },
    {
      "User ID": 4,
      Name: "Alice Brown",
      Email: "alice@example.com",
      "Created At": "2024-02-10",
    },
    {
      "User ID": 5,
      Name: "Charlie Davis",
      Email: "charlie@example.com",
      "Created At": "2024-02-15",
    },
  ],
  errorText: undefined,
};

const Example = () => (
  <div style={{ height: "500px" }}>
    <Tool>
      <ToolHeader state={toolCall.state} type={toolCall.type} />
      <ToolContent>
        <ToolInput input={toolCall.input} />
        {toolCall.state === "output-available" && (
          <ToolOutput
            errorText={toolCall.errorText}
            output={
              <CodeBlock
                code={JSON.stringify(toolCall.output)}
                language="json"
              />
            }
          />
        )}
      </ToolContent>
    </Tool>
  </div>
);

export default Example;
```

--------------------------------

### Output Error State - React

Source: https://ai-sdk.dev/elements/components/tool

Illustrates a tool that encountered an error during execution. This example showcases the output error state, including error details like a connection timeout message.  It utilizes React components from the ai-elements library.

```jsx
"use client";

import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from "@/components/ai-elements/tool";
import type { ToolUIPart } from "ai";

const toolCall: ToolUIPart = {
  type: "tool-api_request" as const,
  toolCallId: "api_request_1",
  state: "output-error" as const,
  input: {
    url: "https://api.example.com/data",
    method: "GET",
    headers: {
      Authorization: "Bearer token123",
      "Content-Type": "application/json",
    },
    timeout: 5000,
  },
  output: undefined,
  errorText:
    "Connection timeout: The request took longer than 5000ms to complete. Please check your network connection and try again.",
};

const Example = () => (
  <div style={{ height: "500px" }}>
    <Tool>
      <ToolHeader state={toolCall.state} type={toolCall.type} />
      <ToolContent>
        <ToolInput input={toolCall.input} />
        {toolCall.state === "output-error" && (
          <ToolOutput
            errorText={toolCall.errorText}
            output={toolCall.output}
          />
        )}
      </ToolContent>
    </Tool>
  </div>
);

export default Example;
```

--------------------------------

### React Queue Component Implementation

Source: https://ai-sdk.dev/elements/components/queue

Complete TypeScript implementation of queue components including message handling, todo items, collapsible sections, and file attachments. Requires React, shadcn/ui, and Lucide icons.

```typescript
"use client";

import { Button } from "@repo/shadcn-ui/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/shadcn-ui/components/ui/collapsible";
import { ScrollArea } from "@repo/shadcn-ui/components/ui/scroll-area";
import { cn } from "@repo/shadcn-ui/lib/utils";
import { ChevronDownIcon, PaperclipIcon } from "lucide-react";
import type { ComponentProps } from "react";

export type QueueMessagePart = {
  type: string;
  text?: string;
  url?: string;
  filename?: string;
  mediaType?: string;
};

export type QueueMessage = {
  id: string;
  parts: QueueMessagePart[];
};

export type QueueTodo = {
  id: string;
  title: string;
  description?: string;
  status?: "pending" | "completed";
};

export type QueueItemProps = ComponentProps<"li">;

export const QueueItem = ({ className, ...props }: QueueItemProps) => (
  <li
    className={cn(
      "group flex flex-col gap-1 rounded-md px-3 py-1 text-sm transition-colors hover:bg-muted",
      className
    )}
    {...props}
  />
);

export type QueueItemIndicatorProps = ComponentProps<"span"> & {
  completed?: boolean;
};

export const QueueItemIndicator = ({
  completed = false,
  className,
  ...props
}: QueueItemIndicatorProps) => (
  <span
    className={cn(
      "mt-0.5 inline-block size-2.5 rounded-full border",
      completed
        ? "border-muted-foreground/20 bg-muted-foreground/10"
        : "border-muted-foreground/50",
      className
    )}
    {...props}
  />
);

export type QueueItemContentProps = ComponentProps<"span"> & {
  completed?: boolean;
};

export const QueueItemContent = ({
  completed = false,
  className,
  ...props
}: QueueItemContentProps) => (
  <span
    className={cn(
      "line-clamp-1 grow break-words",
      completed
        ? "text-muted-foreground/50 line-through"
        : "text-muted-foreground",
      className
    )}
    {...props}
  />
);

export type QueueItemDescriptionProps = ComponentProps<"div"> & {
  completed?: boolean;
};

export const QueueItemDescription = ({
  completed = false,
  className,
  ...props
}: QueueItemDescriptionProps) => (
  <div
    className={cn(
      "ml-6 text-xs",
      completed
        ? "text-muted-foreground/40 line-through"
        : "text-muted-foreground",
      className
    )}
    {...props}
  />
);

export type QueueItemActionsProps = ComponentProps<"div">;

export const QueueItemActions = ({
  className,
  ...props
}: QueueItemActionsProps) => (
  <div className={cn("flex gap-1", className)} {...props} />
);

export type QueueItemActionProps = Omit<
  ComponentProps<typeof Button>,
  "variant" | "size"
>;

export const QueueItemAction = ({
  className,
  ...props
}: QueueItemActionProps) => (
  <Button
    className={cn(
      "size-auto rounded p-1 text-muted-foreground opacity-0 transition-opacity hover:bg-muted-foreground/10 hover:text-foreground group-hover:opacity-100",
      className
    )}
    size="icon"
    type="button"
    variant="ghost"
    {...props}
  />
);

export type QueueItemAttachmentProps = ComponentProps<"div">;

export const QueueItemAttachment = ({
  className,
  ...props
}: QueueItemAttachmentProps) => (
  <div className={cn("mt-1 flex flex-wrap gap-2", className)} {...props} />
);

export type QueueItemImageProps = ComponentProps<"img">;

export const QueueItemImage = ({
  className,
  ...props
}: QueueItemImageProps) => (
  <img
    alt=""
    className={cn("h-8 w-8 rounded border object-cover", className)}
    height={32}
    width={32}
    {...props}
  />
);

export type QueueItemFileProps = ComponentProps<"span">;

export const QueueItemFile = ({
  children,
  className,
  ...props
}: QueueItemFileProps) => (
  <span
    className={cn(
      "flex items-center gap-1 rounded border bg-muted px-2 py-1 text-xs",
      className
    )}
    {...props}
  >
    <PaperclipIcon size={12} />
    <span className="max-w-[100px] truncate">{children}</span>
  </span>
);

export type QueueListProps = ComponentProps<typeof ScrollArea>;

export const QueueList = ({
  children,
  className,
  ...props
}: QueueListProps) => (
  <ScrollArea className={cn("-mb-1 mt-2", className)} {...props}>
    <div className="max-h-40 pr-4">
      <ul>{children}</ul>
    </div>
  </ScrollArea>
);

export type QueueSectionProps = ComponentProps<typeof Collapsible>;

export const QueueSection = ({
  className,
  defaultOpen = true,
  ...props
}: QueueSectionProps) => (
  <Collapsible className={cn(className)} defaultOpen={defaultOpen} {...props} />
);

export type QueueSectionTriggerProps = ComponentProps<"button">;

export const QueueSectionTrigger = ({
  children,
  className,
  ...props
}: QueueSectionTriggerProps) => (
  <CollapsibleTrigger asChild>
    <button
      className={cn(
```

--------------------------------

### Use CodeBlock with Copy Button - React/JSX

Source: https://ai-sdk.dev/elements/components/code-block

This example demonstrates using the `CodeBlock` component with a `CodeBlockCopyButton` component in React. It provides syntax highlighting and a copy-to-clipboard button for the code within the block.

```jsx
"use client";

import { CodeBlock, CodeBlockCopyButton } from "@/components/ai-elements/code-block";

const code = `function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`;

const Example = () => (
  <CodeBlock code={code} language="jsx">
    <CodeBlockCopyButton
      onCopy={() => console.log("Copied code to clipboard")}
      onError={() => console.error("Failed to copy code to clipboard")}
    />
  </CodeBlock>
);

export default Example;
```

--------------------------------

### Task Component Usage Example in React

Source: https://ai-sdk.dev/elements/components/task

This example demonstrates using the Task component to display a workflow progress list with file items and status indicators. It relies on React, nanoid for keys, and icons from @icons-pack/react-simple-icons. Inputs include task data array; outputs a rendered collapsible UI. Limitations: Fixed height container for demo.

```tsx
"use client";

import { SiReact } from "@icons-pack/react-simple-icons";
import {
  Task,
  TaskContent,
  TaskItem,
  TaskItemFile,
  TaskTrigger,
} from "@/components/ai-elements/task";
import { nanoid } from "nanoid";
import type { ReactNode } from "react";

const Example = () => {
  const tasks: { key: string; value: ReactNode }[] = [
    { key: nanoid(), value: 'Searching "app/page.tsx, components structure"' },
    {
      key: nanoid(),
      value: (
        <span className="inline-flex items-center gap-1" key="read-page-tsx">
          Read
          <TaskItemFile>
            <SiReact className="size-4" color="#149ECA" />
            <span>page.tsx</span>
          </TaskItemFile>
        </span>
      ),
    },
    { key: nanoid(), value: "Scanning 52 files" },
    { key: nanoid(), value: "Scanning 2 files" },
    {
      key: nanoid(),
      value: (
        <span className="inline-flex items-center gap-1" key="read-layout-tsx">
          Reading files
          <TaskItemFile>
            <SiReact className="size-4" color="#149ECA" />
            <span>layout.tsx</span>
          </TaskItemFile>
        </span>
      ),
    },
  ];

  return (
    <div style={{ height: "200px" }}>
      <Task className="w-full">
        <TaskTrigger title="Found project files" />
        <TaskContent>
          {tasks.map((task) => (
            <TaskItem key={task.key}>{task.value}</TaskItem>
          ))}
        </TaskContent>
      </Task>
    </div>
  );
};

export default Example;

```

--------------------------------

### React useEffect Hook Example

Source: https://ai-sdk.dev/elements/components/message

Illustrates the use of the useEffect hook for handling side effects in functional React components, such as updating the document title based on component state. Includes optional cleanup functionality.

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;

  // Cleanup function (optional)
  return () => {
    document.title = 'React App';
  };
}, [count]); // Dependency array
```

--------------------------------

### Image Component for AI SDK

Source: https://ai-sdk.dev/elements/components/image

Renders an image using the Image component, likely from a UI library. It accepts an image object with properties like src, alt, mediaType, and uint8Array. The example demonstrates how to spread these properties onto the Image component.

```javascript
const exampleImage = {
  src: "c0ZvnO5PcdM7vx+QmNPOL2f2ED9FaHwu5AFWQDEBlIJ64eo6wwAlLE7YY0cIALYJG0CDFjJIDCCIWjAKUkhkoAknAALQhDQrSAHXCG8bZm5RMk6OBxFmwD1Ow33Q1AuTtCE5sE/DKJ2EmOmSkEpRECAkAnFEBluZIxJkywxl0RwOI8syQIu7CJy2CUUakm+juLYkDWgICEMBOAQAQwATgkxA5IJYOfCIzSyB2zGfFrQHxkcGAFiAEkxoApVwx8BiggB10QiGhgpt454kiLtBzzAJBkgwY6EAjrYqCgZHDcQWN21lPRv8UkGiWib8FqACtHkN7gg9alI1swHKUYDQZkpUci2jRbAAg9yUAC0eAGIEdF8VaMdTlNPMlHQMHpHQEGQBZs7p2dbVz2wXvPZnGgSTIlwVQBxHEhjL0qBjsAxxwDdEAhGCHovJIAggNi6hcm5gBocLACBIBJpIp9BnkHTwabG0wDffZ9n3z7Zl/e+vzF/cHqd50Fv9QT7076B5PZAb7Fxn40rMThdp4mDv40QCSgN+oAMwyY5p51YqAEICwwzBKCRalipggMEEEQYgMAE2ARkABBJJsyZykzuSyLe6DMvR553hWuKNPlh6jw/OzCGzO5yte5Y4ShDt21UbR/0flACFqYk0pbQJzbafBdaRXwXSmP4J5iQI0mAsASxRyACRoaLjCLUAAKWcRTGEKqFSCtxcAKKSJRtGSqluOxBoMwOroTpuXZXBwchpNoOooBAylk7MAPaaIMwaAjWIwiIJqCzpliSLoJ9nzAshmswWQMIvQJIE9AuAiOwbKQ6GrrN9UljqPNrUklhDh01Vk8nJraYMzvKbcboyRJ4S0Ys75xHPajQFRo+ghic9AEQTASlJsoeQTiDAw6HCyJ00FYYdjuDCPYiwQkc3EYsk4oRA7VX+y/yLrdIGAGkw6yMZgDmICe0N2fapPuDjQT3jas9PEDDzukOZmUKHMQVoJGmCJIUtAxKVjlkQHkGTCJwWzYEBsqGloYiQtuUwBNqAQzqwTkiDvs5+fg6Wy7kMwJ9jbQVM2AGSNAUwaJIAl2ZogtgElYMUmUNggSA6wM7fBhnnFp1o7XEeX9HgHlpT0PetzhNnfuSPzaZrrN2L4b4/SQ2tlsyGDmHtPxHxgdy0Vsg6CC8rwMZLZu9O+6PBx0MIQL0XAQSQCxJ3nrZK41z9WksPzCICZGhpEzxpYAJATADEJHWCiNQgAAQSGGRkQRLYDIA3BkgqSUN5BLMAoIolFSQgjHAGCgExJAhCG50BkV8ExZDIg4HAIsCkQeQ/loUACpSIR0AEEihYgxFAwUYglqDpbNq393vsAckoBod1EoK7imalzAoIYODA2d5GDIAiRo1kANmimV3wwXYsjUBsAgSEgACSABgSChOhIiZmKDCawYdA1KEEHz1StcRUsY46S+sHpsaBF5RB0dk0fvm4jn5OiMjJ644GDOcsCtXhQOVCt0z0xOa4znf6D/LaDvkOON+ODCeyCzMKt/NeNtdOOAMd8n+aAuJhPnknxyeg0IIt0EeetMMCj8E4AXObFszvJQYaoAnQwM1Ssncel51IyRBpJhF4AMwWTnQo0CP6DWehIipBReDjg7lKfmCjsBqWCRLBnAjP1EOhoVcLF2s5ZnHRgiV8YtfF79Xrrz4EKZxxHnQ/7/gj7Ca5Jk9xHP6M3GI0+M9ic0pmEYsGNF3QlEEJkIVyQ0mQDTTycUKQwpoMyMl3OjApnIwBQAZNU0MzRsEUC24GiBcRBm1G8sCYACwNByhgpPLcUU+pglFAwWjRA1SDMBhImQM0oIBEEkyTRVFTIqCJEAUZpJsnoE8gqxaRMxwSqLZEnQ3BEGrRkgwbYiBlFlN53cpzSM7EBAhIWzpttDswCjNoPomoARD2AajVXqInN5o+VCKABBDsQQZBADiO/NgiS8mpdtA50nIvK3d7NWcoROs33D/BYXcoNnXcfu5Y6DjQ+PE/ZIw0lInTQDhmrwGf969NH9XRcoeOoswHP/eOsNGiBZmdpqfAvnf/ALoZ46dJMbwYLWXrBsD6gzK75woOsfKtt+hO2yeuO23GTV1XY6AkDG0EQyAzgdoFObJ1CAjmG6C7HuTNTrKzB+31wSJKfQ6EhOR+Z4xHFLUPCltglocQYW60kDmN4Xqrlxd8eO2JkHXf+3jqrfnRwAMCwREEpQpziZD0buleyAyvlPCRANoMo+Zxuz9Cheq73vcnKIvwuERISNFQOVgj4ltTxElGcthk/bwdHYWMSuSYGcbBcaHieBPqBYQUBIRBAG9BjWmQQRCuEOMBJ0BAWBjOCCFUAggLoFQ3ZFiAIZkgAKSCWEzoMAE5bZCS2HKbAkokbKIXXSO5JJAAIigCEefhIErEwROWI6RAzhQM1FiBWDmwgRCKCzbsgAyCSSMlqCWtWuRU2wx3QObAc6Bd4aMyi0GySywKgzI0BklAORM7CLJzjgWyZoQg+gSbnOZPRwcyCPBzscHBKt6EkJzUg2inW8L8jRwa48RdFRJYHQaNiZ8OGV91Dhbiei7sYcHpMxevgcnfO++7JmNOzveaPTMKzBudV79OCsCZUwdAMgBIn4o/EgT2OmSJLtTk/UGoESb0fXP7r8w7OANgYZDgsSFoTEbQ2WCDA60MtBEDW2NsC48JA/JjVuMfnX1EBqBks10sr9qRudKOftht+BVcxq6z5758zkaVMYGADWFT53nc9BgHZHqsHxBGTrM5MgN5NMvpX5/sFiHMYA7gkXQ05dgyt8gjtCzJZLWp6q7TjyjA6Fa9hjLs8efDLBA2ABhTZmLMIIQ9NA+NoE5G66dSGGxBN7oqanbLYE8INkAvcCOuGT4mZD2E0FJ2fe1viFpCYG1XBmwq27wtBMDJY5qMZKI2s6y/+0TMc7/K0WUVQBdMY5A32IAawWXmzYCvMfIGqR3ORBxhZjuyIsl9hAoAcUWTMg85OsHePlwIhb78BafLkQDMHqRl10NapcDlbfaM4Q2a8WWHxzbeJBi9cjwAw7+crfqxk965Q83Q7laE9gSLpfdDblPQkjrxTR4/K2ALgnbtkX2Zx9aDkqALakwEcQYUsBZ0XJjnxvJFX92J5Pq3G2tjuPjcde5h76pbjhnNIPHz00klB8SIB7QRmLGnHL/RPEExeqfKh0G5py+cwg8d+ECWavxviSbymS8ez6TqI8RANlv1FQr5PTkXJfTArUjMvwHd8cC5L1nedp4sc5mMap3yInzPtakfCrgdxPyYvUQ1g/PKsSAJDAE6V2ZPJrvjBneETYCcEmDLIeGWBBnpkGhuie5gQ2sdhFa4Qeet/P0L2Pag65O4FgNrMNBLoBKikEwok7USAZ1kEbsYKcSt66LfRTNJlKAjJSxQNI5elys1woGZewGTpgV83J2obgHYBV59vrZwZo833x8gVlPJPw9YIf8ANjz0yBytQXmj278znmyT53mthx1ubELXvtiUvIjJX1ETE5yzl9Ww9uPUekZYkgjSRsUEfBmiKZ9GgfuHv0pvznjnzkcFF3PVC71j5oYCfkm7UFTpCFRDBCMH/SQcFvfT6+R/Q/caNmYhXVOvMzmE0A+DIeHMfURosAG4MjwKW0JpGAYILPf9n462LWvj5jzPElzGiIlGR4RMFOnsF0GgMuAkoIyNrec6xvlQVKLf4XPTXA/Nvnfee+iZLwN/3nfprPLjDg8RnKT1Q7TV+x8VOjaMz9/Rw7GdHMUxv18DZweToy+wJF58ed0VGjsAzEIpwihGKMHdajKZhEfWyJtsQdRvXC+nsWVxvruBau4WCBt1uwoEPsm/J2I2hSFpjmeUYnYnODVcnMAQ4W2TJixNq50cD4TFmTQ3vRDW6PaVA7EPlZQElTJWb2/7DBNToM2MHFFDrNlg7vc+OKNvj66WNda62mB8JluIvWcn8Sbhe2WNGUJ56tH1j/ujJb/e6QpZDC1jxUqDa7GugGYRmTTEcmcVFlq2dGd0fOL4sb9i9G0swuRHeQOTca8gAmxQ3fSSzZvRkbjfZz87y9gtRuvHb40LVIE04F1QKXQ9NDfaeQa4yGLqjRKUOERGCEYMwAF1ghKw5DliBP7Yo23zMLnMnu5FbwIwXxzGUs5ByBtcL/v0PIBa5h7RX/flsATu0tA73jN390yepsv4BnpyXlXc51mBnD3W85A8YI1PxbfhbfNu9GTYLArkAwuJBB6F1Y5k921IFhvjg6yhS+ehyIZO2NZfEypXyU32FLRv6ux2eZ+SxoxjYYivSJYK30e7XoI6L6MnRodLHz82HOv9xmNk75GYK1yDa4wLgTf1c6ldU8i+HP0KQ0ZCM/48GGCs7ZDX5/kdALjYkVoPqhiX+dDi5I0ztx17H/nGsKeLIK3pYW7I6zwOJZfkmSg3W8a2cMMy+GKeRPzkobcALzG7hbXWvw117dWjeNlnfqmgL7/49BE4j7AcHaNpKuwonYXNmt5h9ijAe5ujl8gkDfNddOJ3xuFjkXAMHl+2P5oZ4H9P5oH+/COk/wA1IdH8j4Gi+fiQhdNWOoB8APeZ0Jk4H91v29+H5oj+95Pvm50d+Afg+/Wj9/1/OulPU/ZAoVOYk6sP/npdedMkkc8e+qtGD7kv80ffA1k9+kgGqyb0FGZHr40ZPic0P7+mZ1RC693h0+dGhJofzRMnodEyeoHjR/Lzj3/dCQ+B8/BOFo0eIHvfWCePLf8ANN9AJ+vYWhLer94wtV7u/XfK0Z4kiOCH+nviNHPBG24H14xpS5PEIExGsdx8AhqyQyrKDL21uEWWIQfBa25js17zoS2KAjuBcVv2WgAQDuAfIB1//9k=
```

--------------------------------

### Define Custom Workflow Node Types (TypeScript)

Source: https://ai-sdk.dev/elements/examples/workflow

Defines custom rendering for nodes with the type 'workflow'. It utilizes compound Node components from AI Elements to structure the node's header, title, description, content, footer, and toolbar, allowing for detailed node information and actions.

```typescript
const nodeTypes = {
  workflow: ({
    data,
  }: {
    data: {
      label: string;
      description: string;
      handles: { target: boolean; source: boolean };
      content: string;
      footer: string;
    };
  }) => (
    <Node handles={data.handles}>
      <NodeHeader>
        <NodeTitle>{data.label}</NodeTitle>
        <NodeDescription>{data.description}</NodeDescription>
      </NodeHeader>
      <NodeContent>
        <p className="text-sm">{data.content}</p>
      </NodeContent>
      <NodeFooter>
        <p className="text-muted-foreground text-xs">{data.footer}</p>
      </NodeFooter>
      <Toolbar>
        <Button size="sm" variant="ghost">
          Edit
        </Button>
        <Button size="sm" variant="ghost">
          Delete
        </Button>
      </Toolbar>
    </Node>
  ),
};
```

--------------------------------

### Implement Prompt Input Component in React

Source: https://ai-sdk.dev/elements/components/queue

Provides a comprehensive input area for user prompts, including features for attachments, text input, speech-to-text, a search action, and model selection. It manages input state and interactions with various sub-components.

```jsx
<PromptInput globalDrop multiple onSubmit={handleSubmit}>
  <PromptInputHeader>
    <PromptInputAttachments>
      {(attachment) => <PromptInputAttachment data={attachment} />}
    </PromptInputAttachments>
  </PromptInputHeader>
  <PromptInputBody>
    <PromptInputTextarea
      onChange={(e) => setText(e.target.value)}
      ref={textareaRef}
      value={text}
    />
  </PromptInputBody>
  <PromptInputFooter>
    <PromptInputTools>
      <PromptInputActionMenu>
        <PromptInputActionMenuTrigger />
        <PromptInputActionMenuContent>
          <PromptInputActionAddAttachments />
        </PromptInputActionMenuContent>
      </PromptInputActionMenu>
      <PromptInputSpeechButton
        onTranscriptionChange={setText}
        textareaRef={textareaRef}
      />
      <PromptInputButton>
        <GlobeIcon size={16} />
        <span>Search</span>
      </PromptInputButton>
      <ModelSelector
        onOpenChange={setModelSelectorOpen}
        open={modelSelectorOpen}
      >
        <ModelSelectorTrigger asChild>
          <PromptInputButton>
            {selectedModelData?.chefSlug && (
              <ModelSelectorLogo provider={selectedModelData.chefSlug} />
            )}
            {selectedModelData?.name && (
              <ModelSelectorName>
                {selectedModelData.name}
              </ModelSelectorName>
            )}
          </PromptInputButton>
        </ModelSelectorTrigger>
        <ModelSelectorContent>
          <ModelSelectorInput placeholder="Search models..." />
          <ModelSelectorList>
            <ModelSelectorEmpty>No models found.</ModelSelectorEmpty>
            {["OpenAI", "Anthropic", "Google"].map((chef) => (
              <ModelSelectorGroup key={chef} heading={chef}>
                {models
                  .filter((m) => m.chef === chef)
                  .map((m) => (
                    <ModelSelectorItem
                      key={m.id}
                      onSelect={() => {
                        setModel(m.id);
                        setModelSelectorOpen(false);
                      }}
                      value={m.id}
                    >
                      <ModelSelectorLogo provider={m.chefSlug} />
                      <ModelSelectorName>{m.name}</ModelSelectorName>
                      <ModelSelectorLogoGroup>
                        {m.providers.map((provider) => (
                          <ModelSelectorLogo
                            key={provider}
                            provider={provider}
                          />
                        ))}
                      </ModelSelectorLogoGroup>
                      {model === m.id ? (
                        <CheckIcon className="ml-auto size-4" />
                      ) : (
                        <div className="ml-auto size-4" />
                      )}
                    </ModelSelectorItem>
                  ))}
              </ModelSelectorGroup>
            ))}
          </ModelSelectorList>
        </ModelSelectorContent>
      </ModelSelector>
    </PromptInputTools>
    <PromptInputSubmit status={status} />
  </PromptInputFooter>
</PromptInput>
```

--------------------------------

### ChainOfThought Component Implementation - React

Source: https://ai-sdk.dev/elements/components/chain-of-thought

This snippet demonstrates how to import and use the ChainOfThought component and its sub-components from the '@/components/ai-elements' directory. It includes various elements like content, header, images, search results, and steps, showcasing a complete integration example.

```typescript
"use client";

import {
  ChainOfThought,
  ChainOfThoughtContent,
  ChainOfThoughtHeader,
  ChainOfThoughtImage,
  ChainOfThoughtSearchResult,
  ChainOfThoughtSearchResults,
  ChainOfThoughtStep,
} from "@/components/ai-elements/chain-of-thought";
import { Image } from "@/components/ai-elements/image";
import { ImageIcon, SearchIcon } from "lucide-react";

const exampleImage = {
  base64:
    "/9j/4AAQSkZJRgABAgEASABIAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/CABEIASwBLAMBEQACEQEDEQH/xAA5AAABAwUBAQEAAAAAAAAAAAACAQMEAAcICQoFBgsBAAICAwEBAAAAAAAAAAAAAAABAgQDBQYHCP/aAAwDAQACEAMQAAAA6gvHOmAGwEZpNjUKAUqkChpN1jSBAQUGgUT4INBU2iCAmnBqykiAQFCsRFNkCg4N+UWER4s5AxKFTaJC24JoGh0kygQxNtLEOWb6mCwi2eHwaF3M/HiybzVmsOTN7AOJCxxDjEQgINxgoQCYQGIRzZEeI0CiEFZSYJAOhAGFNkt1DJjbZWi7JdsdGxgJGz6eHMgeHlw+5jzXgsVLTZYdG2Cltpeu2W0MjkZEDzSJqJoCG0h6RQPBSJMlHTYQTGhOAQ0ECAZgPmnpdsWOcLHuFhkRv6TBn8+cPns2DxcuH6TFY82WPw82H6fBZFm0Pa8tuIox6EdZlfColMVtQbSIbrSDREiSfZHQKYgiSSKTBJAwXsvl/uXtQ0NhIrWPShk+yp2fmrWCdil8nbrwJwttd1lxKex+azV3xezis/G39NsalS6NKi3k6vLKQTYpOSEQCbjSp0ykp0xiI2OgBAiQaBaPPDkqvX9J+DbTsOT28Wb3MGX4i5WhyhAnj9OOR1OI1b65rLhU9lajYaX6LBa+Ns0bs5q2w3HHvR0OSWhwdNKAgQzECk4Kh+hOMdDYwiDJJEEayNf2c4c8m/t7iseDlxeBnr+TLH9Phs/Q4bHyNip4earcijtIbh83YrfV1blodno4LwjFGzMWeLoqrw6VdTkfQokGA3xACNuIdakMbGwIECnTRoYHylbbNoBhtfEqXIUk/LHltp7z0YXQpXviL1PBPd66YQax5761lkPrbmN2z1cqvYx62NG1ewoEjdi8HclpZGggJgoUbjTY3ROkn5KKk2gIupFCRMQ0j3cnHQ93Bx5shtdn7evnn2vKPQ9A4DbRJ/NW6OJG/wBB62GzmXznRmJgl5iemXf6vji+m/my29unldZr97elWYFfISQDIVA422hxj6H5jMU2DYNpusaiNhr32WLgyq9XPjPob866zp38V9hVCSKSQdA4JUUxAVgRlhm8vNv7L5NoA9f8hy2tVv0kOcm4ggoKbSI4xsHhPSTpKMk0NpCgbKQyGKmZ8GuTf21qXO0fxH0/aJwfd00gEwgUBSQZCQCTbJYzk9RXZcxyAfSXzj0Pxw9jmobyH2gAUG2QUNWhivQmR044CgWIIYsBNM4K7G8wdqbLtg8G9f2V8j1QoUCYiBApIUyTaIkSRPH0yakOt5vjk+mfmzsIp4+jegnWUFCIdCJSWQSEIz5EZAg2hodMJDKGRcgVjbaQ6W6/QS+cfcGnHTh3PHfNZMd5KV/ZDynQZWaHf0wx2nva3T/3fH4f73U+WY8zOV6q+PKdZwrfWvyn3x67FtpqhggmxvAoGAjRjyUuSYQ2MEMsRJ1kZAp6Ac93ktwb/vu+ePY+Q/2zyfPTl+lu5rNlbDMYT73UdTnl3dZt8x05o5MfavI/o6W0yx1d/wA+zU1n9Zy+bHDdxyjfQ3gH6d2mw3dxD4Kwk2woSDeCgWamoixG21QjTaEYiEHqc5jseNPf4v0Hfmv3O4Gv2usP3DxXTX6h5xM1cOjb5x+mPcq572avcmFi79LVZ9E/Pug/rfO+jTz31bPTwH3nDvPLkM+nvm3vK06ys3XNkNwShQzELCTRgo9KSaQ2NkQIpt8UceN7nb75x+jedj03g+tnxT1u01zDmF7R4v8An/8AsXz7n9p9t1SfK/2ZhvZoZR8/0xify4tQX0/8ocq3b+N/oOeX/SOGfg/vGKLsYD9jyOwK/qt0Xq3iRgbSDoDE43QUm41LaZTjoKQ1EVlJMksS8dn475b+rdL/AK/5B0P+T+p/aVba58OKm80l3NdsLlazZWT22nvbqdwglH8HsKFm9hSyX023snhsam+m0uO/Rc9sErm4n2rwGQRdYgxAwoCAgSR6TUWIDBTZRQUhtlj8o58vfUOsftOKza5fsLw66791VuMjQETx23vN5GaHpFY2kcggBu1Mcmlnr+b+vw2Mjur4vbf6x4pIQbTYzEbBHSDYopk21FR0KNsKECasSJhv437U3zXRWB2EdiXH9YqFAQqMsYN7zmUGi6KgRhtCCJ2hWXUD1fP3Io3ctvZ/DNiHU8SqHmII2UhsbglA5P0JKPFRlIAISMqIDYpYr63bXt+avpjVD23IbYuF7lSIKTjEDFLd8/8AfarefPbfnsjdB01NUyh4+LJpU73kMytZa2t/Q/zNcHDJQoEaMEGoOAbCgS8pHSaQAIAIUKYqI6eKHOdPzt6zpepDw32h1LQV6P5/g7v9Nb61W9NZPucU7FX6lq7eD6qEspNNsOmjyf0vHrFf5mff/CuuPY8zk/f08hBNoCCdTIVSbaJCCZNmo0WyJGxQAGk2NRNA2nw4Vuo6HvEfW7X5Yc2npPC7GtPdvfp9378Hkbrth8Faq/KZ8VvdlqMP7+C9uvv+dhuOeveOdb1Oo+OkGBMphJNoKTpN0FamyTMSMMhCMQFBNImyhsOQ2v0OtLU7m4dO1tp43rejfzP0HGHe6T24KPDM2Q83PDInT7XVL13M8n3rvmOMHRaLr1Wr6GauJyUX1JoirYoVDjGwdA2ElPyEGJSbIEIQQdCbiUxkepqzk41eX7ydjluW5bourvyD1N1HxN3X2T2WsuPTuXX1e4QXOb6n5pzXejcR8L0Og/RLx6fKOq6k3ElBBkKk6knB0hwQN+nJQotsKEgqHQwEqdCipk1wcLoMMND0H0aO5bxD1rKvRb8gbSodMsZs9Pwi+9eO2C2+q3RbXQ9m9GobRDNBtABAIInIYwOSIA9CRGSZBBikoIxAVNhCNRka3uD9E5Ft1gskrH0mfB0feeddJWTEvb6y9VC3felc56+75LEza0MialvrQ1eTaf2vnBg8mcgoitAMUKBsUEBA9iaYiR00aQYJNgoKyMnq62dbm439DaV4b7Pub8p9S4q/cfHse3kodREYqSM8jPiujPH1L+Be6aDPdvEtbvs3jfS9oNj0q85sPSiENwVMQDQg6FJYI50lEiMhQwAUMtfKSWn/AGtXQ7vaOjHdUc7OS6Ttd+X/oDN7keto9t1rHv8A1/fI/wDk//AEH/AP0X/wA//AGn/APAP/qf/AGf/AOg//9k=",
};

export default function ChainOfThoughtPage() {
  return (
    <ChainOfThought>
      <ChainOfThoughtHeader>AI Reasoning Steps</ChainOfThoughtHeader>

      <ChainOfThoughtStep title="Search for profiles">
        <ChainOfThoughtSearchResults>
          <ChainOfThoughtSearchResult>
            <SearchIcon />
            www.x.com
          </ChainOfThoughtSearchResult>
          <ChainOfThoughtSearchResult>
            <SearchIcon />
            www.instagram.com
          </ChainOfThoughtSearchResult>
          <ChainOfThoughtSearchResult>
            <SearchIcon />
            www.github.com
          </ChainOfThoughtSearchResult>
        </ChainOfThoughtSearchResults>
        <ChainOfThoughtContent>
          Searching for profiles for Hayden Bleasel
        </ChainOfThoughtContent>
      </ChainOfThoughtStep>

      <ChainOfThoughtStep title="Found profile photo">
        <ChainOfThoughtImage src={exampleImage} alt="Hayden Bleasel's profile photo" />
        <ChainOfThoughtContent>
          Found the profile photo for Hayden Bleasel
        </ChainOfThoughtContent>
      </ChainOfThoughtStep>

      <ChainOfThoughtStep title="Information about Hayden Bleasel">
        <ChainOfThoughtContent>
          Hayden Bleasel is an Australian product designer, software engineer, and founder. He is currently based in the United States working for Vercel, an American cloud application company.
        </ChainOfThoughtContent>
      </ChainOfThoughtStep>

      <ChainOfThoughtStep title="Search for recent work">
        <ChainOfThoughtSearchResults>
          <ChainOfThoughtSearchResult>
            <SearchIcon />
            www.github.com
          </ChainOfThoughtSearchResult>
          <ChainOfThoughtSearchResult>
            <SearchIcon />
            www.dribbble.com
          </ChainOfThoughtSearchResult>
        </ChainOfThoughtSearchResults>
      </ChainOfThoughtStep>
    </ChainOfThought>
  );
}

```

--------------------------------

### React Checkpoint Component Example

Source: https://ai-sdk.dev/elements/components/checkpoint

This React component demonstrates the usage of the Checkpoint, CheckpointIcon, and CheckpointTrigger from the ai-elements library. It manages conversation messages and provides functionality to restore the chat to a previous state based on defined checkpoints. Dependencies include various components from '@/components/ai-elements' and 'nanoid' for unique IDs.

```jsx
"use client";

import {
  Checkpoint,
  CheckpointIcon,
  CheckpointTrigger,
} from "@/components/ai-elements/checkpoint";
import { Conversation, ConversationContent } from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import { nanoid } from "nanoid";
import { Fragment, useState } from "react";

type MessageType = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const initialMessages: MessageType[] = [
  {
    id: nanoid(),
    role: "user",
    content: "What is React?",
  },
  {
    id: nanoid(),
    role: "assistant",
    content:
      "React is a JavaScript library for building user interfaces. It was developed by Facebook and is now maintained by Meta and a community of developers.",
  },
  {
    id: nanoid(),
    role: "user",
    content: "How does component state work?",
  },
];

const Example = () => {
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);
  const [checkpoints] = useState([
    { messageCount: 2, timestamp: new Date(Date.now() - 3_600_000) },
  ]);

  const handleRestore = (messageCount: number) => {
    setMessages(initialMessages.slice(0, messageCount));
  };

  return (
    <div className="flex size-full flex-col rounded-lg border p-6">
      <Conversation>
        <ConversationContent>
          {messages.map((message, index) => {
            const checkpoint = checkpoints.find(
              (cp) => cp.messageCount === index + 1
            );

            return (
              <Fragment key={message.id}>
                <Message from={message.role}>
                  <MessageContent>
                    <MessageResponse>{message.content}</MessageResponse>
                  </MessageContent>
                </Message>
                {checkpoint && (
                  <Checkpoint>
                    <CheckpointIcon />
                    <CheckpointTrigger
                      onClick={() => handleRestore(checkpoint.messageCount)}
                      tooltip="Restores workspace and chat to this point"
                    >
                      Restore checkpoint
                    </CheckpointTrigger>
                  </Checkpoint>
                )}
              </Fragment>
            );
          })}
        </ConversationContent>
      </Conversation>
    </div>
  );
};

export default Example;

```

--------------------------------

### Inline Citation Component Example (React)

Source: https://ai-sdk.dev/elements/components/inline-citation

This React component demonstrates the usage of the InlineCitation component. It takes citation text and an array of sources, rendering a hoverable pill that reveals a carousel of source details on interaction. Dependencies include various components from '@/components/ai-elements/inline-citation'.

```jsx
"use client";

import {
  InlineCitation,
  InlineCitationCard,
  InlineCitationCardBody,
  InlineCitationCardTrigger,
  InlineCitationCarousel,
  InlineCitationCarouselContent,
  InlineCitationCarouselHeader,
  InlineCitationCarouselIndex,
  InlineCitationCarouselItem,
  InlineCitationCarouselNext,
  InlineCitationCarouselPrev,
  InlineCitationSource,
  InlineCitationText,
} from "@/components/ai-elements/inline-citation";

const citation = {
  text: "The technology continues to evolve rapidly, with new breakthroughs being announced regularly",
  sources: [
    {
      title: "Advances in Natural Language Processing",
      url: "https://example.com/nlp-advances",
      description:
        "A comprehensive study on the recent developments in natural language processing technologies and their applications.",
    },
    {
      title: "Breakthroughs in Machine Learning",
      url: "https://mlnews.org/breakthroughs",
      description:
        "An overview of the most significant machine learning breakthroughs in the past year.",
    },
    {
      title: "AI in Healthcare: Current Trends",
      url: "https://healthai.com/trends",
      description:
        "A report on how artificial intelligence is transforming healthcare and diagnostics.",
    },
    {
      title: "Ethics of Artificial Intelligence",
      url: "https://aiethics.org/overview",
      description:
        "A discussion on the ethical considerations and challenges in the development of AI.",
    },
    {
      title: "Scaling Deep Learning Models",
      url: "https://deeplearninghub.com/scaling-models",
      description:
        "Insights into the technical challenges and solutions for scaling deep learning architectures.",
    },
    {
      title: "Natural Language Understanding Benchmarks",
      url: "https://nlubenchmarks.com/latest",
      description:
        "A summary of the latest benchmarks and evaluation metrics for natural language understanding systems.",
    },
  ],
};

const Example = () => (
  <p className="text-sm leading-relaxed">
    According to recent studies, artificial intelligence has shown remarkable
    progress in natural language processing.{" "}
    <InlineCitation>
      <InlineCitationText>{citation.text}</InlineCitationText>
      <InlineCitationCard>
        <InlineCitationCardTrigger
          sources={citation.sources.map((source) => source.url)}
        />
        <InlineCitationCardBody>
          <InlineCitationCarousel>
            <InlineCitationCarouselHeader>
              <InlineCitationCarouselPrev />
              <InlineCitationCarouselNext />
              <InlineCitationCarouselIndex />
            </InlineCitationCarouselHeader>
            <InlineCitationCarouselContent>
              {citation.sources.map((source) => (
                <InlineCitationCarouselItem key={source.url}>
                  <InlineCitationSource
                    description={source.description}
                    title={source.title}
                    url={source.url}
                  />
                </InlineCitationCarouselItem>
              ))}
            </InlineCitationCarouselContent>
          </InlineCitationCarousel>
        </InlineCitationCardBody>
      </InlineCitationCard>
    </InlineCitation>
    .
  </p>
);

export default Example;

```

--------------------------------

### React useCallback Example

Source: https://ai-sdk.dev/elements/examples/chatbot

Illustrates the use of useCallback to memoize a function, preventing re-renders of child components when the function is passed as a prop.  The function is only recreated when the dependency 'count' changes.

```jsx
// Without useCallback - a new function is created on every render
const handleClick = () => {
  console.log(count);
};

// With useCallback - the function is only recreated when dependencies change
const handleClick = useCallback(() => {
  console.log(count);
}, [count]);
```

--------------------------------

### Implement Speech Recognition and Text Input

Source: https://ai-sdk.dev/elements/components/prompt-input

Handles speech recognition initialization, event handling for start, end, and result events. It updates a textarea with transcribed text and manages the listening state. Includes error handling and a cleanup function to stop recognition.

```typescript
      speechRecognition.lang = "en-US";

      speechRecognition.onstart = () => {
        setIsListening(true);
      };

      speechRecognition.onend = () => {
        setIsListening(false);
      };

      speechRecognition.onresult = (event) => {
        let finalTranscript = "";

        const results = Array.from(event.results);

        for (const result of results) {
          if (result.isFinal) {
            finalTranscript += result[0]?.transcript ?? "";
          }
        }

        if (finalTranscript && textareaRef?.current) {
          const textarea = textareaRef.current;
          const currentValue = textarea.value;
          const newValue =
            currentValue + (currentValue ? " " : "") + finalTranscript;

          textarea.value = newValue;
          textarea.dispatchEvent(new Event("input", { bubbles: true }));
          onTranscriptionChange?.(newValue);
        }
      };

      speechRecognition.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        setIsListening(false);
      };

      recognitionRef.current = speechRecognition;
      setRecognition(speechRecognition);
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [textareaRef, onTranscriptionChange]);

  const toggleListening = useCallback(() => {
    if (!recognition) {
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
    }
  }, [recognition, isListening]);

  return (
    <PromptInputButton
      className={cn(
        "relative transition-all duration-200",
        isListening && "animate-pulse bg-accent text-accent-foreground",
        className
      )}
      disabled={!recognition}
      onClick={toggleListening}
      {...props}
    >
      <MicIcon className="size-4" />
    </PromptInputButton>
  );
};

```

--------------------------------

### Integrate AI SDK Components with React TypeScript

Source: https://ai-sdk.dev/elements/components/queue

Complete React component demonstrating integration of AI SDK PromptInput, ModelSelector, and Queue components. Handles form submission, streaming states, model selection, and todo management. Dependencies include @/components/ai-elements/* modules and lucide-react icons. Supports multiple AI providers and includes proper TypeScript types and React hooks for state management.

```typescript
"use client";

import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputHeader,
  type PromptInputMessage,
  PromptInputSpeechButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorLogo,
  ModelSelectorLogoGroup,
  ModelSelectorName,
  ModelSelectorTrigger,
} from "@/components/ai-elements/model-selector";
import {
  Queue,
  QueueItem,
  QueueItemAction,
  QueueItemActions,
  QueueItemContent,
  QueueItemDescription,
  QueueItemIndicator,
  QueueSection,
  QueueSectionContent,
  type QueueTodo,
} from "@/components/ai-elements/queue";
import { CheckIcon, GlobeIcon, Trash2 } from "lucide-react";
import { useRef, useState } from "react";

const models = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    chef: "OpenAI",
    chefSlug: "openai",
    providers: ["openai", "azure"],
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    chef: "OpenAI",
    chefSlug: "openai",
    providers: ["openai", "azure"],
  },
  {
    id: "claude-opus-4-20250514",
    name: "Claude 4 Opus",
    chef: "Anthropic",
    chefSlug: "anthropic",
    providers: ["anthropic", "azure", "google", "amazon-bedrock"],
  },
  {
    id: "claude-sonnet-4-20250514",
    name: "Claude 4 Sonnet",
    chef: "Anthropic",
    chefSlug: "anthropic",
    providers: ["anthropic", "azure", "google", "amazon-bedrock"],
  },
  {
    id: "gemini-2.0-flash-exp",
    name: "Gemini 2.0 Flash",
    chef: "Google",
    chefSlug: "google",
    providers: ["google"],
  },
];

const SUBMITTING_TIMEOUT = 200;
const STREAMING_TIMEOUT = 2000;

const sampleTodos: QueueTodo[] = [
  {
    id: "todo-1",
    title: "Write project documentation",
    description: "Complete the README and API docs",
    status: "completed",
  },
  {
    id: "todo-2",
    title: "Implement authentication",
    status: "pending",
  },
  {
    id: "todo-3",
    title: "Fix bug #42",
    description: "Resolve crash on settings page",
    status: "pending",
  },
  {
    id: "todo-4",
    title: "Refactor queue logic",
    description: "Unify queue and todo state management",
    status: "pending",
  },
  {
    id: "todo-5",
    title: "Add unit tests",
    description: "Increase test coverage for hooks",
    status: "pending",
  },
];

const Example = () => {
  const [todos, setTodos] = useState(sampleTodos);

  const handleRemoveTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const [text, setText] = useState<string>("");
  const [model, setModel] = useState<string>(models[0].id);
  const [modelSelectorOpen, setModelSelectorOpen] = useState(false);
  const [status, setStatus] = useState<
    "submitted" | "streaming" | "ready" | "error"
  >("ready");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const selectedModelData = models.find((m) => m.id === model);

  const stop = () => {
    console.log("Stopping request...");

    // Clear any pending timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setStatus("ready");
  };

  const handleSubmit = (message: PromptInputMessage) => {
    // If currently streaming or submitted, stop instead of submitting
    if (status === "streaming" || status === "submitted") {
      stop();
      return;
    }

    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);

    if (!(hasText || hasAttachments)) {
      return;
    }

    setStatus("submitted");

    console.log("Submitting message:", message);

    setTimeout(() => {
      setStatus("streaming");
    }, SUBMITTING_TIMEOUT);

    timeoutRef.current = setTimeout(() => {
      setStatus("ready");
      timeoutRef.current = null;
    }, STREAMING_TIMEOUT);
  };

  return (
    <div className="flex size-full flex-col justify-end">
      <Queue className="mx-auto max-h-[150px] w-[95%] overflow-y-auto rounded-b-none border-input border-b-0">
        {todos.length > 0 && (
          <QueueSection>
            <QueueSectionContent>
              <div>
                {todos.map((todo) => {
                  const isCompleted = todo.status === "completed";

                  return (
                    <QueueItem key={todo.id}>
```

--------------------------------

### Configure database_query tool with input-streaming state

Source: https://ai-sdk.dev/elements/components/tool

This JavaScript snippet configures a 'database_query' tool in an 'input-streaming' state. It includes the tool header and an empty tool input, indicating that the tool is ready to receive input but none has been provided yet.

```javascript
"use client";

import {
  Tool,
  ToolHeader,
  ToolInput,
} from "@/components/ai-elements/tool";

// Example for input-streaming state
<Tool defaultOpen>
  <ToolHeader
    state="input-streaming"
    title="database_query"
    type="tool-database_query"
  />
  <ToolContent>
    <ToolInput input={{}} />
  </ToolContent>
</Tool>
```

--------------------------------

### Loader Component with Configurable Sizes (React/TypeScript)

Source: https://ai-sdk.dev/elements/components/loader

This example demonstrates how to use the `Loader` component with different size props. The `Loader` component provides a customizable spinning animation for UI feedback during asynchronous operations. It supports various sizes from 16px to 48px.

```typescript
"use client";

import { Loader } from "@/components/ai-elements/loader";

const Example = () => (
  <div className="flex items-center gap-8 p-8">
    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">Small (16px)</p>
      <Loader size={16} />
    </div>

    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">Medium (24px)</p>
      <Loader size={24} />
    </div>

    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">Large (32px)</p>
      <Loader size={32} />
    </div>

    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">Extra Large (48px)</p>
      <Loader size={48} />
    </div>
  </div>
);

export default Example;

```

--------------------------------

### Displaying AI-Generated Image with Image Component (React)

Source: https://ai-sdk.dev/elements/components/image

This code demonstrates how to use the Image component to display an AI-generated image. It imports the Image component and defines an example image object with a base64 data URI. The component then renders this object as an image element.

```jsx
"use client";

import { Image } from "@/components/ai-elements/image";

const exampleImage = {
  base64:
    "/9j/4AAQSkZJRgABAgEASABIAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/CABEIASwBLAMBEQACEQEDEQH/xAA5AAABAwUBAQEAAAAAAAAAAAACAQMEAAcICQoFBgsBAAICAwEBAAAAAAAAAAAAAAABAgQDBQYHCP/aAAwDAQACEAMQAAAA6gvHOmAGwEZpNjUKAUqkChpN1jSBAQUGgUT4INBU2iCAmnBqykiAQFCsRFNkCg4N+UWER4s5AxKFTaJC24JoGh0kygQxNtLEOWb6mCwi2eHwaF3M/HiybzVmsOTN7AOJCxxDjEQgINxgoQCYQGIRzZEeI0CiEFZSYJAOhAGFNkt1DJjbZWi7JdsdGxgJGz6eHMgeHlw+5jzXgsVLTZYdG2Cltpeu2W0MjkZEDzSJqJoCG0h6RQPBSJMlHTYQTGhOAQ0ECAZgPmnpdsWOcLHuFhkRv6TBn8+cPns2DxcuH6TFY82WPw82H6fBZFm0Pa8tuIox6EdZlfColMVtQbSIbrSDREiSfZHQKYgiSSKTBJAwXsvl/uXtQ0NhIrWPShk+yp2fmrWCdil8nbrwJwttd1lxKex+azV3xezis/G39NsalS6NKi3k6vLKQTYpOSEQCbjSp0ykp0xiI2OgBAiQaBaPPDkqvX9J+DbTsOT28Wb3MGX4i5WhyhAnj9OOR1OI1b65rLhU9lajYaX6LBa+Ns0bs5q2w3HHvR0OSWhwdNKAgQzECk4Kh+hOMdDYwiDJJEEayNf2c4c8m/t7iseDlxeBnr+TLH9Phs/Q4bHyNip4earcijtIbh83YrfV1blodno4LwjFGzMWeLoqrw6VdTkfQokGA3xACNuIdakMbGwIECnTRoYHylbbNoBhtfEqXIUk/LHltp7z0YXQpXviL1PBPd66YQax5761lkPrbmN2z1cqvYx62NG1ewoEjdi8HclpZGggJgoUbjTY3ROkn5KKk2gIupFCRMQ0j3cnHQ93Bx5shtdn7evnn2vKPQ9A4DbRJ/NW6OJG/0B62GzmXznRmJgl5iemXf6vji+m/my29unldZr97elWYFfISQDIVA422hxj6H5jMU2DYNpusaiNhr32WLgyq9XPjPob866zp38V9hVCSKSQdA4JUUxAVgRlhm8vNv7L5NoA9f8hy2tVv0kOcm4ggoKbSI4xsHhPSTpKMk0NpCgbKQyGKmZ8GuTf21qXO0fxH0/aJwfd00gEwgUBSQZCQCTbJYzk9RXZcxyAfSXzj0Pxw9jmobyH2gAUG2QUNWhivQmR044CgWIIYsBNM4K7G8wdqbLtg8G9f2V8j1QoUCYiBApIUyTaIkSRPH0yakOt5vjk+mfmzsIp4+jegnWUFCIdCJSWQSEIz5EZAg2hodMJDKGRcgVjbaQ6W6/QS+cfcGnHTh3PHfNZMd5KV/ZDynQZWaHf0wx2nva3T/3fH4f73U+WY8zOV6q+PKdZwrfWvyn3x67FtpqhggmxvAoGAjRjyUuSYQ2MEMsRJ1kZAp6Ac93ktwb/vu+ePY+Q/2zyfPTl+lu5rNlbDMYT73UdTnl3dZt8x05o5MfavI/o6W0yx1d/wA+zU1n9Zy+bHDdxyjfQ3gH6d2mw3dxD4Kwk2woSDeCgWamoixG21QjTaEYiEHqc5jseNPf4v0Hfmv3O4Gv2usP3DxXTX6h5xM1cOjb5x+mPcq572avcmFi79LVZ9E/Pug/rfO+jTz31bPTwH3nDvPLkM+nvm3vK06ys3XNkNwShQzELCTRgo9KSaQ2NkQIpt8UceN7nb75x+jedj03g+tnxT1u01zDmF7R4v8An/8AsXz7n9p9t1SfK/2ZhvZoZR8/0xify4tQX0/8ocq3b+N/oOeX/SOGfg/vGKLsYD9jyOwK/qt0Xq3iRgbSDoDE43QUm41LaZTjoKQ1EVlJMksS8dn475b+rdL/AK/5B0P+T+p/aVba58OKm80l3NdsLlazZWT22nvbqdwglH8HsKFm9hSyX023snhsam+m0uO/Rc9sErm4n2rwGQRdYgxAwoCAgSR6TUWIDBTZRQUhtlj8o58vfUOsftOKza5fsLw66791VuMjQETx23vN5GaHpFY2kcggBu1Mcmlnr+b+vw2Mjur4vbf6x4pIQbTYzEbBHSDYopk21FR0KNsKECasSJhv437U3zXRWB2EdiXH9YqFAQqMsYN7zmUGi6KgRhtCCJ2hWXUD1fP3Io3ctvZ/DNiHU8SqHmII2UhsbglA5P0JKPFRlIAISMqIDYpYr63bXt+avpjVD23IbYuF7lSIKTjEDFLd8/8AfarefPbfnsjdB01NUyh4+LJpU73kMytZa2t/Q/zNcHDJQoEaMEGoOAbCgS8pHSaQAIAIUKYqI6eKHOdPzt6zpepDw32h1LQV6P5/g7v9Nb61W9NZPucU7FX6lq7eD6qEspNNsOmjyf0vHrFf5mff/CuuPY8zk/f08hBNoCCdTIVSbaJCCZNmo0WyJGxQAGk2NRNA2nw4Vuo6HvEfW7X5Yc2npPC7GtPdvfp9378Hkbrth8Faq/KZ8VvdlqMP7+C9uvv+dhuOeveOdb1Oo+OkGBMphJNoKTpN0FamyTMSMMhCMQFBNImyhsOQ2v0OtLU7m4dO1tp43rejfzP0HGHe6T24KPDM2Q83PDInT7XVL13M8n3rvmOMHRaLr1Wr6GauJyUX1JoirYoVDjGwdA2ElPyEGJSbIEIQQdCbiUxkepqzk41eX7ydjluW5bourvyD1N1HxN3X2T2WsuPTuXX1e4QXOb6n5pzXejcR8L0Og/RLx6fKOq6k3ElBBkKk6knB0hwQN+nJQotsKEgqHQwEqdCipk1wcLoMMND0H0aO5bxD1rKvRb8gbSodMsZs9Pwi+9eO2C2+q3RbXQ9m9GobRDNBtABAIInIYwOSIA9CRGSZBBikoIxAVNhCNRka3uD9E5Ft1gskrH0mfB0feeddJWTEvb6y9VC3felc56+75LEza0MialvrQ1eTaf2vnBg8mcgoitAMUKBsUEBA9iaYiR00aQYJNgoKyMnq62dbm439DaV4b7Pub8p9S4q/cfHse3kodREYqSM8jPiujPH1L+Be6aDPdvEtbvs3jfS9oNj0q85sPSiENwVMQDQg6FJYI50lEiMhQwAUMtfKSWn/AGtXQ7vaOjHdUc7OS6Ttd+X/AKMze5Hr7DbXUcf/ALB5pgnudR6GLLIhKDlx+HawZ5c/u+jvxL2T1ITtFuNTzR/RXgGpT1Xy3ZVRtdCeg2G9bSXr84JmkoOAKZNmDYvXkQ4isYFilZjpj3FPUFt6WpLa1PkckIkXQ9/PkHp3Zh8xfSMiSGLt9Geg3uOW1c91xPlNXLqW9lnEdlmzynTPhTQo0Te3eN82H0X8+sRb04uD2ga23uW09vcrqLmybX53kxAgeZOkrUyXPBv6Og3fUNeuwqR0U3KFGGxEfZe/V3/0bfif69ufr9nQCnaMnhXPI00yBiBN5qgg5MfEr9lfIuIvVcvScicWk1aaG6GT1bLvF013oY0N/ZBrbD7esDa1eGHstNj5awRk6B9pgJIQE6Q+xEbjPN+47jPlD6f9PFZQKHaglhtky+OlQEAyRhzE/SXzzpE9l8eAJIAJGyaYTnB6DISADeJqLnb/wAXufzM/SOet/OCIoAY60QIHnxc1xiKctxpGz7hOw7OPmP6Kyv5vpqAlLzk7KEvj3LxAwk6DR8xf0n8+ax/SfNvGTSTnEYw30PyPaSlNqhxnnI+YH9BGX0sox0ExUG0AKxqI2NGCJsc9oIv14T3Geaegbr/K/TM1eT6a4VS98TapYQdXzGm/07zjSv6j5583nxMpECAwyQKQEdN4H2kHSEH8oDMofbQnBR6kk2xUNArBGaTaT0nDGopgQ4txhpSZpmLRuCj0WoKcpphNRABsaRLYCDYgNIdBocQXzrf3wo4eTjn6EouMAUiRDRKCOnQPuMQk6lQ3RMBJajqSBIaYBwcVCg+wSJjdEINpuMFDzARGTJr4qB97N+eOQk0n6M4sIVgIcZHRIY6HmRfoyQijRm2J5jIGhAFkhpRtJUKU3CTmOLMWLDbFKTJRISeAmvlB/Xh46G4ykuPoSTAzEbDFCTUcxxiqVCaHMCOJ0BGyHoOMcbaHmIDgUAgAKgGGBoYBmLnzTaPkEXDZ4ofE45/XuPo5R8UGLkipiCiknEE0gOtDEiubZGWmDDIinQKOS1GiPSQDVkKI6hW3BeZEpnvTfn4z5EP/xAAvEAACAQMEAgICAQQCAwEBAAABAgMEBQcGCBESAAkTIQoiFBUjMTIWQRckMxhC/9oACAEBAAEIAGcd1IZiwPHKhgW+Uk8L8nHHJkJYo5ZzwvnYMzcfOWLdQ/8AgMWcBT4XYjnxZmkZkWQ9v1VJT/bPjTsknRvkBdwomPxxljMRLGjd+OXYT9uFEbCT78kmTxZDzH1WUMyMxlID
```

--------------------------------

### Shimmer Component with Different Durations

Source: https://ai-sdk.dev/elements/components/shimmer

An example showcasing the `Shimmer` component's flexibility in controlling animation speed by adjusting the `duration` prop. It demonstrates fast, default, slow, and very slow shimmer effects.

```typescript
"use client";

import { Shimmer } from "@/components/ai-elements/shimmer";

const Example = () => (
  <div className="flex flex-col gap-6 p-8">
    <div className="text-center">
      <p className="mb-3 text-muted-foreground text-sm">Fast (1 second)</p>
      <Shimmer duration={1}>Loading quickly...</Shimmer>
    </div>

    <div className="text-center">
      <p className="mb-3 text-muted-foreground text-sm">Default (2 seconds)</p>
      <Shimmer duration={2}>Loading at normal speed...</Shimmer>
    </div>

    <div className="text-center">
      <p className="mb-3 text-muted-foreground text-sm">Slow (4 seconds)</p>
      <Shimmer duration={4}>Loading slowly...</Shimmer>
    </div>

    <div className="text-center">
      <p className="mb-3 text-muted-foreground text-sm">
        Very Slow (6 seconds)
      </p>
      <Shimmer duration={6}>Loading very slowly...</Shimmer>
    </div>
  </div>
);

export default Example;

```

--------------------------------

### Render citation sources with React

Source: https://ai-sdk.dev/elements/components/sources

Example implementation of a citation sources component using React and TypeScript. Displays a trigger with citation count and expands to show source links with external icons. Uses custom components from the AI SDK and Lucide icons.

```typescript
"use client";

import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/components/ai-elements/sources";
import { ChevronDownIcon, ExternalLinkIcon } from "lucide-react";

const sources = [
  { href: "https://stripe.com/docs/api", title: "Stripe API Documentation" },
  { href: "https://docs.github.com/en/rest", title: "GitHub REST API" },
  {
    href: "https://docs.aws.amazon.com/sdk-for-javascript/",
    title: "AWS SDK for JavaScript",
  },
];

const Example = () => (
  <div style={{ height: "110px" }}>
    <Sources>
      <SourcesTrigger count={sources.length}>
        <p className="font-medium">Using {sources.length} citations</p>
        <ChevronDownIcon className="size-4" />
      </SourcesTrigger>
      <SourcesContent>
        {sources.map((source) => (
          <Source href={source.href} key={source.href}>
            {source.title}
            <ExternalLinkIcon className="size-4" />
          </Source>
        ))}
      </SourcesContent>
    </Sources>
  </div>
);

export default Example;
```

--------------------------------

### Define Animated and Temporary Edge Types for React Flow

Source: https://ai-sdk.dev/elements/examples/workflow

Maps custom edge type names to their corresponding React Flow Edge components. This allows for distinct visual representations of different connection types, such as animated for active flows and temporary for conditional paths. Requires the React Flow library.

```tsx
const edgeTypes = {
  animated: Edge.Animated,
  temporary: Edge.Temporary,
};
```

--------------------------------

### Render Todo List Items with Status and Actions

Source: https://ai-sdk.dev/elements/components/queue

Renders a list of todo items, displaying their title and description. Each todo item includes a completion status indicator and actions like removing the todo. It conditionally renders the description if it exists.

```jsx
                return (
                  <QueueItem key={todo.id}>
                    <div className="flex items-center gap-2">
                      <QueueItemIndicator completed={isCompleted} />
                      <QueueItemContent completed={isCompleted}>
                        {todo.title}
                      </QueueItemContent>
                      <QueueItemActions>
                        <QueueItemAction
                          aria-label="Remove todo"
                          onClick={() => handleRemoveTodo(todo.id)}
                        >
                          <Trash2 size={12} />
                        </QueueItemAction>
                      </QueueItemActions>
                    </div>
                    {todo.description && (
                      <QueueItemDescription completed={isCompleted}>
                        {todo.description}
                      </QueueItemDescription>
                    )}
                  </QueueItem>
                );
              })}
            </QueueList>
          </QueueSectionContent>
        </QueueSection>
      
```

--------------------------------

### Implement AI Context Display Component

Source: https://ai-sdk.dev/elements/components/context

A compound component system for displaying AI model context window usage, token consumption, and cost estimation. Uses React hooks and components to show interactive hover card interface with token breakdown. Requires AI Elements component library dependencies. Takes model configuration and usage data as inputs.

```javascript
"use client";

import {
  Context,
  ContextCacheUsage,
  ContextContent,
  ContextContentBody,
  ContextContentFooter,
  ContextContentHeader,
  ContextInputUsage,
  ContextOutputUsage,
  ContextReasoningUsage,
  ContextTrigger,
} from "@/components/ai-elements/context";

const Example = () => (
  <div className="flex items-center justify-center p-8">
    <Context
      maxTokens={128_000}
      modelId="openai:gpt-5"
      usage={{
        inputTokens: 32_000,
        outputTokens: 8000,
        totalTokens: 40_000,
        cachedInputTokens: 0,
        reasoningTokens: 0,
      }}
      usedTokens={40_000}
    >
      <ContextTrigger />
      <ContextContent>
        <ContextContentHeader />
        <ContextContentBody>
          <ContextInputUsage />
          <ContextOutputUsage />
          <ContextReasoningUsage />
          <ContextCacheUsage />
        </ContextContentBody>
        <ContextContentFooter />
      </ContextContent>
    </Context>
  </div>
);

export default Example;
```

--------------------------------

### Render Queue with Messages and Todos in React (TypeScript)

Source: https://ai-sdk.dev/elements/components/queue

This snippet shows how to import the Queue components, define sample messages and todos, manage their state with React hooks, and render them inside collapsible sections. It includes handlers for removing items and a placeholder action for sending a message. The code requires React, lucide-react icons, and the custom ai-elements/queue component library.

```typescript
"use client";

import {
  Queue,
  QueueItem,
  QueueItemAction,
  QueueItemActions,
  QueueItemAttachment,
  QueueItemContent,
  QueueItemDescription,
  QueueItemFile,
  QueueItemImage,
  QueueItemIndicator,
  QueueList,
  type QueueMessage,
  QueueSection,
  QueueSectionContent,
  QueueSectionLabel,
  QueueSectionTrigger,
  type QueueTodo,
} from "@/components/ai-elements/queue";
import { ArrowUp, Trash2 } from "lucide-react";
import { useState } from "react";

const sampleMessages: QueueMessage[] = [
  {
    id: "msg-1",
    parts: [{ type: "text", text: "How do I set up the project?" }],
  },
  {
    id: "msg-2",
    parts: [{ type: "text", text: "What is the roadmap for Q4?" }],
  },
  {
    id: "msg-3",
    parts: [{ type: "text", text: "Update the default logo to this png." },
      {
      type: "file",
      url: "https://github.com/haydenbleasel.png",
      filename: "setup-guide.png",
      mediaType: "image/png",
    }
    ],
  },
  {
    id: "msg-4",
    parts: [{ type: "text", text: "Please generate a changelog." }],
  },
  {
    id: "msg-5",
    parts: [{ type: "text", text: "Add dark mode support." }],
  },
  {
    id: "msg-6",
    parts: [{ type: "text", text: "Optimize database queries." }],
  },
  {
    id: "msg-7",
    parts: [{ type: "text", text: "Set up CI/CD pipeline." }],
  },
];

const sampleTodos: QueueTodo[] = [
  {
    id: "todo-1",
    title: "Write project documentation",
    description: "Complete the README and API docs",
    status: "completed",
  },
  {
    id: "todo-2",
    title: "Implement authentication",
    status: "pending",
  },
  {
    id: "todo-3",
    title: "Fix bug #42",
    description: "Resolve crash on settings page",
    status: "pending",
  },
  {
    id: "todo-4",
    title: "Refactor queue logic",
    description: "Unify queue and todo state management",
    status: "pending",
  },
  {
    id: "todo-5",
    title: "Add unit tests",
    description: "Increase test coverage for hooks",
    status: "pending",
  },
];

const Example = () => {
  const [messages, setMessages] = useState(sampleMessages);
  const [todos, setTodos] = useState(sampleTodos);

  const handleRemoveMessage = (id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id));
  };

  const handleRemoveTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleSendNow = (id: string) => {
    console.log("Send now:", id);
    handleRemoveMessage(id);
  };

  if (messages.length === 0 && todos.length === 0) {
    return null;
  }

  return (
    <Queue>
      {messages.length > 0 && (
        <QueueSection>
          <QueueSectionTrigger>
            <QueueSectionLabel count={messages.length} label="Queued" />
          </QueueSectionTrigger>
          <QueueSectionContent>
            <QueueList>
              {messages.map((message) => {
                const summary = (() => {
                  const textParts = message.parts.filter(
                    (p) => p.type === "text"
                  );
                  const text = textParts
                    .map((p) => p.text)
                    .join(" ")
                    .trim();
                  return text || "(queued message)";
                })();

                const hasFiles = message.parts.some(
                  (p) => p.type === "file" && p.url
                );

                return (
                  <QueueItem key={message.id}>
                    <div className="flex items-center gap-2">
                      <QueueItemIndicator />
                      <QueueItemContent>{summary}</QueueItemContent>
                      <QueueItemActions>
                        <QueueItemAction
                          aria-label="Remove from queue"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleRemoveMessage(message.id);
                          }}
                          title="Remove from queue"

```

--------------------------------

### React Model Selector Component

Source: https://ai-sdk.dev/elements/components/model-selector

This React component, `Example`, utilizes the `useState` hook to manage the open state of the model selector and the currently selected model. It finds the data for the selected model and extracts unique chefs to group models. The component renders a `ModelSelector` with a `ModelSelectorTrigger` and `ModelSelectorContent`, containing input, grouping, and item rendering logic for selecting AI models.

```jsx
import {
  useState,
} from "react";
import {
  CheckIcon,
} from "@radix-ui/react-icons";

import {
  ModelSelector,
  ModelSelectorTrigger,
  ModelSelectorContent,
  ModelSelectorInput,
  ModelSelectorList,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorItem,
  ModelSelectorLogo, // Assuming this is a component for displaying logos
  ModelSelectorName, // Assuming this is a component for displaying names
  ModelSelectorLogoGroup,
} from "./_components/model-selector";
import {
  Button,
} from "./_components/ui/button"; // Assuming Button is from a UI library

const models = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    chef: "OpenAI",
    chefSlug: "openai",
    providers: ["openai"],
  },
  {
    id: "gpt-4-turbo",
    name: "GPT-4 Turbo",
    chef: "OpenAI",
    chefSlug: "openai",
    providers: ["openai"],
  },
  {
    id: "gpt-4",
    name: "GPT-4",
    chef: "OpenAI",
    chefSlug: "openai",
    providers: ["openai"],
  },
  {
    id: "grok-vision",
    name: "Grok Vision",
    chef: "xAI",
    chefSlug: "xai",
    providers: ["xai"],
  },
  {
    id: "moonshot-v1-128k",
    name: "Moonshot v1 128K",
    chef: "Moonshot AI",
    chefSlug: "moonshotai",
    providers: ["moonshotai"],
  },
  {
    id: "moonshot-v1-32k",
    name: "Moonshot v1 32K",
    chef: "Moonshot AI",
    chefSlug: "moonshotai",
    providers: ["moonshotai"],
  },
  {
    id: "sonar-pro",
    name: "Sonar Pro",
    chef: "Perplexity",
    chefSlug: "perplexity",
    providers: ["perplexity"],
  },
  {
    id: "sonar",
    name: "Sonar",
    chef: "Perplexity",
    chefSlug: "perplexity",
    providers: ["perplexity"],
  },
  {
    id: "v0-chat",
    name: "v0 Chat",
    chef: "Vercel",
    chefSlug: "v0",
    providers: ["vercel"],
  },
  {
    id: "nova-pro",
    name: "Nova Pro",
    chef: "Amazon",
    chefSlug: "amazon-bedrock",
    providers: ["amazon-bedrock"],
  },
  {
    id: "nova-lite",
    name: "Nova Lite",
    chef: "Amazon",
    chefSlug: "amazon-bedrock",
    providers: ["amazon-bedrock"],
  },
  {
    id: "nova-micro",
    name: "Nova Micro",
    chef: "Amazon",
    chefSlug: "amazon-bedrock",
    providers: ["amazon-bedrock"],
  },
];

const Example = () => {
  const [open, setOpen] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string>("gpt-4o");

  const selectedModelData = models.find((model) => model.id === selectedModel);

  // Get unique chefs in order of appearance
  const chefs = Array.from(new Set(models.map((model) => model.chef)));

  return (
    <div className="flex size-full items-center justify-center p-8">
      <ModelSelector onOpenChange={setOpen} open={open}>
        <ModelSelectorTrigger asChild>
          <Button className="w-[200px] justify-between" variant="outline">
            {selectedModelData?.chefSlug && (
              <ModelSelectorLogo provider={selectedModelData.chefSlug} />
            )}
            {selectedModelData?.name && (
              <ModelSelectorName>{selectedModelData.name}</ModelSelectorName>
            )}
            <CheckIcon className="ml-2 size-4 shrink-0 opacity-50" />
          </Button>
        </ModelSelectorTrigger>
        <ModelSelectorContent>
          <ModelSelectorInput placeholder="Search models..." />
          <ModelSelectorList>
            <ModelSelectorEmpty>No models found.</ModelSelectorEmpty>
            {chefs.map((chef) => (
              <ModelSelectorGroup key={chef} heading={chef}>
                {models
                  .filter((model) => model.chef === chef)
                  .map((model) => (
                    <ModelSelectorItem
                      key={model.id}
                      onSelect={() => {
                        setSelectedModel(model.id);
                        setOpen(false);
                      }}
                      value={model.id}
                    >
                      <ModelSelectorLogo provider={model.chefSlug} />
                      <ModelSelectorName>{model.name}</ModelSelectorName>
                      <ModelSelectorLogoGroup>
                        {model.providers.map((provider) => (
                          <ModelSelectorLogo
                            key={provider}
                            provider={provider}
                          />
                        ))}
                      </ModelSelectorLogoGroup>
                      {selectedModel === model.id ? (
                        <CheckIcon className="ml-auto size-4" />
                      ) : (
                        <div className="ml-auto size-4" />
                      )}
                    </ModelSelectorItem>
                  ))}
              </ModelSelectorGroup>
            ))}
          </ModelSelectorList>
        </ModelSelectorContent>
      </ModelSelector>
    </div>
  );
};

export default Example;
```

--------------------------------

### Render Message Queue Items with Actions and Attachments

Source: https://ai-sdk.dev/elements/components/queue

Renders a list of messages, each with potential actions (like sending) and file attachments. It differentiates between image attachments (displayed as previews) and other file types. Handles click events to prevent default propagation.

```jsx
                    <QueueItemAction
                          aria-label="Send now"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleSendNow(message.id);
                          }}
                        >
                          <ArrowUp size={14} />
                        </QueueItemAction>
                      </QueueItemActions>
                    </div>
                    {hasFiles && (
                      <QueueItemAttachment>
                        {message.parts
                          .filter((p) => p.type === "file" && p.url)
                          .map((file) => {
                            if (
                              file.mediaType?.startsWith("image/") &&
                              file.url
                            ) {
                              return (
                                <QueueItemImage
                                  alt={file.filename || "attachment"}
                                  key={file.url}
                                  src={file.url}
                                />
                              );
                            }
                            return (
                              <QueueItemFile key={file.url}>
                                {file.filename || "file"}
                              </QueueItemFile>
                            );
                          })}
                      </QueueItemAttachment>
                    )}
                  </QueueItem>
                );
              })}
            </QueueList>
          </QueueSectionContent>
        </QueueSection>
```

--------------------------------

### Platform-Specific OpenIn Dropdown Items in TypeScript

Source: https://ai-sdk.dev/elements/components/open-in-chat

These components render DropdownMenuItem elements linking to AI platforms using a query from useOpenInContext. They display platform icons, titles, and external link icons, with URLs generated via provider methods. Inputs include props from DropdownMenuItem; outputs are anchor tags with rel='noopener' and target='_blank'. Limitations: Requires pre-defined providers object and context setup; no built-in error handling for invalid queries.

```typescript
export type OpenInT3Props = ComponentProps<typeof DropdownMenuItem>;

export const OpenInT3 = (props: OpenInT3Props) => {
  const { query } = useOpenInContext();
  return (
    <DropdownMenuItem asChild {...props}>
      <a
        className="flex items-center gap-2"
        href={providers.t3.createUrl(query)}
        rel="noopener"
        target="_blank"
      >
        <span className="shrink-0">{providers.t3.icon}</span>
        <span className="flex-1">{providers.t3.title}</span>
        <ExternalLinkIcon className="size-4 shrink-0" />
      </a>
    </DropdownMenuItem>
  );
};

export type OpenInSciraProps = ComponentProps<typeof DropdownMenuItem>;

export const OpenInScira = (props: OpenInSciraProps) => {
  const { query } = useOpenInContext();
  return (
    <DropdownMenuItem asChild {...props}>
      <a
        className="flex items-center gap-2"
        href={providers.scira.createUrl(query)}
        rel="noopener"
        target="_blank"
      >
        <span className="shrink-0">{providers.scira.icon}</span>
        <span className="flex-1">{providers.scira.title}</span>
        <ExternalLinkIcon className="size-4 shrink-0" />
      </a>
    </DropdownMenuItem>
  );
};

export type OpenInv0Props = ComponentProps<typeof DropdownMenuItem>;

export const OpenInv0 = (props: OpenInv0Props) => {
  const { query } = useOpenInContext();
  return (
    <DropdownMenuItem asChild {...props}>
      <a
        className="flex items-center gap-2"
        href={providers.v0.createUrl(query)}
        rel="noopener"
        target="_blank"
      >
        <span className="shrink-0">{providers.v0.icon}</span>
        <span className="flex-1">{providers.v0.title}</span>
        <ExternalLinkIcon className="size-4 shrink-0" />
      </a>
    </DropdownMenuItem>
  );
};

export type OpenInCursorProps = ComponentProps<typeof DropdownMenuItem>;

export const OpenInCursor = (props: OpenInCursorProps) => {
  const { query } = useOpenInContext();
  return (
    <DropdownMenuItem asChild {...props}>
      <a
        className="flex items-center gap-2"
        href={providers.cursor.createUrl(query)}
        rel="noopener"
        target="_blank"
      >
        <span className="shrink-0">{providers.cursor.icon}</span>
        <span className="flex-1">{providers.cursor.title}</span>
        <ExternalLinkIcon className="size-4 shrink-0" />
      </a>
    </DropdownMenuItem>
  );
};
```

--------------------------------

### React Queue Component System with TypeScript

Source: https://ai-sdk.dev/elements/components/queue

A comprehensive queue component system featuring collapsible sections with animations, type-safe TypeScript definitions, and Tailwind CSS styling. Includes trigger buttons, labeled sections with counts and icons, and collapsible content areas. Supports accessibility, responsive design, and custom styling through className props.

```typescript
import React from 'react';
import { ComponentProps } from '@radix-ui/react-collapsible';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils';

// QueueSectionTrigger - collapsible button with hover effects
export type QueueSectionTriggerProps = ComponentProps<typeof CollapsibleTrigger>;

export const QueueSectionTrigger = ({
  children,
  className,
  ...props
}: QueueSectionTriggerProps) => (
  <CollapsibleTrigger asChild>
    <button
      className={cn(
        "group flex w-full items-center justify-between rounded-md bg-muted/40 px-3 py-2 text-left font-medium text-muted-foreground text-sm transition-colors hover:bg-muted",
        className
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  </CollapsibleTrigger>
);

// QueueSectionLabel - label content with icon and count
export type QueueSectionLabelProps = ComponentProps<"span"> & {
  count?: number;
  label: string;
  icon?: React.ReactNode;
};

export const QueueSectionLabel = ({
  count,
  label,
  icon,
  className,
  ...props
}: QueueSectionLabelProps) => (
  <span className={cn("flex items-center gap-2", className)} {...props}>
    <ChevronDownIcon className="group-data-[state=closed]:-rotate-90 size-4 transition-transform" />
    {icon}
    <span>
      {count} {label}
    </span>
  </span>
);

// QueueSectionContent - collapsible content area
export type QueueSectionContentProps = ComponentProps<
  typeof CollapsibleContent
>;

export const QueueSectionContent = ({
  className,
  ...props
}: QueueSectionContentProps) => (
  <CollapsibleContent className={cn(className)} {...props} />
);

export type QueueProps = ComponentProps<"div">;

export const Queue = ({ className, ...props }: QueueProps) => (
  <div
    className={cn(
      "flex flex-col gap-2 rounded-xl border border-border bg-background px-3 pt-2 pb-2 shadow-xs",
      className
    )}
    {...props}
  />
);
```

--------------------------------

### Render Queue Item Structure in React

Source: https://ai-sdk.dev/elements/components/queue

Renders a single item within a queue, displaying its title, description, and action buttons. It utilizes custom components like QueueItemIndicator, QueueItemContent, and QueueItemActions. Conditional rendering is used for the description based on its existence.

```jsx
<div className="flex items-center gap-2">
  <QueueItemIndicator completed={isCompleted} />
  <QueueItemContent completed={isCompleted}>
    {todo.title}
  </QueueItemContent>
  <QueueItemActions>
    <QueueItemAction
      aria-label="Remove todo"
      onClick={() => handleRemoveTodo(todo.id)}
    >
      <Trash2 size={12} />
    </QueueItemAction>
  </QueueItemActions>
</div>
{todo.description && (
  <QueueItemDescription completed={isCompleted}>
    {todo.description}
  </QueueItemDescription>
)}
</QueueItem>
```

--------------------------------

### Using AI Elements Message Component in React

Source: https://ai-sdk.dev/elements/usage

Demonstrates how to import and use the `Message` component from AI Elements within a React application. It maps through chat messages, rendering each message with its role and content, including text parts. This example uses the `useChat` hook from `@ai-sdk/react` to manage chat state.

```tsx
'use client';

import {
  Message,
  MessageContent,
  MessageResponse,
} from '@/components/ai-elements/message';
import { useChat } from '@ai-sdk/react';

const Example = () => {
  const { messages } = useChat();

  return (
    <>
      {messages.map(({ role, parts }, index) => (
        <Message from={role} key={index}>
          <MessageContent>
            {parts.map((part, i) => {
              switch (part.type) {
                case 'text':
                  return <MessageResponse key={`${role}-${i}`}>{part.text}</MessageResponse>;
              }
            })}
          </MessageContent>
        </Message>
      ))}
    </>
  );
};

export default Example;

```

--------------------------------

### Implement Shimmer effect on different HTML elements

Source: https://ai-sdk.dev/elements/components/shimmer

This example demonstrates how to use the Shimmer component with different HTML elements including paragraphs, headings, spans, and divs. The component accepts props for element type, styling, and animation control. It requires the Shimmer component import and React client-side rendering.

```jsx
"use client";

import { Shimmer } from "@/components/ai-elements/shimmer";

const Example = () => (
  <div className="flex flex-col gap-6 p-8">
    <div className="text-center">
      <p className="mb-3 text-muted-foreground text-sm">
        As paragraph (default)
      </p>
      <Shimmer as="p">This is rendered as a paragraph</Shimmer>
    </div>

    <div className="text-center">
      <p className="mb-3 text-muted-foreground text-sm">As heading</p>
      <Shimmer as="h2" className="font-bold text-2xl">
        Large Heading with Shimmer
      </Shimmer>
    </div>

    <div className="text-center">
      <p className="mb-3 text-muted-foreground text-sm">As span (inline)</p>
      <div>
        Processing your request{" "}
        <Shimmer as="span" className="inline">
          with AI magic
        </Shimmer>
        ...
      </div>
    </div>

    <div className="text-center">
      <p className="mb-3 text-muted-foreground text-sm">
        As div with custom styling
      </p>
      <Shimmer as="div" className="font-semibold text-lg">
        Custom styled shimmer text
      </Shimmer>
    </div>
  </div>
);

export default Example;
```

--------------------------------

### Customizing AI Elements Message Content Styles

Source: https://ai-sdk.dev/elements/usage

Shows how to customize the styling of the `MessageContent` component from AI Elements. This example specifically targets removing the rounded corners by modifying the Tailwind CSS classes applied to the `div` element. It highlights that direct modification of component files allows for easy customization.

```tsx
export const MessageContent = ({
  children,
  className,
  ...props
}: MessageContentProps) => (
  <div
    className={cn(
      'flex flex-col gap-2 text-sm text-foreground',
      'group-[.is-user]:bg-primary group-[.is-user]:text-primary-foreground group-[.is-user]:px-4 group-[.is-user]:py-3',
      className,
    )}
    {...props}
  >
    <div className="is-user:dark">{children}</div>
  </div>
);

```

--------------------------------

### Customize AI SDK Loader Styles (React)

Source: https://ai-sdk.dev/elements/components/loader

This code snippet demonstrates how to customize the AI SDK Loader component using various CSS classes and inline styles in a React application. It shows examples of changing loader colors, animation speeds, and applying different background containers. The `Loader` component accepts `className` and `style` props for customization.

```jsx
"use client";

import { Loader } from "@/components/ai-elements/loader";

const Example = () => (
  <div className="grid grid-cols-2 gap-6 p-8 md:grid-cols-4">
    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">Blue</p>
      <Loader className="text-blue-500" size={24} />
    </div>

    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">Green</p>
      <Loader className="text-green-500" size={24} />
    </div>

    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">Purple</p>
      <Loader className="text-purple-500" size={24} />
    </div>

    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">Orange</p>
      <Loader className="text-orange-500" size={24} />
    </div>

    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">Slow Animation</p>
      <Loader
        className="animate-spin text-blue-500"
        size={24}
        style={{ animationDuration: "3s" }}
      />
    </div>

    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">Fast Animation</p>
      <Loader
        className="animate-spin text-red-500"
        size={24}
        style={{ animationDuration: "0.5s" }}
      />
    </div>

    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">With Background</p>
      <div className="flex items-center justify-center rounded-lg bg-gray-100 p-3">
        <Loader className="text-gray-700" size={24} />
      </div>
    </div>

    <div className="text-center">
      <p className="mb-2 text-gray-600 text-sm">Dark Background</p>
      <div className="flex items-center justify-center rounded-lg bg-gray-800 p-3">
        <Loader className="text-white" size={24} />
      </div>
    </div>
  </div>
);

export default Example;

```

--------------------------------

### React Reasoning Component for AI Streaming UI

Source: https://ai-sdk.dev/elements/components/reasoning

A React component that utilizes Radix UI's Collapsible and Shadcn UI components to display AI-generated reasoning. It manages streaming states, open/closed states, and calculates the duration of AI thought processes. It requires a Shadcn UI setup for styling and components like Collapsible and CollapsibleContent.

```typescript
"use client";

import { useControllableState } from "@radix-ui/react-use-controllable-state";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/shadcn-ui/components/ui/collapsible";
import { cn } from "@repo/shadcn-ui/lib/utils";
import { BrainIcon, ChevronDownIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { createContext, memo, useContext, useEffect, useState } from "react";
import { Streamdown } from "streamdown";
import { Shimmer } from "./shimmer";

type ReasoningContextValue = {
  isStreaming: boolean;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  duration: number | undefined;
};

const ReasoningContext = createContext<ReasoningContextValue | null>(null);

const useReasoning = () => {
  const context = useContext(ReasoningContext);
  if (!context) {
    throw new Error("Reasoning components must be used within Reasoning");
  }
  return context;
};

export type ReasoningProps = ComponentProps<typeof Collapsible> & {
  isStreaming?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
};

const AUTO_CLOSE_DELAY = 1000;
const MS_IN_S = 1000;

export const Reasoning = memo(
  ({
    className,
    isStreaming = false,
    open,
    defaultOpen = true,
    onOpenChange,
    duration: durationProp,
    children,
    ...props
  }: ReasoningProps) => {
    const [isOpen, setIsOpen] = useControllableState({
      prop: open,
      defaultProp: defaultOpen,
      onChange: onOpenChange,
    });
    const [duration, setDuration] = useControllableState({
      prop: durationProp,
      defaultProp: undefined,
    });

    const [hasAutoClosed, setHasAutoClosed] = useState(false);
    const [startTime, setStartTime] = useState<number | null>(null);

    // Track duration when streaming starts and ends
    useEffect(() => {
      if (isStreaming) {
        if (startTime === null) {
          setStartTime(Date.now());
        }
      } else if (startTime !== null) {
        setDuration(Math.ceil((Date.now() - startTime) / MS_IN_S));
        setStartTime(null);
      }
    }, [isStreaming, startTime, setDuration]);

    // Auto-open when streaming starts, auto-close when streaming ends (once only)
    useEffect(() => {
      if (defaultOpen && !isStreaming && isOpen && !hasAutoClosed) {
        // Add a small delay before closing to allow user to see the content
        const timer = setTimeout(() => {
          setIsOpen(false);
          setHasAutoClosed(true);
        }, AUTO_CLOSE_DELAY);

        return () => clearTimeout(timer);
      }
    }, [isStreaming, isOpen, defaultOpen, setIsOpen, hasAutoClosed]);

    const handleOpenChange = (newOpen: boolean) => {
      setIsOpen(newOpen);
    };

    return (
      <ReasoningContext.Provider
        value={{ isStreaming, isOpen, setIsOpen, duration }}
      >
        <Collapsible
          className={cn("not-prose mb-4", className)}
          onOpenChange={handleOpenChange}
          open={isOpen}
          {...props}
        >
          {children}
        </Collapsible>
      </ReasoningContext.Provider>
    );
  }
);

export type ReasoningTriggerProps = ComponentProps<typeof CollapsibleTrigger>;

const getThinkingMessage = (isStreaming: boolean, duration?: number) => {
  if (isStreaming || duration === 0) {
    return <Shimmer duration={1}>Thinking...</Shimmer>;
  }
  if (duration === undefined) {
    return <p>Thought for a few seconds</p>;
  }
  return <p>Thought for {duration} seconds</p>;
};

export const ReasoningTrigger = memo(
  ({ className, children, ...props }: ReasoningTriggerProps) => {
    const { isStreaming, isOpen, duration } = useReasoning();

    return (
      <CollapsibleTrigger
        className={cn(
          "flex w-full items-center gap-2 text-muted-foreground text-sm transition-colors hover:text-foreground",
          className
        )}
        {...props}
      >
        {children ?? (
          <>
            <BrainIcon className="size-4" />
            {getThinkingMessage(isStreaming, duration)}
            <ChevronDownIcon
              className={cn(
                "size-4 transition-transform",
                isOpen ? "rotate-180" : "rotate-0"
              )}
            />
          </>
        )}
      </CollapsibleTrigger>
    );
  }
);

export type ReasoningContentProps = ComponentProps<
  typeof CollapsibleContent
> & {
  children: string;
};

export const ReasoningContent = memo(
  ({ className, children, ...props }: ReasoningContentProps) => (
    <CollapsibleContent
      className={cn(
        "mt-4 text-sm",
        "data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 text-muted-foreground outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      {...props}
    >
      {children}
    </CollapsibleContent>
  )
);

```

--------------------------------

### React Input Component Demo Usage

Source: https://ai-sdk.dev/elements/components/prompt-input

Shows a React component fragment demonstrating PromptInput component composition with status-based submit button control. Illustrates the usage pattern for building chat input interfaces with footer elements and demo wrapper structure.

```jsx
            <PromptInputSubmit disabled={!text && !status} status={status} />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
};

export default InputDemo;
```

--------------------------------

### Configure Multiple MCP Servers

Source: https://ai-sdk.dev/elements/mcp

This JSON configuration demonstrates how to integrate AI Elements alongside other MCP servers, such as GitHub and filesystem access. Each server is defined with its respective command and arguments, allowing an AI assistant to interact with multiple services simultaneously.

```json
{
  "mcpServers": {
    "ai-elements": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://registry.ai-sdk.dev/api/mcp"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    },
    "filesystem": {
      "command": "npx", 
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/project"]
    }
  }
}
```

--------------------------------

### Implement Chat Client with PromptInput and Conversation Components

Source: https://ai-sdk.dev/elements/examples/chatbot

A complete React client implementation using useChat hook and custom AI components. Handles text and file inputs, model selection, and renders conversation messages with sources and reasoning. Depends on @ai-sdk/react and lucide-react icons.

```typescript
'use client';

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  PromptInputHeader,
  type PromptInputMessage,
  PromptInputSelect,
  PromptInputSelectContent,
  PromptInputSelectItem,
  PromptInputSelectTrigger,
  PromptInputSelectValue,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputTools,
} from '@/components/ai-elements/prompt-input';
import { Action, Actions } from '@/components/ai-elements/actions';
import { Fragment, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { Response } from '@/components/ai-elements/response';
import { CopyIcon, GlobeIcon, RefreshCcwIcon } from 'lucide-react';
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from '@/components/ai-elements/sources';
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from '@/components/ai-elements/reasoning';
import { Loader } from '@/components/ai-elements/loader';

const models = [
  {
    name: 'GPT 4o',
    value: 'openai/gpt-4o',
  },
  {
    name: 'Deepseek R1',
    value: 'deepseek/deepseek-r1',
  },
];

const ChatBotDemo = () => {
  const [input, setInput] = useState('');
  const [model, setModel] = useState<string>(models[0].value);
  const [webSearch, setWebSearch] = useState(false);
  const { messages, sendMessage, status, regenerate } = useChat();

  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);

    if (!(hasText || hasAttachments)) {
      return;
    }

    sendMessage(
      { 
        text: message.text || 'Sent with attachments',
        files: message.files 
      },
      {
        body: {
          model: model,
          webSearch: webSearch,
        },
      },
    );
    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full h-screen">
      <div className="flex flex-col h-full">
        <Conversation className="h-full">
          <ConversationContent>
            {messages.map((message) => (
              <div key={message.id}>
                {message.role === 'assistant' && message.parts.filter((part) => part.type === 'source-url').length > 0 && (
                  <Sources>
                    <SourcesTrigger
                      count={
                        message.parts.filter(
                          (part) => part.type === 'source-url',
                        ).length
                      }
                    />
                    {message.parts.filter((part) => part.type === 'source-url').map((part, i) => (
                      <SourcesContent key={`${message.id}-${i}`}>
                        <Source
                          key={`${message.id}-${i}`}
                          href={part.url}
                          title={part.url}
                        />
                      </SourcesContent>
                    ))}
                  </Sources>
                )}
                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case 'text':
                      return (
                        <Fragment key={`${message.id}-${i}`}>
                          <Message from={message.role}>
                            <MessageContent>
                              <Response>
                                {part.text}
                              </Response>
                            </MessageContent>
                          </Message>
                          {message.role === 'assistant' && i === messages.length - 1 && (
                            <Actions className="mt-2">
                              <Action
                                onClick={() => regenerate()}
                                label="Retry"
                              >
                                <RefreshCcwIcon className="size-3" />
                              </Action>
                              <Action
                                onClick={() =>

```

--------------------------------

### Configure AI Elements MCP Server

Source: https://ai-sdk.dev/elements/mcp

This JSON configuration adds the AI Elements MCP server to your configuration file. It specifies the command to run and its arguments, including the registry URL. This is essential for enabling AI assistants to access AI Elements components.

```json
{
  "mcpServers": {
    "ai-elements": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://registry.ai-sdk.dev/api/mcp"
      ]
    }
  }
}
```

--------------------------------

### Show database_query tool in running state (input-available)

Source: https://ai-sdk.dev/elements/components/tool

This JavaScript snippet displays a 'database_query' tool in the 'input-available' state, signifying that the query is running. It includes the tool header and the tool input, indicating the query that is being processed.

```javascript
"use client";

import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
} from "@/components/ai-elements/tool";
import { nanoid } from "nanoid";

const toolCall = {
  type: "tool-database_query" as const,
  toolCallId: nanoid(),
  state: "input-available" as const,
  input: {
    query: "SELECT COUNT(*) FROM users WHERE created_at >= ?",
    params: ["2024-01-01"],
    database: "analytics",
  },
};

// Example for input-available state (Running)
<Tool>
  <ToolHeader
    state="input-available"
    title="database_query"
    type="tool-database_query"
  />
  <ToolContent>
    <ToolInput input={toolCall.input} />
  </ToolContent>
</Tool>
```

--------------------------------

### Backend API Route for AI Generation (TypeScript/Node.js)

Source: https://ai-sdk.dev/elements/components/web-preview

A backend API route (POST /api/v0) that receives a prompt, uses the v0-sdk to generate an application, and returns the demo and web URLs. It configures the model to act as an expert coder without image generations or thinking steps.

```typescript
import { v0 } from 'v0-sdk';

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const result = await v0.chats.create({
    system: 'You are an expert coder',
    message: prompt,
    modelConfiguration: {
      modelId: 'v0-1.5-sm',
      imageGenerations: false,
      thinking: false,
    },
  });

  return Response.json({
    demo: result.demo,
    webUrl: result.webUrl,
  });
}

```

--------------------------------

### React AI Elements Plan Component Implementation

Source: https://ai-sdk.dev/elements/components/plan

A detailed implementation of the AI Elements Plan component using React and shadcn/ui. It includes context management for streaming states and exports various sub-components for building a complete UI. Dependencies include shadcn/ui components and lucide-react for icons.

```typescript
"use client";

import { Button } from "@repo/shadcn-ui/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/shadcn-ui/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/shadcn-ui/components/ui/collapsible";
import { cn } from "@repo/shadcn-ui/lib/utils";
import { ChevronsUpDownIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { createContext, useContext } from "react";
import { Shimmer } from "./shimmer";

type PlanContextValue = {
  isStreaming: boolean;
};

const PlanContext = createContext<PlanContextValue | null>(null);

const usePlan = () => {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("Plan components must be used within Plan");
  }
  return context;
};

export type PlanProps = ComponentProps<typeof Collapsible> & {
  isStreaming?: boolean;
};

export const Plan = ({ 
  className,
  isStreaming = false,
  children,
  ...props
}: PlanProps) => (
  <PlanContext.Provider value={{ isStreaming }}>
    <Collapsible asChild data-slot="plan" {...props}>
      <Card className={cn("shadow-none", className)}>{children}</Card>
    </Collapsible>
  </PlanContext.Provider>
);

export type PlanHeaderProps = ComponentProps<typeof CardHeader>;

export const PlanHeader = ({ className, ...props }: PlanHeaderProps) => (
  <CardHeader
    className={cn("flex items-start justify-between", className)}
    data-slot="plan-header"
    {...props}
  />
);

export type PlanTitleProps = Omit<
  ComponentProps<typeof CardTitle>,
  "children"
> & {
  children: string;
};

export const PlanTitle = ({ children, ...props }: PlanTitleProps) => {
  const { isStreaming } = usePlan();

  return (
    <CardTitle data-slot="plan-title" {...props}>
      {isStreaming ? <Shimmer>{children}</Shimmer> : children}
    </CardTitle>
  );
};

export type PlanDescriptionProps = Omit<
  ComponentProps<typeof CardDescription>,
  "children"
> & {
  children: string;
};

export const PlanDescription = ({
  className,
  children,
  ...props
}: PlanDescriptionProps) => {
  const { isStreaming } = usePlan();

  return (
    <CardDescription
      className={cn("text-balance", className)}
      data-slot="plan-description"
      {...props}
    >
      {isStreaming ? <Shimmer>{children}</Shimmer> : children}
    </CardDescription>
  );
};

export type PlanActionProps = ComponentProps<typeof CardAction>;

export const PlanAction = (props: PlanActionProps) => (
  <CardAction data-slot="plan-action" {...props} />
);

export type PlanContentProps = ComponentProps<typeof CardContent>;

export const PlanContent = (props: PlanContentProps) => (
  <CollapsibleContent asChild>
    <CardContent data-slot="plan-content" {...props} />
  </CollapsibleContent>
);

export type PlanFooterProps = ComponentProps<"div">

export const PlanFooter = (props: PlanFooterProps) => (
  <CardFooter data-slot="plan-footer" {...props} />
);

export type PlanTriggerProps = ComponentProps<typeof CollapsibleTrigger>;

export const PlanTrigger = ({ className, ...props }: PlanTriggerProps) => (
  <CollapsibleTrigger asChild>
    <Button
      className={cn("size-8", className)}
      data-slot="plan-trigger"
      size="icon"
      variant="ghost"
      {...props}
    >
      <ChevronsUpDownIcon className="size-4" />
      <span className="sr-only">Toggle plan</span>
    </Button>
  </CollapsibleTrigger>
);

```

--------------------------------

### Display database_query tool with approval-responded state

Source: https://ai-sdk.dev/elements/components/tool

This JavaScript code demonstrates the 'approval-responded' state for a 'database_query' tool. It shows the tool's input and a confirmation component indicating that the action has been accepted, along with relevant icons and text.

```javascript
"use client";

import {
  Confirmation,
  ConfirmationAccepted,
  ConfirmationRejected,
  ConfirmationRequest,
  ConfirmationTitle,
} from "@/components/ai-elements/confirmation";
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
} from "@/components/ai-elements/tool";
import type { ToolUIPart } from "ai";
import { CheckIcon, XIcon } from "lucide-react";
import { nanoid } from "nanoid";

const toolCall = {
  type: "tool-database_query" as const,
  toolCallId: nanoid(),
  state: "approval-responded" as const,
  input: {
    query: "SELECT COUNT(*) FROM users WHERE created_at >= ?",
    params: ["2024-01-01"],
    database: "analytics",
  },
};

// Example for approval-responded state
<Tool>
  <ToolHeader
    state={"approval-responded" as ToolUIPart["state"]}
    title="database_query"
    type="tool-database_query"
  />
  <ToolContent>
    <ToolInput input={toolCall.input} />
    <Confirmation
      approval={{ id: nanoid(), approved: true }}
      state="approval-responded"
    >
      <ConfirmationTitle>
        <ConfirmationRequest>
          This tool will execute a query on the production database.
        </ConfirmationRequest>
        <ConfirmationAccepted>
          <CheckIcon className="size-4 text-green-600 dark:text-green-400" />
          <span>Accepted</span>
        </ConfirmationAccepted>
        <ConfirmationRejected>
          <XIcon className="size-4 text-destructive" />
          <span>Rejected</span>
        </ConfirmationRejected>
      </ConfirmationTitle>
    </Confirmation>
  </ToolContent>
</Tool>
```

--------------------------------

### Displaying Files in a Command List (React)

Source: https://ai-sdk.dev/elements/components/prompt-input

This component renders a list of files, categorized into 'Added' and 'Other Files'. It maps over file data to display file paths and locations, utilizing icons and formatting for clarity. It handles the case where no results are found.

```jsx
<PromptInputCommandList>
  <PromptInputCommandEmpty className="p-3 text-muted-foreground text-sm">
    No results found.
  </PromptInputCommandEmpty>
  <PromptInputCommandGroup heading="Added">
    <PromptInputCommandItem>
      <GlobeIcon />
      <span>Active Tabs</span>
      <span className="ml-auto text-muted-foreground">✓</span>
    </PromptInputCommandItem>
  </PromptInputCommandGroup>
  <PromptInputCommandSeparator />
  <PromptInputCommandGroup heading="Other Files">
    {sampleFiles.added.map((file, index) => (
      <PromptInputCommandItem key={`${file.path}-${index}`}>
        <GlobeIcon className="text-primary" />
        <div className="flex flex-col">
          <span className="font-medium text-sm">
            {file.path}
          </span>
          <span className="text-muted-foreground text-xs">
            {file.location}
          </span>
        </div>
      </PromptInputCommandItem>
    ))}
  </PromptInputCommandGroup>
</PromptInputCommandList>
```

--------------------------------

### Implement chatbot UI with React components

Source: https://ai-sdk.dev/elements/examples/chatbot

Creates a chat interface using AI Elements components including message display, input handling, and action menus. Supports streaming responses, file attachments, and web search toggle. Depends on React and AI Elements library components.

```jsx
import React, { useState } from 'react';

const ChatBotDemo = () => {
  const [input, setInput] = useState('');
  const [webSearch, setWebSearch] = useState(false);
  const [model, setModel] = useState('gpt-4');
  
  // Mock data for demonstration
  const messages = [];
  const status = 'idle';
  const models = [
    { value: 'gpt-4', name: 'GPT-4' },
    { value: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic
  };

  return (
    <div>
      <div>
        <Conversation>
          <ConversationContent>
            {messages.map((message) => (
              <div key={message.id}>
                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case 'text':
                      return (
                        <Fragment key={`${message.id}-${i}`}>
                          <Markdown>{part.text}</Markdown>
                          {part.source && (
                            <Actions>
                              <Action
                                onClick={() => 
                                  navigator.clipboard.writeText(part.text)
                                }
                                label="Copy"
                              >
                                <CopyIcon className="size-3" />
                              </Action>
                            </Actions>
                          )}
                        </Fragment>
                      );
                    case 'reasoning':
                      return (
                        <Reasoning
                          key={`${message.id}-${i}`}
                          className="w-full"
                          isStreaming={status === 'streaming' && i === message.parts.length - 1 && message.id === messages.at(-1)?.id}
                        >
                          <ReasoningTrigger />
                          <ReasoningContent>{part.text}</ReasoningContent>
                        </Reasoning>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            ))}
            {status === 'submitted' && <Loader />}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <PromptInput onSubmit={handleSubmit} className="mt-4" globalDrop multiple>
          <PromptInputHeader>
            <PromptInputAttachments>
              {(attachment) => <PromptInputAttachment data={attachment} />}
            </PromptInputAttachments>
          </PromptInputHeader>
          <PromptInputBody>
            <PromptInputTextarea
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
          </PromptInputBody>
          <PromptInputFooter>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger />
                <PromptInputActionMenuContent>
                  <PromptInputActionAddAttachments />
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>
              <PromptInputButton
                variant={webSearch ? 'default' : 'ghost'}
                onClick={() => setWebSearch(!webSearch)}
              >
                <GlobeIcon size={16} />
                <span>Search</span>
              </PromptInputButton>
              <PromptInputSelect
                onValueChange={(value) => {
                  setModel(value);
                }}
                value={model}
              >
                <PromptInputSelectTrigger>
                  <PromptInputSelectValue />
                </PromptInputSelectTrigger>
                <PromptInputSelectContent>
                  {models.map((model) => (
                    <PromptInputSelectItem key={model.value} value={model.value}>
                      {model.name}
                    </PromptInputSelectItem>
                  ))}
                </PromptInputSelectContent>
              </PromptInputSelect>
            </PromptInputTools>
            <PromptInputSubmit disabled={!input && !status} status={status} />
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
};

export default ChatBotDemo;
```

--------------------------------

### WebPreview Component Implementation (React)

Source: https://ai-sdk.dev/elements/components/web-preview

A React component that provides a web preview functionality. It utilizes context API for managing URL and console states, and integrates with shadcn UI components for navigation, input, and tooltips. Dependencies include shadcn-ui components and lucide-react.

```typescript
"use client";

import { Button } from "@repo/shadcn-ui/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/shadcn-ui/components/ui/collapsible";
import { Input } from "@repo/shadcn-ui/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/shadcn-ui/components/ui/tooltip";
import { cn } from "@repo/shadcn-ui/lib/utils";
import { ChevronDownIcon } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

export type WebPreviewContextValue = {
  url: string;
  setUrl: (url: string) => void;
  consoleOpen: boolean;
  setConsoleOpen: (open: boolean) => void;
};

const WebPreviewContext = createContext<WebPreviewContextValue | null>(null);

const useWebPreview = () => {
  const context = useContext(WebPreviewContext);
  if (!context) {
    throw new Error("WebPreview components must be used within a WebPreview");
  }
  return context;
};

export type WebPreviewProps = ComponentProps<"div"> & {
  defaultUrl?: string;
  onUrlChange?: (url: string) => void;
};

export const WebPreview = ({
  className,
  children,
  defaultUrl = "",
  onUrlChange,
  ...props
}: WebPreviewProps) => {
  const [url, setUrl] = useState(defaultUrl);
  const [consoleOpen, setConsoleOpen] = useState(false);

  const handleUrlChange = (newUrl: string) => {
    setUrl(newUrl);
    onUrlChange?.(newUrl);
  };

  const contextValue: WebPreviewContextValue = {
    url,
    setUrl: handleUrlChange,
    consoleOpen,
    setConsoleOpen,
  };

  return (
    <WebPreviewContext.Provider value={contextValue}>
      <div
        className={cn(
          "flex size-full flex-col rounded-lg border bg-card",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </WebPreviewContext.Provider>
  );
};

export type WebPreviewNavigationProps = ComponentProps<"div">;

export const WebPreviewNavigation = ({
  className,
  children,
  ...props
}: WebPreviewNavigationProps) => (
  <div
    className={cn("flex items-center gap-1 border-b p-2", className)}
    {...props}
  >
    {children}
  </div>
);

export type WebPreviewNavigationButtonProps = ComponentProps<typeof Button> & {
  tooltip?: string;
};

export const WebPreviewNavigationButton = ({
  onClick,
  disabled,
  tooltip,
  children,
  ...props
}: WebPreviewNavigationButtonProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          className="h-8 w-8 p-0 hover:text-foreground"
          disabled={disabled}
          onClick={onClick}
          size="sm"
          variant="ghost"
          {...props}
        >
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export type WebPreviewUrlProps = ComponentProps<typeof Input>;

export const WebPreviewUrl = ({
  value,
  onChange,
  onKeyDown,
  ...props
}: WebPreviewUrlProps) => {
  const { url, setUrl } = useWebPreview();
  const [inputValue, setInputValue] = useState(url);

  // Sync input value with context URL when it changes externally
  useEffect(() => {
    setInputValue(url);
  }, [url]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    onChange?.(event);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const target = event.target as HTMLInputElement;
      setUrl(target.value);
    }
    onKeyDown?.(event);
  };

  return (
    <Input
      className="h-8 flex-1 text-sm"
      onChange={onChange ?? handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Enter URL..."
      value={value ?? inputValue}
      {...props}
    />
  );
};

export type WebPreviewBodyProps = ComponentProps<"iframe"> & {
  loading?: ReactNode;
};

export const WebPreviewBody = ({
  className,
  loading,
  src,
  ...props
}: WebPreviewBodyProps) => {
  const { url } = useWebPreview();

  return (
    <div className="flex-1">
      <iframe
        className={cn("size-full", className)}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
        src={(src ?? url) || undefined}
        title="Preview"
        {...props}
      />
      {loading}
    </div>
  );
};

export type WebPreviewConsoleProps = ComponentProps<"div"> & {
  logs?: Array<{
    level: "log" | "warn" | "error";
    message: string;
    timestamp: Date;
  }>;
};

export const WebPreviewConsole = ({
  className,
  logs = [],
  children,
  ...props
}: WebPreviewConsoleProps) => {
  const { consoleOpen, setConsoleOpen } = useWebPreview();

  return (
    <Collapsible

```

--------------------------------

### Performance Optimization Guidelines for Hooks

Source: https://ai-sdk.dev/elements/examples/chatbot

Provides performance guidance for hook usage in React applications. Emphasizes selective use of custom hooks to avoid unnecessary overhead and recommends performance monitoring before implementation.

```JavaScript
### Performance Note

Don't overuse these hooks! They come with their own overhead. Only use them when you have identified a genuine performance issue.
```

--------------------------------

### Frontend Component for AI App Preview (React/TypeScript)

Source: https://ai-sdk.dev/elements/components/web-preview

A React component that uses the v0 SDK to generate and display a web application preview. It includes a prompt input, loading state, and the WebPreview component for displaying the generated app. It communicates with the backend via a POST request to /api/v0.

```typescript
'use client';

import {
  WebPreview,
  WebPreviewBody,
  WebPreviewNavigation,
  WebPreviewUrl,
} from '@/components/ai-elements/web-preview';
import { useState } from 'react';
import {
  Input,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import { Loader } from '../ai-elements/loader';

const WebPreviewDemo = () => {
  const [previewUrl, setPreviewUrl] = useState('');
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setPrompt('');

    setIsGenerating(true);
    try {
      const response = await fetch('/api/v0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();
      setPreviewUrl(data.demo || '/');
      console.log('Generation finished:', data);
    } catch (error) {
      console.error('Generation failed:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full">
        <div className="flex-1 mb-4">
          {isGenerating ? (
            <div className="flex flex-col items-center justify-center h-full">
              <Loader />
              <p className="mt-4 text-muted-foreground">
                Generating app, this may take a few seconds...
              </p>
            </div>
          ) : previewUrl ? (
            <WebPreview defaultUrl={previewUrl}>
              <WebPreviewNavigation>
                <WebPreviewUrl />
              </WebPreviewNavigation>
              <WebPreviewBody src={previewUrl} />
            </WebPreview>
          ) : (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              Your generated app will appear here
            </div>
          )}
        </div>

        <Input
          onSubmit={handleSubmit}
          className="w-full max-w-2xl mx-auto relative"
        >
          <PromptInputTextarea
            value={prompt}
            placeholder="Describe the app you want to build..."
            onChange={(e) => setPrompt(e.currentTarget.value)}
            className="pr-12 min-h-[60px]"
          />
          <PromptInputSubmit
            status={isGenerating ? 'streaming' : 'ready'}
            disabled={!prompt.trim()}
            className="absolute bottom-1 right-1"
          />
        </Input>
      </div>
    </div>
  );
};

export default WebPreviewDemo;

```

--------------------------------

### Web Preview Component Implementation (React/TypeScript)

Source: https://ai-sdk.dev/elements/components/web-preview

This React component demonstrates the usage of the WebPreview component from the AI Elements library. It showcases navigation controls, URL display, a preview body, and a console for logs. The component supports features like fullscreen mode and external linking.

```tsx
"use client";

import {
  WebPreview,
  WebPreviewBody,
  WebPreviewConsole,
  WebPreviewNavigation,
  WebPreviewNavigationButton,
  WebPreviewUrl,
} from "@/components/ai-elements/web-preview";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExternalLinkIcon,
  Maximize2Icon,
  MousePointerClickIcon,
  RefreshCcwIcon,
} from "lucide-react";
import { useState } from "react";

const exampleLogs = [
  {
    level: "log" as const,
    message: "Page loaded successfully",
    timestamp: new Date(Date.now() - 10_000),
  },
  {
    level: "warn" as const,
    message: "Deprecated API usage detected",
    timestamp: new Date(Date.now() - 5000),
  },
  {
    level: "error" as const,
    message: "Failed to load resource",
    timestamp: new Date(),
  },
];

const Example = () => {
  const [fullscreen, setFullscreen] = useState(false);

  return (
    <WebPreview
      defaultUrl="/"
      onUrlChange={(url) => console.log("URL changed to:", url)}
      style={{ height: "400px" }}
    >
      <WebPreviewNavigation>
        <WebPreviewNavigationButton
          onClick={() => console.log("Go back")}
          tooltip="Go back"
        >
          <ArrowLeftIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewNavigationButton
          onClick={() => console.log("Go forward")}
          tooltip="Go forward"
        >
          <ArrowRightIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewNavigationButton
          onClick={() => console.log("Reload")}
          tooltip="Reload"
        >
          <RefreshCcwIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewUrl />
        <WebPreviewNavigationButton
          onClick={() => console.log("Select")}
          tooltip="Select"
        >
          <MousePointerClickIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewNavigationButton
          onClick={() => console.log("Open in new tab")}
          tooltip="Open in new tab"
        >
          <ExternalLinkIcon className="size-4" />
        </WebPreviewNavigationButton>
        <WebPreviewNavigationButton
          onClick={() => setFullscreen(!fullscreen)}
          tooltip="Maximize"
        >
          <Maximize2Icon className="size-4" />
        </WebPreviewNavigationButton>
      </WebPreviewNavigation>

      <WebPreviewBody src="https://preview-v0me-kzml7zc6fkcvbyhzrf47.vusercontent.net/" />

      <WebPreviewConsole logs={exampleLogs} />
    </WebPreview>
  );
};

export default Example;

```

--------------------------------

### Data Fetching with useState and useEffect

Source: https://ai-sdk.dev/elements/examples/chatbot

Demonstrates how to fetch data using React hooks useState and useEffect together. Uses useState for managing user data state and useEffect for handling side effects like API calls when userId changes. Includes loading state handling and conditional rendering.

```jsx
function ProfilePage({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // This runs after render and when userId changes
    fetchUser(userId).then(userData => {
      setUser(userData);
    });
  }, [userId]);

  return user ? <Profile user={user} /> : <Loading />;
}
```

--------------------------------

### React Prompt Input Component with AI SDK

Source: https://ai-sdk.dev/elements/components/suggestion

This React component utilizes the AI SDK's PromptInput, Suggestions, and related components to create an interactive user interface. It allows users to type messages, select AI models from a predefined list, attach files, and choose from a set of suggested prompts. The `handleSubmit` function logs the submitted text or attachment information, and `handleSuggestionClick` updates the input text based on user selection. Dependencies include various components from '@/components/ai-elements/prompt-input' and '@/components/ai-elements/suggestion', as well as 'lucide-react' for icons and 'nanoid' for unique keys.

```typescript
"use client";

import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  type PromptInputMessage,
  PromptInputSelect,
  PromptInputSelectContent,
  PromptInputSelectItem,
  PromptInputSelectTrigger,
  PromptInputSelectValue,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion";
import { GlobeIcon, MicIcon, PlusIcon, SendIcon } from "lucide-react";
import { nanoid } from "nanoid";
import { useState } from "react";

const suggestions: { key: string; value: string }[] = [
  { key: nanoid(), value: "What are the latest trends in AI?" },
  { key: nanoid(), value: "How does machine learning work?" },
  { key: nanoid(), value: "Explain quantum computing" },
  { key: nanoid(), value: "Best practices for React development" },
  { key: nanoid(), value: "Tell me about TypeScript benefits" },
  { key: nanoid(), value: "How to optimize database queries?" },
  { key: nanoid(), value: "What is the difference between SQL and NoSQL?" },
  { key: nanoid(), value: "Explain cloud computing basics" },
];

const models = [
  { id: "gpt-4", name: "GPT-4" },
  { id: "gpt-3.5-turbo", name: "GPT-3.5 Turbo" },
  { id: "claude-2", name: "Claude 2" },
  { id: "claude-instant", name: "Claude Instant" },
  { id: "palm-2", name: "PaLM 2" },
  { id: "llama-2-70b", name: "Llama 2 70B" },
  { id: "llama-2-13b", name: "Llama 2 13B" },
  { id: "cohere-command", name: "Command" },
  { id: "mistral-7b", name: "Mistral 7B" },
];

const Example = () => {
  const [model, setModel] = useState<string>(models[0].id);
  const [text, setText] = useState<string>("");

  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);

    if (!(hasText || hasAttachments)) {
      return;
    }

    console.log("Submitted message:", message.text || "Sent with attachments");
    console.log("Attached files:", message.files);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setText(suggestion);
  };

  return (
    <div className="grid gap-4">
      <Suggestions>
        {suggestions.map((suggestion) => (
          <Suggestion
            key={suggestion.key}
            onClick={handleSuggestionClick}
            suggestion={suggestion.value}
          />
        ))}
      </Suggestions>
      <PromptInput onSubmit={handleSubmit}>
        <PromptInputTextarea
          onChange={(e) => setText(e.target.value)}
          placeholder="Ask me about anything..."
          value={text}
        />
        <PromptInputFooter>
          <PromptInputTools>
            <PromptInputButton>
              <PlusIcon size={16} />
            </PromptInputButton>
            <PromptInputButton>
              <MicIcon size={16} />
            </PromptInputButton>
            <PromptInputButton>
              <GlobeIcon size={16} />
              <span>Search</span>
            </PromptInputButton>
            <PromptInputSelect onValueChange={setModel} value={model}>
              <PromptInputSelectTrigger>
                <PromptInputSelectValue />
              </PromptInputSelectTrigger>
              <PromptInputSelectContent>
                {models.map((model) => (
                  <PromptInputSelectItem key={model.id} value={model.id}>
                    {model.name}
                  </PromptInputSelectItem>
                ))}
              </PromptInputSelectContent>
            </PromptInputSelect>
          </PromptInputTools>
          <PromptInputSubmit>
            <SendIcon size={16} />
          </PromptInputSubmit>
        </PromptInputFooter>
      </PromptInput>
    </div>
  );
};

export default Example;

```

--------------------------------

### React PromptInput Provider and Context Hooks

Source: https://ai-sdk.dev/elements/components/prompt-input

This React code defines the `PromptInputProvider` component and associated context hooks (`usePromptInputController`, `useProviderAttachments`). It manages the state for text input and file attachments, providing them to child components. It utilizes `useState`, `useRef`, and `useCallback` for state management and performance optimization.

```typescript
"use client";

import { Button } from "@repo/shadcn-ui/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@repo/shadcn-ui/components/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/shadcn-ui/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@repo/shadcn-ui/components/ui/hover-card";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@repo/shadcn-ui/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/shadcn-ui/components/ui/select";
import { cn } from "@repo/shadcn-ui/lib/utils";
import type { ChatStatus, FileUIPart } from "ai";
import {
  CornerDownLeftIcon,
  ImageIcon,
  Loader2Icon,
  MicIcon,
  PaperclipIcon,
  PlusIcon,
  SquareIcon,
  XIcon,
} from "lucide-react";
import { nanoid } from "nanoid";
import {
  type ChangeEvent,
  type ChangeEventHandler,
  Children,
  type ClipboardEventHandler,
  type ComponentProps,
  createContext,
  type FormEvent,
  type FormEventHandler,
  Fragment,
  type HTMLAttributes,
  type KeyboardEventHandler,
  type PropsWithChildren,
  type ReactNode,
  type RefObject,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
// ============================================================================
// Provider Context & Types
// ============================================================================ 

export type AttachmentsContext = {
  files: (FileUIPart & { id: string })[];
  add: (files: File[] | FileList) => void;
  remove: (id: string) => void;
  clear: () => void;
  openFileDialog: () => void;
  fileInputRef: RefObject<HTMLInputElement | null>;
};

export type TextInputContext = {
  value: string;
  setInput: (v: string) => void;
  clear: () => void;
};

export type PromptInputControllerProps = {
  textInput: TextInputContext;
  attachments: AttachmentsContext;
  /** INTERNAL: Allows PromptInput to register its file textInput + "open" callback */
  __registerFileInput: (
    ref: RefObject<HTMLInputElement | null>,
    open: () => void
  ) => void;
};

const PromptInputController = createContext<PromptInputControllerProps | null>(
  null
);
const ProviderAttachmentsContext = createContext<AttachmentsContext | null>(
  null
);

export const usePromptInputController = () => {
  const ctx = useContext(PromptInputController);
  if (!ctx) {
    throw new Error(
      "Wrap your component inside <PromptInputProvider> to use usePromptInputController()."
    );
  }
  return ctx;
};

// Optional variants (do NOT throw). Useful for dual-mode components.
const useOptionalPromptInputController = () =>
  useContext(PromptInputController);

export const useProviderAttachments = () => {
  const ctx = useContext(ProviderAttachmentsContext);
  if (!ctx) {
    throw new Error(
      "Wrap your component inside <PromptInputProvider> to use useProviderAttachments()."
    );
  }
  return ctx;
};

const useOptionalProviderAttachments = () =>
  useContext(ProviderAttachmentsContext);

export type PromptInputProviderProps = PropsWithChildren <{
  initialInput?: string;
}>;

/**
 * Optional global provider that lifts PromptInput state outside of PromptInput.
 * If you don't use it, PromptInput stays fully self-managed.
 */
export function PromptInputProvider({
  initialInput: initialTextInput = "",
  children,
}: PromptInputProviderProps) {
  // ----- textInput state
  const [textInput, setTextInput] = useState(initialTextInput);
  const clearInput = useCallback(() => setTextInput(""), []);

  // ----- attachments state (global when wrapped)
  const [attachements, setAttachements] = useState< 
    (FileUIPart & { id: string })[] 
  >([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const openRef = useRef<() => void>(() => {});

  const add = useCallback((files: File[] | FileList) => {
    const incoming = Array.from(files);
    if (incoming.length === 0) {
      return;
    }

    setAttachements((prev) =>
      prev.concat(
        incoming.map((file) => ({
          id: nanoid(),
          type: "file" as const,
          url: URL.createObjectURL(file),
          mediaType: file.type,
          filename: file.name,
        }))
      )
    );
  }, []);

  const remove = useCallback((id: string) => {
    setAttachements((prev) => {
      const found = prev.find((f) => f.id === id);
      if (found?.url) {
        URL.revokeObjectURL(found.url);
      }
      return prev.filter((f) => f.id !== id);
    });
  }, []);

  const clear = useCallback(() => {
    setAttachements((prev) => {
      for (const f of prev) {
        if (f.url) {

```

--------------------------------

### React Prompt Input Hooks Usage

Source: https://ai-sdk.dev/elements/components/prompt-input

Demonstrates the three main React hooks for managing prompt input functionality. The usePromptInputAttachments hook provides file attachment management within a PromptInput context, usePromptInputController gives access to the full controller from a PromptInputProvider, and useProviderAttachments allows accessing the attachments context. These hooks enable building interactive prompt input interfaces with support for files, text, and voice input.

```JavaScript
const attachments = usePromptInputAttachments();

// Available methods:
attachments.files // Array of current attachments
attachments.add(files) // Add new files
attachments.remove(id) // Remove an attachment by ID
attachments.clear() // Clear all attachments
attachments.openFileDialog() // Open file selection dialog
```

```JavaScript
const controller = usePromptInputController();

// Available methods:
controller.textInput.value // Current text input value
controller.textInput.setInput(value) // Set text input value
controller.textInput.clear() // Clear text input
controller.attachments // Same as usePromptInputAttachments
```

```JavaScript
const attachments = useProviderAttachments();

// Same interface as usePromptInputAttachments
```

--------------------------------

### Display AI Input Usage and Cost (React)

Source: https://ai-sdk.dev/elements/components/context

Displays the input tokens used by an AI model and their corresponding cost in USD. It fetches usage data from context and calculates the cost using the `getUsage` function. If no input tokens are present or calculable, it returns null or renders provided children.

```typescript
export type ContextInputUsageProps = ComponentProps<"div">;

export const ContextInputUsage = ({
  className,
  children,
  ...props
}: ContextInputUsageProps) => {
  const { usage, modelId } = useContextValue();
  const inputTokens = usage?.inputTokens ?? 0;

  if (children) {
    return children;
  }

  if (!inputTokens) {
    return null;
  }

  const inputCost = modelId
    ? getUsage({
        modelId,
        usage: { input: inputTokens, output: 0 },
      }).costUSD?.totalUSD
    : undefined;
  const inputCostText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(inputCost ?? 0);

  return (
    <div
      className={cn("flex items-center justify-between text-xs", className)}
      {...props}
    >
      <span className="text-muted-foreground">Input</span>
      <TokensWithCost costText={inputCostText} tokens={inputTokens} />
    </div>
  );
};
```

--------------------------------

### PromptInputProvider Component for State Management

Source: https://ai-sdk.dev/elements/components/prompt-input

Manages the state for text input and file attachments within the prompt input component. It uses React's useCallback and useMemo hooks for performance optimization and provides context to its children via PromptInputController.Provider and ProviderAttachmentsContext.Provider.

```typescript
export function PromptInputProvider({ children }: { children: ReactNode }) {
  const [textInput, setTextInput] = useState("");
  const [attachements, setAttachements] = useState<AttachmentsContext["files"]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const openRef = useRef<(() => void) | null>(null);

  const clearInput = useCallback(() => {
    setTextInput("");
  }, []);

  const add = useCallback((files: File[]) => {
    setAttachements((prev) => {
      const newFiles = files.map((file) => {
        const url = URL.createObjectURL(file);
        return { file, url, id: Math.random().toString(36).substring(2) };
      });
      return [...prev, ...newFiles];
    });
  }, []);

  const remove = useCallback((id: string) => {
    setAttachements((prev) => {
      const f = prev.find((f) => f.id === id);
      if (f) {
        URL.revokeObjectURL(f.url);
      }
      return prev.filter((f) => f.id !== id);
    });
  }, []);

  const clear = useCallback(() => {
    attachements.forEach((f) => {
      URL.revokeObjectURL(f.url);
    });
    setAttachements([]);
  }, [attachements]);

  const openFileDialog = useCallback(() => {
    openRef.current?.();
  }, []);

  const attachments = useMemo<AttachmentsContext>(
    () => ({
      files: attachements,
      add,
      remove,
      clear,
      openFileDialog,
      fileInputRef,
    }),
    [attachements, add, remove, clear, openFileDialog]
  );

  const __registerFileInput = useCallback(
    (ref: RefObject<HTMLInputElement | null>, open: () => void) => {
      fileInputRef.current = ref.current;
      openRef.current = open;
    },
    []
  );

  const controller = useMemo<PromptInputControllerProps>(
    () => ({
      textInput: { value: textInput, setInput: setTextInput, clear: clearInput },
      attachments,
      __registerFileInput,
    }),
    [textInput, clearInput, attachments, __registerFileInput]
  );

  return (
    <PromptInputController.Provider value={controller}>
      <ProviderAttachmentsContext.Provider value={attachments}>
        {children}
      </ProviderAttachmentsContext.Provider>
    </PromptInputController.Provider>
  );
}

```

--------------------------------

### React Sources Component Implementation

Source: https://ai-sdk.dev/elements/components/sources

This code defines the core implementation of the Sources, SourcesTrigger, SourcesContent, and Source components using shadcn-ui's Collapsible and Lucide-react icons. It handles accessibility, styling, and dynamic content display.

```jsx
"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/shadcn-ui/components/ui/collapsible";
import { cn } from "@repo/shadcn-ui/lib/utils";
import { BookIcon, ChevronDownIcon } from "lucide-react";
import type { ComponentProps } from "react";

export type SourcesProps = ComponentProps<"div">;

export const Sources = ({ className, ...props }: SourcesProps) => (
  <Collapsible
    className={cn("not-prose mb-4 text-primary text-xs", className)}
    {...props}
  />
);

export type SourcesTriggerProps = ComponentProps<typeof CollapsibleTrigger> & {
  count: number;
};

export const SourcesTrigger = ({
  className,
  count,
  children,
  ...props
}: SourcesTriggerProps) => (
  <CollapsibleTrigger
    className={cn("flex items-center gap-2", className)}
    {...props}
  >
    {children ?? (
      <>
        <p className="font-medium">Used {count} sources</p>
        <ChevronDownIcon className="h-4 w-4" />
      </>
    )}
  </CollapsibleTrigger>
);

export type SourcesContentProps = ComponentProps<typeof CollapsibleContent>;

export const SourcesContent = ({
  className,
  ...props
}: SourcesContentProps) => (
  <CollapsibleContent
    className={cn(
      "mt-3 flex w-fit flex-col gap-2",
      "data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    {...props}
  />
);

export type SourceProps = ComponentProps<"a">;

export const Source = ({ href, title, children, ...props }: SourceProps) => (
  <a
    className="flex items-center gap-2"
    href={href}
    rel="noreferrer"
    target="_blank"
    {...props}
  >
    {children ?? (
      <>
        <BookIcon className="h-4 w-4" />
        <span className="block font-medium">{title}</span>
      </>
    )}
  </a>
);


```

--------------------------------

### React Chat App with AI SDK

Source: https://ai-sdk.dev/elements/components/prompt-input

Implements a chat interface using AI SDK's React components. Handles message submission, model selection, and web search toggle. Requires @ai-sdk/react and custom UI components.

```typescript
'use client';

import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  type PromptInputMessage,
  PromptInputSelect,
  PromptInputSelectContent,
  PromptInputSelectItem,
  PromptInputSelectTrigger,
  PromptInputSelectValue,
  PromptInputSpeechButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputFooter,
  PromptInputTools,
} from '@/components/ai-elements/prompt-input';
import { GlobeIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { useChat } from '@ai-sdk/react';
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent, MessageResponse } from '@/components/ai-elements/message';

const models = [
  { id: 'gpt-4o', name: 'GPT-4o' },
  { id: 'claude-opus-4-20250514', name: 'Claude 4 Opus' },
];

const InputDemo = () => {
  const [text, setText] = useState<string>('');
  const [model, setModel] = useState<string>(models[0].id);
  const [useWebSearch, setUseWebSearch] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const { messages, status, sendMessage } = useChat();

  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);

    if (!(hasText || hasAttachments)) {
      return;
    }

    sendMessage(
      { 
        text: message.text || 'Sent with attachments',
        files: message.files 
      },
      {
        body: {
          model: model,
          webSearch: useWebSearch,
        },
      },
    );
    setText('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full">
        <Conversation>
          <ConversationContent>
            {messages.map((message) => (
              <Message from={message.role} key={message.id}>
                <MessageContent>
                  {message.parts.map((part, i) => {
                    switch (part.type) {
                      case 'text':
                        return (
                          <MessageResponse key={`${message.id}-${i}`}>
                            {part.text}
                          </MessageResponse>
                        );
                      default:
                        return null;
                    }
                  })}
                </MessageContent>
              </Message>
            ))}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <PromptInput onSubmit={handleSubmit} className="mt-4" globalDrop multiple>
          <PromptInputHeader>
            <PromptInputAttachments>
              {(attachment) => <PromptInputAttachment data={attachment} />}
            </PromptInputAttachments>
          </PromptInputHeader>
          <PromptInputBody>
     
            <PromptInputTextarea
              onChange={(e) => setText(e.target.value)}
              ref={textareaRef}
              value={text}
            />
          </PromptInputBody>
          <PromptInputFooter>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger />
                <PromptInputActionMenuContent>
                  <PromptInputActionAddAttachments />
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>
              <PromptInputSpeechButton
                onTranscriptionChange={setText}
                textareaRef={textareaRef}
              />
              <PromptInputButton
                onClick={() => setUseWebSearch(!useWebSearch)}
                variant={useWebSearch ? 'default' : 'ghost'}
              >
                <GlobeIcon size={16} />
                <span>Search</span>
              </PromptInputButton>
              <PromptInputSelect
                onValueChange={(value) => {
                  setModel(value);
                }}
                value={model}
              >
                <PromptInputSelectTrigger>
                  <PromptInputSelectValue />
                </PromptInputSelectTrigger>
                <PromptInputSelectContent>
                  {models.map((model) => (
                    <PromptInputSelectItem key={model.id} value={model.id}>
                      {model.name}
                    </PromptInputSelectItem>
                  ))}
                </PromptInputSelectContent>
              </PromptInputSelect>
            </PromptInputTools>
          </PromptInputFooter>
        </PromptInput>
      </div>
    </div>
  );
};

export default InputDemo;
```

--------------------------------

### Message Streaming Implementation with Typing Simulation

Source: https://ai-sdk.dev/elements/examples/chatbot

Implements streaming response functionality that simulates typing by progressively revealing message content word by word. Uses async/await with setTimeout for realistic typing delays and state updates for real-time UI updates.

```JavaScript
const streamResponse = useCallback(
    async (messageId: string, content: string) => {
      setStatus("streaming");
      setStreamingMessageId(messageId);

      const words = content.split(" ");
      let currentContent = "";

      for (let i = 0; i < words.length; i++) {
        currentContent += (i > 0 ? " " : "") + words[i];

        setMessages((prev) =>
          prev.map((msg) => {
            if (msg.versions.some((v) => v.id === messageId)) {
              return {
                ...msg,
                versions: msg.versions.map((v) =>
                  v.id === messageId ? { ...v, content: currentContent } : v
                ),
              };
            }
            return msg;
          })
        );

        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 100 + 50)
        );
      }

      setStatus("ready");
      setStreamingMessageId(null);
    },
    []
  );
```

--------------------------------

### Displaying Messages with Attachments and Actions (React)

Source: https://ai-sdk.dev/elements/components/message

Demonstrates how to render messages, including user and assistant messages, with attachments like images and PDFs. It also shows how to include interactive actions such as copy and refresh.

```jsx
"use client";

import {
  Message,
  MessageAction,
  MessageActions,
  MessageAttachment,
  MessageAttachments,
  MessageBranch,
  MessageBranchContent,
  MessageBranchNext,
  MessageBranchPage,
  MessageBranchPrevious,
  MessageBranchSelector,
  MessageContent,
  MessageResponse,
  MessageToolbar,
} from "@/components/ai-elements/message";
import {
  CopyIcon,
  RefreshCcwIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";
import { nanoid } from "nanoid";
import { useState } from "react";

const messages: { key: string; from: "user" | "assistant"; versions?: { id: string; content: string }[]; content?: string; attachments?: { type: "file"; url: string; mediaType?: string; filename?: string }[] }[] = [
  {
    key: nanoid(),
    from: "user",
    content: "How do React hooks work and when should I use them?",
    attachments: [
      {
        type: "file",
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
        mediaType: "image/jpeg",
        filename: "palace-of-fine-arts.jpg",
      },
      {
        type: "file",
        url: "",
        mediaType: "application/pdf",
        filename: "react-hooks-guide.pdf",
      },
    ],
  },
  {
    key: nanoid(),
    from: "assistant",
    versions: [
      {
        id: nanoid(),
        content: `# React Hooks Guide\n\nReact hooks are functions that let you "hook into" React state and lifecycle features from function components. Here's what you need to know:\n\n## Core Hooks\n\n### useState\nAdds state to functional components:\n\n```jsx\nconst [count, setCount] = useState(0);\n\nreturn (\n  <button onClick={() => setCount(count + 1)}>
    Count: {count}
  </button>
);\n```\n\n### useEffect\nHandles side effects (data fetching, subscriptions, DOM updates):\n\n```jsx\nuseEffect(() => {\n  document.title = \`You clicked \${count} times\`;\n\n  // Cleanup function (optional)\n  return () => {\n    document.title = 'React App';
  };
}, [count]); // Dependency array\n```\n\n## When to Use Hooks\n\n- ✅ **Function components** - Hooks only work in function components
- ✅ **Replacing class components** - Modern React favors hooks over classes
- ✅ **Sharing stateful logic** - Create custom hooks to reuse logic
- ❌ **Class components** - Use lifecycle methods instead\n\n## Rules of Hooks\n\n1. Only call hooks at the **top level** (not inside loops, conditions, or nested functions)
2. Only call hooks from **React functions** (components or custom hooks)\n\nWould you like to explore more advanced hooks like `useCallback` or `useMemo`?`,
      },
      {
        id: nanoid(),
        content: `React hooks are special functions that let you use React features in function components. The most common ones are:\n\n- **useState** - for managing component state
- **useEffect** - for side effects like data fetching
- **useContext** - for consuming context values
- **useRef** - for accessing DOM elements\n\nHere's a simple example:\n\n```jsx\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}\n```\n\nWhich specific hook would you like to learn more about?`,
      },
      {
        id: nanoid(),
        content: `Absolutely! React hooks are a powerful feature introduced in React 16.8. They solve several problems:\n\n## Key Benefits\n\n1. **Simpler code** - No need for class components
2. **Reusable logic** - Extract stateful logic into custom hooks
3. **Better organization** - Group related code together
\n`,
      },
    ],
  },
];

export default function AIChat() {
  const [copied, setCopied] = useState(false);

  return (
    <Message>
      <MessageToolbar>
        <MessageActions>
          <MessageAction
            label="Copy"
            icon={CopyIcon}
            onClick={() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1000);
            }}
            disabled={copied}
          />
          <MessageAction label="Refresh" icon={RefreshCcwIcon} />
        </MessageActions>
        <MessageBranchSelector>
          <MessageBranchPrevious />
          <MessageBranchPage />
          <MessageBranchNext />
        </MessageBranchSelector>
      </MessageToolbar>
      <MessageContent>
        <MessageAttachments>
          {messages[0].attachments?.map((attachment, index) => (
            <MessageAttachment
              key={index}
              type={attachment.type}
              url={attachment.url}
              mediaType={attachment.mediaType}
              filename={attachment.filename}
            />
          ))}
        </MessageAttachments>
        <p>{messages[0].content}</p>
      </MessageContent>
      <MessageResponse>
        <MessageActions>
          <MessageAction label="Like" icon={ThumbsUpIcon} />
          <MessageAction label="Dislike" icon={ThumbsDownIcon} />
        </MessageActions>
      </MessageResponse>
    </Message>
  );
}

```

--------------------------------

### Display AI Output Usage and Cost (React)

Source: https://ai-sdk.dev/elements/components/context

Renders the output tokens generated by an AI model along with their cost in USD. It retrieves usage details from context and calculates the cost using the `getUsage` utility. If output tokens are absent or zero, it returns null or renders custom children.

```typescript
export type ContextOutputUsageProps = ComponentProps<"div">;

export const ContextOutputUsage = ({
  className,
  children,
  ...props
}: ContextOutputUsageProps) => {
  const { usage, modelId } = useContextValue();
  const outputTokens = usage?.outputTokens ?? 0;

  if (children) {
    return children;
  }

  if (!outputTokens) {
    return null;
  }

  const outputCost = modelId
    ? getUsage({
        modelId,
        usage: { input: 0, output: outputTokens },
      }).costUSD?.totalUSD
    : undefined;
  const outputCostText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(outputCost ?? 0);

  return (
    <div
      className={cn("flex items-center justify-between text-xs", className)}
      {...props}
    >
      <span className="text-muted-foreground">Output</span>
      <TokensWithCost costText={outputCostText} tokens={outputTokens} />
    </div>
  );
};
```

--------------------------------

### React Confirmation Component for Tool Approval

Source: https://ai-sdk.dev/elements/components/confirmation

This React component demonstrates the usage of the Confirmation, ConfirmationAccepted, ConfirmationAction, ConfirmationActions, ConfirmationRejected, ConfirmationRequest, and ConfirmationTitle components from '@/components/ai-elements/confirmation'. It allows users to approve or reject tool execution requests, displaying the corresponding status afterward. Dependencies include 'lucide-react' for icons and 'nanoid' for generating unique IDs.

```jsx
"use client";

import {
  Confirmation,
  ConfirmationAccepted,
  ConfirmationAction,
  ConfirmationActions,
  ConfirmationRejected,
  ConfirmationRequest,
  ConfirmationTitle,
} from "@/components/ai-elements/confirmation";
import { CheckIcon, XIcon } from "lucide-react";
import { nanoid } from "nanoid";

const Example = () => (
  <div className="w-full max-w-2xl">
    <Confirmation approval={{ id: nanoid() }} state="approval-requested">
      <ConfirmationTitle>
        <ConfirmationRequest>
          This tool wants to delete the file <code className="inline rounded bg-muted px-1.5 py-0.5 text-sm">
            /tmp/example.txt
          </code>. Do you approve this action?
        </ConfirmationRequest>
        <ConfirmationAccepted>
          <CheckIcon className="size-4 text-green-600 dark:text-green-400" />
          <span>You approved this tool execution</span>
        </ConfirmationAccepted>
        <ConfirmationRejected>
          <XIcon className="size-4 text-destructive" />
          <span>You rejected this tool execution</span>
        </ConfirmationRejected>
      </ConfirmationTitle>
      <ConfirmationActions>
        <ConfirmationAction
          onClick={() => {
            // In production, call respondToConfirmationRequest with approved: false
          }}
          variant="outline"
        >
          Reject
        </ConfirmationAction>
        <ConfirmationAction
          onClick={() => {
            // In production, call respondToConfirmationRequest with approved: true
          }}
          variant="default"
        >
          Approve
        </ConfirmationAction>
      </ConfirmationActions>
    </Confirmation>
  </div>
);

export default Example;

```

--------------------------------

### AI Model Configuration and Type Definitions

Source: https://ai-sdk.dev/elements/examples/chatbot

Defines AI model configurations with metadata including provider information and supported platforms. Also includes message type definitions for type-safe chat implementation. Used for configuring available AI models and their capabilities.

```JavaScript
interface MessageType {
  key: string;
  from: 'user' | 'assistant';
  versions: Array<{
    id: string;
    content: string;
  }>;
}

interface PromptInputMessage {
  text: string;
}

const models = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    chef: "OpenAI",
    chefSlug: "openai",
    providers: ["openai", "azure"],
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    chef: "OpenAI",
    chefSlug: "openai",
    providers: ["openai", "azure"],
  },
  {
    id: "claude-opus-4-20250514",
    name: "Claude 4 Opus",
    chef: "Anthropic",
    chefSlug: "anthropic",
    providers: ["anthropic", "azure", "google", "amazon-bedrock"],
  },
  {
    id: "claude-sonnet-4-20250514",
    name: "Claude 4 Sonnet",
    chef: "Anthropic",
    chefSlug: "anthropic",
    providers: ["anthropic", "azure", "google", "amazon-bedrock"],
  },
  {
    id: "gemini-2.0-flash-exp",
    name: "Gemini 2.0 Flash",
    chef: "Google",
    chefSlug: "google",
    providers: ["google"],
  },
];
```

--------------------------------

### User Message Handler and Response Management

Source: https://ai-sdk.dev/elements/examples/chatbot

Handles user message submission and orchestrates the response generation process. Creates user messages, schedules mock assistant responses, and triggers the streaming response mechanism with proper timing control.

```JavaScript
const addUserMessage = useCallback(
    (content: string) => {
      const userMessage: MessageType = {
        key: `user-${Date.now()}`,
        from: "user",
        versions: [
          {
            id: `user-${Date.now()}`,
            content,
          },
        ],
      };

      setMessages((prev) => [...prev, userMessage]);

      setTimeout(() => {
        const assistantMessageId = `assistant-${Date.now()}`;
        const randomResponse =
          mockResponses[Math.floor(Math.random() * mockResponses.length)];

        const assistantMessage: MessageType = {
          key: `assistant-${Date.now()}`,
          from: "assistant",
          versions: [
            {
              id: assistantMessageId,
              content: "",
            },
          ],
        };

        setMessages((prev) => [...prev, assistantMessage]);
        streamResponse(assistantMessageId, randomResponse);
      }, 500);
    },
    [streamResponse]
  );
```

--------------------------------

### Frontend Image Generation Demo Component (React)

Source: https://ai-sdk.dev/elements/components/image

A React component demonstrating image generation using AI SDK. It takes a prompt, sends it to a backend API, and displays the generated image using the Image component. Includes loading state management.

```typescript
'use client';

import {
  Image,
} from '@/components/ai-elements/image';
import {
  Input,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import { useState } from 'react';
import { Loader } from '@/components/ai-elements/loader';

const ImageDemo = () => {
  const [prompt, setPrompt] = useState('A futuristic cityscape at sunset');
  const [imageData, setImageData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    setPrompt('');

    setIsLoading(true);
    try {
      const response = await fetch('/api/image', {
        method: 'POST',
        body: JSON.stringify({ prompt: prompt.trim() }),
      });

      const data = await response.json();

      setImageData(data);
    } catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-y-auto p-4">
          {imageData && (
            <div className="flex justify-center">
              <Image
                {...imageData}
                alt="Generated image"
                className="h-[300px] aspect-square border rounded-lg"
              />
            </div>
          )}
          {isLoading && <Loader />}
        </div>

        <Input
          onSubmit={handleSubmit}
          className="mt-4 w-full max-w-2xl mx-auto relative"
        >
          <PromptInputTextarea
            value={prompt}
            placeholder="Describe the image you want to generate..."
            onChange={(e) => setPrompt(e.currentTarget.value)}
            className="pr-12"
          />
          <PromptInputSubmit
            status={isLoading ? 'submitted' : 'ready'}
            disabled={!prompt.trim()}
            className="absolute bottom-1 right-1"
          />
        </Input>
      </div>
    </div>
  );
};

export default ImageDemo;

```

--------------------------------

### React context and dropdown components for opening queries (TypeScript/React)

Source: https://ai-sdk.dev/elements/components/open-in-chat

Implements a React context to share the current search query and a suite of typed components that render a dropdown menu. Each menu item (ChatGPT, Claude, T3) uses the context to build a link via the provider URL creators. The components wrap shadcn/ui dropdown primitives and include accessibility and styling details.

```TypeScript
const OpenInContext = createContext<{ query: string } | undefined>(undefined);

const useOpenInContext = () => {
  const context = useContext(OpenInContext);
  if (!context) {
    throw new Error("OpenIn components must be used within an OpenIn provider");
  }
  return context;
};

export type OpenInProps = ComponentProps<typeof DropdownMenu> & {
  query: string;
};

export const OpenIn = ({ query, ...props }: OpenInProps) => (
  <OpenInContext.Provider value={{ query }}>
    <DropdownMenu {...props} />
  </OpenInContext.Provider>
);

export type OpenInContentProps = ComponentProps<typeof DropdownMenuContent>;

export const OpenInContent = ({ className, ...props }: OpenInContentProps) => (
  <DropdownMenuContent
    align="start"
    className={cn("w-[240px]", className)}
    {...props}
  />
);

export type OpenInItemProps = ComponentProps<typeof DropdownMenuItem>;

export const OpenInItem = (props: OpenInItemProps) => (
  <DropdownMenuItem {...props} />
);

export type OpenInLabelProps = ComponentProps<typeof DropdownMenuLabel>;

export const OpenInLabel = (props: OpenInLabelProps) => (
  <DropdownMenuLabel {...props} />
);

export type OpenInSeparatorProps = ComponentProps<typeof DropdownMenuSeparator>;

export const OpenInSeparator = (props: OpenInSeparatorProps) => (
  <DropdownMenuSeparator {...props} />
);

export type OpenInTriggerProps = ComponentProps<typeof DropdownMenuTrigger>;

export const OpenInTrigger = ({ children, ...props }: OpenInTriggerProps) => (
  <DropdownMenuTrigger {...props} asChild>
    {children ?? (
      <Button type="button" variant="outline">
        Open in chat
        <ChevronDownIcon className="size-4" />
      </Button>
    )}
  </DropdownMenuTrigger>
);

export type OpenInChatGPTProps = ComponentProps<typeof DropdownMenuItem>;

export const OpenInChatGPT = (props: OpenInChatGPTProps) => {
  const { query } = useOpenInContext();
  return (
    <DropdownMenuItem asChild {...props}>
      <a
        className="flex items-center gap-2"
        href={providers.chatgpt.createUrl(query)}
        rel="noopener"
        target="_blank"
      >
        <span className="shrink-0">{providers.chatgpt.icon}</span>
        <span className="flex-1">{providers.chatgpt.title}</span>
        <ExternalLinkIcon className="size-4 shrink-0" />
      </a>
    </DropdownMenuItem>
  );
};

export type OpenInClaudeProps = ComponentProps<typeof DropdownMenuItem>;

export const OpenInClaude = (props: OpenInClaudeProps) => {
  const { query } = useOpenInContext();
  return (
    <DropdownMenuItem asChild {...props}>
      <a
        className="flex items-center gap-2"
        href={providers.claude.createUrl(query)}
        rel="noopener"
        target="_blank"
      >
        <span className="shrink-0">{providers.claude.icon}</span>
        <span className="flex-1">{providers.claude.title}</span>
        <ExternalLinkIcon className="size-4 shrink-0" />
      </a>
    </DropdownMenuItem>
  );
};

export type OpenInT3Props = ComponentProps<typeof DropdownMenuItem>;

export const OpenInT3 = (props: OpenInT3Props) => {
  const { query } = useOpenInContext();
  return (
    <DropdownMenuItem asChild {...props}>
      <a
        className="flex items-center gap-2"
        href={providers.t3.createUrl(query)}
        rel="noopener"
        target="_blank"
      >
```

--------------------------------

### Build Chat UI with AI SDK in React

Source: https://ai-sdk.dev/elements/components/message

This snippet demonstrates how to create a chat interface using the AI SDK in React. It includes message handling, user input, and actions like copy and regenerate for the latest message. Dependencies include @ai-sdk/react and lucide-react for icons.

```typescript
'use client';

import { useState } from 'react';
import { MessageActions, MessageAction } from '@/components/ai-elements/message';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import {
  Input,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import { MessageResponse } from '@/components/ai-elements/message';
import { RefreshCcwIcon, CopyIcon } from 'lucide-react';
import { useChat } from '@ai-sdk/react';
import { Fragment } from 'react';

const ActionsDemo = () => {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status, regenerate } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full">
        <Conversation>
          <ConversationContent>
            {messages.map((message, messageIndex) => (
              <Fragment key={message.id}>
                {message.parts.map((part, i) => {
                  switch (part.type) {
                    case 'text':
                      const isLastMessage =
                        messageIndex === messages.length - 1;

                      return (
                        <Fragment key={`${message.id}-${i}`}>
                          <Message from={message.role}>
                            <MessageContent>
                              <MessageResponse>{part.text}</MessageResponse>
                            </MessageContent>
                          </Message>
                          {message.role === 'assistant' && isLastMessage && (
                            <MessageActions>
                              <MessageAction
                                onClick={() => regenerate()}
                                label="Retry"
                              >
                                <RefreshCcwIcon className="size-3" />
                              </MessageAction>
                              <MessageAction
                                onClick={() =>
                                  navigator.clipboard.writeText(part.text)
                                }
                                label="Copy"
                              >
                                <CopyIcon className="size-3" />
                              </MessageAction>
                            </MessageActions>
                          )}
                        </Fragment>
                      );
                    default:
                      return null;
                  }
                })}
              </Fragment>
            ))}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <Input
          onSubmit={handleSubmit}
          className="mt-4 w-full max-w-2xl mx-auto relative"
        >
          <PromptInputTextarea
            value={input}
            placeholder="Say something..."
            onChange={(e) => setInput(e.currentTarget.value)}
            className="pr-12"
          />
          <PromptInputSubmit
            status={status === 'streaming' ? 'streaming' : 'ready'}
            disabled={!input.trim()}
            className="absolute bottom-1 right-1"
          />
        </Input>
      </div>
    </div>
  );
};

export default ActionsDemo;
```

--------------------------------

### Server-Side Chat API Route Handler (TypeScript/Node.js)

Source: https://ai-sdk.dev/elements/examples/v0

This Next.js API route handler (`app/api/chat/route.ts`) manages chat interactions using the v0 SDK. It handles POST requests to either create a new chat or send a message to an existing chat, returning the chat ID and demo URL. It requires `next/server` and `v0-sdk`. Input is JSON with `message` and optional `chatId`. Output is JSON with `id` and `demo` or an error object.

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { v0 } from 'v0-sdk';

export async function POST(request: NextRequest) {
  try {
    const { message, chatId } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 },
      );
    }

    let chat;

    if (chatId) {
      // continue existing chat
      chat = await v0.chats.sendMessage({
        chatId: chatId,
        message,
      });
    } else {
      // create new chat
      chat = await v0.chats.create({
        message,
      });
    }

    return NextResponse.json({
      id: chat.id,
      demo: chat.demo,
    });
  } catch (error) {
    console.error('V0 API Error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 },
    );
  }
}

```

--------------------------------

### Backend API Route for Chat with Sources (TypeScript)

Source: https://ai-sdk.dev/elements/components/sources

This API route (api/chat/route.ts) handles POST requests for the chat agent. It uses the '@ai-sdk/perplexity' library to stream responses from the 'perplexity/sonar' model. The route is configured to allow streaming responses up to 30 seconds and includes system instructions to encourage concise answers and the use of search. It also forwards source information to the client.

```typescript
import { convertToModelMessages, streamText, UIMessage } from 'ai';
import { perplexity } from '@ai-sdk/perplexity';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: 'perplexity/sonar',
    system:
      'You are a helpful assistant. Keep your responses short (< 100 words) unless you are asked for more details. ALWAYS USE SEARCH.',
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse({
    sendSources: true,
  });
}

```

--------------------------------

### Hover Card for Project Rules (React)

Source: https://ai-sdk.dev/elements/components/prompt-input

This component displays project-specific rules within a hover card. It includes a trigger button and content that shows 'Always Apply' rules and a management prompt. The content is divided into distinct sections with specific styling.

```jsx
<PromptInputHoverCard>
  <PromptInputHoverCardTrigger>
    <PromptInputButton size="sm" variant="outline">
      <RulerIcon className="text-muted-foreground" size={12} />
      <span>1</span>
    </PromptInputButton>
  </PromptInputHoverCardTrigger>
  <PromptInputHoverCardContent className="divide-y overflow-hidden p-0">
    <div className="space-y-2 p-3">
      <p className="font-medium text-muted-foreground text-sm">
        Attached Project Rules
      </p>
      <p className="ml-4 text-muted-foreground text-sm">
        Always Apply:
      </p>
      <p className="ml-8 text-sm">ultracite.mdc</p>
    </div>
    <p className="bg-sidebar px-4 py-3 text-muted-foreground text-sm">
      Click to manage
    </p>
  </PromptInputHoverCardContent>
</PromptInputHoverCard>
```

--------------------------------

### React Conversation Component Implementation

Source: https://ai-sdk.dev/elements/components/conversation

This React component demonstrates the usage of the 'Conversation' component from the AI SDK. It manages a list of messages, displaying them sequentially with a simulated typing effect. The component relies on 'lucide-react' for icons and 'nanoid' for unique keys. It initializes an empty message list and populates it over time using a `useEffect` hook with `setInterval`.

```jsx
"use client";

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent } from "@/components/ai-elements/message";
import { MessageSquareIcon } from "lucide-react";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const messages: { key: string; value: string; from: "user" | "assistant" }[] = [
  {
    key: nanoid(),
    value: "Hello, how are you?",
    from: "user",
  },
  {
    key: nanoid(),
    value: "I'm good, thank you! How can I assist you today?",
    from: "assistant",
  },
  {
    key: nanoid(),
    value: "I'm looking for information about your services.",
    from: "user",
  },
  {
    key: nanoid(),
    value:
      "Sure! We offer a variety of AI solutions. What are you interested in?",
    from: "assistant",
  },
  {
    key: nanoid(),
    value: "I'm interested in natural language processing tools.",
    from: "user",
  },
  {
    key: nanoid(),
    value: "Great choice! We have several NLP APIs. Would you like a demo?",
    from: "assistant",
  },
  {
    key: nanoid(),
    value: "Yes, a demo would be helpful.",
    from: "user",
  },
  {
    key: nanoid(),
    value: "Alright, I can show you a sentiment analysis example. Ready?",
    from: "assistant",
  },
  {
    key: nanoid(),
    value: "Yes, please proceed.",
    from: "user",
  },
  {
    key: nanoid(),
    value: "Here is a sample: 'I love this product!' → Positive sentiment.",
    from: "assistant",
  },
  {
    key: nanoid(),
    value: "Impressive! Can it handle multiple languages?",
    from: "user",
  },
  {
    key: nanoid(),
    value: "Absolutely, our models support over 20 languages.",
    from: "assistant",
  },
  {
    key: nanoid(),
    value: "How do I get started with the API?",
    from: "user",
  },
  {
    key: nanoid(),
    value: "You can sign up on our website and get an API key instantly.",
    from: "assistant",
  },
  {
    key: nanoid(),
    value: "Is there a free trial available?",
    from: "user",
  },
  {
    key: nanoid(),
    value: "Yes, we offer a 14-day free trial with full access.",
    from: "assistant",
  },
  {
    key: nanoid(),
    value: "What kind of support do you provide?",
    from: "user",
  },
  {
    key: nanoid(),
    value: "We provide 24/7 chat and email support for all users.",
    from: "assistant",
  },
  {
    key: nanoid(),
    value: "Thank you for the information!",
    from: "user",
  },
  {
    key: nanoid(),
    value: "You're welcome! Let me know if you have any more questions.",
    from: "assistant",
  },
];

const Example = () => {
  const [visibleMessages, setVisibleMessages] = useState<
    {
      key: string;
      value: string;
      from: "user" | "assistant";
    }
  >([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < messages.length && messages[currentIndex]) {
        const currentMessage = messages[currentIndex];
        setVisibleMessages((prev) => [
          ...prev,
          {
            key: currentMessage.key,
            value: currentMessage.value,
            from: currentMessage.from,
          },
        ]);
        currentIndex += 1;
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Conversation className="relative size-full">
      <ConversationContent>
        {visibleMessages.length === 0 ? (
          <ConversationEmptyState
            description="Messages will appear here as the conversation progresses."
            icon={<MessageSquareIcon className="size-6" />}
            title="Start a conversation"
          />
        ) : (
          visibleMessages.map(({ key, value, from }) => (
            <Message from={from} key={key}>
              <MessageContent>{value}</MessageContent>
            </Message>
          ))
        )}
      </ConversationContent>
      <ConversationScrollButton />
    </Conversation>
  );
};

export default Example;

```

--------------------------------

### Display AI Reasoning Usage and Cost (React)

Source: https://ai-sdk.dev/elements/components/context

Shows the reasoning tokens consumed by an AI model and their associated cost in USD. It fetches data from context and calculates costs using `getUsage`. If reasoning tokens are unavailable or zero, it renders children or returns null.

```typescript
export type ContextReasoningUsageProps = ComponentProps<"div">;

export const ContextReasoningUsage = ({
  className,
  children,
  ...props
}: ContextReasoningUsageProps) => {
  const { usage, modelId } = useContextValue();
  const reasoningTokens = usage?.reasoningTokens ?? 0;

  if (children) {
    return children;
  }

  if (!reasoningTokens) {
    return null;
  }

  const reasoningCost = modelId
    ? getUsage({
        modelId,
        usage: { reasoningTokens },
      }).costUSD?.totalUSD
    : undefined;
  const reasoningCostText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(reasoningCost ?? 0);

  return (
    <div
      className={cn("flex items-center justify-between text-xs", className)}
      {...props}
    >
      <span className="text-muted-foreground">Reasoning</span>
      <TokensWithCost costText={reasoningCostText} tokens={reasoningTokens} />
    </div>
  );
};
```

--------------------------------

### React Panel Component Implementation

Source: https://ai-sdk.dev/elements/components/panel

A React component implementation for the Panel, utilizing `@xyflow/react` and `@repo/shadcn-ui`. It includes custom styling for a card-based appearance with backdrop blur and supports flexible positioning.

```typescript
import {
  cn
} from "@repo/shadcn-ui/lib/utils";
import { Panel as PanelPrimitive } from "@xyflow/react";
import type { ComponentProps } from "react";

type PanelProps = ComponentProps<typeof PanelPrimitive>;

export const Panel = ({ className, ...props }: PanelProps) => (
  <PanelPrimitive
    className={cn(
      "m-4 overflow-hidden rounded-md border bg-card p-1",
      className
    )}
    {...props}
  />
);

```

--------------------------------

### Handle Message Submit and Render Chat UI in React

Source: https://ai-sdk.dev/elements/examples/chatbot

This code snippet demonstrates a React component for managing chat interactions, including submitting messages with optional attachments, displaying suggestions, and rendering the conversation with message branches and inputs. It depends on React state hooks for text, files, and status. Inputs include user messages and suggestions; outputs update the UI and display toasts. Limitations include reliance on specific library components like PromptInput and Conversation, and the code assumes availability of imported elements.

```typescript
    const hasAttachments = Boolean(message.files?.length);

    if (!(hasText || hasAttachments)) {
      return;
    }

    setStatus("submitted");

    if (message.files?.length) {
      toast.success("Files attached", {
        description: `${message.files.length} file(s) attached to message`,
      });
    }

    addUserMessage(message.text || "Sent with attachments");
    setText("");
  };

  const handleSuggestionClick = (suggestion: string) => {
    setStatus("submitted");
    addUserMessage(suggestion);
  };

  return (
    <div className="relative flex size-full flex-col divide-y overflow-hidden">
      <Conversation>
        <ConversationContent>
          {messages.map(({ versions, ...message }) => (
            <MessageBranch defaultBranch={0} key={message.key}>
              <MessageBranchContent>
                {versions.map((version) => (
                  <Message
                    from={message.from}
                    key={`${message.key}-${version.id}`}
                  >
                    <div>
                      {message.sources?.length && (
                        <Sources>
                          <SourcesTrigger count={message.sources.length} />
                          <SourcesContent>
                            {message.sources.map((source) => (
                              <Source
                                href={source.href}
                                key={source.href}
                                title={source.title}
                              />
                            ))}
                          </SourcesContent>
                        </Sources>
                      )}
                      {message.reasoning && (
                        <Reasoning duration={message.reasoning.duration}>
                          <ReasoningTrigger />
                          <ReasoningContent>
                            {message.reasoning.content}
                          </ReasoningContent>
                        </Reasoning>
                      )}
                      <MessageContent>
                        <MessageResponse>{version.content}</MessageResponse>
                      </MessageContent>
                    </div>
                  </Message>
                ))}
              </MessageBranchContent>
              {versions.length > 1 && (
                <MessageBranchSelector from={message.from}>
                  <MessageBranchPrevious />
                  <MessageBranchPage />
                  <MessageBranchNext />
                </MessageBranchSelector>
              )}
            </MessageBranch>
          ))}
        </ConversationContent>
        <ConversationScrollButton />
      </Conversation>
      <div className="grid shrink-0 gap-4 pt-4">
        <Suggestions className="px-4">
          {suggestions.map((suggestion) => (
            <Suggestion
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              suggestion={suggestion}
            />
          ))}
        </Suggestions>
        <div className="w-full px-4 pb-4">
          <PromptInput globalDrop multiple onSubmit={handleSubmit}>
            <PromptInputHeader>
              <PromptInputAttachments>
                {(attachment) => <PromptInputAttachment data={attachment} />}
              </PromptInputAttachments>
            </PromptInputHeader>
            <PromptInputBody>
              <PromptInputTextarea
                onChange={(event) => setText(event.target.value)}
                value={text}
              />
            </PromptInputBody>
            <PromptInputFooter>
              <PromptInputTools>
                <PromptInputActionMenu>
                  <PromptInputActionMenuTrigger />
                  <PromptInputActionMenuContent>
                    <PromptInputActionAddAttachments />
                  </PromptInputActionMenuContent>
                </PromptInputActionMenu>
                <PromptInputButton
                  onClick={() => setUseMicrophone(!useMicrophone)}
                  variant={useMicrophone ? "default" : "ghost"}
                >
                  <MicIcon size={16} />
                  <span className="sr-only">Microphone</span>
                </PromptInputButton>
                <PromptInputButton
                  onClick={() => setUseWebSearch(!useWebSearch)}
                  variant={useWebSearch ? "default" : "ghost"}
                >
                  <GlobeIcon size={16} />
                  <span>Search</span>
                </PromptInputButton>
                <ModelSelector
                  onOpenChange={setModelSelectorOpen}
                  open={modelSelectorOpen}
                >
                  <ModelSelectorTrigger asChild>
                    <PromptInputButton>
                      {selectedModelData?.chefSlug && (
                        <ModelSelectorLogo provider={selectedModelData.chefSlug} />
                      )}
```

--------------------------------

### Implement Weather API Route with streamText and tool definition (TypeScript)

Source: https://ai-sdk.dev/elements/components/tool

Defines a Next.js API route that streams AI model responses using streamText and registers a fetch_weather_data tool. The tool validates input with Zod, simulates a delay, generates mock weather data, and returns it in the expected shape. Requires the ai and zod packages.

```TypeScript
import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { z } from 'zod';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: 'openai/gpt-4o',
    messages: convertToModelMessages(messages),
    tools: {
      fetch_weather_data: {
        description: 'Fetch weather information for a specific location',
        parameters: z.object({
          location: z
            .string()
            .describe('The city or location to get weather for'),
          units: z
            .enum(['celsius', 'fahrenheit'])
            .default('celsius')
            .describe('Temperature units'),
        }),
        inputSchema: z.object({
          location: z.string(),
          units: z.enum(['celsius', 'fahrenheit']).default('celsius'),
        }),
        execute: async ({ location, units }) => {
          await new Promise((resolve) => setTimeout(resolve, 1500));

          const temp =
            units === 'celsius'
              ? Math.floor(Math.random() * 35) + 5
              : Math.floor(Math.random() * 63) + 41;

          return {
            location,
            temperature: `${temp}°${units === 'celsius' ? 'C' : 'F'}`,
            conditions: 'Sunny',
            humidity: `12%`,
            windSpeed: `35 ${units === 'celsius' ? 'km/h' : 'mph'}`,
            lastUpdated: new Date().toLocaleString(),
          };
        },
      },
    },
  });

  return result.toUIMessageStreamResponse();
}
```

--------------------------------

### React Tool Component for AI SDK

Source: https://ai-sdk.dev/elements/components/tool

Defines the main `Tool` component using Shadcn's Collapsible for AI SDK interactions. It accepts standard Collapsible props and applies custom styling. Dependencies include Shadcn UI components and utility functions.

```typescript
"use client";

import { Badge } from "@repo/shadcn-ui/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@repo/shadcn-ui/components/ui/collapsible";
import { cn } from "@repo/shadcn-ui/lib/utils";
import type { ToolUIPart } from "ai";
import {
  CheckCircleIcon,
  ChevronDownIcon,
  CircleIcon,
  ClockIcon,
  WrenchIcon,
  XCircleIcon,
} from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { isValidElement } from "react";
import { CodeBlock } from "./code-block";

export type ToolProps = ComponentProps<typeof Collapsible>;

export const Tool = ({ className, ...props }: ToolProps) => (
  <Collapsible
    className={cn("not-prose mb-4 w-full rounded-md border", className)}
    {...props}
  />
);

export type ToolHeaderProps = {
  title?: string;
  type: ToolUIPart["type"];
  state: ToolUIPart["state"];
  className?: string;
};

const getStatusBadge = (status: ToolUIPart["state"]) => {
  const labels: Record<ToolUIPart["state"], string> = {
    "input-streaming": "Pending",
    "input-available": "Running",
    "approval-requested": "Awaiting Approval",
    "approval-responded": "Responded",
    "output-available": "Completed",
    "output-error": "Error",
    "output-denied": "Denied",
  };

  const icons: Record<ToolUIPart["state"], ReactNode> = {
    "input-streaming": <CircleIcon className="size-4" />,
    "input-available": <ClockIcon className="size-4 animate-pulse" />,
    "approval-requested": <ClockIcon className="size-4 text-yellow-600" />,
    "approval-responded": <CheckCircleIcon className="size-4 text-blue-600" />,
    "output-available": <CheckCircleIcon className="size-4 text-green-600" />,
    "output-error": <XCircleIcon className="size-4 text-red-600" />,
    "output-denied": <XCircleIcon className="size-4 text-orange-600" />,
  };

  return (
    <Badge className="gap-1.5 rounded-full text-xs" variant="secondary">
      {icons[status]}
      {labels[status]}
    </Badge>
  );
};

export const ToolHeader = (
  { className, title, type, state, ...props }: ToolHeaderProps
) => (
  <CollapsibleTrigger
    className={cn(
      "flex w-full items-center justify-between gap-4 p-3",
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-2">
      <WrenchIcon className="size-4 text-muted-foreground" />
      <span className="font-medium text-sm">
        {title ?? type.split("-").slice(1).join("-")}
      </span>
      {getStatusBadge(state)}
    </div>
    <ChevronDownIcon className="size-4 text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
  </CollapsibleTrigger>
);

export type ToolContentProps = ComponentProps<typeof CollapsibleContent>;

export const ToolContent = ({ className, ...props }: ToolContentProps) => (
  <CollapsibleContent
    className={cn(
      "data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 text-popover-foreground outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
      className
    )}
    {...props}
  />
);

export type ToolInputProps = ComponentProps<"div"> & {
  input: ToolUIPart["input"];
};

export const ToolInput = ({ className, input, ...props }: ToolInputProps) => (
  <div className={cn("space-y-2 overflow-hidden p-4", className)} {...props}>
    <h4 className="font-medium text-muted-foreground text-xs uppercase tracking-wide">
      Parameters
    </h4>
    <div className="rounded-md bg-muted/50">
      <CodeBlock code={JSON.stringify(input, null, 2)} language="json" />
    </div>
  </div>
);

export type ToolOutputProps = ComponentProps<"div"> & {
  output: ToolUIPart["output"];
  errorText: ToolUIPart["errorText"];
};

export const ToolOutput = (
  { className, output, errorText, ...props }: ToolOutputProps
) => {
  if (!(output || errorText)) {
    return null;
  }

  let Output = <div>{output as ReactNode}</div>;

  if (typeof output === "object" && !isValidElement(output)) {
    Output = (
      <CodeBlock code={JSON.stringify(output, null, 2)} language="json" />
    );
  } else if (typeof output === "string") {
    Output = <CodeBlock code={output} language="json" />;
  }

  return (
    <div className={cn("space-y-2 p-4", className)} {...props}>
      <h4 className="font-medium text-muted-foreground text-xs uppercase tracking-wide">
        {errorText ? "Error" : "Result"}
      </h4>
      <div
        className={cn(
          "overflow-x-auto rounded-md text-xs [&_table]:w-full",
          errorText
            ? "bg-destructive/10 text-destructive"
            : "bg-muted/50 text-foreground"
        )}
      >
        {errorText && <div>{errorText}</div>}
        {Output}
      </div>
    </div>
  );
};

```

--------------------------------

### Create streaming chat API route handler

Source: https://ai-sdk.dev/elements/examples/chatbot

Implements a Next.js API route handler that streams AI responses using the ai library. Supports web search with Perplexity Sonar model and sends sources and reasoning back to the client. Accepts UI messages and converts them to model messages for processing.

```typescript
import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
    model,
    webSearch,
  }: { 
    messages: UIMessage[]; 
    model: string; 
    webSearch: boolean;
  } = await req.json();

  const result = streamText({
    model: webSearch ? 'perplexity/sonar' : model,
    messages: convertToModelMessages(messages),
    system:
      'You are a helpful assistant that can answer questions and help with tasks',
  });

  // send sources and reasoning back to the client
  return result.toUIMessageStreamResponse({
    sendSources: true,
    sendReasoning: true,
  });
}
```

--------------------------------

### Prompt Input Component with Model Selector (React)

Source: https://ai-sdk.dev/elements/components/prompt-input

Demonstrates the usage of the PromptInput component for sending messages with file attachments to an AI model. It includes a textarea for text input, file upload functionality, a submit button, and a model selector dropdown. The component is managed by PromptInputProvider for state management. Dependencies include various components from '@/components/ai-elements/model-selector' and '@/components/ai-elements/prompt-input'.

```jsx
"use client";

import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorLogo,
  ModelSelectorLogoGroup,
  ModelSelectorName,
  ModelSelectorTrigger,
} from "@/components/ai-elements/model-selector";
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  type PromptInputMessage,
  PromptInputProvider,
  PromptInputSpeechButton,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
  usePromptInputController,
} from "@/components/ai-elements/prompt-input";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { CheckIcon, GlobeIcon } from "lucide-react";
import { useRef, useState } from "react";

const models = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    chef: "OpenAI",
    chefSlug: "openai",
    providers: ["openai", "azure"],
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    chef: "OpenAI",
    chefSlug: "openai",
    providers: ["openai", "azure"],
  },
  {
    id: "claude-opus-4-20250514",
    name: "Claude 4 Opus",
    chef: "Anthropic",
    chefSlug: "anthropic",
    providers: ["anthropic", "azure", "google", "amazon-bedrock"],
  },
  {
    id: "claude-sonnet-4-20250514",
    name: "Claude 4 Sonnet",
    chef: "Anthropic",
    chefSlug: "anthropic",
    providers: ["anthropic", "azure", "google", "amazon-bedrock"],
  },
  {
    id: "gemini-2.0-flash-exp",
    name: "Gemini 2.0 Flash",
    chef: "Google",
    chefSlug: "google",
    providers: ["google"],
  },
];

const SUBMITTING_TIMEOUT = 200;
const STREAMING_TIMEOUT = 2000;

const HeaderControls = () => {
  const controller = usePromptInputController();

  return (
    <header className="mt-8 flex items-center justify-between">
      <p className="text-sm">
        Header Controls via{" "}
        <code className="rounded-md bg-muted p-1 font-bold">
          PromptInputProvider
        </code>
      </p>
      <ButtonGroup>
        <Button
          onClick={() => {
            controller.textInput.clear();
          }}
          size="sm"
          type="button"
          variant="outline"
        >
          Clear input
        </Button>
        <Button
          onClick={() => {
            controller.textInput.setInput("Inserted via PromptInputProvider");
          }}
          size="sm"
          type="button"
          variant="outline"
        >
          Set input
        </Button>

        <Button
          onClick={() => {
            controller.attachments.clear();
          }}
          size="sm"
          type="button"
          variant="outline"
        >
          Clear attachments
        </Button>
      </ButtonGroup>
    </header>
  );
};

const Example = () => {
  const [model, setModel] = useState<string>(models[0].id);
  const [modelSelectorOpen, setModelSelectorOpen] = useState(false);
  const [status, setStatus] = useState<
    "submitted" | "streaming" | "ready" | "error"
  >("ready");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const selectedModelData = models.find((m) => m.id === model);

  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);

    if (!(hasText || hasAttachments)) {
      return;
    }

    setStatus("submitted");

    // eslint-disable-next-line no-console
    console.log("Submitting message:", message);

    setTimeout(() => {
      setStatus("streaming");
    }, SUBMITTING_TIMEOUT);

    setTimeout(() => {
      setStatus("ready");
    }, STREAMING_TIMEOUT);
  };

  return (
    <div className="size-full">
      <PromptInputProvider>
        <PromptInput globalDrop multiple onSubmit={handleSubmit}>
          <PromptInputAttachments>
            {(attachment) => <PromptInputAttachment data={attachment} />}
          </PromptInputAttachments>
          <PromptInputBody>
            <PromptInputTextarea ref={textareaRef} />
          </PromptInputBody>
          <PromptInputFooter>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger />
                <PromptInputActionMenuContent>

```

--------------------------------

### Define PromptInputSelect UI Components

Source: https://ai-sdk.dev/elements/components/prompt-input

Provides reusable type definitions and component implementations for select inputs, including the main Select component, Trigger, Content, Item, and Value. These components are designed for customizable UI elements.

```typescript
export type PromptInputSelectProps = ComponentProps<typeof Select>;

export const PromptInputSelect = (props: PromptInputSelectProps) => (
  <Select {...props} />
);

export type PromptInputSelectTriggerProps = ComponentProps<
  typeof SelectTrigger
>;

export const PromptInputSelectTrigger = ({ 
  className,
  ...props
}: PromptInputSelectTriggerProps) => (
  <SelectTrigger
    className={cn(
      "border-none bg-transparent font-medium text-muted-foreground shadow-none transition-colors",
      "hover:bg-accent hover:text-foreground aria-expanded:bg-accent aria-expanded:text-foreground",
      className
    )}
    {...props}
  />
);

export type PromptInputSelectContentProps = ComponentProps<
  typeof SelectContent
>;

export const PromptInputSelectContent = ({ 
  className,
  ...props
}: PromptInputSelectContentProps) => (
  <SelectContent className={cn(className)} {...props} />
);

export type PromptInputSelectItemProps = ComponentProps<typeof SelectItem>;

export const PromptInputSelectItem = ({ 
  className,
  ...props
}: PromptInputSelectItemProps) => (
  <SelectItem className={cn(className)} {...props} />
);

export type PromptInputSelectValueProps = ComponentProps<typeof SelectValue>;

export const PromptInputSelectValue = ({ 
  className,
  ...props
}: PromptInputSelectValueProps) => (
  <SelectValue className={cn(className)} {...props} />
);

```

--------------------------------

### POST /api/chat

Source: https://ai-sdk.dev/elements/examples/v0

Handles sending messages to the v0 SDK to either create a new chat or continue an existing one. It processes incoming JSON requests containing a message and an optional chatId.

```APIDOC
## POST /api/chat

### Description
This endpoint allows clients to send messages to the v0 SDK. It can either initiate a new chat session with the provided message or append the message to an existing chat identified by `chatId`.

### Method
POST

### Endpoint
/api/chat

### Parameters
#### Query Parameters
None

#### Request Body
- **message** (string) - Required - The user's message to send to the chatbot.
- **chatId** (string) - Optional - The ID of an existing chat session to continue.

### Request Example
```json
{
  "message": "Hello, can you help me with something?",
  "chatId": "existing-chat-id-123"
}
```

### Response
#### Success Response (200)
- **id** (string) - The ID of the chat session.
- **demo** (string) - A URL or identifier for the chat demo.

#### Response Example
```json
{
  "id": "new-chat-id-456",
  "demo": "http://example.com/demo/new-chat-id-456"
}
```

#### Error Response (400)
- **error** (string) - Description of the bad request, e.g., 'Message is required'.

#### Error Response (500)
- **error** (string) - Description of the internal server error, e.g., 'Failed to process request'.
```

--------------------------------

### Source component props

Source: https://ai-sdk.dev/elements/components/sources

Type definitions for the Source component props. Extends anchor HTML attributes for creating clickable source links.

```typescript
Prop
Type
`...props?`React.AnchorHTMLAttributes<HTMLAnchorElement>
```

--------------------------------

### Tabbed Interface for Tabs and Recents (React)

Source: https://ai-sdk.dev/elements/components/prompt-input

This component provides a tabbed interface to display 'Active Tabs' and 'Recents'. Each tab contains a list of items, represented by icons and truncated file paths. A footer indicates that only file paths are included.

```jsx
<PromptInputHoverCard>
  <PromptInputHoverCardTrigger>
    <PromptInputButton size="sm" variant="outline">
      <FilesIcon className="text-muted-foreground" size={12} />
      <span>1 Tab</span>
    </PromptInputButton>
  </PromptInputHoverCardTrigger>
  <PromptInputHoverCardContent className="w-[300px] space-y-4 px-0 py-3">
    <PromptInputTab>
      <PromptInputTabLabel>Active Tabs</PromptInputTabLabel>
      <PromptInputTabBody>
        {sampleTabs.active.map((tab) => (
          <PromptInputTabItem key={tab.path}>
            <GlobeIcon className="text-primary" size={16} />
            <span className="truncate" dir="rtl">
              {tab.path}
            </span>
          </PromptInputTabItem>
        ))}
      </PromptInputTabBody>
    </PromptInputTab>
    <PromptInputTab>
      <PromptInputTabLabel>Recents</PromptInputTabLabel>
      <PromptInputTabBody>
        {sampleTabs.recents.map((tab) => (
          <PromptInputTabItem key={tab.path}>
            <GlobeIcon className="text-primary" size={16} />
            <span className="truncate" dir="rtl">
              {tab.path}
            </span>
          </PromptInputTabItem>
        ))}
      </PromptInputTabBody>
    </PromptInputTab>
    <div className="border-t px-3 pt-2 text-muted-foreground text-xs">
      Only file paths are included
    </div>
  </PromptInputHoverCardContent>
</PromptInputHoverCard>
```

--------------------------------

### React Chat Component with State Management

Source: https://ai-sdk.dev/elements/examples/chatbot

Main React component implementing chat interface with state management for model selection, message handling, and streaming status. Includes useState hooks for managing component state and useCallback for optimized event handlers.

```JavaScript
const Example = () => {
  const [model, setModel] = useState<string>(models[0].id);
  const [modelSelectorOpen, setModelSelectorOpen] = useState(false);
  const [text, setText] = useState<string>("");
  const [useWebSearch, setUseWebSearch] = useState<boolean>(false);
  const [useMicrophone, setUseMicrophone] = useState<boolean>(false);
  const [status, setStatus] = useState<
    "submitted" | "streaming" | "ready" | "error"
  >("ready");
  const [messages, setMessages] = useState<MessageType[]>(initialMessages);
  const [streamingMessageId, setStreamingMessageId] = useState<string | null>(
    null
  );

  const selectedModelData = models.find((m) => m.id === model);

  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
```

--------------------------------

### React Components for AI Input Tools

Source: https://ai-sdk.dev/elements/components/prompt-input

Defines reusable React components for AI input fields, such as tool containers, buttons, and dropdown menus. These components are designed to be themeable and extensible using common CSS utility classes.

```typescript
export type PromptInputToolsProps = HTMLAttributes<HTMLDivElement>;

export const PromptInputTools = ({ 
  className,
  ...props
}: PromptInputToolsProps) => (
  <div className={cn("flex items-center gap-1", className)} {...props} />
);

export type PromptInputButtonProps = ComponentProps<typeof InputGroupButton>;

export const PromptInputButton = ({ 
  variant = "ghost",
  className,
  size,
  ...props
}: PromptInputButtonProps) => {
  const newSize =
    size ?? (Children.count(props.children) > 1 ? "sm" : "icon-sm");

  return (
    <InputGroupButton
      className={cn(className)}
      size={newSize}
      type="button"
      variant={variant}
      {...props}
    />
  );
};

export type PromptInputActionMenuProps = ComponentProps<typeof DropdownMenu>;
export const PromptInputActionMenu = (props: PromptInputActionMenuProps) => (
  <DropdownMenu {...props} />
);

export type PromptInputActionMenuTriggerProps = PromptInputButtonProps;

export const PromptInputActionMenuTrigger = ({ 
  className,
  children,
  ...props
}: PromptInputActionMenuTriggerProps) => (
  <DropdownMenuTrigger asChild>
    <PromptInputButton className={className} {...props}>
      {children ?? <PlusIcon className="size-4" />}
    </PromptInputButton>
  </DropdownMenuTrigger>
);

export type PromptInputActionMenuContentProps = ComponentProps<
  typeof DropdownMenuContent
>;
export const PromptInputActionMenuContent = ({ 
  className,
  ...props
}: PromptInputActionMenuContentProps) => (
  <DropdownMenuContent align="start" className={cn(className)} {...props} />
);

export type PromptInputActionMenuItemProps = ComponentProps<
  typeof DropdownMenuItem
>;
export const PromptInputActionMenuItem = ({ 
  className,
  ...props
}: PromptInputActionMenuItemProps) => (
  <DropdownMenuItem className={cn(className)} {...props} />
);

export type PromptInputSubmitProps = ComponentProps<typeof InputGroupButton> & {
  status?: ChatStatus;
};

export const PromptInputSubmit = ({ 
  className,
  variant = "default",
  size = "icon-sm",
  status,
  children,
  ...props
}: PromptInputSubmitProps) => {
  let Icon = <CornerDownLeftIcon className="size-4" />;

  if (status === "submitted") {
    Icon = <Loader2Icon className="size-4 animate-spin" />;
  } else if (status === "streaming") {
    Icon = <SquareIcon className="size-4" />;
  } else if (status === "error") {
    Icon = <XIcon className="size-4" />;
  }

  return (
    <InputGroupButton
      aria-label="Submit"
      className={cn(className)}
      size={size}
      type="submit"
      variant={variant}
      {...props}
    >
      {children ?? Icon}
    </InputGroupButton>
  );
};

```

--------------------------------

### Next.js Streaming Chat API Route

Source: https://ai-sdk.dev/elements/components/prompt-input

Implements a Next.js API route for handling chat messages with streaming responses. Uses the AI SDK to process messages, supports model selection and optional web search via Perplexity. Converts UI messages to model format and streams responses with a 30-second timeout limit.

```typescript
import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { 
    model, 
    messages, 
    webSearch 
  }: { 
    messages: UIMessage[]; 
    model: string;
    webSearch?: boolean;
  } = await req.json();

  const result = streamText({
    model: webSearch ? 'perplexity/sonar' : model,
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
```

--------------------------------

### Define PromptInputTabs UI Components

Source: https://ai-sdk.dev/elements/components/prompt-input

Provides reusable type definitions and component implementations for tabbed interfaces, including TabsList, Tab, TabLabel, and TabBody. These components facilitate the organization and display of content in a tabbed format.

```typescript
export type PromptInputTabsListProps = HTMLAttributes<HTMLDivElement>;

export const PromptInputTabsList = ({ 
  className,
  ...props
}: PromptInputTabsListProps) => <div className={cn(className)} {...props} />;

export type PromptInputTabProps = HTMLAttributes<HTMLDivElement>;

export const PromptInputTab = ({ 
  className,
  ...props
}: PromptInputTabProps) => <div className={cn(className)} {...props} />;

export type PromptInputTabLabelProps = HTMLAttributes<HTMLHeadingElement>;

export const PromptInputTabLabel = ({ 
  className,
  ...props
}: PromptInputTabLabelProps) => (
  <h3
    className={cn(
      "mb-2 px-3 font-medium text-muted-foreground text-xs",
      className
    )}
    {...props}
  />
);

export type PromptInputTabBodyProps = HTMLAttributes<HTMLDivElement>;

export const PromptInputTabBody = ({ 
  className,
  ...props
}: PromptInputTabBodyProps) => (
  <div className={cn("space-y-1", className)} {...props} />
);

```

--------------------------------

### Define PromptInputFooter Component

Source: https://ai-sdk.dev/elements/components/prompt-input

A component for the footer of the prompt input area, designed for actions or status information. It extends InputGroupAddon and applies styling for justification and spacing. It accepts standard InputGroupAddon props.

```typescript
export type PromptInputFooterProps = Omit<
  ComponentProps<typeof InputGroupAddon>,
  "align"
>;

export const PromptInputFooter = ({ 
  className,
  ...props
}: PromptInputFooterProps) => (
  <InputGroupAddon
    align="block-end"
    className={cn("justify-between gap-1", className)}
    {...props}
  />
);
```

--------------------------------

### Handle File Upload and Submission in PromptInput

Source: https://ai-sdk.dev/elements/components/prompt-input

Manages file uploads, conversion, and submission handling for AI prompts. It supports both synchronous and asynchronous onSubmit functions and includes error handling to prevent data loss on submission failure. Dependencies include FileUIPart and onSubmit function.

```typescript
      .then((convertedFiles: FileUIPart[]) => {
        try {
          const result = onSubmit({ text, files: convertedFiles }, event);

          // Handle both sync and async onSubmit
          if (result instanceof Promise) {
            result
              .then(() => {
                clear();
                if (usingProvider) {
                  controller.textInput.clear();
                }
              })
              .catch(() => {
                // Don't clear on error - user may want to retry
              });
          } else {
            // Sync function completed without throwing, clear attachments
            clear();
            if (usingProvider) {
              controller.textInput.clear();
            }
          }
        } catch (error) {
          // Don't clear on error - user may want to retry
        }
      });
```

--------------------------------

### Prompt Input Area (React)

Source: https://ai-sdk.dev/elements/components/prompt-input

This component defines the main input area for prompts, consisting of a header, body, and footer. The body contains a textarea with a placeholder, and the header includes various UI controls like command lists, hover cards, and attachments.

```jsx
<PromptInputHeader>
  {/* ... other header elements */}
  <PromptInputAttachments>
    {(attachment) => <PromptInputAttachment data={attachment} />}
  </PromptInputAttachments>
</PromptInputHeader>
<PromptInputBody>
  <PromptInputTextarea
    placeholder="Plan, search, build anything"
    ref={textareaRef}
  />
</PromptInputBody>
<PromptInputFooter>
  <PromptInputTools>
    <ModelSelector />
  </PromptInputTools>
</PromptInputFooter>
```

--------------------------------

### Format Tokens with Cost Display (React)

Source: https://ai-sdk.dev/elements/components/context

A utility component to display token counts in a compact format and optionally append a formatted cost string. It handles undefined token values gracefully.

```typescript
const TokensWithCost = ({
  tokens,
  costText,
}: {
  tokens?: number;
  costText?: string;
}) => (
  <span>
    {tokens === undefined
      ? "—"
      : new Intl.NumberFormat("en-US", {
          notation: "compact",
        }).format(tokens)}
    {costText ? (
      <span className="ml-2 text-muted-foreground">• {costText}</span>
    ) : null}
  </span>
);
```

--------------------------------

### Define PromptInputHeader Component

Source: https://ai-sdk.dev/elements/components/prompt-input

A component for the header of the prompt input area, typically used for addons or labels. It extends InputGroupAddon and applies specific styling for ordering and layout. It accepts standard InputGroupAddon props.

```typescript
export type PromptInputHeaderProps = Omit<
  ComponentProps<typeof InputGroupAddon>,
  "align"
>;

export const PromptInputHeader = ({ 
  className,
  ...props
}: PromptInputHeaderProps) => (
  <InputGroupAddon
    align="block-end"
    className={cn("order-first flex-wrap gap-1", className)}
    {...props}
  />
);
```

--------------------------------

### AI Message and Conversation Components (TypeScript)

Source: https://ai-sdk.dev/elements/examples/chatbot

Demonstrates the usage of AI message and conversation components, including message branching, content display, and scroll buttons. It defines a MessageType for structuring conversation data and provides an initial set of messages with user and assistant roles.

```typescript
"use client";

import {
  MessageBranch,
  MessageBranchContent,
  MessageBranchNext,
  MessageBranchPage,
  MessageBranchPrevious,
  MessageBranchSelector,
} from "@/components/ai-elements/message";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Message, MessageContent } from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputActionAddAttachments,
  PromptInputActionMenu,
  PromptInputActionMenuContent,
  PromptInputActionMenuTrigger,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  PromptInputFooter,
  PromptInputHeader,
  type PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorLogo,
  ModelSelectorLogoGroup,
  ModelSelectorName,
  ModelSelectorTrigger,
} from "@/components/ai-elements/model-selector";
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/ai-elements/reasoning";
import { MessageResponse } from "@/components/ai-elements/message";
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from "@/components/ai-elements/sources";
import { Suggestion, Suggestions } from "@/components/ai-elements/suggestion";
import type { ToolUIPart } from "ai";
import { CheckIcon, GlobeIcon, MicIcon } from "lucide-react";
import { nanoid } from "nanoid";
import { useCallback, useState } from "react";
import { toast } from "sonner";

type MessageType = {
  key: string;
  from: "user" | "assistant";
  sources?: { href: string; title: string }[];
  versions: {
    id: string;
    content: string;
  }[];
  reasoning?: {
    content: string;
    duration: number;
  };
  tools?: {
    name: string;
    description: string;
    status: ToolUIPart["state"];
    parameters: Record<string, unknown>;
    result: string | undefined;
    error: string | undefined;
  }[];
};

const initialMessages: MessageType[] = [
  {
    key: nanoid(),
    from: "user",
    versions: [
      {
        id: nanoid(),
        content: "Can you explain how to use React hooks effectively?",
      },
    ],
  },
  {
    key: nanoid(),
    from: "assistant",
    sources: [
      {
        href: "https://react.dev/reference/react",
        title: "React Documentation",
      },
      {
        href: "https://react.dev/reference/react-dom",
        title: "React DOM Documentation",
      },
    ],
    tools: [
      {
        name: "mcp",
        description: "Searching React documentation",
        status: "input-available",
        parameters: {
          query: "React hooks best practices",
          source: "react.dev",
        },
        result: `{
  "query": "React hooks best practices",
  "results": [
    {
      "title": "Rules of Hooks",
      "url": "https://react.dev/warnings/invalid-hook-call-warning",
      "snippet": "Hooks must be called at the top level of your React function components or custom hooks. Don't call hooks inside loops, conditions, or nested functions."
    },
    {
      "title": "useState Hook",
      "url": "https://react.dev/reference/react/useState",
      "snippet": "useState is a React Hook that lets you add state to your function components. It returns an array with two values: the current state and a function to update it."
    },
    {
      "title": "useEffect Hook",
      "url": "https://react.dev/reference/react/useEffect",
      "snippet": "useEffect lets you synchronize a component with external systems. It runs after render and can be used to perform side effects like data fetching."
    }
  ]
}`,
        error: undefined,
      },
    ],
    versions: [
      {
        id: nanoid(),
        content: "# React Hooks Best Practices\n\nReact hooks are a powerful feature that let you use state and other React features without writing classes. Here are some tips for using them effectively:\n\n## Rules of Hooks\n\n1. **Only call hooks at the top level** of your component or custom hooks\n2. **Don't call hooks inside loops, conditions, or nested functions**\n\n## Common Hooks\n\n- **useState**: For local component state\n- **useEffect**: For side effects like data fetching\n- **useContext**: For consuming context\n- **useReducer**: For complex state logic\n- **useCallback**: For memoizing functions\n- **useMemo**: For memoizing values\n\n"
      },
    ],
  },
];

```

--------------------------------

### Define PromptInputHoverCard UI Components

Source: https://ai-sdk.dev/elements/components/prompt-input

Defines reusable type definitions and component implementations for hover card interactions, including the main HoverCard component and its Trigger and Content. These components allow for displaying additional information on hover.

```typescript
export type PromptInputHoverCardProps = ComponentProps<typeof HoverCard>;

export const PromptInputHoverCard = ({ 
  openDelay = 0,
  closeDelay = 0,
  ...props
}: PromptInputHoverCardProps) => (
  <HoverCard closeDelay={closeDelay} openDelay={openDelay} {...props} />
);

export type PromptInputHoverCardTriggerProps = ComponentProps<
  typeof HoverCardTrigger
>;

export const PromptInputHoverCardTrigger = (
  props: PromptInputHoverCardTriggerProps
) => <HoverCardTrigger {...props} />;

export type PromptInputHoverCardContentProps = ComponentProps<
  typeof HoverCardContent
>;

export const PromptInputHoverCardContent = ({ 
  align = "start",
  ...props
}: PromptInputHoverCardContentProps) => (
  <HoverCardContent align={align} {...props} />
);

```

--------------------------------

### Approved/Responded State Confirmation (React/TypeScript)

Source: https://ai-sdk.dev/elements/components/confirmation

Illustrates the Confirmation component when the user has approved an action, showing the 'approval-responded' or 'output-available' state with a success message. It uses icons from 'lucide-react' and imports confirmation components.

```typescript
"use client";

import {
  Confirmation,
  ConfirmationAccepted,
  ConfirmationRejected,
  ConfirmationRequest,
  ConfirmationTitle,
} from "@/components/ai-elements/confirmation";
import { CheckIcon, XIcon } from "lucide-react";
import { nanoid } from "nanoid";

const Example = () => (
  <div className="w-full max-w-2xl">
    <Confirmation
      approval={{ id: nanoid(), approved: true }}
      state="approval-responded"
    >
      <ConfirmationTitle>
        <ConfirmationRequest>
          This tool wants to delete the file
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
            /tmp/example.txt
          </code>
          . Do you approve this action?
        </ConfirmationRequest>
        <ConfirmationAccepted>
          <CheckIcon className="size-4 text-green-600 dark:text-green-400" />
          <span>You approved this tool execution</span>
        </ConfirmationAccepted>
        <ConfirmationRejected>
          <XIcon className="size-4 text-destructive" />
          <span>You rejected this tool execution</span>
        </ConfirmationRejected>
      </ConfirmationTitle>
    </Confirmation>
  </div>
);

export default Example;

```

--------------------------------

### Define PromptInputCommandItem Component (TypeScript)

Source: https://ai-sdk.dev/elements/components/prompt-input

Defines an individual item component for the Command UI, representing selectable options in prompt input. It accepts ComponentProps from CommandItem and allows for custom styling.

```typescript
export type PromptInputCommandItemProps = ComponentProps<typeof CommandItem>;

export const PromptInputCommandItem = ({
  className,
  ...props
}: PromptInputCommandItemProps) => (
  <CommandItem className={cn(className)} {...props} />
);
```

--------------------------------

### Displaying Tool Output with Confirmation States (React)

Source: https://ai-sdk.dev/elements/components/tool

This snippet demonstrates how to conditionally render tool output based on the tool call state. It includes UI elements for accepted and rejected confirmations, using icons and text to represent the status. It relies on React component structure and state management.

```jsx
      <ToolContent>
        <ToolInput input={toolCall.input} />
        <Confirmation
          approval={{
            id: nanoid(),
            approved: false,
            reason: "Query could impact production performance",
          }}
          state="output-denied"
        >
          <ConfirmationTitle>
            <ConfirmationRequest>
              This tool will execute a query on the production database.
            </ConfirmationRequest>
            <ConfirmationAccepted>
              <CheckIcon className="size-4 text-green-600 dark:text-green-400" />
              <span>Accepted</span>
            </ConfirmationAccepted>
            <ConfirmationRejected>
              <XIcon className="size-4 text-destructive" />
              <span>Rejected: Query could impact production performance</span>
            </ConfirmationRejected>
          </ConfirmationTitle>
        </Confirmation>
      </ToolContent>
    </Tool>

    {/* 7. output-denied: Denied */}
    <Tool>
      <ToolHeader
        state={"output-denied" as ToolUIPart["state"]}
        title="database_query"
        type="tool-database_query"
      />
      <ToolContent>
        <ToolInput input={toolCall.input} />
        <Confirmation
          approval={{
            id: nanoid(),
            approved: false,
            reason: "Query could impact production performance",
          }}
          state="output-denied"
        >
          <ConfirmationTitle>
            <ConfirmationRequest>
              This tool will execute a query on the production database.
            </ConfirmationRequest>
            <ConfirmationAccepted>
              <CheckIcon className="size-4 text-green-600 dark:text-green-400" />
              <span>Accepted</span>
            </ConfirmationAccepted>
            <ConfirmationRejected>
              <XIcon className="size-4 text-destructive" />
              <span>Rejected: Query could impact production performance</span>
            </ConfirmationRejected>
          </ConfirmationTitle>
        </Confirmation>
      </ToolContent>
    </Tool>
  </div>
);

export default Example;
```

--------------------------------

### Implement Context React Component for Token Usage

Source: https://ai-sdk.dev/elements/components/context

Defines a React Context provider and components for displaying token usage in a hover card, including an icon, trigger button, and content with progress bar. Depends on shadcn-ui (Button, HoverCard, Progress) and tokenlens for usage data. Props include usedTokens, maxTokens, usage, and modelId; renders visual percentage and compact token counts. Limitation: Requires wrapping in Context provider; throws error if used outside.

```tsx
"use client";

import { Button } from "@repo/shadcn-ui/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@repo/shadcn-ui/components/ui/hover-card";
import { Progress } from "@repo/shadcn-ui/components/ui/progress";
import { cn } from "@repo/shadcn-ui/lib/utils";
import type { LanguageModelUsage } from "ai";
import { type ComponentProps, createContext, useContext } from "react";
import { getUsage } from "tokenlens";

const PERCENT_MAX = 100;
const ICON_RADIUS = 10;
const ICON_VIEWBOX = 24;
const ICON_CENTER = 12;
const ICON_STROKE_WIDTH = 2;

type ModelId = string;

type ContextSchema = {
  usedTokens: number;
  maxTokens: number;
  usage?: LanguageModelUsage;
  modelId?: ModelId;
};

const ContextContext = createContext<ContextSchema | null>(null);

const useContextValue = () => {
  const context = useContext(ContextContext);

  if (!context) {
    throw new Error("Context components must be used within Context");
  }

  return context;
};

export type ContextProps = ComponentProps<typeof HoverCard> & ContextSchema;

export const Context = ({
  usedTokens,
  maxTokens,
  usage,
  modelId,
  ...props
}: ContextProps) => (
  <ContextContext.Provider
    value={{
      usedTokens,
      maxTokens,
      usage,
      modelId,
    }}
  >
    <HoverCard closeDelay={0} openDelay={0} {...props} />
  </ContextContext.Provider>
);

const ContextIcon = () => {
  const { usedTokens, maxTokens } = useContextValue();
  const circumference = 2 * Math.PI * ICON_RADIUS;
  const usedPercent = usedTokens / maxTokens;
  const dashOffset = circumference * (1 - usedPercent);

  return (
    <svg
      aria-label="Model context usage"
      height="20"
      role="img"
      style={{ color: "currentcolor" }}
      viewBox={`0 0 ${ICON_VIEWBOX} ${ICON_VIEWBOX}`}
      width="20"
    >
      <circle
        cx={ICON_CENTER}
        cy={ICON_CENTER}
        fill="none"
        opacity="0.25"
        r={ICON_RADIUS}
        stroke="currentColor"
        strokeWidth={ICON_STROKE_WIDTH}
      />
      <circle
        cx={ICON_CENTER}
        cy={ICON_CENTER}
        fill="none"
        opacity="0.7"
        r={ICON_RADIUS}
        stroke="currentColor"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={dashOffset}
        strokeLinecap="round"
        strokeWidth={ICON_STROKE_WIDTH}
        style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
      />
    </svg>
  );
};

export type ContextTriggerProps = ComponentProps<typeof Button>;

export const ContextTrigger = ({ children, ...props }: ContextTriggerProps) => {
  const { usedTokens, maxTokens } = useContextValue();
  const usedPercent = usedTokens / maxTokens;
  const renderedPercent = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(usedPercent);

  return (
    <HoverCardTrigger asChild>
      {children ?? (
        <Button type="button" variant="ghost" {...props}>
          <span className="font-medium text-muted-foreground">
            {renderedPercent}
          </span>
          <ContextIcon />
        </Button>
      )}
    </HoverCardTrigger>
  );
};

export type ContextContentProps = ComponentProps<typeof HoverCardContent>;

export const ContextContent = ({
  className,
  ...props
}: ContextContentProps) => (
  <HoverCardContent
    className={cn("min-w-60 divide-y overflow-hidden p-0", className)}
    {...props}
  />
);

export type ContextContentHeaderProps = ComponentProps<"div">;

export const ContextContentHeader = ({
  children,
  className,
  ...props
}: ContextContentHeaderProps) => {
  const { usedTokens, maxTokens } = useContextValue();
  const usedPercent = usedTokens / maxTokens;
  const displayPct = new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(usedPercent);
  const used = new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(usedTokens);
  const total = new Intl.NumberFormat("en-US", {
    notation: "compact",
  }).format(maxTokens);

  return (
    <div className={cn("w-full space-y-2 p-3", className)} {...props}>
      {children ?? (
        <>
          <div className="flex items-center justify-between gap-3 text-xs">
            <p>{displayPct}</p>
            <p className="font-mono text-muted-foreground">
              {used} / {total}
            </p>
          </div>
          <div className="space-y-2">
            <Progress className="bg-muted" value={usedPercent * PERCENT_MAX} />
          </div>
        </>
      )}
    </div>
  );
};

export type ContextContentBodyProps = ComponentProps<"div">;

export const ContextContentBody = ({
  children,
  className,
  ...props
}: ContextContentBodyProps) => (
  <div className={cn("w-full p-3", className)} {...props}>
    {children}
  </div>
);
```

--------------------------------

### Render OpenIn Chat Dropdown (JavaScript)

Source: https://ai-sdk.dev/elements/components/open-in-chat

This snippet demonstrates how to use the OpenIn component to display a dropdown menu for opening a query in different AI chat platforms such as ChatGPT, Claude, Cursor, T3, Scira, and v0. It imports the required subcomponents from the ai-elements library and passes a sample query string to each platform component. The component is a client-side React component suitable for Next.js applications.

```JavaScript
"use client";

import {
  OpenIn,
  OpenInChatGPT,
  OpenInClaude,
  OpenInContent,
  OpenInCursor,
  OpenInScira,
  OpenInT3,
  OpenInTrigger,
  OpenInv0,
} from "@/components/ai-elements/open-in-chat";

const Example = () => {
  const sampleQuery = "How can I implement authentication in Next.js?";

  return (
    <OpenIn>
      <OpenInTrigger />
      <OpenInContent>
        <OpenInChatGPT query={sampleQuery} />
        <OpenInClaude query={sampleQuery} />
        <OpenInCursor query={sampleQuery} />
        <OpenInT3 query={sampleQuery} />
        <OpenInScira query={sampleQuery} />
        <OpenInv0 query={sampleQuery} />
      </OpenInContent>
    </OpenIn>
  );
};

export default Example;
```

--------------------------------

### Web Speech API Interfaces for Speech Recognition

Source: https://ai-sdk.dev/elements/components/prompt-input

Defines TypeScript interfaces for the Web Speech API, including `SpeechRecognition`, `SpeechRecognitionEvent`, and related types. These interfaces facilitate the integration of speech-to-text functionality into web applications.

```typescript
interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
  onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  onresult:
    | ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any)
    | null;
  onerror:
    | ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any)
    | null;
}

interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

type SpeechRecognitionResultList = {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
};

type SpeechRecognitionResult = {
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
};

type SpeechRecognitionAlternative = {
  transcript: string;
  confidence: number;
};

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

declare global {
  interface Window {
    SpeechRecognition: {
      new (): SpeechRecognition;
    };
    webkitSpeechRecognition: {
      new (): SpeechRecognition;
    };
  }
}

```

--------------------------------

### Configure tsconfig.json for Path Aliases

Source: https://ai-sdk.dev/elements/troubleshooting

Sets up path aliases in tsconfig.json to resolve module import errors, specifically for the '@/' alias. This is crucial for projects using custom directory structures.

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

### Define PromptInputCommand Component (TypeScript)

Source: https://ai-sdk.dev/elements/components/prompt-input

Defines a wrapper component for the Command UI primitive, intended for prompt input functionality. It accepts ComponentProps from the Command primitive and applies custom class names.

```typescript
export type PromptInputCommandProps = ComponentProps<typeof Command>;

export const PromptInputCommand = ({
  className,
  ...props
}: PromptInputCommandProps) => <Command className={cn(className)} {...props} />;
```

--------------------------------

### Implement chat interface with React components

Source: https://ai-sdk.dev/elements/examples/v0

Main client component that manages chat state, handles user messages, and displays conversation history. It integrates with custom AI elements like Conversation, WebPreview, and PromptInput components. Depends on React hooks for state management and fetch API for backend communication.

```tsx
'use client';

import { useState } from 'react';

import {
  PromptInput,
  type PromptInputMessage,
  PromptInputSubmit,
  PromptInputTextarea,
} from '@/components/ai-elements/prompt-input';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
  Conversation,
  ConversationContent,
} from '@/components/ai-elements/conversation';
import {
  WebPreview,
  WebPreviewNavigation,
  WebPreviewUrl,
  WebPreviewBody,
} from '@/components/ai-elements/web-preview';
import { Loader } from '@/components/ai-elements/loader';
import { Suggestions, Suggestion } from '@/components/ai-elements/suggestion';

interface Chat {
  id: string;
  demo: string;
}

export default function Home() {
  const [message, setMessage] = useState('');
  const [currentChat, setCurrentChat] = useState<Chat | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<
    Array<{
      type: 'user' | 'assistant';
      content: string;
    }>
  >([]);

  const handleSendMessage = async (promptMessage: PromptInputMessage) => {
    const hasText = Boolean(promptMessage.text);
    const hasAttachments = Boolean(promptMessage.files?.length);
    
    if (!(hasText || hasAttachments) || isLoading) return;

    const userMessage = promptMessage.text?.trim() || 'Sent with attachments';
    setMessage('');
    setIsLoading(true);

    setChatHistory((prev) => [...prev, { type: 'user', content: userMessage }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage,
          chatId: currentChat?.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create chat');
      }

      const chat: Chat = await response.json();
      setCurrentChat(chat);

      setChatHistory((prev) => [
        ...prev,
        {
          type: 'assistant',
          content: 'Generated new app preview. Check the preview panel!',
        },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setChatHistory((prev) => [
        ...prev,
        {
          type: 'assistant',
          content:
            'Sorry, there was an error creating your app. Please try again.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex">
      {/* Chat Panel */}
      <div className="w-1/2 flex flex-col border-r">
        {/* Header */}
        <div className="border-b p-3 h-14 flex items-center justify-between">
          <h1 className="text-lg font-semibold">v0 Clone</h1>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {chatHistory.length === 0 ? (
            <div className="text-center font-semibold mt-8">
              <p className="text-3xl mt-4">What can we build together?</p>
            </div>
          ) : (
            <>
              <Conversation>
                <ConversationContent>
                  {chatHistory.map((msg, index) => (
                    <Message from={msg.type} key={index}>
                      <MessageContent>{msg.content}</MessageContent>
                    </Message>
                  ))}
                </ConversationContent>
              </Conversation>
              {isLoading && (
                <Message from="assistant">
                  <MessageContent>
                    <div className="flex items-center gap-2">
                      <Loader />
                      Creating your app...
                    </div>
                  </MessageContent>
                </Message>
              )}
            </>
          )}
        </div>

        {/* Input */}
        <div className="border-t p-4">
          {!currentChat && (
            <Suggestions>
              <Suggestion
                onClick={() =>
                  setMessage('Create a responsive navbar with Tailwind CSS')
                }
                suggestion="Create a responsive navbar with Tailwind CSS"
              />
              <Suggestion
                onClick={() => setMessage('Build a todo app with React')}
                suggestion="Build a todo app with React"
              />
              <Suggestion
                onClick={() =>
                  setMessage('Make a landing page for a coffee shop')
                }
                suggestion="Make a landing page for a coffee shop"
              />
            </Suggestions>
          )}
          <div className="flex gap-2">
            <PromptInput
              onSubmit={handleSendMessage}
              className="mt-4 w-full max-w-2xl mx-auto relative"
            >

```

--------------------------------

### Render collapsible console UI using React and Tailwind CSS

Source: https://ai-sdk.dev/elements/components/web-preview

This snippet defines a JSX structure for a collapsible console component. It leverages the `cn` utility for conditional class names, controls open state via `consoleOpen` and `setConsoleOpen`, and maps over `logs` to display timestamped messages with level-specific styling. Requires React, Tailwind CSS, and a `cn` helper.

```javascript
className={cn("border-t bg-muted/50 font-mono text-sm", className)}
      onOpenChange={setConsoleOpen}
      open={consoleOpen}
      {...props}
    >
      <CollapsibleTrigger asChild>
        <Button
          className="flex w-full items-center justify-between p-4 text-left font-medium hover:bg-muted/50"
          variant="ghost"
        >
          Console
          <ChevronDownIcon
            className={cn(
              "h-4 w-4 transition-transform duration-200",
              consoleOpen && "rotate-180"
            )}
          />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          "px-4 pb-4",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 outline-none data-[state=closed]:animate-out data-[state=open]:animate-in"
        )}
      >
        <div className="max-h-48 space-y-1 overflow-y-auto">
          {logs.length === 0 ? (
            <p className="text-muted-foreground">No console output</p>
          ) : (
            logs.map((log, index) => (
              <div
                className={cn(
                  "text-xs",
                  log.level === "error" && "text-destructive",
                  log.level === "warn" && "text-yellow-600",
                  log.level === "log" && "text-foreground"
                )}
                key={`${log.timestamp.getTime()}-${index}`}
              >
                <span className="text-muted-foreground">
                  {log.timestamp.toLocaleTimeString()}
                </span>{" "}
                {log.message}
              </div>
            ))
          )}
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
```

--------------------------------

### Render Weather Tool UI with useChat in Next.js (TypeScript)

Source: https://ai-sdk.dev/elements/components/tool

A React component that uses the AI SDK's useChat hook to communicate with a backend weather tool. It displays a button to request weather data for San Francisco, shows the tool UI with input and output, and formats the result. Requires the @ai-sdk/react package and UI components from the project.

```TypeScript
'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, type ToolUIPart } from 'ai';
import { Button } from '@/components/ui/button';
import { MessageResponse } from '@/components/ai-elements/message';
import {
  Tool,
  ToolContent,
  ToolHeader,
  ToolInput,
  ToolOutput,
} from '@/components/ai-elements/tool';

type WeatherToolInput = {
  location: string;
  units: 'celsius' | 'fahrenheit';
};

type WeatherToolOutput = {
  location: string;
  temperature: string;
  conditions: string;
  humidity: string;
  windSpeed: string;
  lastUpdated: string;
};

type WeatherToolUIPart = ToolUIPart<{
  fetch_weather_data: {
    input: WeatherToolInput;
    output: WeatherToolOutput;
  };
}>;

const Example = () => {
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/weather',
    }),
  });

  const handleWeatherClick = () => {
    sendMessage({ text: 'Get weather data for San Francisco in fahrenheit' });
  };

  const latestMessage = messages[messages.length - 1];
  const weatherTool = latestMessage?.parts?.find(
    (part) => part.type === 'tool-fetch_weather_data',
  ) as WeatherToolUIPart | undefined;

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full">
        <div className="space-y-4">
          <Button onClick={handleWeatherClick} disabled={status !== 'ready'}>
            Get Weather for San Francisco
          </Button>

          {weatherTool && (
            <Tool defaultOpen={true}>
              <ToolHeader type="tool-fetch_weather_data" state={weatherTool.state} />
              <ToolContent>
                <ToolInput input={weatherTool.input} />
                <ToolOutput
                  output={
                    <MessageResponse>
                      {formatWeatherResult(weatherTool.output)}
                    </MessageResponse>
                  }
                  errorText={weatherTool.errorText}
                />
              </ToolContent>
            </Tool>
          )}
        </div>
      </div>
    </div>
  );
};

function formatWeatherResult(result: WeatherToolOutput): string {
  return `**Weather for ${result.location}**

**Temperature:** ${result.temperature}  
**Conditions:** ${result.conditions}  
**Humidity:** ${result.humidity}  
**Wind Speed:** ${result.windSpeed}  

*Last updated: ${result.lastUpdated}*`;
}

export default Example;
```

--------------------------------

### React CodeBlock Component for Syntax Highlighting

Source: https://ai-sdk.dev/elements/components/code-block

This React component, `CodeBlock`, leverages the `shiki` library to highlight code snippets with different themes (light and dark) and supports optional line numbers. It also provides a context for child components, like the copy button. The `highlightCode` function is an asynchronous utility for generating HTML for syntax highlighting.

```typescript
"use client";

import { Button } from "@repo/shadcn-ui/components/ui/button";
import { cn } from "@repo/shadcn-ui/lib/utils";
import type { Element } from "hast";
import { CheckIcon, CopyIcon } from "lucide-react";
import {
  type ComponentProps,
  createContext,
  type HTMLAttributes,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { type BundledLanguage, codeToHtml, type ShikiTransformer } from "shiki";

type CodeBlockProps = HTMLAttributes<HTMLDivElement> & {
  code: string;
  language: BundledLanguage;
  showLineNumbers?: boolean;
};

type CodeBlockContextType = {
  code: string;
};

const CodeBlockContext = createContext<CodeBlockContextType>({
  code: "",
});

const lineNumberTransformer: ShikiTransformer = {
  name: "line-numbers",
  line(node: Element, line: number) {
    node.children.unshift({
      type: "element",
      tagName: "span",
      properties: {
        className: [
          "inline-block",
          "min-w-10",
          "mr-4",
          "text-right",
          "select-none",
          "text-muted-foreground",
        ],
      },
      children: [{ type: "text", value: String(line) }],
    });
  },
};

export async function highlightCode(
  code: string,
  language: BundledLanguage,
  showLineNumbers = false
) {
  const transformers: ShikiTransformer[] = showLineNumbers
    ? [lineNumberTransformer]
    : [];

  return await Promise.all([
    codeToHtml(code, {
      lang: language,
      theme: "one-light",
      transformers,
    }),
    codeToHtml(code, {
      lang: language,
      theme: "one-dark-pro",
      transformers,
    }),
  ]);
}

export const CodeBlock = ({
  code,
  language,
  showLineNumbers = false,
  className,
  children,
  ...props
}: CodeBlockProps) => {
  const [html, setHtml] = useState<string>("");
  const [darkHtml, setDarkHtml] = useState<string>("");
  const mounted = useRef(false);

  useEffect(() => {
    highlightCode(code, language, showLineNumbers).then(([light, dark]) => {
      if (!mounted.current) {
        setHtml(light);
        setDarkHtml(dark);
        mounted.current = true;
      }
    });

    return () => {
      mounted.current = false;
    };
  }, [code, language, showLineNumbers]);

  return (
    <CodeBlockContext.Provider value={{ code }}>
      <div
        className={cn(
          "group relative w-full overflow-hidden rounded-md border bg-background text-foreground",
          className
        )}
        {...props}
      >
        <div className="relative">
          <div
            className="overflow-hidden dark:hidden [&>pre]:m-0 [&>pre]:bg-background! [&>pre]:p-4 [&>pre]:text-foreground! [&>pre]:text-sm [&_code]:font-mono [&_code]:text-sm"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: "this is needed."
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div
            className="hidden overflow-hidden dark:block [&>pre]:m-0 [&>pre]:bg-background! [&>pre]:p-4 [&>pre]:text-foreground! [&>pre]:text-sm [&_code]:font-mono [&_code]:text-sm"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: "this is needed."
            dangerouslySetInnerHTML={{ __html: darkHtml }}
          />
          {children && (
            <div className="absolute top-2 right-2 flex items-center gap-2">
              {children}
            </div>
          )}
        </div>
      </div>
    </CodeBlockContext.Provider>
  );
};

export type CodeBlockCopyButtonProps = ComponentProps<typeof Button> & {
  onCopy?: () => void;
  onError?: (error: Error) => void;
  timeout?: number;
};

export const CodeBlockCopyButton = ({
  onCopy,
  onError,
  timeout = 2000,
  children,
  className,
  ...props
}: CodeBlockCopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const { code } = useContext(CodeBlockContext);

  const copyToClipboard = async () => {
    if (typeof window === "undefined" || !navigator?.clipboard?.writeText) {
      onError?.(new Error("Clipboard API not available"));
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      onCopy?.();
      setTimeout(() => setIsCopied(false), timeout);
    } catch (error) {
      onError?.(error as Error);
    }
  };

  const Icon = isCopied ? CheckIcon : CopyIcon;

  return (
    <Button
      className={cn("shrink-0", className)}
      onClick={copyToClipboard}
      size="icon"
      variant="ghost"
      {...props}
    >
      {children ?? <Icon size={14} />}
    </Button>
  );
};

```

--------------------------------

### Backend API Route for Code Generation (TypeScript)

Source: https://ai-sdk.dev/elements/components/code-block

This backend API route is built with Next.js and uses the AI SDK's `streamObject` function to generate code. It defines a schema for the code block output using Zod and streams the response directly. It requires the `ai` package and a model like 'openai/gpt-4o'.

```ts
import { streamObject } from 'ai';
import { z } from 'zod';

export const codeBlockSchema = z.object({
  language: z.string(),
  filename: z.string(),
  code: z.string(),
});
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const context = await req.json();

  const result = streamObject({
    model: 'openai/gpt-4o',
    schema: codeBlockSchema,
    prompt:
      `You are a helpful coding assistant. Only generate code, no markdown formatting or backticks, or text.` +
      context,
  });

  return result.toTextStreamResponse();
}

```

--------------------------------

### Display AI Cache Usage and Cost (React)

Source: https://ai-sdk.dev/elements/components/context

Presents the number of cache reads (tokens) and their calculated cost in USD for an AI model. It retrieves usage data from context and uses `getUsage` for cost calculation. Returns null or children if cache data is absent or zero.

```typescript
export type ContextCacheUsageProps = ComponentProps<"div">;

export const ContextCacheUsage = ({
  className,
  children,
  ...props
}: ContextCacheUsageProps) => {
  const { usage, modelId } = useContextValue();
  const cacheTokens = usage?.cachedInputTokens ?? 0;

  if (children) {
    return children;
  }

  if (!cacheTokens) {
    return null;
  }

  const cacheCost = modelId
    ? getUsage({
        modelId,
        usage: { cacheReads: cacheTokens, input: 0, output: 0 },
      }).costUSD?.totalUSD
    : undefined;
  const cacheCostText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cacheCost ?? 0);

  return (
    <div
      className={cn("flex items-center justify-between text-xs", className)}
      {...props}
    >
      <span className="text-muted-foreground">Cache</span>
      <TokensWithCost costText={cacheCostText} tokens={cacheTokens} />
    </div>
  );
};
```

--------------------------------

### PromptInputAttachment Component for Displaying Files

Source: https://ai-sdk.dev/elements/components/prompt-input

Renders an individual file attachment, displaying its icon (image or paperclip) and filename. It includes functionality to remove the attachment and a hover card for previewing images. Uses utility classes for styling and transitions.

```typescript
export function PromptInputAttachment({ data, className, ...props }: PromptInputAttachmentProps) {
  const attachments = usePromptInputAttachments();

  const filename = data.filename || "";

  const mediaType = data.mediaType?.startsWith("image/") && data.url ? "image" : "file";
  const isImage = mediaType === "image";

  const attachmentLabel = filename || (isImage ? "Image" : "Attachment");

  return (
    <PromptInputHoverCard>
      <HoverCardTrigger asChild>
        <div
          className={cn(
            "group relative flex h-8 cursor-default select-none items-center gap-1.5 rounded-md border border-border px-1.5 font-medium text-sm transition-all hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            className
          )}
          key={data.id}
          {...props}
        >
          <div className="relative size-5 shrink-0">
            <div className="absolute inset-0 flex size-5 items-center justify-center overflow-hidden rounded bg-background transition-opacity group-hover:opacity-0">
              {isImage ? (
                <img
                  alt={filename || "attachment"}
                  className="size-5 object-cover"
                  height={20}
                  src={data.url}
                  width={20}
                />
              ) : (
                <div className="flex size-5 items-center justify-center text-muted-foreground">
                  <PaperclipIcon className="size-3" />
                </div>
              )}
            </div>
            <Button
              aria-label="Remove attachment"
              className="absolute inset-0 size-5 cursor-pointer rounded p-0 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 [&>svg]:size-2.5"
              onClick={(e) => {
                e.stopPropagation();
                attachments.remove(data.id);
              }}
              type="button"
              variant="ghost"
            >
              <XIcon />
              <span className="sr-only">Remove</span>
            </Button>
          </div>

          <span className="flex-1 truncate">{attachmentLabel}</span>
        </div>
      </HoverCardTrigger>
      <PromptInputHoverCardContent className="w-auto p-2">
        <div className="w-auto space-y-3">
          {isImage && (
            <div className="flex max-h-96 w-96 items-center justify-center overflow-hidden rounded-md border">
              <img
                alt={filename || "attachment preview"}
                className="max-h-full max-w-full object-contain"
                height={384}
                src={data.url}
                width={448}
              />
            </div>
          )}
          <div className="flex items-center gap-2.5">
            <div className="min-w-0 flex-1 space-y-1 px-0.5">
              <h4 className="truncate font-semibold text-sm leading-none">
                {filename || (isImage ? "Image" : "Attachment")}
              </h4>
```

--------------------------------

### React Component with Model Selection UI

Source: https://ai-sdk.dev/elements/components/prompt-input

This React component implements a comprehensive model selection interface with provider filtering, attachment handling, and speech input capabilities. It manages state for selected models, provider filtering, and UI controls including open/close states for various UI elements.

```jsx
import React from 'react';

const Example = ({ models, selectedModelData, setModel, model, status, setModelSelectorOpen, modelSelectorOpen, textareaRef }) => {
  return (
    <div className="min-h-screen bg-background">
      <PromptInputProvider>
        <PromptInput>
          <PromptInputFooter>
            <PromptInputTools>
              <PromptInputActionMenu>
                <PromptInputActionMenuTrigger>
                  <PaperclipIcon size={16} />
                </PromptInputActionTrigger>
                <PromptInputActionMenuContent>
                  <PromptInputActionAddAttachments />
                </PromptInputActionMenuContent>
              </PromptInputActionMenu>
              <PromptInputSpeechButton textareaRef={textareaRef} />
              <PromptInputButton>
                <GlobeIcon size={16} />
                <span>Search</span>
              </PromptInputButton>
              <ModelSelector
                onOpenChange={setModelSelectorOpen}
                open={modelSelectorOpen}
              >
                <ModelSelectorTrigger asChild>
                  <PromptInputButton>
                    {selectedModelData?.chefSlug && (
                      <ModelSelectorLogo
                        provider={selectedModelData.chefSlug}
                      />
                    )}
                    {selectedModelData?.name && (
                      <ModelSelectorName>
                        {selectedModelData.name}
                      </ModelSelectorName>
                    )}
                  </PromptInputButton>
                </ModelSelectorTrigger>
                <ModelSelectorContent>
                  <ModelSelectorInput placeholder="Search models..." />
                  <ModelSelectorList>
                    <ModelSelectorEmpty>No models found.</ModelSelectorEmpty>
                    {["OpenAI", "Anthropic", "Google"].map((chef) => (
                      <ModelSelectorGroup heading={chef} key={chef}>
                        {models
                          .filter((m) => m.chef === chef)
                          .map((m) => (
                            <ModelSelectorItem
                              key={m.id}
                              onSelect={() => {
                                setModel(m.id);
                                setModelSelectorOpen(false);
                              }}
                              value={m.id}
                            >
                              <ModelSelectorLogo provider={m.chefSlug} />
                              <ModelSelectorName>{m.name}</ModelSelectorName>
                              <ModelSelectorLogoGroup>
                                {m.providers.map((provider) => (
                                  <ModelSelectorLogo
                                    key={provider}
                                    provider={provider}
                                  />
                                ))}
                              </ModelSelectorLogoGroup>
                              {model === m.id ? (
                                <CheckIcon className="ml-auto size-4" />
                              ) : (
                                <div className="ml-auto size-4" />
                              )}
                            </ModelSelectorItem>
                          ))}
                      </ModelSelectorGroup>
                    ))}
                  </ModelSelectorList>
                </ModelSelectorContent>
              </ModelSelector>
            </PromptInputTools>
            <PromptInputSubmit status={status} />
          </PromptInputFooter>
        </PromptInput>

        <HeaderControls />
      </PromptInputProvider>
    </div>
  );
};

export default Example;
```

--------------------------------

### React Component for Model Selection in Chatbot

Source: https://ai-sdk.dev/elements/examples/chatbot

This React component renders a model selector UI for a chatbot application. It displays a list of AI models categorized by provider, allowing users to select a model. It depends on React and potentially a UI library like shadcn/ui for styling.

```jsx
                      {
                        selectedModelData?.name && (
                          <ModelSelectorName>
                            {selectedModelData.name}
                          </ModelSelectorName>
                        )
                      }
                    </PromptInputButton>
                  </ModelSelectorTrigger>
                  <ModelSelectorContent>
                    <ModelSelectorInput placeholder="Search models..." />
                    <ModelSelectorList>
                      <ModelSelectorEmpty>No models found.</ModelSelectorEmpty>
                      {["OpenAI", "Anthropic", "Google"].map((chef) => (
                        <ModelSelectorGroup key={chef} heading={chef}>
                          {models
                            .filter((m) => m.chef === chef)
                            .map((m) => (
                              <ModelSelectorItem
                                key={m.id}
                                onSelect={() => {
                                  setModel(m.id);
                                  setModelSelectorOpen(false);
                                }}
                                value={m.id}
                              >
                                <ModelSelectorLogo provider={m.chefSlug} />
                                <ModelSelectorName>{m.name}</ModelSelectorName>
                                <ModelSelectorLogoGroup>
                                  {m.providers.map((provider) => (
                                    <ModelSelectorLogo
                                      key={provider}
                                      provider={provider}
                                    />
                                  ))}
                                </ModelSelectorLogoGroup>
                                {model === m.id ? (
                                  <CheckIcon className="ml-auto size-4" />
                                ) : (
                                  <div className="ml-auto size-4" />
                                )}
                              </ModelSelectorItem>
                            ))}
                        </ModelSelectorGroup>
                      ))}
                    </ModelSelectorList>
                  </ModelSelectorContent>
                </ModelSelector>
              </PromptInputTools>
              <PromptInputSubmit
                disabled={!(text.trim() || status) || status === "streaming"}
                status={status}
              />
            </PromptInputFooter>
          </PromptInput>
        </div>
      </div>
    </div>
  );
};

export default Example;
```

--------------------------------

### Message UI components implementation (React/TypeScript)

Source: https://ai-sdk.dev/elements/components/message

Defines a set of React components for rendering chat messages, actions, tooltips, and branch navigation. Depends on shadcn-ui components, lucide-react icons, and the Streamdown library. Exposes props for customizing message role, content, and interactive actions.

```typescript
"use client";\n\nimport { Button } from \"@repo/shadcn-ui/components/ui/button\";\nimport {\n  ButtonGroup,\n  ButtonGroupText,\n} from \"@repo/shadcn-ui/components/ui/button-group\";\nimport {\n  Tooltip,\n  TooltipContent,\n  TooltipProvider,\n  TooltipTrigger,\n} from \"@repo/shadcn-ui/components/ui/tooltip\";\nimport { cn } from \"@repo/shadcn-ui/lib/utils\";\nimport type { FileUIPart, UIMessage } from \"ai\";\nimport {\n  ChevronLeftIcon,\n  ChevronRightIcon,\n  PaperclipIcon,\n  XIcon,\n} from \"lucide-react\";\nimport type { ComponentProps, HTMLAttributes, ReactElement } from \"react\";\nimport { createContext, memo, useContext, useEffect, useState } from \"react\";\nimport { Streamdown } from \"streamdown\";\n\nexport type MessageProps = HTMLAttributes<HTMLDivElement> & {\n  from: UIMessage[\"role\"];\n};\n\nexport const Message = ({ className, from, ...props }: MessageProps) => (\n  <div\n    className={cn(\n      \"group flex w-full max-w-[80%] flex-col gap-2\",\n      from === \"user\" ? \"is-user ml-auto justify-end\" : \"is-assistant\",\n      className\n    )}\n    {...props}\n  />\n);\n\nexport type MessageContentProps = HTMLAttributes<HTMLDivElement>;\n\nexport const MessageContent = ({\n  children,\n  className,\n  ...props\n}: MessageContentProps) => (\n  <div\n    className={cn(\n      \"is-user:dark flex w-fit flex-col gap-2 overflow-hidden text-sm\",\n      \"group-[.is-user]:ml-auto group-[.is-user]:rounded-lg group-[.is-user]:bg-secondary group-[.is-user]:px-4 group-[.is-user]:py-3 group-[.is-user]:text-foreground\",\n      \"group-[.is-assistant]:text-foreground\",\n      className\n    )}\n    {...props}\n  >\n    {children}\n  </div>\n);\n\nexport type MessageActionsProps = ComponentProps<\"div\">;\n\nexport const MessageActions = ({\n  className,\n  children,\n  ...props\n}: MessageActionsProps) => (\n  <div className={cn(\"flex items-center gap-1\", className)} {...props}>\n    {children}\n  </div>\n);\n\nexport type MessageActionProps = ComponentProps<typeof Button> & {\n  tooltip?: string;\n  label?: string;\n};\n\nexport const MessageAction = ({\n  tooltip,\n  children,\n  label,\n  variant = \"ghost\",\n  size = \"icon-sm\",\n  ...props\n}: MessageActionProps) => {\n  const button = (\n    <Button size={size} type=\"button\" variant={variant} {...props}>\n      {children}\n      <span className=\"sr-only\">{label || tooltip}</span>\n    </Button>\n  );\n\n  if (tooltip) {\n    return (\n      <TooltipProvider>\n        <Tooltip>\n          <TooltipTrigger asChild>{button}</TooltipTrigger>\n          <TooltipContent>\n            <p>{tooltip}</p>\n          </TooltipContent>\n        </Tooltip>\n      </TooltipProvider>\n    );\n  }\n\n  return button;\n};\n\ntype MessageBranchContextType = {\n  currentBranch: number;\n  totalBranches: number;\n  goToPrevious: () => void;\n  goToNext: () => void;\n  branches: ReactElement[];\n  setBranches: (branches: ReactElement[]) => void;\n};\n\nconst MessageBranchContext = createContext<MessageBranchContextType | null>(\n  null\n);\n\nconst useMessageBranch = () => {\n  const context = useContext(MessageBranchContext);\n\n  if (!context) {\n    throw new Error(\n      \"MessageBranch components must be used within MessageBranch\"\n    );\n  }\n\n  return context;\n};\n\nexport type MessageBranchProps = HTMLAttributes<HTMLDivElement> & {\n  defaultBranch?: number;\n  onBranchChange?: (branchIndex: number) => void;\n};\n\nexport const MessageBranch = ({\n  defaultBranch = 0,\n  onBranchChange,\n  className,\n  ...props\n}: MessageBranchProps) => {\n  const [currentBranch, setCurrentBranch] = useState(defaultBranch);\n  const [branches, setBranches] = useState<ReactElement[]>([]);\n\n  const handleBranchChange = (newBranch: number) => {\n    setCurrentBranch(newBranch);\n    onBranchChange?.(newBranch);\n  };\n\n  const goToPrevious = () => {\n    const newBranch =\n      currentBranch > 0 ? currentBranch - 1 : branches.length - 1;\n    handleBranchChange(newBranch);\n  };\n\n  const goToNext = () => {\n    const newBranch =\n      currentBranch < branches.length - 1 ? currentBranch + 1 : 0;\n    handleBranchChange(newBranch);\n  };\n\n  const contextValue: MessageBranchContextType = {\n    currentBranch,\n    totalBranches: branches.length,\n    goToPrevious,\n    goToNext,\n    branches,\n    setBranches,\n  };\n\n  return (\n    <MessageBranchContext.Provider value={contextValue}>\n      <div\n        className={cn(\"grid w-full gap-2 [&>div]:pb-0\", className)}\n        {...props}\n      />\n    </MessageBranchContext.Provider>\n  );\n};\n\nexport type MessageBranchContentProps = HTMLAttributes<HTMLDivElement>;\n\nexport const MessageBranchContent = ({\n  children,\n  ...props\n}: MessageBranchContentProps) => {\n  const { currentBranch, setBranches, branches } = useMessageBranch();\n  const childrenArray = Array.isArray(children) ? children : [children];\n\n  // Use useEffect to update branches when they change\n  useEffect(() => {\n    if (branches.length !== childrenArray.length) {\n      setBranches(childrenArray);\n    }\n  }, [childrenArray, branches, setBranches]);\n\n  return (\n    <div {...props}>\n      {branches[currentBranch]}\n    </div>\n  );\n};
```

--------------------------------

### Create Open-in-Chat dropdown component (React TypeScript)

Source: https://ai-sdk.dev/elements/components/open-in-chat

This TypeScript React component defines a dropdown menu with links to GitHub and Scira providers. It imports UI primitives from shadcn-ui, icons from lucide-react, and uses a context to share provider data. The component renders SVG icons and constructs URLs dynamically, suitable for client-side rendering in Next.js.

```TypeScript
"use client";

import { Button } from "@repo/shadcn-ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/shadcn-ui/components/ui/dropdown-menu";
import { cn } from "@repo/shadcn-ui/lib/utils";
import {
  ChevronDownIcon,
  ExternalLinkIcon,
  MessageCircleIcon,
} from "lucide-react";
import { type ComponentProps, createContext, useContext } from "react";

const providers = {
  github: {
    title: "Open in GitHub",
    createUrl: (url: string) => url,
    icon: (
      <svg fill="currentColor" role="img" viewBox="0 0 24 24">
        <title>GitHub</title>
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  scira: {
    title: "Open in Scira",
    createUrl: (q: string) =>
      `https://scira.ai/?${new URLSearchParams({
        q,
      })}`,
    icon: (
      <svg
        fill="none"
        height="934"
        viewBox="0 0 910 934"
        width="910"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Scira AI</title>
        <path
          d="M647.664 197.775C569.13 189.049 525.5 145.419 516.774 66.8849C508.048 145.419 464.418 189.049 385.884 197.775C464.418 206.501 508.048 250.131 516.774 328.665C525.5 250.131 569.13 206.501 647.664 197.775Z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="8"
        />
        <path
          d="M516.774 304.217C510.299 275.491 498.208 252.087 480.335 234.214C462.462 216.341 439.058 204.251 410.333 197.775C439.059 191.3 462.462 179.209 480.335 161.336C498.208 143.463 510.299 120.06 516.774 91.334C523.25 120.059 535.34 143.463 553.213 161.336C571.086 179.209 594.49 191.3 623.216 197.775C594.49 204.251 571.086 216.341 553.213 234.214C535.34 252.087 523.25 275.491 516.774 304.217Z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="8"
        />
        <path
          d="M857.5 508.116C763.259 497.644 710.903 445.288 700.432 351.047C689.961 445.288 637.605 497.644 543.364 508.116C637.605 518.587 689.961 570.943 700.432 665.184C710.903 570.943 763.259 518.587 857.5 508.116Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="20"
        />
        <path
          d="M700.432 615.957C691.848 589.05 678.575 566.357 660.383 548.165C642.191 529.973 619.499 516.7 592.593 508.116C619.499 499.533 642.191 486.258 660.383 468.066C678.575 449.874 691.848 427.181 700.432 400.274C709.015 427.181 722.289 449.874 740.481 468.066C758.673 486.258 781.365 499.533 808.271 508.116C781.365 516.7 758.673 529.973 740.481 548.165C722.289 566.357 709.015 589.05 700.432 615.957Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="20"
        />
        <path
          d="M889.949 121.237C831.049 114.692 798.326 81.9698 791.782 23.0692C785.237 81.9698 752.515 114.692 693.614 121.237C752.515 127.781 785.237 160.504 791.782 219.404C798.326 160.504 831.049 127.781 889.949 121.237Z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="8"
        />
        <path
          d="M791.782 196.795C786.697 176.937 777.869 160.567 765.16 147.858C752.452 135.15 736.082 126.322 716.226 121.237C736.082 116.152 752.452 107.324 765.16 94.6152C777.869 81.9065 786.697 65.5368 791.782 45.6797C796.867 65.5367 805.695 81.9066 818.403 94.6152C831.112 107.324 847.481 116.152 867.338 121.237C847.481 126.322 831.112 135.15 818.403 147.858C805.694 160.567 796.867 176.937 791.782 196.795Z"
          fill="currentColor"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="8"
        />
        <path

```

--------------------------------

### Backend Image Generation API Route (TypeScript)

Source: https://ai-sdk.dev/elements/components/image

A Next.js API route that handles POST requests to generate images using OpenAI's DALL-E 3 model via the AI SDK. It takes a prompt from the request body and returns the generated image data.

```typescript
import {
  openai,
} from '@ai-sdk/openai';
import {
  experimental_generateImage,
} from 'ai';

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();

  const { image } = await experimental_generateImage({
    model: openai.image('dall-e-3'),
    prompt: prompt,
    size: '1024x1024',
  });

  return Response.json({
    base64: image.base64,
    uint8Array: image.uint8Array,
    mediaType: image.mediaType,
  });
}

```

--------------------------------

### Create Suggestion Input Component with AI SDK in TypeScript

Source: https://ai-sdk.dev/elements/components/suggestion

This snippet demonstrates how to build a suggestion-driven input component using the AI SDK in a Next.js TypeScript project. It imports UI components, sets up suggestion data, handles user input and suggestion clicks, and sends messages to the LLM via useChat. The component is styled with Tailwind classes and supports streaming status.

```typescript
'use client';

import {
  Input,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import { Suggestion, Suggestions } from '@/components/ai-elements/suggestion';
import { useState } from 'react';
import { useChat } from '@ai-sdk/react';

const suggestions = [
  'Can you explain how to play tennis?',
  'What is the weather in Tokyo?',
  'How do I make a really good fish taco?',
];

const SuggestionDemo = () => {
  const [input, setInput] = useState('');
  const { sendMessage, status } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage({ text: suggestion });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full">
        <div className="flex flex-col gap-4">
          <Suggestions>
            {suggestions.map((suggestion) => (
              <Suggestion
                key={suggestion}
                onClick={handleSuggestionClick}
                suggestion={suggestion}
              />
            ))}
          </Suggestions>
          <Input
            onSubmit={handleSubmit}
            className="mt-4 w-full max-w-2xl mx-auto relative"
          >
            <PromptInputTextarea
              value={input}
              placeholder="Say something..."
              onChange={(e) => setInput(e.currentTarget.value)}
              className="pr-12"
            />
            <PromptInputSubmit
              status={status === 'streaming' ? 'streaming' : 'ready'}
              disabled={!input.trim()}
              className="absolute bottom-1 right-1"
            />
          </Input>
        </div>
      </div>
    </div>
  );
};

export default SuggestionDemo;

```

--------------------------------

### Rejected State Confirmation Component in React

Source: https://ai-sdk.dev/elements/components/confirmation

React component demonstrating the rejected state for AI SDK tool execution confirmations. Uses a compound component pattern with Confirmation, ConfirmationRequest, ConfirmationAccepted, and ConfirmationRejected sub-components. Displays when user denies tool execution with output-denied state, showing rejection message with X icon. Requires lucide-react icons and nanoid for unique ID generation.

```TypeScript
"use client";

import {
  Confirmation,
  ConfirmationAccepted,
  ConfirmationRejected,
  ConfirmationRequest,
  ConfirmationTitle,
} from "@/components/ai-elements/confirmation";
import { CheckIcon, XIcon } from "lucide-react";
import { nanoid } from "nanoid";

const Example = () => (
  <div className="w-full max-w-2xl">
    <Confirmation
      approval={{ id: nanoid(), approved: false }}
      state="output-denied"
    >
      <ConfirmationTitle>
        <ConfirmationRequest>
          This tool wants to delete the file{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm">
            /tmp/example.txt
          </code>
          . Do you approve this action?
        </ConfirmationRequest>
        <ConfirmationAccepted>
          <CheckIcon className="size-4 text-green-600 dark:text-green-400" />
          <span>You approved this tool execution</span>
        </ConfirmationAccepted>
        <ConfirmationRejected>
          <XIcon className="size-4 text-destructive" />
          <span>You rejected this tool execution</span>
        </ConfirmationRejected>
      </ConfirmationTitle>
    </Confirmation>
  </div>
);

export default Example;
```

--------------------------------

### Frontend Chat UI with AI SDK Components (React/TypeScript)

Source: https://ai-sdk.dev/elements/components/conversation

This React component utilizes AI SDK's `Conversation` and `PromptInput` components to build a functional chat interface. It manages user input, sends messages to the backend, and displays AI responses. It depends on `@ai-sdk/react` and various components from '@/components/ai-elements'.

```typescript
'use client';

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
  Input,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import { MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useChat } from '@ai-sdk/react';
import { MessageResponse } from '@/components/ai-elements/message';

const ConversationDemo = () => {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full">
        <Conversation>
          <ConversationContent>
            {messages.length === 0 ? (
              <ConversationEmptyState
                icon={<MessageSquare className="size-12" />}
                title="Start a conversation"
                description="Type a message below to begin chatting"
              />
            ) : (
              messages.map((message) => (
                <Message from={message.role} key={message.id}>
                  <MessageContent>
                    {message.parts.map((part, i) => {
                      switch (part.type) {
                        case 'text': // we don't use any reasoning or tool calls in this example
                          return (
                            <MessageResponse key={`${message.id}-${i}`}>
                              {part.text}
                            </MessageResponse>
                          );
                        default:
                          return null;
                      }
                    })}
                  </MessageContent>
                </Message>
              ))
            )}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <Input
          onSubmit={handleSubmit}
          className="mt-4 w-full max-w-2xl mx-auto relative"
        >
          <PromptInputTextarea
            value={input}
            placeholder="Say something..."
            onChange={(e) => setInput(e.currentTarget.value)}
            className="pr-12"
          />
          <PromptInputSubmit
            status={status === 'streaming' ? 'streaming' : 'ready'}
            disabled={!input.trim()}
            className="absolute bottom-1 right-1"
          />
        </Input>
      </div>
    </div>
  );
};

export default ConversationDemo;

```

--------------------------------

### Frontend Citation Generation with AI SDK (React)

Source: https://ai-sdk.dev/elements/components/inline-citation

This React component uses `experimental_useObject` from `@ai-sdk/react` to generate AI content and display inline citations. It handles user interactions to submit prompts and renders citation cards with carousel navigation. Dependencies include `@ai-sdk/react` and local UI components.

```typescript
'use client';

import { experimental_useObject as useObject } from '@ai-sdk/react';
import {
  InlineCitation,
  InlineCitationText,
  InlineCitationCard,
  InlineCitationCardTrigger,
  InlineCitationCardBody,
  InlineCitationCarousel,
  InlineCitationCarouselContent,
  InlineCitationCarouselItem,
  InlineCitationCarouselHeader,
  InlineCitationCarouselIndex,
  InlineCitationCarouselPrev,
  InlineCitationCarouselNext,
  InlineCitationSource,
  InlineCitationQuote,
} from '@/components/ai-elements/inline-citation';
import { Button } from '@/components/ui/button';
import { citationSchema } from '@/app/api/citation/route';

const CitationDemo = () => {
  const { object, submit, isLoading } = useObject({
    api: '/api/citation',
    schema: citationSchema,
  });

  const handleSubmit = (topic: string) => {
    submit({ prompt: topic });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex gap-2 mb-6">
        <Button
          onClick={() => handleSubmit('artificial intelligence')}
          disabled={isLoading}
          variant="outline"
        >
          Generate AI Content
        </Button>
        <Button
          onClick={() => handleSubmit('climate change')}
          disabled={isLoading}
          variant="outline"
        >
          Generate Climate Content
        </Button>
      </div>

      {isLoading && !object && (
        <div className="text-muted-foreground">
          Generating content with citations...
        </div>
      )}

      {object?.content && (
        <div className="prose prose-sm max-w-none">
          <p className="leading-relaxed">
            {object.content.split(/(\[\d+ \])/).map((part, index) => {
              const citationMatch = part.match(/\[(\d+)\]/);
              if (citationMatch) {
                const citationNumber = citationMatch[1];
                const citation = object.citations?.find(
                  (c: any) => c.number === citationNumber,
                );

                if (citation) {
                  return (
                    <InlineCitation key={index}>
                      <InlineCitationCard>
                        <InlineCitationCardTrigger sources={[citation.url]} />
                        <InlineCitationCardBody>
                          <InlineCitationCarousel>
                            <InlineCitationCarouselHeader>
                              <InlineCitationCarouselPrev />
                              <InlineCitationCarouselNext />
                              <InlineCitationCarouselIndex />
                            </InlineCitationCarouselHeader>
                            <InlineCitationCarouselContent>
                              <InlineCitationCarouselItem>
                                <InlineCitationSource
                                  title={citation.title}
                                  url={citation.url}
                                  description={citation.description}
                                />
                                {citation.quote && (
                                  <InlineCitationQuote>
                                    {citation.quote}
                                  </InlineCitationQuote>
                                )}
                              </InlineCitationCarouselItem>
                            </InlineCitationCarouselContent>
                          </InlineCitationCarousel>
                        </InlineCitationCardBody>
                      </InlineCitationCard>
                    </InlineCitation>
                  );
                }
              }
              return part;
            })}
          </p>
        </div>
      )}
    </div>
  );
};

export default CitationDemo;

```

--------------------------------

### React Conversation UI Components (TypeScript/React)

Source: https://ai-sdk.dev/elements/components/conversation

This code defines a set of React components for building a conversation interface using Shadcn UI and the 'use-stick-to-bottom' library. It includes components for the main conversation area, content, an empty state, and a scroll-to-bottom button. These components are designed for client-side rendering.

```typescript
"use client";

import { Button } from "@repo/shadcn-ui/components/ui/button";
import { cn } from "@repo/shadcn-ui/lib/utils";
import { ArrowDownIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { useCallback } from "react";
import { StickToBottom, useStickToBottomContext } from "use-stick-to-bottom";

export type ConversationProps = ComponentProps<typeof StickToBottom>;

export const Conversation = ({ className, ...props }: ConversationProps) => (
  <StickToBottom
    className={cn("relative flex-1 overflow-y-auto", className)}
    initial="smooth"
    resize="smooth"
    role="log"
    {...props}
  />
);

export type ConversationContentProps = ComponentProps<
  typeof StickToBottom.Content
>;

export const ConversationContent = ({
  className,
  ...props
}: ConversationContentProps) => (
  <StickToBottom.Content
    className={cn("flex flex-col gap-8 p-4", className)}
    {...props}
  />
);

export type ConversationEmptyStateProps = ComponentProps<"div"> & {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
};

export const ConversationEmptyState = ({
  className,
  title = "No messages yet",
  description = "Start a conversation to see messages here",
  icon,
  children,
  ...props
}: ConversationEmptyStateProps) => (
  <div
    className={cn(
      "flex size-full flex-col items-center justify-center gap-3 p-8 text-center",
      className
    )}
    {...props}
  >
    {children ?? (
      <>
        {icon && <div className="text-muted-foreground">{icon}</div>}
        <div className="space-y-1">
          <h3 className="font-medium text-sm">{title}</h3>
          {description && (
            <p className="text-muted-foreground text-sm">{description}</p>
          )}
        </div>
      </>
    )}
  </div>
);

export type ConversationScrollButtonProps = ComponentProps<typeof Button>;

export const ConversationScrollButton = ({
  className,
  ...props
}: ConversationScrollButtonProps) => {
  const { isAtBottom, scrollToBottom } = useStickToBottomContext();

  const handleScrollToBottom = useCallback(() => {
    scrollToBottom();
  }, [scrollToBottom]);

  return (
    !isAtBottom && (
      <Button
        className={cn(
          "absolute bottom-4 left-[50%] translate-x-[-50%] rounded-full",
          className
        )}
        onClick={handleScrollToBottom}
        size="icon"
        type="button"
        variant="outline"
        {...props}
      >
        <ArrowDownIcon className="size-4" />
      </Button>
    )
  );
};

```

--------------------------------

### Implement Text Input and Attachment Handling in PromptInputTextarea

Source: https://ai-sdk.dev/elements/components/prompt-input

Provides a textarea for user input in AI prompts, handling text changes, submission on Enter key press, and attachment removal via Backspace. It also supports pasting files directly into the textarea. Dependencies include InputGroupTextarea, useOptionalPromptInputController, and usePromptInputAttachments.

```typescript
const handleKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.key === "Enter") {
      if (isComposing || e.nativeEvent.isComposing) {
        return;
      }
      if (e.shiftKey) {
        return;
      }
      e.preventDefault();

      // Check if the submit button is disabled before submitting
      const form = e.currentTarget.form;
      const submitButton = form?.querySelector(
        'button[type="submit"]'
      ) as HTMLButtonElement | null;
      if (submitButton?.disabled) {
        return;
      }

      form?.requestSubmit();
    }

    // Remove last attachment when Backspace is pressed and textarea is empty
    if (
      e.key === "Backspace" &&
      e.currentTarget.value === "" &&
      attachments.files.length > 0
    ) {
      e.preventDefault();
      const lastAttachment = attachments.files.at(-1);
      if (lastAttachment) {
        attachments.remove(lastAttachment.id);
      }
    }
  };

  const handlePaste: ClipboardEventHandler<HTMLTextAreaElement> = (event) => {
    const items = event.clipboardData?.items;

    if (!items) {
      return;
    }

    const files: File[] = [];

    for (const item of items) {
      if (item.kind === "file") {
        const file = item.getAsFile();
        if (file) {
          files.push(file);
        }
      }
    }

    if (files.length > 0) {
      event.preventDefault();
      attachments.add(files);
    }
  };
```

--------------------------------

### Next.js API Route for AI Chat with Tool Approval

Source: https://ai-sdk.dev/elements/components/confirmation

This Next.js API route (app/api/chat/route.tsx) handles POST requests for AI chat interactions. It uses the AI SDK's 'streamText' function to process messages and define tools, including a 'delete_file' tool with a 'requireApproval: true' flag. The 'execute' function for 'delete_file' simulates file deletion and requires a 'confirm' parameter. It returns a UI message stream response. Dependencies include 'ai' and 'zod'.

```typescript
import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { z } from 'zod';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: 'openai/gpt-4o',
    messages: convertToModelMessages(messages),
    tools: {
      delete_file: {
        description: 'Delete a file from the file system',
        parameters: z.object({
          filePath: z.string().describe('The path to the file to delete'),
          confirm:
            .boolean()
            .default(false)
            .describe('Confirmation that the user wants to delete the file'),
        }),
        requireApproval: true, // Enable approval workflow
        execute: async ({ filePath, confirm }) => {
          if (!confirm) {
            return {
              success: false,
              message: 'Deletion not confirmed',
            };
          }

          // Simulate file deletion
          await new Promise((resolve) => setTimeout(resolve, 500));

          return {
            success: true,
            message: `Successfully deleted ${filePath}`,
          };
        },
      },
    },
  });

  return result.toUIMessageStreamResponse();
}

```

--------------------------------

### Form Submission with Blob Conversion in TypeScript

Source: https://ai-sdk.dev/elements/components/prompt-input

This handler processes form submission, capturing text input, resetting the form, and asynchronously converting blob URLs to data URLs for attachments. Supports both provider and local modes. Inputs are form event and files list, outputs are converted attachments. Depends on usingProvider, controller, and files. Limitations include async nature; form reset happens before conversion completes.

```typescript
const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  event.preventDefault();

  const form = event.currentTarget;
  const text = usingProvider
    ? controller.textInput.value
    : (() => {
        const formData = new FormData(form);
        return (formData.get("message") as string) || "";
      })();

  // Reset form immediately after capturing text to avoid race condition
  // where user input during async blob conversion would be lost
  if (!usingProvider) {
    form.reset();
  }

  // Convert blob URLs to data URLs asynchronously
  Promise.all(
    files.map(async ({ id, ...item }) => {
      if (item.url && item.url.startsWith("blob:")) {
        return {
          ...item,
          url: await convertBlobUrlToDataUrl(item.url),
        };
      }
      return item;
    })
  )
  // Note: conversion function
  const convertBlobUrlToDataUrl = async (url: string): Promise<string> => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };
```

--------------------------------

### Integrate Checkpoint Component in Chat Interface with AI SDK

Source: https://ai-sdk.dev/elements/components/checkpoint

Demonstrates integrating the Checkpoint component into a chat interface built with the AI SDK in React. It utilizes `useChat` to manage messages and state, allowing users to create and restore conversation checkpoints. Dependencies include `@ai-sdk/react` and custom components for messages and conversations.

```typescript
'use client';

import { useState, Fragment } from 'react';
import { useChat } from '@ai-sdk/react';
import {
  Checkpoint,
  CheckpointIcon,
  CheckpointTrigger,
} from '@/components/ai-elements/checkpoint';
import { Message, MessageContent, MessageResponse } from '@/components/ai-elements/message';
import { Conversation, ConversationContent } from '@/components/ai-elements/conversation';

type CheckpointType = {
  id: string;
  messageIndex: number;
  timestamp: Date;
  messageCount: number;
};

const CheckpointDemo = () => {
  const { messages, setMessages } = useChat();
  const [checkpoints, setCheckpoints] = useState<CheckpointType[]>([]);

  const createCheckpoint = (messageIndex: number) => {
    const checkpoint: CheckpointType = {
      id: nanoid(),
      messageIndex,
      timestamp: new Date(),
      messageCount: messageIndex + 1,
    };
    setCheckpoints([...checkpoints, checkpoint]);
  };

  const restoreToCheckpoint = (messageIndex: number) => {
    // Restore messages to checkpoint state
    setMessages(messages.slice(0, messageIndex + 1));
    // Remove checkpoints after this point
    setCheckpoints(checkpoints.filter(cp => cp.messageIndex <= messageIndex));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <Conversation>
        <ConversationContent>
          {messages.map((message, index) => {
            const checkpoint = checkpoints.find(cp => cp.messageIndex === index);

            return (
              <Fragment key={message.id}>
                <Message from={message.role}>
                  <MessageContent>
                    <MessageResponse>{message.content}</MessageResponse>
                  </MessageContent>
                </Message>
                {checkpoint && (
                  <Checkpoint>
                    <CheckpointIcon />
                    <CheckpointTrigger
                      onClick={() => restoreToCheckpoint(checkpoint.messageIndex)}
                    >
                      Restore checkpoint
                    </CheckpointTrigger>
                  </Checkpoint>
                )}
              </Fragment>
            );
          })}
        </ConversationContent>
      </Conversation>
    </div>
  );
};

export default CheckpointDemo;

```

--------------------------------

### React Frontend for AI Chat with Tool Approval

Source: https://ai-sdk.dev/elements/components/confirmation

This React component, designed for Next.js ('use client'), integrates with the AI SDK to display chat messages and handle tool execution approvals. It uses custom confirmation UI elements and requires the '@ai-sdk/react' library and UI components for confirmation and message display. It sends messages to '/api/chat' and processes tool calls, specifically for a 'delete_file' tool, requiring user confirmation before execution.

```typescriptreact
'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, type ToolUIPart } from 'ai';
import { useState } from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Confirmation,
  ConfirmationContent,
  ConfirmationRequest,
  ConfirmationAccepted,
  ConfirmationRejected,
  ConfirmationActions,
  ConfirmationAction,
} from '@/components/ai-elements/confirmation';
import { MessageResponse } from '@/components/ai-elements/message';

type DeleteFileInput = {
  filePath: string;
  confirm: boolean;
};

type DeleteFileToolUIPart = ToolUIPart<{
  delete_file: {
    input: DeleteFileInput;
    output: { success: boolean; message: string };
  };
}>;

const Example = () => {
  const { messages, sendMessage, status, respondToConfirmationRequest } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  const handleDeleteFile = () => {
    sendMessage({ text: 'Delete the file at /tmp/example.txt' });
  };

  const latestMessage = messages[messages.length - 1];
  const deleteTool = latestMessage?.parts?.find(
    (part) => part.type === 'tool-delete_file'
  ) as DeleteFileToolUIPart | undefined;

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full space-y-4">
        <Button onClick={handleDeleteFile} disabled={status !== 'ready'}>
          Delete Example File
        </Button>

        {deleteTool?.approval && (
          <Confirmation approval={deleteTool.approval} state={deleteTool.state}>
            <ConfirmationContent>
              <ConfirmationRequest>
                This tool wants to delete: <code>{deleteTool.input?.filePath}</code>
                <br />
                Do you approve this action?
              </ConfirmationRequest>
              <ConfirmationAccepted>
                <CheckIcon className="size-4" />
                <span>You approved this tool execution</span>
              </ConfirmationAccepted>
              <ConfirmationRejected>
                <XIcon className="size-4" />
                <span>You rejected this tool execution</span>
              </ConfirmationRejected>
            </ConfirmationContent>
            <ConfirmationActions>
              <ConfirmationAction
                variant="outline"
                onClick={() =>
                  respondToConfirmationRequest({
                    approvalId: deleteTool.approval!.id,
                    approved: false,
                  })
                }
              >
                Reject
              </ConfirmationAction>
              <ConfirmationAction
                variant="default"
                onClick={() =>
                  respondToConfirmationRequest({
                    approvalId: deleteTool.approval!.id,
                    approved: true,
                  })
                }
              >
                Approve
              </ConfirmationAction>
            </ConfirmationActions>
          </Confirmation>
        )}

        {deleteTool?.output && (
          <MessageResponse>
            {deleteTool.output.success
              ? deleteTool.output.message
              : `Error: ${deleteTool.output.message}`}
          </MessageResponse>
        )}
      </div>
    </div>
  );
};

export default Example;

```

--------------------------------

### Chatbot UI with Reasoning (React)

Source: https://ai-sdk.dev/elements/components/reasoning

Frontend component for a chatbot that displays messages, handles user input, and renders reasoning output. It uses the `useChat` hook from the AI SDK and integrates with various UI components for conversation, messages, and prompt input. Dependencies include '@ai-sdk/react' and custom UI components.

```typescript
'use client';

import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from '@/components/ai-elements/reasoning';
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import {
  PromptInput,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import { Loader } from '@/components/ai-elements/loader';
import { Message, MessageContent, MessageResponse } from '@/components/ai-elements/message';
import { useState } from 'react';
import { useChat } from '@ai-sdk/react';

const ReasoningDemo = () => {
  const [input, setInput] = useState('');

  const { messages, sendMessage, status } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage({ text: input });
    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full">
        <Conversation>
          <ConversationContent>
            {messages.map((message) => (
              <Message from={message.role} key={message.id}>
                <MessageContent>
                  {message.parts.map((part, i) => {
                    switch (part.type) {
                      case 'text':
                        return (
                          <MessageResponse key={`${message.id}-${i}`}> {part.text} </MessageResponse>
                        );
                      case 'reasoning':
                        return (
                          <Reasoning
                            key={`${message.id}-${i}`}
                            className="w-full"
                            isStreaming={status === 'streaming' && i === message.parts.length - 1 && message.id === messages.at(-1)?.id}
                          >
                            <ReasoningTrigger />
                            <ReasoningContent>{part.text}</ReasoningContent>
                          </Reasoning>
                        );
                    }
                  })}
                </MessageContent>
              </Message>
            ))}
            {status === 'submitted' && <Loader />}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <PromptInput
          onSubmit={handleSubmit}
          className="mt-4 w-full max-w-2xl mx-auto relative"
        >
          <PromptInputTextarea
            value={input}
            placeholder="Say something..."
            onChange={(e) => setInput(e.currentTarget.value)}
            className="pr-12"
          />
          <PromptInputSubmit
            status={status === 'streaming' ? 'streaming' : 'ready'}
            disabled={!input.trim()}
            className="absolute bottom-1 right-1"
          />
        </PromptInput>
      </div>
    </div>
  );
};

export default ReasoningDemo;

```

--------------------------------

### Chat API Route for Streaming with Reasoning (TypeScript)

Source: https://ai-sdk.dev/elements/components/reasoning

Backend API route for handling chat requests using the AI SDK. It streams text responses and includes reasoning output. The route is configured to allow streaming for up to 30 seconds and uses the 'deepseek/deepseek-r1' model. It expects JSON input containing messages and the model name.

```typescript
import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { model, messages }: { messages: UIMessage[]; model: string } = await req.json();

  const result = streamText({
    model: 'deepseek/deepseek-r1',
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse({
    sendReasoning: true,
  });
}

```

--------------------------------

### Backend Citation Generation API Route (Node.js)

Source: https://ai-sdk.dev/elements/components/inline-citation

This backend route (`/api/citation`) uses the `ai` SDK's `streamObject` function to generate AI content with citations. It defines a Zod schema for the expected citation structure and allows for streaming responses up to 30 seconds. The prompt is designed to request a researched paragraph with inline citations and source details.

```typescript
import { streamObject } from 'ai';
import { z } from 'zod';

export const citationSchema = z.object({
  content: z.string(),
  citations: z.array(
    z.object({
      number: z.string(),
      title: z.string(),
      url: z.string(),
      description: z.string().optional(),
      quote: z.string().optional(),
    }),
  ),
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = streamObject({
    model: 'openai/gpt-4o',
    schema: citationSchema,
    prompt: `Generate a well-researched paragraph about ${prompt} with proper citations. 
    
    Include:
    - A comprehensive paragraph with inline citations marked as [1], [2], etc.
    - 2-3 citations with realistic source information
    - Each citation should have a title, URL, and optional description/quote
    - Make the content informative and the sources credible
    

```

--------------------------------

### Define PromptInputCommandInput Component (TypeScript)

Source: https://ai-sdk.dev/elements/components/prompt-input

Defines a specific input component for the Command UI, used within prompt input elements. It accepts ComponentProps from CommandInput and allows for custom styling.

```typescript
export type PromptInputCommandInputProps = ComponentProps<typeof CommandInput>;

export const PromptInputCommandInput = ({
  className,
  ...props
}: PromptInputCommandInputProps) => (
  <CommandInput className={cn(className)} {...props} />
);
```

--------------------------------

### Define provider URL creators for AI chat services (TypeScript/React)

Source: https://ai-sdk.dev/elements/components/open-in-chat

Creates URL generator functions for each AI chat provider (T3, v0, Cursor). Each entry includes a title, a createUrl function that builds a query string using URLSearchParams, and an SVG or component icon. These generators are used by the OpenIn components to open the current query in a new tab.

```TypeScript
t3: {
  title: "Open in T3",
  createUrl: (q: string) =>
    `https://t3.chat/new?${new URLSearchParams({
      q,
    })}`,
  icon: <MessageCircleIcon />, 
},
v0: {
  title: "Open in v0",
  createUrl: (q: string) =>
    `https://v0.app?${new URLSearchParams({
      q,
    })}`,
  icon: (
    <svg
      fill="currentColor"
      viewBox="0 0 147 70"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>v0</title>
      <path d="M56 50.2031V14H70V60.1562C70 65.5928 65.5928 70 60.1562 70C57.5605 70 54.9982 68.9992 53.1562 67.1573L0 14H19.7969L56 50.2031Z" />
      <path d="M147 56H133V23.9531L100.953 56H133V70H96.6875C85.8144 70 77 61.1856 77 50.3125V14H91V46.1562L123.156 14H91V0H127.312C138.186 0 147 8.81439 147 19.6875V56Z" />
    </svg>
  ),
},
cursor: {
  title: "Open in Cursor",
  createUrl: (text: string) => {
    const url = new URL("https://cursor.com/link/prompt");
    url.searchParams.set("text", text);
    return url.toString();
  },
  icon: (
    <svg
      version="1.1"
      viewBox="0 0 466.73 532.09"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Cursor</title>
      <path
        d="M457.43,125.94L244.42,2.96c-6.84-3.95-15.28-3.95-22.12,0L9.3,125.94c-5.75,3.32-9.3,9.46-9.3,16.11v247.99c0,6.65,3.55,12.79,9.3,16.11l213.01,122.98c6.84,3.95,15.28,3.95,22.12,0l213.01-122.98c5.75-3.32,9.3-9.46,9.3-16.11v-247.99c0-6.65-3.55-12.79-9.3-16.11h-.01ZM444.05,151.99l-205.63,356.16c-1.39,2.4-5.06,1.42-5.06-1.36v-233.21c0-4.66-2.49-8.97-6.53-11.31L24.87,145.67c-2.4-1.39-1.42-5.06,1.36-5.06h411.26c5.84,0,9.49,6.33,6.57,11.39h-.01Z"
        fill="currentColor"
      />
    </svg>
  ),
},
```

--------------------------------

### Define PromptInputTabItem Component (TypeScript)

Source: https://ai-sdk.dev/elements/components/prompt-input

Defines a reusable tab item component for prompt input interfaces. It accepts HTMLDivElement attributes and applies default styling for alignment and hover effects.

```typescript
export type PromptInputTabItemProps = HTMLAttributes<HTMLDivElement>;

export const PromptInputTabItem = ({
  className,
  ...props
}: PromptInputTabItemProps) => (
  <div
    className={cn(
      "flex items-center gap-2 px-3 py-2 text-xs hover:bg-accent",
      className
    )}
    {...props}
  />
);
```

--------------------------------

### React Inline Citation Component Implementation

Source: https://ai-sdk.dev/elements/components/inline-citation

A comprehensive React component suite for displaying inline citations. It includes components for the citation text, a hover card for details, and a carousel to manage multiple sources, all built with shadcn-ui.

```typescript
"use client";

import { Badge } from "@repo/shadcn-ui/components/ui/badge";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@repo/shadcn-ui/components/ui/carousel";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@repo/shadcn-ui/components/ui/hover-card";
import { cn } from "@repo/shadcn-ui/lib/utils";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import {
  type ComponentProps,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type InlineCitationProps = ComponentProps<"span">;

export const InlineCitation = ({ 
  className, 
  ...props
}: InlineCitationProps) => (
  <span
    className={cn("group inline items-center gap-1", className)}
    {...props}
  />
);

export type InlineCitationTextProps = ComponentProps<"span">;

export const InlineCitationText = ({ 
  className, 
  ...props
}: InlineCitationTextProps) => (
  <span
    className={cn("transition-colors group-hover:bg-accent", className)}
    {...props}
  />
);

export type InlineCitationCardProps = ComponentProps<typeof HoverCard>;

export const InlineCitationCard = (props: InlineCitationCardProps) => (
  <HoverCard closeDelay={0} openDelay={0} {...props} />
);

export type InlineCitationCardTriggerProps = ComponentProps<typeof Badge> & {
  sources: string[];
};

export const InlineCitationCardTrigger = ({ 
  sources, 
  className, 
  ...props
}: InlineCitationCardTriggerProps) => (
  <HoverCardTrigger asChild>
    <Badge
      className={cn("ml-1 rounded-full", className)}
      variant="secondary"
      {...props}
    >
      {sources[0] ? (
        <>
          {new URL(sources[0]).hostname} 
          {sources.length > 1 && `+${sources.length - 1}`}
        </>
      ) : (
        "unknown"
      )}
    </Badge>
  </HoverCardTrigger>
);

export type InlineCitationCardBodyProps = ComponentProps<"div">;

export const InlineCitationCardBody = ({ 
  className, 
  ...props
}: InlineCitationCardBodyProps) => (
  <HoverCardContent className={cn("relative w-80 p-0", className)} {...props} />
);

const CarouselApiContext = createContext<CarouselApi | undefined>(undefined);

const useCarouselApi = () => {
  const context = useContext(CarouselApiContext);
  return context;
};

export type InlineCitationCarouselProps = ComponentProps<typeof Carousel>;

export const InlineCitationCarousel = ({ 
  className, 
  children, 
  ...props
}: InlineCitationCarouselProps) => {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <CarouselApiContext.Provider value={api}>
      <Carousel className={cn("w-full", className)} setApi={setApi} {...props}>
        {children}
      </Carousel>
    </CarouselApiContext.Provider>
  );
};

export type InlineCitationCarouselContentProps = ComponentProps<"div">;

export const InlineCitationCarouselContent = (
  props: InlineCitationCarouselContentProps
) => <CarouselContent {...props} />;

export type InlineCitationCarouselItemProps = ComponentProps<"div">;

export const InlineCitationCarouselItem = ({ 
  className, 
  ...props
}: InlineCitationCarouselItemProps) => (
  <CarouselItem
    className={cn("w-full space-y-2 p-4 pl-8", className)}
    {...props}
  />
);

export type InlineCitationCarouselHeaderProps = ComponentProps<"div">;

export const InlineCitationCarouselHeader = ({ 
  className, 
  ...props
}: InlineCitationCarouselHeaderProps) => (
  <div
    className={cn(
      "flex items-center justify-between gap-2 rounded-t-md bg-secondary p-2",
      className
    )}
    {...props}
  />
);

export type InlineCitationCarouselIndexProps = ComponentProps<"div">;

export const InlineCitationCarouselIndex = ({ 
  children, 
  className, 
  ...props
}: InlineCitationCarouselIndexProps) => {
  const api = useCarouselApi();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      className={cn(
        "flex flex-1 items-center justify-end px-3 py-1 text-muted-foreground text-xs",
        className
      )}
      {...props}
    >
      {children ?? `${current}/${count}`}
    </div>
  );
};

export type InlineCitationCarouselPrevProps = ComponentProps<"button">;

export const InlineCitationCarouselPrev = ({ 
  className, 
  ...props
}: InlineCitationCarouselPrevProps) => {
  const api = useCarouselApi();

  const handleClick = useCallback(() => {
    if (api) {
      api.scrollPrev();
    }
  }, [api]);

  return (
    <button
      aria-label="Previous"
      className={cn("shrink-0", className)}
      onClick={handleClick}
      type="button"
      {...props}
    >

```

--------------------------------

### React Speech Button Component with Web Speech API

Source: https://ai-sdk.dev/elements/components/prompt-input

Implements a React button component (`PromptInputSpeechButton`) that utilizes the Web Speech API for speech recognition. It manages the listening state and interacts with the `SpeechRecognition` object to process transcribed text.

```typescript
export type PromptInputSpeechButtonProps = ComponentProps<
  typeof PromptInputButton
> & {
  textareaRef?: RefObject<HTMLTextAreaElement | null>;
  onTranscriptionChange?: (text: string) => void;
};

export const PromptInputSpeechButton = ({ 
  className,
  textareaRef,
  onTranscriptionChange,
  ...props
}: PromptInputSpeechButtonProps) => {
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(
    null
  );
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      ("SpeechRecognition" in window || "webkitSpeechRecognition" in window)
    ) {
      const SpeechRecognition = 
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const speechRecognition = new SpeechRecognition();

      speechRecognition.continuous = true;
      speechRecognition.interimResults = true;

```

--------------------------------

### Define PromptInputCommandList Component (TypeScript)

Source: https://ai-sdk.dev/elements/components/prompt-input

Defines a list component for the Command UI, designed to display items within prompt input interfaces. It accepts ComponentProps from CommandList and supports custom class names.

```typescript
export type PromptInputCommandListProps = ComponentProps<typeof CommandList>;

export const PromptInputCommandList = ({
  className,
  ...props
}: PromptInputCommandListProps) => (
  <CommandList className={cn(className)} {...props} />
);
```

--------------------------------

### Toolbar React Component Implementation

Source: https://ai-sdk.dev/elements/components/toolbar

A React component implementation for the Toolbar, leveraging React Flow's NodeToolbar and shadcn-ui utility for styling. It provides a styled toolbar with default bottom positioning, suitable for attaching to React Flow nodes.

```typescript
import { cn } from "@repo/shadcn-ui/lib/utils";
import { NodeToolbar, Position } from "@xyflow/react";
import type { ComponentProps } from "react";

type ToolbarProps = ComponentProps<typeof NodeToolbar>;

export const Toolbar = ({ className, ...props }: ToolbarProps) => (
  <NodeToolbar
    className={cn(
      "flex items-center gap-1 rounded-sm border bg-background p-1.5",
      className
    )}
    position={Position.Bottom}
    {...props}
  />
);

```

--------------------------------

### Prompt Input Component with Model Selector - TypeScript/React

Source: https://ai-sdk.dev/elements/components/prompt-input

This code defines a React component that utilizes the PromptInput and ModelSelector components from the AI SDK. It manages the selected model, handles message submissions, and displays different UI states based on the input's status. Dependencies include React hooks and various UI components from '@/components'.

```typescript
"use client";

import {
  PromptInput,
  PromptInputAttachment,
  PromptInputAttachments,
  PromptInputBody,
  PromptInputButton,
  PromptInputCommand,
  PromptInputCommandEmpty,
  PromptInputCommandGroup,
  PromptInputCommandInput,
  PromptInputCommandItem,
  PromptInputCommandList,
  PromptInputCommandSeparator,
  PromptInputFooter,
  PromptInputHeader,
  PromptInputHoverCard,
  PromptInputHoverCardContent,
  PromptInputHoverCardTrigger,
  type PromptInputMessage,
  PromptInputProvider,
  PromptInputSubmit,
  PromptInputTab,
  PromptInputTabBody,
  PromptInputTabItem,
  PromptInputTabLabel,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import {
  ModelSelector,
  ModelSelectorContent,
  ModelSelectorEmpty,
  ModelSelectorGroup,
  ModelSelectorInput,
  ModelSelectorItem,
  ModelSelectorList,
  ModelSelectorLogo,
  ModelSelectorLogoGroup,
  ModelSelectorName,
  ModelSelectorTrigger,
} from "@/components/ai-elements/model-selector";
import { Button } from "@/components/ui/button";
import {
  AtSignIcon,
  CheckIcon,
  FilesIcon,
  GlobeIcon,
  ImageIcon,
  RulerIcon,
} from "lucide-react";
import { useRef, useState } from "react";

const models = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    chef: "OpenAI",
    chefSlug: "openai",
    providers: ["openai", "azure"],
  },
  {
    id: "gpt-4o-mini",
    name: "GPT-4o Mini",
    chef: "OpenAI",
    chefSlug: "openai",
    providers: ["openai", "azure"],
  },
  {
    id: "claude-opus-4-20250514",
    name: "Claude 4 Opus",
    chef: "Anthropic",
    chefSlug: "anthropic",
    providers: ["anthropic", "azure", "google", "amazon-bedrock"],
  },
  {
    id: "claude-sonnet-4-20250514",
    name: "Claude 4 Sonnet",
    chef: "Anthropic",
    chefSlug: "anthropic",
    providers: ["anthropic", "azure", "google", "amazon-bedrock"],
  },
  {
    id: "gemini-2.0-flash-exp",
    name: "Gemini 2.0 Flash",
    chef: "Google",
    chefSlug: "google",
    providers: ["google"],
  },
];

const SUBMITTING_TIMEOUT = 200;
const STREAMING_TIMEOUT = 2000;

const sampleFiles = {
  activeTabs: [{ path: "prompt-input.tsx", location: "packages/elements/src" }],
  recents: [
    { path: "queue.tsx", location: "apps/test/app/examples" },
    { path: "queue.tsx", location: "packages/elements/src" },
  ],
  added: [
    { path: "prompt-input.tsx", location: "packages/elements/src" },
    { path: "queue.tsx", location: "apps/test/app/examples" },
    { path: "queue.tsx", location: "packages/elements/src" },
  ],
  filesAndFolders: [
    { path: "prompt-input.tsx", location: "packages/elements/src" },
    { path: "queue.tsx", location: "apps/test/app/examples" },
  ],
  code: [{ path: "prompt-input.tsx", location: "packages/elements/src" }],
  docs: [{ path: "README.md", location: "packages/elements" }],
};

const sampleTabs = {
  active: [{ path: "packages/elements/src/task-queue-panel.tsx" }],
  recents: [
    { path: "apps/test/app/examples/task-queue-panel.tsx" },
    { path: "apps/test/app/page.tsx" },
    { path: "packages/elements/src/task.tsx" },
    { path: "apps/test/app/examples/prompt-input.tsx" },
    { path: "packages/elements/src/queue.tsx" },
    { path: "apps/test/app/examples/queue.tsx" },
  ],
};

const Example = () => {
  const [model, setModel] = useState<string>(models[0].id);
  const [modelSelectorOpen, setModelSelectorOpen] = useState(false);
  const [status, setStatus] = useState<
    "submitted" | "streaming" | "ready" | "error"
  >("ready");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const selectedModelData = models.find((m) => m.id === model);

  const handleSubmit = (message: PromptInputMessage) => {
    const hasText = Boolean(message.text);
    const hasAttachments = Boolean(message.files?.length);

    if (!(hasText || hasAttachments)) {
      return;
    }

    setStatus("submitted");

    console.log("Submitting message:", message);

    setTimeout(() => {
      setStatus("streaming");
    }, SUBMITTING_TIMEOUT);

    setTimeout(() => {
      setStatus("ready");
    }, STREAMING_TIMEOUT);
  };

  return (
    <div className="flex size-full flex-col justify-end">
      <PromptInputProvider>
        <PromptInput globalDrop multiple onSubmit={handleSubmit}>
          <PromptInputHeader>
            <PromptInputHoverCard>
              <PromptInputHoverCardTrigger>
                <PromptInputButton
                  className="!h-8"
                  size="icon-sm"
                  variant="outline"
                >
                  <AtSignIcon className="text-muted-foreground" size={12} />
                </PromptInputButton>
              </PromptInputHoverCardTrigger>
              <PromptInputHoverCardContent className="w-[400px] p-0">
                <PromptInputCommand>
                  <PromptInputCommandInput
                    className="border-none focus-visible:ring-0"
                    placeholder="Add files, folders, docs..."

```

--------------------------------

### Display AI Model Total Cost (React)

Source: https://ai-sdk.dev/elements/components/context

Renders the total cost of AI model usage in USD. It calculates the cost based on model ID and usage data from context. If no model ID is present or cost cannot be determined, it defaults to 0 USD.

```typescript
export type ContextContentFooterProps = ComponentProps<"div">;

export const ContextContentFooter = ({
  children,
  className,
  ...props
}: ContextContentFooterProps) => {
  const { modelId, usage } = useContextValue();
  const costUSD = modelId
    ? getUsage({
        modelId,
        usage: {
          input: usage?.inputTokens ?? 0,
          output: usage?.outputTokens ?? 0,
        },
      }).costUSD?.totalUSD
    : undefined;
  const totalCost = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(costUSD ?? 0);

  return (
    <div
      className={cn(
        "flex w-full items-center justify-between gap-3 bg-secondary p-3 text-xs",
        className
      )}
      {...props}
    >
      {children ?? (
        <>
          <span className="text-muted-foreground">Total cost</span>
          <span>{totalCost}</span>
        </>
      )}
    </div>
  );
};
```

--------------------------------

### React Confirmation Component using ShadcnUI

Source: https://ai-sdk.dev/elements/components/confirmation

The React code for the Confirmation component, including context, hooks, and various sub-components like ConfirmationTitle, ConfirmationRequest, ConfirmationAccepted, ConfirmationRejected, and ConfirmationActions. It utilizes shadcn-ui components and utility functions for styling and functionality. This component manages approval states and renders UI based on the `ToolUIPart` type from 'ai'.

```typescript
"use client";

import { Alert, AlertDescription } from "@repo/shadcn-ui/components/ui/alert";
import { Button } from "@repo/shadcn-ui/components/ui/button";
import { cn } from "@repo/shadcn-ui/lib/utils";
import type { ToolUIPart } from "ai";
import {
  type ComponentProps,
  createContext,
  type ReactNode,
  useContext,
} from "react";

type ToolUIPartApproval =
  | {
      id: string;
      approved?: never;
      reason?: never;
    }
  | {
      id: string;
      approved: boolean;
      reason?: string;
    }
  | {
      id: string;
      approved: true;
      reason?: string;
    }
  | {
      id: string;
      approved: true;
      reason?: string;
    }
  | {
      id: string;
      approved: false;
      reason?: string;
    }
  | undefined;

type ConfirmationContextValue = {
  approval: ToolUIPartApproval;
  state: ToolUIPart["state"];
};

const ConfirmationContext = createContext<ConfirmationContextValue | null>(
  null
);

const useConfirmation = () => {
  const context = useContext(ConfirmationContext);

  if (!context) {
    throw new Error("Confirmation components must be used within Confirmation");
  }

  return context;
};

export type ConfirmationProps = ComponentProps<typeof Alert> & {
  approval?: ToolUIPartApproval;
  state: ToolUIPart["state"];
};

export const Confirmation = ({
  className,
  approval,
  state,
  ...props
}: ConfirmationProps) => {
  if (!approval || state === "input-streaming" || state === "input-available") {
    return null;
  }

  return (
    <ConfirmationContext.Provider value={{ approval, state }}>
      <Alert className={cn("flex flex-col gap-2", className)} {...props} />
    </ConfirmationContext.Provider>
  );
};

export type ConfirmationTitleProps = ComponentProps<typeof AlertDescription>;

export const ConfirmationTitle = ({
  className,
  ...props
}: ConfirmationTitleProps) => (
  <AlertDescription className={cn("inline", className)} {...props} />
);

export type ConfirmationRequestProps = {
  children?: ReactNode;
};

export const ConfirmationRequest = ({ children }: ConfirmationRequestProps) => {
  const { state } = useConfirmation();

  // Only show when approval is requested
  if (state !== "approval-requested") {
    return null;
  }

  return children;
};

export type ConfirmationAcceptedProps = {
  children?: ReactNode;
};

export const ConfirmationAccepted = ({
  children,
}: ConfirmationAcceptedProps) => {
  const { approval, state } = useConfirmation();

  // Only show when approved and in response states
  if (
    !approval?.approved ||
    (state !== "approval-responded" &&
      state !== "output-denied" &&
      state !== "output-available")
  ) {
    return null;
  }

  return children;
};

export type ConfirmationRejectedProps = {
  children?: ReactNode;
};

export const ConfirmationRejected = ({
  children,
}: ConfirmationRejectedProps) => {
  const { approval, state } = useConfirmation();

  // Only show when rejected and in response states
  if (
    approval?.approved !== false ||
    (state !== "approval-responded" &&
      state !== "output-denied" &&
      state !== "output-available")
  ) {
    return null;
  }

  return children;
};

export type ConfirmationActionsProps = ComponentProps<"div">

export const ConfirmationActions = ({
  className,
  ...props
}: ConfirmationActionsProps) => {
  const { state } = useConfirmation();

  // Only show when approval is requested
  if (state !== "approval-requested") {
    return null;
  }

  return (
    <div
      className={cn("flex items-center justify-end gap-2 self-end", className)}
      {...props}
    />
  );
};

export type ConfirmationActionProps = ComponentProps<typeof Button>;

export const ConfirmationAction = (props: ConfirmationActionProps) => (
  <Button className="h-8 px-3 text-sm" type="button" {...props} />
);

```

--------------------------------

### Frontend Chat UI with Streaming Loader (React/TypeScript)

Source: https://ai-sdk.dev/elements/components/loader

This component creates a chat interface using React and TypeScript. It displays messages, handles user input, and shows a loader while waiting for the AI's response. It uses the `useChat` hook from '@ai-sdk/react' and custom UI components for conversation and input.

```typescript
'use client';

import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent } from '@/components/ai-elements/message';
import {
  Input,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import { Loader } from '@/components/ai-elements/loader';
import { useState } from 'react';
import { useChat } from '@ai-sdk/react';

const LoaderDemo = () => {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status } = useChat();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full">
        <Conversation>
          <ConversationContent>
            {messages.map((message) => (
              <Message from={message.role} key={message.id}>
                <MessageContent>
                  {message.parts.map((part, i) => {
                    switch (part.type) {
                      case 'text':
                        return (
                          <div key={`${message.id}-${i}`}>{part.text}</div>
                        );
                      default:
                        return null;
                    }
                  })}
                </MessageContent>
              </Message>
            ))}
            {status === 'submitted' && <Loader />}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <Input
          onSubmit={handleSubmit}
          className="mt-4 w-full max-w-2xl mx-auto relative"
        >
          <PromptInputTextarea
            value={input}
            placeholder="Say something..."
            onChange={(e) => setInput(e.currentTarget.value)}
            className="pr-12"
          />
          <PromptInputSubmit
            status={status === 'streaming' ? 'streaming' : 'ready'}
            disabled={!input.trim()}
            className="absolute bottom-1 right-1"
          />
        </Input>
      </div>
    </div>
  );
};

export default LoaderDemo;

```

--------------------------------

### Backend Chat API Route with AI SDK (TypeScript/Node.js)

Source: https://ai-sdk.dev/elements/components/conversation

This backend API route (`api/chat/route.ts`) uses the AI SDK to handle POST requests for chat interactions. It receives messages, processes them using a specified model (e.g., 'openai/gpt-4o'), and streams the response back to the client. It depends on `ai` package for streaming functionality.

```typescript
import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: 'openai/gpt-4o',
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}

```

--------------------------------

### Displaying Tool Error Output (React)

Source: https://ai-sdk.dev/elements/components/tool

This snippet shows how to display an error message when a tool execution fails. It utilizes a 'ToolOutput' component to present the 'errorText' prop. This is common in user interfaces for AI assistants to inform users of issues.

```jsx
    {/* 6. output-error: Error */}
    <Tool>
      <ToolHeader
        state="output-error"
        title="database_query"
        type="tool-database_query"
      />
      <ToolContent>
        <ToolInput input={toolCall.input} />
        <ToolOutput
          errorText="Connection timeout: Unable to reach database server"
          output={undefined}
        />
      </ToolContent>
    </Tool>
```

--------------------------------

### Shimmer Component Implementation

Source: https://ai-sdk.dev/elements/components/shimmer

The core implementation of the Shimmer component using React, Framer Motion, and utility classes. It handles animation, styling, and props like duration, spread, and the element type.

```typescript
"use client";

import { cn } from "@repo/shadcn-ui/lib/utils";
import { motion } from "motion/react";
import {
  type CSSProperties,
  type ElementType,
  type JSX,
  memo,
  useMemo,
} from "react";

export type TextShimmerProps = {
  children: string;
  as?: ElementType;
  className?: string;
  duration?: number;
  spread?: number;
};

const ShimmerComponent = ({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) => {
  const MotionComponent = motion.create(
    Component as keyof JSX.IntrinsicElements
  );

  const dynamicSpread = useMemo(
    () => (children?.length ?? 0) * spread,
    [children, spread]
  );

  return (
    <MotionComponent
      animate={{ backgroundPosition: "0% center" }}
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent",
        "[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--color-background),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]",
        className
      )}
      initial={{ backgroundPosition: "100% center" }}
      style={
        {
          "--spread": `${dynamicSpread}px`,
          backgroundImage:
            "var(--bg), linear-gradient(var(--color-muted-foreground), var(--color-muted-foreground))",
        } as CSSProperties
      }
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration,
        ease: "linear",
      }}
    >
      {children}
    </MotionComponent>
  );
};

export const Shimmer = memo(ShimmerComponent);

```

--------------------------------

### Frontend Web Search Agent Component (React)

Source: https://ai-sdk.dev/elements/components/sources

This React component, app/page.tsx, implements a chat interface for a web search agent. It utilizes the useChat hook from '@ai-sdk/react' and custom UI components for displaying messages, sources, and handling user input. It connects to a backend API to send messages and receive responses, including search source URLs.

```typescript
'use client';

import { useChat } from '@ai-sdk/react';
import {
  Source,
  Sources,
  SourcesContent,
  SourcesTrigger,
} from '@/components/ai-elements/sources';
import {
  Input,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from '@/components/ai-elements/conversation';
import { Message, MessageContent, MessageResponse } from '@/components/ai-elements/message';
import { useState } from 'react';
import { DefaultChatTransport } from 'ai';

const SourceDemo = () => {
  const [input, setInput] = useState('');
  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/sources',
    }),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({ text: input });
      setInput('');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-auto mb-4">
          <Conversation>
            <ConversationContent>
              {messages.map((message) => (
                <div key={message.id}>
                  {message.role === 'assistant' && (
                    <Sources>
                      <SourcesTrigger
                        count={
                          message.parts.filter(
                            (part) => part.type === 'source-url',
                          ).length
                        }
                      />
                      {message.parts.map((part, i) => {
                        switch (part.type) {
                          case 'source-url':
                            return (
                              <SourcesContent key={`${message.id}-${i}`}>
                                <Source
                                  key={`${message.id}-${i}`}
                                  href={part.url}
                                  title={part.url}
                                />
                              </SourcesContent>
                            );
                        }
                      })}
                    </Sources>
                  )}
                  <Message from={message.role} key={message.id}>
                    <MessageContent>
                      {message.parts.map((part, i) => {
                        switch (part.type) {
                          case 'text':
                            return (
                              <MessageResponse key={`${message.id}-${i}`}>
                                {part.text}
                              </MessageResponse>
                            );
                          default: 
                            return null;
                        }
                      })}
                    </MessageContent>
                  </Message>
                </div>
              ))}
            </ConversationContent>
            <ConversationScrollButton />
          </Conversation>
        </div>

        <Input
          onSubmit={handleSubmit}
          className="mt-4 w-full max-w-2xl mx-auto relative"
        >
          <PromptInputTextarea
            value={input}
            placeholder="Ask a question and search the..."
            onChange={(e) => setInput(e.currentTarget.value)}
            className="pr-12"
          />
          <PromptInputSubmit
            status={status === 'streaming' ? 'streaming' : 'ready'}
            disabled={!input.trim()}
            className="absolute bottom-1 right-1"
          />
        </Input>
      </div>
    </div>
  );
};

export default SourceDemo;

```

--------------------------------

### Define PromptInputCommandEmpty Component (TypeScript)

Source: https://ai-sdk.dev/elements/components/prompt-input

Defines an empty state component for the Command UI, used to display when no results are found in prompt input. It accepts ComponentProps from CommandEmpty and allows for custom styling.

```typescript
export type PromptInputCommandEmptyProps = ComponentProps<typeof CommandEmpty>;

export const PromptInputCommandEmpty = ({
  className,
  ...props
}: PromptInputCommandEmptyProps) => (
  <CommandEmpty className={cn(className)} {...props} />
);
```

--------------------------------

### Client-Side Chat UI Components (React/TypeScript)

Source: https://ai-sdk.dev/elements/examples/v0

These components define the user interface for a chat application, including input fields for messages and a submit button. They manage local state for the message input and the loading status of the chat. Dependencies include React and potentially UI libraries like `cn` for class name merging.

```tsx
              <PromptInputTextarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="pr-12 min-h-[60px]"
              />
              <PromptInputSubmit
                className="absolute bottom-1 right-1"
                disabled={!message}
                status={isLoading ? 'streaming' : 'ready'}
              />
            </PromptInput>
          </div>
        </div>
      </div>

      {/* Preview Panel */}
      <div className="w-1/2 flex flex-col">
        <WebPreview>
          <WebPreviewNavigation>
            <WebPreviewUrl
              readOnly
              placeholder="Your app here..."
              value={currentChat?.demo}
            />
          </WebPreviewNavigation>
          <WebPreviewBody src={currentChat?.demo} />
        </WebPreview>
      </div>
    </div>
  );
}
```
```

--------------------------------

### Message Component UI with Actions (JavaScript/JSX)

Source: https://ai-sdk.dev/elements/components/message

This React component renders a message with interactive actions like 'Like', 'Dislike', and 'Copy'. It utilizes state management for like/dislike status and integrates with icons for visual feedback. The component expects message content and handles user interactions.

```jsx
import React from "react";
import { ThumbsUpIcon, ThumbsDownIcon, CopyIcon } from "@radix-ui/react-icons";
import { Message, MessageAction, MessageActions } from "streamdown";

const Example = ({ messages, liked, setLiked, disliked, setDisliked, handleCopy }) => {
  return (
    <div>
      {messages.map((message) => (
        <Message key={message.key} message={message}>
          {message.actions && (
            <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <MessageActions>
                <MessageAction
                  label="Like"
                  onClick={() =>
                    setLiked((prev) => ({
                      ...prev,
                      [message.key]: !prev[message.key],
                    }))
                  }
                  tooltip="Like this response"
                >
                  <ThumbsUpIcon
                    className="size-4"
                    fill={liked[message.key] ? "currentColor" : "none"}
                  />
                </MessageAction>
                <MessageAction
                  label="Dislike"
                  onClick={() =>
                    setDisliked((prev) => ({
                      ...prev,
                      [message.key]: !prev[message.key],
                    }))
                  }
                  tooltip="Dislike this response"
                >
                  <ThumbsDownIcon
                    className="size-4"
                    fill={disliked[message.key] ? "currentColor" : "none"}
                  />
                </MessageAction>
                <MessageAction
                  label="Copy"
                  onClick={() => handleCopy(message.content || "")}
                  tooltip="Copy to clipboard"
                >
                  <CopyIcon className="size-4" />
                </MessageAction>
              </MessageActions>
            </div>
          )}
        </Message>
      ))}
    </div>
  );
};

export default Example;

```

--------------------------------

### Render Prompt Input Attachments in React

Source: https://ai-sdk.dev/elements/components/prompt-input

This component renders a list of file attachments in a prompt input. It uses a custom hook to manage attachments and renders each file using a children function. The component only renders if there are files to display.

```typescript
export function PromptInputAttachments({
  children,
  className,
  ...props
}: PromptInputAttachmentsProps) {
  const attachments = usePromptInputAttachments();

  if (!attachments.files.length) {
    return null;
  }

  return (
    <div
      className={cn("flex flex-wrap items-center gap-2 p-3", className)}
      {...props}
    >
      {attachments.files.map((file) => (
        <Fragment key={file.id}>{children(file)}</Fragment>
      ))}
    </div>
  );
}
```

--------------------------------

### Sources component props

Source: https://ai-sdk.dev/elements/components/sources

Type definitions for the Sources component props. Extends basic HTML div element attributes with no additional required props.

```typescript
Prop
Type
`...props?`React.HTMLAttributes<HTMLDivElement>
```

--------------------------------

### React: Inline Citation Source Component

Source: https://ai-sdk.dev/elements/components/inline-citation

A React component for displaying citation sources, including optional title, URL, and description. It supports rendering children and uses utility classes for styling and truncation. Accepts standard div props.

```tsx
import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type InlineCitationSourceProps = ComponentProps<"div"> & {
  title?: string;
  url?: string;
  description?: string;
};

export const InlineCitationSource = ({
  title,
  url,
  description,
  className,
  children,
  ...props
}: InlineCitationSourceProps) => (
  <div className={cn("space-y-1", className)} {...props}>
    {title && (
      <h4 className="truncate font-medium text-sm leading-tight">{title}</h4>
    )}
    {url && (
      <p className="truncate break-all text-muted-foreground text-xs">{url}</p>
    )}
    {description && (
      <p className="line-clamp-3 text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    )}
    {children}
  </div>
);
```

--------------------------------

### Frontend Code Generation Component (React)

Source: https://ai-sdk.dev/elements/components/code-block

This React component utilizes the `experimental_useObject` hook to interact with a backend API for code generation. It manages user input, displays generated code blocks with syntax highlighting, and provides a submission mechanism. Dependencies include `@ai-sdk/react` and custom UI components.

```tsx
'use client';

import { experimental_useObject as useObject } from '@ai-sdk/react';
import { codeBlockSchema } from '@/app/api/codegen/route';
import {
  Input,
  PromptInputTextarea,
  PromptInputSubmit,
} from '@/components/ai-elements/prompt-input';
import {
  CodeBlock,
  CodeBlockCopyButton,
} from '@/components/ai-elements/code-block';
import { useState } from 'react';

export default function Page() {
  const [input, setInput] = useState('');
  const { object, submit, isLoading } = useObject({
    api: '/api/codegen',
    schema: codeBlockSchema,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      submit(input);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 relative size-full rounded-lg border h-[600px]">
      <div className="flex flex-col h-full">
        <div className="flex-1 overflow-auto mb-4">
          {object?.code && object?.language && (
            <CodeBlock
              code={object.code}
              language={object.language}
              showLineNumbers={true}
            >
              <CodeBlockCopyButton />
            </CodeBlock>
          )}
        </div>

        <Input
          onSubmit={handleSubmit}
          className="mt-4 w-full max-w-2xl mx-auto relative"
        >
          <PromptInputTextarea
            value={input}
            placeholder="Generate a React todolist component"
            onChange={(e) => setInput(e.currentTarget.value)}
            className="pr-12"
          />
          <PromptInputSubmit
            status={isLoading ? 'streaming' : 'ready'}
            disabled={!input.trim()}
            className="absolute bottom-1 right-1"
          />
        </Input>
      </div>
    </div>
  );
}

```

--------------------------------

### Local File Addition in TypeScript

Source: https://ai-sdk.dev/elements/components/prompt-input

This function adds files locally to the attachments state, validating against accept patterns, maximum file count, file size limits, and handling errors. It creates blob URLs for file objects and concatenates them to the previous list. Inputs include files array or FileList, dependencies are matchesAccept, maxFiles, maxFileSize, onError. Outputs updated items array. No major limitations beyond browser file API restrictions.

```typescript
const addLocal = useCallback(
  (files: File[] | FileList) => {
    setItems((prev) => {
      let next = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (
          matchesAccept(file.type) &&
          prev.length + next.length < maxFiles &&
          file.size <= maxFileSize
        ) {
          next.push({
            type: "file",
            url: URL.createObjectURL(file),
            mediaType: file.type,
            filename: file.name,
          });
        } else {
          onError && onError(file);
        }
      }
      return prev.concat(next);
    });
  },
  [matchesAccept, maxFiles, maxFileSize, onError]
);
```

--------------------------------

### Conditional Rendering of Tool Output (React)

Source: https://ai-sdk.dev/elements/components/tool

This code demonstrates conditional rendering in React, specifically showing a 'ToolOutput' component only when 'toolCall.state' is equal to 'output-available'. It passes 'errorText' and 'output' props to the 'ToolOutput' component.

```jsx
        {toolCall.state === "output-available" && (
          <ToolOutput errorText={toolCall.errorText} output={toolCall.output} />
        )}
```

--------------------------------

### Define PromptInputBody Component

Source: https://ai-sdk.dev/elements/components/prompt-input

A simple div component that acts as a container for prompt input elements. It uses the 'contents' display property to allow child elements to flow naturally within the layout. It accepts standard HTMLDivElement attributes and a className for styling.

```typescript
export type PromptInputBodyProps = HTMLAttributes<HTMLDivElement>;

export const PromptInputBody = ({ 
  className,
  ...props
}: PromptInputBodyProps) => (
  <div className={cn("contents", className)} {...props} />
);
```

--------------------------------

### Checkpoint Component Implementation in React

Source: https://ai-sdk.dev/elements/components/checkpoint

A React component implementing the checkpoint feature, including a Checkpoint, CheckpointIcon, and CheckpointTrigger. It relies on shadcn-ui for UI elements and lucide-react for icons. The component allows for visual separation of checkpoints and a clickable trigger to restore to a previous state.

```typescript
"use client";

import { Button } from "@repo/shadcn-ui/components/ui/button";
import { Separator } from "@repo/shadcn-ui/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@repo/shadcn-ui/components/ui/tooltip";
import { cn } from "@repo/shadcn-ui/lib/utils";
import { BookmarkIcon, type LucideProps } from "lucide-react";
import type { ComponentProps, HTMLAttributes } from "react";

export type CheckpointProps = HTMLAttributes<HTMLDivElement>;

export const Checkpoint = ({
  className,
  children,
  ...props
}: CheckpointProps) => (
  <div
    className={cn("flex items-center gap-0.5 text-muted-foreground overflow-hidden", className)}
    {...props}
  >
    {children}
    <Separator />
  </div>
);

export type CheckpointIconProps = LucideProps;

export const CheckpointIcon = ({
  className,
  children,
  ...props
}: CheckpointIconProps) =>
  children ?? (
    <BookmarkIcon className={cn("size-4 shrink-0", className)} {...props} />
  );

export type CheckpointTriggerProps = ComponentProps<typeof Button> & {
  tooltip?: string;
};

export const CheckpointTrigger = ({
  children,
  className,
  variant = "ghost",
  size = "sm",
  tooltip,
  ...props
}: CheckpointTriggerProps) =>
  tooltip ? (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button size={size} type="button" variant={variant} {...props}>
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent align="start" side="bottom">
        {tooltip}
      </TooltipContent>
    </Tooltip>
  ) : (
    <Button size={size} type="button" variant={variant} {...props}>
      {children}
    </Button>
  );

```

--------------------------------

### AI Elements Artifact React Component (TypeScript)

Source: https://ai-sdk.dev/elements/components/artifact

A comprehensive React component suite for displaying artifacts, built with TypeScript and designed for integration with shadcn/ui. It includes components for the main container, header, close button, title, description, action buttons, and content area. Dependencies include shadcn/ui components and lucide-react icons.

```typescript
"use client";

import { Button } from "@repo/shadcn-ui/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@repo/shadcn-ui/components/ui/tooltip";
import { cn } from "@repo/shadcn-ui/lib/utils";
import { type LucideIcon, XIcon } from "lucide-react";
import type { ComponentProps, HTMLAttributes } from "react";

export type ArtifactProps = HTMLAttributes<HTMLDivElement>;

export const Artifact = ({ className, ...props }: ArtifactProps) => (
  <div
    className={cn(
      "flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm",
      className
    )}
    {...props} />
);

export type ArtifactHeaderProps = HTMLAttributes<HTMLDivElement>;

export const ArtifactHeader = ({ 
  className,
  ...props
}: ArtifactHeaderProps) => (
  <div
    className={cn(
      "flex items-center justify-between border-b bg-muted/50 px-4 py-3",
      className
    )}
    {...props} />
);

export type ArtifactCloseProps = ComponentProps<typeof Button>;

export const ArtifactClose = ({ 
  className,
  children,
  size = "sm",
  variant = "ghost",
  ...props
}: ArtifactCloseProps) => (
  <Button
    className={cn(
      "size-8 p-0 text-muted-foreground hover:text-foreground",
      className
    )}
    size={size}
    type="button"
    variant={variant}
    {...props}
  >
    {children ?? <XIcon className="size-4" />}
    <span className="sr-only">Close</span>
  </Button>
);

export type ArtifactTitleProps = HTMLAttributes<HTMLParagraphElement>;

export const ArtifactTitle = ({ className, ...props }: ArtifactTitleProps) => (
  <p
    className={cn("font-medium text-foreground text-sm", className)}
    {...props} />
);

export type ArtifactDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export const ArtifactDescription = ({
  className,
  ...props
}: ArtifactDescriptionProps) => (
  <p className={cn("text-muted-foreground text-sm", className)} {...props} />
);

export type ArtifactActionsProps = HTMLAttributes<HTMLDivElement>;

export const ArtifactActions = ({ 
  className,
  ...props
}: ArtifactActionsProps) => (
  <div className={cn("flex items-center gap-1", className)} {...props} />
);

export type ArtifactActionProps = ComponentProps<typeof Button> & {
  tooltip?: string;
  label?: string;
  icon?: LucideIcon;
};

export const ArtifactAction = ({
  tooltip,
  label,
  icon: Icon,
  children,
  className,
  size = "sm",
  variant = "ghost",
  ...props
}: ArtifactActionProps) => {
  const button = (
    <Button
      className={cn(
        "size-8 p-0 text-muted-foreground hover:text-foreground",
        className
      )}
      size={size}
      type="button"
      variant={variant}
      {...props}
    >
      {Icon ? <Icon className="size-4" /> : children}
      <span className="sr-only">{label || tooltip}</span>
    </Button>
  );

  if (tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>{button}</TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return button;
};

export type ArtifactContentProps = HTMLAttributes<HTMLDivElement>;

export const ArtifactContent = ({ 
  className,
  ...props
}: ArtifactContentProps) => (
  <div className={cn("flex-1 overflow-auto p-4", className)} {...props} />
);

```

--------------------------------

### AI Elements Node Component - React

Source: https://ai-sdk.dev/elements/components/node

The core `Node` component and its sub-components (Header, Title, Description, Action, Content, Footer) for creating structured, Card-based nodes in React Flow. It utilizes shadcn/ui components and includes handle support. This code defines the structure and basic styling for the nodes.

```tsx
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/shadcn-ui/components/ui/card";
import { cn } from "@repo/shadcn-ui/lib/utils";
import { Handle, Position } from "@xyflow/react";
import type { ComponentProps } from "react";

export type NodeProps = ComponentProps<typeof Card> & {
  handles: {
    target: boolean;
    source: boolean;
  };
};

export const Node = ({ handles, className, ...props }: NodeProps) => (
  <Card
    className={cn(
      "node-container relative size-full h-auto w-sm gap-0 rounded-md p-0",
      className
    )}
    {...props}
  >
    {handles.target && <Handle position={Position.Left} type="target" />}
    {handles.source && <Handle position={Position.Right} type="source" />}
    {props.children}
  </Card>
);

export type NodeHeaderProps = ComponentProps<typeof CardHeader>;

export const NodeHeader = ({ className, ...props }: NodeHeaderProps) => (
  <CardHeader
    className={cn("gap-0.5 rounded-t-md border-b bg-secondary p-3!", className)}
    {...props}
  />
);

export type NodeTitleProps = ComponentProps<typeof CardTitle>;

export const NodeTitle = (props: NodeTitleProps) => <CardTitle {...props} />;

export type NodeDescriptionProps = ComponentProps<typeof CardDescription>;

export const NodeDescription = (props: NodeDescriptionProps) => (
  <CardDescription {...props} />
);

export type NodeActionProps = ComponentProps<typeof CardAction>;

export const NodeAction = (props: NodeActionProps) => <CardAction {...props} />;

export type NodeContentProps = ComponentProps<typeof CardContent>;

export const NodeContent = ({ className, ...props }: NodeContentProps) => (
  <CardContent className={cn("p-3", className)} {...props} />
);

export type NodeFooterProps = ComponentProps<typeof CardFooter>;

export const NodeFooter = ({ className, ...props }: NodeFooterProps) => (
  <CardFooter
    className={cn("rounded-b-md border-t bg-secondary p-3!", className)}
    {...props}
  />
);

```

--------------------------------

### Prompt Input Component in React

Source: https://ai-sdk.dev/elements/components/prompt-input

This component handles form submission with text and file attachments. It includes validation for file types, sizes, and maximum number of files. It can be used with or without a provider for attachment management.

```typescript
export const PromptInput = ({
  className,
  accept,
  multiple,
  globalDrop,
  syncHiddenInput,
  maxFiles,
  maxFileSize,
  onError,
  onSubmit,
  children,
  ...props
}: PromptInputProps) => {
  // Try to use a provider controller if present
  const controller = useOptionalPromptInputController();
  const usingProvider = !!controller;

  // Refs
  const inputRef = useRef<HTMLInputElement | null>(null);
  const anchorRef = useRef<HTMLSpanElement>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  // Find nearest form to scope drag & drop
  useEffect(() => {
    const root = anchorRef.current?.closest("form");
    if (root instanceof HTMLFormElement) {
      formRef.current = root;
    }
  }, []);

  // ----- Local attachments (only used when no provider)
  const [items, setItems] = useState<(FileUIPart & { id: string })[]>([]);
  const files = usingProvider ? controller.attachments.files : items;

  const openFileDialogLocal = useCallback(() => {
    inputRef.current?.click();
  }, []);

  const matchesAccept = useCallback(
    (f: File) => {
      if (!accept || accept.trim() === "") {
        return true;
      }
      if (accept.includes("image/*")) {
        return f.type.startsWith("image/");
      }
      // NOTE: keep simple; expand as needed
      return true;
    },
    [accept]
  );

  const addLocal = useCallback(
    (fileList: File[] | FileList) => {
      const incoming = Array.from(fileList);
      const accepted = incoming.filter((f) => matchesAccept(f));
      if (incoming.length && accepted.length === 0) {
        onError?.({
          code: "accept",
          message: "No files match the accepted types.",
        });
        return;
      }
      const withinSize = (f: File) =>
        maxFileSize ? f.size <= maxFileSize : true;
      const sized = accepted.filter(withinSize);
      if (accepted.length > 0 && sized.length === 0) {
        onError?.({
          code: "max_file_size",
          message: "All files exceed the maximum size.",
        });
        return;
      }

      setItems((prev) => {
        const capacity =
          typeof maxFiles === "number"
            ? Math.max(0, maxFiles - prev.length)
            : undefined;
        const capped =
          typeof capacity === "number" ? sized.slice(0, capacity) : sized;
        if (typeof capacity === "number" && sized.length > capacity) {
          onError?.({
            code: "max_files",
            message: "Too many files. Some were not added.",
          });
        }
        const next: (FileUIPart & { id: string })[] = [];
        for (const file of capped) {
          next.push({
            id: nanoid(),
```

--------------------------------

### SourcesTrigger component props

Source: https://ai-sdk.dev/elements/components/sources

Type definitions for the SourcesTrigger component props. Includes optional count prop and extends button HTML attributes.

```typescript
Prop
Type
`count?`number
`...props?`React.ButtonHTMLAttributes<HTMLButtonElement>
```

--------------------------------

### usePromptInputAttachments Hook for Context Access

Source: https://ai-sdk.dev/elements/components/prompt-input

A custom React hook to access the AttachmentsContext. It prioritizes a provider context and falls back to a local context, ensuring that the hook is used within the appropriate component hierarchy. Throws an error if context is not found.

```typescript
export const usePromptInputAttachments = () => {
  // Dual-mode: prefer provider if present, otherwise use local
  const provider = useOptionalProviderAttachments();
  const local = useContext(LocalAttachmentsContext);
  const context = provider ?? local;
  if (!context) {
    throw new Error(
      "usePromptInputAttachments must be used within a PromptInput or PromptInputProvider"
    );
  }
  return context;
};
```

--------------------------------

### Define PromptInputCommandGroup Component (TypeScript)

Source: https://ai-sdk.dev/elements/components/prompt-input

Defines a group component for the Command UI, used to categorize items within prompt input interfaces. It accepts ComponentProps from CommandGroup and supports custom class names.

```typescript
export type PromptInputCommandGroupProps = ComponentProps<typeof CommandGroup>;

export const PromptInputCommandGroup = ({
  className,
  ...props
}: PromptInputCommandGroupProps) => (
  <CommandGroup className={cn(className)} {...props} />
);
```

--------------------------------

### Create ChainOfThoughtImage component with caption support

Source: https://ai-sdk.dev/elements/components/chain-of-thought

Implements an image container with optional caption for AI reasoning visualizations. Features a max-height constraint, rounded corners, and muted background. Accepts caption as optional prop and displays it with muted text styling.

```tsx
export type ChainOfThoughtImageProps = ComponentProps<"div"> & {
  caption?: string;
};

export const ChainOfThoughtImage = memo(
  ({ className, children, caption, ...props }: ChainOfThoughtImageProps) => (
    <div className={cn("mt-2 space-y-2", className)} {...props}>
      <div className="relative flex max-h-[22rem] items-center justify-center overflow-hidden rounded-lg bg-muted p-3">
        {children}
      </div>
      {caption && <p className="text-muted-foreground text-xs">{caption}</p>}
    </div>
  )
);
```

--------------------------------

### Display Single Message Attachment

Source: https://ai-sdk.dev/elements/components/message

Component to display a single file attachment. Renders images as thumbnails and other file types with an icon and filename. Accepts file data, an optional remove handler, and div attributes.

```jsx
<MessageAttachment
  data={{
    type: "file",
    url: "https://example.com/image.jpg",
    mediaType: "image/jpeg",
    filename: "image.jpg"
  }}
  onRemove={() => console.log("Remove clicked")}
/>
```

--------------------------------

### React Component for Dijkstra's Algorithm Display

Source: https://ai-sdk.dev/elements/components/artifact

A React component that displays the details of Dijkstra's algorithm implementation. It includes a title, description, and a code block showing the Python implementation. It also provides action buttons for running, copying, regenerating, downloading, and sharing the code.

```javascript
const Example = () => (
  <Artifact>
    <ArtifactHeader>
      <div>
        <ArtifactTitle>Dijkstra's Algorithm Implementation</ArtifactTitle>
        <ArtifactDescription>Updated 1 minute ago</ArtifactDescription>
      </div>
      <div className="flex items-center gap-2">
        <ArtifactActions>
          <ArtifactAction
            icon={PlayIcon}
            label="Run"
            onClick={() => console.log("Run")}
            tooltip="Run code"
          />
          <ArtifactAction
            icon={CopyIcon}
            label="Copy"
            onClick={() => console.log("Copy")}
            tooltip="Copy to clipboard"
          />
          <ArtifactAction
            icon={RefreshCwIcon}
            label="Regenerate"
            onClick={() => console.log("Regenerate")}
            tooltip="Regenerate content"
          />
          <ArtifactAction
            icon={DownloadIcon}
            label="Download"
            onClick={() => console.log("Download")}
            tooltip="Download file"
          />
          <ArtifactAction
            icon={ShareIcon}
            label="Share"
            onClick={() => console.log("Share")}
            tooltip="Share artifact"
          />
        </ArtifactActions>
      </div>
    </ArtifactHeader>
    <ArtifactContent className="p-0">
      <CodeBlock
        className="border-none"
        code={code}
        language="python"
        showLineNumbers
      />
    </ArtifactContent>
  </Artifact>
);

export default Example;
```

--------------------------------

### Render Message Branch Selector UI Component (React/TSX)

Source: https://ai-sdk.dev/elements/components/message

The `MessageBranchSelector` component renders a horizontal button group that allows users to switch between different message branches. It uses the `useMessageBranch` hook to determine the total number of branches and hides itself when only a single branch exists. No external dependencies beyond the UI library are required.

```tsx
export type MessageBranchSelectorProps = HTMLAttributes<HTMLDivElement> & {\n  from: UIMessage[\"role\"];\n};\n\nexport const MessageBranchSelector = ({\n  className,\n  from,\n  ...props\n}: MessageBranchSelectorProps) => {\n  const { totalBranches } = useMessageBranch();\n\n  // Don't render if there's only one branch\n  if (totalBranches <= 1) {\n    return null;\n  }\n\n  return (\n    <ButtonGroup\n      className=\"[&>*:not(:first-child)]:rounded-l-md [&>*:not(:last-child)]:rounded-r-md\"\n      orientation=\"horizontal\"\n      {...props}\n    />\n  );\n};
```

--------------------------------

### File and Image Attachment UI Component (React/TSX)

Source: https://ai-sdk.dev/elements/components/message

The `MessageAttachment` component renders either an image preview or a generic file icon based on the attachment's media type. It includes optional removal functionality with an accessible button and uses tooltip components to display the attachment label. The component gracefully handles missing URLs and provides consistent styling via the `cn` utility.

```tsx
export type MessageAttachmentProps = HTMLAttributes<HTMLDivElement> & {\n  data: FileUIPart;\n  className?: string;\n  onRemove?: () => void;\n};\n\nexport function MessageAttachment({\n  data,\n  className,\n  onRemove,\n  ...props\n}: MessageAttachmentProps) {\n  const filename = data.filename || \"\";\n  const mediaType =\n    data.mediaType?.startsWith(\"image/\") && data.url ? \"image\" : \"file\";\n  const isImage = mediaType === \"image\";\n  const attachmentLabel = filename || (isImage ? \"Image\" : \"Attachment\");\n\n  return (\n    <div\n      className={cn(\n        \"group relative size-24 overflow-hidden rounded-lg\",\n        className\n      )}\n      {...props}\n    >\n      {isImage ? (\n        <>\n          <img\n            alt={filename || \"attachment\"}\n            className=\"size-full object-cover\"\n            height={100}\n            src={data.url}\n            width={100}\n          />\n          {onRemove && (\n            <Button\n              aria-label=\"Remove attachment\"\n              className=\"absolute top-2 right-2 size-6 rounded-full bg-background/80 p-0 opacity-0 backdrop-blur-sm transition-opacity hover:bg-background group-hover:opacity-100 [&>svg]:size-3\"\n              onClick={(e) => {\n                e.stopPropagation();\n                onRemove();\n              }}\n              type=\"button\"\n              variant=\"ghost\"\n            >\n              <XIcon />\n              <span className=\"sr-only\">Remove</span>\n            </Button>\n          )}\n        </>\n      ) : (\n        <>\n          <Tooltip>\n            <TooltipTrigger asChild>\n              <div className=\"flex size-full shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground\">\n                <PaperclipIcon className=\"size-4\" />\n              </div>\n            </TooltipTrigger>\n            <TooltipContent>\n              <p>{attachmentLabel}</p>\n            </TooltipContent>\n          </Tooltip>\n          {onRemove && (\n            <Button\n              aria-label=\"Remove attachment\"\n              className=\"size-6 shrink-0 rounded-full p-0 opacity-0 transition-opacity hover:bg-accent group-hover:opacity-100 [&>svg]:size-3\"\n              onClick={(e) => {\n                e.stopPropagation();\n                onRemove();\n              }}\n              type=\"button\"\n              variant=\"ghost\"\n            >\n              <XIcon />\n              <span className=\"sr-only\">Remove</span>\n            </Button>\n          )}\n        </>\n      )}\n    </div>\n  );\n}
```

--------------------------------

### Backend API Route for Streaming Chat Responses (Node.js/TypeScript)

Source: https://ai-sdk.dev/elements/components/loader

This backend route handles POST requests for chat interactions. It receives messages and a model identifier, then uses the `streamText` function from 'ai' to generate a streaming response. The response is converted to a UI message stream for the frontend.

```typescript
import { streamText, UIMessage, convertToModelMessages } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { model, messages }: { messages: UIMessage[]; model: string } = 
    await req.json();

  const result = streamText({
    model: 'openai/gpt-4o',
    messages: convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}

```

--------------------------------

### Define PromptInputCommandSeparator Component (TypeScript)

Source: https://ai-sdk.dev/elements/components/prompt-input

Defines a separator component for the Command UI, used to visually divide sections within prompt input interfaces. It accepts ComponentProps from CommandSeparator and allows for custom class names.

```typescript
export type PromptInputCommandSeparatorProps = ComponentProps<
  typeof CommandSeparator
>;

export const PromptInputCommandSeparator = ({
  className,
  ...props
}: PromptInputCommandSeparatorProps) => (
  <CommandSeparator className={cn(className)} {...props} />
);
```

--------------------------------

### Implement ChainOfThought collapsible component with React

Source: https://ai-sdk.dev/elements/components/chain-of-thought

Creates a collapsible container for AI reasoning visualization using Radix UI components. Uses React Context API to manage open state and provides smooth slide and fade animations. Depends on useChainOfThought hook and Collapsible components.

```tsx
const { isOpen } = useChainOfThought();

return (
  <Collapsible open={isOpen}>
    <CollapsibleContent
      className={cn(
        "mt-2 space-y-3",
        "data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 text-popover-foreground outline-none data-[state=closed]:animate-out data-[state=open]:animate-in",
        className
      )}
      {...props}
    >
      {children}
    </CollapsibleContent>
  </Collapsible>
);
```

--------------------------------

### Handle AI streaming task generation in Next.js API route with TypeScript

Source: https://ai-sdk.dev/elements/components/task

An API route that receives a prompt, streams a structured task workflow using the AI SDK and Zod schema, and returns the response as a text stream. It configures a 30‑second max duration and uses OpenAI's gpt‑4o model. Requires the 'ai' package and Zod for schema validation.

```typescript
import { streamObject } from 'ai';
import { z } from 'zod';

export const taskItemSchema = z.object({
  type: z.enum(['text', 'file']),
  text: z.string(),
  file: z
    .object({
      name: z.string(),
      icon: z.string(),
      color: z.string().optional(),
    })
    .optional(),
});

export const taskSchema = z.object({
  title: z.string(),
  items: z.array(taskItemSchema),
  status: z.enum(['pending', 'in_progress', 'completed']),
});

export const tasksSchema = z.object({
  tasks: z.array(taskSchema),
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { prompt } = await req.json();

  const result = streamObject({
    model: 'openai/gpt-4o',
    schema: tasksSchema,
    prompt: `You are an AI assistant that generates realistic development task workflows. Generate a set of tasks that would occur during ${prompt}.

    Each task should have:
    - A descriptive title
    - Multiple task items showing the progression
    - Some items should be plain text, others should reference files
    - Use realistic file names and appropriate file types
    - Status should progress from pending to in_progress to completed

    For file items, use these icon types: 'react', 'typescript', 'javascript', 'css', 'html', 'json', 'markdown'

    Generate 3-4 tasks total, with 4-6 items each.`,
  });

  return result.toTextStreamResponse();
}

```