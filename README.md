# Reproduction steps

## Clone repo and install

```
cd apps/web

deno install --allow-scripts

deno run dev
```

Should get the following error:

```
Error: The following dependencies are imported but could not be resolved:

@scope/foo (imported by /Users/cmcevenue/Desktop/repos/playground/deno-repro/apps/web/src/routes/+page.ts)
```
