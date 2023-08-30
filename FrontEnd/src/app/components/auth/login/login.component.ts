import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;

  onSubmit() {
    // Aquí puedes agregar la lógica para manejar el inicio de sesión
    console.log('Iniciando sesión...');
    console.log('Nombre de usuario:', this.username);
    console.log('Contraseña:', this.password);
    // También puedes enviar los datos a un servicio para autenticación, etc.
  }
}
