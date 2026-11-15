<div align="center">

# 🌊 Flow Builder

### Visual flow builder — define app flows on a canvas, store as JSON, execute on triggers

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE)

> *Inspired by Salesforce Flow.*

</div>

---

## 📖 Overview

Define app flows visually, persist them as JSON, and execute them on triggers. Useful where flows must be defined on the fly, making the platform configurable and extensible.

## 📐 Schema

```ts
interface Flow {
  name: string;
  description?: string;
  trigger: boolean | ((prevData: any) => Promise<boolean>);
  nodes: FlowStageNode[];
  edges: FlowStageEdge[];
}

interface FlowStageNode {
  label: string;
  description?: string;
  position: { x: number; y: number };
  prevData: any;
  action: (prevData: any) => Promise<any>;
}

interface FlowStageEdge {
  from: number;
  to: number;
  condition: boolean | ((prevData: any) => Promise<boolean>);
}
```

## ⚡ Triggers

`Create/Update/Delete on a record` · `Scheduled` · `Manual`

## 🛑 Termination conditions

`End of flow` · `Condition`

## 🏗 Architecture

```
flow-builder/
├── web/      # React canvas editor (Vite + Tailwind)
├── server/   # flow runner (TS)
├── shared/   # shared models
├── goa/      # Go backend (goa)
└── pnpm-workspace.yaml
```

## 🛠 Tech stack

`TypeScript` · `Go (goa)` · `pnpm workspaces` · `React` · `Vite` · `Tailwind`

## 📦 Quick start

```bash
git clone https://github.com/m3rashid/flow-builder.git
cd flow-builder
pnpm install
```

## 📄 License

ISC © [m3rashid](https://github.com/m3rashid)
