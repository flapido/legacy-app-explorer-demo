/**
 * Atlas Operations — Legacy → Web Demo
 * Aplicación única página con modo legacy ↔ web, toggle, datos 100% ficticios.
 * Estado en memoria, sin DB, sin persistencia durable, refresh = Reset.
 */

// --- Datos semilla ficticios (Atlas Operations) ---
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
    { tipo: 'OF', numero: '00045790', producto: 'Carcasa Bomba CB-200', codigoProducto: 'AT-CB200-004', descripcion: 'Carcasa Atlas Operations', cantidad: 100, estado: 'Activa', etapa: 'En producción', progreso: 25, fechaEntrega: '15/06/2025', creada: '08/05/2025 08:45', criadaPor: 'atlas.admin' },
    { tipo: 'OFI', numero: '00012005', producto: 'Pieza Prototipo Atlas P-01', codigoProducto: 'AT-PRT-001', descripcion: 'Prototipo interno validación', cantidad: 10, estado: 'Activa', etapa: 'Planificada', progreso: 10, fechaEntrega: '20/06/2025', creada: '01/05/2025 14:00', criadaPor: 'atlas.sup01' },
    { tipo: 'OE', numero: '00088001', producto: 'Kit Ensamble Atlas K-10', codigoProducto: 'AT-KIT-001', descripcion: 'Kit ensamble demostrativo', cantidad: 30, estado: 'Activa', etapa: 'En producción', progreso: 70, fechaEntrega: '10/06/2025', criada: '20/05/2025 16:30', criadaPor: 'atlas.op02' },
    { tipo: 'OF', numero: '00045650', producto: 'Válvula Demo V-100', codigoProducto: 'AT-V100-005', descripcion: 'Válvula serie demo', cantidad: 75, estado: 'Cerrada', etapa: 'Finalizada', progreso: 100, fechaEntrega: '01/05/2025', criada: '10/04/2025 09:00', criadaPor: 'atlas.admin' },
    { tipo: 'OF', numero: '00045680', producto: 'Eje Transmisión ET-300', codigoProducto: 'AT-ET300-006', descripcion: 'Eje transmisión industrial', cantidad: 120, estado: 'Activa', etapa: 'En producción', progreso: 55, fechaEntrega: '25/06/2025', criada: '18/05/2025 07:15', criadaPor: 'atlas.op01' }
  ],
  operacionesAbiertas: [
    { id: 'op-001', tipo: 'OF', ordenF: '00045821', proceso: 'CNC Mecanizado', procesoCodigo: 'P01', nroOperacion: 10, operario: 'atlas.demo', operarioNombre: 'Operario Demo Atlas', fechaApertura: '05/08/2026', horaApertura: '08:30', maquina: null, producto: 'MÓDULO HIDRÁULICO MH-250' },
    { id: 'op-002', tipo: 'OF', ordenF: '00045830', proceso: 'Taladrado Precisión', procesoCodigo: 'P02', nroOperacion: 20, operario: 'atlas.op01', operarioNombre: 'Operaria Demo 01', fechaApertura: '20/05/2025', horaApertura: '07:45', maquina: null, producto: 'Conjunto Válvula VX-100' },
    { id: 'op-003', tipo: 'OF', ordenF: '00045790', proceso: 'Fresado CNC', procesoCodigo: 'P07', nroOperacion: 20, operario: 'atlas.op02', operarioNombre: 'Operario Demo 02', fechaApertura: '04/08/2026', horaApertura: '22:10', maquina: null, producto: 'Carcasa Bomba CB-200' }
  ],
  historial: [
    { id: 'hist-001', fecha: '04/08/2026', hora: '16:30', tipo: 'Producción', ordenF: 'OF-00045821', proceso: 'Mezclado reactor R-03', operario: 'atlas.sup01', maquina: 'RX-03', aprobada: 125, rechazada: 0, unidad: 'un', duracion: '4h 15m', descripcion: 'Mezclado estándar lote demo Atlas', auditoria: [ { ts: '04/08/2026 12:00', actor: 'Sistema Atlas', detalle: 'Programó operación' }, { ts: '04/08/2026 12:15', actor: 'atlas.sup01', detalle: 'Asignó operario' }, { ts: '04/08/2026 12:20', actor: 'atlas.op01', detalle: 'Inició ejecución' }, { ts: '04/08/2026 16:25', actor: 'atlas.op01', detalle: 'Registró resultado' }, { ts: '04/08/2026 16:30', actor: 'atlas.sup01', detalle: 'Aprobó la operación' } ] },
    { id: 'hist-002', fecha: '03/08/2026', hora: '11:45', tipo: 'Producción', ordenF: 'OF-00045830', proceso: 'CNC Mecanizado', operario: 'atlas.op01', maquina: 'CM-01', aprobada: 48, rechazada: 2, unidad: 'un', duracion: '3h 30m', descripcion: 'Mecanizado carcasa Atlas' },
    { id: 'hist-003', fecha: '02/08/2026', hora: '09:20', tipo: 'Producción', ordenF: 'OF-00045812', proceso: 'Anodizado Superficial', operario: 'atlas.op02', maquina: 'AN-01', aprobada: 100, rechazada: 0, unidad: 'un', duracion: '2h 00m', descripcion: 'Tratamiento superficial Atlas' },
    { id: 'hist-004', fecha: '01/08/2026', hora: '15:10', tipo: 'Producción', ordenF: 'OF-00088001', proceso: 'Armado Modular', operario: 'atlas.demo', maquina: 'ARM-01', aprobada: 30, rechazada: 1, unidad: 'un', duracion: '5h 45m', descripcion: 'Armado kit Atlas' },
    { id: 'hist-005', fecha: '31/07/2026', hora: '08:00', tipo: 'Producción', ordenF: 'OF-00012005', proceso: 'Recepción de Material', operario: 'atlas.op01', maquina: '—', aprobada: 500, rechazada: 0, unidad: 'kg', duracion: '1h 15m', descripcion: 'Recepción material demo Atlas' }
  ],
  actividadReciente: [
    { fecha: '05/08/2026 10:15', tipo: 'Inicio', descripcion: 'Operación iniciada', referencia: 'OP-2026-0101', responsable: 'Operario Demo Atlas', estado: 'En curso' },
    { fecha: '05/08/2026 09:40', tipo: 'Orden', descripcion: 'Orden asignada a producción', referencia: 'OF-00045821', responsable: 'Supervisión Demo', estado: 'En proceso' },
    { fecha: '04/08/2026 22:10', tipo: 'Cierre pendiente', descripcion: 'Operación abierta > 8 horas', referencia: 'OP-2026-0098', responsable: 'Operario Demo 02', estado: 'Pendiente' },
    { fecha: '04/08/2026 16:30', tipo: 'Cierre', descripcion: 'Operación cerrada correctamente', referencia: 'OP-00045821', responsable: 'Supervisión Demo', estado: 'Completado' },
    { fecha: '04/08/2026 14:05', tipo: 'Alerta', descripcion: 'Temperatura fuera de rango en reactor R-03 (demo Atlas)', referencia: 'ALR-003', responsable: 'Sistema Atlas', estado: 'Alerta' }
  ]
};

