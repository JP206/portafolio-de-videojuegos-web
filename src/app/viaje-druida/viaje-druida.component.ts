import { Component, OnInit } from '@angular/core';
import { SingletonIdiomaService } from '../singleton-idioma.service';

@Component({
  selector: 'app-viaje-druida',
  templateUrl: './viaje-druida.component.html',
  styleUrls: ['./viaje-druida.component.scss']
})
export class ViajeDruidaComponent implements OnInit {

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
