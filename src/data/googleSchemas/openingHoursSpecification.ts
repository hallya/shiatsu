import { OpeningHoursSpecification } from "schema-dts";

export const hoursAvailable: OpeningHoursSpecification[] = [
  {
    "@type": "OpeningHoursSpecification",
    validFrom: "2021-02-17",
    validThrough: "2026-02-17",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "08:00",
    closes: "20:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    validFrom: "2021-02-17",
    validThrough: "2026-02-17",
    dayOfWeek: "Friday",
    opens: "09:00",
    closes: "19:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    validFrom: "2021-02-17",
    validThrough: "2026-02-17",
    dayOfWeek: "Saturday",
    opens: "09:00",
    closes: "13:00",
  },
];
