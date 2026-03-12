import css from './Button.module.css'

interface ButtonProps {
  text: string;
  type: 'danger' | 'normal';
  onClick?: () => void
}

const Button = ({ text, type, onClick}: ButtonProps) => {
  return <button className={`${type !== 'danger' ? css.normal : css.danger} ${css.btn}`}
  onClick={onClick}>
    {text}
  </button>
}

export default Button