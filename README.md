### Flow Builder

Define app flow visually, store it as json and execute it on given triggers. Inspired from Salesforce flows and flow builder.

If all the flows in the app is already defined, this is not used (better make it procedural). This is to be used extensively where we need to define the flow on the fly. This also makes the platform more configurable and extensible.

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

#### How it is to be executed

- A flow is created and saved to the database
- All apis run side-effects and cleanups in the background
- A flow is triggered in one of these side-effects.
  - On cleanup, if the request is for create/delete/update, flow trigger is checked
  - something like `await search({ thisDb, thisCollection, thisAction }) => boolean`
  - In case of create/delete, the trigger is set to true
  - In case of update, we check the specific updated record, if it matches the trigger, we set the trigger to true
  - If the trigger is true, we execute the flow, else do nothing
- A flow is executed and
  - Each node is executed in order (sequential execution)
  - constantly watch for the next node to be executed
