<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: lichao
  Date: 2016/8/25
  Time: 12:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="wrapper wrapper-content">
    <div class="row">
        <div class="col-sm-12 col-xs-12 col-md-12 col-lg-12">
            <form class="form-horizontal" id="MeterDataEditForm" role="form">

                <input id="comId" name="comId" type="hidden" class="class-comid" value="${mec.comId}">
                <input type="hidden" id="id" name="id" value="${mec.id}"/>
                <div class="form-group">
                    <label class="col-sm-3  control-label"><span class="red">*</span>供热单位类型：</label>

                    <div class="col-sm-7  col-xs-7 col-md-7 col-lg-7">
                        <select id="unitType" name="unitType" class="chosen-select unittype-select form-control inputs-lg">
                            <c:forEach items="${sysDic['orgType']}" var="type">
                                <option <c:if test="${mec.unitType eq type.seq}">selected="selected" </c:if> value="${type.seq}">${type.des}</option>
                            </c:forEach>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3  control-label"><span class="red">*</span>供热单位：</label>

                    <div class="col-sm-7  col-xs-7 col-md-7 col-lg-7">
                        <select id="unitId" name="unitId" class="chosen-select-unit form-control inputs-lg">
                            <c:forEach items="${uList}" var="unit">
                                <option <c:if test="${mec.unitId eq unit.unitId}">selected="selected" </c:if> value="${unit.unitId}">${unit.unitName}</option>
                            </c:forEach>
                        </select>
                    </div>
                </div>
                <div class="form-group">

                    <label class="col-sm-3  col-xs-3 col-md-3 col-lg-3 control-label"><span
                            class="red">*</span>计量名称：</label>

                    <div class="col-sm-7  col-xs-7 col-md-7 col-lg-7">
                       <input  autocomplete="off"name="name" id="name" class="form-control inputs-lg" value="${mec.name}" type="text" maxlength="16" placeholder="请输入计量名称">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3  col-xs-3 col-md-3 col-lg-3 control-label"><span
                            class="red">*</span>计量代码：</label>

                    <div class="col-sm-7  col-xs-7 col-md-7 col-lg-7">
                       <input  autocomplete="off"name="code" id="code" class="form-control inputs-lg" value="${mec.code}" type="text" maxlength="16" placeholder="请输入计量代码">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3  col-xs-3 col-md-3 col-lg-3 control-label"><span
                            class="red"></span>出场编号：</label>

                    <div class="col-sm-7  col-xs-7 col-md-7 col-lg-7">
                       <input  autocomplete="off"name="serialNo" id="serialNo" class="form-control inputs-lg" value="${mec.serialNo}" type="text" maxlength="16" placeholder="请输入出场编号">
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3  control-label"><span class="red">*</span>能源类型：</label>

                    <div class="col-sm-7  col-xs-7 col-md-7 col-lg-7">
                        <select id="energyTypeId" name="energyTypeId" class="chosen-select form-control inputs-lg">
                            <option value="">请选择类型</option>
                            <c:forEach items="${energy}" var="type">
                                <option <c:if test="${mec.energyTypeId eq type.id}">selected="selected" </c:if> value="${type.id}">${type.nameZh}</option>
                            </c:forEach>
                        </select>
                    </div>
                </div>
                <div  class="form-group">
                    <label class="col-sm-3  control-label"><span class="red">*</span>实虚表：</label>

                    <div class="col-sm-7  col-xs-7 col-md-7 col-lg-7">
                        <select id="isreal" name="isreal" class="chosen-select form-control inputs-lg">
                            <option selected="selected" value="">请选择类型</option>
                            <option  value="0">实表</option>
                            <option  value="1">虚表</option>
                        </select>
                    </div>
                </div>
                <div  class="form-group" id="formula" style="display: none;">
                    <label class="col-sm-3  col-xs-3 col-md-3 col-lg-3 control-label"><span class="red">*</span>公式：</label>
                    <div class="col-sm-7">
                        <div class="input-group m-b">
                           <input  autocomplete="off"type="text" name="formula" value="${mec.formula}" class="form-control inputs-lg" maxlength="128" placeholder="请输入公式">
                            <span class="input-group-addon inputs-lg btnFun" style="cursor: pointer">+</span>
                            <span class="input-group-addon inputs-lg btnFun" style="cursor: pointer">-</span>
                            <span class="input-group-addon inputs-lg btnFun" style="cursor: pointer">×</span>
                            <span class="input-group-addon inputs-lg btnFun" style="cursor: pointer">÷</span>
                            <span class="input-group-addon inputs-lg btnFun" style="cursor: pointer">(</span>
                            <span class="input-group-addon inputs-lg btnFun" style="cursor: pointer">)</span>
                            </input>
                        </div>
                    </div>
                </div>
                <div class="form-group" id="isprestore"  style="display: none;">
                    <label class="col-sm-3  control-label"><span class="red">*</span>是否预存：</label>
                    <div class="col-sm-7">
                        <select name="isprestore" class="chosen-select form-control inputs-lg">
                            <option <c:if test="${mec.isprestore eq 0}">selected="selected" </c:if>  value="0">不是</option>
                            <option <c:if test="${mec.isprestore eq 1}">selected="selected" </c:if> value="1">是</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3  control-label"><span class="red">*</span>是否总表：</label>
                    <div class="col-sm-7  col-xs-7 col-md-7 col-lg-7">
                        <select name="istotal" id="istotal" class="chosen-select form-control inputs-lg">
                            <option value="">请选择类型</option>
                            <option <c:if test="${mec.istotal eq 0}">selected="selected" </c:if> value="0">总表</option>
                            <option <c:if test="${mec.istotal eq 1}">selected="selected" </c:if> value="1">单位总表</option>
                            <option <c:if test="${mec.istotal eq 2}">selected="selected" </c:if> value="2">系统总表</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="col-sm-3  control-label"><span class="red">*</span>自动采集：</label>
                    <div class="col-sm-7  col-xs-7 col-md-7 col-lg-7">
                        <select name="isauto" id="isauto" class="chosen-select form-control inputs-lg">
                            <option value="">请选择类型</option>
                            <option <c:if test="${mec.isauto eq 0}">selected="selected" </c:if> value="0">自动采集</option>
                            <option <c:if test="${mec.isauto eq 1}">selected="selected" </c:if> value="1">手工</option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-sm-3  col-xs-3 col-md-3 col-lg-3 control-label"><span
                            class="red">*</span>系数：</label>

                    <div class="col-sm-7  col-xs-7 col-md-7 col-lg-7">
                       <input  autocomplete="off"id="coef" name="coef" class="form-control inputs-lg" value="${mec.coef}" type="text" maxlength="16" placeholder="请输入计量系数">
                    </div>
                </div>
                <div class="form-group" id="tag_div">
                    <label class="col-sm-3  col-xs-3 col-md-3 col-lg-3 control-label"><span
                            class="red">*</span>点表：</label>

                    <div class="col-sm-7  col-xs-7 col-md-7 col-lg-7">
                       <input  autocomplete="off"name="tag" id="tag" class="form-control inputs-lg" type="text" value="${mec.tag}" maxlength="80" placeholder="请输入点表">
                    </div>
                </div>
                <%--<div class="form-group">
                    <label class="col-sm-3  control-label"><span class="red">*</span>删除标识：</label>
                    <div class="col-sm-7  col-xs-7 col-md-7 col-lg-7">
                        <select name="isdelete" id="isdelete" class="chosen-select form-control inputs-lg">
                            <option value="">请选择类型</option>
                            <option <c:if test="${mec.isdelete eq 0}">selected="selected" </c:if> value="0">未删除</option>
                            <option <c:if test="${mec.isdelete eq 1}">selected="selected" </c:if> value="1">软删除标识</option>
                        </select>
                    </div>
                </div>--%>
                <div class="form-group">
                    <label class="col-sm-3  col-xs-3 col-md-3 col-lg-3 control-label"><span class="red"></span>描述：</label>
                    <div class="col-sm-7  col-xs-7 col-md-7 col-lg-7">
                       <input  autocomplete="off"name="depict" id="depict"  value="${mec.depict}" class="form-control inputs-lg" type="text" maxlength="16" placeholder="请输入计量器具描述">
                    </div>
                </div>

            </form>
        </div>
    </div>
