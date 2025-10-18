```typescript
export const jack = new Developer({
    person: new Person({
        name: "Jack Humes",
        jobTitle: "Software Engineer II",
    }),
    company: {
        name: "Deliveroo",
        start: new Date(2025, 12),
    },
    frameworks: ["react"],
    languages: ["typescript", "go"],
});
```
