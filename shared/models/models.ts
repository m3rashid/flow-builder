export interface Base {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Auth extends Base {
  email: string;
  password: string;
  name: string;
}

interface FlowStageNode extends Base {
  label: string;
  description?: string;
  position: { x: number; y: number };
  prevData: any;
  action: any; // (prevData: any) => Promise<any>;
}

interface FlowStageEdge extends Base {
  from: number;
  to: number;
  condition: boolean; // | ((prevData: any) => Promise<boolean>);
}

export interface Flow extends Base {
  name: string;
  description?: string;
  trigger: boolean; // | ((prevData: any) => Promise<boolean>);
  nodes: FlowStageNode[];
  edges: FlowStageEdge[];
}
