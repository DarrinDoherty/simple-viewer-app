/*---------------------------------------------------------------------------------------------
* Copyright (c) 2018 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import { Config } from "@bentley/imodeljs-clients";

/**
 * List of possible backends that simple-viewer-app can use
 */
export const enum UseBackend {
  /** Use local simple-viewer-app backend */
  Local = 0,

  /** Use deployed Navigator backend */
  Navigator = 1,
}

/**
 * Setup configuration for the application
 */
export default function setupEnv() {
  Config.App.merge({
    // -----------------------------------------------------------------------------------------------------------
    // Test project and iModel (REQUIRED)
    // Must set these variables before testing - create a new project and iModel with the
    // developer registration procedure here - https://git.io/fx8YP
    // -----------------------------------------------------------------------------------------------------------
    imjs_test_project            : "<Name of Project>", // Set this to the name of the sample project
    imjs_test_imodel             : "<Name of iModel>", // Set this to the name of the sample iModel

    // -----------------------------------------------------------------------------------------------------------
    // Client registration (RECOMMENDED but OPTIONAL)
    // Must set these variables before deployment, but the supplied defaults can be used for testing on localhost.
    // Create a client registration using the procedure here - https://git.io/fx8YP (Developer registration). For the purpose
    // of running this sample on localhost, ensure your registration includes http://localhost:3000/signin-oidc as a
    // valid redirect URI.
    // -----------------------------------------------------------------------------------------------------------
    imjs_test_oidc_client_id     : "imodeljs-spa-test-2686", // Set this to the registered clientId (Note: the supplied default registration "imodeljs-spa-test-2686" will work only on localhost)
    imjs_test_oidc_redirect_path : "/signin-oidc", // Set this to be the path to the registered redirect URI (Note: the supplied default "/signin-oidc" will only work with the default registration)
  });
}
