package com.huak.workorder.vo;

import com.huak.common.StringUtils;

import java.io.Serializable;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Copyright (C), 2009-2012, 北京华热科技发展有限公司.<BR>
 * ProjectName:emc<BR>
 * File name:  com.huak.workorder.vo<BR>
 * Author:  lc  <BR>
 * Project:emc    <BR>
 * Version: v 1.0      <BR>
 * Date: 2017-11-09<BR>
 * Description:  工单视图   <BR>
 * Function List:  <BR>
 */
public class WorkOrderInfoDetail implements Serializable {
    private static final long serialVersionUID = -7153362290008631096L;
    private String id;

    private String code;

    private Byte type;

    private String name;

    private String content;

    private String startTime;

    private String finishTime;

    private String createTime;

    private String creator;

    private Integer status;

    private String finish;

    private String actualFinishTime;

    private String comid;

    private String reason;

    private String monitor;

    private String takor;
    private String finishReason;

    private Integer readStauts;
    private String creatorName;
    private String monitorName;
    private String takorName;
    private String finishName;


    public WorkOrderInfoDetail(String id, String code, Byte type, String name, String content, String startTime, String finishTime, String createTime, String creator, Integer status, String finish, String actualFinishTime, String comid, String reason, String monitor, String takor, String finishReason, Integer readStauts, String creatorName, String monitorName, String takorName, String finishName) {
        this.id = id;
        this.code = code;
        this.type = type;
        this.name = name;
        this.content = content;
        this.startTime = startTime;
        this.finishTime = finishTime;
        this.createTime = createTime;
        this.creator = creator;
        this.status = status;
        this.finish = finish;
        this.actualFinishTime = actualFinishTime;
        this.comid = comid;
        this.reason = reason;
        this.monitor = monitor;
        this.takor = takor;
        this.finishReason = finishReason;
        this.readStauts = readStauts;
        this.creatorName = creatorName;
        this.monitorName = monitorName;
        this.takorName = takorName;
        this.finishName = finishName;
    }

    public WorkOrderInfoDetail() {
        super();
    }

    public String getCreatorName() {
        return creatorName;
    }

    public String getFinishReason() {
        return finishReason;
    }

    public void setFinishReason(String finishReason) {
        this.finishReason = finishReason;
    }

    public Integer getReadStauts() {
        return readStauts;
    }

    public void setReadStauts(Integer readStauts) {
        this.readStauts = readStauts;
    }

    public void setCreatorName(String creatorName) {
        this.creatorName = creatorName;
    }

    public String getMonitorName() {
        return monitorName;
    }

    public void setMonitorName(String monitorName) {
        this.monitorName = monitorName;
    }

    public String getTakorName() {
        return takorName;
    }

    public void setTakorName(String takorName) {
        this.takorName = takorName;
    }

    public String getFinishName() {
        return finishName;
    }

    public void setFinishName(String finishName) {
        this.finishName = finishName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id == null ? null : id.trim();
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code == null ? null : code.trim();
    }

    public Byte getType() {
        return type;
    }

    public void setType(Byte type) {
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

    public String getStartTime() throws ParseException {
        if(!StringUtils.isEmpty(startTime)){
            DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date date = format.parse(startTime);
            startTime = format.format(date);
        }
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getFinishTime() throws ParseException {
        if(!StringUtils.isEmpty(finishTime)){
            DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date date = format.parse(finishTime);
            finishTime = format.format(date);
        }
        return finishTime;
    }

    public void setFinishTime(String finishTime) {
        this.finishTime = finishTime;
    }

    public String getCreateTime() throws ParseException {
        if(!StringUtils.isEmpty(createTime)){
            DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date date = format.parse(createTime);
            createTime = format.format(date);
        }
        return createTime;
    }

    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator == null ? null : creator.trim();
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getFinish() {
        return finish;
    }

    public void setFinish(String finish) {
        this.finish = finish == null ? null : finish.trim();
    }

    public String getActualFinishTime() throws ParseException {
        if(!StringUtils.isEmpty(actualFinishTime)){
            DateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            Date date = format.parse(actualFinishTime);
            actualFinishTime = format.format(date);
        }
        return actualFinishTime;
    }

    public void setActualFinishTime(String actualFinishTime) {
        this.actualFinishTime = actualFinishTime;
    }

    public String getComid() {
        return comid;
    }

    public void setComid(String comid) {
        this.comid = comid == null ? null : comid.trim();
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason == null ? null : reason.trim();
    }

    public String getMonitor() {
        return monitor;
    }

    public void setMonitor(String monitor) {
        this.monitor = monitor == null ? null : monitor.trim();
    }

    public String getTakor() {
        return takor;
    }

    public void setTakor(String takor) {
        this.takor = takor == null ? null : takor.trim();
    }
}
