export interface Mission {
  name: string;
  job: string;
  startDate: Date;
  endDate: Date;
  context: string;
  team: string;
  description: string;
  tasks: string[]
  techno?: string;
}
