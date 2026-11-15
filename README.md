# Flow Builder

Visual flow builder: define app flows on a canvas, store them as JSON, execute them on triggers. Inspired by Salesforce Flow.

## Schema

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

## Triggers

Create/Update/Delete on a record · Scheduled · Manual

## Termination

End of flow · Condition

## Tech

TypeScript · Go (goa) · pnpm workspaces

## Quick start

```bash
git clone https://github.com/m3rashid/flow-builder.git
cd flow-builder
pnpm install
```

## License

MIT
