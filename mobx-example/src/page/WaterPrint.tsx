import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { observer, inject } from "mobx-react";

import { waterPrint } from "../plugins/waterprint";

import "./WaterPrint.css";

export type WaterPrintProps = RouteComponentProps<any> & {
    store: any,
};

@inject("store")
@observer
class WaterPrint extends React.Component<WaterPrintProps> {
    public constructor(props: WaterPrintProps) {
        super(props);
        this.state = {
        };
    }
    public componentWillMount(): void {
    }

    public render(): JSX.Element {
        const paras = {
            username: "jiayizhen",
        };
        const wpStyle = waterPrint(paras);
        return (
            <div className="water-print animated zoomIn" style={wpStyle}></div>
        );
    }
}
export default WaterPrint;