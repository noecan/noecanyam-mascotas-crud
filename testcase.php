<? php

 Pruebas de espacio de nombres ;

use  Illuminate \ Contracts \ Console \ Kernel ;

rasgo  crea aplicación
{
    / **
     * Crea la aplicación.
     *
     * @return \ Illuminate \ Foundation \ Aplicación
     * /
     función  pública createApplication ()
    {
        $ aplicación = requiere __DIR__. '/../bootstrap/app.php' ;

        $ aplicación -> make ( Kernel :: class) -> bootstrap ();

        return  $ aplicación ;
    }
}