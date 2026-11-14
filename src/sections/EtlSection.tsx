import { ArrowDown, Link2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const steps = [
  ['01', 'Extract', 'Extracción', 'Tomar las mediciones desde dbo.Mediciones.', 'Fuente identificada'],
  ['02', 'Transform', 'Preparación', 'Revisar la estructura y preparar los datos para el análisis.', 'Conexión OLE DB configurada'],
  ['03', 'Load', 'Carga', 'Llevar las mediciones al esquema dw para consultarlas por fecha, sensor y dispositivo.', 'Conexión en preparación'],
]

export default function EtlSection() {
  return <section id="etl" className="section section-white">
    <SectionHeading eyebrow="05 / INTEGRACIÓN DE DATOS" title="Del registro al análisis." text="El flujo ETL conecta las mediciones de la base operacional con el modelo analítico de SmartChia."/>
    <div className="etl-steps">{steps.map(([number, name, label, description, status], i) => <article className="etl-step" key={number}><div className="etl-number">{number}</div><div className="etl-copy"><span>ETAPA {number}</span><h3>{name}</h3><h4>{label}</h4><p>{description}</p><small className={i === 2 ? 'pending' : ''}>{status}</small></div><ArrowDown className="etl-arrow" aria-hidden="true"/></article>)}</div>
    <div className="etl-footer"><div><b>Herramientas del proyecto</b><p>SQL Server · SQL Server Management Studio · Visual Studio 2022 · SQL Server Integration Services (SSIS)</p></div><div className="connection-note"><Link2 size={19}/><p>La conexión inicial con smartchia1 ya está configurada. Estamos preparando el enlace con el esquema dw para que las mediciones puedan consultarse en el análisis.</p></div></div>
  </section>
}
