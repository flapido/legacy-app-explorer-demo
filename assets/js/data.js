/**
 * Atlas Operations — Demo Legacy → Web
 * Datos 100% ficticios, estado en memoria, sin DB, sin producción.
 * Empresa ficticia: Atlas Operations (reemplaza cualquier referencia real)
 */
const ATLAS_SEED = {
  version: 1,
  tipos: [
    { codigo: 'OF', descripcion: 'Orden de Fabricación Producto' },
    { codigo: 'OFI', descripcion: 'Orden de Fabricación Interna' },
    { codigo: 'OE', descripcion: 'Orden de Ensamble' }
  ],
  procesos: [
    { codigo: 'P01', descripcion: 'CNC Mecanizado', sector: 'Mecanizado' },
    { codigo: 'P02', descripcion: 'Taladrado Precisión', sector: 'Mecanizado' },
    { codigo: 'P03', descripcion: 'Anodizado Superficial', sector: 'Tratamiento' },
    { codigo: 'P04', descripcion: 'Armado Modular', sector: 'Ensamble' },
    { codigo: 'P05', descripcion: 'Inspección en Proceso', sector: 'Calidad' },
    { codigo: 'P06', descripcion: 'Empaque y Despacho', sector: 'Logística' },
    { codigo: 'P07', descripcion: 'Fresado CNC', sector: 'Mecanizado' },
    { codigo: 'P08', descripcion: 'Recepción de Material', sector: 'Almacén' }
  ],
  maquinas: [
    { codigo: 'CM-01', descripcion: 'Centro Mecanizado 01', estado: 'N' },
    { codigo: 'CM-02', descripcion: 'Centro Mecanizado 02', estado: 'N' },
    { codigo: 'CM-03', descripcion: 'Centro de Mecanizado Atlas A', estado: 'N' },
    { codigo: 'AN-01', descripcion: 'Línea Anodizado', estado: 'N' },
    { codigo: 'ARM-01', descripcion: 'Estación Armado', estado: 'N' },
    { codigo: 'CAL-01', descripcion: 'Calibre Digital QC-01', estado: 'N' }
  ],
  sectores: [
    { codigo: 'SEC01', descripcion: 'Mecanizado' },
    { codigo: 'SEC02', descripcion: 'Tratamiento' },
    { codigo: 'SEC03', descripcion: 'Ensamble' },
    { codigo: 'SEC04', descripcion: 'Calidad' }
  ],
  usuarios: [
    { codigo: 'atlas.demo', nombre: 'Operario Demo Atlas', password: 'demo', sector: 'SEC02', rol: 'operario', estado: 'N', ultimoAcceso: '05/08/2026 09:15', permisos: ['inicio','operaciones','ordenes','historial'] },
    { codigo: 'atlas.op01', nombre: 'Operaria Demo 01', password: 'demo01', sector: 'SEC01', rol: 'operario', estado: 'N', ultimoAcceso: '20/05/2025 07:30', permisos: ['inicio','operaciones','ordenes','historial'] },
    { codigo: 'atlas.sup01', nombre: 'Supervisión Demo', password: 'sup01', sector: 'SEC01', rol: 'supervisor', estado: 'N', ultimoAcceso: '04/08/2026 16:45', permisos: ['inicio','operaciones','ordenes','historial','admin'] },
    { codigo: 'atlas.admin', nombre: 'Administración Atlas', password: 'admin', sector: 'SEC04', rol: 'admin_sistema', estado: 'N', ultimoAcceso: '05/08/2026 08:00', permisos: ['inicio','operaciones','ordenes','historial','admin'] },
    { codigo: 'atlas.op02', nombre: 'Operario Demo 02', password: 'demo02', sector: 'SEC02', rol: 'operario', estado: 'N', ultimoAcceso: '19/05/2025 14:20', permisos: ['inicio','operaciones','ordenes','historial'] },
    { codigo: 'atlas.inact', nombre: 'Usuario Inactivo Demo', password: 'inact', sector: 'SEC03', rol: 'operario', estado: 'I', ultimoAcceso: '01/01/2025 00:00', permisos: [] }
  ],
  ordenes: [
    { tipo: 'OF', numero: '00045821', producto: 'MÓDULO HIDRÁULICO MH-250', codigoProducto: 'AT-MH250-001', descripcion: 'Cuerpo fundición ligera', cantidad: 50, estado: 'Activa', etapa: 'En producción', progreso: 35, fechaEntrega: '28/05/2025', creada: '15/05/2025 10:30', creadaPor: 'atlas.admin' },
    { tipo: 'OF', numero: '00045830', producto: 'Conjunto Válvula VX-100', codigoProducto: 'AT-VX100-002', descripcion: 'Válvula reguladora demo Atlas', cantidad: 200, estado: 'Activa', etapa: 'En producción', progreso: 45, fechaEntrega: '30/05/2025', creada: '19/05/2025 09:15', creadaPor: 'atlas.op01' },
    { tipo: 'OF', numero: '00045812', producto: 'Soporte Estructural SE-400', codigoProducto: 'AT-SE400-003', descripcion: 'Soporte tubular Atlas', cantidad: 50, estado: 'Activa', etapa: 'En producción', progreso: 60, fechaEntrega: '28/05/2025', creada: '12/05/2025 11:00', creadaPor: 'atlas.sup01' },
    { tipo: 'OF', numero: '00045790', producto: 'Carcasa Bomba CB-200', codigoProducto: 'AT-CB200-004', descripcion: 'Carcasa Atlas Operations', cantidad: 100, estado: 'Activa', etapa: 'En producción', progreso: 25, fechaEntrega: '15/06/2025', creada: '08/05/2025 08:45', creadaPor: 'atlas.admin' },
    { tipo: 'OFI', numero: '00012005', producto: 'Pieza Prototipo Atlas P-01', codigoProducto: 'AT-PRT-001', descripcion: 'Prototipo interno validación', cantidad: 10, estado: 'Activa', etapa: 'Planificada', progreso: 10, fechaEntrega: '20/06/2025', creada: '01/05/2025 14:00', creadaPor: 'atlas.sup01' },
    { tipo: 'OE', numero: '00088001', producto: 'Kit Ensamble Atlas K-10', codigoProducto: 'AT-KIT-001', descripcion: 'Kit ensamble demostrativo', cantidad: 30, estado: 'Activa', etapa: 'En producción', progreso: 70, fechaEntrega: '10/06/2025', creada: '20/05/2025 16:30', creadaPor: 'atlas.op02' },
    { tipo: 'OF', numero: '00045650', producto: 'Válvula Demo V-100', codigoProducto: 'AT-V100-005', descripcion: 'Válvula serie demo', cantidad: 75, estado: 'Cerrada', etapa: 'Finalizada', progreso: 100, fechaEntrega: '01/05/2025', creada: '10/04/2025 09:00', creadaPor: 'atlas.admin' },
    { tipo: 'OF', numero: '00045680', producto: 'Eje Transmisión ET-300', codigoProducto: 'AT-ET300-006', descripcion: 'Eje transmisión industrial', cantidad: 120, estado: 'Activa', etapa: 'En producción', progreso: 55, fechaEntrega: '25/06/2025', creada: '18/05/2025 07:15', creadaPor: 'atlas.op01' }
  ],
  operacionesAbiertas: [
    { id: 'op-001', tipo: 'OF', ordenF: '00045821', proceso: 'CNC Mecanizado', procesoCodigo: 'P01', nroOperacion: 10, operario: 'atlas.demo', operarioNombre: 'Operario Demo Atlas', fechaApertura: '05/08/2026', horaApertura: '08:30', maquina: null, producto: 'MÓDULO HIDRÁULICO MH-250' },
    { id: 'op-002', tipo: 'OF', ordenF: '00045830', proceso: 'Taladrado Precisión', procesoCodigo: 'P02', nroOperacion: 20, operario: 'atlas.op01', operarioNombre: 'Operaria Demo 01', fechaApertura: '20/05/2025', horaApertura: '07:45', maquina: null, producto: 'Conjunto Válvula VX-100' },
    { id: 'op-003', tipo: 'OF', ordenF: '00045790', proceso: 'Fresado CNC', procesoCodigo: 'P07', nroOperacion: 20, operario: 'atlas.op02', operarioNombre: 'Operario Demo 02', fechaApertura: '04/08/2026', horaApertura: '22:10', maquina: null, producto: 'Carcasa Bomba CB-200' }
  ],
  historial: [
    { id: 'hist-001', fecha: '04/08/2026', hora: '16:30', tipo: 'Producción', ordenF: 'OF-00045821', proceso: 'Mezclado reactor R-03', operario: 'atlas.sup01', maquina: 'RX-03', aprobada: 125, rechazada: 0, unidad: 'un', duracion: '4h 15m', descripcion: 'Mezclado estándar lote demo Atlas', notas: 'Sin observaciones', auditoria: [ { ts: '04/08/2026 12:00', actor: 'Sistema Atlas', detalle: 'Programó operación' }, { ts: '04/08/2026 12:15', actor: 'atlas.sup01', detalle: 'Asignó operario' }, { ts: '04/08/2026 12:20', actor: 'atlas.op01', detalle: 'Inició ejecución' }, { ts: '04/08/2026 16:25', actor: 'atlas.op01', detalle: 'Registró resultado' }, { ts: '04/08/2026 16:30', actor: 'atlas.sup01', detalle: 'Aprobó la operación' } ] },
    { id: 'hist-002', fecha: '03/08/2026', hora: '11:45', tipo: 'Producción', ordenF: 'OF-00045830', proceso: 'CNC Mecanizado', operario: 'atlas.op01', maquina: 'CM-01', aprobada: 48, rechazada: 2, unidad: 'un', duracion: '3h 30m', descripcion: 'Mecanizado carcasa Atlas', notas: '2 piezas con tolerancia fuera de spec', auditoria: [] },
    { id: 'hist-003', fecha: '02/08/2026', hora: '09:20', tipo: 'Producción', ordenF: 'OF-00045812', proceso: 'Anodizado Superficial', operario: 'atlas.op02', maquina: 'AN-01', aprobada: 100, rechazada: 0, unidad: 'un', duracion: '2h 00m', descripcion: 'Tratamiento superficial Atlas', notas: '', auditoria: [] },
    { id: 'hist-004', fecha: '01/08/2026', hora: '15:10', tipo: 'Producción', ordenF: 'OF-00088001', proceso: 'Armado Modular', operario: 'atlas.demo', maquina: 'ARM-01', aprobada: 30, rechazada: 1, unidad: 'un', duracion: '5h 45m', descripcion: 'Armado kit Atlas', notas: '1 unidad rechazada por defecto visual', auditoria: [] },
    { id: 'hist-005', fecha: '31/07/2026', hora: '08:00', tipo: 'Producción', ordenF: 'OF-00012005', proceso: 'Recepción de Material', operario: 'atlas.op01', maquina: '—', aprobada: 500, rechazada: 0, unidad: 'kg', duracion: '1h 15m', descripcion: 'Recepción material demo Atlas', notas: '', auditoria: [] }
  ],
  actividadReciente: [
    { fecha: '05/08/2026 10:15', tipo: 'Inicio', descripcion: 'Operación iniciada', referencia: 'OP-2026-0101', responsable: 'Operario Demo Atlas', estado: 'En curso' },
    { fecha: '05/08/2026 09:40', tipo: 'Orden', descripcion: 'Orden asignada a producción', referencia: 'OF-00045821', responsable: 'Supervisión Demo', estado: 'En proceso' },
    { fecha: '04/08/2026 22:10', tipo: 'Cierre pendiente', descripcion: 'Operación abierta > 8 horas', referencia: 'OP-2026-0098', responsable: 'Operario Demo 02', estado: 'Pendiente' },
    { fecha: '04/08/2026 16:30', tipo: 'Cierre', descripcion: 'Operación cerrada correctamente', referencia: 'OP-00045821', responsable: 'Supervisión Demo', estado: 'Completado' },
    { fecha: '04/08/2026 14:05', tipo: 'Alerta', descripcion: 'Temperatura fuera de rango en reactor R-03 (demo Atlas)', referencia: 'ALR-003', responsable: 'Sistema Atlas', estado: 'Alerta' }
  ]
};

function deepClone(obj){ return JSON.parse(JSON.stringify(obj)); }
function getSeed(){ return deepClone(ATLAS_SEED); }
if(typeof window!=='undefined'){ window.ATLAS_SEED=ATLAS_SEED; window.getAtlasSeed=getSeed; }
