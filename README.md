### Flow Builder

Define app flow visually, store it as json and execute it on given triggers.

Inspired from Salesforce flows and flow builder

```ts
interface Flow {
  name: string;
  description?: string;
  trigger: (boolean | (prevData: any) => Promise<boolean>);
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
  condition: (boolean | (prevData: any) => Promise<boolean>);
}
```

#### Flow Triggers

- Create/Update/Delete on a record
- Scheduled
- Manual

#### Flow Termination Conditions

- End of flow
- Condition
- Error
- Timeout
- Manual

#### Flow Pauses and Delay

- Wait for manual approval
- Wait for any other condition
- previous stage node not completed yet
