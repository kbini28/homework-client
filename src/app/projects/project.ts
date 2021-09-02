// Replacement for IProduct - name it...IProject??
// can add an image or star rating component

export interface IProject {
  projectId: number;
  projectName: string;
  description: string; // field added to java model 9/2/21
  difficulty: string;
  category: string;
  priority: string;
  cost: number;
  completed: boolean;
}