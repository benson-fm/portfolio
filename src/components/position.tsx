interface PositionProps {
  title: string;
  company: string;
  time: string;
  description: string;
  facts: string[];
}

const Position: React.FC<PositionProps> = ({
  title,
  company,
  time,
  description,
  facts,
}) => {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="flex items-center gap-2 text-muted-foreground">
        <span>{company}</span>
        <span>•</span>
        <span>{time}</span>
      </div>
      <p className="text-muted-foreground">{description}</p>
      <ul className="grid gap-2 text-muted-foreground list-disc pl-4">
        {facts.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default Position;
