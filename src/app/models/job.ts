export interface Job {
  id: number;
  title: string;
  desc: string;
  minSalary: string;
  maxSalary: string;
  location: string;
  company?: string; // optional now
}
