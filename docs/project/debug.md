# TS debug

TS debug 参考配置

注意修改调试的入口文件路径

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "index",
      "type": "node",
      "request": "launch",
      "args": [
        "${workspaceRoot}/index.ts" // 入口文件
      ],
      "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],
      "sourceMaps": true,
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    },
    {
      "name": "get",
      "type": "node",
      "request": "launch",
      "args": [
        "${workspaceRoot}/example/axios/get.ts" // 入口文件
      ],
      "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],
      "sourceMaps": true,
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    },
    {
      "name": "post",
      "type": "node",
      "request": "launch",
      "args": [
        "${workspaceRoot}/example/axios/post.ts" // 入口文件
      ],
      "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],
      "sourceMaps": true,
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```
