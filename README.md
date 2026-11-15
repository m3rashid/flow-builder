<div align="center">

# 🌊 Flow Builder

**Visual flow builder — define app flows on a canvas, store as JSON, execute on triggers.** Inspired by Salesforce Flow.

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://typescriptlang.org)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](LICENSE)

</div>

---

## 📐 Schema

```ts
interface Flow {
  name: string;
  description?: string;
  trigger: boolean | ((prevData: any) => Promise<boolean>);
  nodes: FlowStageNode[];
  edges: FlowStageEdge[];
}
```

## ⚡ Triggers

`Create/Update/Delete on a record` · `Scheduled` · `Manual`

## 🛑 Termination

`End of flow` · `Condition`

## 🛠 Tech

`TypeScript` · `Go (goa)` · `pnpm workspaces`

## 📦 Quick start

```bash
git clone https://github.com/m3rashid/flow-builder.git
cd flow-builder
pnpm install
```

## 📄 License

ISC
