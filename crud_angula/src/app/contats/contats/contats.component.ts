import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import {Contat} from '../model/contat';
import {ContatsService} from '../services/contats.service'
import {ErroDialogComponent} from '../../shared/components/erro-dialog/erro-dialog.component'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contats',
  templateUrl: './contats.component.html',
  styleUrls: ['./contats.component.css']
})
export class ContatsComponent implements OnInit {

  contats$: Observable<Contat[]>;
  displayedColumns = ['_id','name','telefone', 'actions'];

  constructor(
    private contatsService: ContatsService,
    public dialog: MatDialog,
    private router : Router,
    private route: ActivatedRoute
    ) {

    this.contats$ = this.contatsService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos')
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErroDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  onAdd(){
    this.router.navigate(['new'],{relativeTo: this.route});
  }

}
