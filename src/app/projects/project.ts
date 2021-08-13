// Replacement for IProduct - name it...IProject??
// can add an image or star rating component

export interface IProject {
  projectName: string;
  difficulty: string;
  category: string;
  priority: string;
  cost: number;
  completed: boolean;
}