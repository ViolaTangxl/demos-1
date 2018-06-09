import { observable, computed, action } from "mobx";

class StoreOne {
    @observable public number: number = 0;
    @observable public isSpin: boolean = false;
    /**
     * 加一
     */
    @action public addOne(): void {
        this.asyncAddFunc();
    }

    /**
     * 异步加一（一秒后+1）
     */
    private asyncAddFunc(): void {
        try {
            this.changeSpin(true);
            const timeOut = setTimeout(() => {
                this.changeSpin(false);
                this.number++;
                clearTimeout(timeOut);
            }, 1000);
        } catch (err) {
            this.changeSpin(false);
            throw new Error("action failed with: " + err.message);
        }
    }

    /**
     * 减一
     */
    @action public reduceOne(): void {
        this.number--;
    }

    /**
     * 改变遮罩层的显示或隐藏
     * @param isShow 是否显示
     */
    private changeSpin(isShow: boolean): void {
        this.isSpin = isShow;
    }

    /**
     * 获取number
     */
    @computed public get getNumber(): number {
        return this.number;
    }
}
const storeOne = new StoreOne();
export default storeOne;