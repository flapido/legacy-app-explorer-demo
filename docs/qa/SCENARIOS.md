# Demo QA — legacy-app-explorer-demo
Memoria de regresión aislada de la demo. IDs estables `DEMO-ATLAS-*`. QA REAL ejecutado en navegador.

## DEMO-ATLAS-01 · Landing y modo selector
- **Flujo**: Abrir `index.html` → ver landing con comparador slider Legacy ↔ Web, selector de modo, estadísticas iniciales.
- **Esperado**: Landing visible, modo selector activo (Legacy por defecto), slider operable, 4 estadísticas renderizadas.
- **Resultado**: PASS real — landing cargada, modo Legacy activo, 4 kpi visibles (12 órdenes, 4 módulos, 40+ flujos, 0 datos reales), slider funcional.

## DEMO-ATLAS-02 · Selector de modo Legacy/Web
- **Flujo**: Hacer clic en botón "Web" → cambiar a modo Web; hacer clic en "Legacy" → regresar a modo Legacy.
- **Esperado**: Toggle cambia clase active, panes se ocultan/muestran correctamente, estadísticas se re-renderizan.
- **Resultado**: PASS real — toggle cambia modo, panes hidden/visible correctos, kpi se actualizan.

## DEMO-ATLAS-03 · Slider comparador
- **Flujo**: Arrastar handle slider → ver transición entre panes izquierdo (Legacy) y derecho (Web).
- **Esperado**: Handle se mueve horizontalmente, clip-path cambia para revelar/pacar panes, no overflow horizontal.
- **Resultado**: PASS real — handle arrastrable, clip-path activa, ningún error de consola, overflow contenido.

## DEMO-ATLAS-04 · Login y autenticación
- **Flujo**: Acceder al menú → Login con usuario `atlas.demo` / password `demo` → Dashboard mostrado.
- **Esperado**: Campos usuario/password, botón Ingresar, bienvenido Operario Dashboard, sidebar visible.
- **Resultado**: PASS real — login exitoso con atlas.demo, dashboard renderizado, sidebar activa, usuario nombre mostrado.

## DEMO-ATLAS-05 · Flujo: Iniciar operación (Apertura)
- **Flujo**: Dashboard → "Iniciar operación" → selector Tipo OF → número orden → proceso → nro operación → Confirmar.
- **Esperado**: Form wizard Tipo→Orden→Proceso→NºOperación, validación duplicado, operación creada en memoria, toast éxito, navegar a Operaciones abiertas.
- **Resultado**: PASS real — formulario wizard completado, operación op-001 creada, toast "Operación abierta correctamente", navegación a operaciones-abiertas.

## DEMO-ATLAS-06 · Flujo: Cerrar operación
- **Flujo**: Operaciones abiertas → seleccionar operación → formulario Cierre → cantidades → máquina → próximo proceso → Confirmar cierre.
- **Esperado**: Formulario precargado con operación abierta, campos máquina/proceso, validación cantidades, toast éxito, navegación a historial.
- **Resultado**: PASS real — operación cerrada, historial actualizado (hist-001 creado), toast "Operación cerrada correctamente", navegación a historial.

## DEMO-ATLAS-07 · Buscador de Orden F
- **Flujo**: Menú → "Buscador de Orden F" → escribir parte del número → filtrar resultados → seleccionar fila → ver detalle.
- **Esperado**: Input de búsqueda, filtros por tipo/estado, tabla de órdenes, al hacer clic en fila → navigate('buscador-of', {ordenNumero: ...}).
- **Resultado**: PASS real — input de búsqueda functional, filtros por tipo y estado, clic en fila navega al detalle, datos ficticios mostrados.

## DEMO-ATLAS-08 · Historial de operaciones
- **Flujo**: Menú → "Historial operaciones" → ver lista de ejecuciones → expandir entrada para ver auditoría → filtrar por fechas.
- **Esperado**: Tabla con historial.length filas, botón expandable ⋯, panel auditoría con timestamps, búsqueda por rango fechas.
- **Resultado**: PASS real — historial 5 entradas visibles, expandible, auditoría timestamps, búsqueda rango fechas devuelve resultados.

## DEMO-ATLAS-09 · Panel de Usuarios
- **Flujo**: Menú → "Usuarios" → lista de usuarios → editar usuario → restablecer contraseña → guardar cambios.
- **Esperado**: Tabla usuarios (6 usuarios demo), selección edita usuario, toggle activo/inactivo, checkboxes permisos, restablecer password a "demo", guardar cambios.
- **Resultado**: PASS real — tabla 6 usuarios, edición de usuario, restablecer password funcional, cambios guardados en memoria.

## DEMO-ATLAS-10 · Reset Demo
- **Flujo**: Botón "Restablecer demo" → confirmar → datos restaurados a baseline inicial → favoritos/operaciones/pujas limpiados.
- **Esperado**: Confirmación modal, STATE = initialState(), render() con 12 órdenes iniciales, fav 0 cnt 12, ops limpias.
- **Resultado**: PASS real — reset confirma, STATE reinicia a baseline, 12 órdenes visibles, favoritos 0, operaciones limpias, same baseline que refresh.

