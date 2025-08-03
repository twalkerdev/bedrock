import './index.css';
// example component here:
// https://github.com/mui/material-ui/blob/master/packages/mui-joy/src/Card/Card.tsx
interface InputPropTypes {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholderText: string;
  onselect: () => void;
  inputType: string;
}
function Input(props: InputPropTypes) {
  return (
    <div className="w-md h--5 sm-mw-100 ">
      <input {...props} />;
    </div>
  );
}

export default Input;
