export default {

    searchEva:'/NSChina/selectSysOrderEvaluation',
    searchMsg1:'/NSChina/selectSysUserComments',
    searchPay:'/NSChina/selectSysPaymentMethod',
    searchNews:'/NSChina/selectSysMessageTemplate',


    addPay:'/NSChina/insertSysPaymentMethod',
    eidtPay:'/NSChina/updateSysPaymentMethod',
    addNews:'/NSChina/insertSysMessageTemplate',
    eidtNews:'/NSChina/updateSysMessageTemplate',

    changeStatus:'/NSChina/updateSysMessageTemplate',
    changePayStatus:'/NSChina/updateSysPaymentMethod',



    //////////////////////////////////////////账号列表////////////////////////////////
    getRole: 'NSChina/sysAccNumber/getAccNumberRole',

    getAllRole: 'NSChina/sysAccNumber/roleTree',
    //修改账户状态
    disableUser: 'NSChina/sysAccNumber/updateAccStatus',
    //条件查询
    searchMsg: 'NSChina/sysAccNumber/selectAccNumber',
    //新增账号列表
    saveSure: 'NSChina/sysAccNumber/addSysAccNumber',
    //保存账号信息
    saveEdit: 'NSChina/sysAccNumber/updateAccountNumber',
/////////////////////////////////////////////////大区管理////////////////////////////////
    //渲染大区列表

    //条件搜索大区信息
    searchArea: 'NSChina/selectSysRegionalManagement',
    //删除大区数据
    deleteArea: 'NSChina/deleteSysRegionalManagement',
    //修改保存
    editAreaMsg: 'NSChina/updateSysRegionalManagement',
    //保存新增数据
    newAreaMsg: 'NSChina/insertSysRegionalManagement',
    ///获取大区管理区域
    getArea:'NSChina/selectSysManageArea',
//////////////////////////////////////////////角色列表//////////////////////////////////////
    //角色列表查询
    roleSearch: 'NSChina/sysRole/selectRole',
    //保存修改数据
    roleXiuGai: 'NSChina/sysRole/updateRole',
    //新增角色数据
    roleNewAdd: 'NSChina/sysRole/addRole',
    //点击修改状态
    disableUser1: 'NSChina/sysRole/updateRoleStatus',
    //获取全部角
    getRoleA: 'NSChina/sysRole/getAllModuleTree',
    //获取已有角色
    getRoleModTree:'NSChina/sysRole/getRoleModTree',

    ////////////////////////////////////////操作日志//////////////////////////////////////////////
    ///查询/数据渲染
    getOpera: 'NSChina/OperationLog/selectOperationLog',

    //////////////////////////////////////////////////基本设置///////////////////////////////////
    setting:'NSChina/insertSysBasicSettings'


};