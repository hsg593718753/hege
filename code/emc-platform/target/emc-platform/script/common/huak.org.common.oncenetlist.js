/**
 * Copyright (C), 2009-2012, 北京华热科技发展有限公司.<BR>
 * Author:  bin  <BR>
 * Project:eccp    <BR>
 * Version: v 1.0      <BR>
 * Date: 2016/8/25<BR>
 */
$(function () {
    init();
    getCommonOncenetList();
});
function init(){
    var config = {
        '.chosen-select': {},
        '.chosen-select-deselect': {
            allow_single_deselect: true
        },
        '.chosen-select-no-single': {
            disable_search_threshold: 10
        },
        '.chosen-select-no-results': {
            no_results_text: 'Oops, nothing found!'
        },
        '.chosen-select-width': {
            width: "10%"
        }
    }
    for (var selector in config) {
        $(selector).chosen(config[selector]);
    }
}
/* 查询字典列表 */
function getCommonOncenetList() {
    var index = layer.load(1, {
        shade: [0.1, '#fff'] //0.1透明度的白色背景
    });
    $.ajax({
        url: ctx + '/common/oncenetlist',
        timeout: 15000,
        type: 'POST',//注意在传参数时，加：_method:'PATCH'　将对应后台的PATCH请求方法
        dataType: 'json',
        data: $("#common-search-oncenetform").serialize(),
        success: function (result) {
            $(".oncenet_pagination").pagination({
                pageNo: result.list.page.curPage,
                rowTotal: result.list.page.totalRow,
                pageNoId: "oncenet_pageNo",//页数id
                pageGoId: "oncenet_page-go",
                _callBack: getCommonOncenetList
            });
            // 附上模板
            $("#common-oncenet-tbody").setTemplateElement("common-oncenet-datalist");
            // 给模板加载数据
            $("#common-oncenet-tbody").processTemplate(result.list);
            $('.i-checks').iCheck({
                checkboxClass: 'icheckbox_square-green',
                radioClass: 'iradio_square-green'
            });
            layer.close(index);
        },
        error: function () {
            layer.close(index);
            layer.msg("加载失败");
        },
        complete: function (XMLHttpRequest, status) { //请求完成后最终执行参数
            layer.close(index);
            if (status == 'timeout') {//超时,status还有success,error等值的情况
                layer.msg("加载超时");
            }
        }
    });
}

/*查询*/
var searchNetList = function(){
    getCommonOncenetList();
}


var setValues = function(){
    var $this = top.documentText;
    var $span = $this.parent();
    var $textInput=$span.siblings('input:text');
    var $hiddenInput=$span.siblings('input:hidden');
    var objects=  getCheckItems("common-oncenet-list");
    if(objects.length>1){
        parent.layer.msg('只能选择一个管网信息！', {shade: 0.3});
        return false;
    }
    if(objects.length<1){
        parent.layer.msg('请选择一个管网信息！', {shade: 0.3});
        return false;
    }
    $($hiddenInput).val(objects[0].id);
    $($textInput).val(objects[0].name);
    parent.layer.close(top.layerIndex);
    $(top.documentWindows).remove(".common-oncenet-window");
}


