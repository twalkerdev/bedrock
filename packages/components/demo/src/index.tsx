import "@tmp/design/css";

export interface DemoProps {
  cn: string;
	label: string;
}

export function Demo(props: DemoProps) {
  return (
    <div className={props.cn || 'default'}>
      <h1>{props.label}</h1>
    </div>
  )
}
