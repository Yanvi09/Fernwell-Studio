export interface Schedule {
  [day: string]: {
    [time: string]: string;
  };
}

export const schedule: Schedule = {
  Monday: { "7:00 AM": "vinyasa", "6:00 PM": "restorative" },
  Tuesday: { "9:00 AM": "pilates", "6:00 PM": "vinyasa" },
  Wednesday: { "7:00 AM": "vinyasa", "12:00 PM": "restorative", "6:00 PM": "pilates" },
  Thursday: { "9:00 AM": "restorative", "7:00 PM": "vinyasa" },
  Friday: { "8:00 AM": "pilates", "5:30 PM": "vinyasa" },
  Saturday: { "9:00 AM": "vinyasa", "11:00 AM": "restorative", "10:00 AM": "pilates" },
  Sunday: { "10:00 AM": "restorative", "4:00 PM": "vinyasa" },
};
