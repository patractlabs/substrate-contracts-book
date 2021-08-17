# Docker  
In Redspot v0.4, we added support for using docker to compile contracts. This will ensure that the compiled wasm code being consistent across different platforms.

Currently, will use [redspot/contract](https://github.com/patractlabs/docker-images/tree/master/contract) docker to compile and run the testnet. It is modified on the basis of [contract docker image](https://github.com/paritytech/scripts/blob/master/dockerfiles/contracts-ci-linux/Dockerfile) provided by Parity Tech.

### TestNet

If the machine has a Docker environment. A testnet can be run by Docker. The canvas testnet is currently built-in.

You can run the testnet with the following command.

```bash
$ npx redspot testnet
```
This equivelent of running
```bash
$ docker run -p 9944:9944 --rm redspot/contract /bin/bash -c "canvas --tmp --dev --ws-port=9944 --ws-external"  
```

To modify the default running command, add the `command ` parameter.

```bash
$ npx redspot testnet --command 'docker run -p 9945:9944 --rm redspot/contract /bin/bash -c "canvas --tmp --dev --ws-port=9944 --ws-external"'
```

Or modify the redspot.config file.

```typescript
  docker: {
    sudo: false,
    runTestnet:
      "docker run -p 9944:9944 --rm redspot/contract /bin/bash -c 'canvas --rpc-cors all --tmp --dev --ws-port=9944 --ws-external'",
  }
```

### Compile on docker
Currently Redspot only supports ink! contract docker compilation, to configure the docker env, modify the docker entry in `redspot.config.ts`

```typescript
  docker: {
    sudo: false,
    runTestnet:
      "docker run -p 9944:9944 --rm redspot/contract /bin/bash -c 'canvas --rpc-cors all --tmp --dev --ws-port=9944 --ws-external'",
  }
```
Before running the compile command, make sure that Docker is installed on the machine. Run the following command.

```bash
$ npx redspot compile --docker true
```

**Note** When using Docker to compile, it may be affected by the network environment. For example, China requires a VPN proxy, which will cause the compilation time to be too long. If you use`ctrl+c`to exit the current compilation command halfway, the Docker container will not automatically stop deleting.

**Note** If you encounter permission errors, please set `docker.sudo ` in the redspot.config file to true. This will use sudo  to run Docker . Or refer to [the official Docker documentation](https://docs.docker.com/engine/install/linux-postinstall/) to configure permissions.