### PIPES ANGULAR

Los pipes en Angular son una característica poderosa que te permite transformar y formatear datos de manera fácil y eficiente en tus aplicaciones. Los pipes actúan como filtros que toman un valor de entrada y lo transforman en un valor de salida con el formato deseado.

Aquí tienes algunos conceptos clave sobre los pipes en Angular:

### 1

Uso básico: Puedes usar los pipes directamente en tus templates para formatear datos. Por ejemplo, puedes usar el pipe {{ valor | uppercase }} para convertir un texto a mayúsculas.

### 2

Encadenamiento de pipes: Puedes encadenar varios pipes para realizar múltiples transformaciones. Por ejemplo, {{ valor | uppercase | slice:0:5 }} toma el valor, lo convierte a mayúsculas y luego toma solo los primeros 5 caracteres.

### 3

Creación de pipes personalizados: Angular también te permite crear tus propios pipes personalizados. Puedes crear un pipe personalizado para realizar transformaciones específicas y reutilizarlo en toda tu aplicación.

### 4

Parámetros de los pipes: Los pipes pueden aceptar parámetros para personalizar su comportamiento. Puedes pasar valores adicionales a un pipe separados por dos puntos, por ejemplo, {{ valor | slice:1:5 }} toma el valor y devuelve solo los caracteres del índice 1 al 5.

### 5

Pipes comunes: Angular proporciona una serie de pipes predefinidos que puedes utilizar, como date para formatear fechas, currency para formatear valores monetarios, json para mostrar objetos en formato JSON, entre otros.

### 6

Pipes async: Angular también ofrece pipes async para trabajar con datos asíncronos. Puedes usar el pipe async para suscribirte a una Promesa, un Observable u otros tipos de datos asincrónicos y mostrar el resultado en tu template cuando esté disponible.

### mas datos...

Actualización automática: Los pipes en Angular se actualizan automáticamente cuando los datos de entrada cambian. Esto significa que si el valor de entrada utilizado por un pipe se modifica, el resultado transformado se actualizará automáticamente en tu template.

Inmutabilidad: Los pipes en Angular siguen el principio de inmutabilidad, lo que significa que no modifican el valor de entrada original. En su lugar, generan una nueva instancia con la transformación aplicada. Esto es importante para mantener la integridad de los datos y evitar efectos secundarios no deseados.

Orden de ejecución: Cuando se encadenan varios pipes, es importante comprender el orden de ejecución. Los pipes se ejecutan de izquierda a derecha, lo que significa que el resultado de un pipe se pasa como entrada al siguiente pipe en la cadena.

Consideraciones de rendimiento: Los pipes pueden tener un impacto en el rendimiento de tu aplicación, especialmente si se usan en grandes conjuntos de datos o se ejecutan frecuentemente. Angular realiza optimizaciones internas para minimizar el impacto, pero es importante tener en cuenta las mejores prácticas de rendimiento al utilizar pipes, como evitar pipes innecesarios o costosos en operaciones repetitivas.
