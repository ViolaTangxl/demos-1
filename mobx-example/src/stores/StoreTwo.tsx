import { observable, computed, action } from "mobx";
class StoreTwo {
    @observable public number: number = 0;
    /**
     * 加一
     */
    @action public addOne(): void {
        this.number++;
    }

    /**
     * 减一
     */
    @action public reduceOne(): void {
        this.number--;
    }

    /**
     * 获取number
     */
    @computed public get getNumber(): number {
        return this.number;
    }
}
const storeTwo = new StoreTwo();
export default storeTwo;