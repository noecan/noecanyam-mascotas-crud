<? php

/ *
| ------------------------------------------------- -------------------------
| Modelo Factories
| ------------------------------------------------- -------------------------
|
| Aquí puede definir todas sus fábricas de modelos. Las fábricas modelo dan
| es una forma conveniente de crear modelos para probar y sembrar su
| base de datos. Solo dígale a la fábrica cómo debe verse un modelo predeterminado.
|
* /

/ ** @var \ Illuminate \ Database \ Eloquent \ Factory $ factory * /
$ fábrica -> definir ( Aplicación \ Usuario :: clase, función ( Faker \ Generator  $ faker ) {
    static  $ contraseña ;

    volver [
        'nombre' => $ faker -> nombre ,
        'email' => $ faker -> unique () -> safeEmail ,
        'contraseña' => $ contraseña ?: $ contraseña = bcrypt ( 'secreto' ),
        'recordar_token' => str_random ( 10 ),
    ];
});