function deepClone(o){ return JSON.parse(JSON.stringify(o)); }
function initialState(){ return deepClone(ATLAS_SEED); }
let STATE = initialState();
let MODE = 'web'; // 'legacy' | 'web'
let LAST_REVIEW = null;

// --- Helpers DOM ---
function qs(s, root=document){ return root.querySelector(s); }
function qsa(s, root=document){ return root.querySelectorAll(s); }
function ce(tag,props={}){ const el=document.createElement(tag); Object.assign(el,props); return el; }
function attr(el,k,v){ el.setAttribute(k,v); }
function rem(el){ el.parentNode.removeChild(el); }
function toggleClass(el,c){ el.classList.toggle(c); }
function hasClass(el,c){ return el.classList.contains(c); }
function addEvent(el,type,fn){ el.addEventListener(type,fn); }
function text(el,v){ el.textContent=v; }
function html(el,v){ el.innerHTML=v; }
function setProp(el,k,v){ el[k]=v; }
function removeAllChildren(el){ while(el.firstChild)el.removeChild(el.firstChild); }
function findParentByClass(el,c){ let cEl=el; while(cEl&&!cEl.classList.contains(c))cEl=cEl.parentElement; return cEl||null; }
function toggleId(id){ const e=document.getElementById(id); if(e){ hasClass(e,'hidden')?e.classList.remove('hidden'):e.classList.add('hidden'); } }

// --- Persistencia en memoria (refresh=Reset) ---
function resetState(){ STATE=initialState(); }
window.addEventListener('beforeunload',()=>{ resetState(); });

function renderStats(){
  const abiertas=STATE.operacionesAbiertas.length;
  const enProceso=STATE.ordenes.filter(o=>o.estado==='Activa').length;
  const alertas=STATE.actividadReciente.filter(a=>a.estado==='Alerta').length;
  html(qs('#kpi-abiertas'),abiertas);
  html(qs('#kpi-proceso'),enProceso);
  html(qs('#kpi-alertas'),alertas);
}

// --- UI Utils ---
function showToast(msg,type='info'){
  const container=qs('#toast-container'); if(!container)return;
  const t=ce('div',{'class':`toast toast-${type}`,role:'status','aria-live':'polite'});
  t.textContent=msg; container.appendChild(t); t.classList.add('show');
  setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=>t.remove(),300); },2400);
}

function renderNav(){
  const sidebar=qs('.sidebar'); if(!sidebar)return;
  const navItems=qsa('.nav-item'); navItems.forEach(n=>n.classList.remove('active'));
  const active=qs(`.nav-item[data-route="${STATE.session?.'role':null}`)||qs('.nav-item[data-route="dashboard"]'); if(active)active.classList.add('active');
}

