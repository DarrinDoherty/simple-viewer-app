/*---------------------------------------------------------------------------------------------
* Copyright (c) 2018 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import {
  BentleyCloudRpcManager, BentleyCloudRpcParams,
  ElectronRpcManager, ElectronRpcConfiguration,
  RpcConfiguration, RpcOperation, IModelToken,
} from "@bentley/imodeljs-common";
import getSupportedRpcs from "../../common/rpcs";

/**
 * Initializes RPC communication based on the platform
 */
export default function initRpc(rpcParams?: BentleyCloudRpcParams): RpcConfiguration {
  let config: RpcConfiguration;
  const rpcInterfaces = getSupportedRpcs();
  if (ElectronRpcConfiguration.isElectron) {
    // initializes RPC for Electron
    config = ElectronRpcManager.initializeClient({}, rpcInterfaces);
  } else {
    // initialize RPC for web apps
    if (!rpcParams)
      rpcParams = { info: { title: "simple-viewer-app", version: "v1.0" } };
    config = BentleyCloudRpcManager.initializeClient(rpcParams, rpcInterfaces);
    if (!rpcParams.uriPrefix) {
      for (const definition of config.interfaces())
        RpcOperation.forEach(definition, (operation) => operation.policy.token = () => new IModelToken("test", "test", "test", "test"));
    }
  }
  return config;
}
