import {observable} from "mobx";
export default class wareHouseStore {
    @observable waredata=[
        {
            key:"1",
            warehouseId:"1233",
            chineseName:"华东总仓库",
            english:"GDGZ234",
            allWare:"是",
            company:"如新公司",
            termination:"终止",
            terminationTime:"2020-08-05",
            wareHouseUrl:"上海市XX区XX路100号",
        }
    ]

}