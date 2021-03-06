<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>用户列表</title>
    <link rel="shortcut icon" href="../favicon.ico">
    <!---->
    <link rel="stylesheet" href="../css/ztree/css/metroStyle/metroStyle.css" type="text/css">
    <link href="../css/plugins/datapicker/daterangepicker-bs3.css"rel="stylesheet">
    <link href="../css/plugins/datapicker/font-awesome.min.css">
    <link href="../css/plugins/datapicker/bootstrap.min.css">
    <link href="../css/bootstrap.min.css?v=3.3.6" rel="stylesheet">
    <link href="../css/plugins/bootstrap-table/bootstrap-table.min.css" rel="stylesheet">
    <link href="../css/font-awesome.css?v=4.4.0" rel="stylesheet">
    <link href="../css/animate.css" rel="stylesheet">
    <link href="../css/style.css?v=4.1.0" rel="stylesheet">
    <link href="../css/mystyle.css" rel="stylesheet">
    <!-- 全局js -->
    <script src="../js/jquery.min.js?v=2.1.4"></script>
    <script src="../js/bootstrap.min.js?v=3.3.6"></script>
    <!-- layerDate plugin javascript -->
    <script type="text/javascript" src="../js/plugins/daterangepicker/moment.js"> </script>
    <script type="text/javascript" src="../js/plugins/daterangepicker/daterangepicker.js"></script>
    <!-- Bootstrap table -->
    <script src="../js/plugins/bootstrap-table/bootstrap-table.min.js"></script>
    <script src="../js/plugins/bootstrap-table/bootstrap-table-mobile.min.js"></script>
    <script src="../js/plugins/bootstrap-table/locale/bootstrap-table-zh-CN.min.js"></script>
    <!--下拉框chosen-->
    <script src="../js/plugins/chosen/chosen.jquery.js"></script>
    <!-- layerDate plugin javascript -->
    <script src="../js/plugins/layer/laydate/laydate.js"></script>
    <script type="text/javascript" src="../css/ztree/js/jquery.ztree.core.js"></script>
    <script type="text/javascript" src="../css/ztree/js/jquery.ztree.excheck.js"></script>
    <script type="text/javascript" src="../css/ztree/js/jquery.ztree.exedit.js"></script>

    <script type="application/javascript">

        $(function() {
            //日期范围限制
            var start = {
                elem: '#start',
                format: 'YYYY/MM/DD',
                //min: laydate.now(), //设定最小日期为当前日期
                max: '2099-06-16', //最大日期
                istime: true,
                istoday: false,
                choose: function (datas) {
                    end.min = datas; //开始日选好后，重置结束日的最小日期
                    end.start = datas //将结束日的初始值设定为开始日
                }
            };
            var end = {
                elem: '#end',
                format: 'YYYY/MM/DD',
                max: '2099-06-16',
                istime: true,
                istoday: false,
                choose: function (datas) {
                    start.max = datas; //结束日选好后，重置开始日的最大日期
                }
            };
            laydate(start);
            laydate(end);
            $('#reservation').daterangepicker(null, function(start, end, label) {
                console.log(start.toISOString(), end.toISOString(), label);
            });

            //页面说明
            //页面说明
            console.info("页面说明：\n左侧组织树:该系统登录用户选择完企业或者公司后的组织机构。\n" +
                    "右侧列表：展示左侧选中组织的员工信息列表。\n" +
                    "功能：\n" +
                    "【添加】【删除】【修改】【检索】【重置】【导出EXCEL】\n" +
                    "字段：\n员工主键、员工名称、所属组织机构、员工编号、地址、手机号、年龄、性别、邮箱\n" +
                    "创建人、创建人组织、创建时间、修改人、修改人组织、修改时间、是否删除" );



            //bootstrapTable
            var bt_data = [{
                "Tid": "1",
                "jsmc": "李超",
                "bz": "001",
                "phone":"15676000000",
                "mail":"77777@qq.com",
                "cjjg": "立水桥下",
                "cjz": "超级管理员",
                "cjsj": "2017-01-01 15:23:23",
                "cz": '<button type="button" class="btn btn-xs btn-info" onclick="editRole()"> <i class="fa fa-edit"></i>编辑</button>&nbsp;<button type="button" class="btn btn-xs btn-danger" onclick="deleteRoles()"><i class="fa fa-trash-o"></i>删除</button>&nbsp;'
            }, {
                "Tid": "2",
                "jsmc": "李超",
                "bz": "002",
                "phone":"15676000000",
                "mail":"77777@qq.com",
                "cjjg": "立水桥下",
                "cjz": "超级管理员",
                "cjsj": "2017-01-01 15:23:56",
                "cz": '<button type="button" class="btn btn-xs btn-info" onclick="editRole()"> <i class="fa fa-edit"></i>编辑</button>&nbsp;<button type="button" class="btn btn-xs btn-danger" onclick="deleteRoles()"><i class="fa fa-trash-o"></i>删除</button>&nbsp;'
            }, {
                "Tid": "2",
                "jsmc": "李超",
                "bz": "003",
                "cjjg": "立水桥下",
                "cjz": "超级管理员",
                "cjsj": "2017-01-01 15:23:56",
                "cz": '<button type="button" class="btn btn-xs btn-info" onclick="editRole()"> <i class="fa fa-edit"></i>编辑</button>&nbsp;<button type="button" class="btn btn-xs btn-danger" onclick="deleteRoles()"><i class="fa fa-trash-o"></i>删除</button>&nbsp;'
            }, {
                "Tid": "2",
                "jsmc": "李超",
                "bz": "004",
                "cjjg": "立水桥下",
                "phone":"15676000000",
                "mail":"77777@qq.com",
                "cjz": "超级管理员",
                "cjsj": "2017-01-01 15:23:56",
                "cz": '<button type="button" class="btn btn-xs btn-info" onclick="editRole()"> <i class="fa fa-edit"></i>编辑</button>&nbsp;<button type="button" class="btn btn-xs btn-danger" onclick="deleteRoles()"><i class="fa fa-trash-o"></i>删除</button>&nbsp;'
            }, {
                "Tid": "5",
                "First": "郭敬明",
                "sex": "男",
                "Score": "100"
            }, {
                "Tid": "6",
                "First": "马云",
                "sex": "男",
                "Score": "77"
            }, {
                "Tid": "7",
                "First": "范爷",
                "sex": "女",
                "Score": "87"
            }, {
                "Tid": "8",
                "First": "范爷",
                "sex": "女",
                "Score": "87"
            }, {
                "Tid": "9",
                "First": "范爷",
                "sex": "女",
                "Score": "87"
            }, {
                "Tid": "10",
                "First": "范爷",
                "sex": "女",
                "Score": "87"
            }];


            $('#exampleTableFromData').bootstrapTable({
                data: bt_data,
                pagination:true,
                striped:true,
                pageSize:2,
                pageList:[2,10,30],
                height:480
                // mobileResponsive: true,
            });

            //
            $.fn.zTree.init($("#treeDemo"), setting, zNodes);
        });

        var setting = {
            view: {
                selectedMulti: false
            },
            data: {
                simpleData: {
                    enable: true
                }
            }
        };

        var zNodes =[
            {id:0,pId:null,name:"华热科技发展有限公司", open:true},
            { id:1, pId:0, name:"热力集团", open:true},
            { id:11, pId:1, name:"海淀分公司", open:true},
            { id:12, pId:1, name:"朝一分公司", open:true},
            { id:111, pId:11, name:"双榆树中心", open:true},
            { id:112, pId:11, name:"海淀技术部"},
            { id:1111, pId:111, name:"双榆树热力站"},
            { id:1112, pId:111, name:"小营热源厂"},
            { id:121, pId:12, name:"SOHO热力站"},
            { id:2, pId:0, name:"天津大港公司", open:true},
            { id:21, pId:2, name:"第一分公司"},
            { id:22, pId:2, name:"第二分公司"},
            { id:211, pId:21, name:"团结村换热站"},
            { id:212, pId:21, name:"设计院换热站"},
            { id:221, pId:22, name:"xx换热站"},
            { id:3, pId:0, name:"长春热力集团"},
            { id:4, pId:0, name:"亚泰热力公司"},
            { id:5, pId:0,name:"捷能热力电站有限公司"}
        ];



    </script>
