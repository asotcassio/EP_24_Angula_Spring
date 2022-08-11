import { ListService } from 'src/app/services/list.service';
import { Animal } from './../../Animal';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  animal?: Animal;
  constructor(private listServices : ListService ,private route: ActivatedRoute ) {
    this.getAnimal()
  }

  ngOnInit(): void {
  }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listServices.getItem(id).subscribe((animal)=>(this.animal = animal));

  }


}
