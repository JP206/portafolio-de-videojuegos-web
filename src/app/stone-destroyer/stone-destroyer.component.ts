import { Component, OnInit } from '@angular/core';
import { SingletonIdiomaService } from '../singleton-idioma.service';

@Component({
  selector: 'app-stone-destroyer',
  templateUrl: './stone-destroyer.component.html',
  styleUrls: ['./stone-destroyer.component.scss']
})
export class StoneDestroyerComponent implements OnInit {

  constructor(private idioma: SingletonIdiomaService) { }

  ngOnInit(): void {
    if (this.idioma.espaniol) {
      var divEspaniol = document.getElementById("esp")
      if (divEspaniol) {
        divEspaniol.style.display = 'contents';
      }
      var divIngles = document.getElementById("eng")
      if (divIngles) {
        divIngles.style.display = 'none';
      }
    }
    else {
      var divEspaniol = document.getElementById("esp")
      if (divEspaniol) {
        divEspaniol.style.display = 'none';
      }
      var divIngles = document.getElementById("eng")
      if (divIngles) {
        divIngles.style.display = 'contents';
      }
    }
  }

  cambiarIdioma(){
    this.idioma.espaniol = !this.idioma.espaniol
    if (this.idioma.espaniol) {
      var divEspaniol = document.getElementById("esp")
      if (divEspaniol) {
        divEspaniol.style.display = 'contents';
      }
      var divIngles = document.getElementById("eng")
      if (divIngles) {
        divIngles.style.display = 'none';
      }
    }
    else {
      var divEspaniol = document.getElementById("esp")
      if (divEspaniol) {
        divEspaniol.style.display = 'none';
      }
      var divIngles = document.getElementById("eng")
      if (divIngles) {
        divIngles.style.display = 'contents';
      }
    }
  }
}
