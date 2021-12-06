<? php

use  Illuminate \ Support \ Facades \ Schema ;
use  Illuminate \ Database \ Schema \ Blueprint ;
use  Illuminate \ Database \ Migrations \ Migration ;

class  CreatePasswordResetsTable  extiende la  migración
{
    / **
     * Ejecute las migraciones.
     *
     * @return void
     * /
     función  pública arriba ()
    {
        Schema :: create ( 'password_resets' , function ( Blueprint  $ table ) {
            $ tabla -> cadena ( 'correo electrónico' ) -> índice ();
            $ tabla -> cadena ( 'token' );
            $ tabla -> marca de tiempo ( 'created_at' ) -> nullable ();
        });
    }

    / **
     * Revertir las migraciones.
     *
     * @return void
     * /
     función  pública abajo ()
    {
        Schema :: dropIfExists ( 'password_resets' );
    }
}