import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from "ngx-spinner";
import { CouponsService } from '../services/coupons.service';
@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  bread =  [
    {
      fullPath: "/home",
      name:'<i class="fas fa-home">&nbsp;>&nbsp;',
      active:false
    },
    {
      fullPath: "/home/liste-demandes",
      name:"Add Projet&nbsp;>&nbsp;",
      active:true
    }
  ];
  fetchedData:any;
  dataSource:any;

  constructor(
    private coupons: CouponsService,
    private sanitizer: DomSanitizer,
    private spinner:NgxSpinnerService
  ) {

   }


  _getCoupons()
  {
    this.coupons._getCoupons()
    .subscribe(
      (coupons)=>{
          this.fetchedData = coupons;
          this.dataSource = this.fetchedData;

          this.dataSource.forEach(element => {
                element.userName = element.userId.name;
          });
      },
      (err)=>{
          console.log(err);

      }
    )
  }

  ngOnInit(): void {

    this._getCoupons();
  }

  settings = {
    actions:
    {
      columnTitle: 'Opérations',
      add:true,
      edit:true,
      delete:true,
      // custom:[
      //   {
      //     name:'Valider',
      //     title:'<i class="fas fa-forward"></i>&nbsp;&nbsp;&nbsp;'
      //   }
      // ],
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
      userName: {
        title: 'Nom Projet',
      },
      name:
      {
        title:"Nombre de Tache",
      },
      code:
      {
        title:"Date de Debut de tache",
      },
      amount: {
        title: 'Compagnie'
      },
      status:
      {
        type:'html',
        title:'Statut',
        valuePrepareFunction:(status)=>{
          if(status != false)
            return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#ffbb33;height:auto;width:auto;text-align: center !important;"><strong style="color:black"> En cours </strong> </div>')
          else
          return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#00C851;height:auto;width:auto;text-align: center !important;"><strong style="color:black"> Terminé </strong> </div>')
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
        this.coupons._createCoupon(newData)
        .subscribe(
          ()=>{
            Swal.fire({
              icon:'success',
              title:'Ajout éffectué avec succès'
            });
            this._getCoupons();
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
        this.coupons._deleteCoupon(data._id)
        .subscribe(
          ()=>{
            Swal.fire({
              icon:'success',
              title:'Suppression éffectuée avec succès'
            })
            this._getCoupons();
            ev.confirm.resolve()
          },
          ()=>{
            Swal.fire({
              icon:'error',
              title:'Oops ... Quelque chose s\'est mal passé. Veuillez reéssayer. Le client saisie n\'existe peut-être pas'
            });
          }
        );
      }
    } )
  }

  _confirmUpdate(ev)
  {
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
        this.coupons._updateCoupon(ev.newData)
        .subscribe(
          ()=>{
            Swal.fire({
              icon:'success',
              title:'Mise à jour éffectuée avec succès'
            })
            this._getCoupons();
            ev.confirm.resolve()
          },
          ()=>{
            Swal.fire({
              icon:'error',
              title:'Oops ... Quelque chose s\'est mal passé. Veuillez reéssayer.'
            });
          }
        );
      }
    } )
  }


}
