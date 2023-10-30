
type Props = {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

export function Button({type = 'button', children}: Props) {
  return (
    <button type={type} className="">
      {children}
    </button>
  )
}