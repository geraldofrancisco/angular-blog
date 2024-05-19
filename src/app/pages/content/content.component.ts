import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover: string = "https://legadodamarvel.com.br/wp-content/uploads/2023/10/Tony-Stark-o-Homem-de-Ferro-morreu-oficialmente-hoje-no-MCU-legadodamarvel.webp"
  contentTitle: string = "MINHA NOTÍCIA"
  contentDescription: string = "Olá mundo!"

  constructor() { }

  ngOnInit(): void {
  }

}
