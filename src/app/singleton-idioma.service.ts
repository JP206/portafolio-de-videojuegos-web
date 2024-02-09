import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingletonIdiomaService {
  espaniol = true;

  constructor() { }
}