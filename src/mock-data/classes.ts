export interface ClassType {
  id: string;
  name: string;
  difficulty: string;
  description: string;
}

export const classTypes: ClassType[] = [
  { id: "vinyasa", name: "Vinyasa Flow", difficulty: "Intermediate", description: "A dynamic, breath-linked sequence that builds heat and flexibility." },
  { id: "restorative", name: "Restorative Yoga", difficulty: "Beginner", description: "Slow, supported poses designed to calm the nervous system." },
  { id: "pilates", name: "Pilates Sculpt", difficulty: "Intermediate", description: "Core-focused mat work that builds strength without bulk." },
];
