import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { observer, inject } from "mobx-react";

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
            username: "zhazha jiayizhen",
        };
        const wpStyle = this.createWaterPrint(paras);
        return (
            <div className="water-print animated zoomIn" style={wpStyle}></div>
        );
    }

    /**
     * 生成水印
     * @param paras 参数信息
     */
    private createWaterPrint(paras: any): object {
        if (!paras) {
            return {};
        }
        // 水印内容
        const text = paras.username;
        // 角度
        const angle = 15;
        // 宽度
        const width = text.length * 20;
        // 高度
        const height = Math.sin(angle) * width;
        // 创建canvas
        const canvas: any = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.font = "24px -apple-system, sans-serif, Arial";
        ctx.textBaseline = "alphabetic";
        ctx.rotate(-angle * Math.PI / 180);
        ctx.fillStyle = "#ddd";
        ctx.fillText(text, -10, height / 2);
        const dataURL = canvas.toDataURL();
        const waterPrintStyle = {
            backgroundImage: `url(${dataURL})`,
            backgroundSize: `${width / 2}px`,
            backgroundColor: "#f5f7fb",
        };
        return waterPrintStyle;
    }
}
export default WaterPrint;