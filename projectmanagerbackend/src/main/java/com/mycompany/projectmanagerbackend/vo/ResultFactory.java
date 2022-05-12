/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.projectmanagerbackend.vo;

/**
 *
 * @author Administrateur
 */
public class ResultFactory {

    public static <T> Result<T> getSuccessResult(T data) {
        return new Result(true, data);
    }

    public static <T> Result<T>getSuccessResult(T data, String msg) {
        return new Result(true, msg);
    }

    public static <T> Result<T>getSuccessResultMsg(String msg) {
        return new Result(true, msg);
    }

    public static <T> Result<T> getFailResult(String msg) {
        return new Result(false, msg);
    }
}
