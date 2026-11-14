import { Database, Sparkles } from 'lucide-react'
import { project } from '../data/project'
import SectionHeading from '../components/SectionHeading'

const number = new Intl.NumberFormat('es-CO')
const realPct = (project.real / project.total * 100).toFixed(4).replace('.', ',')
const simulatedPct = (project.simulated / project.total * 100).toFixed(4).replace('.', ',')

function RelationalDiagram() {
  return <div className="schema-scroll"><svg className="schema-svg relational-svg" viewBox="0 0 660 300" role="img" aria-labelledby="rel-title rel-desc">
    <title id="rel-title">Modelo relacional de SmartChia</title>
    <desc id="rel-desc">Dispositivos y tipos de sensor se relacionan con sensores; las mediciones se relacionan con sensores. También se muestran las lecturas originales.</desc>
    <defs><marker id="rel-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#13a99c"/></marker></defs>
    <path className="schema-edge" markerEnd="url(#rel-arrow)" d="M194 59 H215 V127 H239"/>
    <path className="schema-edge" markerEnd="url(#rel-arrow)" d="M194 239 H215 V173 H239"/>
    <path className="schema-edge" markerEnd="url(#rel-arrow)" d="M421 150 H454"/>
    <g className="schema-node" transform="translate(12 28)"><rect width="182" height="62" rx="9"/><rect className="schema-accent" width="4" height="62" rx="2"/><text className="schema-node-title" x="16" y="27">dbo.Dispositivos</text><text className="schema-node-sub" x="16" y="45">Información de dispositivos</text></g>
    <g className="schema-node" transform="translate(12 208)"><rect width="182" height="62" rx="9"/><rect className="schema-accent" width="4" height="62" rx="2"/><text className="schema-node-title" x="16" y="27">dbo.TiposSensor</text><text className="schema-node-sub" x="16" y="45">Categorías y unidades</text></g>
    <g className="schema-node" transform="translate(239 119)"><rect width="182" height="62" rx="9"/><rect className="schema-accent" width="4" height="62" rx="2"/><text className="schema-node-title" x="16" y="27">dbo.Sensores</text><text className="schema-node-sub" x="16" y="45">Sensor asociado a dispositivo y tipo</text></g>
    <g className="schema-node" transform="translate(454 119)"><rect width="194" height="62" rx="9"/><rect className="schema-accent" width="4" height="62" rx="2"/><text className="schema-node-title" x="16" y="27">dbo.Mediciones</text><text className="schema-node-sub" x="16" y="45">Registros de medición</text></g>
    <g className="schema-node schema-node-soft" transform="translate(454 208)"><rect width="194" height="62" rx="9"/><rect className="schema-accent" width="4" height="62" rx="2"/><text className="schema-node-title" x="16" y="27">dbo.SmartChiaLecturas</text><text className="schema-node-sub" x="16" y="45">Lecturas originales del módulo</text></g>
  </svg></div>
}

function DimensionalDiagram() {
  return <div className="schema-scroll"><svg className="schema-svg dimensional-svg" viewBox="0 0 680 250" role="img" aria-labelledby="star-title star-desc">
    <title id="star-title">Esquema estrella de SmartChia</title>
    <desc id="star-desc">FactMediciones se relaciona con las dimensiones fecha, sensor y dispositivo.</desc>
    <defs><marker id="star-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" fill="#69bdb3"/></marker></defs>
    <path className="star-edge" markerEnd="url(#star-arrow)" d="M340 70 V94"/>
    <path className="star-edge" markerEnd="url(#star-arrow)" d="M192 146 H240"/>
    <path className="star-edge" markerEnd="url(#star-arrow)" d="M488 146 H440"/>
    <text className="schema-edge-label" x="350" y="87">FechaKey</text>
    <text className="schema-edge-label" x="193" y="137">SensorKey</text>
    <text className="schema-edge-label" x="442" y="137">DispositivoKey</text>
    <g className="schema-node schema-dimension" transform="translate(250 8)"><rect width="180" height="62" rx="9"/><rect className="schema-accent" width="4" height="62" rx="2"/><text className="schema-node-title" x="16" y="27">dw.DimFecha</text><text className="schema-node-sub" x="16" y="45">FechaKey · atributos temporales</text></g>
    <g className="schema-node schema-dimension" transform="translate(12 115)"><rect width="180" height="62" rx="9"/><rect className="schema-accent" width="4" height="62" rx="2"/><text className="schema-node-title" x="16" y="27">dw.DimSensor</text><text className="schema-node-sub" x="16" y="45">SensorKey · tipo de sensor</text></g>
    <g className="fact-node" transform="translate(240 94)"><rect width="200" height="104" rx="11"/><text className="fact-kicker" x="18" y="24">TABLA DE HECHOS</text><text className="fact-title" x="18" y="48">dw.FactMediciones</text><text className="fact-sub" x="18" y="70">IdMedicion · Cantidad</text><text className="fact-sub" x="18" y="86">FechaKey · SensorKey · DispositivoKey</text></g>
    <g className="schema-node schema-dimension" transform="translate(488 115)"><rect width="180" height="62" rx="9"/><rect className="schema-accent" width="4" height="62" rx="2"/><text className="schema-node-title" x="16" y="27">dw.DimDispositivo</text><text className="schema-node-sub" x="16" y="45">DispositivoKey</text></g>
  </svg></div>
}

export default function DataSection() {
  return <section id="datos" className="section section-paper">
    <SectionHeading eyebrow="04 / INGENIERÍA DE DATOS" title="Los datos, con su contexto." text="SmartChia organiza la información en una base operacional y un modelo analítico. Los diagramas ofrecen una vista clara de las tablas y relaciones del proyecto."/>
    <div className="data-tools"><div><span className="tool-label">ALMACENAMIENTO OPERACIONAL</span><h3>smartchia1</h3><p>Microsoft SQL Azure · SQL Server Management Studio · Visual Studio 2022</p></div><div className="tool-badge"><Database/><span>SQL<br/>AZURE</span></div></div>
    <div className="model-grid">
      <div className="model-panel"><div className="panel-title"><span>MODELO RELACIONAL</span><span className="tiny-tag">OPERACIONAL</span></div><RelationalDiagram/><p className="panel-foot">Vista general de las entidades y relaciones descritas para SmartChia.</p></div>
      <div className="model-panel"><div className="panel-title"><span>MODELO DIMENSIONAL</span><span className="tiny-tag teal">ESQUEMA ESTRELLA</span></div><DimensionalDiagram/><div className="grain-note"><span>GRANULARIDAD</span><b>Una fila por medición individual</b><small>1.501.749 filas · 1.501.749 identificadores únicos</small></div></div>
    </div>
    <div className="volume-band"><div><span>MEDICIONES TOTALES</span><strong>{number.format(project.total)}</strong><small>16 oct — 11 nov 2026</small></div><div className="mix-bar"><div className="mix-label"><span>Simuladas <b>{number.format(project.simulated)}</b></span><b>{simulatedPct}%</b></div><div className="bar-track"><i style={{ width: `${simulatedPct}%` }}/></div><div className="mix-label real-label"><span>Reales <b>{number.format(project.real)}</b></span><b>{realPct}%</b></div><div className="bar-track real-track"><i style={{ width: `${realPct}%` }}/></div></div><div className="volume-note"><Sparkles size={17}/><span>Los registros simulados sirven para probar consultas y estructuras; se distinguen de las mediciones reales de campo.</span></div></div>
  </section>
}
