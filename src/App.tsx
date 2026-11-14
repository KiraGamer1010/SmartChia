import { useEffect, useState } from 'react'
import { Activity, ArrowRight, ArrowUpRight, BarChart3, Check, Droplets, ExternalLink, Gauge, Menu, Radio, Waves, X } from 'lucide-react'
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
        <div className="hero-grid"><div className="hero-copy"><div className="pill"><span className="pill-dot" /> PROYECTO DE GESTIÓN DEL CONOCIMIENTO</div><h1>Datos que ayudan<br />a comprender <em>el agua.</em></h1><p className="hero-lead">Monitoreo inteligente y análisis de datos para explorar variables del agua y convertir mediciones en conocimiento.</p><p className="hero-desc">SmartChia organiza lecturas de sensores en modelos relacionales y dimensionales. Un proyecto académico de Ciudad Inteligente, desarrollado en Ingeniería de Sistemas y Computación.</p><div className="hero-actions"><button className="button button-light" onClick={() => jump('proyecto')}>Explorar el proyecto <ArrowRight size={16} /></button><button className="button button-ghost" onClick={() => jump('dashboard')}><BarChart3 size={16} /> Consultar dashboard</button></div><div className="hero-meta"><span><span className="status-mark" /> Modelo documentado</span><span>Universidad de Cundinamarca · Extensión Chía</span></div></div>
          <div className="hero-art" aria-label="Ilustración conceptual de gotas de agua y datos"><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-glow"/><div className="art-drop"><Droplets size={92} strokeWidth={1.05}/></div><div className="data-chip chip-a"><Waves size={17}/><span>Turbidez</span><b>NTU</b></div><div className="data-chip chip-b"><Activity size={17}/><span>Lecturas</span><b>1.5M</b></div><div className="data-chip chip-c"><Radio size={17}/><span>Sensores</span><b>04</b></div><div className="art-caption">OBSERVAR <span>→</span> ORGANIZAR <span>→</span> COMPRENDER</div></div>
        </div>
        <div className="hero-stats"><div><span>REGISTROS DOCUMENTADOS</span><strong>{number.format(project.total)}</strong><small>tabla dbo.Mediciones</small></div><div><span>DE ORIGEN REAL</span><strong>{number.format(project.real)}</strong><small>0,1165% del total</small></div><div><span>TIPOS DE SENSORES</span><strong>04</strong><small>funciones diferenciadas</small></div><div><span>PERÍODO OBSERVADO</span><strong>27 días</strong><small>{project.start} — {project.end}</small></div></div>
      </section>

      <ProjectSection />

      <SensorsSection />

      <ArchitectureSection />

      <DataSection />

      <EtlSection />

      <section id="dashboard" className="section section-dashboard"><SectionHeading eyebrow="06 / EXPLORACIÓN ANALÍTICA" title="Dashboard de análisis\nde SmartChia." text="Espacio preparado para integrar el informe Power BI real. Los indicadores mostrados en esta página proceden de las cifras consignadas en los informes del proyecto."/><div className="dashboard-frame">{powerBiUrl ? <><iframe title="Dashboard de análisis SmartChia en Power BI" src={powerBiUrl} allowFullScreen onLoad={() => { setPowerBiLoading(false); setPowerBiError(false) }} onError={() => { setPowerBiLoading(false); setPowerBiError(true) }}/>{powerBiLoading && !powerBiError && <div className="embed-status"><span className="spinner"/><b>Cargando informe de Power BI…</b></div>}{powerBiError && <div className="embed-status embed-error"><b>No se pudo confirmar la carga del informe.</b><p>Revisa la URL, los permisos de Power BI y el inicio de sesión requerido.</p><a href={powerBiUrl} target="_blank" rel="noreferrer">Abrir el informe en otra pestaña <ExternalLink size={14}/></a></div>}</> : <div className="dashboard-empty"><div className="empty-orbit"><BarChart3 size={35}/></div><span className="eyebrow">INFORME INTERACTIVO</span><h3>El dashboard aparecerá aquí.</h3><p>Configura <code>VITE_POWERBI_EMBED_URL</code> con la URL de inserción autorizada del informe real. El sitio no contiene un dashboard simulado.</p><div className="empty-checklist"><span><Check/>URL centralizada por entorno</span><span><Check/>Sin tokens en el frontend</span><span><Check/>Marco adaptable y pantalla completa</span></div></div>}</div><div className="dashboard-spec"><div className="spec-heading"><Gauge size={18}/><b>ANÁLISIS CONTEMPLADOS EN POWER BI</b></div><div className="spec-columns"><div><span>05 KPI</span><p>Total de mediciones · reales · simuladas · % real · categorías de sensor.</p></div><div><span>03 UNIVARIADOS</span><p>Distribución por sensor · evolución temporal · procedencia.</p></div><div><span>03 BIVARIADOS</span><p>Sensor × cantidad · fecha × cantidad · procedencia × cantidad.</p></div><div><span>01 MULTIVARIADO</span><p>Fecha + tipo de sensor + dispositivo.</p></div><div><span>FILTROS</span><p>Fecha · sensor · dispositivo · tipo de registro · origen.</p></div></div><div className="dashboard-caveat">Las distribuciones, tendencias y cruces del dashboard requieren conectar el modelo real. Esta especificación no afirma que las visualizaciones estén calculadas o publicadas.</div></div></section>

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
