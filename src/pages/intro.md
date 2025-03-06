```typescript
export const jack = new Developer({
    person: new Person({
        name: "Jack Humes",
        jobTitle: "Junior Web Developer",
    }),
    company: {
        name: "NewDay",
        start: new Date(2023, 7),
    },
    frameworks: ["react", "nextjs"],
    languages: ["typescript"],
});
```
