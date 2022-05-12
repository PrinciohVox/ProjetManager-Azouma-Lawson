import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { XbetService } from '../services/xbet.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-gestion-compagnie',
  templateUrl: './gestion-compagnie.html',
  styleUrls: ['./gestion-compagnie.css']
})
export class GestionCompagnie implements OnInit {

  bread =  [
    {
      fullPath: "/home",
      name:'<i class="fas fa-home">&nbsp;>&nbsp;',
      active:false
    },
    {
      fullPath: "/home/liste-1xbet",
      name:"Listes des Projets &nbsp;>&nbsp;",
      active:true
    }
  ];

  fetchedDemandsData:any;
  dataSource:any;

  constructor(
    private xbets: XbetService,
    private sanitizer: DomSanitizer,
    private spinner:NgxSpinnerService
  ) {
    //this._getDemands();
  }

  _getDemands()
  {
    this.spinner.show();
    this.fetchedDemandsData = this.xbets._getDemands()
    .subscribe(
      (datas)=>{
        this.fetchedDemandsData = datas;

        this.dataSource = this.fetchedDemandsData ;

        this.dataSource.forEach(element =>
        {
          if( element.customerId != null)
           element.customerId = element.customerId.name;

           let date =  new Date(element.createdAt) ;
           element.createdAt = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear()

           if(element.validationDate)
           {
              let date =  new Date(element.validationDate) ;
              element.validationDate = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear()
           }
        });

        this.dataSource.reverse();

        this.spinner.hide();
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
      add:false,
      custom:[
        {
          name:'Valider',
          title:'<i class="fas fa-forward"></i>&nbsp;&nbsp;&nbsp;'
        }
      ],
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
      customerId:
      {
        title: "Nom Projet"
      },
      xbetID:{
        title:"Nombre de tache"
      },
      createdAt:
      {
        title:'Date de debut de la Tache'
      },
      amount: {
        title: 'Compagnie'
      },
      status:
      {
        type:'html',
        title:'Statut',
        valuePrepareFunction:(status)=>{
          if(status == 0)
            return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#ffbb33;height:auto;width:auto;text-align: center !important;"><strong style="color:black"> En cours </strong> </div>')
          else
          return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#00C851;height:auto;width:auto;text-align: center !important;"><strong style="color:black"> Validé </strong> </div>')
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

      // if(response.isConfirmed)
      // {
      //   this.xbets._createDemande(newData)
      //   .subscribe(
      //     ()=>{
      //       Swal.fire({
      //         icon:'success',
      //         title:'Ajout éffectué avec succès'
      //       });
      //       this._getDemands();
      //       ev.confirm.resolve();
      //     },
      //     ()=>{
      //       Swal.fire({
      //         icon:'error',
      //         title:'Oops ... Quelque chose s\'est mal passé. Veuillez reéssayer. Le client saisie n\'existe peut-être pas'
      //       })
      //     }
      //   );
      // }

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
        this.xbets._deleteDemand(data._id)
        .subscribe(
          ()=>{
            Swal.fire({
              icon:'success',
              title:'Suppression éffectuée avec succès'
            })
            this._getDemands();
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
        this.xbets._updateDemand(ev.newData._id,ev.newData)
        .subscribe(
          ()=>{
            Swal.fire({
              icon:'success',
              title:'Mise à jour éffectuée avec succès'
            })
            this._getDemands();
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

  _customAction(ev)
  {
    Swal.fire({
      icon:'info',
      title:'Valider la transaction ?',
      confirmButtonText:'Valider',
      confirmButtonColor:'#00C851',
      showCancelButton:true,
      cancelButtonText:'Annuler',
      cancelButtonColor:'#ff4444'
    }).then( response=>{
      if(response.isConfirmed)
      {
        this.spinner.show();
        this.xbets._updateDemand(ev.data._id,{ status:1 })
        .subscribe(
          ()=>{
            Swal.fire({
              icon:'success',
              title:'Mise à jour éffectuée avec succès'
            })
            this.spinner.hide();
            this._getDemands();
          },
          ()=>{
            this.spinner.hide();
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
