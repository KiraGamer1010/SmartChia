import { Activity, ArrowRight, BarChart3, Database, GitBranch, Layers3, Radio } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const stages = [
  { icon: Radio, title: 'Sensores', detail: 'Cuatro categorías', status: 'Origen de datos', kind: 'known' },
  { icon: Activity, title: 'Lecturas', detail: 'Mediciones y eventos', status: 'Registro temporal', kind: 'flow' },
  { icon: Database, title: 'smartchia1', detail: 'Microsoft SQL Azure', status: 'Base operacional', kind: 'known' },
  { icon: GitBranch, title: 'Integración ETL', detail: 'SSIS · conexión OLE DB', status: 'Conexión en preparación', kind: 'connection' },
  { icon: Layers3, title: 'Esquema dw', detail: 'Hechos y dimensiones', status: 'Modelo analítico', kind: 'known' },
  { icon: BarChart3, title: 'Power BI', detail: 'Análisis interactivo', status: 'Listo para conectar', kind: 'connection' },
]

export default function ArchitectureSection() {
  return <section id="arquitectura" className="section section-navy">
    <SectionHeading eyebrow="03 / FLUJO DEL SISTEMA" title="De las lecturas al análisis." text="El flujo muestra cómo se organizan las mediciones y cómo pueden explorarse por fecha, sensor y dispositivo."/>
    <div className="legend"><span><i className="legend-solid"/> Elementos descritos en el proyecto</span><span><i className="legend-dashed"/> Conexiones para el análisis</span></div>
    <div className="architecture-flow">{stages.map(({ icon: Icon, title, detail, status, kind }, i) => <div className="flow-segment" key={title}><div className={`flow-node ${kind === 'connection' ? 'proposed-node' : ''}`}><Icon/><span className="flow-index">0{i + 1}</span><b>{title}</b><small>{detail}</small><em className={kind === 'connection' ? 'proposed' : ''}>{status}</em></div>{i < stages.length - 1 && <ArrowRight className="flow-arrow" aria-hidden="true"/>}</div>)}</div>
    <div className="architecture-bottom"><div><span className="eyebrow">CÓMO SE RELACIONAN LAS ETAPAS</span><p>Las lecturas se organizan en la base operacional. La integración ETL enlaza esa información con el modelo dimensional; desde allí, Power BI podrá ofrecer consultas y comparaciones.</p></div><div className="status-box"><span className="status-icon"><GitBranch size={19}/></span><div><b>Conexión de datos</b><p>El proyecto cuenta con una conexión OLE DB de partida. Al enlazar y validar el flujo completo, el Data Warehouse podrá recibir las mediciones.</p></div></div></div>
  </section>
}
