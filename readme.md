# Plugin: Deshabilitador de JS en la pestaña activa

@author: PAC&Company

## Información General

Este plugin es una extensión simple pero poderosa para el navegador Google Chrome, diseñada para darle control instantáneo sobre la ejecución de JavaScript (JS) en sitios web específicos.

### Características Principales

* **Control por Dominio:** Desactiva o activa JavaScript **solo para el dominio activo** sin afectar las configuraciones de otros sitios web o las configuraciones globales del navegador.
* **Recarga Automática:** Fuerza un refresco (reload) inmediato de la pestaña activa después de cada cambio de configuración, asegurando que el nuevo ajuste de JS se aplique al instante.
* **Interfaz Intuitiva:** Utiliza un **botón deslizante (toggle switch)** en la ventana emergente de la extensión para mostrar y modificar el estado actual de JS de manera clara.

### ¿Para qué sirve?

* **Seguridad:** Bloquea temporalmente scripts de sitios poco confiables.
* **Rendimiento:** Mejora el tiempo de carga y reduce el uso de CPU en sitios pesados.
* **Desarrollo:** Permite a los desarrolladores y testers verificar cómo se comportan los sitios sin scripts.

## Pasos para la Instalación

Dado que esta es una extensión personalizada que no está en la Chrome Web Store, debe instalarse mediante el **Modo de desarrollador**.

Sigue estos pasos para cargar e iniciar la extensión en Google Chrome:

### **Paso 1: Preparación del Archivo**

1.  Busca el archivo comprimido (`.rar`) de la extensión.
2.  **Descomprime** el archivo para obtener la **carpeta de la extensión** con todos los archivos (`manifest.json`, `popup.html`, `popup.js`, etc.).

### **Paso 2: Acceder al Modo Desarrollador de Chrome**

1.  Abre Google Chrome y navega a la **Gestión de extensiones** escribiendo la siguiente dirección en la barra URL y presionando Enter:
    `chrome://extensions`
2.  En la esquina superior derecha de la pantalla, busca el interruptor llamado **'Modo de desarrollador'**.
3.  **Activa** el 'Modo de desarrollador'. Esto hará que aparezcan nuevos botones en la parte superior de la página, incluido 'Cargar descomprimida'.

### **Paso 3: Cargar la Extensión**

1.  Haz clic en el botón **'Cargar descomprimida'** (Load unpacked).
2.  En el explorador de archivos que se abre, **selecciona la carpeta que descomprimiste** en el Paso 1.
3.  Chrome cargará la extensión inmediatamente. Deberías ver el plugin **"JS Toggle Extensión"** (o el nombre que le hayas dado) aparecer en tu lista de extensiones.

### **Paso 4: Uso**

1.  Haz clic en el **icono de la extensión** (normalmente aparece como un puzzle o el icono que definiste) en la barra de herramientas de Chrome.
2.  Aparecerá el popup con el botón deslizante para **activar** o **desactivar** JavaScript en el sitio web que estés visitando.

---


* **La extensión no carga:** Asegúrate de haber seleccionado la **carpeta principal** de la extensión (la que contiene el archivo `manifest.json`), no solo el contenido de la carpeta.
* **Los cambios no funcionan:** Si la extensión está instalada, asegúrate de que tienes los permisos correctos (`contentSettings` y `tabs`) en el `manifest.json`.
