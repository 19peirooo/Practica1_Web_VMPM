# 📺 Serie Finder

**Serie Finder** es una aplicación web que permite buscar series, consultar información detallada y marcar tus favoritas.  
Desarrollada completamente con **React**, combina HTML, CSS y JavaScript para ofrecer una experiencia interactiva y moderna.

---

## 🚀 Características principales

- 🔍 **Búsqueda de series** en tiempo real mediante una API pública.  
- ⭐ **Marcado de series favoritas** con sistema de favoritos.  
- 📄 **Pop-up detallado** de cada serie: imagen, sinopsis y reparto.  
- 🎭 **Listado de actores** con fotos y nombres.  

---

## 🧩 Estructura del proyecto

El proyecto está compuesto por los siguientes tipos de archivos:

- **HTML** — Estructura del contenido.  
- **CSS** — Estilos y diseño visual.  
- **JavaScript (React)** — Lógica, componentes y manejo del estado.

---

## 🧱 Componentes principales

### 🔎 SearchForm
Formulario para buscar series. Incluye:
- Campo de texto para escribir el nombre de la serie.
- Botón de búsqueda.

### 📚 SeriesList
Lista que muestra los resultados obtenidos de la API.

### 🎞️ Serie
Elemento individual que representa una serie. Contiene:
- Imagen de la portada.  
- Nombre de la serie.  
- Icono de corazón para marcarla como favorita.  

### 📌 SeriePopUp
Ventana emergente con información detallada:
- Portada.  
- Nombre.  
- Sinopsis.  
- Lista de **7 miembros del reparto**.  

### 🎭 CastList
Lista que agrupa a los actores de la serie.

### 👤 CastMember
Representa a un actor individual e incluye:
- Foto del actor.  
- Nombre y personaje interpretado.  

---

## 🌐 Acceso a la información

La aplicación obtiene datos mediante la API pública de **TVMaze**:

- **Información general de series:**  
  `https://api.tvmaze.com/search/shows?q=query`

- **Reparto de una serie:**  
  `https://api.tvmaze.com/shows/id/cast`

---

## 📦 Ejecución del proyecto
Se ejecutara desde dentro la carpeta seriefinder

```bash
npm install
npm run dev
```

La aplicacion se ejecutara bajo el enlace: `http://localhost:5173` o cualquier otro puerto

## ❤️ Créditos
Proyecto desarrollado por Víctor Manuel Peiró Martínez de 3ºA de Física Computacional e Ingeniería de Software