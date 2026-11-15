import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight, BarChart3, Check, Droplets, ExternalLink, Gauge, Menu, X } from 'lucide-react'
import SectionHeading from './components/SectionHeading'
import { navItems, project } from './data/project'
import ProjectSection from './sections/ProjectSection'
import SensorsSection from './sections/SensorsSection'
import ArchitectureSection from './sections/ArchitectureSection'
import DataSection from './sections/DataSection'
import EtlSection from './sections/EtlSection'
import KnowledgeSection from './sections/KnowledgeSection'
import DecisionsSection from './sections/DecisionsSection'
import MethodologySection from './sections/MethodologySection'
import ResultsSection from './sections/ResultsSection'
import ReferencesSection from './sections/ReferencesSection'

const powerBiUrl = import.meta.env.VITE_POWERBI_EMBED_URL?.trim()
const number = new Intl.NumberFormat('es-CO')

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const [powerBiLoading, setPowerBiLoading] = useState(Boolean(powerBiUrl))
  const [powerBiError, setPowerBiError] = useState(false)
  useEffect(() => {
    if (!powerBiUrl) return
    const timer = window.setTimeout(() => { setPowerBiLoading(false); setPowerBiError(true) }, 15000)
    return () => window.clearTimeout(timer)
  }, [])
  const jump = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setActive(id); setMenuOpen(false) }

  return <div className="app-shell">
    <a className="skip-link" href="#inicio">Saltar al contenido</a>
    <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <a className="brand" href="#inicio" onClick={() => jump('inicio')}><span className="brand-mark"><Droplets size={20} /></span><span>smart<span>chia</span><small>PROYECTO ACADÉMICO</small></span></a>
      <div className="nav-label">EXPLORAR PROYECTO</div>
      <nav>{navItems.map(([id, label], i) => <a key={id} href={`#${id}`} className={active === id ? 'selected' : ''} onClick={e => { e.preventDefault(); jump(id) }}><span className="nav-index">{String(i + 1).padStart(2, '0')}</span>{label}</a>)}</nav>
      <div className="sidebar-bottom"><div className="live-dot" /> Documentación académica <span>2026</span></div>
    </aside>
    <main>
      <header className="topbar"><button className="menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button><div className="crumb">PORTAL DE INVESTIGACIÓN <span>/</span> SMARTCHIA</div><a className="top-link" href="#dashboard" onClick={e => { e.preventDefault(); jump('dashboard') }}>Ver dashboard <ArrowUpRight size={15} /></a></header>
      <section id="inicio" className="hero">
        <div className="hero-grid"><div className="hero-copy"><div className="pill"><span className="pill-dot" /> PROYECTO DE GESTIÓN DEL CONOCIMIENTO</div><h1>Datos que ayudan<br />a comprender <em>el agua.</em></h1><p className="hero-lead">Sensores, datos y análisis para comprender mejor las variables relacionadas con el agua.</p><p className="hero-desc">Un proyecto de Ciudad Inteligente que organiza mediciones de sensores para consultarlas y analizarlas con contexto.</p><div className="hero-actions"><button className="button button-light" onClick={() => jump('proyecto')}>Explorar el proyecto <ArrowRight size={16} /></button><button className="button button-ghost" onClick={() => jump('dashboard')}><BarChart3 size={16} /> Consultar dashboard</button></div><div className="hero-meta"><span><span className="status-mark" /> Proyecto académico</span><span>Universidad de Cundinamarca · Extensión Chía</span></div></div>
          <div className="hero-art" aria-label="Ejemplo simulado de dos vasos llenándose; uno muestra una alerta visual de turbidez alta, sin indicar potabilidad"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-glow"/><div className="glass-demo"><div className="glass-item"><div className="glass-label">SENSOR · TURBIDEZ <span>LECTURA DE EJEMPLO</span></div><div className="water-glass"><div className="glass-water water-clear"/><span className="glass-reading">REFERENCIA</span></div><div className="glass-status status-ok"><i/>SEÑAL ESTABLE</div></div><div className="glass-item"><div className="glass-label sensor-alert-label">SENSOR · SÓLIDOS (TDS) <span>ALERTA SIMULADA</span></div><div className="water-glass glass-alert"><div className="glass-water water-alert"/><span className="glass-reading">TDS ALTO</span></div><div className="glass-status status-alert"><i/>ALERTA DE EJEMPLO</div></div></div><div className="glass-response"><b>RESPUESTA ILUSTRATIVA</b><p>Confirmar la muestra. Si se verifica TDS alto, evaluar un tratamiento específico como ósmosis inversa y volver a medir.</p><small>El TDS por sí solo no confirma potabilidad.</small></div><div className="art-caption">EJEMPLO SIMULADO · NO INDICA POTABILIDAD</div></div>
        </div>
        <div className="hero-stats"><div><span>REGISTROS DOCUMENTADOS</span><strong>{number.format(project.total)}</strong><small>tabla dbo.Mediciones</small></div><div><span>DE ORIGEN REAL</span><strong>{number.format(project.real)}</strong><small>0,1165% del total</small></div><div><span>TIPOS DE SENSORES</span><strong>04</strong><small>funciones diferenciadas</small></div><div><span>PERÍODO OBSERVADO</span><strong>27 días</strong><small>{project.start} — {project.end}</small></div></div>
      </section>

      <ProjectSection />

      <SensorsSection />

      <ArchitectureSection />

      <DataSection />

      <EtlSection />

      <section id="dashboard" className="section section-dashboard"><SectionHeading eyebrow="06 / EXPLORACIÓN ANALÍTICA" title="Dashboard de análisis\nde SmartChia." text="Aquí se reúnen los indicadores y las preguntas de análisis de SmartChia."/><div className="dashboard-frame">{powerBiUrl ? <><iframe title="Dashboard de análisis SmartChia en Power BI" src={powerBiUrl} allowFullScreen onLoad={() => { setPowerBiLoading(false); setPowerBiError(false) }} onError={() => { setPowerBiLoading(false); setPowerBiError(true) }}/>{powerBiLoading && !powerBiError && <div className="embed-status"><span className="spinner"/><b>Cargando informe de Power BI…</b></div>}{powerBiError && <div className="embed-status embed-error"><b>Aún no se ha logrado establecer conexión con Power BI.</b><p>Cuando se vincule la URL autorizada del informe, se mostrará aquí.</p><a href={powerBiUrl} target="_blank" rel="noreferrer">Abrir el informe en otra pestaña <ExternalLink size={14}/></a></div>}</> : <div className="dashboard-empty"><div className="empty-orbit"><BarChart3 size={35}/></div><span className="eyebrow">INFORME INTERACTIVO</span><h3>El informe de SmartChia aparecerá aquí</h3><p>Aún no se ha logrado establecer conexión con Power BI. Al vincular la dirección autorizada del informe, podrás consultarlo desde este espacio.</p><div className="empty-checklist"><span><Check/>Mediciones por fecha</span><span><Check/>Filtros por sensor y dispositivo</span><span><Check/>Comparación por procedencia</span></div></div>}</div><div className="dashboard-spec"><div className="spec-heading"><Gauge size={18}/><b>ANÁLISIS DEL PROYECTO</b></div><div className="spec-columns"><div><span>05 KPI</span><p>Total de mediciones · reales · simuladas · % real · categorías de sensor.</p></div><div><span>03 UNIVARIADOS</span><p>Distribución por sensor · evolución temporal · procedencia.</p></div><div><span>03 BIVARIADOS</span><p>Sensor × cantidad · fecha × cantidad · procedencia × cantidad.</p></div><div><span>01 MULTIVARIADO</span><p>Fecha + tipo de sensor + dispositivo.</p></div><div><span>FILTROS</span><p>Fecha · sensor · dispositivo · tipo de registro · origen.</p></div></div><div className="dashboard-caveat">Al conectar el informe y sus datos, podrás explorar estas métricas, comparaciones y filtros.</div></div></section>

      <KnowledgeSection />

      <DecisionsSection />

      <MethodologySection />

      <ResultsSection />

      <ReferencesSection />

      <footer><div className="footer-brand"><span className="brand-mark"><Droplets size={18}/></span><span>smart<span>chia</span></span></div><p>Proyecto de Gestión del Conocimiento · Ciudad Inteligente</p><p>Universidad de Cundinamarca · Extensión Chía</p><a href="#inicio" onClick={e => { e.preventDefault(); jump('inicio') }}>Volver al inicio ↑</a><div className="footer-line">DOCUMENTACIÓN DEL PROYECTO · {project.start.toUpperCase()} — {project.end.toUpperCase()}</div></footer>
    </main>
  </div>
}

export default App
