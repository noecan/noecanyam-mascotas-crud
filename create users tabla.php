<? php

use  Illuminate \ Support \ Facades \ Schema ;
use  Illuminate \ Database \ Schema \ Blueprint ;
use  Illuminate \ Database \ Migrations \ Migration ;

clase  CreateUsersTable  extiende la  migración
{
    / **
     * Ejecute las migraciones.
     *
     * @return void
     * /
     función  pública arriba ()
    {
        Schema :: create ( 'usuarios' , function ( Blueprint  $ table ) {
            $ tabla -> incrementos ( 'id' );
            $ tabla -> cadena ( 'nombre' );
            $ tabla -> cadena ( 'correo electrónico' ) -> único ();
            $ tabla -> cadena ( 'contraseña' );
            $ tabla -> recordarToken ();
            $ tabla -> marcas de tiempo ();
        });
    }

    / **
     * Revertir las migraciones.
     *
     * @return void
     * /
     función  pública abajo ()
    {
        Schema :: dropIfExists ( 'usuarios' );
    }
}