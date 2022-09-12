#Sistema de administración de un parqueo

#PROBLEMA
Que forma existe de administrar eficientemente un parqueo y llevar la administración de este en lo que se refiere al control del personal.

#PROPUESTA GENERAL DE SOLUCIÓN
Diseñar y desarrollar un sistema orientado a la administración de un parqueo que tenga 2 tipos de roles: administrativo y de personal los cuales permitirán tener un mayor o meno acceso respectivamente en lo que se refiere a la administración.

#VALOR PARA EL NEGOCIO
Implementar un sistema de información de administración de un parqueo orientado a las ventas y al control de empleados que permita la automatización de procesos y un control eficiente.
#TANGIBLE
- Automatizar procesos haciéndolos más eficientes.
- Controlar a los empleados maximizando su desempeño.
- Evitar malos cálculos a la hora de hacer el cobro por el parqueo minimizando las perdidas.
#INTANGIBLE
-Mayor conformidad con empleados y clientes
-Mayor confianza en los datos del desempeño del parqueo.
-Mayor desempeño de los empleados.
#FACTIBILIDAD (ANÁLISIS DE RIESGOS)
#ECONOMICA
- El sistema costara 10000 bs.

#TECNICA
- Se necesitará diseñar la base de datos en mysql.
- Se necesitara diseñar interfaces amigables y atractivas para los usuarios.

#LISTADO DE REQUERIMIENTOS CON HISTORIAS DE USUARIOS
#Registro de nuevos usuarios
Como: Mediante un administrador
Quiero: Registrar nuevos usuarios 
De forma que: Se ingresen estos en la base de datos y se puedan definir roles dentro de los nuevos usuarios entre administradores o empleados

#Eliminación de usuarios 
Como: Mediante un administrador
Quiero: eliminar usuarios 
De forma que: Se realice una eliminación lógica en la base de datos

#Actualización de información de usuarios
Como: Mediante un administrador
Quiero: Actualizar la información de un usuario
De forma que: Se actualice la información de un usuario en la base de datos.

#Ingreso al sistema
Como: Mediante un administrador o empleado
Quiero: Ingresar al sistema mediante un usuario y una contraseña
De forma que: El sistema realice una autenticación de usuarios y filtre estos para permitirles acceder a diferentes niveles del sistema en función a su jerarquía.

#Cierre de sesión
Como: Mediante un administrador o empleado
Quiero: Cerrar sesión en el sistema
De forma que: una vez que el empleado termina su labor cierre su sesión y que el sistema registre esto

#Control de ingreso al sistema
Como: Mediante un administrador o empleado
Quiero: Que el sistema registre la hora de ingreso y salida de este.
De forma que: Se guarde esta información en la base de datos para un posterior reporte de datos.
DEPENDENCIA:

-Ingreso al sistema
-Cierre de sesión.


#Reporte de empleados
Como: Mediante un administrador 
Quiero: Que el sistema muestre un registro con la información de los empleados con sus horarios de ingreso y salida del sistema
De forma que: El administrador obtenga un reporte donde se muestre de forma clara la información.
DEPENDENCIA:

-Ingreso al sistema
-Cierre de sesión.
-Control de ingreso al sistema.



#Registro de entrada Vehículos
Como: Mediante un administrador o empleado. 
Quiero: Que el sistema registre y guarde en la base de datos la información de la entrada de un vehículo.
De forma que: El usuario ingrese la información del dueño del vehículos y esta se guarde exitosamente.


#Registro de Salida Vehículos
Como: Mediante un administrador o empleado. 
Quiero: Que el sistema registre y guarde en la base de datos la información de la salida de un vehículo y permita realizar el cálculo de sus estadías.
De forma que: Se realice un cálculo preciso para que el usuario pueda realizar el cobro y se guarde esta información en la base de datos.

DEPENDENCIA:

-Registro entrada de vehículos.

#Edición de estadía Vehículos
Como: Mediante un administrador. 
Quiero: Que el sistema permita editar la estadía de un vehículo en caso de existir alguna incongruencia.
De forma que: Se eviten malos cálculos por algún error de un usuario o el sistema.	

DEPENDENCIA:

-Registro entrada de vehículos.
-Registro salida de vehículos.

#Eliminación de estadía Vehículos
Como: Mediante un administrador. 
Quiero: Que el sistema permita una eliminación lógica la estadía de un vehículo en caso de existir alguna incongruencia.
De forma que: Se eviten malos cálculos por algún error de un usuario o el sistema.
DEPENDENCIA:

-Registro entrada de vehículos.
-Registro salida de vehículos.



#Reporte de estadía Vehículos
Como: Mediante un administrador. 
Quiero: Que el sistema le muestre al administrador un reporte de la estadia de vehículos .
De forma que: El admistrador pueda corroborar la información y tener un control de esta.



