import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-liste-utilisateurs-actifs',
  templateUrl: './liste-utilisateurs-actifs.component.html',
  styleUrls: ['./liste-utilisateurs-actifs.component.css']
})
export class ListeUtilisateursActifsComponent implements OnInit {

  bread =  [
    {
      fullPath: "/home",
      name:'<i class="fas fa-home">&nbsp;>&nbsp;',
      active:false
    },
    {
      fullPath: "/home/liste-utilsateurs",
      name:"Liste des utilisateurs actifs&nbsp;>&nbsp;",
      active:true
    }
  ];
  fetchedDemandsData:any;
  dataSource:any;

  userType:String;

  constructor(
    private userservice: UsersService,
    private sanitizer: DomSanitizer,
    private spinner:NgxSpinnerService,
    private actived:ActivatedRoute
  ) {


    this._getUsers();
  }

  _getUsers()
  {
    this.spinner.show();
    this.fetchedDemandsData = this.userservice._getUsers("actifs")
    .subscribe(
      (datas)=>{
        this.spinner.hide();
        this.fetchedDemandsData = datas;

        this.dataSource = this.fetchedDemandsData ;

        this.dataSource.forEach(element =>
        {
          element.name = element.name;
        });

        this.dataSource.reverse();
      },
      (err)=>{
        console.log(err);
      },
    );
  }

  ngOnInit(): void {
  }

  settings = {
    actions:
    {
      columnTitle: 'Opérations',
    },

    pager:
    {
      display:true,
      perPage:10
    },

    attr: {
      class: 'table myI'
    },
    edit:{
      editButtonContent:'<i class="fas fa-pen-fancy"></i>&nbsp;&nbsp;',
      saveButtonContent:'<i class="fas fa-check-circle fa-2x"></i>',
      cancelButtonContent:'&nbsp;&nbsp;<i class="fas fa-times-circle fa-2x"></i>',
      confirmSave:true
    },
    add:{
      addButtonContent: '<i class="fas fa-plus-circle fa-2x"></i>',
      createButtonContent:'<i class="fas fa-check-circle fa-2x"></i>',
      cancelButtonContent:'&nbsp;&nbsp;<i class="fas fa-times-circle fa-2x"></i>',
      confirmCreate:true
    },
    delete:
    {
      confirmDelete:true,
      deleteButtonContent:'<i class="fas fa-trash-alt"></i>'
    },
    columns: {
      name: {
        title: 'Nom',
      },
      email: {
        title: 'Mail'
      },
      telephone: {
        title: 'Telephone',
        valuePrepareFunction: (telTab) => {
          let telephones = "";
          telTab.forEach(element =>
          {
              telephones += ", "+element ;
          });

          return telephones
        }
      },
      isActive:
      {
        type:'html',
        title:'Statut',
        valuePrepareFunction:(status)=>{
          if(status == false)
            return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#ffbb33;height:auto;width:auto;text-align: center !important;"><strong style="color:black"> Non activé </strong> </div>')
          else
          return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#00C851;height:auto;width:auto;text-align: center !important;"><strong style="color:black"> Activé </strong> </div>')
        }
      }
    }
  };

  _confirmCreate(ev)
  {
    let newData = ev.newData;
    Swal.fire({
      icon:'question',
      title:'Continuer ?',
      confirmButtonText:'OUI',
      confirmButtonColor:'#00C851',
      showCancelButton:true,
      cancelButtonText:'Annuler',
      cancelButtonColor:'#ff4444'
    }).then( response =>{

      if(response.isConfirmed)
      {
        this.userservice._createUser(newData)
        .subscribe(
          ()=>{
            Swal.fire({
              icon:'success',
              title:'Ajout éffectué avec succès'
            });
            this._getUsers();
            ev.confirm.resolve();
          },
          ()=>{
            Swal.fire({
              icon:'error',
              title:'Oops ... Quelque chose s\'est mal passé. Veuillez reéssayer. Le client saisie n\'existe peut-être pas'
            })
          }
        );
      }

    });
  }

  _confirmDelete(ev)
  {
    let data = ev.data;
    Swal.fire({
      icon:'info',
      title:'Êtes-vous sûr ?',
      confirmButtonText:'Valider',
      confirmButtonColor:'#00C851',
      showCancelButton:true,
      cancelButtonText:'Annuler',
      cancelButtonColor:'#ff4444'
    }).then( response=>{
      if(response.isConfirmed)
      {
        this.userservice._DeleteUser(data._id)
        .subscribe(
          ()=>{
            Swal.fire({
              icon:'success',
              title:'Suppression éffectuée avec succès'
            })
            this._getUsers();
            ev.confirm.resolve()
          }
        );
      }
    } )
  }

  _confirmUpdate(ev)
  {
    console.log(ev)
    ev.confirm.resolve()

  }




}