// --- Renderers ---
function renderLegacyPane(){
  const pane=qs('.pane-body.legacy-bg'); if(!pane){ return; }
  const t=STATE.tipos.map((t,i)=>`<div class="vb-field"><label>${t.codigo}</label><input class="vb-input" value="${t.codigo}" readonly></div>`).join('');
  const p=STATE.procesos.map((p,i)=>`<div class="vb-field"><label>${p.codigo}</label><input class="vb-input" value="${p.codigo}" readonly></div>`).join('');
  const m=STATE.maquinas.map((m,i)=>`<div class="vb-field"><label>${m.codigo}</label><input class="vb-input" value="${m.codigo}" readonly></div>`).join('');
  html(pane,`<div class="vb-window"><div class="vb-title"><span>Sistema Atlas</span><div class="vb-btns"><span></span><span></span><span></span></div></div><div class="vb-body">${t}${p}${m}</div></div>`);
}

function renderWebPane(){
  const pane=qs('.pane-body.web-bg'); if(!pane){ return; }
  const tiposHTML=STATE.tipos.map(t=>`<option value="${t.codigo}">${t.codigo}</option>`).join('');
  const procesosHTML=STATE.procesos.map(p=>`<option value="${p.codigo}">${p.descripcion}</option>`).join('');
  const maquinasHTML=STATE.maquinas.map(m=>`<option value="${m.codigo}">${m.descripcion}</option>`).join('');
  html(pane,`<div class="web-preview"><div class="web-preview-head"><b>Atlas Operations — Web (Modo Moderno)</b><button class="btn btn-icon" id="closeWebPreview" aria-label="Cerrar">&times;</button></div><div class="web-preview-body"><form id="form-demo" class="form-grid"><div class="form-group"><label>Tipo orden</label><select class="form-input" id="w-tipo">${tiposHTML}</select></div><div class="form-group"><label>Orden F</label><input class="form-input" id="w-orden" placeholder="00045821" required></div><div class="form-group full"><label>Descripción</label><input class="form-input" readonly value="Cuerpo fundición ligera"></div><div class="form-group"><label>Proceso</label><select class="form-input" id="w-proceso">${procesosHTML}</select></div><div class="form-group"><label>Nro Operación</label><input class="form-input" id="w-nro" value="10" min="1" required></div><div class="form-group"><label>Máquina</label><select class="form-input" id="w-maquina">${maquinasHTML}</select></div><div class="form-actions"><button type="submit" class="btn btn-primary">Confirmar</button><button type="button" class="btn btn-outline" data-go="dashboard">Cancelar</button></div></form></div></div>`);
  addEvent(qs('#form-demo'),'submit',e=>{
    e.preventDefault(); showToast('Operación guardada (modo Web)', 'success');
  });
  addEvent(qs('#closeWebPreview'),'click',()=>{ toggleClass(qs('.pane-body.web-bg'),'hidden'); });
}

// --- Main render ---
function render(){
  toggleClass(qs('.pane-body.web-bg'),'hidden',MODE==='legacy');
  toggleClass(qs('.pane-body.legacy-bg'),'hidden',MODE==='web');
  renderStats();
  renderNav();
  if(MODE==='legacy') renderLegacyPane();
  if(MODE==='web') renderWebPane();
}

// --- Init ---
document.addEventListener('DOMContentLoaded',()=>{
  // Mode switch
  const modeSwitch=qs('.mode-switch'); if(modeSwitch){
    addEvent(modeSwitch.querySelectorAll('button'),'click',e=>{
      const btn= e.target.closest('button');
      MODE=btn.dataset.mode==='legacy'?'legacy':'web';
      document.querySelectorAll('.mode-switch button').forEach(b=>toggleClass(b,'active',b===btn));
      render();
    });
    // set initial active
    const initBtn=modeSwitch.querySelector(`button[data-mode="${MODE}"]`);
    if(initBtn)toggleClass(initBtn,'active',true);
  }
  
  // Slider
  const slider=qs('.slider-handle'); if(slider){
    addEvent(slider,'mousedown',e=>{
      const wrap=slider.closest('.slider-wrap');
      const startX=e.clientX;
      const startLeft=parseFloat(getComputedStyle(slider).left)||0;
      function move(ev){
        const dx=ev.clientX-startX;
        let newLeft=Math.max(0,Math.min(100,startLeft+dx));
        slider.style.left=`${newLeft}%`;
      }
      function up(){ removeEvent(document,'mousemove',move); removeEvent(document,'mouseup',up); }
      addEvent(document,'mousemove',move); addEvent(document,'mouseup',up);
    });
  }
  
  // Compare grid collapse
  addEvent(qs('.flow-chips .chip'),'click',e=>{
    const chip=e.target.closest('.chip');
    if(!chip)return;
    qsa('.flow-chips .chip').forEach(c=>toggleClass(c,'active',c===chip));
    const active=qs('.flow-chips .chip.active');
    if(active)toggleClass(qs('.compare-grid'),'two-col',active.dataset.col==='2');
  });
  
  render();
});

// Export for tests
if(typeof window!=='undefined'){ window.ATLAS_DEMO={STATE, MODE, resetState, render, showToast}; }