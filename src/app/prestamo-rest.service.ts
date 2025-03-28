import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prestamo } from './prestamo';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PrestamoRestService {

  private apiUrl = "http://localhost:4200/api/prestamo";

  constructor(private http:HttpClient, private datePipe: DatePipe) { }

  crearPrestamo(itemId: number, persona: string, fechaPrevistaDevolucion: string): Observable<Prestamo> {
    const params = new HttpParams()
      .set('itemId', itemId.toString())
      .set('persona', persona)
      .set('fechaPrevistaDevolucion', fechaPrevistaDevolucion); // Asegúrate de enviar la fecha en formato adecuado

    // Realizamos la solicitud POST
    return this.http.post<Prestamo>(this.apiUrl, params.toString, {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded', // Porque estamos enviando parámetros en la URL
      })
    });
  }

  devolverItem(id: number): Observable<Prestamo> {
    const url = `${this.apiUrl}/devolver/${id}`; // URL con el id del préstamo

    // Realizamos la solicitud PUT
    return this.http.put<Prestamo>(url, null, {  // Usamos null porque no hay cuerpo en la solicitud
      headers: new HttpHeaders({
        'Content-Type': 'application/json', // El tipo de contenido que estamos enviando
      })
    });
  }


  listarPrestamosActivos(persona?: string, fecha?: string | null): Observable<Prestamo[]> {
    let params = new HttpParams();
  
    // Si se proporciona el parámetro 'persona', lo agregamos a los parámetros
    if (persona) {
      params = params.set('persona', persona);
    }
  
    // Si se proporciona el parámetro 'fecha' y no es null, lo agregamos a los parámetros
    if (fecha) {
      params = params.set('fecha', fecha);
    }
  
    // Realizamos la solicitud GET con los parámetros opcionales
    return this.http.get<Prestamo[]>(`${this.apiUrl}/activos`, { params });
  }
}
