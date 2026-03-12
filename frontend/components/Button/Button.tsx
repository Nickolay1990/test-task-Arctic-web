import css from './Button.module.css'

interface ButtonProps {
  text: string;
  type: 'danger' | 'normal';
}

const Button = ({ text, type}: ButtonProps) => {
  return <button className={`${type === 'danger' ? css.normal : css.danger} ${css.btn}`}>{text}</button>
}

export default Button