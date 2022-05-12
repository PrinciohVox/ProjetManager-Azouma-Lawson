import { TarificationsService } from './../services/tarifications.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-tarifications',
  templateUrl: './tarifications.component.html',
  styleUrls: ['./tarifications.component.css']
})
export class TarificationsComponent implements OnInit {

  bread =  [
    {
      fullPath: "/home",
      name:'<i class="fas fa-home">&nbsp;>&nbsp;',
      active:false
    },
    {
      fullPath: "/home/tarifications",
      name:"Add Compagnie &nbsp;>&nbsp;",
      active:true
    }
  ];

  fetchedDemandsData:any;
  dataSource:any;
  id:any;
  choosenCode:any;

  // exchangeRate parameters

  destinationCode:any;
  newExhangeRate:Number;

  constructor(
    private tarif: TarificationsService,
    private sanitizer: DomSanitizer,
    private spinner:NgxSpinnerService
  ) {
    //this._getCryptos();
  }

  _getCryptos()
  {
    this.spinner.show();
    this.tarif._getTarifications()
    .subscribe(
      (datas)=>{
        this.fetchedDemandsData = datas;
        this.dataSource = this.fetchedDemandsData ;

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
      custom:[
        {
          name:'Valider',
          title:'<i class="fas fa-cog"></i>&nbsp;&nbsp;&nbsp;'
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
      name:
      {
        title: "Nom"
      },
      code:
      {
        title:'Date Dajout'
      },
      adressTarget:
      {
        title:'Date de Validation'
      },
      quantity:
      {
        title: 'Nombre demployer'
      },
      buyPrice:
      {
        title:'Nombre de Projet'
      },
      isToSell:
      {
        type:'html',
        title:'Statut',
        valuePrepareFunction:(status)=>{
          if(status == true)
            return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#00C851;height:auto;width:auto;text-align: center !important;"><strong style="color:black"> Disponible </strong> </div>')
          else
          return this.sanitizer.bypassSecurityTrustHtml('<div style="background-color:#ff4444;height:auto;width:auto;text-align: center !important;"><strong style="color:black"> Non disponible </strong> </div>')
        }
      },
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
        this.tarif._createTarification(newData)
        .subscribe(
          ()=>{
            Swal.fire({
              icon:'success',
              title:'Ajout éffectué avec succès'
            });
            this._getCryptos();
            ev.confirm.resolve();
          },
          ()=>{
            Swal.fire({
              icon:'error',
              title:'Oops ... Quelque chose s\'est mal passé.'
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
        this.tarif._deleteTarification(data._id)
        .subscribe(
          ()=>{
            Swal.fire({
              icon:'success',
              title:'Suppression éffectuée avec succès'
            })
            this._getCryptos();
            ev.confirm.resolve()
          },
          ()=>{
            Swal.fire({
              icon:'error',
              title:'Oops ... Quelque chose s\'est mal passé.'
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
        this.tarif._updateTarification(ev.newData._id,ev.newData)
        .subscribe(
          ()=>{
            Swal.fire({
              icon:'success',
              title:'Mise à jour éffectuée avec succès'
            })
            this._getCryptos();
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
    let triggerBtn = <HTMLInputElement>document.getElementById('imgModal');
    this.id = ev.data._id;
    this.choosenCode = ev.data.code;
    triggerBtn.click();

    // Swal.fire({
    //   icon:'info',
    //   title:'Valider la transaction ?',
    //   confirmButtonText:'Valider',
    //   confirmButtonColor:'#00C851',
    //   showCancelButton:true,
    //   cancelButtonText:'Annuler',
    //   cancelButtonColor:'#ff4444'
    // }).then( response=>{
    //   if(response.isConfirmed)
    //   {
    //     this.spinner.show();
    //     this.tarif._updateDemand(ev.data._id,{ status:1 })
    //     .subscribe(
    //       ()=>{
    //         Swal.fire({
    //           icon:'success',
    //           title:'Mise à jour éffectuée avec succès'
    //         })
    //         this.spinner.hide();
    //         this._getCryptos();
    //       },
    //       ()=>{
    //         this.spinner.hide();
    //         Swal.fire({
    //           icon:'error',
    //           title:'Oops ... Quelque chose s\'est mal passé. Veuillez reéssayer.'
    //         });
    //       }
    //     );
    //   }
    // } )
  }

  fileToUpload:any;
  handleInputImage(event)
  {
    this.fileToUpload = event.target.files[0];
  }

  _uploadFIle()
  {
    let triggerBtn = <HTMLInputElement>document.getElementById('imgModal');
    triggerBtn.click();

    let form = new FormData();
    form.append('img',this.fileToUpload, this.fileToUpload.name);

    this.tarif._addImg(form,this.id)

    .subscribe(
      ()=>{
        Swal.fire({
          icon:'success',
          title:'Image mise à jour'
        })
      },
      ()=>{
        Swal.fire({
          icon:'error',
          title:'Quelque chose s\'est mal passé. Veuillez reéssayer'
        })
      }
    );
  }

  _updateExchangeRate()
  {
    let data = {
      destinationCode: this.destinationCode,
      newExchangeRate:  this.newExhangeRate
    }
    this.tarif._updateExchangeRate(this.id,data)
    .subscribe(
      ()=>{
        Swal.fire({
          icon:'success',
          title:'Taux de change mis à jour'
        })
      },
      ()=>{
        Swal.fire({
          icon:'error',
          title:'Quelque chose s\'est mal passé. Veuillez reéssayer'
        })
      }
    );
    // console.log(this.choosenCode)
    // console.log(this.destinationCode)
    // console.log(this.newExhangeRate)
  }

}
