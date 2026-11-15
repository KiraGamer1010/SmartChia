type Props = { eyebrow: string; title: string; text?: string }

export default function SectionHeading({ eyebrow, title, text }: Props) {
  const titleLines = title.split('\\n')

  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{titleLines.map((line, index) => <span key={`${line}-${index}`}>{index > 0 && <br />}{line}</span>)}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}
