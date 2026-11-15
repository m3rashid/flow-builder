# Flow Builder

Define app flows visually, store as JSON, execute on triggers. Inspired by Salesforce Flow.

## Triggers

Create/Update/Delete on a record · Scheduled · Manual

## Termination

End of flow · Condition

## Schema

```ts
interface Flow {
  name: string;
  description?: string;
  trigger: boolean | ((prevData: any) => Promise<boolean>);
  nodes: FlowStageNode[];
  edges: FlowStageEdge[];
}
```

## License

MIT