</div>
<script>
//以下为修改jQuery Validation插件兼容Bootstrap的方法，没有直接写在插件中是为了便于插件升级
$.validator.setDefaults({
    ignore: ":hidden:not(select)",//校验chosen
    highlight: function (element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-error');
    },
    success: function (element) {
        $(element).closest('.form-group').removeClass('has-error').addClass('has-success');
    },
    errorElement: "span",
    errorPlacement: function (error, element) {
        if (element.is(":radio") || element.is(":checkbox")) {
            error.insertAfter(element.parent().parent());
        } else if(element.is("select")){
            error.insertAfter(element.parent());
        }else if(element.is("input") && $(element).attr('name') == 'formula'){
            error.insertAfter(element.parent().parent());
        }else{
            error.insertAfter(element.parent());
        }
    },
    errorClass: "help-block m-b-none m-t-xs",
    validClass: "help-block m-b-none m-t-none"
});

//以下为官方示例
$(function () {

    // validate signup form on keyup and submit
    var icon = "<i class='fa fa-times-circle'></i> ";

    var $form = $(top.document).find("#MeterDataEditForm");

    $(top.document).find(".unittype-select").chosen().on('change',function () {
        var unittype = $(top.document).find("#unitType").find("option:selected").val();
        getType(unittype);
    });
    $(top.document).find("#isreal").on('change', function () {
        var real = $(this).val();
        if(real==1){
            $("#formula").show();
            $("#isprestore").hide();
        }
        if(real==0){
            $("#formula").hide();
            $("#isprestore").show();
        }
    });
    $(top.document).find("#isauto").on('change', function () {
        var isauto = $(this).val();
        if(isauto==0){
            $("#tag_div").show();
        }
        if(isauto==1){
            $("#tag_div").hide();
        }
    });
    $.each($(top.document).find("#unitType").find('option'),function(index,e){
        if($(e).attr('value') == ${mec.unitType}){
            $(this).attr('selected','selected');
            $(top.document).find("#unitType").change();
        }
    });
    $.each($(top.document).find("#isreal").find('option'),function(index,e){
        if($(e).attr('value') == ${mec.isreal}){
            $(this).attr('selected','selected');
            $(top.document).find("#isreal").change();
        }
    });

    $.validator.addMethod("checkName", function (value, element) {

        var deferred = $.Deferred();//创建一个延迟对象
        if("${mec.name}" == $(top.document).find("#name").val()){
            //deferred.state()有3个状态:pending:还未结束,rejected:失败,resolved:成功
            deferred.resolve();
        }else {
            var name = $(top.document).find('#name').val();
            var unitId = $(top.document).find("#unitId").find("option:selected").val();

            $.ajax({
                url: _web + '/meterData/check/name',
                type: 'POST',
                async: false,//要指定不能异步,必须等待后台服务校验完成再执行后续代码
                data: {name: name, unitId: unitId},
                dataType: 'json',
                success: function (result) {
                    if (!result.flag) {
                        deferred.reject();
                    } else {
                        deferred.resolve();
                    }
                }
            });
        }
                //deferred.state()有3个状态:pending:还未结束,rejected:失败,resolved:成功
                return deferred.state() == "resolved" ? true : false;
            }, "计量名称已存在");

    $.validator.addMethod("checkCode", function (value, element) {
        var code = $(top.document).find('#code').val();
        var comId = $(top.document).find("#comId").val();
        var deferred = $.Deferred();//创建一个延迟对象
        if("${mec.code}" == $(top.document).find("#code").val()){
            //deferred.state()有3个状态:pending:还未结束,rejected:失败,resolved:成功
            deferred.resolve();
        }else {
            $.ajax({
                url: _web + '/meterData/check/code',
                type: 'POST',
                async: false,//要指定不能异步,必须等待后台服务校验完成再执行后续代码
                data: {code: code, comId: comId},
                dataType: 'json',
                success: function (result) {
                    if (!result.flag) {
                        deferred.reject();
                    } else {
                        deferred.resolve();
                    }
                }
            });
        }
        //deferred.state()有3个状态:pending:还未结束,rejected:失败,resolved:成功
        return deferred.state() == "resolved" ? true : false;
    }, "计量代码已存在");
    $.validator.addMethod("checkSerialNo", function (value, element) {
        var serialNo = $(top.document).find('#serialNo').val();
        var deferred = $.Deferred();//创建一个延迟对象
        if("${mec.serialNo}" == $(top.document).find("#serialNo").val()){
            //deferred.state()有3个状态:pending:还未结束,rejected:失败,resolved:成功
            deferred.resolve();
        }else {
            $.ajax({
                url: _web + '/meterData/check/serialno',
                type: 'POST',
                async: false,//要指定不能异步,必须等待后台服务校验完成再执行后续代码
                data: {serialNo: serialNo},
                dataType: 'json',
                success: function (result) {
                    if (!result.flag) {
                        deferred.reject();
                    } else {
                        deferred.resolve();
                    }
                }
            });
        }
        //deferred.state()有3个状态:pending:还未结束,rejected:失败,resolved:成功
        return deferred.state() == "resolved" ? true : false;
    }, "出场编号已存在");
    // 校验公式
    $.validator.addMethod("checkFormula", function(value, element) {
        var reg=/^[(A\d{5})\.\+\-\×\÷]+$/;
        if(!reg.test(value)){
            return false;
        }
        var deferred = $.Deferred();//创建一个延迟对象
        $.ajax({
            url: _web + '/meterData/check/formula',
            type: 'POST',
            async: false,//要指定不能异步,必须等待后台服务校验完成再执行后续代码
            data: {formula:value},
            dataType: 'json',
            success: function (data) {
                if (data.result) {
                    deferred.reject();
                    return false;
                } else {
                    deferred.resolve();
                    return true;
                }
            }
        });
        return deferred.state() == "resolved" ? true : false;
    }, "请输入正确的公式");
    $(top.document).on('mousedown','input:not(:submit):not(:button)',function(){
        $(this).closest('.form-group').removeClass('has-error');
        $(this).siblings('.help-block').remove();
    });
    //下拉框信息绑定
    //下拉框js
    $(top.document).find(".chosen-select:not([name='searchComp'])").chosen().on('change',function () {
        if ($(this).find('option:first').val() != $(this).val()) {
            $(this).siblings('.help-block').remove();
        }
        return false;
    });

    $form.validate({
        onsubmit: true,// 是否在提交是验证
        //移开光标:如果有内容,则进行验证
        onfocusout: function (element) {
            if ($(element).val() == null || $(element).val() == "") {
                $(element).closest('.form-group').removeClass('has-error');
                $(element).siblings('.help-block').remove();
            } else {
                $(element).valid();
            }
        },
        onkeyup: false,// 是否在敲击键盘时验证
        rules: {
            name: {
                required: true,
                minlength: 2,
                checkName: true
            },
            code: {
                required: true,
                minlength: 2,
                checkCode: true
            },
            serialNo: {
                required: true,
                checkSerialNo:true
            },
            energyTypeId: {
                required: true
            },
            isreal: {
                required: true
            },
            istotal: {
                required:true
            },
            isauto: {
                required:true
            },
            unitType: {
                required:true
            },
            coef: {
                required:true
            },
            tag: {
                required:true
            },
            isprestore: {
                required:true
            }
            /*,
            isdelete: {
                required:true
            }*/
            ,
            formula: {
                checkFormula:true
            }
        },
        messages: {
            name: {
                required: icon + "请输入计量名称",
                minlength: icon + "计量名称必须2个字符以上"
            },
            code: {
                required: icon + "请输入计量代码"
            },
            energyTypeId: {
                required: icon + "请输入能源类型"
            },
            isreal: {
                required: icon + "请输入实虚表"
            },
            istotal: {
                required: icon + "请输入总表"
            },
            isauto: {
                required: icon + "请输入采集"
            },
            unitType: {
                required: icon + "请输入用能单位类型"
            },
            coef: {
                required: icon + "请输入系数"
            },
            tag: {
                required: icon + "请输入点表"
            },
            isprestore: {
                required: icon + "请输入预存值"
            }/*,
            isdelete: {
                required: icon + "请输入删除标识"
            }*/
        },
        submitHandler: function () {
            var index = top.layer.load(1, {
                shade: [0.1, '#fff'] //0.1透明度的白色背景
            });
            //alert($form.serialize());
            console.log($form.serialize());
            $.ajax({
                url: _web + '/meterData/editvalue',
                data: $form.serialize(),
                type: 'POST',
                dataType: 'json',
                success: function (result) {
                    if (result.flag) {
                        top.layer.closeAll();
                        top.layer.msg(result.msg);
                        queryMeter(1);
                    } else {
                        top.layer.close(index);
                        top.layer.msg(result.msg);
                    }
                }
            });
        }
    });

});

/**
* 公式点击运算符
 */
$(top.document).delegate(".btnFun",'click', function () {
    var v = $(top.document).find("input[name='formula']").val()
    if(v==''||v==null){
        top.layer.msg("请填写公式");
        return false;
    }else{
        $(top.document).find("input[name='formula']").val(v+$(this).text());
    }
});

function getType(type){
    $.ajax({
        url: _web + '/meterData/unit',
        type: 'POST',
        dataType: 'json',
        data:{unitType:type},
        success: function (result) {
            var data = result.list;
            var optionHtml='';
            for(var i =0;i<data.length;i++){
                optionHtml+='<option  value="'+data[i].unitId+'">'+data[i].unitName+'</option>'
            }
            $(top.document).find("#unitId").append(optionHtml);
            //下拉框js
            $(top.document).find("#unitId").chosen();
        }
    });
}
</script>