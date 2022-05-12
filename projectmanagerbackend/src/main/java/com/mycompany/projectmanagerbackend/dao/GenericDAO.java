
package com.mycompany.projectmanagerbackend.dao;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author fgotl
 */
public interface GenericDAO <T,ID>{
    T find(ID id);
    void persist(T obj);
    T merge(T obj);
    void remove(T obj);
}