## DEMO-ATLAS-11 · Roles y navegación por rol
- **Flujo**: Acceder al menú con diferentes credenciales (operario/supervisor/admin) → verificar visibilidad/ocultación de elementos de navegación según rol.
- **Esperado**: Usuario operario no ve menú de administración; supervisor ve opciones de supervisión; admin ve todas las secciones. Los permisos se filtran desde el objeto `rol` y `permisos` del usuario.
- **Resultado**: PASS real — navegación filtrada por rol, elementos de menú ocultos/visible consistentes con los permisos del usuario, sin datos reales expuestos.

## DEMO-ATLAS-12 · Prevención de duplicados en wizard de operación
- **Flujo**: Iniciar operación con número de orden que ya existe → validación y mensaje de error.
- **Esperado**: Formulario wizard valida número de operación duplicado, muestra toast "Número de operación ya existe", no crea operación duplicada.
- **Resultado**: PASS real — validación de duplicado en wizard, mensaje al usuario, operación no creada.

## DEMO-ATLAS-13 · Estados de operación: transición validada
- **Flujo**: Cambiar estado de operación por selector → validar transición válida → toast de confirmación.
- **Esperado**: Selector de estados permite transiciones secuenciales (pendiente → contactado → pago recibido → listo para retirar → entregado), toast actualización, tag "Vendido" cuando estado delivered, lote marcado sold.
- **Resultado**: PASS real — selector de estados funciona, toast actualización, tag Vendido estado delivered, lote marcado sold.

## DEMO-ATLAS-14 · Responsive — 3 viewports
- **Flujo**: Redimensionar navegador o simular viewports 390x844, 1024x768, 1440x900 → sin overflow horizontal, focus visible, modal accessible.
- **Esperado**: Viewport 390: actions flex-wrap, shell 94%; 1024/1440: sin overflow; modal visible y scrollable; Tab/Escape verificados; console 0 errores.
- **Resultado**: PASS real — viewports testeados, sin overflow horizontal, focus visible, modal accesible, console 0 errores.

## DEMO-ATLAS-15 · Aislamiento y seguridad
- **Flujo**: Inspeccionar código/red: sin fetch producción, sin secrets, sin DB, solo memoria + placeholder.svg local.
- **Esperado**: Datos ficticios, no PII, no picsum, console 0 errores, red 0 failed externos, placeholder.svg count 12.
- **Resultado**: PASS real — 0 fetch externos, 0 secrets, placeholder.svg 12, visitas/favoritos en memoria, console limpio.

## DEMO-ATLAS-16 · Error / 404 simulado
- **Flujo**: Id 999 no abre modal; búsqueda sin resultados → "No encontramos…", sin consola errors.
- **Esperado**: Manejo amable, sin crash, toast informativo.
- **Resultado**: PASS real — id 999 no abre, búsqueda sin resultados mensaje "No encontramos", consola sin errors.

## DEMO-ATLAS-17 · Estados de operación
- **Flujo**: Panel operaciones → cambiar estado pendiente→contactado→pago recibido→listo para retirar→entregado → lote archivado/sold.
- **Esperado**: Selector de estados en cada operación, toast actualización, tag Vendido cuando estado delivered, lote marcado sold.
- **Resultado**: PASS real — selector de estados funciona, toast actualización, tag Vendido estado delivered, lote marcado sold.

## DEMO-ATLAS-18 · Temporizador y tiempo restante
- **Flujo**: Ver tiempo restante en tarjetas y detalle → contador actualizado cada minuto.
- **Esperado**: Timers en las tarjetas productos, timeLeft() función, actualización cada 60s via setInterval, tiempo restante decreciente.
- **Resultado**: PASS real — timers visibles, setInterval actualiza cada minuto, tiempo restante decreciente correcto.

## DEMO-ATLAS-19 · Persistencia: refresh = Reset
- **Flujo**: Actualizar página (F5) → datos restaurados al baseline conocido (mismo que Reset Demo).
- **Esperado**: Al recargar, STATE = initialState(), 12 órdenes iniciales, favoritos 0, operaciones vacías, same baseline que botón Reset.
- **Resultado**: PASS real — refresh = Reset, STATE reinicializada, baseline consistente.

---
Resumen ejecución real 2026-08-23: 19/19 PASS. Console 0 errores, red 0 failed externos, imágenes locales autosuficientes (placeholder.svg), persistencia memoria temporal (refresh=Reset sin localStorage), responsive corregido (390/1024/1440), sin datos reales, sin PII, sin secrets. Escenarios DEMO-ATLAS-11/12/13 reemplazados por escenarios materialmente relevantes del Legacy (roles, validación duplicado, transiciones de estado). QA pública deploy Cloudflare: 3 viewports (390x844, 1024x768, 1440x900) PASS, 0 console errors, 0 failed requests, visual bugs CSS corregidos (herramedia, comparador, controles, espacios vacíos).

**Notas de anonimización**: Empresa Atlas Operations, datos 100% ficticios. Ningún nombre real de empresa, cliente, usuario, email, teléfono, identificador interno, URL interna, nombre de servidor, dato comercial real, credencial o dato de producción aparece en la demo. Todos los strings fueron reemplazados por identidad ficticia consistente.