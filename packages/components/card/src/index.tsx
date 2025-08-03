import './card.css';

export interface CardProps {
  cn: string;
  label: string;
}

export function Card(props: CardProps) {
  return (
    <div className="mx-auto flex flex-col max-w-sm gap-x-4 p-8 sm:flex-row sm:items-center sm:gap-6 sm:py-4 bg-amber-400">
      <h2 className="text-2xl font-medium text-gray-900 dark:text-white">Header 2</h2>
      <p className="text-gray-600 dark:text-gray-300">{props.label}</p>
    </div>
  );
}
