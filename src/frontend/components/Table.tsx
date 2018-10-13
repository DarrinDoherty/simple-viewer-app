/*---------------------------------------------------------------------------------------------
* Copyright (c) 2018 Bentley Systems, Incorporated. All rights reserved.
* Licensed under the MIT License. See LICENSE.md in the project root for license terms.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import { IModelConnection } from "@bentley/imodeljs-frontend";
import { Table } from "@bentley/ui-components";
import { PresentationTableDataProvider, withUnifiedSelection } from "@bentley/presentation-components/lib/table";

// create a HOC table component that supports unified selection
// tslint:disable-next-line:variable-name
const SimpleTable = withUnifiedSelection(Table);

/** React properties for the table component */
export interface Props {
  /** iModel whose contents should be displayed in the table */
  imodel: IModelConnection;
  /** ID of the presentation rule set to use for creating the content displayed in the table */
  rulesetId: string;
}

/** Table component for the viewer app */
export default class SimpleTableComponent extends React.Component<Props> {
  public render() {
    return (
      <div style={{ height: "100%" }}>
        <SimpleTable dataProvider={new PresentationTableDataProvider(this.props.imodel, this.props.rulesetId)} />
      </div>
    );
  }
}
