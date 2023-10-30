
type Props = {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
}

export function Button({type = 'button', children}: Props) {
  return (
    <button type={type} className="py-2 px-4 rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-200">
      {children}
    </button>
  )
}