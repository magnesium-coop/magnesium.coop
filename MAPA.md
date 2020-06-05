###### Mapa del sitio
* Home `pages/index.tsx`
    * Qué hacemos `content/texts/que-hacemos.md`
        * Texto Breve fijo
    * Contacto 
      * Mail, teléfono dirección. No formulario.
      * Redes sociales
    * En qué estamos trabajando ahora `content/texts/en-que-estamos.md`
      * Una breve redacción que enlace a posts del blog o a fichas de proyectos según convenga. Ver sitio actual
    * Enlaces a Proyectos/Nosotros/Blog según corresponda.
    * Enlaces a redes sociales

* Contacto `pages/contact.js`
    * Mail, teléfono dirección. No formulario.
    * Redes Sociales

* Proyectos (Portfolio) `pages/projects.js`
    * Grilla o listado de proyectos. Una idea es jugar con la Tabla Periódica ya que cada proyecto nuestro se mapea internamente a un elemento químico.
* Proyecto 
    * Contenido: `content/projects/project1/index.md`
    * Template: `src/templates/project.js`
    * Cada proyecto es como si fuera una entrada de blog, puede tener más o menos detalle, imágenes (capturas de pantalla), etc. Se puede nombrar al cliente o hablar en general.

* Nosotros (coop y open source) `pages/about.js`
    * Quiénes somos y cómo nos organizamos. `content/texts/quienes-somos.md`
        * Un texto breve resumen.
    * Enlaces a posts por ejemplo: 
        * ¿Por qué cooperativa? 
        * ¿Por qué open source?
        * ¿Por qué magnesium?
        * Me quiero sumar ¿cómo hago?
    * Fotitos de cada uno, además de los socios podríamos tener una sección de colaboradores.
* Blog `pages/blog.js`
    * Página de blog habitual ordenando posts por fecha.
* Post 
    * Contenido: `content/blog/hello-world/index.md`
    * Template: `src/templates/blog-post.js`
    * Pequeñas entradas contando cosas, puede ser cuando sale un proyecto, o antes de que salga, la idea es al leerlos la gente se pueda dar una idea de quiénes somos más subjetiva digamos. Debería servirnos para mover las redes sociales. Va con autor.
