# how-to-debug-hanging-node-server

How can I debug my express server if I misused a middleware?

```diff
-app.use(m()); 
+app.use(m); // causes express server hangs
```