</head>
<body class="gray-bg">
<div class="wrapper wrapper-content animated fadeInRight">
    <div class="row">
        <div class="col-sm-3 col-xs-3 col-md-3 col-lg-3">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    <div>
                        <ul id="treeDemo" class="ztree"></ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-sm-9 col-xs-9 col-md-9 col-lg-9">
            <div class="ibox float-e-margins">
                <div class="ibox-content">
                    <form id="roles-form" role="form" class="form-horizontal m-t">
                        <input type="hidden" name="_method" value="PATCH">
                        <input type="hidden" id="pageNo" name="pageNo" value="1">

                        <div class="row">
                            <div class="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label class="control-label col-sm-5 col-xs-5 col-md-5 col-lg-5">员工名称</label>
                                    <div class="col-sm-7 col-xs-7 col-md-7 col-lg-7">
                                        <input type="text" class="form-control" name="roleName" placeholder="请输入员工名称">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label class="control-label col-sm-5 col-xs-5 col-md-5 col-lg-5">创建机构</label>
                                    <div class="col-sm-7 col-xs-7 col-md-7 col-lg-7">
                                        <input type="text" class="form-control" name="roleName" placeholder="请输入创建机构">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label class="control-label col-sm-5 col-xs-5 col-md-5 col-lg-5">创建者</label>
                                    <div class="col-sm-7 col-xs-7 col-md-7 col-lg-7">
                                        <input type="text" class="form-control" name="roleName" placeholder="请输入创建者">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <!--<div class="col-sm-4 col-xs-4 col-md-4 col-lg-4">-->
                                <!--<div class="form-group">-->
                                    <!--<label class="control-label col-sm-5 col-xs-5 col-md-5 col-lg-5">创建时间</label>-->
                                    <!--<div class="col-sm-7 col-xs-7 col-md-7 col-lg-7">-->
                                        <!--<div class="input-prepend input-group">-->
                                            <!--<span class="add-on input-group-addon"><i class="glyphicon glyphicon-calendar fa fa-calendar"></i></span>-->
                                            <!--<input type="text" readonly  style="width: 150px;font-size: 13px;" name="reservation" id="reservation" class="form-control" value="2014-5-21 - 2014-6-21" />-->
                                        <!--</div>-->
                                    <!--</div>-->
                                <!--</div>-->
                            <!--</div>-->

                            <div class="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label class="control-label col-sm-5 col-xs-5 col-md-5 col-lg-5">手机号</label>
                                    <div class="col-sm-7 col-xs-7 col-md-7 col-lg-7">
                                        <input type="text" class="form-control" name="roleName" placeholder="请输入手机号">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label class="control-label col-sm-5 col-xs-5 col-md-5 col-lg-5">邮箱</label>
                                    <div class="col-sm-7 col-xs-7 col-md-7 col-lg-7">
                                        <input type="text" class="form-control" name="roleName" placeholder="请输入邮箱">
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label class="control-label col-sm-5 col-xs-5 col-md-5 col-lg-5">住址</label>
                                    <div class="col-sm-7 col-xs-7 col-md-7 col-lg-7">
                                        <input type="text" class="form-control" name="roleName" placeholder="请输入住址">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                                <div class="form-group">
                                    <label class="control-label col-sm-5 col-xs-5 col-md-5 col-lg-5">性别</label>
                                    <div class=" col-sm-7 col-xs-7 col-md-7 col-lg-7">
                                        <select name="useStatus" class="chosen-select form-control">
                                            <option value="">全部</option>
                                            <option value="0">男</option>
                                            <option value="1">女</option>
                                        </select>
                                    </div>
                                </div>
                            </div>


                            <div class="col-sm-8 col-xs-8 col-md-8 col-lg-8">
                                <div class="form-group">
                                    <label class="control-label col-sm-2 col-xs-2 col-md-2 col-lg-2">创建时间</label>
                                    <div class="col-sm-5 col-xs-5 col-md-5 col-lg-5">
                                        <input id="start" class="laydate-icon form-control layer-date" placeholder="请输入开始时间">
                                    </div>
                                    <div class="col-sm-4 col-xs-5 col-md-5 col-lg-5">
                                        <input id="end" class="laydate-icon form-control layer-date" placeholder="请输入结束时间">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-7 col-xs-7 col-md-7 col-lg-7  btn-group">

                                <button type="button" class="btn btn-sm btn-info" onclick="addRole()">
                                    <i class="fa fa-plus"></i>添加
                                </button>
                            </div>
                            <div class="btn-tools col-sm-4 col-xs-4 col-md-4 col-lg-4">

                                <button type="button" class="btn btn-sm btn-primary" onclick="getRoleList()"> 搜索
                                </button>
                                <button type="button" class="btn btn-sm btn-success emc-reset"> 重置</button>
                                <button type="button" class="btn btn-sm btn-primary" onclick="getRoleList()"> 导出Excel
                                </button>

                            </div>
                        </div>
                    </form>
                    <div class="example">
                        <table id="exampleTableFromData" data-mobile-responsive="true">
                            <thead>
                            <tr>
                                <th data-field="Tid">ID</th>
                                <th data-field="jsmc">员工名称</th>
                                <th data-field="bz">员工编号</th>
                                <th data-field="phone">手机号</th>
                                <th data-field="mail">邮箱</th>
                                <th data-field="cjjg">地址</th>
                                <th data-field="cjsj">创建时间</th>
                                <th data-field="cz">操作</th>
                            </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>